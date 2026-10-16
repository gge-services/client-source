Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SAllianceTopicChangeRanks = require("gge-module:export_C2SAllianceTopicChangeRanks");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleAllianceForumData = require("gge-module:export_CastleAllianceForumData");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function CastleForumVisibilityDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleForumVisibilityDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleForumVisibilityDialog, __s1param0);
  CastleForumVisibilityDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_ok, this.dialogDisp.btn_cancel, this.dialogDisp.btn_rank0, this.dialogDisp.btn_rank1, this.dialogDisp.btn_rank2, this.dialogDisp.btn_rank3, this.dialogDisp.btn_rank4]);
  };
  CastleForumVisibilityDialog.prototype.showLoaded = function (__s7param0 = null) {
    __s1param0.prototype.showLoaded.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_communication_selectRanks_header"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_description, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_communication_selectRanks_text"));
    this.initRankingGroupButtons();
    this.setRankingGroupButtonsFromProperties();
  };
  CastleForumVisibilityDialog.prototype.initRankingGroupButtons = function () {
    var __s9local0 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.AllianceConst.getRankingGroupFromRank(__dep_export_CastleModel.CastleModel.userData.allianceRank));
    for (var __s9local1 = 0; __s9local1 < __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_RANKING_GROUPS_COUNT; ++__s9local1) {
      this.dialogDisp["btn_rank" + __s9local1].mc_icon.gotoAndStop(__s9local1 + 1);
      var __s9local2 = __s9local1 <= __s9local0;
      this.selectRankingGroupButton(__s9local1, __s9local2, true);
      this.enableRankingGroupButton(__s9local1, !__s9local2);
    }
    for (var __s9local3 = 0; __s9local3 < __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_RANKING_GROUPS_COUNT; ++__s9local3) {
      this.updateButtonToolTip(__s9local3);
    }
  };
  CastleForumVisibilityDialog.prototype.updateButtonToolTip = function (__s15param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.dialogDisp["btn_rank" + __s15param0])) {
      this.dialogDisp["btn_rank" + __s15param0].toolTipText = __dep_export_CastleAllianceForumData.CastleAllianceForumData.getVisibilityToolTip(__s15param0);
    } else {
      this.dialogDisp["btn_rank" + __s15param0].toolTipText = "dialog_alliance_communication_selectRanks_higheRank_tooltip";
    }
  };
  CastleForumVisibilityDialog.prototype.enableRankingGroupButton = function (__s19param0, __s19param1) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp["btn_rank" + __s19param0], __s19param1);
    this.updateButtonToolTip(__s19param0);
  };
  CastleForumVisibilityDialog.prototype.selectRankingGroupButton = function (__s21param0, __s21param1, __s21param2 = false) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(this.dialogDisp["btn_rank" + __s21param0]) || __s21param2) {
      if (__s21param1) {
        for (var __s21local0 = __s21param0; __s21local0 >= 0; --__s21local0) {
          this.singleSelectRankingGroupButton(__s21local0, __s21param1);
        }
      } else {
        for (var __s21local1 = __s21param0 + __dep_exact_f855840627e6e145.int(__s21param0 < __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_RANKING_GROUPS_COUNT - 1 && this.isRankingGroupSelected(__s21param0 + 1) ? 1 : 0); __s21local1 < __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_RANKING_GROUPS_COUNT; ++__s21local1) {
          this.singleSelectRankingGroupButton(__s21local1, __s21param1);
        }
      }
    }
  };
  CastleForumVisibilityDialog.prototype.singleSelectRankingGroupButton = function (__s30param0, __s30param1) {
    this.dialogDisp["btn_rank" + __s30param0].mc_select.gotoAndStop(__s30param1 ? 2 : 1);
  };
  CastleForumVisibilityDialog.prototype.setRankingGroupButtonsFromProperties = function () {
    if (this.dialogProperties.visibleRanks) {
      for (var __s32local0 = 0; __s32local0 < __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_RANKING_GROUPS_COUNT; ++__s32local0) {
        this.selectRankingGroupButton(__s32local0, false);
      }
      for (var __s32local1 = 0; __s32local1 < __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_RANKING_GROUPS_COUNT; ++__s32local1) {
        for (var __s32local2 = 0; __s32local2 < this.dialogProperties.visibleRanks.length; ++__s32local2) {
          if (this.dialogProperties.visibleRanks[__s32local2] == __s32local1) {
            this.selectRankingGroupButton(__s32local1, true);
          }
        }
      }
    } else {
      this.initRankingGroupButtons();
    }
  };
  CastleForumVisibilityDialog.prototype.isRankingGroupSelected = function (__s43param0) {
    return this.dialogDisp["btn_rank" + __s43param0].mc_select.currentFrame == 1;
  };
  CastleForumVisibilityDialog.prototype.getRankingGroupArrayFromSelection = function () {
    var __s45local0 = [];
    for (var __s45local1 = 0; __s45local1 < __dep_exact_26a421b704832cff.AllianceConst.ALLIANCE_RANKING_GROUPS_COUNT; ++__s45local1) {
      if (this.isRankingGroupSelected(__s45local1)) {
        __s45local0.push(__s45local1);
      }
    }
    return __s45local0;
  };
  CastleForumVisibilityDialog.prototype.onClick = function (__s50param0) {
    __s1param0.prototype.onClick.call(this, __s50param0);
    switch (__s50param0.target) {
      case this.dialogDisp.btn_rank0:
        this.selectRankingGroupButton(0, !this.isRankingGroupSelected(0));
        break;
      case this.dialogDisp.btn_rank1:
        this.selectRankingGroupButton(1, !this.isRankingGroupSelected(1));
        break;
      case this.dialogDisp.btn_rank2:
        this.selectRankingGroupButton(2, !this.isRankingGroupSelected(2));
        break;
      case this.dialogDisp.btn_rank3:
        this.selectRankingGroupButton(3, !this.isRankingGroupSelected(3));
        break;
      case this.dialogDisp.btn_rank4:
        this.selectRankingGroupButton(4, !this.isRankingGroupSelected(4));
        break;
      case this.dialogDisp.btn_ok:
        __dep_export_CastleForumNewTopic.CastleForumNewTopic.visibleRankingGroups = this.getRankingGroupArrayFromSelection();
        if (this.dialogProperties.changingTopicId >= 0) {
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SAllianceTopicChangeRanks.C2SAllianceTopicChangeRanks(this.dialogProperties.changingTopicId, this.getRankingGroupArrayFromSelection()));
        }
        this.hide();
        break;
      case this.dialogDisp.btn_cancel:
        this.hide();
    }
  };
  Object.defineProperty(CastleForumVisibilityDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleForumVisibilityDialog.__initialize_static_members = function () {
    CastleForumVisibilityDialog.NAME = "CastleForumVisibilityEx";
  };
  return CastleForumVisibilityDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleForumVisibilityDialog = __s0local0;
var __dep_export_CastleForumNewTopic = require("gge-module:export_CastleForumNewTopic");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
