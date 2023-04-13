import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProxyServerModule } from './proxy-server/proxy-server.module';

@Module({
  imports: [ProxyServerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
