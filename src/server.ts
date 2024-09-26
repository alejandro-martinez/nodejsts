import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

class Server {
  public app:express.Application = express();
  private port:number = 8000;
  private static instance: Server;

  private configureExpress() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan('dev'));
    this.app.use(cors());
  }

  constructor() {
    this.configureExpress();
    this.listen();
    if (Server.instance) {
      return Server.instance;
    }
    Server.instance = this;
    return this;
  }

  public static getInstance(): Server {
    if (!Server.instance) {
      Server.instance = new Server();
    }
    return Server.instance;
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log('Server is running');
    });
  }
}

new Server();