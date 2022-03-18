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
exports.PostsUpdateWithWhereUniqueWithoutCreatedByInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const posts_where_unique_input_1 = require("./posts-where-unique.input");
const posts_update_without_created_by_input_1 = require("./posts-update-without-created-by.input");
let PostsUpdateWithWhereUniqueWithoutCreatedByInput = class PostsUpdateWithWhereUniqueWithoutCreatedByInput {
};
__decorate([
    (0, graphql_1.Field)(() => posts_where_unique_input_1.PostsWhereUniqueInput, { nullable: false }),
    __metadata("design:type", posts_where_unique_input_1.PostsWhereUniqueInput)
], PostsUpdateWithWhereUniqueWithoutCreatedByInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => posts_update_without_created_by_input_1.PostsUpdateWithoutCreatedByInput, { nullable: false }),
    __metadata("design:type", posts_update_without_created_by_input_1.PostsUpdateWithoutCreatedByInput)
], PostsUpdateWithWhereUniqueWithoutCreatedByInput.prototype, "data", void 0);
PostsUpdateWithWhereUniqueWithoutCreatedByInput = __decorate([
    (0, graphql_2.InputType)()
], PostsUpdateWithWhereUniqueWithoutCreatedByInput);
exports.PostsUpdateWithWhereUniqueWithoutCreatedByInput = PostsUpdateWithWhereUniqueWithoutCreatedByInput;
//# sourceMappingURL=posts-update-with-where-unique-without-created-by.input.js.map