Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRendererList = require("gge-module:export_CollectableRendererList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_SimpleScrollComponent = require("gge-module:export_SimpleScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function GachaOfferingRewardsDialog() {
    var __s3local0 = __s1param0.call(this, GachaOfferingRewardsDialog.NAME) || this;
    __s3local0.currentLevel = 1;
    __s3local0.renderLists = [];
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(GachaOfferingRewardsDialog, __s1param0);
  GachaOfferingRewardsDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_left, this.dialogDisp.btn_right], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover, 1);
    this._scrollComponent = new __dep_export_SimpleScrollComponent.SimpleScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp.mc_list).addMouseWheelElements([this.dialogDisp]).addVisualElements([this.dialogDisp.mc_list]), new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true));
  };
  GachaOfferingRewardsDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChanged));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_generals_inn_drawChances_header")));
    this.currentLevel = this.getEventVO().getCurrentLevel();
    this.updateLevel(0);
  };
  GachaOfferingRewardsDialog.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChanged));
    this._scrollComponent.hide();
  };
  GachaOfferingRewardsDialog.prototype.onClick = function (__s11param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s11param0.target)) {
      __s1param0.prototype.onClick.call(this, __s11param0);
      switch (__s11param0.target) {
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_left:
          this.updateLevel(-1);
          break;
        case this.dialogDisp.btn_right:
          this.updateLevel(1);
      }
    }
  };
  GachaOfferingRewardsDialog.prototype.updateLevel = function (__s15param0) {
    if (__s15param0 == -1 && this.currentLevel == 1) {
      this.currentLevel = this.getMaxOfferingLevel();
    } else if (__s15param0 == 1 && this.currentLevel == this.getMaxOfferingLevel()) {
      this.currentLevel = 1;
    } else {
      this.currentLevel = this.currentLevel + __s15param0;
    }
    this.txtLevel ||= this.textFieldManager.registerTextField(this.dialogDisp.txt_level, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("level_placeholder", 0));
    this.txtLevel.textContentVO.textReplacements = [this.currentLevel.toString()];
    this.updateRewards();
  };
  GachaOfferingRewardsDialog.prototype.updateRewards = function () {
    var __s20local0 = this;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_list.mc_items);
    this.renderLists.forEach(function (__s22param0) {
      return __s22param0.destroyCollectableRenderList();
    });
    this.renderLists = [];
    var __s20local1 = this.getEventVO().getGachaVOByLevel(this.currentLevel).getLootBoxTombolas();
    var __s20local2 = new Map();
    for (var __s20local3 = 0, __s20local4 = __s20local1; __s20local3 < __s20local4.length; __s20local3++) {
      var __s20local5 = __s20local4[__s20local3];
      var __s20local6 = __s20local5.rewardCategory;
      if (!__s20local2.has(__s20local6)) {
        __s20local2.set(__s20local6, []);
      }
      __s20local2.get(__s20local6).push(__s20local5);
    }
    var __s20local7 = ["Common", "Rare", "Epic", "Legendary"];
    var __s20local8 = 0;
    (__s20local2 = new Map(Array.from(__s20local2.entries()).sort(function (__s27param0, __s27param1) {
      return __s20local7.indexOf(__s27param0[0]) - __s20local7.indexOf(__s27param1[0]);
    }))).forEach(function (__s29param0, __s29param1) {
      var __s29local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("GachaOfferingRewards_Header", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(GachaOfferingRewardsDialog.NAME), null, 0, false);
      __s20local0.dialogDisp.mc_list.mc_items.addChild(__s29local0);
      __s29local0.y = __s20local8;
      __s20local8 += __s29local0.height;
      __s29local0.currentshownDisplayObject.mc_legendary.visible = __s29param1 == "Legendary";
      __s29local0.currentshownDisplayObject.mc_epic.visible = __s29param1 == "Epic";
      __s29local0.currentshownDisplayObject.mc_rare.visible = __s29param1 == "Rare";
      __s29local0.currentshownDisplayObject.mc_common.visible = __s29param1 == "Common";
      __s20local0.textFieldManager.registerTextField(__s29local0.currentshownDisplayObject.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_mysteryBoxSystem_boxRarity_" + __s29param1.toLowerCase()));
      __s29param0.forEach(function (__s31param0) {
        __s31param0.rewardIDs.forEach(function (__s33param0) {
          var __s33local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("GachaOfferingRewards_Body", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(GachaOfferingRewardsDialog.NAME), null, 0, false);
          __s20local0.dialogDisp.mc_list.mc_items.addChild(__s33local0);
          __s33local0.y = __s20local8;
          __s20local8 += __s33local0.height;
          var __s33local1 = __s33local0.currentshownDisplayObject;
          var __s33local2 = __dep_export_CastleModel.CastleModel.rewardData.getListByIdArray([__s33param0]).getItemByIndex(0);
          var __s33local3 = new __dep_export_CollectableRenderClips.CollectableRenderClips(__s33local1.mc_item.mc_item).addIconMc(__s33local1.mc_item.mc_item.mc_icon).addInfoBtn(__s33local1.mc_item.btn_info).addTextfield(__s33local1.mc_item.mc_item.txt_text).addTextfieldBgMc(__s33local1.mc_item.mc_item.mc_textBackground).addBuildingLevelMc(__s33local1.mc_item.mc_item.mc_buildingLevel);
          var __s33local4 = new __dep_export_CollectableRendererList.CollectableRendererList();
          var __s33local5 = new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, new __s0local0(60, 60));
          __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItemComplete(__s33local4, __s33local3, __s33local2, __s33local5, __s20local0.bindFunction(__s20local0.preRenderFunc));
          __s20local0.textFieldManager.registerTextField(__s33local0.currentshownDisplayObject.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s33local2.getDescriptionTextId())).autoFitToBounds = true;
          __s20local0.renderLists.push(__s33local4);
        });
      });
    });
    var __s20local9 = this.dialogDisp.mc_list.mc_items.getBounds(null);
    this._scrollComponent.init(0, Math.max(__s20local9.height - this.dialogDisp.mc_list.mc_mask.height, 0), 10, 10);
    this._scrollComponent.show();
    this._scrollComponent.scrollToPercent(0);
    this._scrollComponent.setVisibility(__s20local9.height > this.dialogDisp.mc_list.mc_mask.height);
  };
  GachaOfferingRewardsDialog.prototype.preRenderFunc = function (__s35param0) {
    if (__s35param0.itemVO.itemType == __dep_export_CollectableEnum.CollectableEnum.BUILDING) {
      __s35param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = -2;
    }
    if (__s35param0.itemVO.itemType == __dep_export_CollectableEnum.CollectableEnum.EQUIPMENT_UNIQUE || __s35param0.itemVO.itemType == __dep_export_CollectableEnum.CollectableEnum.GEM) {
      __s35param0.getRenderer(__dep_export_CollectableRenderOptions.CollectableRenderOptions.ICON_TRANSFORM).transform.offset.y = 0;
    }
  };
  GachaOfferingRewardsDialog.prototype.onScrollValueChanged = function () {
    this.dialogDisp.mc_list.mc_items.y = -this._scrollComponent.currentValue;
  };
  GachaOfferingRewardsDialog.prototype.getMaxOfferingLevel = function () {
    return this.getEventVO().getGachaVOs().length;
  };
  Object.defineProperty(GachaOfferingRewardsDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  GachaOfferingRewardsDialog.prototype.getEventVO = function () {
    return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.dialogProperties.eventID);
  };
  GachaOfferingRewardsDialog.NAME = "GachaOfferingRewards";
  return GachaOfferingRewardsDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.GachaOfferingRewardsDialog = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
