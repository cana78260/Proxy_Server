import { Test, TestingModule } from '@nestjs/testing';
import { ProxyServerService } from './proxy-server.service';

describe('ProxyServerService', () => {
  let service: ProxyServerService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProxyServerService],
    }).compile();

    service = module.get<ProxyServerService>(ProxyServerService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
