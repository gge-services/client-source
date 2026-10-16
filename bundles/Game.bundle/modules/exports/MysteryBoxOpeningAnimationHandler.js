Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __s0local0 = function () {
  function MysteryBoxOpeningAnimationHandler(__s3param0) {
    this.prefixBox = "Animation_";
    this.prefixRarity = "Pedestal_BG_rarity_";
    this.prefixOrb = "Animation_MysteryBox_Orb_";
    this._disp = __s3param0;
    this.animationCompleteSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
    MysteryBoxOpeningAnimationHandler.animationsLoadedSignal.add(this.bindFunction(this.onAnimationsLoaded));
  }
  MysteryBoxOpeningAnimationHandler.loadAnimations = function () {
    var __s5local0 = [];
    __s5local0 = (__s5local0 = (__s5local0 = (__s5local0 = __s5local0.concat(MysteryBoxOpeningAnimationHandler.ASSETS_BOXES)).concat(MysteryBoxOpeningAnimationHandler.ASSETS_RARITIES)).concat(MysteryBoxOpeningAnimationHandler.ASSETS_ORBS)).concat([MysteryBoxOpeningAnimationHandler.ASSET_STARS]);
    __dep_exact_9e901e8e2483a22f_1.loadAssets(__s5local0, __dep_exact_9e901e8e2483a22f_1.AssetLoadingFlowType.PARALLEL).then(function (__s7param0) {
      MysteryBoxOpeningAnimationHandler.animationLoaded = true;
      if (MysteryBoxOpeningAnimationHandler.animationStarted) {
        MysteryBoxOpeningAnimationHandler.animationsLoadedSignal.dispatch();
      }
    }).catch(function (__s10param0) {
      return __dep_exact_9e901e8e2483a22f.warn("failed to load mystery box assets", __s10param0);
    });
  };
  MysteryBoxOpeningAnimationHandler.prototype.onAnimationsLoaded = function () {
    if (MysteryBoxOpeningAnimationHandler.animationStarted) {
      this.selectAnimation();
      this.stopAnimation();
      this.playAnimation();
    }
  };
  MysteryBoxOpeningAnimationHandler.prototype.selectAnimation = function () {
    var __s15local0 = __dep_exact_81dacdf05bd32292.getDefinitionByName(this.getAnimationClass(MysteryBoxOpeningAnimationHandler.ASSETS_RARITIES, this.prefixRarity + this._rarity));
    var __s15local1 = __dep_exact_81dacdf05bd32292.getDefinitionByName(this.getAnimationClass(MysteryBoxOpeningAnimationHandler.ASSETS_BOXES, this.prefixBox + this._name));
    var __s15local2 = __dep_exact_81dacdf05bd32292.getDefinitionByName(this.getAnimationClass(MysteryBoxOpeningAnimationHandler.ASSETS_ORBS, this.prefixOrb + this._orbCategory));
    var __s15local3 = __dep_exact_81dacdf05bd32292.getDefinitionByName(MysteryBoxOpeningAnimationHandler.ASSET_STARS);
    this._pedestal = new __s15local0();
    this._box = new __s15local1();
    this._orb = new __s15local2();
    this._stars = new __s15local3();
    this._disp.mc_pedestal.addChild(this._pedestal);
    this._disp.mc_box.addChild(this._box);
    this._disp.mc_box.addChild(this._orb);
    this._disp.mc_box.addChild(this._stars);
    __dep_exact_608de47b6498f9b0.TweenLite.delayedCall(2, this.bindFunction(this.onStarsAnimationComplete));
    __dep_exact_608de47b6498f9b0.TweenLite.delayedCall(3, this.bindFunction(this.onOrbAnimationComplete));
  };
  MysteryBoxOpeningAnimationHandler.prototype.getAnimationClass = function (__s17param0, __s17param1) {
    var __s17local0;
    try {
      __s17local0 = __s17param0[__s17param0.indexOf(__s17param1)];
    } catch (__s20local0) {
      console.error("Mysterybox animation not found: " + __s17param1 + " " + __s20local0);
    }
    return __s17local0;
  };
  MysteryBoxOpeningAnimationHandler.prototype.onStarsAnimationComplete = function () {
    this.animationCompleteSignal.dispatch();
    this._stars.stop();
  };
  MysteryBoxOpeningAnimationHandler.prototype.onOrbAnimationComplete = function () {
    this._box.gotoAndStop(this._box.totalFrames - 1);
    this._orb.stop();
  };
  MysteryBoxOpeningAnimationHandler.prototype.startAnimation = function (__s26param0, __s26param1, __s26param2) {
    this._name = __s26param0;
    this._rarity = __s26param1.toString();
    this._orbCategory = __s26param2;
    if (MysteryBoxOpeningAnimationHandler.animationLoaded) {
      this.selectAnimation();
      this.stopAnimation();
      this.playAnimation();
    } else {
      MysteryBoxOpeningAnimationHandler.animationStarted = true;
    }
  };
  MysteryBoxOpeningAnimationHandler.prototype.playAnimation = function () {
    this._box.visible = true;
    this._orb.visible = true;
    this._stars.visible = true;
    this._box.play();
    this._orb.play();
    this._stars.play();
  };
  MysteryBoxOpeningAnimationHandler.prototype.stopAnimation = function () {
    this._box.gotoAndStop(0);
    this._orb.gotoAndStop(0);
    this._stars.gotoAndStop(0);
  };
  MysteryBoxOpeningAnimationHandler.prototype.reset = function () {
    this.stopAnimation();
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this._disp.mc_pedestal);
    __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this._disp.mc_box);
    this._box.visible = false;
    this._orb.visible = false;
    this._stars.visible = false;
  };
  MysteryBoxOpeningAnimationHandler.animationsLoadedSignal = new __dep_exact_5c7bc328fca9e4de.Signal();
  MysteryBoxOpeningAnimationHandler.animationLoaded = false;
  MysteryBoxOpeningAnimationHandler.animationStarted = false;
  MysteryBoxOpeningAnimationHandler.ASSETS_BOXES = ["Animation_MysteryBoxBronze", "Animation_MysteryBoxGold", "Animation_MysteryBoxSilver", "Animation_SummerBox2022", "Animation_SalesBox2022", "Animation_AutumnBox2022", "Animation_WinterBox2022", "Animation_SpringBox2023", "Animation_HoL8BoxLittle", "Animation_HoL8BoxBig", "Animation_AREBoxBronze", "Animation_AREBoxBronzePremium", "Animation_AREBoxSilver", "Animation_AREBoxSilverPremium", "Animation_AREBoxGold", "Animation_AREBoxGoldPremium"];
  MysteryBoxOpeningAnimationHandler.ASSETS_RARITIES = ["Pedestal_BG_rarity_1", "Pedestal_BG_rarity_2", "Pedestal_BG_rarity_3", "Pedestal_BG_rarity_4"];
  MysteryBoxOpeningAnimationHandler.ASSETS_ORBS = ["Animation_MysteryBox_Orb_Common", "Animation_MysteryBox_Orb_Rare", "Animation_MysteryBox_Orb_Epic", "Animation_MysteryBox_Orb_Legendary"];
  MysteryBoxOpeningAnimationHandler.ASSET_STARS = "Animation_MysteryBox_Stars";
  return MysteryBoxOpeningAnimationHandler;
}();
exports.MysteryBoxOpeningAnimationHandler = __s0local0;
