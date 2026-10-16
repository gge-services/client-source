Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleEventDispatcher = require("gge-module:export_CastleEventDispatcher");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CircularItemDistributor(__s3param0) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0.itemContainer = __s3param0;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s3local0.itemContainer);
    __s3local0.itemContainer.rotation = -90;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CircularItemDistributor, __s1param0);
  CircularItemDistributor.prototype.init = function (__s5param0 = null) {
    if (__s5param0 != null) {
      this.properties = __s5param0;
    }
    if (this.properties != null) {
      this.createAndDistributeItems();
    }
  };
  CircularItemDistributor.prototype.highlightItems = function (__s9param0, __s9param1, __s9param2, __s9param3, __s9param4 = false) {
    for (var __s9local0 = __dep_exact_f855840627e6e145.int(this.items.length), __s9local1 = 0, __s9local2 = 0, __s9local3 = 0; __s9local3 < __s9local0; __s9local3++) {
      if (this.highlightItemByID(__s9local3, __s9local0, __s9param0, __s9param1)) {
        __s9local2 = ++__s9local1 * this.properties.animationDelay;
        if (__s9param4) {
          __s9local2 = 0;
        }
        this.items[__s9local3].highlight(__s9param2, __s9local2);
        this.items[__s9local3].disp.toolTipText = __s9param3;
      }
    }
  };
  CircularItemDistributor.prototype.highlightItemByID = function (__s15param0, __s15param1, __s15param2, __s15param3) {
    if (__s15param3 == 0) {
      return false;
    }
    var __s15local0 = __s15param0 / __s15param1 * 100;
    return __s15local0 >= __s15param2 && __s15local0 <= __s15param3;
  };
  CircularItemDistributor.prototype.createAndDistributeItems = function () {
    this.itemPositions = this.calculateItemPositions();
    this.createItems();
  };
  CircularItemDistributor.prototype.createItems = function () {
    var __s20local0;
    var __s20local1;
    var __s20local2 = __dep_exact_81dacdf05bd32292.getDefinitionByName(this.properties.dispClassName);
    this.items = [];
    for (var __s20local3 = 0; __s20local3 < this.properties.amountItems; __s20local3++) {
      __s20local0 = new this.properties.itemClass();
      __s20local1 = new __s20local2();
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s20local1);
      __s20local1.basicButton.useHandCursor = false;
      __s20local0.disp = __s20local1;
      this.itemContainer.addChild(__s20local0.disp);
      __s20local0.x = this.itemPositions[__s20local3].x;
      __s20local0.y = this.itemPositions[__s20local3].y;
      this.items.push(__s20local0);
    }
  };
  CircularItemDistributor.prototype.calculateItemPositions = function () {
    return this.calculatePositionsOnCircle(this.properties.amountItems, this.properties.targetCircleRadius);
  };
  CircularItemDistributor.prototype.calculatePositionsOnCircle = function (__s26param0, __s26param1, __s26param2 = false) {
    var __s26local0;
    var __s26local1 = [];
    var __s26local2 = 360 / __s26param0;
    var __s26local3 = __s26param2 ? __s26local2 / 2 : 0;
    for (var __s26local4 = 0; __s26local4 < __s26param0; __s26local4++) {
      __s26local0 = this.pointOnCircle(__s26param1, __s26local4 * __s26local2 + __s26local3, new __s0local0(0, 0));
      __s26local1.push(__s26local0);
    }
    return __s26local1;
  };
  CircularItemDistributor.prototype.pointOnCircle = function (__s30param0, __s30param1, __s30param2) {
    var __s30local0 = __s30param1 * Math.PI / 180;
    var __s30local1 = __s30param0 * Math.cos(__s30local0) + __s30param2.x;
    var __s30local2 = __s30param0 * Math.sin(__s30local0) + __s30param2.y;
    return new __s0local0(__s30local1, __s30local2);
  };
  CircularItemDistributor.prototype.drawDebug = function () {
    this.itemContainer.graphics.clear();
    this.drawDebugCircle();
    this.drawItemDummies();
  };
  CircularItemDistributor.prototype.drawItemDummies = function () {
    for (var __s34local0 = 0; __s34local0 < this.properties.amountItems; __s34local0++) {
      this.itemContainer.graphics.moveTo(0, 0);
      this.itemContainer.graphics.lineTo(this.itemPositions[__s34local0].x, this.itemPositions[__s34local0].y);
      this.itemContainer.graphics.beginFill(16711680, 0.5);
      this.itemContainer.graphics.drawCircle(this.itemPositions[__s34local0].x, this.itemPositions[__s34local0].y, 5);
      this.itemContainer.graphics.endFill();
    }
  };
  CircularItemDistributor.prototype.drawDebugCircle = function () {
    this.itemContainer.graphics.lineStyle(1, 0, 0.5);
    this.itemContainer.graphics.beginFill(65280, 0.5);
    this.itemContainer.graphics.drawCircle(0, 0, this.properties.targetCircleRadius);
    this.itemContainer.graphics.endFill();
  };
  return CircularItemDistributor;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CircularItemDistributor = __s0local1;
