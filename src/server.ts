import express, { Request, Response } from 'express';
import UserService from './UserService';

class Server {
  private app: express.Application;
  private userService: UserService;

  constructor() {
    this.app = express();
    this.userService = new UserService();
    this.setupRoutes();
  }

  private setupRoutes(): void {
    this.app.get('/', (req: Request, res: Response) => {
      res.send('Hello World!');
    });

    this.app.get('/users', (req: Request, res: Response) => {
      const users = this.userService.getAllUsers();
      res.json(users);
    });
    
    this.app.get('/users/:id', (req: Request, res: Response) => {
      const id = parseInt(req.params.id);
      const user = this.userService.getUserById(id);
      
      if (user) {
        res.json(user);
      } else {
        res.status(404).send('User not found');
      }
    });
  }

  public start(port: number): void {
    this.app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  }
}

export default Server;