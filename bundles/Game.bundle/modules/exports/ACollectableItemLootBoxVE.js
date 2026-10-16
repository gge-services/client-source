Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_MysteryBoxInfoDialog = require("gge-module:export_MysteryBoxInfoDialog");
var __dep_export_MysteryBoxInfoDialogProperties = require("gge-module:export_MysteryBoxInfoDialogProperties");
var __s0local0 = function (__s1param0) {
  function ACollectableItemLootBoxVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ACollectableItemLootBoxVE, __s1param0);
  ACollectableItemLootBoxVE.prototype.init = function (__s5param0, __s5param1) {
    __s1param0.prototype.init.call(this, __s5param0, __s5param1);
  };
  ACollectableItemLootBoxVE.prototype.iconCreate = function () {
    this.iconContainer.visible = false;
    var __s7local0 = this.getAssetName();
    var __s7local1 = this.getAssetBGName();
    var __s7local2 = __dep_exact_9e901e8e2483a22f_3.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s7local0);
    var __s7local3 = __dep_exact_9e901e8e2483a22f_3.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s7local1);
    var __s7local4 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s7local0, __s7local2, null, 0, false);
    var __s7local5 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s7local1, __s7local3, null, 0, false);
    this.dispCreator.addClip(__s7local5);
    this.dispCreator.addClip(__s7local4);
    if (this.options.icon.showMysteryBoxDrawCounter) {
      var __s7local6 = this.getAssetDrawCounterName();
      var __s7local7 = __dep_exact_9e901e8e2483a22f_3.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s7local6);
      this._iconDrawCountClip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s7local6, __s7local7, null, 0, false);
      this.dispCreator.addClip(this._iconDrawCountClip);
    }
  };
  ACollectableItemLootBoxVE.prototype.getAssetName = function () {
    return "Collectable_" + this.mysteryBoxVO.lootBoxVO.name;
  };
  ACollectableItemLootBoxVE.prototype.getAssetBGName = function () {
    return "Collectable_BG_rarity_" + this.mysteryBoxVO.lootBoxVO.rarity;
  };
  ACollectableItemLootBoxVE.prototype.getAssetDrawCounterName = function () {
    return "Collectable_MysteryBox_DrawCounter";
  };
  ACollectableItemLootBoxVE.prototype.textfieldUpdate = function () {
    this.textfieldSetTextAsNumber(this.vo.amount);
  };
  ACollectableItemLootBoxVE.prototype.textfieldBackgroundVisible = function () {
    return true;
  };
  ACollectableItemLootBoxVE.prototype.onInfoButtonClicked = function () {
    __dep_export_CastleComponent.CastleComponent.layoutManager.showDialog(__dep_export_MysteryBoxInfoDialog.MysteryBoxInfoDialog, new __dep_export_MysteryBoxInfoDialogProperties.MysteryBoxInfoDialogProperties(this.mysteryBoxVO));
  };
  ACollectableItemLootBoxVE.prototype.onAllDispClipsLoaded = function (__s22param0 = null) {
    if (this._iconDrawCountClip) {
      var __s22local0 = this._iconDrawCountClip.currentshownDisplayObject;
      var __s22local1 = this.options.icon.dimension.x * -0.003125 + 1.125;
      __s22local1 = __dep_exact_9e901e8e2483a22f.MathBase.clamp(__s22local1, 0.7, 1);
      __s22local0.mc_drawCount.scaleX = __s22local0.mc_drawCount.scaleY = __s22local1;
      __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance().registerTextField(__s22local0.mc_drawCount.txt_value, new __dep_exact_92d05af59ee2ff30.NumberVO(this.mysteryBoxVO.lootBoxVO.draws), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    }
    this.iconContainer.visible = true;
    __s1param0.prototype.onAllDispClipsLoaded.call(this, __s22param0);
  };
  Object.defineProperty(ACollectableItemLootBoxVE.prototype, "mysteryBoxVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  return ACollectableItemLootBoxVE;
}(require("gge-module:export_ACollectableItemVE").ACollectableItemVE);
exports.ACollectableItemLootBoxVE = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
