"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const auth0_1 = require("auth0");
let AppService = class AppService {
    constructor() {
        console.log("[AppService] service created");
        const cred = {
            domain: process.env.AUTH0_DOMAIN,
            clientId: process.env.AUTH0_CLIENT_ID,
            clientSecret: process.env.AUTH0_CLIENT_SECRET,
            scope: 'create:users'
        };
        this.manageClient = new auth0_1.ManagementClient(cred);
    }
    getHello() {
        return 'Hello World!';
    }
    async register(email, password, name) {
        return await this.manageClient.createUser({
            connection: "Username-Password-Authentication",
            email,
            password,
            name,
            email_verified: true,
        });
    }
    async profile(id) {
        return await this.manageClient.getUser({
            id
        });
    }
};
AppService = __decorate([
    (0, common_1.Injectable)({
        scope: common_1.Scope.REQUEST
    }),
    __metadata("design:paramtypes", [])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map