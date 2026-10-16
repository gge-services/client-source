Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleTimeStringHelper = require("gge-module:export_CastleTimeStringHelper");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_InteractiveMapobject = require("gge-module:export_InteractiveMapobject");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function LaboratoryMapobject() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(LaboratoryMapobject, __s1param0);
  LaboratoryMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new __s0local0();
      this.mapobjectVO.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
    }
    this.drawLaboratory();
  };
  LaboratoryMapobject.prototype.drawLaboratory = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      __dep_exact_9e901e8e2483a22f.debug("redrawing laboratory");
      this.objectContainer = this.laboratoryMapObjectVO.getDisplayObjectClipContainer(false, null, false);
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  LaboratoryMapobject.prototype.clearObjectContainer = function () {
    __dep_exact_9e901e8e2483a22f.debug("clearing laboratory");
    __s1param0.prototype.clearObjectContainer.call(this);
  };
  Object.defineProperty(LaboratoryMapobject.prototype, "laboratoryMapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  LaboratoryMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_MENU, [this, __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_CASTLEINFO]));
    this.showOwnerLines();
  };
  LaboratoryMapobject.prototype.onRollOver = function (__s17param0) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      __s1param0.prototype.onRollOver.call(this, __s17param0);
    }
  };
  LaboratoryMapobject.prototype.onRollOut = function (__s21param0) {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    __s1param0.prototype.onRollOut.call(this, __s21param0);
  };
  LaboratoryMapobject.prototype.onMouseUp = function (__s23param0) {
    __s1param0.prototype.onMouseUp.call(this, __s23param0);
    this.showOwnerLines();
  };
  Object.defineProperty(LaboratoryMapobject.prototype, "line1Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("laboratory_level", [this.laboratoryMapObjectVO.level]);
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line1Content").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LaboratoryMapobject.prototype, "line2Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("laboratory_worldmap_tooltip", [this.laboratoryMapObjectVO.landmarkBonus]);
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line2Content").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(LaboratoryMapobject.prototype, "line3Content", {
    get: function () {
      var __s33local0;
      var __s33local1 = __dep_export_CastleTimeStringHelper.CastleTimeStringHelper.getEventTimeString(__dep_export_CastleModel.CastleModel.laboratoryData.remainingResetTime);
      var __s33local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_laboratory_resetTimer_tooltip", [__s33local1]);
      if (this.laboratoryMapObjectVO.isPlayerOwned) {
        var __s33local3 = this.laboratoryMapObjectVO.ownerInfo.isInAlliance ? this.getAllianceString() : this.laboratoryMapObjectVO.ownerInfo.playerName;
        __s33local0 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_landmarkList_Owner") + ": " + __s33local3 + "\n" + __s33local2;
      } else {
        __s33local0 = __s33local2;
      }
      return new __dep_exact_92d05af59ee2ff30_2.TextVO(__s33local0);
    },
    set: function (__s37param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line3Content").set.call(this, __s37param0);
    },
    enumerable: true,
    configurable: true
  });
  return LaboratoryMapobject;
}(__dep_export_InteractiveMapobject.InteractiveMapobject);
exports.LaboratoryMapobject = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
