Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_AbstractMethodError = require("gge-module:export_AbstractMethodError");
var __dep_export_CastleArmyDataEvent = require("gge-module:export_CastleArmyDataEvent");
var __dep_export_CastleTreasureMapEvent = require("gge-module:export_CastleTreasureMapEvent");
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Event;
var __s0local2 = function (__s1param0) {
  function CastleBaseTreasureMapRenderer() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleBaseTreasureMapRenderer, __s1param0);
  Object.defineProperty(CastleBaseTreasureMapRenderer.prototype, "treasureMapVO", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBaseTreasureMapRenderer.prototype, "mapItemCreator", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBaseTreasureMapRenderer.prototype, "movementCreator", {
    get: function () {
      throw new __dep_export_AbstractMethodError.AbstractMethodError();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBaseTreasureMapRenderer.prototype, "treasureUpdateComponents", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleBaseTreasureMapRenderer.prototype, "routeManager", {
    get: function () {
      return null;
    },
    enumerable: true,
    configurable: true
  });
  CastleBaseTreasureMapRenderer.prototype.init = function (__s15param0, __s15param1 = null) {
    this.mapLayer = __s15param0;
    this.createMovementLayer(__s15param1);
    this.createRouteManager();
    this.createMapItems();
    this.createTreasureUpdateComponents();
    this.createMovements();
    this.setMapItemsActivity();
    this.addListeners();
  };
  CastleBaseTreasureMapRenderer.prototype.destroy = function () {
    this.removeListeners();
    if (this._mapMovements != null) {
      for (var __s17local0 = 0, __s17local1 = this._mapMovements; __s17local0 < __s17local1.length; __s17local0++) {
        __s17local6 = __s17local1[__s17local0];
        if (__s17local6 !== undefined) {
          __s17local6.dispose();
        }
      }
    }
    if (this._mapItems != null) {
      for (var __s17local2 = 0, __s17local3 = this._mapItems; __s17local2 < __s17local3.length; __s17local2++) {
        __s17local6 = __s17local3[__s17local2];
        if (__s17local6 !== undefined) {
          __s17local6.dispose();
        }
      }
    }
    if (this._treasureUpdateComponents && this._treasureUpdateComponents != null) {
      for (var __s17local4 = 0, __s17local5 = this._treasureUpdateComponents; __s17local4 < __s17local5.length; __s17local4++) {
        var __s17local6;
        __s17local6 = __s17local5[__s17local4];
        if (__s17local6 !== undefined) {
          __s17local6.destroy();
        }
      }
    }
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this._movementLayer);
    if (this.mapLayer && this.mapLayer.contains(this._movementLayer)) {
      this.mapLayer.removeChild(this._movementLayer);
    }
  };
  CastleBaseTreasureMapRenderer.prototype.addListeners = function () {
    __dep_export_CastleModel.CastleModel.treasureMapData.addEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onTreasureMapDataUpdated));
    this._movementLayer.addEventListener(__s0local1.ENTER_FRAME, this.bindFunction(this.onTreasurehuntMovementUpdate));
    this.controller.addEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onMovementsChanged));
  };
  CastleBaseTreasureMapRenderer.prototype.removeListeners = function () {
    __dep_export_CastleModel.CastleModel.treasureMapData.removeEventListener(__dep_export_CastleTreasureMapEvent.CastleTreasureMapEvent.TREASUREMAP_DATA_UPDATED, this.bindFunction(this.onTreasureMapDataUpdated));
    if (this._movementLayer) {
      this._movementLayer.removeEventListener(__s0local1.ENTER_FRAME, this.bindFunction(this.onTreasurehuntMovementUpdate));
    }
    this.controller.removeEventListener(__dep_export_CastleArmyDataEvent.CastleArmyDataEvent.MOVEMENTS_CHANGED, this.bindFunction(this.onMovementsChanged));
  };
  CastleBaseTreasureMapRenderer.prototype.createRouteManager = function () {
    this._routeManager = this.routeManager;
    if (this._routeManager) {
      this._routeManager.initComponent(this.treasureMapVO, this._mapItems, this.mapLayer);
    }
  };
  CastleBaseTreasureMapRenderer.prototype.createMapItems = function () {
    this._mapItemCreator = this.mapItemCreator;
    this._mapItems = this._mapItemCreator.createTreasureMapItems(this.mapLayer, this.treasureMapVO.tMapNodeVOs);
  };
  CastleBaseTreasureMapRenderer.prototype.createMovements = function () {
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this._movementLayer);
    this._movementCreator = this.movementCreator;
    this._mapMovements = this._movementCreator.createMovements(this.mapLayer, this.treasureMapVO);
    if (this._mapMovements != null) {
      for (var __s42local0 = 0, __s42local1 = this._mapMovements; __s42local0 < __s42local1.length; __s42local0++) {
        var __s42local2 = __s42local1[__s42local0];
        if (__s42local2 !== undefined) {
          this._movementLayer.addChild(__s42local2.disp);
          __s42local2.update();
        }
      }
    }
    this.setMapItemsActivity();
  };
  CastleBaseTreasureMapRenderer.prototype.createMovementLayer = function (__s48param0) {
    if (__s48param0) {
      this._movementLayer = __s48param0;
    } else {
      this._movementLayer = new __s0local0();
      this.mapLayer.addChild(this._movementLayer);
    }
  };
  CastleBaseTreasureMapRenderer.prototype.createTreasureUpdateComponents = function () {
    this._treasureUpdateComponents = this.treasureUpdateComponents;
    if (this._treasureUpdateComponents && this._treasureUpdateComponents != null) {
      for (var __s52local0 = 0, __s52local1 = this._treasureUpdateComponents; __s52local0 < __s52local1.length; __s52local0++) {
        var __s52local2 = __s52local1[__s52local0];
        if (__s52local2 !== undefined) {
          __s52local2.initComponent(this.treasureMapVO, this._mapItems, this.mapLayer);
        }
      }
    }
  };
  CastleBaseTreasureMapRenderer.prototype.updateMapItems = function () {
    for (var __s58local0 = 0; __s58local0 < this._mapItems.length; __s58local0++) {
      this._mapItems[__s58local0].updateVO(this.treasureMapVO.tMapNodeVOs[__s58local0]);
    }
  };
  CastleBaseTreasureMapRenderer.prototype.updateRoutes = function () {
    if (this._routeManager) {
      this._routeManager.updateComponent(this.treasureMapVO);
    }
  };
  CastleBaseTreasureMapRenderer.prototype.onTreasureMapDataUpdated = function (__s65param0) {
    if (this.treasureMapVO) {
      this.updateMapItems();
      this.updateTreasureUpdateComponents();
      this.updateRoutes();
    }
  };
  CastleBaseTreasureMapRenderer.prototype.updateTreasureUpdateComponents = function () {
    if (this._treasureUpdateComponents && this._treasureUpdateComponents != null) {
      for (var __s68local0 = 0, __s68local1 = this._treasureUpdateComponents; __s68local0 < __s68local1.length; __s68local0++) {
        var __s68local2 = __s68local1[__s68local0];
        if (__s68local2 !== undefined) {
          __s68local2.updateComponent(this.treasureMapVO);
        }
      }
    }
  };
  CastleBaseTreasureMapRenderer.prototype.onTreasurehuntMovementUpdate = function (__s74param0) {
    if (this._mapMovements != null) {
      for (var __s74local0 = 0, __s74local1 = this._mapMovements; __s74local0 < __s74local1.length; __s74local0++) {
        var __s74local2 = __s74local1[__s74local0];
        if (__s74local2 !== undefined) {
          __s74local2.update();
        }
      }
    }
  };
  Object.defineProperty(CastleBaseTreasureMapRenderer.prototype, "setMapActivity", {
    set: function (__s80param0) {
      if (__s80param0) {
        this.addListeners();
        this.setMapItemsActivity();
        this.onTreasureMapDataUpdated(null);
      } else {
        this.removeListeners();
        if (this._mapItems != null) {
          for (var __s80local0 = 0, __s80local1 = this._mapItems; __s80local0 < __s80local1.length; __s80local0++) {
            var __s80local2 = __s80local1[__s80local0];
            if (__s80local2 !== undefined) {
              __s80local2.isActive = false;
            }
          }
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  CastleBaseTreasureMapRenderer.prototype.setMapItemsActivity = function () {
    if (this._mapItems != null) {
      for (var __s88local0 = 0, __s88local1 = this._mapItems; __s88local0 < __s88local1.length; __s88local0++) {
        var __s88local2 = __s88local1[__s88local0];
        if (__s88local2 !== undefined) {
          var __s88local3 = true;
          if (this._mapMovements != null) {
            for (var __s88local4 = 0, __s88local5 = this._mapMovements; __s88local4 < __s88local5.length; __s88local4++) {
              var __s88local6 = __s88local5[__s88local4];
              if (__s88local6 !== undefined && __s88local6.target == __s88local2.tMapNodeVO.nodeID && __s88local6.movementVO) {
                __s88local3 = false;
              }
            }
          }
          __s88local2.isActive = __s88local3;
        }
      }
    }
  };
  CastleBaseTreasureMapRenderer.prototype.onMovementsChanged = function (__s98param0) {
    this.createMovements();
    this.updateTreasureUpdateComponents();
    this.updateRoutes();
  };
  Object.defineProperty(CastleBaseTreasureMapRenderer.prototype, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleBaseTreasureMapRenderer;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleBaseTreasureMapRenderer = __s0local2;
