import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
} from '@nestjs/common';
import { ProxyServerService } from './proxy-server.service';
import { CreateProxyServerDto } from './dto/create-proxy-server.dto';
import { UpdateProxyServerDto } from './dto/update-proxy-server.dto';
import * as http from 'http';

@Controller('proxyServer')
export class ProxyServerController {
  constructor(private readonly proxyServerService: ProxyServerService) {}

  @Post()
  create(@Body() createProxyServerDto: CreateProxyServerDto) {
    return this.proxyServerService.create(createProxyServerDto);
  }

  // @Get()
  // findAll() {
  //   return this.proxyServerService.findAll();
  // }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proxyServerService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateProxyServerDto: UpdateProxyServerDto,
  ) {
    return this.proxyServerService.update(+id, updateProxyServerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.proxyServerService.remove(+id);
  }

  @Get('*')
  async proxy(@Req() req, @Res() res) {
    console.log('*********get dans le contrôleur');
    const options = {
      Host: req.headers.host,
      path: req.url,
      headers: req.headers,
      method: req.method,
      // port: 8080,
    };
    // 1. Le client envoie la requête au proxy
    const proxyReq = http.request(options, (proxyRes) => {
      res.writeHead(proxyRes.statusCode, proxyRes.headers);
      proxyRes.pipe(res, { end: true });
    });

    req.pipe(proxyReq, { end: true });
  }

  @Post('test/proky')
  async postToFacebook(req, res) {
    try {
      const data = {
        /* les données à envoyer */
      };
      const result = await this.postToFacebook(data, res);
      res.send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send('Une erreur est survenue');
    }
  }

  // return this.proxyServerService.findAll();

  // http.request(url[, options][, callback])

  // 2. Le proxy envoie la requête au serveur distant (indiqué par l'en-tête Host)

  // 3. Le proxy reçoit la réponse du serveur distant

  // 4. Le proxy répond au client avec la réponse du serveur distant
}
