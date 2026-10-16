Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function RingmenuBuildingPriceInfo(__s3param0) {
    this.currentAction = 0;
    this._disp = __s3param0;
    this.itxtInfo = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.txt_info, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("destroy"));
    this.itxtInfo.textAlign = __dep_exact_9e901e8e2483a22f.GGSTextAlign.CENTER;
    this.itxtValue = __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this._disp.txt_time.txt_value, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    this.itxtValue.autoFitToBounds = true;
  }
  RingmenuBuildingPriceInfo.prototype.init = function (__s5param0) {
    this.targetBuilding = __s5param0;
    this._currentCostList = null;
  };
  RingmenuBuildingPriceInfo.prototype.update = function () {
    var __s7local0;
    if (this.targetBuilding) {
      this._disp.txt_time.visible = true;
      switch (this.currentAction) {
        case __dep_export_RingMenuBuilding.RingMenuBuilding.ACTION_UPGRADE:
          var __s7local1 = __dep_exact_f855840627e6e145.int(this.targetBuilding.buildingVO.getEstimatedUpgradeDuration());
          this.itxtValue.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.getShortTimeStringBySeconds(__s7local1);
          this.itxtInfo.textContentVO.textId = "upgrade";
          __s7local0 = __dep_export_BuildingCostHelper.BuildingCostHelper.getUpgradeCostList(this.targetBuilding.buildingVO);
          if (this.areCostsDifferent(__s7local0)) {
            this._currentCostList = __s7local0;
            __dep_export_CostHelper.CostHelper.initAsCosts(__s7local0, this._disp, true, true, null, new __s0local0(30, 14));
          }
          break;
        case __dep_export_RingMenuBuilding.RingMenuBuilding.ACTION_REPAIR:
          this.itxtValue.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.getShortTimeStringBySeconds(this.targetBuilding.buildingVO.getEstimatedRepairDuration());
          this.itxtInfo.textContentVO.textId = "repair";
          __s7local0 = RingmenuBuildingPriceInfo.getCostList(this.bindFunction(this.targetBuilding.buildingVO.bindFunction(this.targetBuilding.buildingVO.getRepairCostByType)));
          if (this.areCostsDifferent(__s7local0)) {
            this._currentCostList = __s7local0;
            __dep_export_CostHelper.CostHelper.initAsCosts(__s7local0, this._disp, true, true, null, new __s0local0(30, 14));
          }
          break;
        case __dep_export_RingMenuBuilding.RingMenuBuilding.ACTION_DISASSEMBLE:
          this.itxtValue.textContentVO.stringValue = __dep_exact_9e901e8e2483a22f_2.TimeStringHelper.getShortTimeStringBySeconds(this.targetBuilding.buildingVO.getEstimatedDisassembleDuration());
          this.itxtInfo.textContentVO.textId = "destroy";
          __s7local0 = RingmenuBuildingPriceInfo.getCostList(this.bindFunction(this.targetBuilding.buildingVO.bindFunction(this.targetBuilding.buildingVO.getRefundPriceByType)));
          if (this.areCostsDifferent(__s7local0)) {
            this._currentCostList = __s7local0;
            __dep_export_CostHelper.CostHelper.initAsRefund(__s7local0, this._disp);
          }
          break;
        case __dep_export_RingMenuBuilding.RingMenuBuilding.ACTION_INSTANT_BUILD:
          this._disp.txt_time.visible = false;
          this.itxtInfo.textContentVO.textId = "instantBuild";
          var __s7local2 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.specialEventData.getSkipCosts(this.targetBuilding, __dep_export_CastleModel.CastleModel.skipDiscountData.getBoostedSkipDiscount()));
          __s7local0 = __dep_export_CollectableManager.CollectableManager.parser.createGoodsList(__dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.C2, __s7local2));
          __dep_export_CostHelper.CostHelper.initAsCosts(__s7local0, this._disp);
          break;
        default:
          __dep_export_CostHelper.CostHelper.initAsCosts(null, this._disp);
      }
    }
  };
  RingmenuBuildingPriceInfo.prototype.areCostsDifferent = function (__s14param0) {
    if (!this._currentCostList || __s14param0.length != this._currentCostList.length) {
      return true;
    }
    var __s14local0;
    var __s14local1;
    for (var __s14local2 = 0; __s14local2 < __s14param0.length; __s14local2++) {
      __s14local0 = this._currentCostList.list[__s14local2];
      if ((__s14local1 = __s14param0.list[__s14local2]).itemType.name != __s14local0.itemType.name || __s14local1.amount != __s14local0.amount) {
        return true;
      }
    }
    return false;
  };
  RingmenuBuildingPriceInfo.prototype.setAction = function (__s20param0) {
    this.currentAction = __s20param0;
    this.update();
  };
  RingmenuBuildingPriceInfo.getCostList = function (__s22param0) {
    var __s22local0 = new __dep_export_CollectableList.CollectableList();
    for (var __s22local1 = 0, __s22local2 = __dep_export_ClientConstCollectable.ClientConstCollectable.GROUP_LIST_GOODS; __s22local1 < __s22local2.length; __s22local1++) {
      var __s22local3 = __s22local2[__s22local1];
      if (__s22local3 !== undefined) {
        var __s22local4 = __dep_exact_f855840627e6e145.int(__s22param0(__s22local3));
        if (__s22local4 > 0) {
          __s22local0.addItem(__dep_export_CollectableHelper.CollectableHelper.createVO(__s22local3, __s22local4));
        }
      }
    }
    return __s22local0;
  };
  return RingmenuBuildingPriceInfo;
}();
exports.RingmenuBuildingPriceInfo = __s0local1;
var __dep_export_ClientConstCollectable = require("gge-module:export_ClientConstCollectable");
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_BuildingCostHelper = require("gge-module:export_BuildingCostHelper");
var __dep_export_CostHelper = require("gge-module:export_CostHelper");
var __dep_export_RingMenuBuilding = require("gge-module:export_RingMenuBuilding");
