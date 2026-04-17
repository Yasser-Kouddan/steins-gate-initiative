import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { ScraperService } from './scraper.service';
import { ScraperController } from './scraper.controller';

@Module({
  imports: [HttpModule.register({ timeout: 10000, maxRedirects: 5 })],
  controllers: [ScraperController],
  providers: [ScraperService],
  exports: [ScraperService],
})
export class NewsScraperModule {}
