Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleWorldmapEvent = require("gge-module:export_CastleWorldmapEvent");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_InteractiveMapobject = require("gge-module:export_InteractiveMapobject");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function DungeonMapobject() {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DungeonMapobject, __s1param0);
  DungeonMapobject.prototype.initVisualRep = function () {
    if (!this.disp) {
      this.disp = new __s0local0();
      if (this.mapobjectVO) {
        this.mapobjectVO.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onVOChange));
      }
    }
    this.drawDungeon();
  };
  DungeonMapobject.prototype.getFlamesClip = function () {
    var __s9local0 = this.getABGFlamesClip("Dungeon");
    return __s9local0 || __s1param0.prototype.getFlamesClip.call(this);
  };
  DungeonMapobject.prototype.drawDungeon = function () {
    this.clearObjectContainer();
    if (this.mapobjectVO.isVisibleOnMap) {
      this.objectContainer = this.dungeonMapObjectVO.getDisplayObjectClipContainer(false, null, false);
      if (this.worldmapObjectVO.remainingCooldownTimeInSeconds > 0) {
        this.showFlames();
      }
      this.addObjectContainer();
      this.addMouseListener();
    }
  };
  DungeonMapobject.prototype.showRingMenu = function () {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.SHOW_MENU, [this, __dep_export_CastleWorldmapEvent.CastleWorldmapEvent.RINGMENU_DUNGEONINFO]));
  };
  DungeonMapobject.prototype.onRollOver = function (__s17param0) {
    if (!this.worldmapRenderer.camera.isWorldDragging) {
      if (!this.hasRingMenu) {
        this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [true, this]));
      }
      __s1param0.prototype.onRollOver.call(this, __s17param0);
    }
  };
  DungeonMapobject.prototype.onRollOut = function (__s21param0) {
    this.worldmapRenderer.dispatchEvent(new __dep_export_CastleWorldmapEvent.CastleWorldmapEvent(__dep_export_CastleWorldmapEvent.CastleWorldmapEvent.INFOTOOLTIP, [false]));
    __s1param0.prototype.onRollOut.call(this, __s21param0);
  };
  Object.defineProperty(DungeonMapobject.prototype, "dungeonMapObjectVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobject.prototype, "line2Content", {
    get: function () {
      return DungeonMapobject.textLine2(this.dungeonMapObjectVO);
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line2Content").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(DungeonMapobject.prototype, "line3Content", {
    get: function () {
      return DungeonMapobject.textLine3(this.dungeonMapObjectVO);
    },
    set: function (__s31param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobject.InteractiveMapobject.prototype, "line3Content").set.call(this, __s31param0);
    },
    enumerable: true,
    configurable: true
  });
  DungeonMapobject.textLine2 = function (__s33param0) {
    return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_ASSIGN_COLON, [__dep_exact_92d05af59ee2ff30_1.Localize.text("level"), __s33param0.dungeonLevel]);
  };
  DungeonMapobject.textLine3 = function (__s35param0) {
    var __s35local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.dungeonData.getMaxLevel(__s35param0.kingdomID));
    var __s35local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.DungeonConst.getVictories(__s35param0.dungeonLevel, __s35param0.kingdomID) + 1 - __s35param0.victoryCount);
    if (__dep_export_ABGHelper.ABGHelper.isOnABGServer) {
      __s35local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceBattlegroundData.getDungeonMaxLevel());
      __s35local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.allianceBattlegroundData.getDungeonVOByDungeonLevel(__s35param0.dungeonLevel + 1).countVictory - __s35param0.victoryCount);
    }
    if (__s35local0 <= __s35param0.dungeonLevel) {
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_alliance_maxUpgradeLevel");
    } else if (__s35local1 > 1) {
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dungeonToolTip_LevelUp_Plural", [__s35local1, __s35param0.dungeonLevel + 1]);
    } else {
      return new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dungeonToolTip_LevelUp_Singular", [__s35local1, __s35param0.dungeonLevel + 1]);
    }
  };
  return DungeonMapobject;
}(__dep_export_InteractiveMapobject.InteractiveMapobject);
exports.DungeonMapobject = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IIngameUICapable", "IWorldMapObject", "IWorldmapTooltipData");
