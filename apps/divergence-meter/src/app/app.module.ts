import { Module } from '@nestjs/common';
import { NewsScraperModule } from '../news-scraper/news-scraper.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [NewsScraperModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
