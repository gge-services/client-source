Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_GeneralsHubBasicAnimationsHandler = require("gge-module:export_GeneralsHubBasicAnimationsHandler");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __s0local0 = createjs.MouseEvent;
var __dep_exact_608de47b6498f9b0 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_1 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_2 = require("gge-module:exact_608de47b6498f9b0");
var __dep_exact_608de47b6498f9b0_3 = require("gge-module:exact_608de47b6498f9b0");
var __s0local1 = function (__s1param0) {
  function AmbientAnimationsHandler(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.CANDLE_ANIMATION = "Candlelight_Animation";
    __s3local0.CODE_BASED_ANIMATIONS = "Codebased_Animation_Elements";
    __s3local0.CANDLES_STICKS_ANIMATION = "CandlelightSticks_Back";
    __s3local0.CHANDLELIERS_ANIMATION = "Lightbeams_Chandleliers";
    __s3local0.CANDLE_LIGHT_MIDDLE_BACK1_ANIMATION = "CandleLight_Middle_Back1";
    __s3local0.CANDLE_LIGHT_MIDDLE_BACK2_ANIMATION = "CandleLight_Middle_Back2";
    __s3local0.BEAM_FRONT_1_ANIMATION = "Beam_Front1";
    __s3local0.BEAM_FRONT_2_ANIMATION = "Beam_Front2";
    __s3local0.BEAMS_MIDDLE_ANIMATION = "Lightbeams_Middle";
    __s3local0.BEAMS_BACK_ANIMATION = "Lightbeams_Back";
    __s3local0.PARTICLES_ANIMATION = "Particles";
    __s3local0.DUST_ANIMATION = "Dust";
    __s3local0._cakeClickCount = 0;
    __s3local0.CAKE_X = 119;
    __s3local0.CAKE_Y = 338;
    __s3local0.MOUSE_X = 123;
    __s3local0.MOUSE_Y = 366;
    __s3local0.animationAssets = [__s3local0.CANDLE_ANIMATION, __s3local0.CODE_BASED_ANIMATIONS];
    __s3param0.mc_mouse.visible = false;
    __s3param0.mc_light_ground.mouseEnabled = false;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(AmbientAnimationsHandler, __s1param0);
  AmbientAnimationsHandler.prototype.initialize = function () {
    this._candlesAnimationsPlaceholders = [this._disp.mc_candlelight_animation_0, this._disp.mc_candlelight_animation_1, this._disp.mc_candlelight_animation_2, this._disp.mc_candlelight_animation_3, this._disp.mc_candlelight_animation_4, this._disp.mc_candlelight_animation_5, this._disp.mc_candlelight_animation_6, this._disp.mc_candlelight_animation_7];
    var __s5local0;
    var __s5local1;
    var __s5local2 = __dep_exact_81dacdf05bd32292.getDefinitionByName(this.CANDLE_ANIMATION);
    for (var __s5local3 = 0; __s5local3 < this._candlesAnimationsPlaceholders.length; __s5local3++) {
      __s5local0 = this._candlesAnimationsPlaceholders[__s5local3];
      (__s5local1 = new __s5local2()).framerate = 6;
      __s5local0.addChild(__s5local1);
      __s5local0.name = this.CANDLE_ANIMATION;
      __s5local0.mouseEnabled = false;
    }
    var __s5local4 = __dep_exact_81dacdf05bd32292.getDefinitionByName(this.CANDLES_STICKS_ANIMATION);
    this._candlesSticksLightAnimation = new __s5local4();
    this._disp.mc_candlelight_sticks_back_animation.name = this.CANDLES_STICKS_ANIMATION;
    this._disp.mc_candlelight_sticks_back_animation.addChild(this._candlesSticksLightAnimation);
    this._disp.mc_candlelight_sticks_back_animation.mouseEnabled = false;
    var __s5local5 = __dep_exact_81dacdf05bd32292.getDefinitionByName(this.CHANDLELIERS_ANIMATION);
    this._chandleliersLightAnimation = new __s5local5();
    this._disp.mc_lightbeams_chandleliers_animation.name = this.CHANDLELIERS_ANIMATION;
    this._disp.mc_lightbeams_chandleliers_animation.addChild(this._chandleliersLightAnimation);
    this._disp.mc_lightbeams_chandleliers_animation.mouseEnabled = false;
    var __s5local6 = __dep_exact_81dacdf05bd32292.getDefinitionByName(this.CANDLE_LIGHT_MIDDLE_BACK1_ANIMATION);
    this._candleLightMiddleBack1 = new __s5local6();
    this._disp.mc_candlelight_middle_back1.name = this.CANDLE_LIGHT_MIDDLE_BACK1_ANIMATION;
    this._disp.mc_candlelight_middle_back1.addChild(this._candleLightMiddleBack1);
    this._disp.mc_candlelight_middle_back1.mouseEnabled = false;
    var __s5local7 = __dep_exact_81dacdf05bd32292.getDefinitionByName(this.CANDLE_LIGHT_MIDDLE_BACK2_ANIMATION);
    this._candleLightMiddleBack2 = new __s5local7();
    this._disp.mc_candlelight_middle_back2.name = this.CANDLE_LIGHT_MIDDLE_BACK2_ANIMATION;
    this._disp.mc_candlelight_middle_back2.addChild(this._candleLightMiddleBack1);
    this._disp.mc_candlelight_middle_back2.mouseEnabled = false;
    this._candleLightAnimationsPlaceholders = [this._disp.mc_candlelight_sticks_back_animation, this._disp.mc_lightbeams_chandleliers_animation, this._disp.mc_candlelight_middle_back1, this._disp.mc_candlelight_middle_back2];
    var __s5local8 = __dep_exact_81dacdf05bd32292.getDefinitionByName(this.BEAM_FRONT_1_ANIMATION);
    this._beamFront1Animation = new __s5local8();
    this._disp.mc_beam_front_1_animation.name = this.BEAM_FRONT_1_ANIMATION;
    this._disp.mc_beam_front_1_animation.addChild(this._beamFront1Animation);
    this._disp.mc_beam_front_1_animation.mouseEnabled = false;
    var __s5local9 = __dep_exact_81dacdf05bd32292.getDefinitionByName(this.BEAM_FRONT_2_ANIMATION);
    this._beamFront2Animation = new __s5local9();
    this._disp.mc_beam_front_2_animation.name = this.BEAM_FRONT_2_ANIMATION;
    this._disp.mc_beam_front_2_animation.addChild(this._beamFront2Animation);
    this._disp.mc_beam_front_2_animation.mouseEnabled = false;
    var __s5local10 = __dep_exact_81dacdf05bd32292.getDefinitionByName(this.BEAMS_MIDDLE_ANIMATION);
    this._beamsMiddleAnimation = new __s5local10();
    this._disp.mc_lightbeams_middle_animation.name = this.BEAMS_MIDDLE_ANIMATION;
    this._disp.mc_lightbeams_middle_animation.addChild(this._beamsMiddleAnimation);
    this._disp.mc_lightbeams_middle_animation.mouseEnabled = false;
    var __s5local11 = __dep_exact_81dacdf05bd32292.getDefinitionByName(this.BEAMS_BACK_ANIMATION);
    this._beamBackAnimation = new __s5local11();
    this._disp.mc_beam_back_animation.name = this.BEAMS_BACK_ANIMATION;
    this._disp.mc_beam_back_animation.addChild(this._beamBackAnimation);
    this._disp.mc_beam_back_animation.mouseEnabled = false;
    this._lightBeamsAnimationsPlaceholders = [this._disp.mc_beam_front_1_animation, this._disp.mc_beam_front_2_animation, this._disp.mc_lightbeams_middle_animation, this._disp.mc_beam_back_animation];
    var __s5local12 = __dep_exact_81dacdf05bd32292.getDefinitionByName(this.PARTICLES_ANIMATION);
    this._particlesAnimation = new __s5local12();
    this._disp.mc_particles_animation.name = this.PARTICLES_ANIMATION;
    this._disp.mc_particles_animation.addChild(this._particlesAnimation);
    this._disp.mc_particles_animation.mouseEnabled = false;
    var __s5local13 = __dep_exact_81dacdf05bd32292.getDefinitionByName(this.DUST_ANIMATION);
    this._dustAnimation = new __s5local13();
    this._disp.mc_dust_animation.name = this.DUST_ANIMATION;
    this._disp.mc_dust_animation.addChild(this._dustAnimation);
    this._disp.mc_dust_animation.mouseEnabled = false;
    this._particlesAnimationsPlaceholders = [this._disp.mc_particles_animation, this._disp.mc_dust_animation];
    this.animations = [].concat(this._candlesAnimationsPlaceholders, this._candleLightAnimationsPlaceholders, this._lightBeamsAnimationsPlaceholders, this._particlesAnimationsPlaceholders);
  };
  AmbientAnimationsHandler.prototype.startAnimations = function () {
    var __s9local0;
    this._disp.mc_cupcake.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClickCake));
    for (var __s9local1 = 0; __s9local1 < this._candlesAnimationsPlaceholders.length; __s9local1++) {
      __s9local0 = this._candlesAnimationsPlaceholders[__s9local1];
      this.playAnimation(__s9local0, Math.floor(Math.random() * __s9local0.children[0].totalFrames));
      this.playAnimation(__s9local0, Math.floor(Math.random() * __s9local0.children[0].totalFrames));
    }
    __dep_exact_608de47b6498f9b0_3.TweenMax.fromTo(this._disp.mc_beam_front_1_animation, 6, {
      alpha: 1
    }, {
      alpha: 0.2,
      ease: __dep_exact_608de47b6498f9b0_1.Power2.easeInOut,
      delay: 5,
      yoyo: true,
      repeat: -1
    });
    __dep_exact_608de47b6498f9b0_3.TweenMax.fromTo(this._disp.mc_beam_front_2_animation, 6, {
      alpha: 1
    }, {
      alpha: 0.2,
      ease: __dep_exact_608de47b6498f9b0_1.Power2.easeInOut,
      delay: 6,
      yoyo: true,
      repeat: -1
    });
    __dep_exact_608de47b6498f9b0_3.TweenMax.fromTo(this._disp.mc_beam_back_animation, 6, {
      alpha: 1
    }, {
      alpha: 0.2,
      ease: __dep_exact_608de47b6498f9b0_1.Power2.easeInOut,
      delay: 4,
      yoyo: true,
      repeat: -1
    });
    __dep_exact_608de47b6498f9b0_3.TweenMax.fromTo(this._disp.mc_lightbeams_middle_animation, 6, {
      alpha: 1
    }, {
      alpha: 0.2,
      ease: __dep_exact_608de47b6498f9b0_1.Power2.easeInOut,
      delay: 4,
      yoyo: true,
      repeat: -1
    });
    __dep_exact_608de47b6498f9b0_3.TweenMax.fromTo(this._disp.mc_lightbeams_chandleliers_animation, 6, {
      alpha: 1
    }, {
      alpha: 0.2,
      ease: __dep_exact_608de47b6498f9b0_1.Power2.easeInOut,
      delay: 2,
      yoyo: true,
      repeat: -1
    });
    __dep_exact_608de47b6498f9b0_3.TweenMax.fromTo(this._disp.mc_dust_animation, 40, {
      alpha: 1
    }, {
      alpha: 0.1,
      ease: __dep_exact_608de47b6498f9b0_2.Power4.easeIn,
      delay: 4,
      yoyo: false,
      repeat: -1
    });
    __dep_exact_608de47b6498f9b0_3.TweenMax.fromTo(this._disp.mc_dust_animation, 6, {
      x: 170
    }, {
      x: 220,
      ease: __dep_exact_608de47b6498f9b0.Power1.easeInOut,
      delay: 0,
      yoyo: true,
      repeat: -1
    });
    __dep_exact_608de47b6498f9b0_3.TweenMax.fromTo(this._disp.mc_dust_animation, 40, {
      y: -300
    }, {
      y: -250,
      ease: __dep_exact_608de47b6498f9b0.Power1.easeInOut,
      delay: 0,
      yoyo: false,
      repeat: -1
    });
    __dep_exact_608de47b6498f9b0_3.TweenMax.fromTo(this._disp.mc_particles_animation, 40, {
      alpha: 1
    }, {
      alpha: 0.1,
      ease: __dep_exact_608de47b6498f9b0_2.Power4.easeIn,
      delay: 4,
      yoyo: false,
      repeat: -1
    });
    __dep_exact_608de47b6498f9b0_3.TweenMax.fromTo(this._disp.mc_particles_animation, 6, {
      x: -440
    }, {
      x: -480,
      ease: __dep_exact_608de47b6498f9b0.Power1.easeInOut,
      delay: 0,
      yoyo: true,
      repeat: -1
    });
    __dep_exact_608de47b6498f9b0_3.TweenMax.fromTo(this._disp.mc_particles_animation, 40, {
      y: -20
    }, {
      y: 30,
      ease: __dep_exact_608de47b6498f9b0.Power1.easeInOut,
      delay: 0,
      yoyo: true,
      repeat: -1
    });
  };
  AmbientAnimationsHandler.prototype.stopAnimations = function () {
    this._disp.mc_cupcake.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClickCake));
  };
  AmbientAnimationsHandler.prototype.onClickCake = function (__s15param0) {
    var __s15local0 = this;
    if ((!this.cakeTween || !this.cakeTween.isActive()) && !!(this._cakeClickCount < 5)) {
      this._cakeClickCount++;
      this.cakeTween = __dep_exact_608de47b6498f9b0_3.TweenMax.fromTo(this._disp.mc_cupcake, 0.2, {
        y: this.CAKE_Y
      }, {
        y: this.CAKE_Y + 5,
        ease: __dep_exact_608de47b6498f9b0_2.Power4.easeIn,
        delay: 0,
        yoyo: true,
        repeat: 1
      });
    }
    if (this.cakeTween && !this.cakeTween.isActive() && this._cakeClickCount >= 5) {
      this._disp.mc_cupcake.mouseEnabled = false;
      __dep_exact_608de47b6498f9b0_3.TweenMax.fromTo(this._disp.mc_mouse, 2, {
        visible: false
      }, {
        visible: true,
        ease: __dep_exact_608de47b6498f9b0_2.Power4.easeIn,
        delay: 0,
        repeat: 0,
        onComplete: function () {
          __dep_exact_608de47b6498f9b0_3.TweenMax.fromTo(__s15local0._disp.mc_mouse, 0.1, {
            y: __s15local0.CAKE_Y
          }, {
            y: __s15local0.MOUSE_Y + 10,
            ease: __dep_exact_608de47b6498f9b0_2.Power4.easeIn,
            delay: 0,
            yoyo: true,
            repeat: 4,
            onComplete: function () {
              __dep_exact_608de47b6498f9b0_3.TweenMax.fromTo(__s15local0._disp.mc_cupcake, 0.5, {
                y: __s15local0.CAKE_Y
              }, {
                y: __s15local0.CAKE_Y + 10,
                ease: __dep_exact_608de47b6498f9b0_2.Power4.easeIn,
                delay: 0,
                yoyo: false,
                repeat: 0,
                onComplete: function () {
                  __dep_exact_608de47b6498f9b0_3.TweenMax.fromTo(__s15local0._disp.mc_mouse, 2, {
                    x: __s15local0.MOUSE_X
                  }, {
                    x: __s15local0.MOUSE_X - 1500,
                    ease: __dep_exact_608de47b6498f9b0_2.Power4.easeIn,
                    delay: 0,
                    yoyo: false,
                    repeat: 0
                  });
                  __dep_exact_608de47b6498f9b0_3.TweenMax.fromTo(__s15local0._disp.mc_cupcake, 2, {
                    x: __s15local0.CAKE_X
                  }, {
                    x: __s15local0.CAKE_X - 1500,
                    ease: __dep_exact_608de47b6498f9b0_2.Power4.easeIn,
                    delay: 0,
                    yoyo: false,
                    repeat: 0,
                    onComplete: function () {
                      __s15local0._disp.mc_mouse.visible = false;
                      __s15local0._disp.mc_mouse.x = __s15local0.MOUSE_X;
                      __dep_exact_608de47b6498f9b0_3.TweenMax.fromTo(__s15local0._disp.mc_cupcake, 0, {
                        x: __s15local0.CAKE_X
                      }, {
                        x: __s15local0.CAKE_X,
                        ease: "none",
                        delay: 10,
                        yoyo: false,
                        repeat: 0
                      });
                      __s15local0._cakeClickCount = 0;
                      __s15local0._disp.mc_cupcake.mouseEnabled = true;
                    }
                  });
                }
              });
            }
          });
        }
      });
    }
  };
  return AmbientAnimationsHandler;
}(__dep_export_GeneralsHubBasicAnimationsHandler.GeneralsHubBasicAnimationsHandler);
exports.AmbientAnimationsHandler = __s0local1;
