Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleUIComponent = require("gge-module:export_CastleUIComponent");
var __dep_export_ComboboxItemRendererCastleList = require("gge-module:export_ComboboxItemRendererCastleList");
var __dep_export_ComboboxItemRendererVO = require("gge-module:export_ComboboxItemRendererVO");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function CastleSelectorComponent(__s3param0, __s3param1 = 7, __s3param2 = "", __s3param3 = 1, __s3param4 = 40, __s3param5 = 45, __s3param6 = null, __s3param7 = 15) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    if (__s3local0.castleSelectorComponent.castleListCombobox) {
      __s3local0._castleList = new __dep_export_ComboboxComponent.ComboboxComponent(__s3local0.castleSelectorComponent.castleListCombobox, __s3param2, __s3param3, __s3param4, __s3param5, -1, __s3param1, __s3param6 ? new __s3param6() : new __dep_export_ComboboxItemRendererCastleList.ComboboxItemRendererCastleList(), __s3param7, true, false, 3);
      __s3local0.castleSelectorComponent.addEventListener(__s0local0.CLICK, __s3local0.bindFunction(__s3local0.bringToFront), false, 0, true);
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSelectorComponent, __s1param0);
  CastleSelectorComponent.prototype.bringToFront = function (__s6param0) {
    if (this.castleSelectorComponent.parent) {
      this.castleSelectorComponent.parent.setChildIndex(this.castleSelectorComponent, this.castleSelectorComponent.parent.numChildren - 1);
    }
  };
  CastleSelectorComponent.prototype.initComponent = function (__s9param0, __s9param1, __s9param2 = null, __s9param3 = null, __s9param4 = -1, __s9param5 = null, __s9param6 = null, __s9param7 = null) {
    this.fillCastleList(__s9param1, __s9param3, __s9param4, __s9param2, __s9param5, __s9param6, __s9param7);
    this.setNameField();
    this.fillUserCastle();
    this.fillUserCrest(__s9param0);
  };
  CastleSelectorComponent.prototype.fillCastleList = function (__s11param0, __s11param1, __s11param2, __s11param3, __s11param4, __s11param5, __s11param6) {
    if (this._castleList) {
      var __s11local0;
      this._castleList.clearItems();
      this._wmoList = [];
      this._itemIsEnabled = [];
      this._itemTooltip = [];
      for (var __s11local1 = __s11param0.list, __s11local2 = 0; __s11local2 < __s11local1.length; __s11local2++) {
        var __s11local3 = __s11local1[__s11local2];
        if (!__s11local3.isUnderConquerControl && (__s11param2 == -1 || __s11local3.kingdomID == __s11param2) && (__s11param1 == null || !!(__s11param1.indexOf(__s11local3.kingdomID) < 0)) && (!__s11param6 || !!(__s11param6.indexOf(__s11local3.areaType) > -1))) {
          this._wmoList.push(__s11local3);
          (__s11local0 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __s11local3.areaNameString;
          __s11local0.data = __s11local3;
          if (__s11param4 != null) {
            this._itemIsEnabled.push(__s11param4[__s11local2]);
            __s11local0.enabled = __s11param4[__s11local2];
          }
          if (__s11param5 != null) {
            this._itemTooltip.push(__s11param5[__s11local2]);
            __s11local0.tooltipText = __s11param5[__s11local2];
          }
          this._castleList.addItem(__s11local0);
        }
      }
      var __s11local4 = __dep_exact_f855840627e6e145.int(__s11param3 ? this._wmoList.indexOf(__s11param3) : 0);
      if (__s11local4 < 0) {
        __s11local4 = 0;
      }
      this._castleList.initArrowGrayOut(this._castleList.numItems > 1);
      this._castleList.selectItemIndex(__s11local4);
      this._castleList.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.fillUserCastle));
    }
  };
  CastleSelectorComponent.prototype.setNameField = function () {
    if (this.castleSelectorComponent.mc_name) {
      if (this.castleSelectorComponent.mc_name.icastleName_txt) {
        this.castleSelectorComponent.mc_name.icastleName_txt.textContentVO.stringValue = this.selectedCastleVO.areaNameString;
      } else {
        this.castleSelectorComponent.mc_name.icastleName_txt = __dep_export_CastleUIComponent.CastleUIComponent.textFieldManager.registerTextField(this.castleSelectorComponent.mc_name.castleName_txt, new __dep_exact_92d05af59ee2ff30.TextVO(this.selectedCastleVO.areaNameString));
      }
      this.castleSelectorComponent.mc_name.mc_dove.visible = false;
      this.castleSelectorComponent.mc_name.mc_rank.visible = false;
      if (this.castleSelectorComponent.mc_name.mc_searchAlliance) {
        this.castleSelectorComponent.mc_name.mc_searchAlliance.visible = false;
      }
    }
  };
  CastleSelectorComponent.prototype.fillUserCrest = function (__s26param0) {
    if (this.castleSelectorComponent.mc_crest0 && this.selectedCastleVO) {
      if (CastleSelectorComponent.isFactionArea(this.selectedCastleVO.areaType)) {
        __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.castleSelectorComponent.mc_crest0, __dep_export_CrestHelper.CrestHelper.getPlayerOrFactionCrest(__s26param0));
      } else {
        __dep_export_CrestHelper.CrestHelper.setCrestGraphics(this.castleSelectorComponent.mc_crest0, __s26param0.crest);
      }
    }
  };
  CastleSelectorComponent.prototype.changeSelectedCastle = function (__s31param0) {
    var __s31local0 = __dep_exact_f855840627e6e145.int(this.getCastleIndex(__s31param0));
    if (__s31local0 < 0) {
      __s31local0 = 0;
    }
    this.castleList.selectItemIndex(__s31local0);
  };
  CastleSelectorComponent.prototype.fillUserCastle = function (__s34param0 = null) {
    if (this.castleSelectorComponent.mc_castle0) {
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.castleSelectorComponent.mc_castle0);
      var __s34local0 = __dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(this.selectedCastleVO, new __s0local1(75, 60), true, false, true, "panel_action_jumpTo");
      if (__s34local0) {
        this.castleSelectorComponent.mc_castle0.addChild(__s34local0);
      }
    }
  };
  CastleSelectorComponent.isFactionArea = function (__s38param0) {
    switch (__s38param0) {
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_CAMP:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_CAPITAL:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_TOWER:
      case __dep_exact_26a421b704832cff.WorldConst.AREA_TYPE_FACTION_VILLAGE:
        return true;
      default:
        return false;
    }
  };
  CastleSelectorComponent.prototype.dispose = function () {
    if (this._castleList) {
      this._castleList.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.fillUserCastle));
    }
  };
  Object.defineProperty(CastleSelectorComponent.prototype, "selectedCastleVO", {
    get: function () {
      if (this._castleList) {
        return this._castleList.selectedData;
      } else {
        return this._wmoList[0];
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSelectorComponent.prototype, "castleSelectorComponent", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSelectorComponent.prototype, "castleList", {
    get: function () {
      return this._castleList;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSelectorComponent.prototype, "selectedIndex", {
    get: function () {
      return this._castleList.selectedId;
    },
    enumerable: true,
    configurable: true
  });
  CastleSelectorComponent.prototype.getCastleByKingdom = function (__s54param0) {
    for (var __s54local0 = 0; __s54local0 < this._wmoList.length; __s54local0++) {
      if (this._wmoList[__s54local0].kingdomID == __s54param0) {
        return this._wmoList[__s54local0];
      }
    }
    return null;
  };
  CastleSelectorComponent.prototype.getCastleIndex = function (__s59param0) {
    for (var __s59local0 = 0; __s59local0 < this._wmoList.length; __s59local0++) {
      if (this._wmoList[__s59local0].objectId == __s59param0.objectId) {
        return __s59local0;
      }
    }
    return -1;
  };
  CastleSelectorComponent.prototype.castleIsEnabled = function (__s64param0) {
    var __s64local0 = __dep_exact_f855840627e6e145.int(this.getCastleIndex(__s64param0));
    return __s64local0 >= 0 && !!this._itemIsEnabled[__s64local0];
  };
  return CastleSelectorComponent;
}(__dep_export_CastleUIComponent.CastleUIComponent);
exports.CastleSelectorComponent = __s0local2;
var __dep_export_CrestHelper = require("gge-module:export_CrestHelper");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_ComboboxComponent = require("gge-module:export_ComboboxComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
