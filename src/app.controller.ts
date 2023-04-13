import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import * as http from 'http';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('*')
  async proxy(@Req() req, @Res() res) {
    console.log('*********get dans le contrôleur');
    const options = {
      host: req.headers.host,
      path: req.url,
      headers: req.headers,
      method: req.method,
      // port: 80,
    };
    // 1. Le client envoie la requête au proxy
    const proxyReq = http.request(options, (proxyRes) => {
      res.writeHead(proxyRes.statusCode, proxyRes.headers);
      proxyRes.pipe(res, { end: true });
    });

    // const proxyRes=
    //     if(){

    // }
    req.pipe(proxyReq, { end: true });
  }
}
