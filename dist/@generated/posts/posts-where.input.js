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
var PostsWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsWhereInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const int_filter_input_1 = require("../prisma/int-filter.input");
const date_time_filter_input_1 = require("../prisma/date-time-filter.input");
const string_filter_input_1 = require("../prisma/string-filter.input");
const user_relation_filter_input_1 = require("../user/user-relation-filter.input");
let PostsWhereInput = PostsWhereInput_1 = class PostsWhereInput {
};
__decorate([
    (0, graphql_1.Field)(() => [PostsWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], PostsWhereInput.prototype, "AND", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostsWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], PostsWhereInput.prototype, "OR", void 0);
__decorate([
    (0, graphql_1.Field)(() => [PostsWhereInput_1], { nullable: true }),
    __metadata("design:type", Array)
], PostsWhereInput.prototype, "NOT", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], PostsWhereInput.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], PostsWhereInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => date_time_filter_input_1.DateTimeFilter, { nullable: true }),
    __metadata("design:type", date_time_filter_input_1.DateTimeFilter)
], PostsWhereInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => string_filter_input_1.StringFilter, { nullable: true }),
    __metadata("design:type", string_filter_input_1.StringFilter)
], PostsWhereInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_relation_filter_input_1.UserRelationFilter, { nullable: true }),
    __metadata("design:type", user_relation_filter_input_1.UserRelationFilter)
], PostsWhereInput.prototype, "createdBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => int_filter_input_1.IntFilter, { nullable: true }),
    __metadata("design:type", int_filter_input_1.IntFilter)
], PostsWhereInput.prototype, "userId", void 0);
PostsWhereInput = PostsWhereInput_1 = __decorate([
    (0, graphql_2.InputType)()
], PostsWhereInput);
exports.PostsWhereInput = PostsWhereInput;
//# sourceMappingURL=posts-where.input.js.map