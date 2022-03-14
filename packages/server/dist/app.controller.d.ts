import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getHello(): string;
    register(body: any): Promise<any>;
    profile(req: any): Promise<{
        hoge: string;
        payload: any;
        user: any;
    }>;
}
