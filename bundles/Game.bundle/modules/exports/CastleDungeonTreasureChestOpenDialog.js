Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleDungeonTreasureChestOpenDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleDungeonTreasureChestOpenDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleDungeonTreasureChestOpenDialog, __s1param0);
  CastleDungeonTreasureChestOpenDialog.prototype.showLoaded = function (__s5param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_primeday_specialoffer_rewardtitle"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_privateOffer_whaleChest_rewardGet_description"));
    this.initBasicButtons([this.dialogDisp.btn_ok]);
    this.dialogDisp.btn_ok.toolTipText = __dep_exact_9e901e8e2483a22f.GenericTextIds.BUTTON_OKAY;
    this.updateRewards();
  };
  CastleDungeonTreasureChestOpenDialog.prototype.onClick = function (__s7param0) {
    __s1param0.prototype.onClick.call(this, __s7param0);
    switch (__s7param0.target) {
      case this.dialogDisp.btn_ok:
        this.hide();
    }
  };
  CastleDungeonTreasureChestOpenDialog.prototype.updateRewards = function () {
    var __s10local0;
    var __s10local1 = this.offerVO.getTotalRewardListFromOfferVO();
    this.destroyCollectableRenderList();
    var __s10local2 = CastleDungeonTreasureChestOpenDialog.REWARD_START_X;
    for (var __s10local3 = 0; __s10local3 < __s10local1.length && __s10local3 < 13; ++__s10local3) {
      __s10local0 = __s10local1.getItemByIndex(__s10local3);
      if (__dep_exact_81dacdf05bd32292_2.instanceOfClass(__s10local0, "ACollectableItemEquipmentVO")) {
        this.addEquipmentItem(__s10local0, __s10local2);
      } else {
        this.addRewardItem(__s10local0, __s10local2);
      }
      __s10local2 += CastleDungeonTreasureChestOpenDialog.REWARD_ITEM_DIST;
    }
  };
  CastleDungeonTreasureChestOpenDialog.prototype.addRewardItem = function (__s16param0, __s16param1) {
    var __s16local0 = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName("StandardRewardItem"))();
    this.dialogDisp.addChild(__s16local0);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s16local0), __s16param0, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED));
    __s16local0.x = __s16param1;
    __s16local0.y = CastleDungeonTreasureChestOpenDialog.REWARD_ITEM_YPOS;
  };
  CastleDungeonTreasureChestOpenDialog.prototype.addEquipmentItem = function (__s18param0, __s18param1) {
    var __s18local0 = new __s0local0();
    this.dialogDisp.addChild(__s18local0);
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemAndAddToRenderList(this, new __dep_export_CollectableRenderClips.CollectableRenderClips(__s18local0).addIconMc(__s18local0), __s18param0, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_BASIC, new __s0local1(50, 50)));
    __s18local0.x = __s18param1;
    __s18local0.y = CastleDungeonTreasureChestOpenDialog.REWARD_ITEM_YPOS;
  };
  Object.defineProperty(CastleDungeonTreasureChestOpenDialog.prototype, "offerVO", {
    get: function () {
      return this.dialogProperties.offerVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleDungeonTreasureChestOpenDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleDungeonTreasureChestOpenDialog.__initialize_static_members = function () {
    CastleDungeonTreasureChestOpenDialog.REWARD_START_X = 227;
    CastleDungeonTreasureChestOpenDialog.REWARD_ITEM_YPOS = 352;
    CastleDungeonTreasureChestOpenDialog.REWARD_ITEM_DIST = 75;
    CastleDungeonTreasureChestOpenDialog.NAME = "CastleDungeonTreasureChestOpenExternal";
  };
  return CastleDungeonTreasureChestOpenDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleDungeonTreasureChestOpenDialog = __s0local2;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
__s0local2.__initialize_static_members();
