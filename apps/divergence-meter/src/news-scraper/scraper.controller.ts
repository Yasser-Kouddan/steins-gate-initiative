import { Controller, Get, Query, BadRequestException } from '@nestjs/common';
import { ScraperService } from './scraper.service';
import { ApiTags, ApiOperation, ApiQuery, ApiOkResponse, ApiBadRequestResponse } from '@nestjs/swagger';

@ApiTags('news')
@Controller('scrape')
export class ScraperController {
  constructor(private readonly scraperService: ScraperService) {}

  @Get('news')
  @ApiOperation({ summary: 'Get news feed (page)' })
  @ApiQuery({ name: 'page', required: false, type: Number })
  @ApiQuery({ name: 'details', required: false, type: Boolean, description: 'Include scraped article details' })
  @ApiOkResponse({ description: 'List of news items' })
  async getNews(@Query('page') page?: string, @Query('details') details?: string) {
    const p = page ? parseInt(page, 10) : 1;
    return this.scraperService.scrapeNewsFeed(isNaN(p) ? 1 : p, details === '1' || details === 'true');
  }

  @Get('news/all')
  @ApiOperation({ summary: 'Get all news pages (bounded)' })
  @ApiQuery({ name: 'maxPages', required: false, type: Number })
  @ApiOkResponse({ description: 'Concatenated list of news items from multiple pages' })
  async getAll(@Query('maxPages') maxPages?: string) {
    const limit = maxPages ? parseInt(maxPages, 10) : 50;
    return this.scraperService.scrapeAllNewsFeed(isNaN(limit) ? 50 : limit);
  }

  @Get('article')
  @ApiOperation({ summary: 'Get a single article by URL' })
  @ApiQuery({ name: 'url', required: true, type: String })
  @ApiOkResponse({ description: 'Article details' })
  @ApiBadRequestResponse({ description: 'Missing url query parameter' })
  async getArticle(@Query('url') url?: string) {
    if (!url) throw new BadRequestException('Query parameter "url" is required');
    return this.scraperService.scrapeArticle(url);
  }
}
