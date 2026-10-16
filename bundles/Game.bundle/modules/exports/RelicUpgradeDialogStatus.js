Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_RelicGemVO = require("gge-module:export_RelicGemVO");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_CastleGGSVerticalAlign = require("gge-module:export_CastleGGSVerticalAlign");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function RelicUpgradeDialogStatus(__s3param0) {
    var __s3local0 = this;
    __s3local0._currentEquipType = RelicUpgradeDialogStatus.EQUIP_TYPE_EQUIPMENT;
    __s3local0._onEquipTypeChanged = new __dep_exact_5c7bc328fca9e4de.Signal();
    __s3local0._currentRelevantTypes = [];
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RelicUpgradeDialogStatus, __s1param0);
  RelicUpgradeDialogStatus.prototype.init = function () {
    for (var __s5local0 = 0; __s5local0 < RelicUpgradeDialogStatus.EQUIP_TYPES.length; ++__s5local0) {
      __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.getEquipTypeMcByIndex(__s5local0).mc_check);
    }
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_levelTitle, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_relicEnchanter_info_equipmentLevel"))).autoFitToBounds = true;
    this.disp.mc_levelIcon.toolTipText = "dialog_relicEnchanter_info_equipmentLevel_tooltip";
  };
  RelicUpgradeDialogStatus.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.setEquipType(RelicUpgradeDialogStatus.EQUIP_TYPE_EQUIPMENT, false);
  };
  RelicUpgradeDialogStatus.prototype.updateWithNewVO = function (__s11param0, __s11param1) {
    var __s11local0 = this._relicVO != __s11param0 || !this._relicVO && !__s11param0;
    this._relicVO = __s11param0;
    this._lordID = __s11param1;
    if (__s11local0) {
      this.updateEquipTypeSelectors();
    }
    this.updateLevel();
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.disp.btn_sell, !!__s11param0);
    this.disp.btn_sell.toolTipText = __s11param0 ? "selectEquipment" : "selectEquipmentSell";
  };
  RelicUpgradeDialogStatus.prototype.updateEquipTypeSelectors = function () {
    this._currentRelevantTypes = this.getRelevantEquipTypes();
    for (var __s14local0 = 0; __s14local0 < RelicUpgradeDialogStatus.EQUIP_TYPES.length; ++__s14local0) {
      var __s14local1 = __s14local0 < this._currentRelevantTypes.length ? this._currentRelevantTypes[__s14local0] : "";
      var __s14local2 = this.getEquipTypeMcByIndex(__s14local0);
      var __s14local3 = __dep_exact_f855840627e6e145.int(RelicUpgradeDialogStatus.EQUIP_TYPES.indexOf(__s14local1));
      __s14local2.visible = __s14local1 != "";
      __s14local2.mc_icon.gotoAndStop(__s14local3 + 1);
      if (__s14local3 >= 0) {
        __s14local2.mc_icon.toolTipText = RelicUpgradeDialogStatus.EQUIP_TYPE_TOOLTIPS[__s14local3][this._currentRelevantTypes.length > 1 ? 1 : 0];
      }
    }
    this.getEquipTypeMcByIndex(0).mc_check.visible = this._currentRelevantTypes.length > 1;
    this.setEquipType(this._currentRelevantTypes.length > 0 ? this._currentRelevantTypes[0] : RelicUpgradeDialogStatus.EQUIP_TYPE_EQUIPMENT, false);
    var __s14local4 = this._currentRelevantTypes.length > 1 ? "dialog_relicEnchanter_info_selectEquipment" : "dialog_relicEnchanter_info_upgradeSelected";
    var __s14local5 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_typeTitle, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(__s14local4)));
    __s14local5.verticalAlign = __dep_export_CastleGGSVerticalAlign.CastleGGSVerticalAlign.verticalAlignMiddleByLines();
    __s14local5.autoFitToBounds = true;
    __s14local5.visible = this._currentRelevantTypes.length > 0;
  };
  RelicUpgradeDialogStatus.prototype.updateLevel = function () {
    var __s19local0 = this.getLevel();
    if (__s19local0 < 0) {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_level, new __dep_exact_92d05af59ee2ff30.TextVO("-")).autoFitToBounds = true;
    } else {
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_level, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("value_proportional_value", [__s19local0, __dep_export_CastleModel.CastleModel.equipData.relicXml.maxRelicEnchanterLevel]))).autoFitToBounds = true;
    }
  };
  RelicUpgradeDialogStatus.prototype.setEquipType = function (__s23param0, __s23param1 = true) {
    this._currentEquipType = __s23param0;
    this.updateEquipTypeVisuals();
    this.updateLevel();
    if (__s23param1) {
      this._onEquipTypeChanged.dispatch();
    }
  };
  RelicUpgradeDialogStatus.prototype.updateEquipTypeVisuals = function () {
    for (var __s26local0 = 0; __s26local0 < RelicUpgradeDialogStatus.EQUIP_TYPES.length; ++__s26local0) {
      this.getEquipTypeMcByIndex(__s26local0).mc_check.gotoAndStop(this._currentEquipType == RelicUpgradeDialogStatus.EQUIP_TYPES[__s26local0] ? 2 : 1);
    }
  };
  RelicUpgradeDialogStatus.prototype.getRelevantEquipTypes = function () {
    var __s30local0 = [];
    if (this._relicVO && this._relicVO.vo) {
      if (this._relicVO.type == __dep_export_CollectableItemRelicVO.CollectableItemRelicVO.TYPE_EQUIPMENT) {
        __s30local0.push(RelicUpgradeDialogStatus.EQUIP_TYPE_EQUIPMENT);
        if (this._relicVO.vo.gemVO) {
          __s30local0.push(RelicUpgradeDialogStatus.EQUIP_TYPE_GEM);
        }
      } else if (this._relicVO.type == __dep_export_CollectableItemRelicVO.CollectableItemRelicVO.TYPE_GEM) {
        __s30local0.push(RelicUpgradeDialogStatus.EQUIP_TYPE_GEM);
      }
    }
    return __s30local0;
  };
  RelicUpgradeDialogStatus.prototype.getEquipTypeMcByIndex = function (__s36param0) {
    return this.disp.getChildByName("mc_typeSelection" + __s36param0);
  };
  RelicUpgradeDialogStatus.prototype.getEquipTypeMc = function (__s38param0) {
    return this.disp.getChildByName("mc_typeSelection" + RelicUpgradeDialogStatus.EQUIP_TYPES.indexOf(__s38param0));
  };
  RelicUpgradeDialogStatus.prototype.getLevel = function () {
    if (this._relicVO) {
      if (this._currentEquipType == RelicUpgradeDialogStatus.EQUIP_TYPE_GEM && this._relicVO.type == __dep_export_CollectableItemRelicVO.CollectableItemRelicVO.TYPE_EQUIPMENT && this._relicVO.vo.gemVO) {
        return __dep_exact_f855840627e6e145.int(this._relicVO.vo.gemVO.enchantmentLevel);
      } else {
        return this._relicVO.getEnchantmentLevel();
      }
    } else {
      return -1;
    }
  };
  RelicUpgradeDialogStatus.prototype.onClick = function (__s46param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s46param0.target)) {
      __s1param0.prototype.onClick.call(this, __s46param0);
      if (__s46param0.target == this.disp.btn_sell) {
        var __s46local0 = __dep_export_CastleEquipmentSellDialog.CastleEquipmentSellDialog;
        if (this._relicVO.vo instanceof __dep_export_BasicEquipmentVO.BasicEquipmentVO) {
          if (this._relicVO.vo.gemVO) {
            __s46local0 = __dep_export_CastleSellEmbeddedEquipmentDialog.CastleSellEmbeddedEquipmentDialog;
          }
        }
        __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDialogs(__s46local0, new __dep_export_CastleEquipmentSellDialogProperties.CastleEquipmentSellDialogProperties(this._relicVO.vo, this.bindFunction(this.confirmSellCallback), null));
      }
      for (var __s46local1 = 0; __s46local1 < RelicUpgradeDialogStatus.EQUIP_TYPES.length; ++__s46local1) {
        if (__s46param0.target == this.getEquipTypeMcByIndex(__s46local1).mc_check) {
          this.setEquipType(this._currentRelevantTypes[__s46local1]);
        }
      }
    }
  };
  RelicUpgradeDialogStatus.prototype.confirmSellCallback = function () {
    if (this._relicVO.vo instanceof __dep_export_RelicGemVO.RelicGemVO) {
      __dep_export_CastleModel.CastleModel.gemData.sell(this._relicVO.vo);
    } else {
      __dep_export_CastleModel.CastleModel.equipData.sell(this._relicVO.vo, this._lordID, -1);
    }
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetGemInventory.C2SGetGemInventory());
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetEquipmentInventory.C2SGetEquipmentInventory());
  };
  Object.defineProperty(RelicUpgradeDialogStatus.prototype, "currentEquipType", {
    get: function () {
      return this._currentEquipType;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(RelicUpgradeDialogStatus.prototype, "onEquipTypeChanged", {
    get: function () {
      return this._onEquipTypeChanged;
    },
    enumerable: true,
    configurable: true
  });
  RelicUpgradeDialogStatus.EQUIP_TYPE_EQUIPMENT = "equipment";
  RelicUpgradeDialogStatus.EQUIP_TYPE_GEM = "gem";
  RelicUpgradeDialogStatus.EQUIP_TYPES = [RelicUpgradeDialogStatus.EQUIP_TYPE_EQUIPMENT, RelicUpgradeDialogStatus.EQUIP_TYPE_GEM];
  RelicUpgradeDialogStatus.EQUIP_TYPE_TOOLTIPS = [["equipment", "dialog_relicEnchanter_info_selectEquipment_item_tooltip"], ["gem_name", "dialog_relicEnchanter_info_selectEquipment_gem_tooltip"]];
  return RelicUpgradeDialogStatus;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.RelicUpgradeDialogStatus = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
var __dep_export_CollectableItemRelicVO = require("gge-module:export_CollectableItemRelicVO");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleEquipmentSellDialog = require("gge-module:export_CastleEquipmentSellDialog");
var __dep_export_CastleEquipmentSellDialogProperties = require("gge-module:export_CastleEquipmentSellDialogProperties");
var __dep_export_C2SGetGemInventory = require("gge-module:export_C2SGetGemInventory");
var __dep_export_C2SGetEquipmentInventory = require("gge-module:export_C2SGetEquipmentInventory");
var __dep_export_BasicEquipmentVO = require("gge-module:export_BasicEquipmentVO");
var __dep_export_CastleSellEmbeddedEquipmentDialog = require("gge-module:export_CastleSellEmbeddedEquipmentDialog");
