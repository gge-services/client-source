Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleArtifactEventDialogProperties = require("gge-module:export_CastleArtifactEventDialogProperties");
var __dep_export_ASpecialEventVO = require("gge-module:export_ASpecialEventVO");
var __s0local0 = function (__s1param0) {
  function ArtifactEventVO() {
    var __s3local0 = this;
    __s3local0._artifactParts = 0;
    __s3local0._artifactPartsFound = 0;
    __s3local0._artifactPartCosts = 0;
    __s3local0._artifactLeagueID = 0;
    __s3local0._skinID = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ArtifactEventVO, __s1param0);
  ArtifactEventVO.prototype.parseBasicsFromParamObject = function (__s5param0) {
    __s1param0.prototype.parseBasicsFromParamObject.call(this, __s5param0);
    this._artifactLeagueID = __dep_exact_f855840627e6e145.int(__s5param0.ALID);
  };
  ArtifactEventVO.prototype.parseEventXmlNode = function (__s7param0) {
    this._artifactParts = parseInt(__s7param0.artifactParts || "");
    this._artifactPartCosts = parseInt(__s7param0.artifactPartPrice || "");
    this._artifactType = String(__s7param0.artifactType || "");
    this._artifactReward = __dep_export_CollectableManager.CollectableManager.parser.createListFromRewardIdsString(String(__s7param0.rewardIDs || ""));
  };
  ArtifactEventVO.prototype.parseAdditionalXmlFromRoot = function (__s9param0) {
    __s1param0.prototype.parseAdditionalXmlFromRoot.call(this, __s9param0);
    var __s9local0 = __s9param0.artifactsLeagues;
    if (__s9local0 != null) {
      for (var __s9local1 = 0, __s9local2 = __s9local0; __s9local1 < __s9local2.length; __s9local1++) {
        var __s9local3 = __s9local2[__s9local1];
        if (__s9local3 !== undefined) {
          if (parseInt(__s9local3.artifactsLeagueID || "") == this._artifactLeagueID) {
            this._minLevel = parseInt(__s9local3.minLevel || "");
            this._maxLevel = parseInt(__s9local3.maxLevel || "");
            this._artifactPartCosts = parseInt(__s9local3.artifactPrice || "");
            this._artifactReward = __dep_export_CollectableManager.CollectableManager.parser.createListFromRewardIdsString(String(__s9local3.rewardIDs || ""));
            var __s9local4 = parseInt(__s9local3.artifactID || "");
            this.parseArtifact(__s9param0, __s9local4);
          }
        }
      }
    }
  };
  ArtifactEventVO.prototype.parseArtifact = function (__s16param0, __s16param1) {
    var __s16local0 = __s16param0.artifacts;
    if (__s16local0 != null) {
      for (var __s16local1 = 0, __s16local2 = __s16local0; __s16local1 < __s16local2.length; __s16local1++) {
        var __s16local3 = __s16local2[__s16local1];
        if (__s16local3 !== undefined) {
          if (parseInt(__s16local3.artifactID || "") == __s16param1) {
            this._artifactType = String(__s16local3.artifactType || "");
            this._artifactParts = parseInt(__s16local3.artifactParts || "");
          }
        }
      }
    }
  };
  Object.defineProperty(ArtifactEventVO.prototype, "artifactClassName", {
    get: function () {
      return "Artifact_" + this._artifactType;
    },
    enumerable: true,
    configurable: true
  });
  ArtifactEventVO.prototype.parseParamObject = function (__s25param0) {
    this._artifactPartsFound = __dep_exact_f855840627e6e145.int(__s25param0.PF);
    this._skinID = __dep_exact_f855840627e6e145.int(__s25param0.SID);
  };
  Object.defineProperty(ArtifactEventVO.prototype, "eventBuildingWOD", {
    get: function () {
      return ArtifactEventVO.EVENT_BUILDING_WOD_IDS[this._skinID - 1];
    },
    set: function (__s29param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingWOD").set.call(this, __s29param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArtifactEventVO.prototype, "eventBuildingNameId", {
    get: function () {
      return "eventBuilding_Artifact_" + this._skinID;
    },
    set: function (__s33param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "eventBuildingNameId").set.call(this, __s33param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArtifactEventVO.prototype, "artifactReward", {
    get: function () {
      return this._artifactReward;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArtifactEventVO.prototype, "missingParts", {
    get: function () {
      return this._artifactParts - this._artifactPartsFound;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArtifactEventVO.prototype, "hasAllParts", {
    get: function () {
      return this._artifactParts == this._artifactPartsFound;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArtifactEventVO.prototype, "artifactPartCosts", {
    get: function () {
      return this._artifactPartCosts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArtifactEventVO.prototype, "artifactPartsFound", {
    get: function () {
      return this._artifactPartsFound;
    },
    set: function (__s45param0) {
      this._artifactPartsFound = __s45param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArtifactEventVO.prototype, "artifactParts", {
    get: function () {
      return this._artifactParts;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ArtifactEventVO.prototype, "hasUserSolvedEvent", {
    get: function () {
      return this.hasAllParts;
    },
    set: function (__s51param0) {
      Object.getOwnPropertyDescriptor(__dep_export_ASpecialEventVO.ASpecialEventVO.prototype, "hasUserSolvedEvent").set.call(this, __s51param0);
    },
    enumerable: true,
    configurable: true
  });
  ArtifactEventVO.prototype.openDialog = function (__s53param0 = true) {
    this.executeOpenDialog(__s53param0, __dep_export_CastleArtifactEventDialog.CastleArtifactEventDialog, new __dep_export_CastleArtifactEventDialogProperties.CastleArtifactEventDialogProperties(this));
  };
  Object.defineProperty(ArtifactEventVO.prototype, "skinID", {
    get: function () {
      return this._skinID;
    },
    enumerable: true,
    configurable: true
  });
  ArtifactEventVO.prototype.hasClickableArtifact = function () {
    return this._artifactType == "Portrait";
  };
  ArtifactEventVO.__initialize_static_members = function () {
    ArtifactEventVO.EVENT_BUILDING_WOD = 279;
    ArtifactEventVO.EVENT_BUILDING_WOD_RENEGADE = 286;
    ArtifactEventVO.EVENT_BUILDING_WOD_NEWKING = 1522;
    ArtifactEventVO.EVENT_BUILDING_WOD_IDS = [ArtifactEventVO.EVENT_BUILDING_WOD, ArtifactEventVO.EVENT_BUILDING_WOD_RENEGADE, ArtifactEventVO.EVENT_BUILDING_WOD_RENEGADE, ArtifactEventVO.EVENT_BUILDING_WOD_RENEGADE, ArtifactEventVO.EVENT_BUILDING_WOD_NEWKING];
  };
  return ArtifactEventVO;
}(__dep_export_ASpecialEventVO.ASpecialEventVO);
exports.ArtifactEventVO = __s0local0;
var __dep_export_CollectableManager = require("gge-module:export_CollectableManager");
var __dep_export_CastleArtifactEventDialog = require("gge-module:export_CastleArtifactEventDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IEventOverviewable");
__s0local0.__initialize_static_members();
