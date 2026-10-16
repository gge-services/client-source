Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_C2SGetCastleProductionDataVO = require("gge-module:export_C2SGetCastleProductionDataVO");
var __dep_export_C2SGetDetailedCastleListVO = require("gge-module:export_C2SGetDetailedCastleListVO");
var __dep_export_CastleDetailedCastleListEvent = require("gge-module:export_CastleDetailedCastleListEvent");
var __dep_export_CastleUserDataEvent = require("gge-module:export_CastleUserDataEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ComboboxItemRendererRecruitList = require("gge-module:export_ComboboxItemRendererRecruitList");
var __dep_export_ComboboxItemRendererVO = require("gge-module:export_ComboboxItemRendererVO");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalSubLayerDialog = require("gge-module:export_CastleExternalSubLayerDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleRecruitDialog() {
    return __s1param0.call(this, CastleRecruitDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRecruitDialog, __s1param0);
  CastleRecruitDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this._castleList = new __dep_export_ComboboxComponent.ComboboxComponent(this.recruitDialog.mc_castleListCombobox, "", 1, 15, 15, -1, 0, new __dep_export_ComboboxItemRendererRecruitList.ComboboxItemRendererRecruitList(), 5, false, false, 3);
    this.stonewallBg = new __dep_export_CastleStonewallBackgroundComponent.CastleStonewallBackgroundComponent(this.recruitDialog.bg);
    this._subLayer = new Map();
    __dep_export_ButtonHelper.ButtonHelper.initTwoStateButtons([this.dialogDisp.btn_tab_auxiliaries, this.dialogDisp.btn_tab_units, this.dialogDisp.btn_tab_tools, this.dialogDisp.btn_tab_hospital, this.dialogDisp.btn_tab_inventory, this.dialogDisp.btn_tab_stronghold]);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.bg.btn_help]);
    this.recruitDialog.btn_tab_units.toolTipText = "dialog_recuit_units";
    this.recruitDialog.btn_tab_auxiliaries.toolTipText = "dialog_faction_auxiliaries_tooltip";
    this.recruitDialog.btn_tab_inventory.toolTipText = "dialog_recuit_inventory";
    this.recruitDialog.addChildAt(this.recruitDialog.mc_castleHolder, 5);
    this.stonewallBg.setTitleText("");
  };
  CastleRecruitDialog.prototype.initTabButtons = function () {
    var __s7local0 = __dep_export_CastleModel.CastleModel.areaData.activeArea && __dep_export_CastleModel.CastleModel.areaData.activeArea.isFactionCamp;
    this.recruitDialog.btn_tab_auxiliaries.visible = __s7local0;
    this.recruitDialog.btn_tab_units.visible = this.recruitDialog.btn_tab_tools.visible = this.recruitDialog.btn_tab_stronghold.visible = !__s7local0;
  };
  CastleRecruitDialog.prototype.getSublayer = function (__s9param0) {
    if (this._subLayer.get(__s9param0) == null) {
      this._subLayer.set(__s9param0, this.createSublayer(__s9param0));
    }
    return this._subLayer.get(__s9param0);
  };
  CastleRecruitDialog.prototype.createSublayer = function (__s12param0) {
    var __s12local0;
    var __s12local1;
    var __s12local2;
    var __s12local3;
    switch (__s12param0) {
      case __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS:
      case __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES:
        __s12local1 = __dep_export_CastleRecruitDialogUnits.CastleRecruitDialogUnits;
        __s12local2 = "CastleRecruit_units_R";
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS:
        __s12local0 = this.getSublayer(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS);
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_INVENTORY:
        __s12local1 = __dep_export_CastleRecruitDialogInventory.CastleRecruitDialogInventory;
        __s12local2 = "CastleRecruit_inventory_R";
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_STRONGHOLD:
        __s12local1 = __dep_export_CastleRecruitDialogStronghold.CastleRecruitDialogStronghold;
        __s12local2 = "CastleRecruit_stronghold_R";
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HOSPITAL:
        __s12local1 = __dep_export_CastleRecruitDialogHospital.CastleRecruitDialogHospital;
        __s12local2 = "CastleRecruit_hospital_R";
    }
    if (!__s12local0) {
      __s12local3 = new (__dep_exact_81dacdf05bd32292_2.getDefinitionByName(__s12local2))();
      this.recruitDialog.addChild(__s12local3);
      __s12local0 = new __s12local1(__s12local3);
    }
    return __s12local0;
  };
  Object.defineProperty(CastleRecruitDialog.prototype, "subLayer", {
    get: function () {
      return this._subLayer;
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitDialog.prototype.applyPropertiesLoaded = function (__s18param0 = null) {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.recruitDialog.bg.btn_help, this.isOutOfTutorial());
    this.enableButtons_0();
    this.stonewallBg.update();
  };
  CastleRecruitDialog.prototype.onCastleListUpdate = function (__s20param0) {
    __dep_exact_9e901e8e2483a22f_1.BasicController.getInstance().sendCommandVOAndWait(new __dep_export_C2SGetDetailedCastleListVO.C2SGetDetailedCastleListVO(0));
  };
  CastleRecruitDialog.prototype.onDetailedCastleUpdate = function (__s22param0) {
    if (this.isVisible) {
      this.updateCastleList();
    }
  };
  CastleRecruitDialog.prototype.showLoaded = function (__s25param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s25param0);
    this.initTabButtons();
    var __s25local0 = [];
    __dep_exact_9e901e8e2483a22f_1.BasicController.getInstance().sendCommandVOAndWait(new __dep_export_C2SGetDetailedCastleListVO.C2SGetDetailedCastleListVO(0));
    __dep_exact_9e901e8e2483a22f_1.BasicController.getInstance().sendCommandVOAndWait(new __dep_export_C2SGetCastleProductionDataVO.C2SGetCastleProductionDataVO());
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onCastleDataUpdated));
    this.controller.addEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleUpdate));
    this.controller.addEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onCastleListUpdate));
    this._castleList.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.showSelectedCastleIcon));
    this._castleList.userClickItemSignal.add(this.bindFunction(this.switchCastle));
    this._castleList.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXSELECT, this.bindFunction(this.onComboBoxSelected));
    var __s25local1 = this.getSublayerCategory();
    __s25local0.push(__s25local1);
    var __s25local2 = this.getSublayerFilter();
    __s25local0.push(__s25local2);
    this.changeCategoryWithParams(__s25local1, __s25local0);
    this.setTooltips();
    this.updateCastleList();
  };
  CastleRecruitDialog.prototype.setStrongholdTabTooltip = function () {
    var __s27local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_Iso.Iso.data.objects.provider.getObjectByType(__dep_export_IsoObjectEnum.IsoObjectEnum.STRONGHOLD), "ABasicBuildingVO");
    var __s27local1 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__dep_export_ClientConstCastle.ClientConstCastle.STRONGHOLD_BUILDING_WOD);
    if (__s27local0 && __s27local0.buildingState.isFunctionally) {
      this.recruitDialog.btn_tab_stronghold.toolTipText = "stronghold_name";
    } else if (__s27local1.isAvailableByLevelAndEffect) {
      this.recruitDialog.btn_tab_stronghold.toolTipText = "stronghold_teaser_construct";
    } else {
      this.recruitDialog.btn_tab_stronghold.toolTipText = {
        t: "stronghold_teaser_levelRequired",
        p: [__s27local1.requiredLevel]
      };
    }
  };
  CastleRecruitDialog.prototype.setTooltips = function () {
    this.setStrongholdTabTooltip();
    this.setHospitalTabTooltip();
    this.setToolTabTooltip();
  };
  CastleRecruitDialog.prototype.setToolTabTooltip = function () {
    if (this.recruitDialog.btn_tab_tools.enabled) {
      this.recruitDialog.btn_tab_tools.toolTipText = "dialog_recuit_tools";
    } else {
      this.recruitDialog.btn_tab_tools.toolTipText = "dialog_workshop_tab_tooltip_notBuilt";
    }
  };
  CastleRecruitDialog.prototype.setHospitalTabTooltip = function () {
    var __s38local0 = __dep_export_CastleModel.CastleModel.areaData.activeArea.isFactionCamp ? __dep_export_IsoObjectEnum.IsoObjectEnum.FACTION_HOSPITAL : __dep_export_IsoObjectEnum.IsoObjectEnum.HOSPITAL;
    var __s38local1 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_Iso.Iso.data.objects.provider.getObjectByType(__s38local0), "ABasicBuildingVO");
    var __s38local2 = __dep_export_CastleModel.CastleModel.wodData.voSubList(__dep_export_CastleWodData.CastleWodData.TYPE_BUILDING).get(__dep_export_ClientConstCastle.ClientConstCastle.HOSPITAL_BUILDING_WOD);
    if (__s38local1 && __s38local1.buildingState.isFunctionally) {
      this.recruitDialog.btn_tab_hospital.toolTipText = "hospital_name";
    } else if (__s38local2.isAvailableByLevelAndEffect) {
      this.recruitDialog.btn_tab_hospital.toolTipText = "dialog_hospital_tab_tooltip_notBuilt";
    } else {
      this.recruitDialog.btn_tab_hospital.toolTipText = {
        t: "dialog_hospital_tab_tooltip_lowLevel",
        p: [__s38local2.requiredLevel]
      };
    }
  };
  CastleRecruitDialog.prototype.onComboBoxSelected = function (__s43param0) {
    var __s43local0 = this.recruitDialog.mc_castleListCombobox;
    switch (__s43param0.state) {
      case 0:
        this.recruitDialog.addChildAt(__s43local0, 6);
        break;
      case 1:
        this.recruitDialog.addChild(__s43local0);
    }
  };
  CastleRecruitDialog.prototype.onCastleDataUpdated = function (__s46param0) {
    if (__dep_export_CastleModel.CastleModel.areaData.activeOwnerInfo.playerID == __dep_export_CastleModel.CastleModel.userData.playerID) {
      var __s46local0 = __dep_export_CastleModel.CastleModel.areaData.activeArea.isFactionCamp;
      var __s46local1 = __s46local0 ? __dep_export_Iso.Iso.data.objects.provider.hasFunctionalBuildingByType(__dep_export_IsoObjectEnum.IsoObjectEnum.FACTION_BARRACKS) : __dep_export_Iso.Iso.data.objects.provider.hasFunctionalBuildingByType(__dep_export_IsoObjectEnum.IsoObjectEnum.BARRACKS);
      var __s46local2 = __dep_export_Iso.Iso.data.objects.provider.hasFunctionalBuildingByType(__dep_export_IsoObjectEnum.IsoObjectEnum.WORKSHOP);
      var __s46local3 = __dep_export_Iso.Iso.data.objects.provider.hasFunctionalBuildingByType(__dep_export_IsoObjectEnum.IsoObjectEnum.D_WORKSHOP);
      var __s46local4 = __dep_export_Iso.Iso.data.objects.provider.hasFunctionalBuildingByType(__dep_export_IsoObjectEnum.IsoObjectEnum.STRONGHOLD);
      var __s46local5 = this._currentCategory;
      var __s46local6 = null;
      this.initTabButtons();
      this.enableButtons_0();
      this.setTooltips();
      switch (this._currentCategory) {
        case __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS:
        case __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES:
          __s46local5 = __s46local1 ? __s46local0 ? __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES : __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS : __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_INVENTORY;
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS:
          if (__s46local3 || __s46local2) {
            if ((__s46local6 = this.getSublayer(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS).currentFilter) != __dep_export_CastleRecruitDialogUnits.CastleRecruitDialogUnits.FILTER_TOOLS_ATTACK || __s46local2) {
              if (__s46local6 == __dep_export_CastleRecruitDialogUnits.CastleRecruitDialogUnits.FILTER_TOOLS_DEFENCE && !__s46local3) {
                __s46local6 = __dep_export_CastleRecruitDialogUnits.CastleRecruitDialogUnits.FILTER_TOOLS_ATTACK;
              }
            } else {
              __s46local6 = __dep_export_CastleRecruitDialogUnits.CastleRecruitDialogUnits.FILTER_TOOLS_DEFENCE;
            }
          } else {
            __s46local5 = __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_INVENTORY;
          }
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_STRONGHOLD:
          if (__s46local4) {
            __s46local6 = this.getSublayer(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_STRONGHOLD).currentFilter;
          } else {
            __s46local5 = __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_INVENTORY;
          }
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_INVENTORY:
          __s46local6 = this.getSublayer(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_INVENTORY).currentFilter;
          break;
        case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HOSPITAL:
          __s46local6 = this.getSublayer(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HOSPITAL).currentFilter;
      }
      this.changeCategoryWithParams(__s46local5, [__s46local5, __s46local6]);
    } else {
      this.hide();
    }
  };
  CastleRecruitDialog.prototype.switchCastle = function (__s58param0 = false) {
    this._castleList.hideItems();
    var __s58local0 = this._castleList.selectedData;
    if (__s58param0) {
      if (__dep_export_FlashBlockHelper.FlashBlockHelper.checkFlashBlock(__s58local0.spaceID)) {
        this._castleList.selectItemIndex(this._castleList.previousSelectedItem);
      } else {
        __dep_exact_9e901e8e2483a22f_3.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.JOIN_AREA_AND_SAVE_POSITION_COMMAND, __s58local0);
        this.layoutManager.dialogCastleSwitch = true;
      }
    }
  };
  CastleRecruitDialog.prototype.showSelectedCastleIcon = function (__s63param0 = null) {
    var __s63local0 = __dep_export_CastleModel.CastleModel.userData.getOwnCastle(this._castleList.selectedData.objectId, this._castleList.selectedData.kingdomID);
    var __s63local1 = new __s0local0(90, 80);
    __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(this.recruitDialog.mc_castleHolder);
    this.recruitDialog.mc_castleHolder.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s63local0, __s63local1, true, false, false));
  };
  CastleRecruitDialog.prototype.updateCastleList = function () {
    this._castleList.clearItems();
    var __s65local0;
    var __s65local1 = 0;
    var __s65local2 = 0;
    switch (this._currentCategory) {
      case __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS:
      case __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES:
        __s65local0 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getCastlesWithBarracksList();
        __s65local0 = this.filterFactionBuildingsByLocationAndState(__s65local0);
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS:
        __s65local0 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getCastlesWithWorkshopsList();
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_STRONGHOLD:
        this.hideCastleSelector();
        break;
      case __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HOSPITAL:
        __s65local0 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getCastlesWithHospitalsList();
        __s65local0 = this.filterFactionBuildingsByLocationAndState(__s65local0);
        break;
      default:
        __s65local0 = __dep_export_CastleModel.CastleModel.userCastleListDetailed.getAllCastlesList();
    }
    var __s65local3 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO();
    if (__s65local0 != null) {
      for (var __s65local4 = 0, __s65local5 = __s65local0; __s65local4 < __s65local5.length; __s65local4++) {
        var __s65local6 = __s65local5[__s65local4];
        if (__s65local6 !== undefined) {
          var __s65local7 = __dep_export_CastleModel.CastleModel.userData.castleList.getCastleVOByID(__s65local6.areaID, __s65local6.kingdomID);
          if (__s65local7 && __s65local7.ownerInfo.playerID == __dep_export_CastleModel.CastleModel.userData.playerID) {
            (__s65local3 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __s65local7.areaNameString;
            __s65local3.data = __s65local7;
            this._castleList.addItem(__s65local3);
            if (__dep_export_CastleModel.CastleModel.areaData.activeArea && __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo) {
              var __s65local8 = __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.objectId;
              var __s65local9 = __dep_export_CastleModel.CastleModel.areaData.activeAreaInfo.kingdomID;
              if (__s65local8 == __s65local7.objectId && __s65local9 == __s65local7.kingdomID) {
                __s65local1 = __s65local2;
              }
            }
            __s65local2++;
          }
        }
      }
    }
    this._castleList.selectItemIndex(__s65local1);
  };
  CastleRecruitDialog.prototype.filterFactionBuildingsByLocationAndState = function (__s75param0) {
    var __s75local0;
    var __s75local1 = [];
    if (__s75param0 != null) {
      for (var __s75local2 = 0, __s75local3 = __s75param0; __s75local2 < __s75local3.length; __s75local2++) {
        var __s75local4 = __s75local3[__s75local2];
        if (__s75local4 !== undefined) {
          if (__s75local4.kingdomID == __dep_exact_26a421b704832cff.FactionConst.KINGDOM_ID) {
            if ((__s75local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.userData.getOwnCastle(__s75local4.areaID, __s75local4.kingdomID), "FactionInteractiveMapobjectVO")) && !__s75local0.isDestroyed) {
              __s75local1.push(__s75local4);
            }
          } else {
            __s75local1.push(__s75local4);
          }
        }
      }
    }
    return __s75local1;
  };
  CastleRecruitDialog.prototype.getSublayerCategory = function () {
    if (this.recruitDialogProperties.defaultCategory == "") {
      return __dep_export_CastleModel.CastleModel.militaryData.getFirstAvalibleUnitCategory();
    } else {
      return this.recruitDialogProperties.defaultCategory;
    }
  };
  CastleRecruitDialog.prototype.getSublayerFilter = function () {
    return this.recruitDialogProperties.defaultFilter;
  };
  CastleRecruitDialog.prototype.hideLoaded = function (__s90param0 = null) {
    __dep_exact_9e901e8e2483a22f_2.BasicDialogHandler.getInstance().blockDialogs &&= false;
    if (this._castleList) {
      this._castleList.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.showSelectedCastleIcon));
      this._castleList.userClickItemSignal.remove(this.bindFunction(this.switchCastle));
      this._castleList.disp.removeEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXSELECT, this.bindFunction(this.onComboBoxSelected));
    }
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_INFO_VALUES_CHANGED, this.bindFunction(this.onCastleDataUpdated));
    this.controller.removeEventListener(__dep_export_CastleDetailedCastleListEvent.CastleDetailedCastleListEvent.DETAILED_CASTLELISTDATA_UPDATED, this.bindFunction(this.onDetailedCastleUpdate));
    this.controller.removeEventListener(__dep_export_CastleUserDataEvent.CastleUserDataEvent.CHANGE_CASTLELIST, this.bindFunction(this.onCastleListUpdate));
    this.destroySublayers();
    __s1param0.prototype.hideLoaded.call(this, __s90param0);
  };
  CastleRecruitDialog.prototype.destroySublayers = function () {
    if (this._subLayer != null) {
      for (var __s93local0 = 0, __s93local1 = Array.from(this._subLayer.values()); __s93local0 < __s93local1.length; __s93local0++) {
        var __s93local2 = __s93local1[__s93local0];
        var __s93local3 = __dep_exact_81dacdf05bd32292.castAs(__s93local2, "CastleDialogSubLayer");
        if (__s93local3 !== undefined) {
          __s93local3.hide();
          __s93local3.destroy();
        }
      }
    }
    this._currentSublayer = null;
  };
  CastleRecruitDialog.prototype.enableButtons_0 = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.recruitDialog.btn_close, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.recruitDialog.btn_tab_stronghold, this.isOutOfTutorial() && __dep_export_Iso.Iso.data && __dep_export_Iso.Iso.data.objects.provider.hasFunctionalBuildingByType(__dep_export_IsoObjectEnum.IsoObjectEnum.STRONGHOLD));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.recruitDialog.btn_tab_inventory, this.isOutOfTutorial());
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.recruitDialog.btn_tab_tools, this.isOutOfTutorial() && __dep_export_CastleModel.CastleModel.militaryData.isUnitCategoryAllowed(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.recruitDialog.btn_tab_units, this.isOutOfTutorial() && __dep_export_CastleModel.CastleModel.militaryData.isUnitCategoryAllowed(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.recruitDialog.btn_tab_auxiliaries, this.isOutOfTutorial() && __dep_export_CastleModel.CastleModel.militaryData.isUnitCategoryAllowed(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES));
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.recruitDialog.btn_tab_hospital, this.isOutOfTutorial() && __dep_export_Iso.Iso.data && (__dep_export_Iso.Iso.data.objects.provider.hasFunctionalBuildingByType(__dep_export_IsoObjectEnum.IsoObjectEnum.HOSPITAL) || __dep_export_Iso.Iso.data.objects.provider.hasFunctionalBuildingByType(__dep_export_IsoObjectEnum.IsoObjectEnum.FACTION_HOSPITAL)));
  };
  CastleRecruitDialog.prototype.onClick = function (__s101param0) {
    if (!this.isLocked && __dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s101param0.target)) {
      __s1param0.prototype.onClick.call(this, __s101param0);
      switch (__s101param0.target) {
        case this.recruitDialog.btn_close:
          this.hide();
          break;
        case this.recruitDialog.bg.btn_help:
          this._currentSublayer.showHelp();
          break;
        case this.recruitDialog.btn_tab_units:
          if (!__dep_export_CastleModel.CastleModel.questData.isQuestActive(25)) {
            this.changeCategoryWithParams(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS, [__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS, null]);
            this.showCastleSelector();
          }
          break;
        case this.recruitDialog.btn_tab_auxiliaries:
          if (!__dep_export_CastleModel.CastleModel.questData.isQuestActive(25)) {
            this.changeCategoryWithParams(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES, [__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES, null]);
            this.showCastleSelector();
          }
          break;
        case this.recruitDialog.btn_tab_tools:
          if (!__dep_export_CastleModel.CastleModel.questData.isQuestActive(25)) {
            this.changeCategoryWithParams(__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS, [__dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS, null]);
            this.showCastleSelector();
          }
          break;
        case this.recruitDialog.btn_tab_inventory:
          if (!__dep_export_CastleModel.CastleModel.questData.isQuestActive(25)) {
            this.changeCategoryWithParams(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_INVENTORY, [__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_INVENTORY]);
            this.showCastleSelector();
          }
          break;
        case this.recruitDialog.btn_tab_stronghold:
          if (!__dep_export_CastleModel.CastleModel.questData.isQuestActive(25)) {
            this.changeCategoryWithParams(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_STRONGHOLD, [__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_STRONGHOLD]);
            this.hideCastleSelector();
          }
          break;
        case this.recruitDialog.btn_tab_hospital:
          if (!__dep_export_CastleModel.CastleModel.questData.isQuestActive(25)) {
            this.changeCategoryWithParams(__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HOSPITAL, [__dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_STRONGHOLD]);
            this.showCastleSelector();
          }
      }
    }
  };
  CastleRecruitDialog.prototype.hideCastleSelector = function () {
    this.recruitDialog.mc_castleHolder.visible = false;
    this.recruitDialog.mc_castleListCombobox.visible = false;
  };
  CastleRecruitDialog.prototype.showCastleSelector = function () {
    this.recruitDialog.mc_castleHolder.visible = true;
    this.recruitDialog.mc_castleListCombobox.visible = true;
  };
  CastleRecruitDialog.prototype.changeCategoryWithParams = function (__s115param0, __s115param1) {
    if (this._currentCategory != __s115param0) {
      this.changeCategory(__s115param0);
      this.showSublayer(this.getSublayer(__s115param0), __s115param1);
      this.setActiveTabButtons(this._currentCategory);
      this.recruitDialog.mc_bgdetail.visible = this._currentCategory == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_INVENTORY;
      this.updateCastleList();
    }
  };
  CastleRecruitDialog.prototype.setActiveTabButtons = function (__s118param0) {
    this.enableButtons_0();
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.recruitDialog.btn_tab_units, __s118param0 == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.recruitDialog.btn_tab_auxiliaries, __s118param0 == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_AUXILIARIES);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.recruitDialog.btn_tab_tools, __s118param0 == __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_TOOLS);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.recruitDialog.btn_tab_inventory, __s118param0 == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_INVENTORY);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.recruitDialog.btn_tab_stronghold, __s118param0 == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_STRONGHOLD);
    __dep_export_ButtonHelper.ButtonHelper.setButtonSelected(this.recruitDialog.btn_tab_hospital, __s118param0 == __dep_export_ClientConstCastle.ClientConstCastle.CATEGORY_HOSPITAL);
    if (this.layoutManager.currentState == __dep_export_CastleLayoutManager.CastleLayoutManager.STATE_WORLDMAP) {
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.recruitDialog.btn_tab_units, false);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.recruitDialog.btn_tab_auxiliaries, false);
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.recruitDialog.btn_tab_tools, false);
    }
  };
  CastleRecruitDialog.prototype.getClipContainerForUnit = function (__s121param0, __s121param1 = __dep_export_ClientConstCastle.ClientConstCastle.UNIT_CATEGORY_SOLDIERS) {
    return this.getSublayer(__s121param1).getClipContainerForUnitVO(__s121param0);
  };
  Object.defineProperty(CastleRecruitDialog.prototype, "recruitDialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRecruitDialog.prototype, "recruitDialog", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRecruitDialog.prototype, "currentSublayer", {
    get: function () {
      return this._currentSublayer;
    },
    enumerable: true,
    configurable: true
  });
  CastleRecruitDialog.NAME = "RecruitDialogExternal_May24";
  return CastleRecruitDialog;
}(__dep_export_CastleExternalSubLayerDialog.CastleExternalSubLayerDialog);
exports.CastleRecruitDialog = __s0local1;
var __dep_export_IsoObjectEnum = require("gge-module:export_IsoObjectEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_FlashBlockHelper = require("gge-module:export_FlashBlockHelper");
var __dep_export_CastleWodData = require("gge-module:export_CastleWodData");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_ComboboxComponent = require("gge-module:export_ComboboxComponent");
var __dep_export_CastleStonewallBackgroundComponent = require("gge-module:export_CastleStonewallBackgroundComponent");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_export_CastleRecruitDialogHospital = require("gge-module:export_CastleRecruitDialogHospital");
var __dep_export_CastleRecruitDialogInventory = require("gge-module:export_CastleRecruitDialogInventory");
var __dep_export_CastleRecruitDialogStronghold = require("gge-module:export_CastleRecruitDialogStronghold");
var __dep_export_CastleRecruitDialogUnits = require("gge-module:export_CastleRecruitDialogUnits");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
