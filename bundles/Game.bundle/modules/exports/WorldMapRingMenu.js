Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_CastleLayoutManagerEvent = require("gge-module:export_CastleLayoutManagerEvent");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_BasicIngameUIComponent = require("gge-module:export_BasicIngameUIComponent");
var __s0local0 = function (__s1param0) {
  function WorldMapRingMenu(__s3param0) {
    var __s3local0 = this;
    __s3local0.hasAnimation = true;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).isPermanent = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(WorldMapRingMenu, __s1param0);
  WorldMapRingMenu.prototype.updateMenuPosition = function () {
    var __s5local0 = this.layoutManager.worldmapScreen.renderer.camera.getPixelPosForArea(this.worldMapTarget.worldmapObjectVO.absAreaPos);
    this.disp.x = __s5local0.x;
    this.disp.y = __s5local0.y;
  };
  Object.defineProperty(WorldMapRingMenu.prototype, "worldMapTarget", {
    get: function () {
      return this._target;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapRingMenu.prototype, "target", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_BasicIngameUIComponent.BasicIngameUIComponent.prototype, "target").get.call(this);
    },
    set: function (__s11param0) {
      if (this._target) {
        this._target.hasRingMenu = false;
      }
      if (__s11param0 == null) {
        this.hide();
        this._target.hasRingMenu = false;
        return;
      }
      this._target = __s11param0;
      this._target.hasRingMenu = true;
      this.updateMenuPosition();
      if (this._target) {
        this.initComponent();
        if (this.hasAnimation && this._target != __s11param0) {
          this._isLocked = true;
          __dep_exact_608de47b6498f9b0_1.TweenMax.fromTo(this.disp, 0.1, {
            scaleX: 0,
            scaleY: 0
          }, {
            scaleX: 1,
            scaleY: 1,
            ease: __dep_exact_608de47b6498f9b0.Linear.easeIn,
            onComplete: this.bindFunction(this.onTweenComplete)
          });
        }
        this.show();
      }
    },
    enumerable: true,
    configurable: true
  });
  WorldMapRingMenu.prototype.show = function () {
    if (this._target) {
      this._target.hasRingMenu = true;
    }
    this.updateMenuPosition();
    __s1param0.prototype.show.call(this);
    this.controller.addEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    this.controller.dispatchEvent(new __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.RING_MENU_SHOWN, [this, this._target]));
  };
  WorldMapRingMenu.prototype.onChangeLayoutState = function (__s20param0) {
    if (this.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_SEASON_WORLDMAP) {
      this.hide();
    }
  };
  WorldMapRingMenu.prototype.hide = function () {
    if (!__dep_export_CastleModel.CastleModel.tutorialData.isTutorialActive) {
      if (this._target) {
        this._target.hasRingMenu = false;
      }
      __s1param0.prototype.hide.call(this);
      this.controller.removeEventListener(__dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.bindFunction(this.onChangeLayoutState));
    }
  };
  WorldMapRingMenu.prototype.onTweenComplete = function () {
    this._isLocked = false;
  };
  Object.defineProperty(WorldMapRingMenu.prototype, "ringDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  WorldMapRingMenu.prototype.initComponent = function () {
    __s1param0.prototype.initComponent.call(this);
    this.ringDisp.mouseEnabled = true;
    this.ringDisp.mouseEnabled = true;
    this.ringDisp.bg.mouseChildren = false;
    this.ringDisp.bg.mouseEnabled = false;
  };
  Object.defineProperty(WorldMapRingMenu.prototype, "hoverFilter", {
    get: function () {
      var __s33local0 = new __dep_exact_9e901e8e2483a22f.ColorMatrix();
      __s33local0.fill(15921906);
      var __s33local1 = new __dep_exact_9e901e8e2483a22f.ColorMatrix();
      __s33local1.blend(__s33local0, 0.35);
      return [__s33local1.filter];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(WorldMapRingMenu.prototype, "downFilter", {
    get: function () {
      var __s35local0 = new __dep_exact_9e901e8e2483a22f.ColorMatrix();
      __s35local0.fill(0);
      var __s35local1 = new __dep_exact_9e901e8e2483a22f.ColorMatrix();
      __s35local1.blend(__s35local0, 0.35);
      return [__s35local1.filter];
    },
    enumerable: true,
    configurable: true
  });
  WorldMapRingMenu.prototype.onMouseOver = function (__s37param0) {
    __s1param0.prototype.onMouseOver.call(this, __s37param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s37param0.target)) {
      __s37param0.target.useFilters([]);
      __s37param0.target.useFilters(this.hoverFilter);
    }
  };
  WorldMapRingMenu.prototype.onMouseOut = function (__s40param0) {
    __s1param0.prototype.onMouseOut.call(this, __s40param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s40param0.target)) {
      __s40param0.target.useFilters([]);
    }
  };
  WorldMapRingMenu.prototype.onMouseDown = function (__s43param0) {
    __s1param0.prototype.onMouseDown.call(this, __s43param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s43param0.target)) {
      __s43param0.target.useFilters(this.downFilter);
    }
  };
  WorldMapRingMenu.prototype.onMouseUp = function (__s46param0) {
    __s1param0.prototype.onMouseUp.call(this, __s46param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s46param0.target)) {
      __s46param0.target.useFilters([]);
    }
  };
  return WorldMapRingMenu;
}(__dep_export_BasicIngameUIComponent.BasicIngameUIComponent);
exports.WorldMapRingMenu = __s0local0;
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
