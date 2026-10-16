Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ConstructionItemToolTip() {
    this.maxIconWidth = NaN;
    this.maxIconHeight = NaN;
    this.buildingAreaSize = NaN;
  }
  ConstructionItemToolTip.prototype.init = function () {
    this._itxt_name = ConstructionItemToolTip.textFieldManager.registerTextField(this._disp.txt_name, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this._itxt_level = ConstructionItemToolTip.textFieldManager.registerTextField(this._disp.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this._itxt_info = ConstructionItemToolTip.textFieldManager.registerTextField(this._disp.txt_info, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_dash_split"));
    this._itxt_effect = ConstructionItemToolTip.textFieldManager.registerTextField(this._disp.txt_effect, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this._itxt_flavor = ConstructionItemToolTip.textFieldManager.registerTextField(this._disp.mc_flavor_area.txt_flavor, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    this._itxt_temporary = ConstructionItemToolTip.textFieldManager.registerTextField(this._disp.mc_temporary.txt_flavor, new __dep_exact_92d05af59ee2ff30_2.TextVO(""));
    this._itxt_limit = ConstructionItemToolTip.textFieldManager.registerTextField(this._disp.txt_limit, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(""));
    ConstructionItemToolTip.textFieldManager.registerTextField(this._disp.mc_building_area.txt_building, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("ci_tooltip_appearance"));
  };
  ConstructionItemToolTip.prototype.initToolTipByConstructionItem = function (__s7param0) {
    this.init();
    this.setNameText(__s7param0.nameTextId, __s7param0.rarityColor, __dep_export_CastleDataHolder.CastleDataHolder.instance.cheatShowConstructionItemIDs ? " ID:" + __s7param0.id : "");
    this.setLevelRarityText(__s7param0.rarityTextId, __s7param0.isAppearanceItem ? 0 : __s7param0.level);
    this.setInfoText(__s7param0);
    this.setAppearanceItemInfo(__s7param0);
    this.setLimitText(__s7param0);
    this.setTemporaryText(__s7param0);
    this._itxt_effect.visible = true;
    this._itxt_effect.textContentVO.stringValue = __s7param0.effectText;
    this._itxt_effect.height = this._itxt_effect.textHeight;
    this._disp.mc_bluePrintEffect.visible = false;
    this._disp.mc_bluePrintEffect2.visible = false;
    this._disp.mc_bluePrintEffect3.visible = false;
    this.resize();
  };
  ConstructionItemToolTip.prototype.initToolTipByBlueprint = function (__s9param0, __s9param1 = null) {
    var __s9local0 = __s9param0.recipes[0].constructionItem;
    var __s9local1 = __dep_export_ConstructionItemsHelper.ConstructionItemsHelper.getBestUnlockedCI(__s9param0);
    var __s9local2 = __s9param0.recipes[__s9param0.recipes.length - 1].constructionItem;
    this.init();
    this.setNameText(__s9param0.nameId, __s9local1 ? __s9local1.rarityColor : ConstructionItemToolTip.DEFAULT_COLOR, __s9param1);
    this.setLevelRarityText();
    this.setInfoText(__s9local0);
    this.setAppearanceItemInfo(__s9local0);
    this.setLimitText(__s9local0);
    this._itxt_effect.visible = false;
    this.setBluePrintEffectText(__s9local0, __s9local2);
    this.resize();
  };
  ConstructionItemToolTip.prototype.setNameText = function (__s11param0, __s11param1 = ConstructionItemToolTip.DEFAULT_COLOR, __s11param2 = null) {
    this._itxt_name.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.text(__s11param0) + (__s11param2 || "");
    this._itxt_name.color = __s11param1;
  };
  ConstructionItemToolTip.prototype.setLevelRarityText = function (__s13param0 = "", __s13param1 = 0) {
    this._itxt_level.visible = true;
    this._disp.line_level.visible = true;
    if (__s13param1 && __s13param0) {
      var __s13local0 = [__dep_exact_92d05af59ee2ff30.Localize.text("ci_level", [__s13param1]), __dep_exact_92d05af59ee2ff30.Localize.text(__s13param0)];
      this._itxt_level.textContentVO.textId = "value_dash_split";
      this._itxt_level.textContentVO.textReplacements = __s13local0;
    } else if (__s13param0) {
      this._itxt_level.textContentVO.textId = __s13param0;
    } else {
      this._itxt_level.visible = false;
      this._disp.line_level.visible = false;
    }
  };
  ConstructionItemToolTip.prototype.setInfoText = function (__s18param0) {
    var __s18local0 = [__s18param0.applicableBuildingsString, __dep_exact_92d05af59ee2ff30.Localize.text(__s18param0.slotNameTextId)];
    this._itxt_info.textContentVO.textReplacements = __s18local0;
  };
  ConstructionItemToolTip.prototype.setAppearanceItemInfo = function (__s20param0) {
    var __s20local0 = __s20param0.flavourTextId;
    this._disp.mc_flavor_area.visible = __s20local0 != "" && __s20local0 != null;
    if (__s20local0) {
      this._itxt_flavor.textContentVO.textId = __s20local0;
    }
    this._disp.mc_building_area.visible = __s20param0.isAppearanceItem;
    if (__s20param0.isAppearanceItem) {
      var __s20local1 = __s20param0.skinnedBuildingVO;
      if (__s20local1) {
        __dep_export_WodPicHelper.WodPicHelper.addWodPic(__s20local1, this._disp.mc_building_area.mc_building_container, this.maxIconWidth, this.maxIconHeight);
      } else {
        __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this._disp.mc_building_area.mc_building_container);
      }
    }
  };
  ConstructionItemToolTip.prototype.setLimitText = function (__s26param0) {
    var __s26local0 = __s26param0.areaLimit;
    if (__s26local0 == 1) {
      this._itxt_limit.textContentVO.textId = "ci_tooltip_maxLimit_singular";
    } else if (__s26local0 > 1) {
      this._itxt_limit.textContentVO.textId = "ci_tooltip_maxLimit_plural";
      this._itxt_limit.textContentVO.textReplacements = [__s26local0];
    }
    this._disp.line_limit.visible = __s26local0 > 0;
    this._itxt_limit.visible = __s26local0 > 0;
  };
  ConstructionItemToolTip.prototype.setBluePrintEffectText = function (__s30param0, __s30param1) {
    this._disp.mc_bluePrintEffect.visible = false;
    this._disp.mc_bluePrintEffect2.visible = false;
    this._disp.mc_bluePrintEffect3.visible = false;
    for (var __s30local0 = 0; __s30local0 < __s30param1.effectsAmount; __s30local0++) {
      var __s30local1 = __s30param1.getBluePrintEffectName(__s30local0);
      var __s30local2 = this._disp["mc_bluePrintEffect" + (__s30local0 > 0 ? __s30local0 : "")];
      __s30local2.visible = true;
      var __s30local3 = ConstructionItemToolTip.textFieldManager.registerTextField(__s30local2.txt_bp_effect, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s30local1));
      var __s30local4 = ConstructionItemToolTip.textFieldManager.registerTextField(__s30local2.txt_bp_first, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("ciblueprint_tooltip_firstLevel", [__s30param0.level]));
      var __s30local5 = ConstructionItemToolTip.textFieldManager.registerTextField(__s30local2.txt_bp_max, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("ciblueprint_tooltip_maxLevel", [__s30param1.level]));
      var __s30local6 = ConstructionItemToolTip.textFieldManager.registerTextField(__s30local2.txt_bp_firstValue, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s30param0.getBlueprintEffectValueText(__s30local0)));
      var __s30local7 = ConstructionItemToolTip.textFieldManager.registerTextField(__s30local2.txt_bp_maxValue, new __dep_exact_92d05af59ee2ff30_2.TextVO(__s30param1.getBlueprintEffectValueText(__s30local0)));
      __s30local4.color = __s30param0.rarityColor;
      __s30local5.color = __s30param1.rarityColor;
      __s30local6.color = __s30param0.rarityColor;
      __s30local7.color = __s30param1.rarityColor;
      var __s30local8 = !__dep_export_ClientConstUtils.ClientConstUtils.isTlfMode;
      var __s30local9 = __s30local8 ? __s30local4.x : __s30local4.x + __s30local4.width;
      __s30local6.x = __s30local9 + (__s30local8 ? __s30local4.textWidth : -__s30local4.textWidth - __s30local6.width);
      __s30local7.x = __s30local9 + (__s30local8 ? __s30local5.textWidth : -__s30local5.textWidth - __s30local7.width);
      __s30local4.y = __s30local3.textHeight - 3;
      __s30local6.y = __s30local3.textHeight - 3;
      __s30local5.y = __s30local4.y + __s30local4.textHeight - 3;
      __s30local7.y = __s30local6.y + __s30local6.textHeight - 3;
    }
  };
  ConstructionItemToolTip.prototype.setTemporaryText = function (__s34param0) {
    this._disp.mc_temporary.visible = __s34param0.isTemporary;
    if (__s34param0.isTemporary) {
      if (__s34param0.getRemainingTime() > 0) {
        this._itxt_temporary.textContentVO.stringValue = this.getDurationText(__s34param0.isExpiring() ? __s34param0.getRemainingTime() : __s34param0.duration);
      } else {
        this._itxt_temporary.textContentVO.stringValue = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_ci_tempCiExpired_header");
      }
    }
  };
  ConstructionItemToolTip.prototype.getDurationText = function (__s39param0) {
    var __s39local0 = Math.floor(__s39param0 / 60);
    var __s39local1 = Math.floor(__s39local0 / 60);
    var __s39local2 = Math.floor(__s39local1 / 24);
    if (__s39local2 > 0) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("countdown_time_equipment_days", [__s39local2, __s39local1 - __s39local2 * 24]);
    } else if (__s39local1 > 0) {
      return __dep_exact_92d05af59ee2ff30.Localize.text("countdown_time_equipment_hours", [__s39local1, __s39local0 - __s39local1 * 60]);
    } else {
      return __dep_exact_92d05af59ee2ff30.Localize.text("countdown_time_equipment_minutes", [__s39local0]);
    }
  };
  ConstructionItemToolTip.prototype.resize = function () {
    var __s44local0 = -ConstructionItemToolTip.BOX_MARGIN;
    if (this._disp.mc_flavor_area.visible) {
      __s44local0 = this._disp.mc_flavor_area.y = __s44local0 - this._itxt_flavor.textHeight;
    }
    if (this._disp.mc_building_area.visible) {
      __s44local0 = this._disp.mc_building_area.y = __s44local0 - this.buildingAreaSize;
    }
    if (this._itxt_limit.visible) {
      __s44local0 = this._itxt_limit.y = __s44local0 - this._itxt_limit.textHeight;
      __s44local0 = this._disp.line_limit.y = __s44local0;
    }
    if (this._disp.mc_bluePrintEffect.visible) {
      if (this._disp.mc_bluePrintEffect3.visible) {
        __s44local0 = this._disp.mc_bluePrintEffect3.y = __s44local0 - this._disp.mc_bluePrintEffect3.height;
        __s44local0 -= 2;
      }
      if (this._disp.mc_bluePrintEffect2.visible) {
        __s44local0 = this._disp.mc_bluePrintEffect2.y = __s44local0 - this._disp.mc_bluePrintEffect2.height;
        __s44local0 -= 2;
      }
      __s44local0 = this._disp.mc_bluePrintEffect.y = __s44local0 - this._disp.mc_bluePrintEffect.height;
    } else {
      __s44local0 = this._itxt_effect.y = __s44local0 - this._itxt_effect.textHeight;
    }
    __s44local0 = this._disp.line_effect.y = __s44local0;
    __s44local0 = this._itxt_info.y = __s44local0 - this._itxt_info.textHeight;
    __s44local0 = this._disp.line_info.y = __s44local0;
    if (this._disp.mc_temporary.visible) {
      __s44local0 = this._disp.mc_temporary.y = __s44local0 - this._itxt_temporary.textHeight;
    }
    if (this._itxt_level.visible) {
      __s44local0 = this._itxt_level.y = __s44local0 - this._itxt_level.textHeight;
      __s44local0 = this._disp.line_level.y = __s44local0;
    }
    __s44local0 = this._itxt_name.y = __s44local0 - this._itxt_name.textHeight;
    this._disp.bg.height = -__s44local0 + ConstructionItemToolTip.BOX_MARGIN;
  };
  Object.defineProperty(ConstructionItemToolTip.prototype, "disp", {
    get: function () {
      if (!this._disp) {
        this._disp = new Library.CastleInterfaceElements.ConstructionItem_ToolTip_Sep24();
        this.maxIconWidth = this.disp.mc_building_area.mc_building_container.width - ConstructionItemToolTip.PICTURE_MARGIN * 2;
        this.maxIconHeight = this.disp.mc_building_area.mc_building_container.height - ConstructionItemToolTip.PICTURE_MARGIN * 2;
        this.buildingAreaSize = this.disp.mc_building_area.height;
      }
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(ConstructionItemToolTip, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemToolTip.BOX_MARGIN = 4;
  ConstructionItemToolTip.PICTURE_MARGIN = 4;
  ConstructionItemToolTip.DEFAULT_COLOR = 12690820;
  return ConstructionItemToolTip;
}();
exports.ConstructionItemToolTip = __s0local0;
var __dep_export_ConstructionItemsHelper = require("gge-module:export_ConstructionItemsHelper");
var __dep_export_CastleDataHolder = require("gge-module:export_CastleDataHolder");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_ClientConstUtils = require("gge-module:export_ClientConstUtils");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
