Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_TooltipManagerFacade = require("gge-module:export_TooltipManagerFacade");
var __dep_export_BasicMapmovement = require("gge-module:export_BasicMapmovement");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.TimerEvent;
var __s0local2 = createjs.Point;
var __s0local3 = function (__s1param0) {
  function InteractiveMapmovement() {
    var __s3local0 = this;
    __s3local0._hasRingMenu = false;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(InteractiveMapmovement, __s1param0);
  InteractiveMapmovement.prototype.initVisualRep = function () {
    __s1param0.prototype.initVisualRep.call(this);
    this.addMouseListener();
    if (this.mapMovementVO && this.mapMovementVO.movementOwnerInfo && this.mapMovementVO.movementOwnerInfo.isOwnOwnerInfo) {
      __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
    }
  };
  InteractiveMapmovement.prototype.onChangeCrest = function (__s8param0) {
    var __s8local0 = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO();
    if (__s8local0) {
      this.mapMovementVO.updateOwnerInfos(__s8local0);
      this.drawMovementIcon();
    }
  };
  InteractiveMapmovement.prototype.remove = function () {
    __s1param0.prototype.remove.call(this);
    this.removeMouseListener();
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
  };
  InteractiveMapmovement.prototype.addMouseListener = function () {
    if (this.disp) {
      this.objectLayer.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.objectLayer.addEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.objectLayer.addEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onRollOut));
      this.objectLayer.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this.objectLayer.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
      this.objectLayer.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
      this.objectLayer.addEventListener(__s0local0.DOUBLE_CLICK, this.bindFunction(this.onDoubleClick));
      this.objectLayer.doubleClickEnabled = true;
      this._doubleClickTimer = new __dep_exact_81dacdf05bd32292_1.Timer(100, 1);
      this._doubleClickTimer.addEventListener(__s0local1.TIMER, this.bindFunction(this.onSingleClick));
    }
  };
  InteractiveMapmovement.prototype.onClick = function (__s16param0) {
    this._doubleClickTimer.start();
  };
  InteractiveMapmovement.prototype.onDoubleClick = function (__s18param0) {
    this._doubleClickTimer.stop();
  };
  InteractiveMapmovement.prototype.onSingleClick = function (__s20param0) {
    if (!this.mapMovementVO.isStationed || this.mapMovementVO.targetArea.areaType != __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_DAIMYO_TOWNSHIP && this.mapMovementVO.targetArea.areaType != __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_ALLIANCE_BATTLE_GROUND_TOWER) {
      this.onMouseUp();
    } else {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_SupportOverviewDialog.SupportOverviewDialog, new __dep_export_SupportOverviewDialogProperties.SupportOverviewDialogProperties(this.mapMovementVO.targetArea));
    }
  };
  InteractiveMapmovement.prototype.removeMouseListener = function () {
    if (this.objectLayer) {
      this.objectLayer.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
      this.objectLayer.removeEventListener(__s0local0.ROLL_OVER, this.bindFunction(this.onRollOver));
      this.objectLayer.removeEventListener(__s0local0.ROLL_OUT, this.bindFunction(this.onRollOut));
      this.objectLayer.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
      this.objectLayer.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
      this.objectLayer.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
      this.objectLayer.removeEventListener(__s0local0.DOUBLE_CLICK, this.bindFunction(this.onDoubleClick));
    }
    if (this._doubleClickTimer) {
      this._doubleClickTimer.removeEventListener(__s0local1.TIMER, this.bindFunction(this.onSingleClick));
    }
  };
  InteractiveMapmovement.prototype.onMouseDown = function (__s28param0) {};
  InteractiveMapmovement.prototype.onMouseUp = function (__s30param0 = null) {
    this.showRingMenu();
  };
  InteractiveMapmovement.prototype.showRingMenu = function () {};
  InteractiveMapmovement.prototype.onRollOut = function (__s34param0) {
    this.removeGlow();
    this.worldmapRenderer.camera.objectUnderMouse = null;
  };
  InteractiveMapmovement.prototype.onRollOver = function (__s36param0) {
    this.addGlow();
  };
  InteractiveMapmovement.prototype.onMouseOver = function (__s38param0) {
    if (__dep_exact_9e901e8e2483a22f.BasicToolTipManager.TOOLTIP_LABEL in __s38param0.target && __s38param0.target.toolTipText) {
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().tooltipManager.show(__s38param0.target.toolTipText, __s38param0.target);
    }
  };
  InteractiveMapmovement.prototype.onMouseOut = function (__s41param0) {
    __dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips();
  };
  InteractiveMapmovement.prototype.addGlow = function () {
    var __s43local0 = __dep_export_CastleModel.CastleModel.kingdomData.activeKingdomID == __dep_exact_26a421b704832cff.WorldIce.KINGDOM_ID ? __dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_BLUE : __dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_STANDARD;
    if (this._arrowLayer && this._arrowLayer.width <= __dep_export_ClientConstCastle.ClientConstCastle.MAX_SIZE_FOR_CACHING && this.objectLayer.height <= __dep_export_ClientConstCastle.ClientConstCastle.MAX_SIZE_FOR_CACHING) {
      this._arrowLayer.useFilters(__s43local0, true);
    }
  };
  InteractiveMapmovement.prototype.removeGlow = function () {
    if (this._arrowLayer) {
      this._arrowLayer.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER, false);
    }
    if (this._movementIconContainer.children[0]) {
      this._movementIconContainer.children[0].useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER, true);
    }
  };
  Object.defineProperty(InteractiveMapmovement.prototype, "hasRingMenu", {
    get: function () {
      return this._hasRingMenu;
    },
    set: function (__s52param0) {
      this._hasRingMenu = __s52param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapmovement.prototype, "line1Content", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapmovement.prototype, "line2Content", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapmovement.prototype, "line3Content", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapmovement.prototype, "isTimerToolTip", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapmovement.prototype, "toolTipPosition", {
    get: function () {
      var __s62local0 = this.movementIconContainer.getBounds(null);
      return new __s0local2(this.movementIconContainer.x + __s62local0.x + __s62local0.width / 2, this.movementIconContainer.y + __s62local0.y + __s62local0.height / 2);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(InteractiveMapmovement.prototype, "clampToViewport", {
    get: function () {
      return false;
    },
    enumerable: true,
    configurable: true
  });
  return InteractiveMapmovement;
}(__dep_export_BasicMapmovement.BasicMapmovement);
exports.InteractiveMapmovement = __s0local3;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local3, "IIngameUICapable", "IWorldmapTooltipData");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_SupportOverviewDialog = require("gge-module:export_SupportOverviewDialog");
var __dep_export_SupportOverviewDialogProperties = require("gge-module:export_SupportOverviewDialogProperties");
