Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function CastleLegendSkillItem(__s3param0, __s3param1 = false, __s3param2 = false) {
    this._isMaxLevel = false;
    this._isActive = false;
    this._isTierUnlocked = false;
    this._isInProgress = false;
    this._isVisualOnly = false;
    this._shouldShowInfoIcon = false;
    this._legendSkillVO = __s3param0;
    this._isVisualOnly = __s3param1;
    this._shouldShowInfoIcon = __s3param2 && !this._legendSkillVO.isPreview;
    var __s3local0 = __s3param0.isSpecialSkill() ? CastleLegendSkillItem.ASSET_NAME_SPECIAL : CastleLegendSkillItem.ASSET_NAME;
    this._disp = new (__dep_exact_81dacdf05bd32292_1.getDefinitionByName(__s3local0))();
    if (!this._legendSkillVO.isSpecialSkill()) {
      this.disp.mc_hover.visible = false;
      this.disp.mc_down.visible = false;
    }
    this.disp.mouseChildren = false;
    this.disp.changeTextFieldCacheScale(2);
    this.setSkillInfo(__s3param0);
  }
  CastleLegendSkillItem.prototype.setSkillInfo = function (__s6param0) {
    this._legendSkillVO = __s6param0;
    this._isActive = this.legendSkillData.isSkillActive(this._legendSkillVO);
    this._isMaxLevel = this.isActive && this._legendSkillVO.level == this.legendSkillData.getMaxSkillLevelInGroup(this._legendSkillVO.skillTreeID, this._legendSkillVO.tier, this._legendSkillVO.skillGroupID);
    this._isTierUnlocked = this.legendSkillData.isTierUnlocked(this._legendSkillVO.skillTreeID, this._legendSkillVO.tier) && !this._legendSkillVO.isPreview;
    this._isInProgress = this.legendSkillData.isSceatSkillInProgress(this._legendSkillVO);
    this.updateDisp();
  };
  CastleLegendSkillItem.prototype.updateDisp = function () {
    __dep_exact_9e901e8e2483a22f_3.MovieClipHelper.clearMovieClip(this.disp.skillHolder);
    this.disp.skillHolder.addChild(this._isVisualOnly ? this._legendSkillVO.skillIcon : this._legendSkillVO.createSkillIcon());
    this.disp.mc_skillLocked.visible = !this.isTierUnlocked || !this._legendSkillVO.isUnlocked();
    if (!this._itxt_levelInfo && !this._legendSkillVO.isSpecialSkill()) {
      var __s8local0 = this._legendSkillVO.isPreview ? "-" : __dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE;
      this._itxt_levelInfo = CastleLegendSkillItem.textFieldManager.registerTextField(this.disp.txt_level, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s8local0, [0, 0]), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
      this._itxt_levelInfo_inProgress = CastleLegendSkillItem.textFieldManager.registerTextField(this.disp.mc_progress.txt_level, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s8local0, [0, 0]), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    }
    if (this._itxt_levelInfo) {
      var __s8local1 = [this.activeLevel, this.legendSkillData.getMaxSkillLevelInGroup(this._legendSkillVO.skillTreeID, this._legendSkillVO.tier, this._legendSkillVO.skillGroupID)];
      this._itxt_levelInfo.textContentVO.textReplacements = __s8local1;
      this._itxt_levelInfo_inProgress.textContentVO.textReplacements = __s8local1;
      this._itxt_levelInfo.color = this.isMaxLevel ? __dep_export_ClientConstLegendSkills.ClientConstLegendSkills.COLORCODE_YELLOW : this.isActive ? __dep_export_ClientConstLegendSkills.ClientConstLegendSkills.COLORCODE_GREEN : __dep_export_ClientConstLegendSkills.ClientConstLegendSkills.COLORCODE_LIGHTWHITE;
      this.disp.mc_progress.visible = this._isInProgress;
    }
    this.disp.mc_max.visible = this._isMaxLevel;
    if (this.dispContainer.btn_info_small) {
      this.dispContainer.btn_info_small.visible = this._shouldShowInfoIcon;
      __dep_export_ButtonHelper.ButtonHelper.initButton(this.dispContainer.btn_info_small, 1.1, __dep_exact_84d43d9c404bd4d8.BasicButton);
    }
  };
  CastleLegendSkillItem.prototype.checkForTooltipUpdate = function () {
    if (__dep_export_LegendSkillIconHelper.LegendSkillIconHelper.currentTarget == this.disp) {
      __dep_export_LegendSkillIconHelper.LegendSkillIconHelper.showToolTip(this.disp, this._legendSkillVO);
    }
  };
  CastleLegendSkillItem.prototype.show = function () {
    this.disp.visible = true;
    this.disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    if (this.dispContainer.btn_info_small) {
      this.dispContainer.btn_info_small.addEventListener(__s0local0.CLICK, this.bindFunction(this.onInfoClick));
    }
    this.disp.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
  };
  CastleLegendSkillItem.prototype.hide = function () {
    this.disp.visible = false;
    this.disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    if (this.dispContainer.btn_info_small) {
      this.dispContainer.btn_info_small.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onInfoClick));
    }
    this.disp.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this.disp.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
  };
  Object.defineProperty(CastleLegendSkillItem.prototype, "isMaxLevel", {
    get: function () {
      return this._isMaxLevel;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillItem.prototype, "isActive", {
    get: function () {
      return this._isActive;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillItem.prototype, "isTierUnlocked", {
    get: function () {
      return this._isTierUnlocked;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillItem.prototype, "activeLevel", {
    get: function () {
      if (this.isActive || this._isInProgress) {
        return this._legendSkillVO.level;
      } else {
        return 0;
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillItem.prototype.onInfoClick = function (__s32param0) {
    if (this._shouldShowInfoIcon && __s32param0.target == this.dispContainer.btn_info_small) {
      this.openInfoDialogue(this._legendSkillVO);
    }
  };
  CastleLegendSkillItem.prototype.onClick = function (__s35param0) {
    var __s35local0 = true;
    var __s35local1 = __dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s35param0);
    if (__s35local1) {
      __s35local0 = __dep_export_LegendSkillIconHelper.LegendSkillIconHelper.currentTarget === __s35param0.target;
    }
    if (!__s35local0) {
      this.onMouseOver(__s35param0);
    }
    if (__s35local0 && this.canBuy()) {
      var __s35local2 = this.isActive && this._legendSkillVO ? this.legendSkillData.getNextLevel(this._legendSkillVO) : this._legendSkillVO;
      if (__s35local2 instanceof __dep_export_CastleSceatSkillVO.CastleSceatSkillVO) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleSceatSkillBuyDialog.CastleSceatSkillBuyDialog, new __dep_export_CastleSceatSkillBuyDialogPropterties.CastleSceatSkillBuyDialogPropterties(this._legendSkillVO, __s35local2));
      } else {
        this.legendSkillData.buySkill(__s35local2);
      }
    }
    if (__s35local1) {
      __s35param0.stopPropagation();
    }
    if (!this._legendSkillVO.isSpecialSkill()) {
      this.disp.mc_down.visible = false;
    }
  };
  CastleLegendSkillItem.prototype.onMouseOver = function (__s44param0) {
    if (this.canBuy()) {
      CastleLegendSkillItem.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
      this.disp.scaleX = this.disp.scaleY = 1.05;
      this.disp.mc_hover.visible = true;
    }
    if (this._legendSkillVO.isPreview) {
      __dep_export_TextDarkTooltip.TextDarkTooltip.getInstance().showTooltip(this.disp, this._legendSkillVO.previewText);
    } else {
      __dep_export_LegendSkillIconHelper.LegendSkillIconHelper.showToolTip(this.disp, this._legendSkillVO);
    }
    __dep_export_CheatHOLSkillsIdsDisplay.CheatHOLSkillsIdsDisplay.instance.cheatShowSkillIdAndSkillGroupID(this.disp, this._legendSkillVO);
  };
  CastleLegendSkillItem.prototype.onMouseOut = function (__s49param0) {
    CastleLegendSkillItem.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
    this.disp.scaleX = this.disp.scaleY = 1;
    __dep_export_LegendSkillIconHelper.LegendSkillIconHelper.hideToolTip();
    __dep_export_TextDarkTooltip.TextDarkTooltip.getInstance().hideTooltip();
    if (!this._legendSkillVO.isSpecialSkill()) {
      this.disp.mc_hover.visible = false;
      this.disp.mc_down.visible = false;
    }
  };
  CastleLegendSkillItem.prototype.onMouseDown = function (__s52param0) {
    if (this.canBuy()) {
      CastleLegendSkillItem.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
      this.disp.scaleX = this.disp.scaleY = 1.05;
      this.disp.mc_down.visible = true;
    }
  };
  CastleLegendSkillItem.prototype.openInfoDialogue = function (__s55param0) {
    var __s55local0;
    var __s55local1 = __s55param0.getCurrentEffectValue.strength;
    if (__s55param0.hasBuildingEffect) {
      if (__s55local0 = __dep_export_CastleModel.CastleModel.wodData.getBuildingVOById(__s55local1)) {
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBuildingInfoDialog.CastleBuildingInfoDialog, new __dep_export_CastleBuildingInfoDialogProperties.CastleBuildingInfoDialogProperties(__s55local0));
      }
    } else if (__s55param0.hasUnitEffect && (__s55local0 = __dep_export_CastleModel.CastleModel.wodData.getUnitVOByWodId(__s55local1))) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(__s55local0));
    }
  };
  CastleLegendSkillItem.prototype.canBuy = function () {
    var __s60local0 = this._legendSkillVO.isMaxLevel() ? this._legendSkillVO : this.legendSkillData.getNextLevel(this._legendSkillVO);
    if (!this._legendSkillVO.isMaxLevel() && this._legendSkillVO.level == 1 && !this._legendSkillVO.isActive) {
      __s60local0 = this._legendSkillVO;
    }
    return !this.isMaxLevel && this.isTierUnlocked && __s60local0.isUnlocked() && this.legendSkillData.canAffordNextLevel(__s60local0) && !this._isInProgress && !this.legendSkillData.isAnyOtherSkillInProgress(this._legendSkillVO) && !this._isVisualOnly;
  };
  Object.defineProperty(CastleLegendSkillItem, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillItem, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_2.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillItem.prototype, "legendSkillData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.legendSkillData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillItem.prototype, "disp", {
    get: function () {
      if (this._legendSkillVO.isSpecialSkill()) {
        return this._disp;
      } else {
        return this._disp.mc_main;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillItem.prototype, "dispContainer", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillItem.ASSET_NAME = "LegendSkillItemContainer";
  CastleLegendSkillItem.ASSET_NAME_SPECIAL = "LegendSkillItemContainer_Special";
  return CastleLegendSkillItem;
}();
exports.CastleLegendSkillItem = __s0local1;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_ClientConstLegendSkills = require("gge-module:export_ClientConstLegendSkills");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_TextDarkTooltip = require("gge-module:export_TextDarkTooltip");
var __dep_export_LegendSkillIconHelper = require("gge-module:export_LegendSkillIconHelper");
var __dep_export_CastleSceatSkillVO = require("gge-module:export_CastleSceatSkillVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleSceatSkillBuyDialog = require("gge-module:export_CastleSceatSkillBuyDialog");
var __dep_export_CastleSceatSkillBuyDialogPropterties = require("gge-module:export_CastleSceatSkillBuyDialogPropterties");
var __dep_export_CheatHOLSkillsIdsDisplay = require("gge-module:export_CheatHOLSkillsIdsDisplay");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __dep_export_CastleBuildingInfoDialog = require("gge-module:export_CastleBuildingInfoDialog");
var __dep_export_CastleBuildingInfoDialogProperties = require("gge-module:export_CastleBuildingInfoDialogProperties");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
