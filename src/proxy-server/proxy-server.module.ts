import { Module } from '@nestjs/common';
import { ProxyServerService } from './proxy-server.service';
import { ProxyServerController } from './proxy-server.controller';
import { ProxyServer } from './entities/proxy-server.entity';

@Module({
  imports: [ProxyServer],
  controllers: [ProxyServerController],
  providers: [ProxyServerService],
  exports: [ProxyServerService],
})
export class ProxyServerModule {}
