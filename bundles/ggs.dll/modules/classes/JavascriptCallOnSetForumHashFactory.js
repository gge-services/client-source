Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_class_JavascriptCallSetForumHashVO = require("gge-module:class_JavascriptCallSetForumHashVO");
var __dep_class_BasicModel = require("gge-module:class_BasicModel");
var __s0local0 = function () {
  function JavascriptCallOnSetForumHashFactory() {}
  JavascriptCallOnSetForumHashFactory.prototype.createVO = function () {
    return new __dep_class_JavascriptCallSetForumHashVO.JavascriptCallSetForumHashVO(__dep_class_BasicModel.BasicModel.forumData.rawServerForumHash);
  };
  return JavascriptCallOnSetForumHashFactory;
}();
exports.JavascriptCallOnSetForumHashFactory = __s0local0;
