Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_GeneralsHubBasicAnimationsHandler = require("gge-module:export_GeneralsHubBasicAnimationsHandler");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CharactersAnimationsHandler(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.animationAssets = [CharactersAnimationsHandler.KING_ANIMATION, CharactersAnimationsHandler.KNIGHT_ANIMATION, CharactersAnimationsHandler.PRINCESS_ANIMATION];
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CharactersAnimationsHandler, __s1param0);
  CharactersAnimationsHandler.prototype.initialize = function () {
    this._animationHoveredSignal = new __dep_exact_9e901e8e2483a22f.StringSignal();
    this._animationUnhoveredSignal = new __dep_exact_9e901e8e2483a22f.StringSignal();
    this._hoverCharacters = [this._disp.mc_king_hover, this._disp.mc_knight_hover, this._disp.mc_princess_hover];
    this._hoverCharactersBounds = [this._disp.king_bounds, this._disp.knight_bounds, this._disp.princess_bounds];
    var __s5local0 = __dep_exact_81dacdf05bd32292.getDefinitionByName(CharactersAnimationsHandler.KING_ANIMATION);
    this._kingAnimation = new __s5local0();
    this._disp.mc_king_animation.name = CharactersAnimationsHandler.KING_ANIMATION;
    this._disp.mc_king_animation.addChild(this._kingAnimation);
    this._disp.mc_king_animation.mouseChildren = false;
    this._disp.mc_king_hover.name = CharactersAnimationsHandler.KING_ANIMATION;
    this._disp.king_bounds.name = CharactersAnimationsHandler.KING_ANIMATION;
    this._disp.mc_king_hover.gotoAndStop(1);
    var __s5local1 = __dep_exact_81dacdf05bd32292.getDefinitionByName(CharactersAnimationsHandler.KNIGHT_ANIMATION);
    this._knightAnimation = new __s5local1();
    this._disp.mc_knight_animation.name = CharactersAnimationsHandler.KNIGHT_ANIMATION;
    this._disp.mc_knight_animation.addChild(this._knightAnimation);
    this._disp.mc_knight_animation.mouseChildren = false;
    this._disp.mc_knight_hover.name = CharactersAnimationsHandler.KNIGHT_ANIMATION;
    this._disp.knight_bounds.name = CharactersAnimationsHandler.KNIGHT_ANIMATION;
    this._disp.mc_knight_hover.gotoAndStop(1);
    var __s5local2 = __dep_exact_81dacdf05bd32292.getDefinitionByName(CharactersAnimationsHandler.PRINCESS_ANIMATION);
    this._princessAnimation = new __s5local2();
    this._disp.mc_princess_animation.name = CharactersAnimationsHandler.PRINCESS_ANIMATION;
    this._disp.mc_princess_animation.addChild(this._princessAnimation);
    this._disp.mc_princess_animation.mouseChildren = false;
    this._disp.mc_princess_hover.name = CharactersAnimationsHandler.PRINCESS_ANIMATION;
    this._disp.princess_bounds.name = CharactersAnimationsHandler.PRINCESS_ANIMATION;
    this._disp.mc_princess_hover.gotoAndStop(1);
    this.animations = [this._disp.mc_king_animation, this._disp.mc_knight_animation, this._disp.mc_princess_animation];
    this._disp.mc_king_hover.visible = false;
    this._disp.mc_knight_hover.visible = false;
    this._disp.mc_princess_hover.visible = false;
    this._disp.mc_king_hover.mouseChildren = false;
    this._disp.mc_knight_hover.mouseChildren = false;
    this._disp.mc_princess_hover.mouseChildren = false;
  };
  CharactersAnimationsHandler.prototype.onMouseOver = function (__s7param0) {
    var __s7local0 = null;
    if (__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s7param0.target, this._disp.king_bounds)) {
      __s7local0 = CharactersAnimationsHandler.KING_ANIMATION;
      if (!__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s7param0.target, this._disp.king_bounds.mc_quest_king)) {
        this._disp.mc_king_hover.gotoAndStop(1);
      }
    }
    if (__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s7param0.target, this._disp.knight_bounds)) {
      __s7local0 = CharactersAnimationsHandler.KNIGHT_ANIMATION;
      if (!__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s7param0.target, this._disp.knight_bounds.mc_quest_knight)) {
        this._disp.mc_knight_hover.gotoAndStop(1);
      }
    }
    if (__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s7param0.target, this._disp.princess_bounds)) {
      __s7local0 = CharactersAnimationsHandler.PRINCESS_ANIMATION;
      if (!__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s7param0.target, this._disp.princess_bounds.mc_quest_princess)) {
        this._disp.mc_princess_hover.gotoAndStop(1);
      }
    }
    if (__s7local0) {
      var __s7local1 = __s7local0;
      this.toggleShowHideHoverState(__s7local1, true);
      this.toggleAnimationsActivation(__s7local1, false);
      this.stopAnimationByName(__s7local1);
      this._animationHoveredSignal.dispatch(__s7local1);
      __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().customCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_CLICK);
    }
  };
  CharactersAnimationsHandler.prototype.onMouseOut = function (__s16param0) {
    var __s16local0 = null;
    if (__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s16param0.target, this._disp.king_bounds)) {
      __s16local0 = CharactersAnimationsHandler.KING_ANIMATION;
      if (!__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s16param0.target, this._disp.king_bounds.mc_quest_king)) {
        this._disp.mc_king_hover.gotoAndStop(1);
      }
    }
    if (__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s16param0.target, this._disp.knight_bounds)) {
      __s16local0 = CharactersAnimationsHandler.KNIGHT_ANIMATION;
      if (!__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s16param0.target, this._disp.knight_bounds.mc_quest_knight)) {
        this._disp.mc_knight_hover.gotoAndStop(1);
      }
    }
    if (__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s16param0.target, this._disp.princess_bounds)) {
      __s16local0 = CharactersAnimationsHandler.PRINCESS_ANIMATION;
      if (!__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s16param0.target, this._disp.princess_bounds.mc_quest_princess)) {
        this._disp.mc_princess_hover.gotoAndStop(1);
      }
    }
    if (__s16local0) {
      var __s16local1 = __s16local0;
      this.playAnimationByName(__s16local1);
      this.toggleShowHideHoverState(__s16local1, false);
      this.toggleAnimationsActivation(__s16local1, true);
      this._animationUnhoveredSignal.dispatch(__s16local1);
    }
  };
  CharactersAnimationsHandler.prototype.onMouseDown = function (__s25param0) {
    if (__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s25param0.target, this._disp.king_bounds) && !__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s25param0.target, this._disp.king_bounds.mc_quest_king) || __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s25param0.target, this._disp.mc_king_animation)) {
      this._disp.mc_king_hover.gotoAndStop(1);
    }
    if (__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s25param0.target, this._disp.knight_bounds) && !__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s25param0.target, this._disp.knight_bounds.mc_quest_knight) || __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s25param0.target, this._disp.mc_knight_animation)) {
      this._disp.mc_knight_hover.gotoAndStop(1);
    }
    if (__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s25param0.target, this._disp.princess_bounds) && !__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s25param0.target, this._disp.princess_bounds.mc_quest_princess) || __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s25param0.target, this._disp.mc_princess_animation)) {
      this._disp.mc_princess_hover.gotoAndStop(1);
    }
  };
  CharactersAnimationsHandler.prototype.onMouseUp = function (__s30param0) {
    if (__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s30param0.target, this._disp.king_bounds) && !__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s30param0.target, this._disp.king_bounds.mc_quest_king) || __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s30param0.target, this._disp.mc_king_animation)) {
      this._disp.mc_king_hover.gotoAndStop(1);
    }
    if (__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s30param0.target, this._disp.knight_bounds) && !__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s30param0.target, this._disp.knight_bounds.mc_quest_knight) || __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s30param0.target, this._disp.mc_knight_animation)) {
      this._disp.mc_knight_hover.gotoAndStop(1);
    }
    if (__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s30param0.target, this._disp.princess_bounds) && !__dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s30param0.target, this._disp.princess_bounds.mc_quest_princess) || __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.isDOPartOfDO(__s30param0.target, this._disp.mc_princess_animation)) {
      this._disp.mc_princess_hover.gotoAndStop(1);
    }
  };
  CharactersAnimationsHandler.prototype.toggleShowHideHoverState = function (__s35param0, __s35param1) {
    switch (__s35param0) {
      case CharactersAnimationsHandler.KING_ANIMATION:
        this._disp.mc_king_hover.visible = __s35param1;
        break;
      case CharactersAnimationsHandler.KNIGHT_ANIMATION:
        this._disp.mc_knight_hover.visible = __s35param1;
        break;
      case CharactersAnimationsHandler.PRINCESS_ANIMATION:
        this._disp.mc_princess_hover.visible = __s35param1;
    }
  };
  CharactersAnimationsHandler.prototype.toggleAnimationsActivation = function (__s38param0 = "", __s38param1) {
    for (var __s38local0 = 0; __s38local0 < this.animations.length; __s38local0++) {
      if (this.animations[__s38local0].name != __s38param0) {
        this._hoverCharacters[__s38local0].visible = false;
        this.animations[__s38local0].visible = true;
        this.playAnimation(this.animations[__s38local0]);
      } else {
        this.animations[__s38local0].visible = __s38param1;
      }
    }
  };
  CharactersAnimationsHandler.prototype.startAnimations = function () {
    this.addEventListener();
    this.playAnimation(this._disp.mc_king_animation);
    this.playAnimation(this._disp.mc_knight_animation);
    this.playAnimation(this._disp.mc_princess_animation);
  };
  Object.defineProperty(CharactersAnimationsHandler.prototype, "animationHoveredSignal", {
    get: function () {
      return this._animationHoveredSignal;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CharactersAnimationsHandler.prototype, "animationUnhoveredSignal", {
    get: function () {
      return this._animationUnhoveredSignal;
    },
    enumerable: true,
    configurable: true
  });
  CharactersAnimationsHandler.prototype.reset = function () {
    __s1param0.prototype.reset.call(this);
    this.removeEventListener();
  };
  CharactersAnimationsHandler.prototype.addEventListener = function () {
    this._disp.king_bounds.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.knight_bounds.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.princess_bounds.addEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.king_bounds.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._disp.knight_bounds.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._disp.princess_bounds.addEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._disp.king_bounds.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this._disp.knight_bounds.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this._disp.princess_bounds.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this._disp.king_bounds.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this._disp.knight_bounds.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this._disp.princess_bounds.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  CharactersAnimationsHandler.prototype.removeEventListener = function () {
    this._disp.king_bounds.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.knight_bounds.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.princess_bounds.removeEventListener(__s0local0.MOUSE_OVER, this.bindFunction(this.onMouseOver));
    this._disp.king_bounds.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._disp.knight_bounds.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._disp.princess_bounds.removeEventListener(__s0local0.MOUSE_OUT, this.bindFunction(this.onMouseOut));
    this._disp.king_bounds.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this._disp.knight_bounds.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this._disp.princess_bounds.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this._disp.king_bounds.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this._disp.knight_bounds.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    this._disp.princess_bounds.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
  };
  CharactersAnimationsHandler.prototype.stopAnimations = function () {
    __s1param0.prototype.stopAnimations.call(this);
    this.stopAnimation(this._disp.mc_king_animation);
    this.stopAnimation(this._disp.mc_knight_animation);
    this.stopAnimation(this._disp.mc_princess_animation);
  };
  CharactersAnimationsHandler.KING_ANIMATION = "King_Animation";
  CharactersAnimationsHandler.KNIGHT_ANIMATION = "Knight_Animation";
  CharactersAnimationsHandler.PRINCESS_ANIMATION = "Princess_Animation";
  return CharactersAnimationsHandler;
}(__dep_export_GeneralsHubBasicAnimationsHandler.GeneralsHubBasicAnimationsHandler);
exports.CharactersAnimationsHandler = __s0local1;
