Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_C2SAllianceBattleGroundGetTowerInfoVO = require("gge-module:export_C2SAllianceBattleGroundGetTowerInfoVO");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __s0local0 = function (__s1param0) {
  function CastleAllianceInfoDialogABGTower(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_member, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_member"));
    __s3local0.itxt_memberAmount = __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_memberAmount, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(""));
    var __s3local1 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_CastleAllianceInfoDialogABGTowerItem.CastleAllianceInfoDialogABGTowerItem, "CastleAllianceInfo_ABGTowerItem", __dep_export_CastleAllianceInfoDialog.CastleAllianceInfoDialog.NAME);
    __s3local1.itemPaddingY = 6;
    __s3local1.useSmoothScroll = true;
    __s3local0._scrollList = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(__s3local0.subLayerDisp.mc_list).addMaskMc(__s3local0.subLayerDisp.mc_mask).addItemContainerMc(__s3local0.subLayerDisp.mc_list.mc_items).addSliderMc(__s3local0.subLayerDisp.mc_list.mc_slider), __s3local1);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleAllianceInfoDialogABGTower, __s1param0);
  CastleAllianceInfoDialogABGTower.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.itxt_memberAmount.textContentVO.textId = __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
    this.itxt_memberAmount.textContentVO.textReplacements = [this.allianceInfoVO.memberAmount, this.allianceInfoVO.memberMax];
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceBattleGroundGetTowerInfoVO.C2SAllianceBattleGroundGetTowerInfoVO(this.allianceInfoVO.allianceId));
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ABG_TOWERS_LIST_INFO, this.bindFunction(this.updateItems));
    this._scrollList.onShow();
  };
  CastleAllianceInfoDialogABGTower.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._scrollList.onHide();
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ABG_TOWERS_LIST_INFO, this.bindFunction(this.updateItems));
  };
  CastleAllianceInfoDialogABGTower.prototype.updateItems = function (__s9param0) {
    var __s9local0 = [];
    for (var __s9local1 = 0; __s9local1 < __s9param0.params.length; __s9local1++) {
      __s9local0.push(__s9param0.params[__s9local1]);
    }
    this._scrollList.updateWithNewData(__s9local0);
  };
  Object.defineProperty(CastleAllianceInfoDialogABGTower.prototype, "allianceInfoVO", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleAllianceInfoDialogABGTower.prototype, "sublayerDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return CastleAllianceInfoDialogABGTower;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleAllianceInfoDialogABGTower = __s0local0;
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_CastleAllianceInfoDialog = require("gge-module:export_CastleAllianceInfoDialog");
var __dep_export_CastleAllianceInfoDialogABGTowerItem = require("gge-module:export_CastleAllianceInfoDialogABGTowerItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
