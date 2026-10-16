Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleMercenaryDataEvent = require("gge-module:export_CastleMercenaryDataEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_IsoAdditionalClipEnum = require("gge-module:export_IsoAdditionalClipEnum");
var __dep_export_ASurroundingBuildingVE = require("gge-module:export_ASurroundingBuildingVE");
var __s0local0 = function (__s1param0) {
  function MercenarySurroundingsVE() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(MercenarySurroundingsVE, __s1param0);
  MercenarySurroundingsVE.prototype.addEventListener = function () {
    this.mercenaryData.addEventListener(__dep_export_CastleMercenaryDataEvent.CastleMercenaryDataEvent.DATA_CHANGED, this.bindFunction(this.onMercenaryDataChanged));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    __s1param0.prototype.addEventListener.call(this);
  };
  MercenarySurroundingsVE.prototype.removeEventListener = function () {
    this.mercenaryData.removeEventListener(__dep_export_CastleMercenaryDataEvent.CastleMercenaryDataEvent.DATA_CHANGED, this.bindFunction(this.onMercenaryDataChanged));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.LEVEL_UP, this.bindFunction(this.onLevelUp));
    __s1param0.prototype.removeEventListener.call(this);
  };
  MercenarySurroundingsVE.prototype.createDisp = function () {
    this.dispComponent.addClip(this.loadExternalClip(this.assetClipName));
  };
  MercenarySurroundingsVE.prototype.updateCharacterDisps = function () {
    if (this.buildingDisp.currentshownDisplayObject) {
      var __s11local0;
      for (var __s11local1 = 1; __s11local1 <= MercenarySurroundingsVE.MAX_NUMBER_OF_CHARACTERS; ++__s11local1) {
        __s11local0 = this.buildingDisp.currentshownDisplayObject["merc" + __s11local1];
        __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s11local0);
      }
      for (var __s11local2 = this.getNumberOfCharacters(), __s11local3 = 1; __s11local3 <= __s11local2; ++__s11local3) {
        (__s11local0 = this.buildingDisp.currentshownDisplayObject["merc" + __s11local3]).addChild(__dep_exact_9e901e8e2483a22f.MovieClipHelper.getMovieClipByClassName("CastleMercenary_" + __s11local3));
      }
      this.dispComponent.updateCache();
      this.invalidateGlowCache();
    }
  };
  MercenarySurroundingsVE.prototype.createAdditionalClips = function () {
    if (this.mercenaryData.missionCount > 0 && this.mercenaryData.currentMissionState != __dep_export_CastleMercenaryData.CastleMercenaryData.MISSION_STATE_STARTED) {
      this.additionalClips.addClips(__dep_export_IsoAdditionalClipEnum.IsoAdditionalClipEnum.EXCLAMATION_MARK);
    }
    __s1param0.prototype.createAdditionalClips.call(this);
  };
  Object.defineProperty(MercenarySurroundingsVE.prototype, "assetClipName", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_AIsoObjectVE.AIsoObjectVE.prototype, "assetClipName").get.call(this);
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASurroundingBuildingVE.ASurroundingBuildingVE.prototype, "assetClipName").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(MercenarySurroundingsVE.prototype, "assetFileName", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_AIsoObjectVE.AIsoObjectVE.prototype, "assetFileName").get.call(this);
    },
    set: function (__s27param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASurroundingBuildingVE.ASurroundingBuildingVE.prototype, "assetFileName").set.call(this, __s27param0);
    },
    enumerable: true,
    configurable: true
  });
  MercenarySurroundingsVE.prototype.getNumberOfCharacters = function () {
    return __dep_exact_f855840627e6e145.int(Math.min(MercenarySurroundingsVE.MAX_NUMBER_OF_CHARACTERS, this.mercenaryData.currentMissionState == __dep_export_CastleMercenaryData.CastleMercenaryData.MISSION_STATE_STARTED ? this.mercenaryData.readyMissionsCount : this.mercenaryData.missionCount));
  };
  Object.defineProperty(MercenarySurroundingsVE.prototype, "buildingDisp", {
    get: function () {
      if (this.dispComponent.clipList.length >= 1) {
        return this.dispComponent.clipList[0];
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  MercenarySurroundingsVE.prototype.onAllDispClipsLoaded = function () {
    this.updateCharacterDisps();
    __s1param0.prototype.onAllDispClipsLoaded.call(this);
  };
  MercenarySurroundingsVE.prototype.onMercenaryDataChanged = function (__s37param0) {
    this.updateCharacterDisps();
    this.updateAdditionalClips();
  };
  MercenarySurroundingsVE.prototype.onMouseClick = function () {
    __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(__dep_export_CastleMercenaryOverviewDialog.CastleMercenaryOverviewDialog);
  };
  MercenarySurroundingsVE.prototype.onLevelUp = function (__s41param0) {
    this.updateDisp();
  };
  Object.defineProperty(MercenarySurroundingsVE.prototype, "mercenaryData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.mercenaryData;
    },
    enumerable: true,
    configurable: true
  });
  MercenarySurroundingsVE.__initialize_static_members = function () {
    MercenarySurroundingsVE.MAX_NUMBER_OF_CHARACTERS = 3;
  };
  return MercenarySurroundingsVE;
}(__dep_export_ASurroundingBuildingVE.ASurroundingBuildingVE);
exports.MercenarySurroundingsVE = __s0local0;
var __dep_export_CastleMercenaryData = require("gge-module:export_CastleMercenaryData");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleMercenaryOverviewDialog = require("gge-module:export_CastleMercenaryOverviewDialog");
var __dep_export_AIsoObjectVE = require("gge-module:export_AIsoObjectVE");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "IIngameUICapable");
__s0local0.__initialize_static_members();
