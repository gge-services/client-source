Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CastleXMLUtils = require("gge-module:export_CastleXMLUtils");
var __s0local0 = function () {
  function StartResourcesVO() {
    this.startResourceID = 0;
  }
  StartResourcesVO.prototype.parseXML = function (__s5param0) {
    this.startResourceID = parseInt(__dep_export_CastleXMLUtils.CastleXMLUtils.getValueOrDefault("startResourceID", __s5param0, "0", true));
    this.startResources = __dep_export_CollectableManager.CollectableManager.parser.x2cRewards.createList(__s5param0);
  };
  return StartResourcesVO;
}();
exports.StartResourcesVO = __s0local0;
