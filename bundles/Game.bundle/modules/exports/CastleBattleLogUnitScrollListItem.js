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
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_WodPicHelperUnitFramePerfectCallbackWrapper = require("gge-module:export_WodPicHelperUnitFramePerfectCallbackWrapper");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleBattleLogUnitScrollListItem(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBattleLogUnitScrollListItem, __s1param0);
  CastleBattleLogUnitScrollListItem.prototype.customFillItem = function () {
    __s1param0.prototype.customFillItem.call(this);
    var __s5local0 = this.itemVO.unitVO;
    if (this.disp.mc_unitItem.mc_level) {
      __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.disp.mc_unitItem.mc_level);
    }
    this.disp.gotoAndStop(1);
    this.disp.toolTipText = __s5local0.getNameString();
    this.disp.mouseChildren = false;
    this.disp.actLikeButton = true;
    if (this.itemVO.isEffect) {
      this.textFieldManager.registerTextField(this.disp.txt_loss, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("value_percentage", [this.itemVO.effectInventoryAmount]), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true)).color = __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    } else {
      this.textFieldManager.registerTextField(this.disp.mc_unitItem.mc_counter.txt_pick, new __dep_exact_92d05af59ee2ff30_3.NumberVO(this.itemVO.logUnitVO.count), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
    }
    if (!this.itemVO.isEffect) {
      if (__s5local0.type == "Soldiers" || __s5local0.type == "Tools") {
        if (__s5local0.isStronghold) {
          this.disp.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("Unknown_name") + "\n" + __dep_exact_92d05af59ee2ff30.Localize.text("stronghold_UnitInside");
        } else {
          this.disp.toolTipText = "Unknown_name";
        }
      } else if (__s5local0.isStronghold) {
        this.disp.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text(String(String(__s5local0.type).toLowerCase() + "_name")) + "\n" + __dep_exact_92d05af59ee2ff30.Localize.text("stronghold_UnitInside");
      } else {
        this.disp.toolTipText = String(String(__s5local0.type).toLowerCase() + "_name");
      }
    }
    var __s5local1 = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this.itemVO.participantVO.playerID);
    __dep_export_WodPicHelper.WodPicHelper.setCorrectUnitBackgroundPic(__s5local0, this.disp.mc_unitItem.mc_bg, Library.CastleInterfaceElements.battleLogPopUpUnitBackground, Library.CastleInterfaceElements.battleLogPopUpUnitBackground_berimond);
    if (__s5local1) {
      __dep_export_WodPicHelper.WodPicHelper.addSmallUnitPicToContainer(__s5local0, this.disp.mc_unitItem.mc_unit, __s5local1.crest.backgroundColor1, __s5local1.crest.backgroundColor2, true, 20, new __s0local0(8, 25), __dep_export_WodPicHelperUnitFramePerfectCallbackWrapper.WodPicHelperUnitFramePerfectCallbackWrapper.callback4SmallPic(__s5local0, __dep_export_WodPicHelper.WodPicHelper.SMALL_UNIT_WIDTH, __dep_export_WodPicHelper.WodPicHelper.SMALL_UNIT_HEIGHT), this.disp.mc_unitItem.mc_level);
    }
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.disp], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.disp.mc_unitItem.mc_counter.visible = true;
    if (this.itemVO.isEffect) {
      this.disp.actLikeButton = false;
      this.disp.mc_unitItem.mc_counter.visible = false;
    } else {
      var __s5local2 = __dep_exact_f855840627e6e145.int(this.itemVO.logUnitVO.lost);
      var __s5local3 = this.textFieldManager.registerTextField(this.disp.txt_loss, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(__s5local2), new __dep_exact_9e901e8e2483a22f_2.InternalGGSTextFieldConfigVO(true));
      __s5local3.color = this.getLostColor(__s5local2);
      __s5local3.autoFitToBounds = true;
    }
  };
  CastleBattleLogUnitScrollListItem.prototype.getLostColor = function (__s19param0) {
    if (__s19param0 == 0) {
      return __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR;
    } else {
      return __dep_export_ClientConstColor.ClientConstColor.GENERIC_BRIGHT_RED;
    }
  };
  CastleBattleLogUnitScrollListItem.prototype.onMouseClick = function (__s23param0) {
    __s1param0.prototype.onMouseClick.call(this, __s23param0);
    if (this.itemVO && this.itemVO.unitVO && !this.itemVO.isEffect) {
      var __s23local0 = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this.itemVO.participantVO.playerID);
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(this.itemVO.unitVO, __s23local0.crest));
    }
  };
  CastleBattleLogUnitScrollListItem.prototype.onRollOver = function (__s26param0) {
    __s1param0.prototype.onRollOver.call(this, __s26param0);
    if (!this.itemVO.isEffect) {
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CastleBattleLogUnitScrollListItem.prototype.onRollOut = function (__s29param0) {
    __s1param0.prototype.onRollOut.call(this, __s29param0);
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
  };
  Object.defineProperty(CastleBattleLogUnitScrollListItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBattleLogUnitScrollListItem.prototype, "itemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  return CastleBattleLogUnitScrollListItem;
}(__dep_exact_9e901e8e2483a22f_3.ScrollItem);
exports.CastleBattleLogUnitScrollListItem = __s0local1;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "MovieClip");
