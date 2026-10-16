Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SAllianceHelpAllRequestVO = require("gge-module:export_C2SAllianceHelpAllRequestVO");
var __dep_export_CastleAllianceHelpRequestDataEvent = require("gge-module:export_CastleAllianceHelpRequestDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_AllianceHelpRequestScrollItem = require("gge-module:export_AllianceHelpRequestScrollItem");
var __dep_export_AllianceHelpRequestScrollItemVO = require("gge-module:export_AllianceHelpRequestScrollItemVO");
var __s0local0 = function (__s1param0) {
  function CastleAllianceActionOverviewDialogHelpRequest(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceActionOverviewDialogHelpRequest, __s1param0);
  CastleAllianceActionOverviewDialogHelpRequest.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_allianceHelp_menu_copy"));
    this.textFieldManager.registerTextField(this.subLayerDisp.btn_helpAll.txt_helpAll, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_allianceHelp_menu_helpAll")).autoFitToBounds = true;
    this.initBasicButtons([this.subLayerDisp.mc_list.btn_up, this.subLayerDisp.mc_list.btn_down, this.subLayerDisp.mc_list.item0.btn_help, this.subLayerDisp.mc_list.item1.btn_help, this.subLayerDisp.mc_list.item2.btn_help, this.subLayerDisp.mc_list.item3.btn_help, this.subLayerDisp.btn_helpAll]);
    this.updateHelpAllButton();
    this.createList();
    __dep_export_CastleModel.CastleModel.allianceHelpRequestData.addEventListener(__dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onListUpdate));
  };
  CastleAllianceActionOverviewDialogHelpRequest.prototype.updateHelpAllButton = function () {
    var __s7local0 = false;
    for (var __s7local1 = 0, __s7local2 = __dep_export_CastleModel.CastleModel.allianceHelpRequestData.visibleRequests; __s7local1 < __s7local2.length; __s7local1++) {
      var __s7local3 = __s7local2[__s7local1];
      if (__s7local3 !== undefined && !__s7local3.isOwnPlayer) {
        __s7local0 = true;
        break;
      }
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.subLayerDisp.btn_helpAll, __s7local0);
    this.subLayerDisp.btn_helpAll.toolTipText = __s7local0 ? null : "dialog_allianceHelp_all_disabled_tooltip";
  };
  CastleAllianceActionOverviewDialogHelpRequest.prototype.onClick = function (__s12param0) {
    __s1param0.prototype.onClick.call(this, __s12param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s12param0.target)) {
      switch (__s12param0.target) {
        case this.subLayerDisp.btn_helpAll:
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceHelpAllRequestVO.C2SAllianceHelpAllRequestVO());
      }
    }
  };
  CastleAllianceActionOverviewDialogHelpRequest.prototype.createList = function () {
    if (this.requestItemList) {
      this.requestItemList.clear();
      this.requestItemList.remove();
    }
    this.requestItemList = new __dep_exact_9e901e8e2483a22f.ItemScrollList(this.subLayerDisp.mc_list, this.subLayerDisp.mc_list);
    this.requestItemList.scrollItemClass = __dep_export_AllianceHelpRequestScrollItem.AllianceHelpRequestScrollItem;
    var __s16local0 = __dep_exact_f855840627e6e145.int(this.requestItemList.currentStartIndex);
    this.requestItemList.clear();
    var __s16local1 = __dep_export_CastleModel.CastleModel.allianceHelpRequestData.visibleRequests;
    if (__s16local1 != null) {
      for (var __s16local2 = 0, __s16local3 = __s16local1; __s16local2 < __s16local3.length; __s16local2++) {
        var __s16local4 = __s16local3[__s16local2];
        if (__s16local4 !== undefined && __s16local4) {
          var __s16local5 = new __dep_export_AllianceHelpRequestScrollItemVO.AllianceHelpRequestScrollItemVO();
          __s16local5.allianceRequestVO = __s16local4;
          this.requestItemList.pushContent(__s16local5);
        }
      }
    }
    __s16local0 = __dep_exact_f855840627e6e145.int(Math.max(0, Math.min(__s16local0, this.requestItemList.voList.length - 1)));
    this.requestItemList.initList(__s16local0);
  };
  CastleAllianceActionOverviewDialogHelpRequest.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    if (this.requestItemList) {
      this.requestItemList.clear();
    }
    __dep_export_CastleModel.CastleModel.allianceHelpRequestData.removeEventListener(__dep_export_CastleAllianceHelpRequestDataEvent.CastleAllianceHelpRequestDataEvent.DATA_UPDATED, this.bindFunction(this.onListUpdate));
  };
  CastleAllianceActionOverviewDialogHelpRequest.prototype.onListUpdate = function (__s26param0) {
    this.createList();
    this.updateHelpAllButton();
  };
  return CastleAllianceActionOverviewDialogHelpRequest;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleAllianceActionOverviewDialogHelpRequest = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
