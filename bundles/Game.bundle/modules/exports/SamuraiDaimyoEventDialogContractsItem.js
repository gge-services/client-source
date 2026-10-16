Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstNPCs = require("gge-module:export_ClientConstNPCs");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_SamuraiDaimyoDataXml = require("gge-module:export_SamuraiDaimyoDataXml");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function SamuraiDaimyoEventDialogContractsItem(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s1param0.call(this, null) || this;
    __s3local0._disp = (__s3local0._clip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(SamuraiDaimyoEventDialogContractsItem.ASSET_CLIP_NAME, __dep_export_IsoHelper.IsoHelper.view.getAssetFileURL(__dep_export_SamuraiDaimyoEventDialog.SamuraiDaimyoEventDialog.NAME))).currentshownDisplayObject;
    __s3local0._contractType = __s3param0;
    __s3local0._progressVO = __s3param1;
    __s3local0._onClickCallbackFunc = __s3param2;
    __s3local0.init();
    __s3local0.setSelection(false);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(SamuraiDaimyoEventDialogContractsItem, __s1param0);
  SamuraiDaimyoEventDialogContractsItem.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.disp, 1);
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.disp.mc_icon, __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this.contractType == __dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE ? __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_DAIMYO_CASTLE : __dep_export_ClientConstNPCs.ClientConstNPCs.NPC_ID_DAIMYO_TOWNSHIP).crest);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_name, this.getNameTextVO()).autoFitToBounds = true;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_rank, this.getRankTextVO()).autoFitToBounds = true;
  };
  SamuraiDaimyoEventDialogContractsItem.prototype.destroy = function () {
    __s1param0.prototype.destroy.call(this);
    this._clip = null;
  };
  SamuraiDaimyoEventDialogContractsItem.prototype.setSelection = function (__s9param0) {
    this.disp.mc_selected.visible = __s9param0;
    this.disp.mc_default.visible = !__s9param0;
  };
  SamuraiDaimyoEventDialogContractsItem.prototype.getNameTextVO = function () {
    return new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.contractType == __dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE ? "contracts_category_daimyo_attack_header" : "contracts_category_township_defend_header"));
  };
  SamuraiDaimyoEventDialogContractsItem.prototype.getRankTextVO = function () {
    var __s13local0 = [this.getXmlContractVO().rank, __dep_export_CastleModel.CastleModel.samuraiDaimyoData.xml.getContractSeriesIndex(this.contractType, this.progressVO.id) + 1, __dep_export_CastleModel.CastleModel.samuraiDaimyoData.xml.getContractSeries(this.contractType, this.progressVO.id).length];
    return new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("rankAndStep", __s13local0));
  };
  SamuraiDaimyoEventDialogContractsItem.prototype.getDescriptionTextVO = function () {
    return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.contractType == __dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE ? "contracts_category_daimyo_attack_desc" : "contracts_category_township_defend_desc");
  };
  SamuraiDaimyoEventDialogContractsItem.prototype.getXmlContractVO = function () {
    return __dep_export_CastleModel.CastleModel.samuraiDaimyoData.xml.getContractsList(this.contractType).get(this.progressVO.id);
  };
  SamuraiDaimyoEventDialogContractsItem.prototype.getXmlDaimyoAreaVO = function () {
    var __s19local0 = this.getXmlContractVO();
    var __s19local1 = __dep_export_CastleModel.CastleModel.samuraiDaimyoData.server.getArea(this.contractType, __s19local0.rank);
    if (this.contractType == __dep_export_SamuraiDaimyoDataXml.SamuraiDaimyoDataXml.CONTRACT_TYPE_CASTLE) {
      return __dep_export_CastleModel.CastleModel.daimyoCastleXmlData.getDaimyoCastle(__s19local1.rank, __s19local1.level, __s19local1.eventAutoScalingCampID);
    } else {
      return __dep_export_CastleModel.CastleModel.daimyoTownshipXmlData.getDaimyoTownship(__s19local1.rank, __s19local1.level, __s19local1.eventAutoScalingCampID);
    }
  };
  SamuraiDaimyoEventDialogContractsItem.prototype.onClick = function (__s23param0) {
    __s1param0.prototype.onClick.call(this, __s23param0);
    if (this._onClickCallbackFunc) {
      this._onClickCallbackFunc(this);
    }
  };
  Object.defineProperty(SamuraiDaimyoEventDialogContractsItem.prototype, "progressVO", {
    get: function () {
      return this._progressVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(SamuraiDaimyoEventDialogContractsItem.prototype, "contractType", {
    get: function () {
      return this._contractType;
    },
    enumerable: true,
    configurable: true
  });
  SamuraiDaimyoEventDialogContractsItem.ASSET_CLIP_NAME = "SamuraiDaimyoEvent_QuestItemSub";
  return SamuraiDaimyoEventDialogContractsItem;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.SamuraiDaimyoEventDialogContractsItem = __s0local0;
var __dep_export_IsoHelper = require("gge-module:export_IsoHelper");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_SamuraiDaimyoEventDialog = require("gge-module:export_SamuraiDaimyoEventDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
