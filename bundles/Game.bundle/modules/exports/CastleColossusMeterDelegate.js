Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_2 = require("gge-module:exact_608de47b6498f9b0");
var __dep_export_BitmapFilterHelper = require("gge-module:export_BitmapFilterHelper");
var __s0local0 = createjs.Event;
var __s0local1 = function () {
  function CastleColossusMeterDelegate(__s3param0) {
    this.glowHelper = {
      blurX: 0,
      blurY: 0,
      strength: 0
    };
    this.disp = __s3param0;
    this.initArrow();
  }
  CastleColossusMeterDelegate.prototype.initArrow = function () {
    this.disp.y = CastleColossusMeterDelegate.MAX_VIEW_Y;
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.scoreTextField, new __dep_exact_92d05af59ee2ff30.TextVO("0"));
  };
  CastleColossusMeterDelegate.prototype.setLawOrderValue = function (__s7param0) {
    __s7param0 = Math.min(CastleColossusMeterDelegate.MAX_LAWORDER_VALUE, __s7param0);
    var __s7local0 = CastleColossusMeterDelegate.MAX_LAWORDER_VALUE - CastleColossusMeterDelegate.MIN_LAWORDER_VALUE;
    var __s7local1 = Math.max(__s7param0 - CastleColossusMeterDelegate.MIN_LAWORDER_VALUE, 0) / __s7local0;
    var __s7local2 = (CastleColossusMeterDelegate.MAX_VIEW_Y - CastleColossusMeterDelegate.MIN_VIEW_Y) * __s7local1;
    var __s7local3 = CastleColossusMeterDelegate.MAX_VIEW_Y - __s7local2;
    if (Math.round(this.disp.y) != Math.round(__s7local3)) {
      __dep_exact_608de47b6498f9b0_2.TweenMax.fromTo(this.disp, 1, {
        y: this.disp.y
      }, {
        y: __s7local3,
        ease: __dep_exact_608de47b6498f9b0_1.Power1.easeInOut
      });
      this.glowHelper = {
        blurX: 20,
        blurY: 10,
        strength: 3
      };
      this.glow = __dep_export_BitmapFilterHelper.BitmapFilterHelper.FILTER_GLOW_COLOSSUS[0];
      this.disp.useFilters([this.glow], false, 1);
      __dep_exact_608de47b6498f9b0_2.TweenMax.fromTo(this.glowHelper, 1, {
        delay: 0.5,
        blurX: 40,
        blurY: 20,
        strength: 3
      }, {
        blurX: 0,
        blurY: 0,
        strength: 1,
        ease: __dep_exact_608de47b6498f9b0.Linear.easeInOut,
        onComplete: this.bindFunction(this.removeUpdatefilter)
      });
      this.disp.addEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.updateFilter));
    }
    __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance().registerTextField(this.scoreTextField, new __dep_exact_92d05af59ee2ff30.TextVO(String(Math.round(__s7param0))));
  };
  CastleColossusMeterDelegate.prototype.dispose = function () {
    this.disp.removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.updateFilter));
  };
  CastleColossusMeterDelegate.prototype.updateFilter = function (__s12param0) {
    this.glow.blurX = this.glowHelper.blurX;
    this.glow.blurY = this.glowHelper.blurY;
    this.glow.strength = this.glowHelper.strength;
    this.disp.useFilters([this.glow]);
  };
  CastleColossusMeterDelegate.prototype.removeUpdatefilter = function () {
    this.disp.removeEventListener(__s0local0.ENTER_FRAME, this.bindFunction(this.updateFilter));
    this.disp.useFilters(__dep_export_BitmapFilterHelper.BitmapFilterHelper.NO_FILTER);
  };
  Object.defineProperty(CastleColossusMeterDelegate.prototype, "scoreTextField", {
    get: function () {
      return this.disp.txt_placement;
    },
    enumerable: true,
    configurable: true
  });
  CastleColossusMeterDelegate.__initialize_static_members = function () {
    CastleColossusMeterDelegate.MAX_VIEW_Y = 221.5;
    CastleColossusMeterDelegate.MIN_LAWORDER_VALUE = 0;
    CastleColossusMeterDelegate.MAX_LAWORDER_VALUE = 4000;
  };
  CastleColossusMeterDelegate.MIN_VIEW_Y = -195.85;
  return CastleColossusMeterDelegate;
}();
exports.CastleColossusMeterDelegate = __s0local1;
__s0local1.__initialize_static_members();
