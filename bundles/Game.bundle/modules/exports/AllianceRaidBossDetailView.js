Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_FightDetailView = require("gge-module:export_FightDetailView");
var __s0local0 = createjs.Container;
var __s0local1 = function (__s1param0) {
  function AllianceRaidBossDetailView(__s3param0, __s3param1, __s3param2, __s3param3) {
    return __s1param0.call(this, __s3param0, __s3param1, __s3param2, __s3param3) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceRaidBossDetailView, __s1param0);
  Object.defineProperty(AllianceRaidBossDetailView.prototype, "assetCastleFileURL", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(AllianceRaidBossDetailView.CLASSNAME_PREFIX + this.currentRaidBossInfo.raidBossID);
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FightDetailView.FightDetailView.prototype, "assetCastleFileURL").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidBossDetailView.prototype, "assetBackgroundFileURL", {
    get: function () {
      return this.assetCastleFileURL;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_FightDetailView.FightDetailView.prototype, "assetBackgroundFileURL").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidBossDetailView.prototype.getBackgroundClassName = function () {
    return AllianceRaidBossDetailView.CLASSNAME_PREFIX + this.currentRaidBossInfo.raidBossID + "_Background";
  };
  AllianceRaidBossDetailView.prototype.drawCastleVO = function () {
    if (this.currentRaidBossInfo) {
      this._castleLayer = new __s0local0();
      this._layerBackground = new __s0local0();
      this._layerMoat = new __s0local0();
      this._layerMoat.mouseChildren = false;
      this._layerKeep = new __s0local0();
      this._layerKeep.mouseChildren = false;
      this._layerFront = new __s0local0();
      this._layerLeft = new __s0local0();
      this._layerLeft.mouseChildren = false;
      this._layerRight = new __s0local0();
      this._layerRight.mouseChildren = false;
      this._layerMiddle = new __s0local0();
      this._layerMiddle.mouseChildren = false;
      this._castleLayer.addChild(this._layerBackground);
      this._layerFront.addChild(this._layerKeep);
      this._layerFront.addChild(this._layerLeft);
      this._layerFront.addChild(this._layerRight);
      this._layerFront.addChild(this._layerMiddle);
      this._castleLayer.addChild(this._layerFront);
      if (this.currentGeneralID >= 0) {
        this._layerKeep.addChild(this.getMovieClipByName(this.keepClassName)).x = -70;
      }
      this._layerLeft.addChild(this.getMovieClipByName(this.leftWallClassName)).x = -70;
      this._layerRight.addChild(this.getMovieClipByName(this.rightWallClassName)).x = -70;
      this._layerMiddle.addChild(this.getMovieClipByName(this.gateClassName)).x = -70;
      try {
        this._layerBackground.addChild(this.getMovieClipByName(this.bgDecoClassName)).x = -70;
      } catch (__s20local0) {}
    }
  };
  Object.defineProperty(AllianceRaidBossDetailView.prototype, "eventVO", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_ALLIANCE_RAID);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidBossDetailView.prototype, "currentRaidBossInfo", {
    get: function () {
      var __s24local0 = this.eventVO;
      if (__s24local0) {
        return __s24local0.raidBossServerDataVO;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidBossDetailView.prototype, "currentGeneralID", {
    get: function () {
      if (!this.currentRaidBossInfo) {
        return -1;
      }
      var __s28local0 = this.currentRaidBossInfo.getCurrentXMLBossStageDataVO();
      if (__s28local0) {
        return __s28local0.generalID;
      } else {
        return -1;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidBossDetailView.prototype, "bgDecoClassName", {
    get: function () {
      return AllianceRaidBossDetailView.CLASSNAME_PREFIX + this.currentRaidBossInfo.raidBossID + "_BG_Deco";
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidBossDetailView.prototype, "leftWallClassName", {
    get: function () {
      return AllianceRaidBossDetailView.CLASSNAME_PREFIX + this.currentRaidBossInfo.raidBossID + "_Wall_Left" + (this.currentRaidBossInfo.leftWallPercent <= 0 ? "_Damage" : "");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidBossDetailView.prototype, "rightWallClassName", {
    get: function () {
      return AllianceRaidBossDetailView.CLASSNAME_PREFIX + this.currentRaidBossInfo.raidBossID + "_Wall_Right" + (this.currentRaidBossInfo.rightWallPercent <= 0 ? "_Damage" : "");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidBossDetailView.prototype, "gateClassName", {
    get: function () {
      return AllianceRaidBossDetailView.CLASSNAME_PREFIX + this.currentRaidBossInfo.raidBossID + "_Gate" + (this.currentRaidBossInfo.middleWallPercent <= 0 ? "_Damage" : "");
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidBossDetailView.prototype, "keepClassName", {
    get: function () {
      return AllianceRaidBossDetailView.CLASSNAME_PREFIX + this.currentRaidBossInfo.raidBossID + "_Keep_" + this.currentGeneralID;
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidBossDetailView.CLASSNAME_PREFIX = "DetailView_RaidBoss_";
  return AllianceRaidBossDetailView;
}(__dep_export_FightDetailView.FightDetailView);
exports.AllianceRaidBossDetailView = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "IFightDetailView");
