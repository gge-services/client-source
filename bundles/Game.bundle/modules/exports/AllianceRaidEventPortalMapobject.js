Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceRaidbossEventEventVO = require("gge-module:export_AllianceRaidbossEventEventVO");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_InteractiveMapobject = require("gge-module:export_InteractiveMapobject");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function AllianceRaidEventPortalMapobject() {
    var __s3local0 = __s1param0 !== null && __s1param0.apply(this, arguments) || this;
    __s3local0.isDefeated = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceRaidEventPortalMapobject, __s1param0);
  AllianceRaidEventPortalMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new __s0local0();
      this.mapobjectVO.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
      __dep_export_CastleModel.CastleModel.raidBossData.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_FULL, this.bindFunction(this.onUpdate));
      __dep_export_CastleModel.CastleModel.raidBossData.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_BASE, this.bindFunction(this.onUpdate));
    }
    this.drawPortal();
  };
  AllianceRaidEventPortalMapobject.prototype.drawPortal = function () {
    this.clearObjectContainer();
    if (this.disp && this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.portalObjectVO.getDisplayObjectClipContainer(false, null, true);
      this.addObjectContainer();
      this.addMouseListener();
    }
    this.onUpdate();
  };
  AllianceRaidEventPortalMapobject.prototype.removeForPool = function () {
    __s1param0.prototype.removeForPool.call(this);
    __dep_export_CastleModel.CastleModel.raidBossData.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_FULL, this.bindFunction(this.onUpdate));
    __dep_export_CastleModel.CastleModel.raidBossData.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.ARE_BOSS_UPDATED_BASE, this.bindFunction(this.onUpdate));
  };
  AllianceRaidEventPortalMapobject.prototype.onUpdate = function (__s13param0 = null) {
    this.portalObjectVO.updateHealthBar();
    if (this.isDefeated && this.portalObjectVO.health > 0) {
      this.isDefeated = false;
      this.drawPortal();
    } else if (!this.isDefeated && this.portalObjectVO.health <= 0) {
      this.isDefeated = true;
      this.drawPortal();
    }
  };
  Object.defineProperty(AllianceRaidEventPortalMapobject.prototype, "raidEventVO", {
    get: function () {
      return __dep_export_AllianceRaidbossEventEventVO.AllianceRaidbossEventEventVO.getActiveEventVO();
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidEventPortalMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_MENU, [this, __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_DUNGEONINFO]));
  };
  AllianceRaidEventPortalMapobject.prototype.onRollOver = function (__s21param0) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      __s1param0.prototype.onRollOver.call(this, __s21param0);
    }
  };
  AllianceRaidEventPortalMapobject.prototype.onRollOut = function (__s25param0) {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    __s1param0.prototype.onRollOut.call(this, __s25param0);
  };
  Object.defineProperty(AllianceRaidEventPortalMapobject.prototype, "portalObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidEventPortalMapobject.prototype, "line2Content", {
    get: function () {
      var __s29local0 = this.raidEventVO ? this.raidEventVO.raidBossServerDataVO.getCurrentXMLBossLevelDataVO() : null;
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("levelX_colon", [__s29local0 ? __s29local0.level : 1]);
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line2Content").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidEventPortalMapobject.prototype, "line3Content", {
    get: function () {
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("value_percentage", [this.raidEventVO ? this.raidEventVO.raidBossServerDataVO.raidBossHealth : 0]);
    },
    set: function (__s35param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line3Content").set.call(this, __s35param0);
    },
    enumerable: true,
    configurable: true
  });
  return AllianceRaidEventPortalMapobject;
}(__dep_export_InteractiveMapobject.InteractiveMapobject);
exports.AllianceRaidEventPortalMapobject = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
