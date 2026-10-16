Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __dep_export_CastleHeroDefaultBoosterShopVO = require("gge-module:export_CastleHeroDefaultBoosterShopVO");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleInstructorPremiumShopVO() {
    return __s1param0.call(this, "instructor_title", "instructor_copy_short", __dep_exact_26a421b704832cff.BoosterConst.INSTRUCTOR_COST_C2, "instructor") || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleInstructorPremiumShopVO, __s1param0);
  Object.defineProperty(CastleInstructorPremiumShopVO.prototype, "bonusValue", {
    get: function () {
      return Math.round(__dep_exact_26a421b704832cff.BoosterConst.INSTRUCTOR_BOOST * 100);
    },
    set: function (__s7param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "bonusValue").set.call(this, __s7param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInstructorPremiumShopVO.prototype, "listSortPriority", {
    get: function () {
      return 210;
    },
    set: function (__s11param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "listSortPriority").set.call(this, __s11param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInstructorPremiumShopVO.prototype, "duration", {
    get: function () {
      if (this.isActive) {
        return __dep_exact_9e901e8e2483a22f.TimeStringHelper.getCommaTimeStringFromSeconds(this.remainingTimeInSeconds, __dep_exact_92d05af59ee2ff30.Localize.text);
      } else {
        return __dep_exact_9e901e8e2483a22f.TimeStringHelper.getCommaTimeStringFromSeconds(__dep_exact_26a421b704832cff.BoosterConst.INSTRUCTOR_DURATION, __dep_exact_92d05af59ee2ff30.Localize.text);
      }
    },
    set: function (__s17param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "duration").set.call(this, __s17param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleInstructorPremiumShopVO.prototype.clickedBuyButton = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleBuyInstructorDialog.CastleBuyInstructorDialog);
  };
  Object.defineProperty(CastleInstructorPremiumShopVO.prototype, "bonusIconFrame", {
    get: function () {
      return 8;
    },
    set: function (__s23param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "bonusIconFrame").set.call(this, __s23param0);
    },
    enumerable: true,
    configurable: true
  });
  CastleInstructorPremiumShopVO.prototype.createVisualMovieClip = function () {
    var __s25local0 = new __s0local0();
    var __s25local1 = __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_INSTRUCTOR, __s25local0, -1, -1, false, this.bindFunction(this.onLoadedIcon));
    __s25local1.recycleAsset = false;
    if (!__s25local1.isLoaded) {
      __s25local0.visible = false;
    }
    __s25local0.addChild(__s25local1);
    return __s25local0;
  };
  CastleInstructorPremiumShopVO.prototype.createVisualMovieClipForBuyDialog = function () {
    var __s28local0 = new __s0local0();
    __s28local0.addChild(__dep_export_CharacterHelper.CharacterHelper.createCharacterBig(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_INSTRUCTOR, __s28local0, __dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.MAX_BUY_DIALOG_ICON_WIDTH, __dep_export_CastlePremiumMarketShopVO.CastlePremiumMarketShopVO.MAX_BUY_DIALOG_ICON_HEIGHT, false));
    return __s28local0;
  };
  Object.defineProperty(CastleInstructorPremiumShopVO.prototype, "offsetIcon", {
    get: function () {
      return new __s0local1(0, 0);
    },
    set: function (__s32param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "offsetIcon").set.call(this, __s32param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleInstructorPremiumShopVO.prototype, "id", {
    get: function () {
      return __dep_exact_26a421b704832cff.BoosterConst.INSTRUCTOR;
    },
    set: function (__s36param0) {
      Object.getOwnPropertyDescriptor(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO.prototype, "id").set.call(this, __s36param0);
    },
    enumerable: true,
    configurable: true
  });
  return CastleInstructorPremiumShopVO;
}(__dep_export_CastleHeroDefaultBoosterShopVO.CastleHeroDefaultBoosterShopVO);
exports.CastleInstructorPremiumShopVO = __s0local2;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleBuyInstructorDialog = require("gge-module:export_CastleBuyInstructorDialog");
var __dep_export_CastlePremiumMarketShopVO = require("gge-module:export_CastlePremiumMarketShopVO");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "IPremiumMarketShopVO", "IDefaultBoosterDataVO", "IBoosterDataVO");
