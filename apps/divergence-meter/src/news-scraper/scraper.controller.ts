import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { ScraperService } from './scraper.service';

@Controller('scrape')
export class ScraperController {
  constructor(private readonly scraperService: ScraperService) {}

  @Get('news')
  async getNews(@Query('page') page?: string, @Query('details') details?: string) {
    const p = page ? parseInt(page, 10) : 1;
    return this.scraperService.scrapeNewsFeed(isNaN(p) ? 1 : p, details === '1' || details === 'true');
  }

  @Get('news/all')
  async getAll(@Query('maxPages') maxPages?: string) {
    const limit = maxPages ? parseInt(maxPages, 10) : 50;
    return this.scraperService.scrapeAllNewsFeed(isNaN(limit) ? 50 : limit);
  }

  @Get('article')
  async getArticle(@Query('url') url?: string) {
    if (!url) throw new BadRequestException('Query parameter "url" is required');
    return this.scraperService.scrapeArticle(url);
  }
}
