Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CollectableRenderClipsList = require("gge-module:export_CollectableRenderClipsList");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleGenericRewardDialog(__s3param0 = null) {
    var __s3local0 = this;
    __s3local0.wonFrame = CastleGenericRewardDialog.FRAME_WON;
    __s3local0.noRewardFrame = CastleGenericRewardDialog.FRAME_NOREWARD_POINT;
    __s3local0.headerFrame = CastleGenericRewardDialog.FRAME_HEADER_POINT;
    __s3local0.gotReward = CastleGenericRewardDialog.FRAME_GOT_REWARD;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, __s3param0 || CastleGenericRewardDialog.ASSET_NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleGenericRewardDialog, __s1param0);
  CastleGenericRewardDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_ok]);
  };
  CastleGenericRewardDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s7param0);
    this.initFrameVisuals();
    this.initDialog();
    this.updateRewards();
  };
  CastleGenericRewardDialog.prototype.initFrameVisuals = function () {
    if (this.dialogDisp.rewardContainer) {
      this.dialogDisp.rewardContainer.visible = true;
    }
    if (this.dialogDisp.mc_header) {
      this.dialogDisp.mc_header.gotoAndStop(this.headerFrame);
    }
    if (this.dialogDisp.noRewards) {
      this.dialogDisp.noRewards.gotoAndStop(this.noRewardFrame);
    }
  };
  CastleGenericRewardDialog.prototype.hideRewardItemMcs = function () {
    for (var __s14local0 = 0; __s14local0 < 3; ++__s14local0) {
      this.dialogDisp.rewardContainer["mc_item" + __s14local0].visible = false;
    }
  };
  Object.defineProperty(CastleGenericRewardDialog.prototype, "grantTypeSuffix", {
    get: function () {
      if (this.dialogProperties.grantType == __dep_exact_26a421b704832cff.RewardConst.ALLIANCE) {
        return "Alliancebank";
      } else {
        return "";
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericRewardDialog.prototype.updateRewards = function () {
    this.hideRewardItemMcs();
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displayMultipleItemsComplete(this, new __dep_export_CollectableRenderClipsList.CollectableRenderClipsList().createByItemMcList(this.getRewardItemMcs()).addItemMcs("mc_item").addEquipmentBgMcs("parent.mc_equipmentBackground").addInfoBtns("parent.btn_info"), this.rewardList, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_DEFAULT, this.getRewardIconDimension()), function onPreRenderFunc(__s24param0) {
      __s24param0.clips.itemMc.parent.visible = true;
    });
  };
  CastleGenericRewardDialog.prototype.initDialog = function () {
    var __s26local0;
    var __s26local1;
    if (this.dialogProperties.rewardList && this.dialogProperties.rewardList.length > 0) {
      this.dialogDisp.noRewards.visible = false;
      this.dialogDisp.rewardContainer.visible = true;
      if (this.dialogProperties.isFirstPrize) {
        this.dialogDisp.rewardContainer.mc_background.gotoAndStop(this.wonFrame);
        __s26local0 = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.firstPlaceTitleTextId);
        __s26local1 = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.firstPlaceCopyTextId, [this.dialogProperties.points]);
      } else if (this.dialogProperties.isTopX) {
        this.dialogDisp.rewardContainer.mc_background.gotoAndStop(this.wonFrame);
        __s26local0 = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.topXTitleTextId);
        __s26local1 = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.topXCopyTextId, this.topXCopyTextReplacements);
      } else {
        this.dialogDisp.rewardContainer.mc_background.gotoAndStop(this.gotReward);
        __s26local0 = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.gotRewardTitleTextId);
        __s26local1 = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.gotRewardCopyTextId, [this.dialogProperties.points]);
      }
    } else {
      this.dialogDisp.rewardContainer.visible = false;
      this.dialogDisp.noRewards.visible = true;
      this.dialogDisp.noRewards.gotoAndStop(this.noRewardFrame);
      __s26local0 = new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(this.noRewardTitleTextId);
      __s26local1 = this.makeSpecialRewardLocalizedTextVO(this.noRewardCopyTextId, this.dialogProperties.points, this.dialogProperties.ownRank);
    }
    var __s26local2 = this.textFieldManager.registerTextField(this.dialogDisp.txt_title, __s26local0);
    __s26local2.autoFitToBounds = true;
    __s26local2.verticalAlign = __dep_exact_9e901e8e2483a22f.GGSVerticalAlign.MIDDLE;
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy, __s26local1).autoFitToBounds = true;
  };
  CastleGenericRewardDialog.prototype.makeSpecialRewardLocalizedTextVO = function (__s33param0, __s33param1, __s33param2) {
    return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s33param0, [__s33param1, __s33param2]);
  };
  CastleGenericRewardDialog.prototype.onClick = function (__s35param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s35param0.target)) {
      __s1param0.prototype.onClick.call(this, __s35param0);
      switch (__s35param0.target) {
        case this.dialogDisp.btn_close:
        case this.dialogDisp.btn_ok:
          this.hide();
      }
    }
  };
  Object.defineProperty(CastleGenericRewardDialog.prototype, "firstPlaceTitleTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialog.prototype, "firstPlaceCopyTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialog.prototype, "topXTitleTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialog.prototype, "topXCopyTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialog.prototype, "topXCopyTextReplacements", {
    get: function () {
      return [this.dialogProperties.topXCount];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialog.prototype, "gotRewardTitleTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialog.prototype, "gotRewardCopyTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialog.prototype, "noRewardTitleTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialog.prototype, "noRewardCopyTextId", {
    get: function () {
      return "";
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericRewardDialog.prototype.getRewardIconDimension = function () {
    if (this.rewardList.length > 1) {
      return new __s0local0(CastleGenericRewardDialog.IMAGE_WIDTH_DUAL, CastleGenericRewardDialog.IMAGE_HEIGHT_DUAL);
    } else {
      return new __s0local0(CastleGenericRewardDialog.IMAGE_WIDTH_SINGLE, CastleGenericRewardDialog.IMAGE_HEIGHT_SINGLE);
    }
  };
  CastleGenericRewardDialog.prototype.getRewardItemMcs = function () {
    var __s61local0 = [];
    if (this.rewardList.length > 1) {
      __s61local0.push(this.dialogDisp.rewardContainer.mc_item1);
      __s61local0.push(this.dialogDisp.rewardContainer.mc_item2);
    } else if (this.rewardList.length == 1) {
      __s61local0.push(this.dialogDisp.rewardContainer.mc_item0);
    }
    return __s61local0;
  };
  Object.defineProperty(CastleGenericRewardDialog.prototype, "rewardList", {
    get: function () {
      return this.dialogProperties.rewardList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleGenericRewardDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleGenericRewardDialog.ASSET_NAME = "CastleGenericEventReward";
  CastleGenericRewardDialog.FRAME_WINNING_START = 2;
  CastleGenericRewardDialog.FRAME_GOT_REWARD = 1;
  CastleGenericRewardDialog.FRAME_GOT_REWARD_SAMURAI = 7;
  CastleGenericRewardDialog.FRAME_GOT_REWARD_SAMURAI_ALLIANCE = 7;
  CastleGenericRewardDialog.FRAME_GOT_REWARD_RED_ALIEN = 9;
  CastleGenericRewardDialog.FRAME_WON = 2;
  CastleGenericRewardDialog.FRAME_WON_NOMAD = 5;
  CastleGenericRewardDialog.FRAME_WON_NOMAD_ALLIANCE = 5;
  CastleGenericRewardDialog.FRAME_WON_SAMURAI = 6;
  CastleGenericRewardDialog.FRAME_WON_SAMURAI_ALLIANCE = 6;
  CastleGenericRewardDialog.FRAME_HEADER_POINT = 1;
  CastleGenericRewardDialog.FRAME_HEADER_BEGGING = 2;
  CastleGenericRewardDialog.FRAME_HEADER_ALIEN = 3;
  CastleGenericRewardDialog.FRAME_HEADER_ALIEN_ALLIANCE = 3;
  CastleGenericRewardDialog.FRAME_HEADER_LUCKY = 4;
  CastleGenericRewardDialog.FRAME_HEADER_NOMAD = 5;
  CastleGenericRewardDialog.FRAME_HEADER_NOMAD_ALLIANCE = 5;
  CastleGenericRewardDialog.FRAME_HEADER_SAMURAI = 6;
  CastleGenericRewardDialog.FRAME_HEADER_SAMURAI_ALLIANCE = 6;
  CastleGenericRewardDialog.FRAME_HEADER_HALLOWEEN = 7;
  CastleGenericRewardDialog.FRAME_HEADER_RED_ALIEN = 8;
  CastleGenericRewardDialog.FRAME_COLLECTOR_HALLOWEEN = 9;
  CastleGenericRewardDialog.FRAME_COLLECTOR_CHRISTMAS = 10;
  CastleGenericRewardDialog.FRAME_COLLECTOR_CARNIVAL = 11;
  CastleGenericRewardDialog.FRAME_COLLECTOR_SPRING = 12;
  CastleGenericRewardDialog.FRAME_NOREWARD_POINT = 1;
  CastleGenericRewardDialog.FRAME_NOREWARD_BEGGING = 2;
  CastleGenericRewardDialog.FRAME_NOREWARD_ALIEN = 3;
  CastleGenericRewardDialog.FRAME_NOREWARD_ALIEN_ALLIANCE = 3;
  CastleGenericRewardDialog.FRAME_NOREWARD_RED_ALIEN_ALLIANCE = 3;
  CastleGenericRewardDialog.FRAME_NOREWARD_LUCKY = 4;
  CastleGenericRewardDialog.FRAME_NOREWARD_NOMAD = 5;
  CastleGenericRewardDialog.FRAME_NOREWARD_NOMAD_ALLIANCE = 5;
  CastleGenericRewardDialog.FRAME_NOREWARD_SAMURAI = 8;
  CastleGenericRewardDialog.FRAME_NOREWARD_SAMURAI_ALLIANCE = 8;
  CastleGenericRewardDialog.IMAGE_WIDTH_DUAL = 60;
  CastleGenericRewardDialog.IMAGE_HEIGHT_DUAL = 60;
  CastleGenericRewardDialog.IMAGE_WIDTH_SINGLE = 60;
  CastleGenericRewardDialog.IMAGE_HEIGHT_SINGLE = 60;
  return CastleGenericRewardDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleGenericRewardDialog = __s0local1;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
