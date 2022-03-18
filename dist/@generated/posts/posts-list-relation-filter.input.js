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
exports.PostsListRelationFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const posts_where_input_1 = require("./posts-where.input");
let PostsListRelationFilter = class PostsListRelationFilter {
};
__decorate([
    (0, graphql_1.Field)(() => posts_where_input_1.PostsWhereInput, { nullable: true }),
    __metadata("design:type", posts_where_input_1.PostsWhereInput)
], PostsListRelationFilter.prototype, "every", void 0);
__decorate([
    (0, graphql_1.Field)(() => posts_where_input_1.PostsWhereInput, { nullable: true }),
    __metadata("design:type", posts_where_input_1.PostsWhereInput)
], PostsListRelationFilter.prototype, "some", void 0);
__decorate([
    (0, graphql_1.Field)(() => posts_where_input_1.PostsWhereInput, { nullable: true }),
    __metadata("design:type", posts_where_input_1.PostsWhereInput)
], PostsListRelationFilter.prototype, "none", void 0);
PostsListRelationFilter = __decorate([
    (0, graphql_2.InputType)()
], PostsListRelationFilter);
exports.PostsListRelationFilter = PostsListRelationFilter;
//# sourceMappingURL=posts-list-relation-filter.input.js.map