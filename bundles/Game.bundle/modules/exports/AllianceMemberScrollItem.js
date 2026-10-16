Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_SpecialServerHelper = require("gge-module:export_SpecialServerHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function AllianceMemberScrollItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.itxt_honor = __s3local0.textFieldManager.registerTextField(__s3param0.txt_honor, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    __s3local0.itxt_level = __s3local0.textFieldManager.registerTextField(__s3param0.txt_level, new __dep_exact_92d05af59ee2ff30.TextVO(""), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    __s3local0.itxt_coin = __s3local0.textFieldManager.registerTextField(__s3param0.txt_don_c1_res, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0, true), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceMemberScrollItem, __s1param0);
  AllianceMemberScrollItem.prototype.customFillItem = function () {
    __s1param0.prototype.customFillItem.call(this);
    this.fillItem(this.disp, this.allianceMemberScrollItemVO);
  };
  AllianceMemberScrollItem.prototype.fillItem = function (__s7param0, __s7param1) {
    var __s7local0 = __s7param1.ownerInfoVO;
    if (__s7param0 && __s7param0.mc_bg && __s7local0) {
      var __s7local1 = __s7param1.additionalMemberInfoVO;
      if (__s7local1) {
        __s7param0.mc_bg.visible = __s7local1.hasLandmark;
        if (__s7param0.mc_bg.visible) {
          __s7param0.mc_bg.gotoAndStop(this.getItemBgFrame(__s7local1));
        }
        __s7param0.btn_name.playerID = __s7local0.playerID;
        __s7param0.btn_name.toolTipText = this.getItemLandmarkToolTip(__s7local1);
        var __s7local2 = __dep_export_CastleModel.CastleModel.allianceData.mayRerank(__dep_export_CastleModel.CastleModel.userData.allianceRank, __s7local0.allianceRank) && __s7local0.playerID != __dep_export_CastleModel.CastleModel.userData.playerID;
        __s7param0.btn_settings.visible = __s7local2;
        __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([__s7param0.btn_settings]);
        __dep_export_ButtonHelper.ButtonHelper.initButton(__s7param0.btn_name, -1, __dep_export_AllianceMemberNameButton.AllianceMemberNameButton);
        __dep_export_ButtonHelper.ButtonHelper.enableButton(__s7param0.btn_settings, __s7local2);
        __s7param0.btn_settings.memberVO = __s7local0;
        __s7param0.btn_settings.toolTipText = __dep_exact_92d05af59ee2ff30_2.Localize.text("dialog_alliance_memberSettings");
        __s7param0.icon_rank_area.icon_rank.gotoAndStop(__s7local0.allianceRank + 1);
        __s7param0.icon_rank_area.toolTipText = __dep_exact_92d05af59ee2ff30_2.Localize.text("dialog_alliance_rank" + __dep_export_CastleAllianceData.CastleAllianceData.getTextIDForRank(__s7local0.allianceRank));
        this.textFieldManager.registerTextField(__s7param0.btn_name.txt_playerName, new __dep_exact_92d05af59ee2ff30.TextVO(__s7local0.playerName), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true)).autoFitToBounds = true;
        __s7param0.btn_name.txt_playerName.mouseEnabled = true;
        this.textFieldManager.registerTextField(__s7param0.txt_donatedC2, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s7local1.givenC2, true), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
        this.updateHonor(this.allianceMemberScrollItemVO.honorShown);
        this.updateLegendXP(this.allianceMemberScrollItemVO.legendXPShown);
        this.updateCoin(this.allianceMemberScrollItemVO.coinShown);
        this.textFieldManager.registerTextField(__s7param0.txt_dailyfame, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s7local1.dailyFame, true), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
        __s7param0.icon_state.gotoAndStop(__s7local1.loginActivity + 1);
        __s7param0.icon_state.toolTipText = __dep_exact_92d05af59ee2ff30_2.Localize.text("dialog_alliance_loginActivity_state" + __s7local1.loginActivity);
        var __s7local3 = __dep_export_CastleModel.CastleModel.userData.castleList.getMainCastleByKingdomID(__dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID);
        var __s7local4 = __s7local0.getMainCastlePositionByKingdomID(__dep_exact_26a421b704832cff.WorldClassic.KINGDOM_ID);
        var __s7local5 = 0;
        __s7local5 = __s7local3 && __s7local4 ? __dep_exact_f855840627e6e145.int(__s7param1.distanceToTarget) : 0;
        this.textFieldManager.registerTextField(__s7param0.txt_distance, new __dep_exact_92d05af59ee2ff30.TextVO(String(__s7local5 == 0 ? "" : __s7local5)), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
      }
    }
  };
  Object.defineProperty(AllianceMemberScrollItem.prototype, "allianceMemberScrollItemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceMemberScrollItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AllianceMemberScrollItem.prototype.getItemBgFrame = function (__s16param0) {
    if (__s16param0.capitalCount > 0) {
      return AllianceMemberScrollItem.ITEM_BG_FRAME_CAPITAL;
    } else if (__s16param0.metropolCount > 0) {
      return AllianceMemberScrollItem.ITEM_BG_FRAME_METROPOL;
    } else if (__s16param0.kingstowerCount > 0) {
      return AllianceMemberScrollItem.ITEM_BG_FRAME_KINGSTOWER;
    } else if (__s16param0.laboratoryCount > 0) {
      return AllianceMemberScrollItem.ITEM_BG_FRAME_LABORATORY;
    } else {
      return AllianceMemberScrollItem.ITEM_BG_FRAME_CAPITAL;
    }
  };
  AllianceMemberScrollItem.prototype.getItemLandmarkToolTip = function (__s23param0) {
    if (!__s23param0.hasLandmark) {
      return null;
    }
    var __s23local0 = __dep_exact_92d05af59ee2ff30_2.Localize.text("dialog_landmarkOwner_Tooltip");
    if (__s23param0.capitalCount > 0) {
      if (__s23param0.capitalCount == 1) {
        __s23local0 += "\n" + __dep_exact_92d05af59ee2ff30_2.Localize.text("dialog_landmarkOwner_countCapitals_Tooltip_singular");
      } else {
        __s23local0 += "\n" + __dep_exact_92d05af59ee2ff30_2.Localize.text("dialog_landmarkOwner_countCapitals_Tooltip", [__s23param0.capitalCount]);
      }
    }
    if (__s23param0.metropolCount > 0) {
      if (__s23param0.metropolCount == 1) {
        __s23local0 += "\n" + __dep_exact_92d05af59ee2ff30_2.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_landmarkOwner_countMetropolis_Tooltip_singular"));
      } else {
        __s23local0 += "\n" + __dep_exact_92d05af59ee2ff30_2.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_landmarkOwner_countMetropolis_Tooltip"), [__s23param0.metropolCount]);
      }
    }
    if (__s23param0.kingstowerCount > 0) {
      if (__s23param0.kingstowerCount == 1) {
        __s23local0 += "\n" + __dep_exact_92d05af59ee2ff30_2.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_landmarkOwner_countKingtower_Tooltip_singular"));
      } else {
        __s23local0 += "\n" + __dep_exact_92d05af59ee2ff30_2.Localize.text(__dep_export_SpecialServerHelper.SpecialServerHelper.checkTextIDForSkinText("dialog_landmarkOwner_countKingtower_Tooltip"), [__s23param0.kingstowerCount]);
      }
    }
    if (__s23param0.monumentCount > 0) {
      if (__s23param0.monumentCount == 1) {
        __s23local0 += "\n" + __dep_exact_92d05af59ee2ff30_2.Localize.text("dialog_landmarkOwner_countMonument_Tooltip_singular");
      } else {
        __s23local0 += "\n" + __dep_exact_92d05af59ee2ff30_2.Localize.text("dialog_landmarkOwner_countMonument_Tooltip", [__s23param0.monumentCount]);
      }
    }
    if (__s23param0.laboratoryCount > 0) {
      if (__s23param0.laboratoryCount == 1) {
        __s23local0 += "\n" + __dep_exact_92d05af59ee2ff30_2.Localize.text("dialog_landmarkOwner_countLaboratory_Tooltip_singular");
      } else {
        __s23local0 += "\n" + __dep_exact_92d05af59ee2ff30_2.Localize.text("dialog_landmarkOwner_countLaboratory_Tooltip", [__s23param0.laboratoryCount]);
      }
    }
    return __s23local0;
  };
  AllianceMemberScrollItem.prototype.updateHonor = function (__s41param0) {
    if (this.itxt_honor.textContentVO) {
      this.itxt_honor.textContentVO.numberValue = __s41param0 ? this.allianceMemberScrollItemVO.ownerInfoVO.honor : this.allianceMemberScrollItemVO.ownerInfoVO.might;
    }
  };
  AllianceMemberScrollItem.prototype.updateLegendXP = function (__s44param0) {
    this.itxt_level.textContentVO.stringValue = __s44param0 ? String(this.allianceMemberScrollItemVO.ownerInfoVO.playerLegendLevel) : String(this.allianceMemberScrollItemVO.ownerInfoVO.playerLevel);
  };
  AllianceMemberScrollItem.prototype.updateCoin = function (__s46param0) {
    this.itxt_coin.textContentVO.numberValue = __s46param0 ? this.allianceMemberScrollItemVO.additionalMemberInfoVO.givenC1 : this.allianceMemberScrollItemVO.additionalMemberInfoVO.givenResources;
  };
  AllianceMemberScrollItem.ITEM_BG_FRAME_CAPITAL = 1;
  AllianceMemberScrollItem.ITEM_BG_FRAME_METROPOL = 2;
  AllianceMemberScrollItem.ITEM_BG_FRAME_KINGSTOWER = 3;
  AllianceMemberScrollItem.ITEM_BG_FRAME_LABORATORY = 4;
  return AllianceMemberScrollItem;
}(__dep_exact_9e901e8e2483a22f.ScrollItem);
exports.AllianceMemberScrollItem = __s0local0;
var __dep_export_CastleAllianceData = require("gge-module:export_CastleAllianceData");
var __dep_export_AllianceMemberNameButton = require("gge-module:export_AllianceMemberNameButton");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
