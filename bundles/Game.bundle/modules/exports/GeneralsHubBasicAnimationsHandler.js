Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __s0local0 = function () {
  function GeneralsHubBasicAnimationsHandler(__s3param0) {
    this._animationsLoadedSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    this._disp = __s3param0;
  }
  GeneralsHubBasicAnimationsHandler.prototype.loadAnimations = function () {
    var __s5local0 = this;
    if (this.animationAssets) {
      __dep_exact_9e901e8e2483a22f_1.loadAssets(this.animationAssets, __dep_exact_9e901e8e2483a22f_1.AssetLoadingFlowType.PARALLEL).then(function (__s8param0) {
        __s5local0.initialize();
        __s5local0.startAnimations();
        __s5local0._animationsLoadedSignal.dispatch();
        __s5local0.isLoaded = true;
      }).catch(function (__s10param0) {
        return __dep_exact_9e901e8e2483a22f.warn("failed to load general hub animations", __s10param0);
      });
    } else {
      console.error("Generals Hub Animations are not set!");
    }
  };
  GeneralsHubBasicAnimationsHandler.prototype.initialize = function () {};
  GeneralsHubBasicAnimationsHandler.prototype.startAnimations = function () {};
  GeneralsHubBasicAnimationsHandler.prototype.stopAnimations = function () {};
  GeneralsHubBasicAnimationsHandler.prototype.playAnimationByName = function (__s19param0, __s19param1 = 0) {
    if (this.animations) {
      this.iterateAnimations(this.animations, this.bindFunction(this.playAnimation), __s19param0, __s19param1);
    } else {
      console.error("Generals Hub no animations placeholders were set!");
    }
  };
  GeneralsHubBasicAnimationsHandler.prototype.playAnimation = function (__s23param0, __s23param1 = 0) {
    __s23param0.visible = true;
    if (__s23param1 != 0) {
      __s23param0.children[0].gotoAndPlay(__s23param1);
    } else {
      __s23param0.children[0].play();
    }
  };
  GeneralsHubBasicAnimationsHandler.prototype.stopAnimationByName = function (__s27param0, __s27param1 = 0) {
    if (this.animations) {
      this.iterateAnimations(this.animations, this.bindFunction(this.stopAnimation), __s27param0, __s27param1);
    } else {
      console.error("Generals Hub no animations placeholders were set!");
    }
  };
  GeneralsHubBasicAnimationsHandler.prototype.stopAnimation = function (__s31param0, __s31param1) {
    var __s31local0 = this;
    if (__s31param1 === undefined) {
      __s31param1 = 0;
    }
    __s31param0.visible = false;
    if (this.isLoaded) {
      if (__s31param1 != 0) {
        __s31param0.children[0].gotoAndStop(__s31param1);
      } else {
        __s31param0.children[0].stop();
      }
    } else {
      this.animationsLoadedSignal.addOnce(function () {
        return __s31local0.stopAnimation(__s31param0, __s31param1);
      });
    }
  };
  GeneralsHubBasicAnimationsHandler.prototype.iterateAnimations = function (__s40param0, __s40param1, __s40param2 = "", __s40param3 = 0) {
    __s40param0.forEach(function (__s42param0) {
      if (__s40param2 != "") {
        if (__s42param0.name == __s40param2) {
          __s40param1(__s42param0, __s40param3);
        }
      } else {
        __s40param1(__s42param0, __s40param3);
      }
    });
  };
  Object.defineProperty(GeneralsHubBasicAnimationsHandler.prototype, "animationsLoadedSignal", {
    get: function () {
      return this._animationsLoadedSignal;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsHubBasicAnimationsHandler.prototype.reset = function () {
    this.stopAnimations();
  };
  return GeneralsHubBasicAnimationsHandler;
}();
exports.GeneralsHubBasicAnimationsHandler = __s0local0;
