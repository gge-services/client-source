import { AssetLoadingFlowType } from "../../../ggs.dll/reconstructed/exports/AssetLoadingFlowType";
import { BasicModel } from "../../../ggs.dll/reconstructed/exports/BasicModel";
import { castAs } from "../../../ggs.dll/reconstructed/exports/castAs";
import { CastleDialogConsts } from "./CastleDialogConsts";
import { CastleDialogHandler } from "./CastleDialogHandler";
import { CastleExternalPreloaderDialog } from "./CastleExternalPreloaderDialog";
import { CastleExternalPreloaderDialogProperties } from "./CastleExternalPreloaderDialogProperties";
import { CastleGoodgameExternalClip } from "./CastleGoodgameExternalClip";
import { CastleLayoutManager } from "./CastleLayoutManager";
import { CastleModel } from "./CastleModel";
import { CastleMovieClipHelper } from "./CastleMovieClipHelper";
import { ColorMatrix } from "../../../ggs.dll/reconstructed/exports/ColorMatrix";
import { GeneralsHubDialog } from "./GeneralsHubDialog";
import { loadAssets } from "../../../ggs.dll/reconstructed/exports/loadAssets";
import { Localize } from "../../../ggs.dll/reconstructed/exports/Localize";
import { MovieClipHelper } from "../../../ggs.dll/reconstructed/exports/MovieClipHelper";
import { warn } from "../../../ggs.dll/reconstructed/exports/warn";
const __s0local0 = createjs.Point;
export class GeneralsHelper {
  static updateStarLevel(argument0, argument1, argument2 = "mc_star") {
    var __s5local0 = 1;
    for (var __s5local1 = argument0[argument2 + __s5local0]; __s5local1;) {
      __s5local1.visible = argument1.maxStarLevel >= __s5local0;
      __s5local1.toolTipText = "dialog_generals_generalStarRating_tooltip";
      __s5local1.mc_filled.visible = argument1.currentStarLevel >= __s5local0 || argument1.currentStarLevel > GeneralsHelper.MAX_STAR_MCS * 2 - argument1.currentStarLevel;
      __s5local1.mc_filled2.visible = argument1.currentStarLevel >= __s5local0 + GeneralsHelper.MAX_STAR_MCS;
      __s5local1.mc_empty.visible = !__s5local1.mc_filled.visible;
      __s5local1 = argument0[argument2 + ++__s5local0];
    }
  }
  static showLordMainEffects(argument0, argument1, argument2 = null, argument3 = false, argument4 = true, argument5 = "mc_lordEffect") {
    argument2 = argument2 || new __s0local0(30, 30);
    argument1 = argument1.filter(function (__s11param0) {
      return !!__s11param0.effect.effectType.type.simpleEffectIconClass;
    }).sort(GeneralsHelper.sortLordMainEffects);
    var __s9local0 = 1;
    for (var __s9local1 = argument0[argument5 + __s9local0]; __s9local1;) {
      MovieClipHelper.clearMovieClip(__s9local1.mc_iconHolder);
      var __s9local2 = argument1.length >= __s9local0 ? argument1[__s9local0 - 1] : null;
      if (__s9local2) {
        var __s9local3 = new __s9local2.effect.effectType.type.simpleEffectIconClass();
        __s9local1.mc_iconHolder.addChild(__s9local3);
        __s9local1.mouseChildren = false;
        __s9local1.visible = true;
        CastleMovieClipHelper.scaleWithAntiAliasing(__s9local3, argument2.x, argument2.y, 1);
        var __s9local4 = castAs(__s9local2, "ILordEffectText");
        if (__s9local4) {
          var __s9local5 = argument3 ? "dialog_generals_castellan_effectHighlight_tooltip" : "dialog_generals_commander_effectHighlight_tooltip";
          var __s9local6 = Localize.text(__s9local5, [__s9local4.lordEffectText()]);
          if (argument4) {
            __s9local1.toolTipText = __s9local6;
          } else {
            __s9local1.data = __s9local6;
          }
        }
        __s9local1.doCache();
      } else {
        __s9local1.visible = false;
      }
      __s9local1 = argument0[argument5 + ++__s9local0];
    }
  }
  static sortLordMainEffects(argument0, argument1) {
    if (argument0.maxValueStrength == Number.MAX_VALUE || argument1.maxValueStrength == Number.MAX_VALUE) {
      if (argument1.effectValue.strength != argument0.effectValue.strength) {
        return argument1.effectValue.strength - argument0.effectValue.strength;
      }
    } else {
      var __s20local0 = Math.min(1, argument0.effectValue.strength / argument0.maxValueStrength);
      var __s20local1 = Math.min(1, argument1.effectValue.strength / argument1.maxValueStrength);
      if (__s20local1 != __s20local0) {
        return __s20local1 - __s20local0;
      }
    }
    return argument1.effect.effectID - argument0.effect.effectID;
  }
  static getGeneralClip(argument0, argument1, argument2 = -1) {
    var __s26local0 = "General_" + argument0 + (argument1 ? "_Animated" : "_Static");
    if (argument1) {
      argument2 *= argument2 < 0 ? -0.5 : 0.5;
    }
    if (argument0 <= 0) {
      return null;
    }
    var __s26local1 = argument0 >= 123 ? 30 : 24;
    var __s26local2 = new CastleGoodgameExternalClip(__s26local0, BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s26local0), null, __s26local1);
    if (argument2 > 0) {
      __s26local2.doWhenLoaded(function (__s31param0) {
        __s31param0.scaleX = __s31param0.scaleY = argument2;
        MovieClipHelper.playAllMovies(__s31param0.currentshownDisplayObject);
      });
    } else {
      __s26local2.doWhenLoaded(function (__s34param0) {
        MovieClipHelper.playAllMovies(__s34param0.currentshownDisplayObject);
      });
    }
    return __s26local2;
  }
  static getGeneralsBackground(argument0, argument1 = false, argument2 = 1, argument3 = null, argument4 = true) {
    var __s36local0 = "GeneralsBackground_";
    if (argument0 <= 0) {
      __s36local0 = argument4 ? "GeneralsBackground_Generic_BW_Empty" : "GeneralsBackground_Generic_BW";
    } else {
      __s36local0 += argument0;
      if (argument1) {
        __s36local0 += "_BW";
      }
    }
    var __s36local1 = new CastleGoodgameExternalClip(__s36local0, BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s36local0));
    if (argument3) {
      __s36local1.doWhenLoaded(argument3);
    }
    __s36local1.doWhenLoaded(function (__s42param0) {
      __s42param0.scaleX = __s42param0.scaleY = argument2;
      if (argument3) {
        argument3();
      }
    });
    return __s36local1;
  }
  static getGeneralAbilityClip(argument0, argument1, argument2?: any, argument3?: any, argument4?: any) {
    var __s45local0 = this;
    if (argument2 === undefined) {
      argument2 = -1;
    }
    if (argument3 === undefined) {
      argument3 = true;
    }
    if (argument4 === undefined) {
      argument4 = false;
    }
    var __s45local1 = "GeneralsAbilityGroup_" + argument0;
    if (argument0 <= 0) {
      __s45local1 = "GeneralsAbilityGroup_Empty";
    }
    var __s45local2 = new CastleGoodgameExternalClip(__s45local1, BasicModel.basicLoaderData.getVersionedItemAssetUrl(__s45local1));
    __s45local2.recycleAsset = false;
    __s45local2.doWhenLoaded(function (__s51param0) {
      if (__s51param0.currentshownDisplayObject.height != argument1) {
        __s51param0.currentshownDisplayObject.scaleX = __s51param0.currentshownDisplayObject.scaleY = argument1 / __s51param0.currentshownDisplayObject.height;
      }
      if (argument0 > 0) {
        if (argument4) {
          __s51param0.currentshownDisplayObject.useFilters(__s45local0.createNeutralColorMatrixFilter());
        } else if (argument3) {
          __s51param0.currentshownDisplayObject.useFilters(__s45local0.createAttackColorMatrixFilter());
        } else {
          __s51param0.currentshownDisplayObject.useFilters(__s45local0.createDefenceColorMatrixFilter());
        }
      }
      __s51param0.mouseChildren = false;
      __s51param0.toolTipText = __s45local0.getLocalizedTitleForAbility(argument0);
      if (argument2 > 0) {
        __s51param0.toolTipText += "\n" + __s45local0.getLocalizedCopyForAbility(argument2, argument3);
      }
    });
    return __s45local2;
  }
  static createAttackColorMatrixFilter() {
    var __s59local0 = new ColorMatrix();
    __s59local0.fill(12402485);
    var __s59local1 = new ColorMatrix();
    __s59local1.blend(__s59local0, 0.3);
    return [__s59local1.filter];
  }
  static createDefenceColorMatrixFilter() {
    var __s61local0 = new ColorMatrix();
    __s61local0.fill(3042977);
    var __s61local1 = new ColorMatrix();
    __s61local1.blend(__s61local0, 0.3);
    return [__s61local1.filter];
  }
  static createNeutralColorMatrixFilter() {
    var __s63local0 = new ColorMatrix();
    __s63local0.fill(10367133);
    var __s63local1 = new ColorMatrix();
    __s63local1.blend(__s63local0, 0.3);
    return [__s63local1.filter];
  }
  static showGeneralsHubDialog() {
    this.showLoading();
    this.loadHubAssetsAndOpen(0);
  }
  static loadHubAssetsAndOpen(argument0) {
    var __s67local0 = this;
    loadAssets(GeneralsHelper.HUB_LIBRARIES, AssetLoadingFlowType.PARALLEL).then(function (__s69param0) {
      if (!GeneralsHelper.areHubLibrariesReady()) {
        if (argument0 < 1) {
          warn("general hub libraries not ready after load, retrying once");
          GeneralsHelper.loadHubAssetsAndOpen(argument0 + 1);
          return;
        } else {
          warn("general hub libraries still missing after retry, aborting dialog open to avoid crash");
          __s67local0.hideLoading();
          return;
        }
      }
      __s67local0.hideLoading();
      CastleDialogHandler.getInstance().registerDefaultDialogs(GeneralsHubDialog);
    }).catch(function (__s74param0) {
      __s67local0.hideLoading();
      warn("failed to load general hub assets", __s74param0);
    });
  }
  static areHubLibrariesReady() {
    return !!Library.Hub_Backgrounds1 && !!Library.Hub_Backgrounds1.Light_Ground && !!Library.Hub_Backgrounds2 && !!Library.Misc && !!Library.Characters;
  }
  static showLoading() {
    CastleDialogHandler.getInstance().registerDialogsWithTypeAndDefaultValues(CastleExternalPreloaderDialog, new CastleExternalPreloaderDialogProperties(null), CastleDialogConsts.DIALOG_TYPE_PRELOADER);
  }
  static hideLoading() {
    CastleLayoutManager.getInstance().hideDialog(CastleExternalPreloaderDialog);
  }
  static getLocalizedTitleForAbility(argument0) {
    if (CastleModel.generalsData.getAbilityGroupByID(argument0)) {
      return Localize.text("generals_abilities_name_" + argument0);
    } else {
      return Localize.text("dialog_generals_abilityDialog_noAbilityselected");
    }
  }
  static getLocalizedCopyForAbility(argument0, argument1, argument2 = GeneralsHelper.ABILITY_TEXT_DEFAULT, argument3 = null) {
    var __s86local0 = CastleModel.generalsData.getAbilityByID(argument0);
    if (!__s86local0) {
      return Localize.text("dialog_generals_abilityDialog_noEffects");
    }
    var __s86local1;
    var __s86local2 = argument1 ? __s86local0.abilityAttackEffect : __s86local0.abilityDefenseEffect;
    if (!__s86local2) {
      return Localize.text(argument1 ? "dialog_generals_skillTree_skillTooltip_noOffenseSkill" : "dialog_generals_skillTree_skillTooltip_noDefenseSkill");
    }
    __s86local1 = argument2 == GeneralsHelper.ABILITY_TEXT_SHORT_LEVELING ? "generals_abilities_desc_short_leveling_" + (argument1 ? "attack" : "defense") + "_" + __s86local0.abilityGroupID : argument2 == GeneralsHelper.ABILITY_TEXT_SHORT_VALUE ? "generals_abilities_desc_short_value_" + (argument1 ? "attack" : "defense") + "_" + __s86local0.abilityGroupID : argument2 == GeneralsHelper.ABILITY_TEXT_SHORT ? "generals_abilities_desc_short_" + (argument1 ? "attack" : "defense") + "_" + __s86local0.abilityGroupID : "generals_abilities_desc_" + (argument1 ? "attack" : "defense") + "_" + __s86local0.abilityGroupID;
    var __s86local3 = (argument3 || __s86local2.getEffect(0).effectValue).getContextTextReplacements(__s86local1);
    if (__s86local0.triggerPerWave > 0) {
      __s86local3.push(__s86local0.triggerPerWave);
    }
    return Localize.text(__s86local1, __s86local3);
  }
  static getLocalizedGeneralAbilitySummary(argument0, argument1, argument2 = false) {
    var __s91local0 = "";
    if (!argument0) {
      return __s91local0;
    }
    for (var __s91local1 = argument0.selectedAbilities, __s91local2 = 0; __s91local2 < __s91local1.length; __s91local2++) {
      var __s91local3 = __s91local1[__s91local2][0];
      var __s91local4 = __s91local1[__s91local2][1];
      if ((!argument1 || !(argument0.generalXmlVO.attackSlots.indexOf(__s91local3) < 0)) && (!!argument1 || !(argument0.generalXmlVO.defenseSlots.indexOf(__s91local3) < 0))) {
        __s91local0 += this.getLocalizedCopyForAbility(__s91local4, argument1, GeneralsHelper.ABILITY_TEXT_DEFAULT) + "\n";
      }
    }
    return __s91local0;
  }
  static MAX_STAR_MCS = 5;
  static HUB_LIBRARIES = ["Characters", "Hub_Backgrounds1", "Hub_Backgrounds2", "Misc", "Rewards_Animation"];
  static ABILITY_TEXT_DEFAULT = 0;
  static ABILITY_TEXT_SHORT = 1;
  static ABILITY_TEXT_SHORT_VALUE = 2;
  static ABILITY_TEXT_SHORT_LEVELING = 3;
}
