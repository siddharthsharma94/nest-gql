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
exports.UserUpsertWithoutPostsInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_update_without_posts_input_1 = require("./user-update-without-posts.input");
const user_create_without_posts_input_1 = require("./user-create-without-posts.input");
let UserUpsertWithoutPostsInput = class UserUpsertWithoutPostsInput {
};
__decorate([
    (0, graphql_1.Field)(() => user_update_without_posts_input_1.UserUpdateWithoutPostsInput, { nullable: false }),
    __metadata("design:type", user_update_without_posts_input_1.UserUpdateWithoutPostsInput)
], UserUpsertWithoutPostsInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_create_without_posts_input_1.UserCreateWithoutPostsInput, { nullable: false }),
    __metadata("design:type", user_create_without_posts_input_1.UserCreateWithoutPostsInput)
], UserUpsertWithoutPostsInput.prototype, "create", void 0);
UserUpsertWithoutPostsInput = __decorate([
    (0, graphql_2.InputType)()
], UserUpsertWithoutPostsInput);
exports.UserUpsertWithoutPostsInput = UserUpsertWithoutPostsInput;
//# sourceMappingURL=user-upsert-without-posts.input.js.map