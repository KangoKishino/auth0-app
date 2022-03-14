export declare class AppService {
    private manageClient;
    constructor();
    getHello(): string;
    register(email: string, password: string, name: string): Promise<any>;
    profile(id: string): Promise<any>;
}
