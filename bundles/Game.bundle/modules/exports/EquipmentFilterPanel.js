Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function EquipmentFilterPanel(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param1) || this;
    __dep_export_ButtonHelper.ButtonHelper.initCheckBoxes([__s3local0._disp.cbx_unique, __s3local0._disp.cbx_relic, __s3local0._disp.cbx_legendary, __s3local0._disp.cbx_epic, __s3local0._disp.cbx_rare, __s3local0._disp.cbx_common]);
    __s3local0.cbx_legendary = __dep_export_ButtonHelper.ButtonHelper.getBasicButton(__s3local0._disp.cbx_legendary);
    __s3local0.cbx_epic = __dep_export_ButtonHelper.ButtonHelper.getBasicButton(__s3local0._disp.cbx_epic);
    __s3local0.cbx_rare = __dep_export_ButtonHelper.ButtonHelper.getBasicButton(__s3local0._disp.cbx_rare);
    __s3local0.cbx_common = __dep_export_ButtonHelper.ButtonHelper.getBasicButton(__s3local0._disp.cbx_common);
    __s3local0.cbx_unique = __dep_export_ButtonHelper.ButtonHelper.getBasicButton(__s3local0._disp.cbx_unique);
    __s3local0.cbx_relic = __dep_export_ButtonHelper.ButtonHelper.getBasicButton(__s3local0._disp.cbx_relic);
    __s3local0._disp.cbx_relic.toolTipText = "equipment_rarity_relic";
    __s3local0._disp.cbx_unique.toolTipText = "equipment_rarity_unique";
    __s3local0._disp.cbx_legendary.toolTipText = "equipment_rarity_legendary";
    __s3local0._disp.cbx_epic.toolTipText = "equipment_rarity_epic";
    __s3local0._disp.cbx_rare.toolTipText = "equipment_rarity_rare";
    __s3local0._disp.cbx_common.toolTipText = "equipment_rarity_common";
    __s3local0.reset();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(EquipmentFilterPanel, __s1param0);
  EquipmentFilterPanel.prototype.setButtonWordID = function () {
    return "eq";
  };
  EquipmentFilterPanel.prototype.filter = function (__s7param0) {
    var __s7local0 = [];
    for (var __s7local1 = 0; __s7local1 < __s7param0.length; __s7local1++) {
      if (__s7param0[__s7local1] && (!this.cbx_favorite.isSelected || this.checkForFavorite(__s7param0[__s7local1]))) {
        if (this.cbx_set.isSelected) {
          if (!this.checkForSetID(__s7param0[__s7local1], this._selectedLord)) {
            continue;
          }
        } else {
          if (!this.eqFitsRareness(__s7param0[__s7local1])) {
            continue;
          }
          if (this.searchString != "" && !this.searchForNameString(__s7param0[__s7local1])) {
            continue;
          }
        }
        __s7local0.push(__s7param0[__s7local1]);
      }
    }
    return __s7local0;
  };
  EquipmentFilterPanel.prototype.eqFitsRareness = function (__s17param0) {
    return !!this.cbx_common.isSelected && (__s17param0.rareID == __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_COMMON || __s17param0.rareID == __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_COMMON) || !!this.cbx_rare.isSelected && (__s17param0.rareID == __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_RARE || __s17param0.rareID == __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_RARE) || !!this.cbx_epic.isSelected && (__s17param0.rareID == __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_EPIC || __s17param0.rareID == __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_EPIC) || !!this.cbx_legendary.isSelected && (__s17param0.rareID == __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_LEGENDARY || __s17param0.rareID == __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_LEGENDARY) || !!this.cbx_unique.isSelected && (__s17param0.rareID == __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_UNIQUE || __s17param0.rareID == __dep_exact_26a421b704832cff.EquipmentConst.RARENESS_HERO_UNIQUE) || !!this.cbx_relic.isSelected && !!__dep_exact_81dacdf05bd32292.instanceOfClass(__s17param0, "RelicEquipmentVO");
  };
  EquipmentFilterPanel.prototype.searchForNameString = function (__s19param0) {
    if (__s19param0.nameString.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) {
      return true;
    }
    if (__s19param0.extraText.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) {
      return true;
    }
    if (__s19param0.typeDescriptionText.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) {
      return true;
    }
    if (__s19param0.bonusDescriptionText.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) {
      return true;
    }
    if (__s19param0.setVO) {
      if (__s19param0.setVO.name.toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) {
        return true;
      }
      if (__s19param0.setVO.getSetBonusText().toLowerCase().indexOf(this.searchString.toLowerCase()) > -1) {
        return true;
      }
    }
    return false;
  };
  EquipmentFilterPanel.prototype.checkForFavorite = function (__s28param0) {
    return !!__s28param0.isFavoriteSaved;
  };
  EquipmentFilterPanel.prototype.checkForSetID = function (__s30param0, __s30param1) {
    if (!this._selectedLord) {
      return false;
    }
    var __s30local0 = __dep_exact_f855840627e6e145.int(__s30param0.setID);
    var __s30local1 = __dep_exact_f855840627e6e145.int(__s30param0.gemVO ? __s30param0.gemVO.setID : -1);
    var __s30local2 = 0;
    var __s30local3 = 0;
    for (var __s30local4 in __s30param1.equipmentSlots) {
      var __s30local5 = __s30param1.equipmentSlots[__s30local4];
      if (__s30local5 !== undefined && __s30local5.equipmentVO) {
        __s30local2 = __dep_exact_f855840627e6e145.int(__s30local5.equipmentVO.setID);
        __s30local3 = __dep_exact_f855840627e6e145.int(__s30local5.equipmentVO.gemVO ? __s30local5.equipmentVO.gemVO.setID : -1);
        if (__s30local0 > 0 && __s30local0 == __s30local2) {
          return true;
        }
        if (__s30local1 > 0 && __s30local1 == __s30local3) {
          return true;
        }
      }
    }
    return false;
  };
  EquipmentFilterPanel.prototype.onClick = function (__s38param0) {
    __s1param0.prototype.onClick.call(this, __s38param0);
    switch (__s38param0.target) {
      case this._disp.cbx_unique:
        this.toggleCheckbox(this.cbx_unique);
        break;
      case this._disp.cbx_relic:
        this.toggleCheckbox(this.cbx_relic);
        break;
      case this._disp.cbx_legendary:
        this.toggleCheckbox(this.cbx_legendary);
        break;
      case this._disp.cbx_epic:
        this.toggleCheckbox(this.cbx_epic);
        break;
      case this._disp.cbx_rare:
        this.toggleCheckbox(this.cbx_rare);
        break;
      case this._disp.cbx_common:
        this.toggleCheckbox(this.cbx_common);
    }
  };
  EquipmentFilterPanel.prototype.reset = function (__s41param0 = false) {
    __s1param0.prototype.reset.call(this, __s41param0);
    this.cbx_legendary.selected();
    this.cbx_epic.selected();
    this.cbx_rare.selected();
    this.cbx_common.selected();
    this.cbx_unique.selected();
    this.cbx_relic.selected();
    if (__s41param0) {
      this.changed.dispatch();
    }
  };
  return EquipmentFilterPanel;
}(require("gge-module:export_ABasicFilterPanel").ABasicFilterPanel);
exports.EquipmentFilterPanel = __s0local0;
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
