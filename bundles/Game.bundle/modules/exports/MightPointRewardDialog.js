Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __dep_export_RewardScrollItemVO = require("gge-module:export_RewardScrollItemVO");
var __s0local0 = function (__s1param0) {
  function MightPointRewardDialog() {
    var __s3local0 = this;
    __s3local0._preventHideOnJoinCastle = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, MightPointRewardDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MightPointRewardDialog, __s1param0);
  MightPointRewardDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("might_reward_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_reward_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("might_reward_info"));
    this.i_points_txt_value = this.textFieldManager.registerTextField(this.dialogDisp.mc_points.txt_value, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("might_reward_amount"));
    this.i_txt_next_reward = this.textFieldManager.registerTextField(this.dialogDisp.txt_next_reward, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("might_reward_next"));
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.mc_rewards.btn_down, this.dialogDisp.mc_rewards.btn_up]);
  };
  MightPointRewardDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.dialogDisp.bg.crest, __dep_export_CastleModel.CastleModel.userData.playerCrest);
    this.dialogDisp.mc_points.txt_value.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_MIGHT_POINTS);
    if (this.nextMightRank) {
      this.i_txt_next_reward.textContentVO.textId = "might_reward_next";
      this.i_txt_next_reward.textContentVO.textReplacements = [this.nextMightRank.threshold];
    } else {
      this.i_txt_next_reward.textContentVO.textId = "might_reward_final";
    }
    this.i_points_txt_value.textContentVO.textReplacements = [this.currentMightRank.threshold];
    this._preventHideOnJoinCastle = false;
  };
  MightPointRewardDialog.prototype.onClick = function (__s11param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s11param0.target)) {
      __s1param0.prototype.onClick.call(this, __s11param0);
      switch (__s11param0.target) {
        case this.dialogDisp.btn_ok:
          this._preventHideOnJoinCastle = false;
          this.hide();
      }
    }
  };
  MightPointRewardDialog.prototype.showLoaded = function (__s15param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s15param0);
    if (this.mightPointRewardDialogProperties.isLoaded) {
      this.showRewards();
    } else {
      this.hide();
      this.mightPointRewardDialogProperties.isLoaded = true;
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(MightPointRewardDialog, this.mightPointRewardDialogProperties);
    }
  };
  MightPointRewardDialog.prototype.hideLoaded = function (__s19param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s19param0);
    this.disposeScrollList();
  };
  MightPointRewardDialog.prototype.hide = function () {
    if (!this._preventHideOnJoinCastle) {
      __s1param0.prototype.hide.call(this);
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.stopAllMoviesGotoFrameOne(this.dialogDisp);
    }
  };
  MightPointRewardDialog.prototype.showRewards = function () {
    var __s24local0 = this.rankRewards;
    this.disposeScrollList();
    this._itemScrollList = new __dep_exact_9e901e8e2483a22f.ItemScrollList(this.dialogDisp.mc_rewards);
    this._itemScrollList.scrollInstanceName = "i";
    this._itemScrollList.scrollStep = MightPointRewardDialog.MAX_REWARDS;
    this._itemScrollList.scrollItemClass = __dep_export_RewardScrollItem.RewardScrollItem;
    for (var __s24local1 = 0; __s24local1 < __s24local0.length; __s24local1++) {
      var __s24local2 = new __dep_export_RewardScrollItemVO.RewardScrollItemVO(__s24local0.getItemByIndex(__s24local1));
      this._itemScrollList.pushContent(__s24local2);
    }
    this._itemScrollList.initList();
  };
  MightPointRewardDialog.prototype.disposeScrollList = function () {
    if (this._itemScrollList) {
      this._itemScrollList.clear();
      this._itemScrollList.remove();
      this._itemScrollList = null;
    }
  };
  Object.defineProperty(MightPointRewardDialog.prototype, "mightPointRewardDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MightPointRewardDialog.prototype, "currentMightRank", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.mightData.getNode(this.mightPointRewardDialogProperties.rankIDs[0]);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MightPointRewardDialog.prototype, "nextMightRank", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.mightData.getNode(this.currentMightRank.getId() + 1);
    },
    enumerable: true,
    configurable: true
  });
  MightPointRewardDialog.prototype.addEventListenerOnShow = function () {
    this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onJoinCastle));
  };
  MightPointRewardDialog.prototype.removeEventListenerOnHide = function () {
    this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onJoinCastle));
  };
  MightPointRewardDialog.prototype.onJoinCastle = function (__s41param0) {
    if (__s41param0.params[0] == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO) {
      this._preventHideOnJoinCastle = true;
      this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE_FINISHED, this.bindFunction(this.onJoinCastleFinished));
    }
  };
  MightPointRewardDialog.prototype.onJoinCastleFinished = function (__s44param0) {
    if (__s44param0.params[0] == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_ISO) {
      this.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE_FINISHED, this.bindFunction(this.onJoinCastleFinished));
    }
  };
  Object.defineProperty(MightPointRewardDialog.prototype, "rankRewards", {
    get: function () {
      var __s47local0 = new __dep_export_CollectableList.CollectableList();
      for (var __s47local1 = __dep_exact_f855840627e6e145.int(this.mightPointRewardDialogProperties.rankIDs.length), __s47local2 = 0; __s47local2 < __s47local1; __s47local2++) {
        __s47local0.addList(__dep_export_CastleModel.CastleModel.rewardData.getListById(__dep_export_CastleModel.CastleModel.mightData.getNode(this.mightPointRewardDialogProperties.rankIDs[__s47local2]).rewardID));
      }
      return __s47local0;
    },
    enumerable: true,
    configurable: true
  });
  MightPointRewardDialog.__initialize_static_members = function () {
    MightPointRewardDialog.NAME = "MightPointReward";
    MightPointRewardDialog.MAX_REWARDS = 3;
  };
  return MightPointRewardDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.MightPointRewardDialog = __s0local0;
var __dep_export_CollectableList = require("gge-module:export_CollectableList");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_RewardScrollItem = require("gge-module:export_RewardScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
