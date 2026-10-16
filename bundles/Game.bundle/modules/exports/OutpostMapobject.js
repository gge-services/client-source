Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_renderScheduler = require("gge-module:export_renderScheduler");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_InteractiveMapobject = require("gge-module:export_InteractiveMapobject");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function OutpostMapobject() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(OutpostMapobject, __s1param0);
  OutpostMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new __s0local0();
      if (this.mapobjectVO) {
        this.mapobjectVO.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
      }
    }
    __dep_export_renderScheduler.renderScheduler.addTask(this.renderOutpostCallback.bind(this));
    if (this.isOwnMapobject) {
      __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
    }
  };
  OutpostMapobject.prototype.getFlamesClip = function () {
    var __s10local0 = this.getABGFlamesClip("Outpost");
    return __s10local0 || __s1param0.prototype.getFlamesClip.call(this);
  };
  OutpostMapobject.prototype.renderOutpostCallback = function () {
    return !this.disp || (this.drawOutpost(), false);
  };
  OutpostMapobject.prototype.drawOutpost = function () {
    this.clearObjectContainer();
    if (!this.worldmapObjectVO.ownerInfo || this.worldmapObjectVO.ownerInfo && this.worldmapObjectVO.ownerInfo.isOutpostOwner) {
      this.objectContainer = this.outpostVO.getDisplayObjectClipContainer(false, null, false);
    } else {
      this.objectContainer = this.outpostVO.getDisplayObjectClipContainer(true, null, false);
      this.setOccupiedMarker();
    }
    if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
      this.showFlames();
    }
    this.addObjectContainer();
    if (this.occupiedMarker && this.disp.contains(this.occupiedMarker.disp)) {
      this.disp.setChildIndex(this.occupiedMarker.disp, this.disp.numChildren - 1);
    }
    this.addMouseListener();
  };
  OutpostMapobject.prototype.setOccupiedMarker = function () {
    if (this.outpostVO.isOccupied && __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this.outpostVO.occupierID) && !this.outpostVO.isConqueredByMe) {
      this.occupiedMarker = new __dep_export_OccupiedMarker.OccupiedMarker();
      this.occupiedMarker.init(this.worldmapObjectVO, __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(this.outpostVO.occupierID));
      this.disp.addChild(this.occupiedMarker.disp);
    }
  };
  OutpostMapobject.prototype.clearObjectContainer = function () {
    if (this.occupiedMarker) {
      if (this.disp.contains(this.occupiedMarker.disp)) {
        this.disp.removeChild(this.occupiedMarker.disp);
      }
      this.occupiedMarker.remove();
      this.occupiedMarker = null;
    }
    __s1param0.prototype.clearObjectContainer.call(this);
  };
  Object.defineProperty(OutpostMapobject.prototype, "outpostVO", {
    get: function () {
      return this.mapobjectVO;
    },
    enumerable: true,
    configurable: true
  });
  OutpostMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_MENU, [this, __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_OUTPOSTINFO]));
    this.showOwnerLines();
  };
  OutpostMapobject.prototype.onRollOver = function (__s31param0) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      __s1param0.prototype.onRollOver.call(this, __s31param0);
    }
  };
  OutpostMapobject.prototype.onMouseUp = function (__s35param0) {
    __s1param0.prototype.onMouseUp.call(this, __s35param0);
    this.showOwnerLines();
  };
  OutpostMapobject.prototype.onRollOut = function (__s37param0) {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    __s1param0.prototype.onRollOut.call(this, __s37param0);
  };
  OutpostMapobject.prototype.onDoubleClick = function () {
    if (!__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive) {
      this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.DOUBLE_CLICK_CASTLE, [this.outpostVO]));
    }
  };
  OutpostMapobject.prototype.remove = function () {
    __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
    this.mapobjectVO.removeEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    __s1param0.prototype.remove.call(this);
  };
  Object.defineProperty(OutpostMapobject.prototype, "line1Content", {
    get: function () {
      var __s44local0 = this.outpostVO.ownerInfo;
      if (__s44local0 && !__s44local0.isOutpostOwner) {
        return new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.getPlayerNameWithTitleFromPlayerInfo(this.outpostVO.ownerInfo));
      } else {
        return new __dep_exact_92d05af59ee2ff30.TextVO(this.outpostVO.areaNameString);
      }
    },
    set: function (__s48param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line1Content").set.call(this, __s48param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobject.prototype, "line2Content", {
    get: function () {
      var __s50local0 = this.outpostVO.ownerInfo;
      if (__s50local0 && __s50local0.isRuin) {
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("ruin");
      } else if (__s50local0 && !__s50local0.isOutpostOwner) {
        return new __dep_exact_92d05af59ee2ff30.TextVO(this.getHonorLevelString());
      } else {
        return new __dep_exact_92d05af59ee2ff30.TextVO(this.outpostVO.resAmountString);
      }
    },
    set: function (__s55param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line2Content").set.call(this, __s55param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(OutpostMapobject.prototype, "line3Content", {
    get: function () {
      var __s57local0 = this.outpostVO.ownerInfo;
      if (__s57local0 && !__s57local0.isOutpostOwner) {
        return new __dep_exact_92d05af59ee2ff30.TextVO(this.getAllianceString());
      } else {
        return null;
      }
    },
    set: function (__s61param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line3Content").set.call(this, __s61param0);
    },
    enumerable: true,
    configurable: true
  });
  return OutpostMapobject;
}(__dep_export_InteractiveMapobject.InteractiveMapobject);
exports.OutpostMapobject = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
var __dep_export_OccupiedMarker = require("gge-module:export_OccupiedMarker");
