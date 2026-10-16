Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CollectEventDailogShop(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectEventDailogShop, __s1param0);
  CollectEventDailogShop.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    if (this.eventVO) {
      this.textFieldManager.registerTextField(this.dialogDisp.txt_info, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_collector_shop_info_" + this.eventVO.collectInfoVO.collectorEventSkinName));
    } else {
      this.hide();
    }
  };
  CollectEventDailogShop.prototype.getEventPackages = function () {
    return this.getEventVO().buyPackagesEventVO.getVisiblePackages(__dep_export_CastleModel.CastleModel.userData.userLevel, __dep_export_CastleModel.CastleModel.userData.userLegendLevel, __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_CASTLE);
  };
  CollectEventDailogShop.prototype.getEventVO = function () {
    return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_COLLECTOR_SHOP);
  };
  CollectEventDailogShop.prototype.getCurrencyType = function () {
    return new __dep_export_CollectableTypeVO.CollectableTypeVO(__dep_export_CollectableEnum.CollectableEnum.C2);
  };
  Object.defineProperty(CollectEventDailogShop.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_COLLECTOR_SHOP);
    },
    enumerable: true,
    configurable: true
  });
  return CollectEventDailogShop;
}(require("gge-module:export_AModernPackageShopDialogSublayer").AModernPackageShopDialogSublayer);
exports.CollectEventDailogShop = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableTypeVO = require("gge-module:export_CollectableTypeVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
