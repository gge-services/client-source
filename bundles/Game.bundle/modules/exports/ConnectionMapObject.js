Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ABGHelper = require("gge-module:export_ABGHelper");
var __dep_export_CastleSprite = require("gge-module:export_CastleSprite");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function ConnectionMapObject() {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.lineColor = 0;
    __s3local0.g = __s3local0.graphics;
    __s3local0.reset();
    __s3local0.mouseChildren = false;
    __s3local0.mouseEnabled = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ConnectionMapObject, __s1param0);
  ConnectionMapObject.prototype.hide = function () {
    this.visible &&= false;
    this.g.clear();
  };
  ConnectionMapObject.prototype.show = function () {
    this.visible ||= true;
  };
  ConnectionMapObject.prototype.reset = function () {
    this.sourceAreaPos = null;
    this.originPos = null;
    this.connectionAreas = [];
    this.relativeTargetPositions = [];
    this.relativeSourcePosition = null;
    this.hide();
  };
  Object.defineProperty(ConnectionMapObject.prototype, "sourceAreaPos", {
    get: function () {
      return this._sourceAreaPos;
    },
    set: function (__s13param0) {
      this._sourceAreaPos = __s13param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConnectionMapObject.prototype, "connectionAreas", {
    set: function (__s15param0) {
      this._connectionAreas = __s15param0;
    },
    enumerable: true,
    configurable: true
  });
  ConnectionMapObject.prototype.showLines = function (__s17param0, __s17param1, __s17param2, __s17param3 = true) {
    this._sourceAreaPos = __s17param0;
    this._connectionAreas = __s17param1;
    this.lineColor = __s17param2;
    if (this._sourceAreaPos && this._connectionAreas && this._connectionAreas.length > 0) {
      this.calculateRelativePositions();
      this.drawAndShow(__s17param3);
    } else {
      this.hide();
    }
  };
  ConnectionMapObject.prototype.drawAndShow = function (__s21param0 = true) {
    var __s21local0 = __dep_export_ABGHelper.ABGHelper.isOnABGServer ? 10 : 5;
    if (__s21param0) {
      this.g.clear();
    }
    this.g.lineStyle(__s21local0, this.lineColor, 1);
    if (this.relativeTargetPositions != null) {
      for (var __s21local1 = 0, __s21local2 = this.relativeTargetPositions; __s21local1 < __s21local2.length; __s21local1++) {
        var __s21local3 = __s21local2[__s21local1];
        if (__s21local3 !== undefined) {
          var __s21local4 = __s21local3[0];
          var __s21local5 = __s21local3.length > 1 ? __s21local3[1] : this.lineColor;
          if (__s21local5 == __dep_export_ClientConstColor.ClientConstColor.COLORBLIND_RED) {
            __s21local0 = 5;
          }
          this.g.lineStyle(__s21local0, __s21local5, 1);
          this.g.moveTo(this.relativeSourcePosition.x, this.relativeSourcePosition.y);
          this.g.lineTo(this.relativeSourcePosition.x + __s21local4.x, this.relativeSourcePosition.y + __s21local4.y);
        }
      }
    }
    this.show();
  };
  ConnectionMapObject.prototype.calculateRelativePositions = function () {
    this.relativeTargetPositions = [];
    var __s29local0 = this._sourceAreaPos.subtract(this._originPos);
    if (this._connectionAreas != null) {
      for (var __s29local1 = 0, __s29local2 = this._connectionAreas; __s29local1 < __s29local2.length; __s29local1++) {
        var __s29local3 = __s29local2[__s29local1];
        if (__s29local3 !== undefined) {
          var __s29local4 = new __s0local0();
          __s29local4.x = __s29local3.absAreaPos.x;
          __s29local4.y = __s29local3.absAreaPos.y;
          var __s29local5 = [this.calculateRelativePositionForArea(__s29local4, __s29local0, this.sourceAreaPos)];
          if (__s29local3.useSpecialConnectionLineColor) {
            __s29local5.push(__s29local3.specialConnectionLineColor);
          }
          this.relativeTargetPositions.push(__s29local5);
        }
      }
    }
    this.relativeSourcePosition = this.calculateRelativePositionForArea(this._sourceAreaPos, __s29local0, this.originPos);
  };
  ConnectionMapObject.prototype.calculateRelativePositionForArea = function (__s36param0, __s36param1, __s36param2) {
    var __s36local0 = __s36param0.subtract(__s36param2);
    var __s36local1 = new __s0local0(__s36local0.x + __dep_export_ClientConstCastle.ClientConstCastle.WORLD_WIDTH, __s36local0.y);
    var __s36local2 = new __s0local0(__s36local0.x - __dep_export_ClientConstCastle.ClientConstCastle.WORLD_WIDTH, __s36local0.y);
    if (__s0local0.distance(__s36param1, __s36local1) < __s0local0.distance(__s36param1, __s36local0)) {
      __s36local0 = __s36local1;
    }
    if (__s0local0.distance(__s36param1, __s36local2) < __s0local0.distance(__s36param1, __s36local0)) {
      __s36local0 = __s36local2;
    }
    __s36local0.x *= __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_X;
    __s36local0.y *= __dep_export_ClientConstCastle.ClientConstCastle.MAPTILESIZE_Y;
    return __s36local0;
  };
  Object.defineProperty(ConnectionMapObject.prototype, "originPos", {
    get: function () {
      return this._originPos;
    },
    set: function (__s42param0) {
      this._originPos = __s42param0;
    },
    enumerable: true,
    configurable: true
  });
  return ConnectionMapObject;
}(__dep_export_CastleSprite.CastleSprite);
exports.ConnectionMapObject = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "Container");
