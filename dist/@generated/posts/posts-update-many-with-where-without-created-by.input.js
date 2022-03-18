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
exports.PostsUpdateManyWithWhereWithoutCreatedByInput = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const posts_scalar_where_input_1 = require("./posts-scalar-where.input");
const posts_update_many_mutation_input_1 = require("./posts-update-many-mutation.input");
let PostsUpdateManyWithWhereWithoutCreatedByInput = class PostsUpdateManyWithWhereWithoutCreatedByInput {
};
__decorate([
    (0, graphql_1.Field)(() => posts_scalar_where_input_1.PostsScalarWhereInput, { nullable: false }),
    __metadata("design:type", posts_scalar_where_input_1.PostsScalarWhereInput)
], PostsUpdateManyWithWhereWithoutCreatedByInput.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => posts_update_many_mutation_input_1.PostsUpdateManyMutationInput, { nullable: false }),
    __metadata("design:type", posts_update_many_mutation_input_1.PostsUpdateManyMutationInput)
], PostsUpdateManyWithWhereWithoutCreatedByInput.prototype, "data", void 0);
PostsUpdateManyWithWhereWithoutCreatedByInput = __decorate([
    (0, graphql_2.InputType)()
], PostsUpdateManyWithWhereWithoutCreatedByInput);
exports.PostsUpdateManyWithWhereWithoutCreatedByInput = PostsUpdateManyWithWhereWithoutCreatedByInput;
//# sourceMappingURL=posts-update-many-with-where-without-created-by.input.js.map