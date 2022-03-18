"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsScalarFieldEnum = void 0;
const graphql_1 = require("@nestjs/graphql");
var PostsScalarFieldEnum;
(function (PostsScalarFieldEnum) {
    PostsScalarFieldEnum["id"] = "id";
    PostsScalarFieldEnum["createdAt"] = "createdAt";
    PostsScalarFieldEnum["updatedAt"] = "updatedAt";
    PostsScalarFieldEnum["content"] = "content";
    PostsScalarFieldEnum["userId"] = "userId";
})(PostsScalarFieldEnum = exports.PostsScalarFieldEnum || (exports.PostsScalarFieldEnum = {}));
(0, graphql_1.registerEnumType)(PostsScalarFieldEnum, { name: 'PostsScalarFieldEnum', description: undefined });
//# sourceMappingURL=posts-scalar-field.enum.js.map