Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleTreasureMapEvent = require("gge-module:export_CastleTreasureMapEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_CastleGenericMerchantDialog = require("gge-module:export_CastleGenericMerchantDialog");
var __s0local0 = function (__s1param0) {
  function CastleUnitDealerEventDialog(__s3param0 = CastleUnitDealerEventDialog.ASSET_NAME) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleUnitDealerEventDialog, __s1param0);
  CastleUnitDealerEventDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    __dep_export_CastleModel.CastleModel.treasureMapData.addEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onInventoryUpdated));
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onMaxUnitInventoryUpdated));
  };
  CastleUnitDealerEventDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    __dep_export_CastleModel.CastleModel.treasureMapData.removeEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onInventoryUpdated));
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onMaxUnitInventoryUpdated));
  };
  CastleUnitDealerEventDialog.prototype.onInventoryUpdated = function (__s9param0) {
    this.initUnitInfos();
  };
  CastleUnitDealerEventDialog.prototype.onMaxUnitInventoryUpdated = function (__s11param0) {
    this.initUnitInfos();
  };
  Object.defineProperty(CastleUnitDealerEventDialog.prototype, "merchantScrollItem", {
    get: function () {
      return __dep_export_CastleUnitDealerEventScrollItem.CastleUnitDealerEventScrollItem;
    },
    set: function (__s15param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleGenericMerchantDialog.CastleGenericMerchantDialog.prototype, "merchantScrollItem").set.call(this, __s15param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleUnitDealerEventDialog.prototype.initLoaded = function (__s17param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s17param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_unitDealerEvent_speechBubble")).verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    this.itxt_unitCapacity = this.textFieldManager.registerTextField(this.dialogDisp.mc_unitLimit.txt_unitCapacity, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [0]));
    this.dialogDisp.mc_unitLimit.visible = true;
    this.dialogDisp.mc_unitLimit.toolTipText = "dialog_UnitEvent_totalUnitCount";
    this.dialogDisp.mc_unitLimit.mouseChildren = false;
  };
  CastleUnitDealerEventDialog.prototype.showLoaded = function (__s19param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s19param0);
    this.initUnitInfos();
  };
  CastleUnitDealerEventDialog.prototype.initUnitInfos = function () {
    this.itxt_unitCapacity.textContentVO.textId = __dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
    var __s21local0 = 0;
    var __s21local1 = 0;
    if (CastleUnitDealerEventDialog.treasuremapVO) {
      __s21local0 = __dep_exact_f855840627e6e145.int(CastleUnitDealerEventDialog.treasuremapVO.getTotalSoldierCount());
      __s21local1 = __dep_exact_f855840627e6e145.int(CastleUnitDealerEventDialog.treasuremapVO.unitStorage);
    }
    this.itxt_unitCapacity.textContentVO.textReplacements = [__s21local0, __s21local1];
  };
  Object.defineProperty(CastleUnitDealerEventDialog, "treasuremapVO", {
    get: function () {
      var __s24local0 = __dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO;
      if (__s24local0) {
        return __s24local0.treasureMapVO;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleUnitDealerEventDialog.NAME = "CastleUnitDealerEventExternal";
  CastleUnitDealerEventDialog.ASSET_NAME = "CastleUnitEvent";
  return CastleUnitDealerEventDialog;
}(__dep_export_CastleGenericMerchantDialog.CastleGenericMerchantDialog);
exports.CastleUnitDealerEventDialog = __s0local0;
var __dep_export_CastleUnitDealerEventScrollItem = require("gge-module:export_CastleUnitDealerEventScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
