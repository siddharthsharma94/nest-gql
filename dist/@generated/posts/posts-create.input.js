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
exports.PostsCreateInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_create_nested_one_without_posts_input_1 = require("../user/user-create-nested-one-without-posts.input");
let PostsCreateInput = class PostsCreateInput {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], PostsCreateInput.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], PostsCreateInput.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], PostsCreateInput.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_nested_one_without_posts_input_1.UserCreateNestedOneWithoutPostsInput, { nullable: false }),
    __metadata("design:type", user_create_nested_one_without_posts_input_1.UserCreateNestedOneWithoutPostsInput)
], PostsCreateInput.prototype, "createdBy", void 0);
PostsCreateInput = __decorate([
    (0, graphql_2.InputType)()
], PostsCreateInput);
exports.PostsCreateInput = PostsCreateInput;
//# sourceMappingURL=posts-create.input.js.map