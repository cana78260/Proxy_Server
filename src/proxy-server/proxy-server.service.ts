import { Injectable } from '@nestjs/common';
import { CreateProxyServerDto } from './dto/create-proxy-server.dto';
import { UpdateProxyServerDto } from './dto/update-proxy-server.dto';

@Injectable()
export class ProxyServerService {
  create(createProxyServerDto: CreateProxyServerDto) {
    return 'This action adds a new proxyServer';
  }

  // findAll() {
  //   return `This action returns all proxyServer`;
  // }

  findOne(id: number) {
    return `This action returns a #${id} proxyServer`;
  }

  update(id: number, updateProxyServerDto: UpdateProxyServerDto) {
    return `This action updates a #${id} proxyServer`;
  }

  remove(id: number) {
    return `This action removes a #${id} proxyServer`;
  }

  // proxy() {
  //   return 'status ok';
  // }
}
