Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleMultiBuildingInfoPanelItemVO = require("gge-module:export_CastleMultiBuildingInfoPanelItemVO");
var __s0local0 = function (__s1param0) {
  function CastleMultiInfoBuildingPanelVO() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.items = [];
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleMultiInfoBuildingPanelVO, __s1param0);
  CastleMultiInfoBuildingPanelVO.prototype.addInfoItem = function (__s5param0, __s5param1, __s5param2, __s5param3 = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR, __s5param4 = false, __s5param5 = false, __s5param6 = false) {
    var __s5local0 = new __dep_export_CastleMultiBuildingInfoPanelItemVO.CastleMultiBuildingInfoPanelItemVO();
    __s5local0.iconClass = __s5param0;
    __s5local0.tooltipText = __s5param1;
    __s5local0.textVO = __s5param2;
    __s5local0.isVisibleInInfoDialog = __s5param4;
    __s5local0.textColor = __s5param3;
    __s5local0.useSubscription = __s5param5;
    __s5local0.isAdditionalEffect = __s5param6;
    this.items.push(__s5local0);
  };
  return CastleMultiInfoBuildingPanelVO;
}(__dep_exact_9e901e8e2483a22f.ScrollItemVO);
exports.CastleMultiInfoBuildingPanelVO = __s0local0;
