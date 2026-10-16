Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ResearchTree = require("gge-module:export_ResearchTree");
var __s0local0 = function () {
  function ResearchTreeConnectionLine(__s3param0) {
    var __s3local0 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("ResearchTree_ConnectorLine"))();
    this._disp = __s3local0;
    this._pos = __s3param0;
    this._disp.height = this.orientation == ResearchTreeConnectionLine.ORIENTATION_HORIZONTAL ? __dep_export_ResearchTree.ResearchTree.ITEMOFFSETX : __dep_export_ResearchTree.ResearchTree.ITEMOFFSETY;
    this._disp.rotation = this.orientation == ResearchTreeConnectionLine.ORIENTATION_HORIZONTAL ? 90 : 0;
  }
  Object.defineProperty(ResearchTreeConnectionLine.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResearchTreeConnectionLine.prototype, "orientation", {
    get: function () {
      if (this._pos.x != Math.floor(this._pos.x)) {
        return ResearchTreeConnectionLine.ORIENTATION_HORIZONTAL;
      } else {
        return ResearchTreeConnectionLine.ORIENTATION_VERTICAL;
      }
    },
    enumerable: true,
    configurable: true
  });
  ResearchTreeConnectionLine.ORIENTATION_VERTICAL = "vertical";
  ResearchTreeConnectionLine.ORIENTATION_HORIZONTAL = "horizontal";
  return ResearchTreeConnectionLine;
}();
exports.ResearchTreeConnectionLine = __s0local0;
