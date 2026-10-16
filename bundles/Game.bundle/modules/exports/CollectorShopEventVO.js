Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleGenericBuyDialogProperties = require("gge-module:export_CastleGenericBuyDialogProperties");
var __dep_export_MerchantScrollItemVO = require("gge-module:export_MerchantScrollItemVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ASpecialEventVO = require("gge-module:export_ASpecialEventVO");
var __dep_export_BuyPackagesEventVO = require("gge-module:export_BuyPackagesEventVO");
var __s0local0 = function (__s1param0) {
  function CollectorShopEventVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._buyPackagesEventVO = new __dep_export_BuyPackagesEventVO.BuyPackagesEventVO();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectorShopEventVO, __s1param0);
  CollectorShopEventVO.prototype.parseData = function (__s5param0, __s5param1, __s5param2) {
    __s1param0.prototype.parseData.call(this, __s5param0, __s5param1, __s5param2);
    this._buyPackagesEventVO.parseData(__s5param0, __s5param1, __s5param2);
    this._collectInfoVO = __dep_export_CastleModel.CastleModel.collectEventData.getCollectInfoVOByID(__s5param2.EOID);
  };
  CollectorShopEventVO.prototype.getMerchantProperties = function () {
    var __s7local0 = new __dep_export_MerchantScrollItemVO.MerchantScrollItemVO();
    __s7local0.eventPackageVO = __dep_export_CastleModel.CastleModel.eventPackageData.getEventPackageByID(this._collectInfoVO.collectorKeyPackageID);
    __s7local0.specialEventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_COLLECTOR_SHOP);
    var __s7local1 = new __dep_export_CastleGenericBuyDialogProperties.CastleGenericBuyDialogProperties();
    __s7local1.parseDataFromScrollItem(__s7local0);
    return __s7local1;
  };
  CollectorShopEventVO.prototype.openDialog = function (__s9param0 = true) {
    this.executeOpenDialog(__s9param0, __dep_export_CollectorEventDialog.CollectorEventDialog, new __dep_exact_9e901e8e2483a22f.BasicProperties());
  };
  Object.defineProperty(CollectorShopEventVO.prototype, "collectInfoVO", {
    get: function () {
      return this._collectInfoVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CollectorShopEventVO.prototype, "buyPackagesEventVO", {
    get: function () {
      return this._buyPackagesEventVO;
    },
    enumerable: true,
    configurable: true
  });
  return CollectorShopEventVO;
}(__dep_export_ASpecialEventVO.ASpecialEventVO);
exports.CollectorShopEventVO = __s0local0;
var __dep_export_CollectorEventDialog = require("gge-module:export_CollectorEventDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
