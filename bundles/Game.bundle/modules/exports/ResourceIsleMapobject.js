Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstTime = require("gge-module:export_ClientConstTime");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_InteractiveMapobject = require("gge-module:export_InteractiveMapobject");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function ResourceIsleMapobject() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ResourceIsleMapobject, __s1param0);
  ResourceIsleMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new __s0local0();
      this.mapobjectVO.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawResourceIsle();
    if (this.isOwnMapobject) {
      __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
    }
    this.isleVO.addEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.REMOVED_RESOURCE_ISLE_FROM_MAP, this.bindFunction(this._onIsleRemoved));
  };
  ResourceIsleMapobject.prototype.remove = function () {
    this.isleVO.removeEventListener(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.REMOVED_RESOURCE_ISLE_FROM_MAP, this.bindFunction(this._onIsleRemoved));
    __s1param0.prototype.remove.call(this);
  };
  ResourceIsleMapobject.prototype._onIsleRemoved = function (__s11param0) {
    if (__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().getIngameUIComponent(__dep_export_WorldMapCastleInfoMenu.WorldMapCastleInfoMenu) && __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().getIngameUIComponent(__dep_export_WorldMapCastleInfoMenu.WorldMapCastleInfoMenu).isVisible()) {
      this.showOwnerLines();
    }
  };
  ResourceIsleMapobject.prototype.onVOChange = function (__s14param0) {
    __s1param0.prototype.onVOChange.call(this, __s14param0);
    this.showOwnerLines();
  };
  ResourceIsleMapobject.prototype.drawResourceIsle = function () {
    this.clearObjectContainer();
    this.objectContainer = this.isleVO.getDisplayObjectClipContainer(true, null, false);
    this.addObjectContainer();
    this.addMouseListener();
  };
  ResourceIsleMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_MENU, [this, __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_CASTLEINFO]));
    this.showOwnerLines();
  };
  ResourceIsleMapobject.prototype.onRollOver = function (__s20param0) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      __s1param0.prototype.onRollOver.call(this, __s20param0);
    }
  };
  ResourceIsleMapobject.prototype.onRollOut = function (__s24param0) {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    __s1param0.prototype.onRollOut.call(this, __s24param0);
  };
  ResourceIsleMapobject.prototype.onMouseUp = function (__s26param0) {
    __s1param0.prototype.onMouseUp.call(this, __s26param0);
    this.showOwnerLines();
  };
  Object.defineProperty(ResourceIsleMapobject.prototype, "isleVO", {
    get: function () {
      return this.mapobjectVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobject.prototype, "line1Content", {
    get: function () {
      if (this.isleVO.isPlayerOwned) {
        return new __dep_exact_92d05af59ee2ff30_2.TextVO(__dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.getPlayerNameWithTitleFromPlayerInfo(this.isleVO.ownerInfo));
      } else {
        return new __dep_exact_92d05af59ee2ff30_2.TextVO(this.isleVO.areaNameString);
      }
    },
    set: function (__s34param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line1Content").set.call(this, __s34param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobject.prototype, "line2Content", {
    get: function () {
      if (this.isleVO.isPlayerOwned) {
        return new __dep_exact_92d05af59ee2ff30_2.TextVO(this.getAllianceString());
      } else {
        return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.isleVO.villageTypeDescription);
      }
    },
    set: function (__s40param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line2Content").set.call(this, __s40param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobject.prototype, "line3Content", {
    get: function () {
      if (this.isleVO.isPlayerOwned) {
        return this.getTimerText(this.isleVO.remainingOccupierTime);
      }
      var __s42local0 = __dep_exact_9e901e8e2483a22f.TimeStringHelper.getShortTimeString(this.isleVO.needingOccupierTime * __dep_export_ClientConstTime.ClientConstTime.SEC_2_MILLISEC, __dep_exact_9e901e8e2483a22f.TimeStringHelper.ONE_TIME_FORMAT);
      return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("kingdom_eiLand_village_occupationTime", [__s42local0]);
    },
    set: function (__s45param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line3Content").set.call(this, __s45param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ResourceIsleMapobject.prototype, "isTimerToolTip", {
    get: function () {
      return this.isleVO.isPlayerOwned;
    },
    set: function (__s49param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "isTimerToolTip").set.call(this, __s49param0);
    },
    enumerable: true,
    configurable: true
  });
  ResourceIsleMapobject.prototype.getTimerText = function (__s51param0) {
    return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("kingdom_eiLand_village_countdown", [__dep_exact_9e901e8e2483a22f.TimeStringHelper.getTimeToString(__s51param0, __dep_exact_9e901e8e2483a22f.TimeStringHelper.TWO_TIME_FORMAT, __dep_exact_92d05af59ee2ff30.Localize.text, false, true)]);
  };
  return ResourceIsleMapobject;
}(__dep_export_InteractiveMapobject.InteractiveMapobject);
exports.ResourceIsleMapobject = __s0local1;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
var __dep_export_WorldMapCastleInfoMenu = require("gge-module:export_WorldMapCastleInfoMenu");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
