Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __dep_export_ACollectableItemVE = require("gge-module:export_ACollectableItemVE");
var __s0local0 = createjs.MovieClip;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CollectableItemBoosterVE() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CollectableItemBoosterVE, __s1param0);
  CollectableItemBoosterVE._getBoosterTooltipDic = function () {
    var __s5local0 = new Map();
    __s5local0.set(__dep_exact_26a421b704832cff.BoosterConst.OVERSEER_WOOD, "dialog_overseer_wood_timelimit_tooltip");
    __s5local0.set(__dep_exact_26a421b704832cff.BoosterConst.OVERSEER_STONE, "dialog_overseer_stone_timelimit_tooltip");
    __s5local0.set(__dep_exact_26a421b704832cff.BoosterConst.OVERSEER_FOOD, "dialog_overseer_food_timelimit_tooltip");
    __s5local0.set(__dep_exact_26a421b704832cff.BoosterConst.MARAUDER, "dialog_marauder_timelimit_tooltip");
    __s5local0.set(__dep_exact_26a421b704832cff.BoosterConst.TAX, "dialog_taxcollector_timelimit_tooltip");
    __s5local0.set(__dep_exact_26a421b704832cff.BoosterConst.INSTRUCTOR, "dialog_instructor_timelimit_tooltip");
    __s5local0.set(__dep_exact_26a421b704832cff.BoosterConst.CARAVAN_OVERLOADER, "caravanGuy");
    __s5local0.set(__dep_exact_26a421b704832cff.BoosterConst.LONGTERM_POINT_EVENT_BOOST_ID, "pointsEvent_booster_tooltip");
    return __s5local0;
  };
  CollectableItemBoosterVE.prototype.init = function (__s7param0, __s7param1) {
    __s1param0.prototype.init.call(this, __s7param0, __s7param1);
    this.triggerOnAllIconDispLoadedManually = this.options.icon.useSmallBoosterIcons;
  };
  CollectableItemBoosterVE.prototype.textfieldUpdate = function () {
    if (this.options.textfield.showBoosterDuration) {
      __s1param0.prototype.textfieldUpdate.call(this);
    } else {
      this.textfieldSetText("");
    }
  };
  CollectableItemBoosterVE.prototype.iconCreate = function () {
    if (this.options.icon.useSmallBoosterIcons) {
      var __s13local0 = new __s0local0();
      this.dispCreator.addDisp(__s13local0);
      this.dispCreator.addClip(this._iconClip = __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(CollectableItemBoosterVE.BOOSTER_SMALL_IDS[this.boosterItemVO.boosterVO.id], __s13local0, this.options.icon.dimension.x, this.options.icon.dimension.y, false));
    } else {
      this.dispCreator.addClip(this._iconClip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(CollectableItemBoosterVE.BOOSTER_BIG_ICONS_ASSET_NAME, __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl(CollectableItemBoosterVE.BOOSTER_BIG_ICONS_ASSET_NAME), null, 0, false));
    }
  };
  CollectableItemBoosterVE.prototype.iconDestroy = function () {
    this._iconClip = null;
    __s1param0.prototype.iconDestroy.call(this);
  };
  CollectableItemBoosterVE.prototype.tooltipCreate = function () {
    var __s19local0 = this.boosterItemVO.boosterVO;
    if (__s19local0) {
      var __s19local1 = __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.getCommaTimeStringFromSeconds(__s19local0.duration, __dep_export_CastleModel.CastleModel.languageData.bindFunction(__dep_export_CastleModel.CastleModel.languageData.getTextById), __dep_exact_9e901e8e2483a22f_1.TimeStringHelper.TWO_TIME_FORMAT);
      return __dep_export_CastleModel.CastleModel.languageData.getTextById(CollectableItemBoosterVE.BOOSTER_TOOLTIPS.get(__s19local0.id), [__s19local1]);
    }
    return null;
  };
  CollectableItemBoosterVE.prototype.onAllDispClipsLoaded = function (__s22param0 = null) {
    if (this.options.icon.useSmallBoosterIcons) {
      this.onSmallBoosterLoaded();
    } else {
      this.onBigBoosterIconLoaded();
    }
    __s1param0.prototype.onAllDispClipsLoaded.call(this, __s22param0);
  };
  CollectableItemBoosterVE.prototype.onSmallBoosterLoaded = function () {
    if (this.boosterItemVO.boosterVO) {
      var __s26local0 = __dep_exact_f855840627e6e145.int(CollectableItemBoosterVE.BOOSTER_SMALL_IDS[this.boosterItemVO.boosterVO.id]);
      if (this._iconClip && (__s26local0 == __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_OVERSEER || __s26local0 == __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_VETERAN_OVERSEER)) {
        var __s26local1;
        if (this.boosterItemVO.boosterVO.isWoodBooster) {
          __s26local1 = new Library.CastleInterfaceElements_Icons.Icon_Wood_Big();
        } else if (this.boosterItemVO.boosterVO.isStoneBooster) {
          __s26local1 = new Library.CastleInterfaceElements_Icons.Icon_Stone_Big();
        } else if (this.boosterItemVO.boosterVO.isFoodBooster) {
          __s26local1 = new Library.CastleInterfaceElements_Icons.Icon_Food_Big();
        }
        this._iconClip.addChild(__s26local1);
        __s26local1.x = this.options.icon.dimension.x * 0.25;
        __s26local1.y = this.options.icon.dimension.y * 0.25;
        var __s26local2 = new __s0local1(this.options.icon.dimension.x * 0.6, this.options.icon.dimension.y * 0.6);
        var __s26local3 = 1;
        __s26local3 = __s26local1.width > __s26local1.height ? __s26local2.x / __s26local1.width : __s26local2.y / __s26local1.height;
        __s26local1.width *= __s26local3;
        __s26local1.height *= __s26local3;
      }
    }
  };
  CollectableItemBoosterVE.prototype.onBigBoosterIconLoaded = function () {
    if (this.boosterItemVO.boosterVO) {
      this._iconClip.gotoAndStop(CollectableItemBoosterVE.BOOSTER_BIG_FRAMES[this.boosterItemVO.boosterVO.id]);
    }
  };
  Object.defineProperty(CollectableItemBoosterVE.prototype, "boosterItemVO", {
    get: function () {
      return this.vo;
    },
    enumerable: true,
    configurable: true
  });
  CollectableItemBoosterVE.__initialize_static_members = function () {
    CollectableItemBoosterVE.BOOSTER_TOOLTIPS = CollectableItemBoosterVE._getBoosterTooltipDic();
    CollectableItemBoosterVE.BOOSTER_BIG_ICONS_ASSET_NAME = "TimeChallengeBoosterIcons";
    CollectableItemBoosterVE.BOOSTER_BIG_FRAMES = [1, 3, 2, 1, 3, 2, 4, 1, 5, 1, 7, 6];
    CollectableItemBoosterVE.BOOSTER_SMALL_IDS = [__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_OVERSEER, __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_OVERSEER, __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_OVERSEER, __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_VETERAN_OVERSEER, __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_VETERAN_OVERSEER, __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_VETERAN_OVERSEER, __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_MARAUDER, __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_MEDICUS, __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_TAXCOLLECTOR, __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_ARCHITECT, __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_INSTRUCTOR, __dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_MERCHANT];
  };
  return CollectableItemBoosterVE;
}(__dep_export_ACollectableItemVE.ACollectableItemVE);
exports.CollectableItemBoosterVE = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
__s0local2.__initialize_static_members();
