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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const create_one_posts_args_1 = require("./../@generated/posts/create-one-posts.args");
const create_one_user_args_1 = require("../@generated/user/create-one-user.args");
const graphql_1 = require("@nestjs/graphql");
const user_model_1 = require("../@generated/user/user.model");
const posts_model_1 = require("../@generated/posts/posts.model");
const db_1 = require("../db");
let UserResolver = class UserResolver {
    async getUsers() {
        const users = await db_1.default.user.findMany({ include: { Posts: true } });
        return users;
    }
    async createOneUser({ data }) {
        const user = await db_1.default.user.create({ data, include: { Posts: true } });
        return user;
    }
    async createPost({ data }) {
        const posts = await db_1.default.posts.create({ data });
        return posts;
    }
};
__decorate([
    (0, graphql_1.Query)(() => [user_model_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "getUsers", null);
__decorate([
    (0, graphql_1.Mutation)(() => user_model_1.User),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_one_user_args_1.CreateOneUserArgs]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createOneUser", null);
__decorate([
    (0, graphql_1.Mutation)(() => posts_model_1.Posts),
    __param(0, (0, graphql_1.Args)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_one_posts_args_1.CreateOnePostsArgs]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "createPost", null);
UserResolver = __decorate([
    (0, graphql_1.Resolver)(() => user_model_1.User)
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=user.resolver.js.map