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
exports.PostsUpdateManyWithoutCreatedByInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const posts_create_without_created_by_input_1 = require("./posts-create-without-created-by.input");
const posts_create_or_connect_without_created_by_input_1 = require("./posts-create-or-connect-without-created-by.input");
const posts_upsert_with_where_unique_without_created_by_input_1 = require("./posts-upsert-with-where-unique-without-created-by.input");
const posts_create_many_created_by_input_envelope_input_1 = require("./posts-create-many-created-by-input-envelope.input");
const posts_where_unique_input_1 = require("./posts-where-unique.input");
const posts_update_with_where_unique_without_created_by_input_1 = require("./posts-update-with-where-unique-without-created-by.input");
const posts_update_many_with_where_without_created_by_input_1 = require("./posts-update-many-with-where-without-created-by.input");
const posts_scalar_where_input_1 = require("./posts-scalar-where.input");
let PostsUpdateManyWithoutCreatedByInput = class PostsUpdateManyWithoutCreatedByInput {
};
__decorate([
    (0, graphql_1.Field)(() => [posts_create_without_created_by_input_1.PostsCreateWithoutCreatedByInput], { nullable: true }),
    __metadata("design:type", Array)
], PostsUpdateManyWithoutCreatedByInput.prototype, "create", void 0);
__decorate([
    (0, graphql_1.Field)(() => [posts_create_or_connect_without_created_by_input_1.PostsCreateOrConnectWithoutCreatedByInput], { nullable: true }),
    __metadata("design:type", Array)
], PostsUpdateManyWithoutCreatedByInput.prototype, "connectOrCreate", void 0);
__decorate([
    (0, graphql_1.Field)(() => [posts_upsert_with_where_unique_without_created_by_input_1.PostsUpsertWithWhereUniqueWithoutCreatedByInput], { nullable: true }),
    __metadata("design:type", Array)
], PostsUpdateManyWithoutCreatedByInput.prototype, "upsert", void 0);
__decorate([
    (0, graphql_1.Field)(() => posts_create_many_created_by_input_envelope_input_1.PostsCreateManyCreatedByInputEnvelope, { nullable: true }),
    __metadata("design:type", posts_create_many_created_by_input_envelope_input_1.PostsCreateManyCreatedByInputEnvelope)
], PostsUpdateManyWithoutCreatedByInput.prototype, "createMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [posts_where_unique_input_1.PostsWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PostsUpdateManyWithoutCreatedByInput.prototype, "connect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [posts_where_unique_input_1.PostsWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PostsUpdateManyWithoutCreatedByInput.prototype, "set", void 0);
__decorate([
    (0, graphql_1.Field)(() => [posts_where_unique_input_1.PostsWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PostsUpdateManyWithoutCreatedByInput.prototype, "disconnect", void 0);
__decorate([
    (0, graphql_1.Field)(() => [posts_where_unique_input_1.PostsWhereUniqueInput], { nullable: true }),
    __metadata("design:type", Array)
], PostsUpdateManyWithoutCreatedByInput.prototype, "delete", void 0);
__decorate([
    (0, graphql_1.Field)(() => [posts_update_with_where_unique_without_created_by_input_1.PostsUpdateWithWhereUniqueWithoutCreatedByInput], { nullable: true }),
    __metadata("design:type", Array)
], PostsUpdateManyWithoutCreatedByInput.prototype, "update", void 0);
__decorate([
    (0, graphql_1.Field)(() => [posts_update_many_with_where_without_created_by_input_1.PostsUpdateManyWithWhereWithoutCreatedByInput], { nullable: true }),
    __metadata("design:type", Array)
], PostsUpdateManyWithoutCreatedByInput.prototype, "updateMany", void 0);
__decorate([
    (0, graphql_1.Field)(() => [posts_scalar_where_input_1.PostsScalarWhereInput], { nullable: true }),
    __metadata("design:type", Array)
], PostsUpdateManyWithoutCreatedByInput.prototype, "deleteMany", void 0);
PostsUpdateManyWithoutCreatedByInput = __decorate([
    (0, graphql_2.InputType)()
], PostsUpdateManyWithoutCreatedByInput);
exports.PostsUpdateManyWithoutCreatedByInput = PostsUpdateManyWithoutCreatedByInput;
//# sourceMappingURL=posts-update-many-without-created-by.input.js.map