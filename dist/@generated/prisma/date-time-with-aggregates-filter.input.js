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
exports.DateTimeWithAggregatesFilter = void 0;
const graphql_1 = require("@nestjs/graphql");
const graphql_2 = require("@nestjs/graphql");
const nested_date_time_with_aggregates_filter_input_1 = require("./nested-date-time-with-aggregates-filter.input");
const nested_int_filter_input_1 = require("./nested-int-filter.input");
const nested_date_time_filter_input_1 = require("./nested-date-time-filter.input");
let DateTimeWithAggregatesFilter = class DateTimeWithAggregatesFilter {
};
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], DateTimeWithAggregatesFilter.prototype, "equals", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true }),
    __metadata("design:type", Array)
], DateTimeWithAggregatesFilter.prototype, "in", void 0);
__decorate([
    (0, graphql_1.Field)(() => [Date], { nullable: true }),
    __metadata("design:type", Array)
], DateTimeWithAggregatesFilter.prototype, "notIn", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], DateTimeWithAggregatesFilter.prototype, "lt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], DateTimeWithAggregatesFilter.prototype, "lte", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], DateTimeWithAggregatesFilter.prototype, "gt", void 0);
__decorate([
    (0, graphql_1.Field)(() => Date, { nullable: true }),
    __metadata("design:type", Object)
], DateTimeWithAggregatesFilter.prototype, "gte", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_date_time_with_aggregates_filter_input_1.NestedDateTimeWithAggregatesFilter, { nullable: true }),
    __metadata("design:type", nested_date_time_with_aggregates_filter_input_1.NestedDateTimeWithAggregatesFilter)
], DateTimeWithAggregatesFilter.prototype, "not", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true }),
    __metadata("design:type", nested_int_filter_input_1.NestedIntFilter)
], DateTimeWithAggregatesFilter.prototype, "_count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_int_filter_input_1.NestedIntFilter, { nullable: true }),
    __metadata("design:type", nested_int_filter_input_1.NestedIntFilter)
], DateTimeWithAggregatesFilter.prototype, "count", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_date_time_filter_input_1.NestedDateTimeFilter, { nullable: true }),
    __metadata("design:type", nested_date_time_filter_input_1.NestedDateTimeFilter)
], DateTimeWithAggregatesFilter.prototype, "_min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_date_time_filter_input_1.NestedDateTimeFilter, { nullable: true }),
    __metadata("design:type", nested_date_time_filter_input_1.NestedDateTimeFilter)
], DateTimeWithAggregatesFilter.prototype, "min", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_date_time_filter_input_1.NestedDateTimeFilter, { nullable: true }),
    __metadata("design:type", nested_date_time_filter_input_1.NestedDateTimeFilter)
], DateTimeWithAggregatesFilter.prototype, "_max", void 0);
__decorate([
    (0, graphql_1.Field)(() => nested_date_time_filter_input_1.NestedDateTimeFilter, { nullable: true }),
    __metadata("design:type", nested_date_time_filter_input_1.NestedDateTimeFilter)
], DateTimeWithAggregatesFilter.prototype, "max", void 0);
DateTimeWithAggregatesFilter = __decorate([
    (0, graphql_2.InputType)()
], DateTimeWithAggregatesFilter);
exports.DateTimeWithAggregatesFilter = DateTimeWithAggregatesFilter;
//# sourceMappingURL=date-time-with-aggregates-filter.input.js.map