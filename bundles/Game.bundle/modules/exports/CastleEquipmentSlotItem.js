Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.MouseEvent;
var __dep_export_EquipmentIconHelper = require("gge-module:export_EquipmentIconHelper");
var __s0local2 = function (__s1param0) {
  function CastleEquipmentSlotItem(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._disp = __s3param0;
    __s3local0._equipmentVO = __s3param1;
    __s3local0._disp.mc_hover.mouseEnabled = false;
    __s3local0._disp.mc_down.mouseEnabled = false;
    __s3local0._disp.mc_star_small.mouseEnabled = false;
    __s3local0._disp.mc_star_active.mouseEnabled = false;
    __s3local0._disp.mc_star_inactive.mouseEnabled = false;
    __s3local0._disp.removeAllEventListeners();
    __s3local0._disp.addEventListener(__s0local1.MOUSE_DOWN, __s3local0.bindFunction(__s3local0.onMouseFavEqDown));
    __s3local0._disp.addEventListener(__s0local1.MOUSE_UP, __s3local0.bindFunction(__s3local0.onMouseFavEqUp));
    __s3local0._disp.addEventListener(__s0local1.ROLL_OVER, __s3local0.bindFunction(__s3local0.onMouseFavEqOver));
    __s3local0._disp.addEventListener(__s0local1.ROLL_OUT, __s3local0.bindFunction(__s3local0.onMouseFavEqOut));
    __s3local0._disp.mc_hover.visible = false;
    __s3local0._disp.mc_down.visible = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleEquipmentSlotItem, __s1param0);
  CastleEquipmentSlotItem.prototype.favModeOn = function (__s5param0) {
    this._markAsFavoriteModeEnabled = true;
    this._disp.mc_star_small.visible = false;
    this._disp.mc_star_active.visible = __s5param0;
    this._disp.mc_star_inactive.visible = !__s5param0;
  };
  CastleEquipmentSlotItem.prototype.favModeOff = function (__s7param0) {
    this._markAsFavoriteModeEnabled = false;
    this._disp.mc_star_small.visible = __s7param0;
    this._disp.mc_star_active.visible = false;
    this._disp.mc_star_inactive.visible = false;
  };
  CastleEquipmentSlotItem.prototype.onMouseFavEqDown = function (__s9param0) {
    this._disp.mc_down.visible = true;
    this._disp.mc_hover.visible = false;
    if (this._onTouchDownCallback) {
      this._onTouchDownCallback(__s9param0);
    }
  };
  CastleEquipmentSlotItem.prototype.onMouseFavEqUp = function (__s12param0) {
    if (!this._isRollOut) {
      this._disp.mc_down.visible = false;
      this._disp.mc_hover.visible = true;
    }
  };
  CastleEquipmentSlotItem.prototype.onMouseFavEqOver = function (__s15param0) {
    if (this._markAsFavoriteModeEnabled) {
      this._disp.mc_hover.visible = true;
    }
    this._isRollOut = false;
    __dep_export_EquipmentIconHelper.EquipmentIconHelper.showToolTip(this._disp, this._equipmentVO);
  };
  CastleEquipmentSlotItem.prototype.onMouseFavEqOut = function (__s18param0) {
    if (this._markAsFavoriteModeEnabled) {
      this._disp.mc_hover.visible = false;
    }
    this._isRollOut = true;
  };
  Object.defineProperty(CastleEquipmentSlotItem.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleEquipmentSlotItem.prototype, "onTouchDownCallback", {
    set: function (__s23param0) {
      this._onTouchDownCallback = __s23param0;
    },
    enumerable: true,
    configurable: true
  });
  return CastleEquipmentSlotItem;
}(__s0local0);
exports.CastleEquipmentSlotItem = __s0local2;
