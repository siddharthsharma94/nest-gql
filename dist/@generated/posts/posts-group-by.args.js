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
exports.PostsGroupByArgs = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const posts_where_input_1 = require("./posts-where.input");
const posts_order_by_input_1 = require("./posts-order-by.input");
const posts_scalar_field_enum_1 = require("./posts-scalar-field.enum");
const posts_scalar_where_with_aggregates_input_1 = require("./posts-scalar-where-with-aggregates.input");
const graphql_3 = require("@nestjs/graphql");
const posts_count_aggregate_input_1 = require("./posts-count-aggregate.input");
const posts_avg_aggregate_input_1 = require("./posts-avg-aggregate.input");
const posts_sum_aggregate_input_1 = require("./posts-sum-aggregate.input");
const posts_min_aggregate_input_1 = require("./posts-min-aggregate.input");
const posts_max_aggregate_input_1 = require("./posts-max-aggregate.input");
let PostsGroupByArgs = class PostsGroupByArgs {
};
__decorate([
    (0, graphql_1.Field)(() => posts_where_input_1.PostsWhereInput, { nullable: true }),
    __metadata("design:type", posts_where_input_1.PostsWhereInput)
], PostsGroupByArgs.prototype, "where", void 0);
__decorate([
    (0, graphql_1.Field)(() => [posts_order_by_input_1.PostsOrderByInput], { nullable: true }),
    __metadata("design:type", Array)
], PostsGroupByArgs.prototype, "orderBy", void 0);
__decorate([
    (0, graphql_1.Field)(() => [posts_scalar_field_enum_1.PostsScalarFieldEnum], { nullable: false }),
    __metadata("design:type", Array)
], PostsGroupByArgs.prototype, "by", void 0);
__decorate([
    (0, graphql_1.Field)(() => posts_scalar_where_with_aggregates_input_1.PostsScalarWhereWithAggregatesInput, { nullable: true }),
    __metadata("design:type", posts_scalar_where_with_aggregates_input_1.PostsScalarWhereWithAggregatesInput)
], PostsGroupByArgs.prototype, "having", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], PostsGroupByArgs.prototype, "take", void 0);
__decorate([
    (0, graphql_1.Field)(() => graphql_3.Int, { nullable: true }),
    __metadata("design:type", Number)
], PostsGroupByArgs.prototype, "skip", void 0);
__decorate([
    (0, graphql_1.Field)(() => posts_count_aggregate_input_1.PostsCountAggregateInput, { nullable: true }),
    __metadata("design:type", posts_count_aggregate_input_1.PostsCountAggregateInput)
], PostsGroupByArgs.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => posts_avg_aggregate_input_1.PostsAvgAggregateInput, { nullable: true }),
    __metadata("design:type", posts_avg_aggregate_input_1.PostsAvgAggregateInput)
], PostsGroupByArgs.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => posts_sum_aggregate_input_1.PostsSumAggregateInput, { nullable: true }),
    __metadata("design:type", posts_sum_aggregate_input_1.PostsSumAggregateInput)
], PostsGroupByArgs.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => posts_min_aggregate_input_1.PostsMinAggregateInput, { nullable: true }),
    __metadata("design:type", posts_min_aggregate_input_1.PostsMinAggregateInput)
], PostsGroupByArgs.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => posts_max_aggregate_input_1.PostsMaxAggregateInput, { nullable: true }),
    __metadata("design:type", posts_max_aggregate_input_1.PostsMaxAggregateInput)
], PostsGroupByArgs.prototype, "_max", void 0);
PostsGroupByArgs = __decorate([
    (0, graphql_2.ArgsType)()
], PostsGroupByArgs);
exports.PostsGroupByArgs = PostsGroupByArgs;
//# sourceMappingURL=posts-group-by.args.js.map