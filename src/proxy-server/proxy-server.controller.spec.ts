import { Test, TestingModule } from '@nestjs/testing';
import { ProxyServerController } from './proxy-server.controller';
import { ProxyServerService } from './proxy-server.service';

describe('ProxyServerController', () => {
  let controller: ProxyServerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProxyServerController],
      providers: [ProxyServerService],
    }).compile();

    controller = module.get<ProxyServerController>(ProxyServerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
