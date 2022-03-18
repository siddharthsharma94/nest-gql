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
exports.FindManyPostsArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const posts_where_input_1 = require("./posts-where.input");
const posts_order_by_input_1 = require("./posts-order-by.input");
const posts_where_unique_input_1 = require("./posts-where-unique.input");
const graphql_3 = require("@nestjs/graphql");
const posts_scalar_field_enum_1 = require("./posts-scalar-field.enum");
let FindManyPostsArgs = class FindManyPostsArgs {
};
__decorate([
    (0, graphql_1.Field)(() => posts_where_input_1.PostsWhereInput, { nullable: true }),
    __metadata("design:type", posts_where_input_1.PostsWhereInput)
], FindManyPostsArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [posts_order_by_input_1.PostsOrderByInput], { nullable: true }),
    __metadata("design:type", Array)
], FindManyPostsArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => posts_where_unique_input_1.PostsWhereUniqueInput, { nullable: true }),
    __metadata("design:type", posts_where_unique_input_1.PostsWhereUniqueInput)
], FindManyPostsArgs.prototype, "cursor", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyPostsArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], FindManyPostsArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => [posts_scalar_field_enum_1.PostsScalarFieldEnum], { nullable: true }),
    __metadata("design:type", Array)
], FindManyPostsArgs.prototype, "distinct", void 0);
FindManyPostsArgs = __decorate([
    (0, graphql_2.ArgsType)()
], FindManyPostsArgs);
exports.FindManyPostsArgs = FindManyPostsArgs;
//# sourceMappingURL=find-many-posts.args.js.map