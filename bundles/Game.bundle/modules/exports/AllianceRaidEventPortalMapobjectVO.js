Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_AllianceRaidbossEventEventVO = require("gge-module:export_AllianceRaidbossEventEventVO");
var __dep_export_CastleDisplayObjectClipContainer = require("gge-module:export_CastleDisplayObjectClipContainer");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastleWorldmapConst = require("gge-module:export_CastleWorldmapConst");
var __dep_export_ContainerBuilderMapobjectVO = require("gge-module:export_ContainerBuilderMapobjectVO");
var __dep_export_InteractiveMapobjectVO = require("gge-module:export_InteractiveMapobjectVO");
var __s0local0 = function (__s1param0) {
  function AllianceRaidEventPortalMapobjectVO() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.name = "AllianceRaidEventPortal";
    __s3local0._isVisibleOnMap = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AllianceRaidEventPortalMapobjectVO, __s1param0);
  AllianceRaidEventPortalMapobjectVO.prototype.getDisplayObjectClipContainer = function (__s5param0, __s5param1, __s5param2 = false) {
    var __s5local0 = new __dep_export_CastleDisplayObjectClipContainer.CastleDisplayObjectClipContainer();
    if (this.health > 0) {
      __s5local0.addItem(this.getAsExternalClip("ARE_Portal_Mapobject"));
    } else {
      __s5local0.addItem(this.getAsExternalClip("ARE_Portal_Mapobject_Defeated", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("ARE_Portal_Mapobject")));
    }
    if (__s5param2 && this.health > 0) {
      this.healthBarClip = this.getAsExternalClip("ARE_Portal_Mabobject_Health", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("ARE_Portal_Mapobject"));
      __s5local0.addItem(this.healthBarClip);
    }
    __s5local0.asDisplayObject().scaleX = __s5local0.asDisplayObject().scaleY /= __dep_export_CastleWorldmapConst.CastleWorldmapConst.ZOOM_MAX;
    return __s5local0;
  };
  AllianceRaidEventPortalMapobjectVO.prototype.parseAreaInfo = function (__s10param0) {
    this._areaType = __s10param0[0];
    this._absAreaPosX = __s10param0[1];
    this._absAreaPosY = __s10param0[2];
    this._ownerInfo = __dep_export_CastleModel.CastleModel.otherPlayerData.getOwnerInfoVO(__dep_exact_26a421b704832cff.DungeonConst.BASIC_ARE_PORTAL_PLAYER_ID);
  };
  Object.defineProperty(AllianceRaidEventPortalMapobjectVO.prototype, "areaNameString", {
    get: function () {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialogue_are_title");
    },
    set: function (__s14param0) {
      Object.getOwnPropertyDescriptor(__dep_export_InteractiveMapobjectVO.InteractiveMapobjectVO.prototype, "areaNameString").set.call(this, __s14param0);
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidEventPortalMapobjectVO.prototype.canBeAttacked = function () {
    return this.health > 0;
  };
  Object.defineProperty(AllianceRaidEventPortalMapobjectVO.prototype, "healthBarMC", {
    get: function () {
      if (this.healthBarClip && this.healthBarClip.isLoaded) {
        return this.healthBarClip.currentshownDisplayObject;
      } else {
        return null;
      }
    },
    enumerable: true,
    configurable: true
  });
  AllianceRaidEventPortalMapobjectVO.prototype.updateHealthBar = function () {
    if (this.healthBarMC) {
      this.healthBarMC.mc_bar.scaleX = __dep_exact_9e901e8e2483a22f.MathBase.clamp(this.health / 100, 0, 1);
    } else if (this.healthBarClip && !this.healthBarClip.isLoaded) {
      this.healthBarClip.doWhenLoaded(this.bindFunction(this.updateHealthBar));
    }
    if (this.healthBarClip && this.healthBarClip.parent) {
      __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.uncacheSafe(this.healthBarClip.parent.asDisplayObject());
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().worldmapScreen.renderer.camera.update.dispatch();
    }
  };
  Object.defineProperty(AllianceRaidEventPortalMapobjectVO.prototype, "health", {
    get: function () {
      var __s27local0 = __dep_export_AllianceRaidbossEventEventVO.AllianceRaidbossEventEventVO.getActiveEventVO();
      if (__s27local0) {
        return __s27local0.raidBossServerDataVO.raidBossHealth;
      } else {
        return 100;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidEventPortalMapobjectVO.prototype, "attackType", {
    get: function () {
      return __dep_export_ClientConstCastle.ClientConstCastle.ACTION_TYPE_DUNGEONATTACK;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(AllianceRaidEventPortalMapobjectVO.prototype, "minimumOwnerLevel", {
    get: function () {
      return __dep_exact_26a421b704832cff.DungeonConst.RAID_BOSS_DEFENDER_LEVEL;
    },
    enumerable: true,
    configurable: true
  });
  return AllianceRaidEventPortalMapobjectVO;
}(__dep_export_ContainerBuilderMapobjectVO.ContainerBuilderMapobjectVO);
exports.AllianceRaidEventPortalMapobjectVO = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IDetailViewAble", "IWorldmapObjectVO");
