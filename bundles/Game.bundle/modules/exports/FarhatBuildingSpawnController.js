Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __s0local0 = function () {
  function FarhatBuildingSpawnController() {
    this._farhatDisplayObjectClipIsLoaded = false;
    this._farhatDisplayObjectClipIsLoading = false;
    this._farhatAlive = false;
    if (FarhatBuildingSpawnController._instance) {
      throw new Error("Singleton class! Use FarhatBuildingSpawnController.getInstance() instead...");
    }
  }
  FarhatBuildingSpawnController.getInstance = function () {
    FarhatBuildingSpawnController._instance ||= new FarhatBuildingSpawnController();
    return FarhatBuildingSpawnController._instance;
  };
  FarhatBuildingSpawnController.prototype.applaudNow = function (__s8param0 = false) {
    if (__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().isInMyCastle) {
      if (__dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().isoScreen) {
        if (!__dep_export_Iso.Iso.renderer.isReady) {
          return;
        }
        this.checkFarhatAsset(__s8param0);
      } else {
        __dep_export_CastleBasicController.CastleBasicController.getInstance().addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SCREEN_CHANGED, this.bindFunction(function (__s14param0) {
          __dep_export_CastleBasicController.CastleBasicController.getInstance().removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SCREEN_CHANGED, arguments.callee);
          if (!!__s14param0.params && !(__s14param0.params.length < 1) && !!__s14param0.params[0]) {
            this.applaudNow(__s8param0);
          }
        }));
      }
    }
  };
  FarhatBuildingSpawnController.prototype.checkFarhatAsset = function (__s17param0) {
    if (this._farhatDisplayObjectClipIsLoaded) {
      this.findNextFarhatBuildingSpot(__s17param0);
    } else if (!this._farhatDisplayObjectClipIsLoading) {
      this.loadFarhatAsset(__s17param0);
    }
  };
  FarhatBuildingSpawnController.prototype.loadFarhatAsset = function (__s21param0) {
    this._farhatDisplayObjectClipIsLoading = true;
    var __s21local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(FarhatBuildingSpawnController._CITIZEN_FARHAT_CLASSIC, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(FarhatBuildingSpawnController._CITIZEN_FARHAT_CLASSIC));
    var __s21local1 = this.bindFunction(function (__s23param0) {
      this._farhatDisplayObjectClipIsLoading = false;
      this._farhatDisplayObjectClipIsLoaded = true;
      this._farhatDisplayObjectClip = __s23param0;
      this._farhatDisplayObjectClip.stop();
      this.applaudNow(__s21param0);
    });
    if (__s21local0.isLoaded) {
      __s21local1(__s21local0);
    } else {
      __s21local0.clipLoaded.addOnce(__s21local1);
    }
  };
  FarhatBuildingSpawnController.prototype.findNextFarhatBuildingSpot = function (__s27param0) {
    this._currentBuildingsList ||= __dep_export_Iso.Iso.renderer.objects.innerBuildings.list.slice();
    if (this._currentBuildingsList.length < 1) {
      this._currentBuildingsList = null;
    } else {
      var __s27local0 = Math.round((this._currentBuildingsList.length - 1) * Math.random());
      var __s27local1 = __dep_exact_81dacdf05bd32292.castAs(this._currentBuildingsList[__s27local0], "ABasicBuildingVE");
      this._currentBuildingsList.splice(__s27local0, 1);
      if (__s27local1 && __s27local1.dispComponent.isLoaded) {
        this.findNextFarhatSpawnSpot(__s27local1, __s27param0);
      }
    }
  };
  FarhatBuildingSpawnController.prototype.findNextFarhatSpawnSpot = function (__s32param0, __s32param1) {
    if (__s32param0 != null) {
      var __s32local0 = [];
      if (__s32param0.buildingClip != null) {
        var __s32local1 = __dep_exact_81dacdf05bd32292.castAs(__s32param0.buildingClip.currentshownDisplayObject, "Container");
        if (__s32local1 != null) {
          for (var __s32local2 = __dep_exact_f855840627e6e145.int(__s32local1.numChildren), __s32local3 = 0; __s32local3 < __s32local2; __s32local3++) {
            var __s32local4 = __s32local1.getChildByName("farhatSpot" + __s32local3);
            if (__s32local4) {
              __s32local0.push(__s32local4);
            }
          }
          if (__s32local0.length < 1) {
            this.findNextFarhatBuildingSpot(__s32param1);
          } else {
            this.spawnFarhat(__s32local0, __s32param1);
          }
        }
      }
    }
  };
  FarhatBuildingSpawnController.prototype.spawnFarhat = function (__s42param0, __s42param1) {
    if (__s42param1) {
      this.stopFarhatClapping();
    }
    (__s42param0.length == 1 ? __s42param0[0] : __s42param0[Math.round(Math.random() * (__s42param0.length - 1))]).addChild(this._farhatDisplayObjectClip);
    this._farhatDisplayObjectClip.currentshownDisplayObject.mc_farhat.play();
    this._showingTween = __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this._farhatDisplayObjectClip, 0.5, {
      alpha: 0
    }, {
      alpha: 1,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeIn,
      onComplete: this.bindFunction(this.onShowFarhatComplete)
    });
    this._farhatAlive = true;
    this._currentBuildingsList.length = 0;
    this._currentBuildingsList = null;
  };
  FarhatBuildingSpawnController.prototype.onShowFarhatComplete = function () {
    this._showingTween = null;
    this._aliveTween = __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this._farhatDisplayObjectClip, 0.5, {
      alpha: 1
    }, {
      delay: FarhatBuildingSpawnController._TIME_ALIVE,
      alpha: 0,
      ease: __dep_exact_608de47b6498f9b0.Linear.easeOut,
      onComplete: this.bindFunction(function () {
        this._farhatAlive = false;
        this._aliveTween = null;
        this._farhatDisplayObjectClip.currentshownDisplayObject.mc_farhat.stop();
      })
    });
  };
  FarhatBuildingSpawnController.prototype.stopFarhatClapping = function () {
    if (this._showingTween) {
      this._showingTween.kill();
      this._showingTween = null;
    }
    if (this._aliveTween) {
      this._aliveTween.kill();
      this._aliveTween = null;
    }
    if (this._farhatDisplayObjectClip && this._farhatDisplayObjectClip.parent) {
      this._farhatDisplayObjectClip.parent.removeChild(this._farhatDisplayObjectClip);
    }
    this._farhatAlive = false;
  };
  FarhatBuildingSpawnController.__initialize_static_members = function () {
    FarhatBuildingSpawnController._TIME_ALIVE = 15;
    FarhatBuildingSpawnController._CITIZEN_FARHAT_CLASSIC = "Citizen_Farhat_Classic";
  };
  return FarhatBuildingSpawnController;
}();
exports.FarhatBuildingSpawnController = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
__s0local0.__initialize_static_members();
