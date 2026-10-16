Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_InteractiveMapobject = require("gge-module:export_InteractiveMapobject");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function VillageMapobject() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(VillageMapobject, __s1param0);
  VillageMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new __s0local0();
      if (this.mapobjectVO) {
        this.mapobjectVO.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
      }
    }
    this.drawVillage();
    if (this.isOwnMapobject) {
      __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_USER_AVATAR, this.bindFunction(this.onChangeCrest));
    }
  };
  VillageMapobject.prototype.drawVillage = function () {
    this.clearObjectContainer();
    this.objectContainer = this.villageVO.getDisplayObjectClipContainer(true, null, false);
    this.addObjectContainer();
    this.addMouseListener();
  };
  VillageMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_MENU, [this, __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_CASTLEINFO]));
    this.showOwnerLines();
  };
  VillageMapobject.prototype.onVOChange = function (__s14param0) {
    __s1param0.prototype.onVOChange.call(this, __s14param0);
    this.showOwnerLines();
  };
  VillageMapobject.prototype.onRollOver = function (__s16param0) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      __s1param0.prototype.onRollOver.call(this, __s16param0);
    }
  };
  VillageMapobject.prototype.onRollOut = function (__s20param0) {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    __s1param0.prototype.onRollOut.call(this, __s20param0);
  };
  VillageMapobject.prototype.onMouseUp = function (__s22param0) {
    __s1param0.prototype.onMouseUp.call(this, __s22param0);
    this.showOwnerLines();
  };
  Object.defineProperty(VillageMapobject.prototype, "villageVO", {
    get: function () {
      return this.mapobjectVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobject.prototype, "line1Content", {
    get: function () {
      if (this.villageVO.isPlayerOwned) {
        return new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_CastleTitleSystemHelper.CastleTitleSystemHelper.getPlayerNameWithTitleFromPlayerInfo(this.villageVO.ownerInfo));
      } else {
        return new __dep_exact_92d05af59ee2ff30.TextVO(this.villageVO.areaNameString);
      }
    },
    set: function (__s30param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line1Content").set.call(this, __s30param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobject.prototype, "line2Content", {
    get: function () {
      if (this.villageVO.isPlayerOwned) {
        return new __dep_exact_92d05af59ee2ff30.TextVO(this.getHonorLevelString());
      } else {
        return new __dep_exact_92d05af59ee2ff30.TextVO(this.villageVO.villageTypeDescription);
      }
    },
    set: function (__s36param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line2Content").set.call(this, __s36param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(VillageMapobject.prototype, "line3Content", {
    get: function () {
      if (this.villageVO.isPlayerOwned) {
        return new __dep_exact_92d05af59ee2ff30.TextVO(this.getAllianceString());
      } else {
        return null;
      }
    },
    set: function (__s42param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line3Content").set.call(this, __s42param0);
    },
    enumerable: true,
    configurable: true
  });
  return VillageMapobject;
}(__dep_export_InteractiveMapobject.InteractiveMapobject);
exports.VillageMapobject = __s0local1;
var __dep_export_CastleTitleSystemHelper = require("gge-module:export_CastleTitleSystemHelper");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
