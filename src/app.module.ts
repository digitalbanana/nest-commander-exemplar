import { Module } from '@nestjs/common';
import { AppCommand } from './app.command';
import { LogService } from './log.service';

@Module({
  providers: [LogService, AppCommand]
})
export class AppModule {}
