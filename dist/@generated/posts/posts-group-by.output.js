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
exports.PostsGroupBy = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const graphql_3 = require("@nestjs/graphql");
const posts_count_aggregate_output_1 = require("./posts-count-aggregate.output");
const posts_avg_aggregate_output_1 = require("./posts-avg-aggregate.output");
const posts_sum_aggregate_output_1 = require("./posts-sum-aggregate.output");
const posts_min_aggregate_output_1 = require("./posts-min-aggregate.output");
const posts_max_aggregate_output_1 = require("./posts-max-aggregate.output");
let PostsGroupBy = class PostsGroupBy {
};
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], PostsGroupBy.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], PostsGroupBy.prototype, "createdAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: false }),
    __metadata("design:type", Object)
], PostsGroupBy.prototype, "updatedAt", void 0);
__decorate([
    (0, graphql_1.Field)(() => String, { nullable: false }),
    __metadata("design:type", String)
], PostsGroupBy.prototype, "content", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: false }),
    __metadata("design:type", Number)
], PostsGroupBy.prototype, "userId", void 0);
__decorate([
    (0, graphql_1.Field)(() => posts_count_aggregate_output_1.PostsCountAggregate, { nullable: true }),
    __metadata("design:type", posts_count_aggregate_output_1.PostsCountAggregate)
], PostsGroupBy.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => posts_avg_aggregate_output_1.PostsAvgAggregate, { nullable: true }),
    __metadata("design:type", posts_avg_aggregate_output_1.PostsAvgAggregate)
], PostsGroupBy.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => posts_sum_aggregate_output_1.PostsSumAggregate, { nullable: true }),
    __metadata("design:type", posts_sum_aggregate_output_1.PostsSumAggregate)
], PostsGroupBy.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => posts_min_aggregate_output_1.PostsMinAggregate, { nullable: true }),
    __metadata("design:type", posts_min_aggregate_output_1.PostsMinAggregate)
], PostsGroupBy.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => posts_max_aggregate_output_1.PostsMaxAggregate, { nullable: true }),
    __metadata("design:type", posts_max_aggregate_output_1.PostsMaxAggregate)
], PostsGroupBy.prototype, "_max", void 0);
PostsGroupBy = __decorate([
    (0, graphql_2.ObjectType)()
], PostsGroupBy);
exports.PostsGroupBy = PostsGroupBy;
//# sourceMappingURL=posts-group-by.output.js.map