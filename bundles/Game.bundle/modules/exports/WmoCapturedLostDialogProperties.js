Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_WorldmapObjectFactory = require("gge-module:export_WorldmapObjectFactory");
var __s0local0 = function (__s1param0) {
  function WmoCapturedLostDialogProperties(__s3param0, __s3param1, __s3param2, __s3param3, __s3param4) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.title = "";
    __s3local0.copy = "";
    __s3local0.buildingList = [];
    __s3local0.ciList = [];
    __s3local0.ownerInfo = null;
    __s3local0.isCapturedDialog = false;
    __s3local0.isLostDialog = false;
    __s3local0.wmoVO = null;
    __s3local0.title = __s3param0;
    __s3local0.copy = __s3param1;
    __s3local0.isCapturedDialog = __s3param3;
    __s3local0.isLostDialog = __s3param4;
    __s3local0.buildingList = __s3param2[__dep_exact_26a421b704832cff.CommKeys.BUILDING_LIST] ? __s3param2[__dep_exact_26a421b704832cff.CommKeys.BUILDING_LIST] : __s3param2[__dep_exact_26a421b704832cff.CommKeys.WOD_IDS];
    __s3local0.ciList = __s3param2[__dep_exact_26a421b704832cff.CommKeys.CONSTRUCTION_ITEM_LIST] ? __s3param2[__dep_exact_26a421b704832cff.CommKeys.CONSTRUCTION_ITEM_LIST] : [];
    if (__s3local0.ciList && !Array.isArray(__s3local0.ciList)) {
      __s3local0.ciList = [__s3local0.ciList];
    }
    __s3local0.ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.parseOwnerInfo(__s3param2[__dep_exact_26a421b704832cff.CommKeys.OWNER_INFO_2]);
    __s3local0.ownerInfo ||= __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO();
    __s3local0.wmoVO = __dep_export_WorldmapObjectFactory.WorldmapObjectFactory.parseWorldMapArea(__s3param2[__dep_exact_26a421b704832cff.CommKeys.AREA_INFO_2]);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(WmoCapturedLostDialogProperties, __s1param0);
  Object.defineProperty(WmoCapturedLostDialogProperties.prototype, "isInventoryEmpty", {
    get: function () {
      return (!this.ciList || this.ciList.length == 0) && (!this.buildingList || this.buildingList.length == 0);
    },
    enumerable: true,
    configurable: true
  });
  return WmoCapturedLostDialogProperties;
}(__dep_exact_9e901e8e2483a22f.BasicProperties);
exports.WmoCapturedLostDialogProperties = __s0local0;
