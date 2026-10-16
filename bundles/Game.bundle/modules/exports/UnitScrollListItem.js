Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_WodPicHelperUnitFramePerfectCallbackWrapper = require("gge-module:export_WodPicHelperUnitFramePerfectCallbackWrapper");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __s0local0 = function (__s1param0) {
  function UnitScrollListItem(__s3param0) {
    return __s1param0.call(this, __s3param0) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(UnitScrollListItem, __s1param0);
  UnitScrollListItem.prototype.customFillItem = function () {
    __s1param0.prototype.customFillItem.call(this);
    var __s5local0 = this.itemVO.unitVO;
    var __s5local1 = this.itemVO.crestVO;
    if (__s5local0.isStronghold) {
      this.disp.gotoAndStop(2);
      this.disp.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text(__s5local0.getNameString()) + "\n" + __dep_exact_92d05af59ee2ff30.Localize.text("stronghold_UnitInside");
    } else {
      this.disp.gotoAndStop(1);
      this.disp.toolTipText = __s5local0.getNameString();
    }
    this.disp.mouseChildren = false;
    this.textFieldManager.registerTextField(this.disp.mc_counter.txt_pick, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s5local0.inventoryAmount, {
      compactThreshold: 10000,
      compactFractionalDigits: 0
    }));
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
    this.disp.mc_counter.visible = !this.itemVO.isDefenceSpyItem;
    __dep_export_WodPicHelper.WodPicHelper.addUnitPicToContainer(__s5local0, this.disp, this.itemVO.maxUnitSize > 0 ? this.itemVO.maxUnitSize : __dep_export_WodPicHelper.WodPicHelper.SMALL_UNIT_WIDTH, this.itemVO.maxUnitSize > 0 ? this.itemVO.maxUnitSize : __dep_export_WodPicHelper.WodPicHelper.SMALL_UNIT_HEIGHT, this.itemVO.maxUnitSize > 0 ? this.itemVO.maxUnitSize : __dep_export_WodPicHelper.WodPicHelper.SMALL_UNIT_WIDTH, this.itemVO.maxUnitSize > 0 ? this.itemVO.maxUnitSize : __dep_export_WodPicHelper.WodPicHelper.SMALL_UNIT_HEIGHT, __s5local1.backgroundColor1, __s5local1.backgroundColor2, this.itemVO.levelIconSize, this.itemVO.levelIconOffset, true, __dep_export_WodPicHelperUnitFramePerfectCallbackWrapper.WodPicHelperUnitFramePerfectCallbackWrapper.callback4SmallPic(__s5local0, __dep_export_WodPicHelper.WodPicHelper.SMALL_UNIT_WIDTH, __dep_export_WodPicHelper.WodPicHelper.SMALL_UNIT_HEIGHT));
  };
  UnitScrollListItem.prototype.onMouseClick = function (__s14param0) {
    __s1param0.prototype.onMouseClick.call(this, __s14param0);
    if (this.itemVO && this.itemVO.unitVO) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(this.itemVO.unitVO, this.itemVO.crestVO));
    }
  };
  UnitScrollListItem.prototype.onRollOver = function (__s17param0) {
    __s1param0.prototype.onRollOver.call(this, __s17param0);
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
  };
  UnitScrollListItem.prototype.onRollOut = function (__s19param0) {
    __s1param0.prototype.onRollOut.call(this, __s19param0);
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
  };
  Object.defineProperty(UnitScrollListItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(UnitScrollListItem.prototype, "itemVO", {
    get: function () {
      return this.scrollItemVO;
    },
    enumerable: true,
    configurable: true
  });
  return UnitScrollListItem;
}(__dep_exact_9e901e8e2483a22f_2.ScrollItem);
exports.UnitScrollListItem = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "MovieClip");
