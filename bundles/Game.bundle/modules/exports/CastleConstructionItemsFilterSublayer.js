Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleBuildingGroundComboboxItemRendererVO = require("gge-module:export_CastleBuildingGroundComboboxItemRendererVO");
var __dep_export_CastleBuildingTypeComboboxItemRendererVO = require("gge-module:export_CastleBuildingTypeComboboxItemRendererVO");
var __dep_export_ComboboxItemRendererBuildingGroundTypeSelector = require("gge-module:export_ComboboxItemRendererBuildingGroundTypeSelector");
var __dep_export_ComboboxItemRendererBuildingGroundTypeSelectorGray = require("gge-module:export_ComboboxItemRendererBuildingGroundTypeSelectorGray");
var __dep_export_ComboboxItemRendererVO = require("gge-module:export_ComboboxItemRendererVO");
var __s0local0 = function (__s1param0) {
  function CastleConstructionItemsFilterSublayer(__s3param0, __s3param1, __s3param2 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.interactionData = new __dep_export_ConstructionItemsInteractionData.ConstructionItemsInteractionData();
    try {
      var __s3local1;
      var __s3local2;
      __s3local0._filterBuildingGroundTypeSelector = __s3local0.comboBox(__s3param1.mc_categorySelector, __s3param2 ? __dep_export_ComboboxItemRendererBuildingGroundTypeSelectorGray.ComboboxItemRendererBuildingGroundTypeSelectorGray : __dep_export_ComboboxItemRendererBuildingGroundTypeSelector.ComboboxItemRendererBuildingGroundTypeSelector, __s3param2);
      __s3local0._filterBuildingTypeSelector = __s3local0.comboBox(__s3param1.mc_buildingSelector, __s3param2 ? __dep_export_ComboboxItemRendererBuildingTypeSelectorGray.ComboboxItemRendererBuildingTypeSelectorGray : __dep_export_ComboboxItemRendererBuildingTypeSelector.ComboboxItemRendererBuildingTypeSelector, __s3param2);
      for (var __s3local3 = 0, __s3local4 = __dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGORUND_TYPES; __s3local3 < __s3local4.length; __s3local3++) {
        var __s3local5 = __s3local4[__s3local3];
        if (__s3local5 !== undefined && __dep_export_CastleModel.CastleModel.constructionItemData.getCIEnabledBuildings(__s3local5)) {
          __s3local2 = __dep_export_ConstructionItemsHelper.ConstructionItemsHelper.getCategoryName(__s3local5);
          (__s3local1 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __s3local2;
          __s3local1.data = new __dep_export_CastleBuildingGroundComboboxItemRendererVO.CastleBuildingGroundComboboxItemRendererVO(__s3local5);
          __s3local0._filterBuildingGroundTypeSelector.addItem(__s3local1);
        }
      }
      __s3local0._filterBuildingGroundTypeSelector.selectItemIndex(0);
      __s3local0.setBuildingTypeFilterList(__dep_export_ClientConstCastle.ClientConstCastle.BUILDINGGROUND_TYPE_NONE);
    } catch (__s9local0) {
      __dep_exact_9e901e8e2483a22f_1.debug(__s9local0.stack);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleConstructionItemsFilterSublayer, __s1param0);
  CastleConstructionItemsFilterSublayer.prototype.comboBox = function (__s11param0, __s11param1, __s11param2 = false) {
    var __s11local0 = __dep_exact_f855840627e6e145.int(__s11param2 ? 2 : 1);
    var __s11local1 = new __dep_export_ComboboxComponent.ComboboxComponent(__s11param0, "", 1, 17, 20, -1, 17, new __s11param1(), 4, true, false, 3, "", 1);
    __s11local1.setTextfieldAutoFit(true);
    __s11param0.bg.gotoAndStop(__s11local0);
    return __s11local1;
  };
  CastleConstructionItemsFilterSublayer.prototype.setBuildingTypeFilterList = function (__s13param0) {
    var __s13local0;
    this._filterBuildingTypeSelector.clearItems();
    (__s13local0 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_ci_filter02_all");
    __s13local0.data = new __dep_export_CastleBuildingTypeComboboxItemRendererVO.CastleBuildingTypeComboboxItemRendererVO(null);
    this._filterBuildingTypeSelector.addItem(__s13local0);
    var __s13local1;
    var __s13local2 = __dep_export_CastleModel.CastleModel.constructionItemData.getCIEnabledBuildings(__s13param0);
    if (__s13local2 != null) {
      for (var __s13local3 = 0, __s13local4 = __s13local2; __s13local3 < __s13local4.length; __s13local3++) {
        var __s13local5 = __s13local4[__s13local3];
        if (__s13local5 !== undefined) {
          __s13local1 = __dep_exact_92d05af59ee2ff30.Localize.text(__s13local5.getNameString());
          (__s13local0 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __s13local1;
          __s13local0.data = new __dep_export_CastleBuildingTypeComboboxItemRendererVO.CastleBuildingTypeComboboxItemRendererVO(__s13local5);
          this._filterBuildingTypeSelector.addItem(__s13local0);
        }
      }
    }
    this._filterBuildingTypeSelector.selectItemIndex(0);
  };
  CastleConstructionItemsFilterSublayer.prototype.updateBuildingFilters = function () {
    this._filterBuildingGroundTypeSelector.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeBuildingListTypeFilter));
    this._filterBuildingTypeSelector.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeBuildingTypeFilter));
    if (this.interactionData.draggedItem) {
      if (!this.interactionData.draggedItem.constructionItemVO.applicableBuildings) {
        throw new Error("Construction Item ID: " + this.interactionData.draggedItem.constructionItemVO.id + " has no connected buildings");
      }
      var __s19local0 = this.interactionData.draggedItem.constructionItemVO.applicableBuildings[0];
      this.setBuildingFilters(false, __s19local0.buildingGroundType, __s19local0);
    } else {
      this.setBuildingFilters(true, this.interactionData.filterBuildingGroundType, this.interactionData.filterBuildingType);
    }
    this._filterBuildingGroundTypeSelector.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeBuildingListTypeFilter));
    this._filterBuildingTypeSelector.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeBuildingTypeFilter));
  };
  CastleConstructionItemsFilterSublayer.prototype.setBuildingFilters = function (__s24param0, __s24param1, __s24param2) {
    this._filterBuildingGroundTypeSelector.enabled = __s24param0;
    this._filterBuildingTypeSelector.enabled = __s24param0;
    if (this._filterBuildingGroundTypeSelector.selectedData.buildingGroundType != __s24param1) {
      this.setBuildingGroundFilter(__s24param1);
    }
    var __s24local0 = this._filterBuildingTypeSelector.selectedData.buildingType;
    if ((__s24local0 ? __s24local0.name : "") != (__s24param2 ? __s24param2.name : "")) {
      this.setBuildingTypeFilter(__s24param2);
    }
  };
  CastleConstructionItemsFilterSublayer.prototype.setBuildingGroundFilter = function (__s28param0) {
    for (var __s28local0 = 0; __s28local0 < this._filterBuildingGroundTypeSelector.itemData.length; __s28local0++) {
      if (this._filterBuildingGroundTypeSelector.itemData[__s28local0].data.buildingGroundType == __s28param0) {
        this._filterBuildingGroundTypeSelector.selectItemIndex(__s28local0);
        this.setBuildingTypeFilterList(__s28param0);
        break;
      }
    }
  };
  CastleConstructionItemsFilterSublayer.prototype.setBuildingTypeFilter = function (__s33param0) {
    for (var __s33local0 = 0; __s33local0 < this._filterBuildingTypeSelector.itemData.length; __s33local0++) {
      var __s33local1 = this._filterBuildingTypeSelector.itemData[__s33local0].data.buildingType;
      if ((__s33local1 ? __s33local1.name : "") == (__s33param0 ? __s33param0.name : "")) {
        this._filterBuildingTypeSelector.selectItemIndex(__s33local0);
        break;
      }
    }
  };
  CastleConstructionItemsFilterSublayer.prototype.show = function (__s38param0) {
    __s1param0.prototype.show.call(this, __s38param0);
    try {
      this._filterBuildingGroundTypeSelector.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeBuildingListTypeFilter));
      this._filterBuildingTypeSelector.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeBuildingTypeFilter));
    } catch (__s41local0) {
      __dep_exact_9e901e8e2483a22f_1.debug(__s41local0.stack);
    }
  };
  CastleConstructionItemsFilterSublayer.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    try {
      this._filterBuildingGroundTypeSelector.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeBuildingListTypeFilter));
      this._filterBuildingTypeSelector.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeBuildingTypeFilter));
    } catch (__s46local0) {
      __dep_exact_9e901e8e2483a22f_1.debug(__s46local0.stack);
    }
  };
  CastleConstructionItemsFilterSublayer.prototype.onChangeBuildingListTypeFilter = function (__s48param0) {
    var __s48local0 = this._filterBuildingGroundTypeSelector.selectedData.buildingGroundType;
    this._filterBuildingTypeSelector.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeBuildingTypeFilter));
    this.setBuildingTypeFilterList(__s48local0);
    this._filterBuildingTypeSelector.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onChangeBuildingTypeFilter));
    this.interactionData.setFilterBuildingGroundType(__s48local0);
  };
  CastleConstructionItemsFilterSublayer.prototype.onChangeBuildingTypeFilter = function (__s50param0) {
    var __s50local0 = this._filterBuildingTypeSelector.selectedData.buildingType;
    this.interactionData.setFilterBuildingType(__s50local0);
  };
  CastleConstructionItemsFilterSublayer.prototype.filterBuilding = function (__s52param0) {
    return !__s52param0.buildingState.isUnderInitialConstruction && (this.interactionData.filterBuildingGroundType == "" || this.interactionData.filterBuildingGroundType == __s52param0.buildingGroundType) && (this.interactionData.filterBuildingType == null || this.interactionData.filterBuildingType.name == __s52param0.name) && (!this.interactionData.filterExpiredOnly || this.interactionData.filterExpiredOnly && this.interactionData.hasBuildingExpired(__s52param0.objectId)) && __s52param0.hasConstructionItemSlots;
  };
  CastleConstructionItemsFilterSublayer.prototype.filterBuildings = function (__s54param0) {
    if (__s54param0 != null) {
      for (var __s54local0 = 0, __s54local1 = __s54param0; __s54local0 < __s54local1.length; __s54local0++) {
        var __s54local2 = __s54local1[__s54local0];
        if (__s54local2 !== undefined && this.filterBuilding(__s54local2)) {
          return true;
        }
      }
    }
    return false;
  };
  return CastleConstructionItemsFilterSublayer;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.CastleConstructionItemsFilterSublayer = __s0local0;
var __dep_export_ComboboxComponent = require("gge-module:export_ComboboxComponent");
var __dep_export_ComboboxItemRendererBuildingTypeSelector = require("gge-module:export_ComboboxItemRendererBuildingTypeSelector");
var __dep_export_ComboboxItemRendererBuildingTypeSelectorGray = require("gge-module:export_ComboboxItemRendererBuildingTypeSelectorGray");
var __dep_export_ConstructionItemsHelper = require("gge-module:export_ConstructionItemsHelper");
var __dep_export_ConstructionItemsInteractionData = require("gge-module:export_ConstructionItemsInteractionData");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
