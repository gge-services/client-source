Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_3 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SBuyBeggingKnightsPackageVO = require("gge-module:export_C2SBuyBeggingKnightsPackageVO");
var __dep_export_C2SGetCastleResourcesVO = require("gge-module:export_C2SGetCastleResourcesVO");
var __dep_export_CastleResourceCollectorEvent = require("gge-module:export_CastleResourceCollectorEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.EventDispatcher;
var __s0local1 = function (__s1param0) {
  function CastlePayRessourcesForBeggingKnightsEventDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastlePayRessourcesForBeggingKnightsEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePayRessourcesForBeggingKnightsEventDialog, __s1param0);
  CastlePayRessourcesForBeggingKnightsEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.eventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_BEGGING_KNIGHTS);
    this._woodSelector = new __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent(this.dialogDisp.mc_selectWood, __dep_exact_26a421b704832cff.BeggingKnightsConst.calculateRequirement(this.eventVO.totalHours, this.eventVO.factorList[0]));
    this._stoneSelector = new __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent(this.dialogDisp.mc_selectStone, __dep_exact_26a421b704832cff.BeggingKnightsConst.calculateRequirement(this.eventVO.totalHours, this.eventVO.factorList[1]));
    this._foodSelector = new __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent(this.dialogDisp.mc_selectFood, __dep_exact_26a421b704832cff.BeggingKnightsConst.calculateRequirement(this.eventVO.totalHours, this.eventVO.factorList[2]));
    this._castleSelector = new __dep_export_CastleSelectorComponent.CastleSelectorComponent(this.dialogDisp.castleSelector);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_season_payRessources_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_help, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_beggingknights_payRessources_info"));
    this.txt_points = this.textFieldManager.registerTextField(this.dialogDisp.txt_points, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(0));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_pointdesc, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_BeggingKnights_nobilityPoints"));
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok, this.dialogDisp.btn_cancle]);
  };
  CastlePayRessourcesForBeggingKnightsEventDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __s1param0.prototype.applyPropertiesLoaded.call(this, __s7param0);
    var __s7local0 = __dep_export_CastleModel.CastleModel.userData.castleList.getHomeCastle();
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetCastleResourcesVO.C2SGetCastleResourcesVO(__s7local0.objectId, __s7local0.kingdomID));
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeRessources));
    this.onSliderChanged(null);
    var __s7local1 = __dep_export_CastleModel.CastleModel.userData.castleList.listOfCastlesWithoutAreaTypesAndEventCamps([__dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_CAPITAL, __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_METROPOL]);
    var __s7local2 = new __dep_export_CastleListVO.CastleListVO();
    if (__s7local1 != null) {
      for (var __s7local3 = 0, __s7local4 = __s7local1; __s7local3 < __s7local4.length; __s7local3++) {
        var __s7local5 = __s7local4[__s7local3];
        if (__s7local5 !== undefined && __s7local5.areaType != __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_CAPITAL && __s7local5.areaType != __dep_exact_26a421b704832cff_2.WorldConst.AREA_TYPE_METROPOL && __s7local5.kingdomID != __dep_exact_26a421b704832cff_3.WorldIsland.KINGDOM_ID && __s7local5.controllerWorldMapOwnerInfoVO.playerID == __dep_export_CastleModel.CastleModel.userData.playerID) {
          __s7local2.addCastle(__s7local5, __s7local5.kingdomID);
        }
      }
    }
    this._castleSelector.initComponent(__dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO(), __s7local2);
    this._castleSelector.castleList.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    this._woodSelector.dispatcher = new __s0local0();
    this._woodSelector.notifyValueChange = true;
    this._woodSelector.dispatcher.addEventListener(__dep_export_CastleResourceCollectorEvent.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY, this.bindFunction(this.onSliderChanged));
    this._stoneSelector.dispatcher = new __s0local0();
    this._stoneSelector.notifyValueChange = true;
    this._stoneSelector.dispatcher.addEventListener(__dep_export_CastleResourceCollectorEvent.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY, this.bindFunction(this.onSliderChanged));
    this._foodSelector.dispatcher = new __s0local0();
    this._foodSelector.notifyValueChange = true;
    this._foodSelector.dispatcher.addEventListener(__dep_export_CastleResourceCollectorEvent.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY, this.bindFunction(this.onSliderChanged));
    this.eventVO = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_BEGGING_KNIGHTS);
  };
  CastlePayRessourcesForBeggingKnightsEventDialog.prototype.hideLoaded = function (__s13param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s13param0);
    this._castleRessourcesVO = null;
    this._woodSelector.resetValue();
    this._stoneSelector.resetValue();
    this._foodSelector.resetValue();
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeRessources));
    this._woodSelector.dispatcher.removeEventListener(__dep_export_CastleResourceCollectorEvent.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY, this.bindFunction(this.onSliderChanged));
    this._stoneSelector.dispatcher.removeEventListener(__dep_export_CastleResourceCollectorEvent.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY, this.bindFunction(this.onSliderChanged));
    this._foodSelector.dispatcher.removeEventListener(__dep_export_CastleResourceCollectorEvent.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY, this.bindFunction(this.onSliderChanged));
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  CastlePayRessourcesForBeggingKnightsEventDialog.prototype.onClick = function (__s15param0) {
    switch (__s15param0.target) {
      case this.dialogDisp.btn_close:
      case this.dialogDisp.btn_cancle:
        this.hide();
        break;
      case this.dialogDisp.btn_ok:
        __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SBuyBeggingKnightsPackageVO.C2SBuyBeggingKnightsPackageVO(this._castleSelector.selectedCastleVO.objectId, this._castleSelector.selectedCastleVO.kingdomID, this._woodSelector.getSelectedAmount() / this.eventVO.totalAmounts[0], this._stoneSelector.getSelectedAmount() / this.eventVO.totalAmounts[1], this._foodSelector.getSelectedAmount() / this.eventVO.totalAmounts[2]));
        this.hide();
    }
  };
  CastlePayRessourcesForBeggingKnightsEventDialog.prototype.onSelectCastle = function (__s18param0 = null) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetCastleResourcesVO.C2SGetCastleResourcesVO(this._castleSelector.selectedCastleVO.objectId, this._castleSelector.selectedCastleVO.kingdomID));
    this._woodSelector.resetValue();
    this._stoneSelector.resetValue();
    this._foodSelector.resetValue();
    this.txt_points.textContentVO.numberValue = 0;
  };
  CastlePayRessourcesForBeggingKnightsEventDialog.prototype.onChangeRessources = function (__s20param0 = null) {
    var __s20local0 = __s20param0.params[0];
    if (__s20local0.castleID == this._castleSelector.selectedCastleVO.objectId) {
      this._castleRessourcesVO = __s20local0;
      this._woodSelector.initComponent(__dep_exact_f855840627e6e145.int(this._castleRessourcesVO.resources.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.WOOD) / this.eventVO.totalAmounts[0]) * this.eventVO.totalAmounts[0], __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.WOOD, 151);
      this._stoneSelector.initComponent(__dep_exact_f855840627e6e145.int(this._castleRessourcesVO.resources.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.STONE) / this.eventVO.totalAmounts[1]) * this.eventVO.totalAmounts[1], __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.STONE, 152);
      this._foodSelector.initComponent(__dep_exact_f855840627e6e145.int(this._castleRessourcesVO.resources.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.FOOD) / this.eventVO.totalAmounts[2]) * this.eventVO.totalAmounts[2], __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.FOOD, 153);
    }
  };
  CastlePayRessourcesForBeggingKnightsEventDialog.prototype.onRemoveEvent = function (__s23param0) {
    if (__s23param0.specialEventVO.eventId == __dep_exact_26a421b704832cff_1.EventConst.EVENTTYPE_BEGGING_KNIGHTS) {
      this.hide();
    }
  };
  CastlePayRessourcesForBeggingKnightsEventDialog.prototype.onSliderChanged = function (__s26param0 = null) {
    this.txt_points.textContentVO.numberValue = this._woodSelector.getSelectedAmount() / this.eventVO.totalAmounts[0] + this._stoneSelector.getSelectedAmount() / this.eventVO.totalAmounts[1] + this._foodSelector.getSelectedAmount() / this.eventVO.totalAmounts[2];
  };
  CastlePayRessourcesForBeggingKnightsEventDialog.__initialize_static_members = function () {
    CastlePayRessourcesForBeggingKnightsEventDialog.NAME = "CastlePayRessourcesForBeggingKnightsExternal";
  };
  return CastlePayRessourcesForBeggingKnightsEventDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastlePayRessourcesForBeggingKnightsEventDialog = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleListVO = require("gge-module:export_CastleListVO");
var __dep_export_CastleResourceCollectorComponent = require("gge-module:export_CastleResourceCollectorComponent");
var __dep_export_CastleSelectorComponent = require("gge-module:export_CastleSelectorComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
