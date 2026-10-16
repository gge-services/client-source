Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleDialogConsts = require("gge-module:export_CastleDialogConsts");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_CastleExternalPreloaderDialog = require("gge-module:export_CastleExternalPreloaderDialog");
var __dep_export_CastleExternalPreloaderDialogProperties = require("gge-module:export_CastleExternalPreloaderDialogProperties");
var __dep_export_GeneralsHubDialog = require("gge-module:export_GeneralsHubDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function GeneralsHelper() {}
  GeneralsHelper.updateStarLevel = function (__s5param0, __s5param1, __s5param2 = "mc_star") {
    var __s5local0 = 1;
    for (var __s5local1 = __s5param0[__s5param2 + __s5local0]; __s5local1;) {
      __s5local1.visible = __s5param1.maxStarLevel >= __s5local0;
      __s5local1.toolTipText = "dialog_generals_generalStarRating_tooltip";
      __s5local1.mc_filled.visible = __s5param1.currentStarLevel >= __s5local0 || __s5param1.currentStarLevel > GeneralsHelper.MAX_STAR_MCS * 2 - __s5param1.currentStarLevel;
      __s5local1.mc_filled2.visible = __s5param1.currentStarLevel >= __s5local0 + GeneralsHelper.MAX_STAR_MCS;
      __s5local1.mc_empty.visible = !__s5local1.mc_filled.visible;
      __s5local1 = __s5param0[__s5param2 + ++__s5local0];
    }
  };
  GeneralsHelper.showLordMainEffects = function (__s9param0, __s9param1, __s9param2 = null, __s9param3 = false, __s9param4 = true, __s9param5 = "mc_lordEffect") {
    __s9param2 = __s9param2 || new __s0local0(30, 30);
    __s9param1 = __s9param1.filter(function (__s11param0) {
      return !!__s11param0.effect.effectType.type.simpleEffectIconClass;
    }).sort(GeneralsHelper.sortLordMainEffects);
    var __s9local0 = 1;
    for (var __s9local1 = __s9param0[__s9param5 + __s9local0]; __s9local1;) {
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(__s9local1.mc_iconHolder);
      var __s9local2 = __s9param1.length >= __s9local0 ? __s9param1[__s9local0 - 1] : null;
      if (__s9local2) {
        var __s9local3 = new __s9local2.effect.effectType.type.simpleEffectIconClass();
        __s9local1.mc_iconHolder.addChild(__s9local3);
        __s9local1.mouseChildren = false;
        __s9local1.visible = true;
        __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.scaleWithAntiAliasing(__s9local3, __s9param2.x, __s9param2.y, 1);
        var __s9local4 = __dep_exact_81dacdf05bd32292.castAs(__s9local2, "ILordEffectText");
        if (__s9local4) {
          var __s9local5 = __s9param3 ? "dialog_generals_castellan_effectHighlight_tooltip" : "dialog_generals_commander_effectHighlight_tooltip";
          var __s9local6 = __dep_exact_92d05af59ee2ff30.Localize.text(__s9local5, [__s9local4.lordEffectText()]);
          if (__s9param4) {
            __s9local1.toolTipText = __s9local6;
          } else {
            __s9local1.data = __s9local6;
          }
        }
        __s9local1.doCache();
      } else {
        __s9local1.visible = false;
      }
      __s9local1 = __s9param0[__s9param5 + ++__s9local0];
    }
  };
  GeneralsHelper.sortLordMainEffects = function (__s20param0, __s20param1) {
    if (__s20param0.maxValueStrength == Number.MAX_VALUE || __s20param1.maxValueStrength == Number.MAX_VALUE) {
      if (__s20param1.effectValue.strength != __s20param0.effectValue.strength) {
        return __s20param1.effectValue.strength - __s20param0.effectValue.strength;
      }
    } else {
      var __s20local0 = Math.min(1, __s20param0.effectValue.strength / __s20param0.maxValueStrength);
      var __s20local1 = Math.min(1, __s20param1.effectValue.strength / __s20param1.maxValueStrength);
      if (__s20local1 != __s20local0) {
        return __s20local1 - __s20local0;
      }
    }
    return __s20param1.effect.effectID - __s20param0.effect.effectID;
  };
  GeneralsHelper.getGeneralClip = function (__s26param0, __s26param1, __s26param2 = -1) {
    var __s26local0 = "General_" + __s26param0 + (__s26param1 ? "_Animated" : "_Static");
    if (__s26param1) {
      __s26param2 *= __s26param2 < 0 ? -0.5 : 0.5;
    }
    if (__s26param0 <= 0) {
      return null;
    }
    var __s26local1 = __s26param0 >= 123 ? 30 : 24;
    var __s26local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s26local0, __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s26local0), null, __s26local1);
    if (__s26param2 > 0) {
      __s26local2.doWhenLoaded(function (__s31param0) {
        __s31param0.scaleX = __s31param0.scaleY = __s26param2;
        __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.playAllMovies(__s31param0.currentshownDisplayObject);
      });
    } else {
      __s26local2.doWhenLoaded(function (__s34param0) {
        __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.playAllMovies(__s34param0.currentshownDisplayObject);
      });
    }
    return __s26local2;
  };
  GeneralsHelper.getGeneralsBackground = function (__s36param0, __s36param1 = false, __s36param2 = 1, __s36param3 = null, __s36param4 = true) {
    var __s36local0 = "GeneralsBackground_";
    if (__s36param0 <= 0) {
      __s36local0 = __s36param4 ? "GeneralsBackground_Generic_BW_Empty" : "GeneralsBackground_Generic_BW";
    } else {
      __s36local0 += __s36param0;
      if (__s36param1) {
        __s36local0 += "_BW";
      }
    }
    var __s36local1 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s36local0, __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s36local0));
    if (__s36param3) {
      __s36local1.doWhenLoaded(__s36param3);
    }
    __s36local1.doWhenLoaded(function (__s42param0) {
      __s42param0.scaleX = __s42param0.scaleY = __s36param2;
      if (__s36param3) {
        __s36param3();
      }
    });
    return __s36local1;
  };
  GeneralsHelper.getGeneralAbilityClip = function (__s45param0, __s45param1, __s45param2, __s45param3, __s45param4) {
    var __s45local0 = this;
    if (__s45param2 === undefined) {
      __s45param2 = -1;
    }
    if (__s45param3 === undefined) {
      __s45param3 = true;
    }
    if (__s45param4 === undefined) {
      __s45param4 = false;
    }
    var __s45local1 = "GeneralsAbilityGroup_" + __s45param0;
    if (__s45param0 <= 0) {
      __s45local1 = "GeneralsAbilityGroup_Empty";
    }
    var __s45local2 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s45local1, __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s45local1));
    __s45local2.recycleAsset = false;
    __s45local2.doWhenLoaded(function (__s51param0) {
      if (__s51param0.currentshownDisplayObject.height != __s45param1) {
        __s51param0.currentshownDisplayObject.scaleX = __s51param0.currentshownDisplayObject.scaleY = __s45param1 / __s51param0.currentshownDisplayObject.height;
      }
      if (__s45param0 > 0) {
        if (__s45param4) {
          __s51param0.currentshownDisplayObject.useFilters(__s45local0.createNeutralColorMatrixFilter());
        } else if (__s45param3) {
          __s51param0.currentshownDisplayObject.useFilters(__s45local0.createAttackColorMatrixFilter());
        } else {
          __s51param0.currentshownDisplayObject.useFilters(__s45local0.createDefenceColorMatrixFilter());
        }
      }
      __s51param0.mouseChildren = false;
      __s51param0.toolTipText = __s45local0.getLocalizedTitleForAbility(__s45param0);
      if (__s45param2 > 0) {
        __s51param0.toolTipText += "\n" + __s45local0.getLocalizedCopyForAbility(__s45param2, __s45param3);
      }
    });
    return __s45local2;
  };
  GeneralsHelper.createAttackColorMatrixFilter = function () {
    var __s59local0 = new __dep_exact_9e901e8e2483a22f_1.ColorMatrix();
    __s59local0.fill(12402485);
    var __s59local1 = new __dep_exact_9e901e8e2483a22f_1.ColorMatrix();
    __s59local1.blend(__s59local0, 0.3);
    return [__s59local1.filter];
  };
  GeneralsHelper.createDefenceColorMatrixFilter = function () {
    var __s61local0 = new __dep_exact_9e901e8e2483a22f_1.ColorMatrix();
    __s61local0.fill(3042977);
    var __s61local1 = new __dep_exact_9e901e8e2483a22f_1.ColorMatrix();
    __s61local1.blend(__s61local0, 0.3);
    return [__s61local1.filter];
  };
  GeneralsHelper.createNeutralColorMatrixFilter = function () {
    var __s63local0 = new __dep_exact_9e901e8e2483a22f_1.ColorMatrix();
    __s63local0.fill(10367133);
    var __s63local1 = new __dep_exact_9e901e8e2483a22f_1.ColorMatrix();
    __s63local1.blend(__s63local0, 0.3);
    return [__s63local1.filter];
  };
  GeneralsHelper.showGeneralsHubDialog = function () {
    this.showLoading();
    this.loadHubAssetsAndOpen(0);
  };
  GeneralsHelper.loadHubAssetsAndOpen = function (__s67param0) {
    var __s67local0 = this;
    __dep_exact_9e901e8e2483a22f_1.loadAssets(GeneralsHelper.HUB_LIBRARIES, __dep_exact_9e901e8e2483a22f_1.AssetLoadingFlowType.PARALLEL).then(function (__s69param0) {
      if (!GeneralsHelper.areHubLibrariesReady()) {
        if (__s67param0 < 1) {
          __dep_exact_9e901e8e2483a22f.warn("general hub libraries not ready after load, retrying once");
          GeneralsHelper.loadHubAssetsAndOpen(__s67param0 + 1);
          return;
        } else {
          __dep_exact_9e901e8e2483a22f.warn("general hub libraries still missing after retry, aborting dialog open to avoid crash");
          __s67local0.hideLoading();
          return;
        }
      }
      __s67local0.hideLoading();
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_GeneralsHubDialog.GeneralsHubDialog);
    }).catch(function (__s74param0) {
      __s67local0.hideLoading();
      __dep_exact_9e901e8e2483a22f.warn("failed to load general hub assets", __s74param0);
    });
  };
  GeneralsHelper.areHubLibrariesReady = function () {
    return !!Library.Hub_Backgrounds1 && !!Library.Hub_Backgrounds1.Light_Ground && !!Library.Hub_Backgrounds2 && !!Library.Misc && !!Library.Characters;
  };
  GeneralsHelper.showLoading = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog, new __dep_export_CastleExternalPreloaderDialogProperties.CastleExternalPreloaderDialogProperties(null), __dep_export_CastleDialogConsts.CastleDialogConsts.DIALOG_TYPE_PRELOADER);
  };
  GeneralsHelper.hideLoading = function () {
    __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().hideDialog(__dep_export_CastleExternalPreloaderDialog.CastleExternalPreloaderDialog);
  };
  GeneralsHelper.getLocalizedTitleForAbility = function (__s82param0) {
    if (__dep_export_CastleModel.CastleModel.generalsData.getAbilityGroupByID(__s82param0)) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("generals_abilities_name_" + __s82param0);
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_abilityDialog_noAbilityselected");
    }
  };
  GeneralsHelper.getLocalizedCopyForAbility = function (__s86param0, __s86param1, __s86param2 = GeneralsHelper.ABILITY_TEXT_DEFAULT, __s86param3 = null) {
    var __s86local0 = __dep_export_CastleModel.CastleModel.generalsData.getAbilityByID(__s86param0);
    if (!__s86local0) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("dialog_generals_abilityDialog_noEffects");
    }
    var __s86local1;
    var __s86local2 = __s86param1 ? __s86local0.abilityAttackEffect : __s86local0.abilityDefenseEffect;
    if (!__s86local2) {
      return __dep_exact_92d05af59ee2ff30.Localize.text(__s86param1 ? "dialog_generals_skillTree_skillTooltip_noOffenseSkill" : "dialog_generals_skillTree_skillTooltip_noDefenseSkill");
    }
    __s86local1 = __s86param2 == GeneralsHelper.ABILITY_TEXT_SHORT_LEVELING ? "generals_abilities_desc_short_leveling_" + (__s86param1 ? "attack" : "defense") + "_" + __s86local0.abilityGroupID : __s86param2 == GeneralsHelper.ABILITY_TEXT_SHORT_VALUE ? "generals_abilities_desc_short_value_" + (__s86param1 ? "attack" : "defense") + "_" + __s86local0.abilityGroupID : __s86param2 == GeneralsHelper.ABILITY_TEXT_SHORT ? "generals_abilities_desc_short_" + (__s86param1 ? "attack" : "defense") + "_" + __s86local0.abilityGroupID : "generals_abilities_desc_" + (__s86param1 ? "attack" : "defense") + "_" + __s86local0.abilityGroupID;
    var __s86local3 = (__s86param3 || __s86local2.getEffect(0).effectValue).getContextTextReplacements(__s86local1);
    if (__s86local0.triggerPerWave > 0) {
      __s86local3.push(__s86local0.triggerPerWave);
    }
    return __dep_exact_92d05af59ee2ff30.Localize.text(__s86local1, __s86local3);
  };
  GeneralsHelper.getLocalizedGeneralAbilitySummary = function (__s91param0, __s91param1, __s91param2 = false) {
    var __s91local0 = "";
    if (!__s91param0) {
      return __s91local0;
    }
    for (var __s91local1 = __s91param0.selectedAbilities, __s91local2 = 0; __s91local2 < __s91local1.length; __s91local2++) {
      var __s91local3 = __s91local1[__s91local2][0];
      var __s91local4 = __s91local1[__s91local2][1];
      if ((!__s91param1 || !(__s91param0.generalXmlVO.attackSlots.indexOf(__s91local3) < 0)) && (!!__s91param1 || !(__s91param0.generalXmlVO.defenseSlots.indexOf(__s91local3) < 0))) {
        __s91local0 += this.getLocalizedCopyForAbility(__s91local4, __s91param1, GeneralsHelper.ABILITY_TEXT_DEFAULT) + "\n";
      }
    }
    return __s91local0;
  };
  GeneralsHelper.MAX_STAR_MCS = 5;
  GeneralsHelper.HUB_LIBRARIES = ["Characters", "Hub_Backgrounds1", "Hub_Backgrounds2", "Misc", "Rewards_Animation"];
  GeneralsHelper.ABILITY_TEXT_DEFAULT = 0;
  GeneralsHelper.ABILITY_TEXT_SHORT = 1;
  GeneralsHelper.ABILITY_TEXT_SHORT_VALUE = 2;
  GeneralsHelper.ABILITY_TEXT_SHORT_LEVELING = 3;
  return GeneralsHelper;
}();
exports.GeneralsHelper = __s0local1;
