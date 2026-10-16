Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleFightDataEvent = require("gge-module:export_CastleFightDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_FightScreenHelper = require("gge-module:export_FightScreenHelper");
var __dep_export_ToolUnitVO = require("gge-module:export_ToolUnitVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_LayoutMargin = require("gge-module:export_LayoutMargin");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_MovieClipLayoutable = require("gge-module:export_MovieClipLayoutable");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CastleDefenceBuyUnitsDialog = require("gge-module:export_CastleDefenceBuyUnitsDialog");
var __dep_export_CastleDefenceBuyUnitsDialogProperties = require("gge-module:export_CastleDefenceBuyUnitsDialogProperties");
var __dep_export_AttackDialogController = require("gge-module:export_AttackDialogController");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function AttackDialogDragInventoryItem(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0, AttackDialogDragInventoryItem.MARGIN) || this;
    __s3local0._collectableRenderList = [];
    __dep_export_ButtonHelper.ButtonHelper.initButtons([__s3local0.disp.btn_buy, __s3local0.disp.mc_item], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    __s3local0.disp.mc_item.dragSource = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AttackDialogDragInventoryItem, __s1param0);
  AttackDialogDragInventoryItem.prototype.init = function (__s5param0) {
    this._unitVO = __s5param0;
    __dep_export_FightScreenHelper.FightScreenHelper.initInstantBuyButton(this.disp.btn_buy, __s5param0, this.attackController.attackVO.sourceArea);
    this.renderUnit();
    this.setToolIcon();
    this.addEventListeners();
  };
  AttackDialogDragInventoryItem.prototype.renderUnit = function () {
    __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(this.disp.mc_item.txt_text, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this._unitVO.inventoryAmount), new __dep_exact_9e901e8e2483a22f.InternalGGSTextFieldConfigVO(true));
    __dep_export_WodPicHelper.WodPicHelper.addPlayerUnitPicToContainer(this._unitVO, this.disp.mc_item.mc_icon, AttackDialogDragInventoryItem.UNIT_DIMENSION.x, AttackDialogDragInventoryItem.UNIT_DIMENSION.y, AttackDialogDragInventoryItem.UNIT_DIMENSION.x, AttackDialogDragInventoryItem.UNIT_DIMENSION.y, AttackDialogDragInventoryItem.UNIT_LEVEL_DIMENSION.x, AttackDialogDragInventoryItem.UNIT_LEVEL_OFFSET, true, null, this.disp.mc_item.mc_unitLevel);
    this.disp.mc_item.toolTipText = this._unitVO.getNameString();
  };
  AttackDialogDragInventoryItem.prototype.setToolIcon = function () {
    if (this._unitVO instanceof __dep_export_ToolUnitVO.ToolUnitVO) {
      this.disp.mc_item.icon_type.visible = true;
      this.disp.mc_item.icon_type.gotoAndStop(this.getToolIconFrame(this._unitVO.toolCategory));
    } else {
      this.disp.mc_item.icon_type.visible = false;
    }
  };
  AttackDialogDragInventoryItem.prototype.getToolIconFrame = function (__s13param0) {
    return AttackDialogDragInventoryItem.TOOL_CATEGORIES.indexOf(__s13param0) + 1;
  };
  AttackDialogDragInventoryItem.prototype.destroy = function () {
    this._unitVO = null;
    this.removeEventListeners();
    this.destroyCollectableRenderList();
  };
  AttackDialogDragInventoryItem.prototype.addEventListeners = function () {
    this.disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleFightDataEvent.CastleFightDataEvent.NEW_TOOL_BOUGHT, this.bindFunction(this.onNewToolBought));
  };
  AttackDialogDragInventoryItem.prototype.removeEventListeners = function () {
    this.disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleFightDataEvent.CastleFightDataEvent.NEW_TOOL_BOUGHT, this.bindFunction(this.onNewToolBought));
  };
  AttackDialogDragInventoryItem.prototype.onNewToolBought = function (__s21param0) {
    var __s21local0 = __s21param0.params[0];
    if (__s21local0) {
      var __s21local1 = __dep_exact_f855840627e6e145.int(__s21local0.W);
      var __s21local2 = __dep_exact_f855840627e6e145.int(__s21local0.A);
      if (this._unitVO.wodId == __s21local1) {
        this._unitVO.inventoryAmount = this._unitVO.inventoryAmount + __s21local2;
      }
      this.renderUnit();
    }
  };
  AttackDialogDragInventoryItem.prototype.onClick = function (__s25param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s25param0.target)) {
      switch (__s25param0.target) {
        case this.disp.btn_buy:
          this.showInstantBuyDialog();
          break;
        case this.disp.mc_item:
          this.dragUnit();
      }
    }
  };
  AttackDialogDragInventoryItem.prototype.dragUnit = function () {
    if (this._unitVO.inventoryAmount > 0) {
      this.attackController.startDrag(this._unitVO);
    }
  };
  AttackDialogDragInventoryItem.prototype.showInstantBuyDialog = function () {
    var __s32local0 = -1;
    if (__dep_exact_81dacdf05bd32292.instanceOfClass(this.attackController.attackVO.sourceArea, "EventCampMapobjectVO")) {
      __s32local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.specialEventData.activeSeasonVO.treasureMapVO.mapID);
    }
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleDefenceBuyUnitsDialog.CastleDefenceBuyUnitsDialog, new __dep_export_CastleDefenceBuyUnitsDialogProperties.CastleDefenceBuyUnitsDialogProperties(this._unitVO, this.attackController.attackVO.sourceArea, __s32local0));
  };
  Object.defineProperty(AttackDialogDragInventoryItem.prototype, "attackController", {
    get: function () {
      return __dep_export_AttackDialogController.AttackDialogController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogDragInventoryItem.prototype.destroyCollectableRenderList = function () {
    for (var __s37local0 = __dep_exact_f855840627e6e145.int(this._collectableRenderList.length - 1); __s37local0 >= 0; __s37local0--) {
      this._collectableRenderList[__s37local0].destroy();
    }
    this._collectableRenderList = [];
  };
  Object.defineProperty(AttackDialogDragInventoryItem.prototype, "collectableRenderList", {
    get: function () {
      return this._collectableRenderList;
    },
    enumerable: true,
    configurable: true
  });
  AttackDialogDragInventoryItem.__initialize_static_members = function () {
    AttackDialogDragInventoryItem.MARGIN = new __dep_export_LayoutMargin.LayoutMargin(10, 0, 10, 0);
    AttackDialogDragInventoryItem.UNIT_DIMENSION = new __s0local1(60, 60);
    AttackDialogDragInventoryItem.UNIT_LEVEL_DIMENSION = new __s0local1(20, 20);
    AttackDialogDragInventoryItem.UNIT_LEVEL_OFFSET = new __s0local1(0, 20);
  };
  AttackDialogDragInventoryItem.TOOL_CATEGORIES = ["basic", "premium", "elite", "event", "combo"];
  return AttackDialogDragInventoryItem;
}(__dep_export_MovieClipLayoutable.MovieClipLayoutable);
exports.AttackDialogDragInventoryItem = __s0local2;
__s0local2.__initialize_static_members();
