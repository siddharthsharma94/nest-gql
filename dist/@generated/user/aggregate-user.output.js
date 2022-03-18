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
exports.AggregateUser = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const user_count_aggregate_output_1 = require("./user-count-aggregate.output");
const user_avg_aggregate_output_1 = require("./user-avg-aggregate.output");
const user_sum_aggregate_output_1 = require("./user-sum-aggregate.output");
const user_min_aggregate_output_1 = require("./user-min-aggregate.output");
const user_max_aggregate_output_1 = require("./user-max-aggregate.output");
let AggregateUser = class AggregateUser {
};
__decorate([
    (0, graphql_1.Field)(() => user_count_aggregate_output_1.UserCountAggregate, { nullable: true }),
    __metadata("design:type", user_count_aggregate_output_1.UserCountAggregate)
], AggregateUser.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_count_aggregate_output_1.UserCountAggregate, { nullable: true }),
    __metadata("design:type", user_count_aggregate_output_1.UserCountAggregate)
], AggregateUser.prototype, "count", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_avg_aggregate_output_1.UserAvgAggregate, { nullable: true }),
    __metadata("design:type", user_avg_aggregate_output_1.UserAvgAggregate)
], AggregateUser.prototype, "_avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_avg_aggregate_output_1.UserAvgAggregate, { nullable: true }),
    __metadata("design:type", user_avg_aggregate_output_1.UserAvgAggregate)
], AggregateUser.prototype, "avg", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_sum_aggregate_output_1.UserSumAggregate, { nullable: true }),
    __metadata("design:type", user_sum_aggregate_output_1.UserSumAggregate)
], AggregateUser.prototype, "_sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_sum_aggregate_output_1.UserSumAggregate, { nullable: true }),
    __metadata("design:type", user_sum_aggregate_output_1.UserSumAggregate)
], AggregateUser.prototype, "sum", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_min_aggregate_output_1.UserMinAggregate, { nullable: true }),
    __metadata("design:type", user_min_aggregate_output_1.UserMinAggregate)
], AggregateUser.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_min_aggregate_output_1.UserMinAggregate, { nullable: true }),
    __metadata("design:type", user_min_aggregate_output_1.UserMinAggregate)
], AggregateUser.prototype, "min", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_max_aggregate_output_1.UserMaxAggregate, { nullable: true }),
    __metadata("design:type", user_max_aggregate_output_1.UserMaxAggregate)
], AggregateUser.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => user_max_aggregate_output_1.UserMaxAggregate, { nullable: true }),
    __metadata("design:type", user_max_aggregate_output_1.UserMaxAggregate)
], AggregateUser.prototype, "max", void 0);
AggregateUser = __decorate([
    (0, graphql_2.ObjectType)()
], AggregateUser);
exports.AggregateUser = AggregateUser;
//# sourceMappingURL=aggregate-user.output.js.map