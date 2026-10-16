Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_C2SFestivalStartVO = require("gge-module:export_C2SFestivalStartVO");
var __dep_export_C2SGetDetailedCastleListVO = require("gge-module:export_C2SGetDetailedCastleListVO");
var __dep_export_CastleTimerEvent = require("gge-module:export_CastleTimerEvent");
var __dep_export_CastleDetailedCastleListEvent = require("gge-module:export_CastleDetailedCastleListEvent");
var __dep_export_KingdomEnum = require("gge-module:export_KingdomEnum");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ModernComboboxComponentItem = require("gge-module:export_ModernComboboxComponentItem");
var __dep_export_SimpleComboboxComponent = require("gge-module:export_SimpleComboboxComponent");
var __dep_export_SimpleComboboxComponentConfig = require("gge-module:export_SimpleComboboxComponentConfig");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleExtendFestivalDialog() {
    var __s3local0 = this;
    __s3local0.feastCostReduction = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleExtendFestivalDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleExtendFestivalDialog, __s1param0);
  CastleExtendFestivalDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_back, this.dialogDisp.btn_ok], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this._castleSelector ||= new __dep_export_SimpleComboboxComponent.SimpleComboboxComponent(this.dialogDisp.mc_castleSelector, new __dep_export_SimpleComboboxComponentConfig.SimpleComboboxComponentConfig(0, 1));
  };
  CastleExtendFestivalDialog.prototype.addEventListenerOnShow = function () {
    this._castleSelector.onSelectionChanged.add(this.bindFunction(this.onCastleComboboxChange));
    this.controller.addEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListArrived));
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.FCE_ARRIVED, this.bindFunction(this.onFCEArrived));
    __dep_export_CastleModel.CastleModel.timerData.addEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
  };
  CastleExtendFestivalDialog.prototype.removeEventListenerOnHide = function () {
    this._castleSelector.onSelectionChanged.remove(this.bindFunction(this.onCastleComboboxChange));
    this.controller.removeEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleListArrived));
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.FCE_ARRIVED, this.bindFunction(this.onFCEArrived));
    __dep_export_CastleModel.CastleModel.timerData.removeEventListener(__dep_export_CastleTimerEvent.CastleTimerEvent.TIMER_INTERVAL_SECOND, this.bindFunction(this.updateTime));
    this._castleSelector.onHide();
  };
  CastleExtendFestivalDialog.prototype.showLoaded = function (__s11param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s11param0);
    this.initCastleSelector();
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_festival_extend_header")));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_type, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.festivalVO.nameTextID)));
    this.itxt_time = this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_festival_extend_desc"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_time_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("addedTime_colon"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_bonus_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_festival_extend_recruitmentBonus"));
    this.itxt_cost = this.textFieldManager.registerTextField(this.dialogDisp.txt_costs, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_costs_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("cost_simple"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_bonus, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_ADD, [this.festivalVO.boost])).autoFitToBounds = true;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_time, new __dep_exact_92d05af59ee2ff30_3.TextVO(__dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getCommaTimeStringFromSeconds(this.festivalVO.durationInSeconds, __dep_exact_92d05af59ee2ff30.Localize.text)));
    this.updateCosts();
    this.dialogDisp.mc_bonus.toolTipText = "recruitspeed";
    this.dialogDisp.mc_time.toolTipText = "dialog_moveOverview_waitTime";
    this.dialogDisp.mc_food.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.FOOD;
    this.dialogDisp.mc_discount.visible = this.feastCostReduction > 0;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_discount.txt_copy, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [this.feastCostReduction]));
    this.dialogDisp.mc_feast0.visible = this.festivalVO.assetID == 0;
    this.dialogDisp.mc_feast1.visible = this.festivalVO.assetID == 1;
    this.dialogDisp.mc_feast2.visible = this.festivalVO.assetID == 2;
    this.dialogDisp.mc_feast3.visible = this.festivalVO.assetID == 3;
    this.dialogDisp.mc_feast4.visible = this.festivalVO.assetID >= 4;
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetFeastCostReductionVO.C2SGetFeastCostReductionVO());
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetDetailedCastleListVO.C2SGetDetailedCastleListVO());
    this.updateTime();
  };
  CastleExtendFestivalDialog.prototype.initCastleSelector = function () {
    var __s13local0 = [];
    var __s13local1 = 0;
    for (var __s13local2 = 0; __s13local2 < __dep_export_CastleModel.CastleModel.userData.castleList.list.length; __s13local2++) {
      if (__dep_export_CastleModel.CastleModel.userData.castleList.list[__s13local2].kingdomID != __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
        var __s13local3 = new __dep_export_ModernComboboxComponentItem.ModernComboboxComponentItem("FeastExtendCastleItem", CastleExtendFestivalDialog.NAME, this.bindFunction(this.fillCastleItem), __dep_export_CastleModel.CastleModel.userData.castleList.list[__s13local2]);
        __s13local0.push(__s13local3);
        if (__dep_export_CastleModel.CastleModel.areaData.activeArea && __dep_export_CastleModel.CastleModel.areaData.activeArea.areaId == __dep_export_CastleModel.CastleModel.userData.castleList.list[__s13local2].objectId && __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_export_CastleModel.CastleModel.userData.castleList.list[__s13local2].kingdomID) {
          __s13local1 = __s13local2;
        }
      }
    }
    this._castleSelector.setVisibility(!this.festivalVO.hasC2Costs());
    this._castleSelector.updateWithNewValues(__s13local0);
    this._castleSelector.onShow();
    this._castleSelector.selectIndex(__s13local1);
  };
  CastleExtendFestivalDialog.prototype.fillCastleItem = function (__s19param0) {
    this.textFieldManager.registerTextField(__s19param0.getItemMc().txt_text, new __dep_exact_92d05af59ee2ff30_3.TextVO(__s19param0.data.areaNameString)).autoFitToBounds = true;
    var __s19local0 = new __dep_exact_81dacdf05bd32292.ColorTransform();
    __s19local0.color = __dep_export_KingdomEnum.KingdomEnum.getTypeById(__s19param0.data.kingdomID).symbolBgColor;
    __s19param0.getItemMc().mc_castle_dot.mc_color.useFilters([new createjs.ColorFilter(__s19local0.redMultiplier, __s19local0.greenMultiplier, __s19local0.blueMultiplier, __s19local0.alphaMultiplier, __s19local0.redOffset, __s19local0.greenOffset, __s19local0.blueOffset, __s19local0.alphaOffset)]);
  };
  CastleExtendFestivalDialog.prototype.getCurrentCastleVO = function () {
    if (__dep_export_CastleModel.CastleModel.areaData.activeArea.isMyArea) {
      for (var __s21local0 = 0; __s21local0 < __dep_export_CastleModel.CastleModel.userData.castleList.list.length; __s21local0++) {
        if (__dep_export_CastleModel.CastleModel.userData.castleList.list[__s21local0].objectId == __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId) {
          return __dep_export_CastleModel.CastleModel.userData.castleList.list[__s21local0];
        }
      }
    }
    return __dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle();
  };
  Object.defineProperty(CastleExtendFestivalDialog.prototype, "festivalVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.festivalVO.activeFestivalVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleExtendFestivalDialog.prototype, "remainingTime", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.boostData.festivalVO.remainingTimeInSeconds;
    },
    enumerable: true,
    configurable: true
  });
  CastleExtendFestivalDialog.prototype.updateTime = function (__s31param0 = null) {
    if (this.itxt_time.textContentVO) {
      this.itxt_time.textContentVO.textReplacements = [__dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getCommaTimeStringFromSeconds(this.remainingTime, __dep_exact_92d05af59ee2ff30.Localize.text)];
    }
  };
  CastleExtendFestivalDialog.prototype.updateCosts = function () {
    if (this.itxt_cost) {
      var __s34local0 = this.festivalVO.hasC2Costs() ? 1 : 1 - this.feastCostReduction / 100;
      this.itxt_cost.textContentVO.numberValue = this.festivalVO.cost * __s34local0;
      if (this.festivalVO.hasC2Costs()) {
        this.dialogDisp.mc_ruby.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
        this.itxt_cost.color = __dep_export_CastleModel.CastleModel.currencyData.c2Amount < this.festivalVO.cost ? __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
      } else {
        this.dialogDisp.mc_food.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.FOOD;
        var __s34local1 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getVObyCastleID(this.getSelectedCastle().objectId, this.getSelectedCastle().kingdomID);
        if (__s34local1) {
          var __s34local2 = __s34local1.getResource(__dep_export_CollectableEnum.CollectableEnum.FOOD) >= this.festivalVO.cost;
          this.itxt_cost.color = __s34local2 ? __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
        }
      }
      this.dialogDisp.mc_ruby.visible = this.festivalVO.hasC2Costs();
      this.dialogDisp.mc_food.visible = !this.festivalVO.hasC2Costs();
    }
  };
  CastleExtendFestivalDialog.prototype.onCastleComboboxChange = function (__s40param0 = null) {
    this.textFieldManager.registerTextField(this.dialogDisp.mc_castleSelector.mc_selector.txt_copy, new __dep_exact_92d05af59ee2ff30_3.TextVO(this.getSelectedCastle().areaNameString)).autoFitToBounds = true;
    var __s40local0 = new __dep_exact_81dacdf05bd32292.ColorTransform();
    this.getSelectedCastle();
    __s40local0.color = __dep_export_KingdomEnum.KingdomEnum.getTypeById(this.getSelectedCastle().kingdomID).symbolBgColor;
    this.dialogDisp.mc_castleSelector.mc_selector.mc_castle_dot.mc_color.useFilters([new createjs.ColorFilter(__s40local0.redMultiplier, __s40local0.greenMultiplier, __s40local0.blueMultiplier, __s40local0.alphaMultiplier, __s40local0.redOffset, __s40local0.greenOffset, __s40local0.blueOffset, __s40local0.alphaOffset)]);
    this.updateCosts();
  };
  CastleExtendFestivalDialog.prototype.onDetailedCastleListArrived = function (__s42param0 = null) {
    this.updateCosts();
    __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.dialogDisp.btn_ok, true, 1);
  };
  CastleExtendFestivalDialog.prototype.onFCEArrived = function (__s44param0 = null) {
    this.feastCostReduction = JSON.parse(__s44param0.params[1][1]).FRM;
    this.updateCosts();
    __dep_export_ButtonHelper.ButtonHelper.delayEnableButton(this.dialogDisp.btn_ok, true, 1);
  };
  CastleExtendFestivalDialog.prototype.getSelectedCastle = function () {
    return this._castleSelector.getSelectedItem().data;
  };
  CastleExtendFestivalDialog.prototype.onClick = function (__s48param0) {
    __s1param0.prototype.onClick.call(this, __s48param0);
    switch (__s48param0.target) {
      case this.dialogDisp.btn_back:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        if (this.dialogDisp.btn_ok.enabled) {
          if (!__dep_export_CastleModel.CastleModel.boostData.festivalVO) {
            this.hide();
            return;
          }
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SFestivalStartVO.C2SFestivalStartVO(this.festivalVO.id, this.getSelectedCastle().objectId, this.getSelectedCastle().kingdomID));
          this.hide();
        }
    }
  };
  CastleExtendFestivalDialog.__initialize_static_members = function () {
    CastleExtendFestivalDialog.NAME = "Festival2";
  };
  return CastleExtendFestivalDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleExtendFestivalDialog = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_C2SGetFeastCostReductionVO = require("gge-module:export_C2SGetFeastCostReductionVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
