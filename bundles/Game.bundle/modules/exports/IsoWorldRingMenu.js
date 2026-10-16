Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_IsoEvent = require("gge-module:export_IsoEvent");
var __dep_export_VisualVOEvent = require("gge-module:export_VisualVOEvent");
var __dep_export_BasicIngameUIComponent = require("gge-module:export_BasicIngameUIComponent");
var __s0local0 = function (__s1param0) {
  function IsoWorldRingMenu(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.isPermanent = true;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoWorldRingMenu, __s1param0);
  Object.defineProperty(IsoWorldRingMenu.prototype, "worldLayer", {
    get: function () {
      return __dep_export_Iso.Iso.renderer.layers.transformLayer;
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_BasicIngameUIComponent.BasicIngameUIComponent.prototype, "worldLayer").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(IsoWorldRingMenu.prototype, "targetBuilding", {
    get: function () {
      return this._target;
    },
    enumerable: true,
    configurable: true
  });
  IsoWorldRingMenu.prototype.initComponent = function () {
    this.targetBuilding.buildingVO.removeEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onTargetDataChange));
    this.targetBuilding.buildingVO.addEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onTargetDataChange));
  };
  IsoWorldRingMenu.prototype.updateComponent = function () {};
  IsoWorldRingMenu.prototype.updateMenuPosition = function () {
    var __s15local0 = this.target;
    if (__s15local0) {
      var __s15local1 = __s15local0.uiPos;
      if (__s15local0.vo && __s15local0.vo.isInBuildingDistrict) {
        __s15local1.y = Math.max(-80, __s15local1.y);
      }
      var __s15local2 = __s15local0.uiDisp.localToGlobal(__s15local1);
      this.disp.x = __s15local2.x;
      this.disp.y = __s15local2.y;
    }
  };
  Object.defineProperty(IsoWorldRingMenu.prototype, "target", {
    get: function () {
      return Object.getOwnPropertyDescriptor(__dep_export_BasicIngameUIComponent.BasicIngameUIComponent.prototype, "target").get.call(this);
    },
    set: function (__s21param0) {
      if (this.targetBuilding != __s21param0) {
        if (this.targetBuilding) {
          this.targetBuilding.buildingVO.removeEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onTargetDataChange));
          this.targetBuilding.hasRingMenu = false;
        }
        this._target = __s21param0;
        if (__s21param0) {
          this.targetBuilding.hasRingMenu = true;
          __s1param0.prototype.updateMenuPosition.call(this);
          this.initComponent();
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
          this.show();
        } else {
          this.hide();
        }
      }
    },
    enumerable: true,
    configurable: true
  });
  IsoWorldRingMenu.prototype.onTweenComplete = function () {
    this._isLocked = false;
  };
  IsoWorldRingMenu.prototype.hide = function () {
    if (this.targetBuilding) {
      this.targetBuilding.hasRingMenu = false;
      this.controller.dispatchEvent(new __dep_export_IsoEvent.IsoEvent(__dep_export_IsoEvent.IsoEvent.HIDE_PANEL_INFO, []));
      this.targetBuilding.buildingVO.removeEventListener(__dep_export_VisualVOEvent.VisualVOEvent.VALUEOBJECT_CHANGE, this.bindFunction(this.onTargetDataChange));
      this.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
    }
    __s1param0.prototype.hide.call(this);
  };
  IsoWorldRingMenu.prototype.onTargetDataChange = function (__s32param0) {
    this.updateComponent();
  };
  return IsoWorldRingMenu;
}(__dep_export_BasicIngameUIComponent.BasicIngameUIComponent);
exports.IsoWorldRingMenu = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
