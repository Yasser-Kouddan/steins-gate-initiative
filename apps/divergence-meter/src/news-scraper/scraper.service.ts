import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import * as cheerio from 'cheerio';

@Injectable()
export class ScraperService {
  private readonly logger = new Logger(ScraperService.name);
  private readonly base = 'https://home.cern';

  constructor(private readonly httpService: HttpService) {}

  private resolveUrl(href?: string) {
    if (!href) return null;
    try {
      return new URL(href, this.base).toString();
    } catch {
      return href || null;
    }
  }

  async scrapeNewsFeedPage(page = 1): Promise<any[]> {
    const pageIndex = Math.max(0, page - 1);
    const url = `${this.base}/news?title=&topic=1113&type=All&audience=24&tid_3=&date_from=&date_to=&page=${pageIndex}`;
    const { data: html } = await firstValueFrom(this.httpService.get(url));
    const $ = cheerio.load(html);

    const articles: any[] = [];
    $('.preview-list-component').each((_, el) => {
      const $el = $(el);
      const $a = $el.find('.preview-list-title a').first();
      const title = $a.text().trim();
      const hrefRaw = $a.attr('href') || '';
      const href = this.resolveUrl(hrefRaw);
      const summary = $el.find('.preview-list-strap p').text().trim() || null;
      const style = $el.find('.preview-list-image').attr('style') || '';
      const imageMatch = style.match(/url\(['"]?(.*?)['"]?\)/);
      let image = imageMatch?.[1] || null;
      if (image && !image.startsWith('http')) image = this.resolveUrl(image);
      const type = $el.find('.preview-list-news-format').text().trim() || null;
      const topic = $el.find('.preview-list-topic').text().trim() || null;
      const date = $el.find('.preview-list-date').text().trim() || null;

      articles.push({ title, url: href, summary, image, type, topic, date });
    });

    return articles;
  }

  async scrapeNewsFeed(page = 1, includeDetails = false): Promise<any[]> {
    const articles = await this.scrapeNewsFeedPage(page);
    if (!includeDetails) return articles;

    const detailed: any[] = [];
    for (const a of articles) {
      try {
        const details = a.url ? await this.scrapeArticle(a.url) : null;
        detailed.push({ ...a, details });
        await new Promise((r) => setTimeout(r, 200));
      } catch (err) {
        this.logger.warn(`Failed to fetch details for ${a.url}: ${err?.message || err}`);
        detailed.push({ ...a, details: null });
      }
    }

    return detailed;
  }

  async scrapeAllNewsFeed(maxPages = 50): Promise<any[]> {
    const all: any[] = [];
    for (let p = 1; p <= maxPages; p++) {
      const pageArticles = await this.scrapeNewsFeedPage(p);
      if (!pageArticles.length) break;
      all.push(...pageArticles);
      await new Promise((r) => setTimeout(r, 200));
    }
    return all;
  }

  async scrapeArticle(url: string): Promise<any> {
    if (!url) return null;
    const resolved = this.resolveUrl(url);
    const { data: html } = await firstValueFrom(this.httpService.get(resolved));
    const $ = cheerio.load(html);

    const title = $('.news-node-full-content-title').first().text().trim() || null;
    const strap = $('.news-node-full-content-strap').first().text().trim() || null;
    const date = $('.news-node-full-content-created_date time').attr('datetime')
      || $('.news-node-full-content-created_date').text().trim()
      || null;
    const author = $('.news-node-full-content-author a').text().trim() || null;

    const $figure = $('.news-node-full-content-body figure').first();
    let image = $figure.find('img').attr('src') || $figure.find('img').attr('data-src') || null;
    if (image && !image.startsWith('http')) image = this.resolveUrl(image);
    const imageCaption = $figure.find('figcaption').text().trim() || null;

    const bodyHtml = $('.news-node-full-content-body').html() || null;
    const bodyText = $('.news-node-full-content-body').text().trim() || null;

    return { title, strap, date, author, image, imageCaption, bodyHtml, bodyText, url: resolved };
  }
}
