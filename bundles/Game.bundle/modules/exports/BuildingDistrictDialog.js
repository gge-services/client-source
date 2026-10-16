Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_4 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_3 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ConstructionItemSlotVO = require("gge-module:export_ConstructionItemSlotVO");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_DynamicSizeScrollStrategyVertical = require("gge-module:export_DynamicSizeScrollStrategyVertical");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_SubscriptionHelper = require("gge-module:export_SubscriptionHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function BuildingDistrictDialog() {
    var __s3local0 = this;
    __s3local0._contentStartPosY = 0;
    __s3local0._currentDistrictType = -1;
    __s3local0.isDragging = false;
    __s3local0.lastMousePosY = NaN;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, BuildingDistrictDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(BuildingDistrictDialog, __s1param0);
  BuildingDistrictDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this, __s5param0);
    this.dialogDisp.mc_capacity.mouseChildren = false;
    this.dialogDisp.mc_capacity.toolTipText = "districtSpace_tt";
    this.dialogDisp.mc_decoPoints.icon_decoPoints.mouseChildren = false;
    this.dialogDisp.mc_decoPoints.icon_decoPoints.toolTipText = "publicOrder_combined";
    this.dialogDisp.mc_buildingList.mouseChildren = false;
    this.textFieldManager.registerTextField(this.dialogDisp.mc_buildingList.txt_buildingList, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO("dialog_district_buildingList_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_content, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(__dep_exact_92d05af59ee2ff30_2.Localize.text("dialog_district_overview"))));
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btn_help, this.dialogDisp.btn_close, this.dialogDisp.btn_upgrade, this.dialogDisp.btn_gacha], __dep_export_ClickFeedbackButton.ClickFeedbackButton);
    var __s5local0 = new __dep_export_DynamicSizeScrollStrategyVertical.DynamicSizeScrollStrategyVertical(true, BuildingDistrictDialog.ROW_HEIGHT * 2);
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp.mc_slider).addMouseWheelElements([this.dialogDisp]), __s5local0);
    this._interactionData = new __dep_export_ConstructionItemsInteractionData.ConstructionItemsInteractionData();
    this.initCISlots();
    this.dialogDisp.bottomMenu.visible = false;
    this.dialogDisp.bottomMenu_noCI.visible = false;
    this.dialogDisp.mc_decoPoints.visible = false;
    this.dialogDisp.mc_contentHolder.mask = this.dialogDisp.mc_mask;
    this.dialogDisp.bg_cached.mouseChildren = false;
    this.dialogDisp.mc_ringmenuMask.visible = false;
    this._contentStartPosY = __dep_exact_f855840627e6e145.int(this.dialogDisp.mc_contentHolder.y);
  };
  BuildingDistrictDialog.prototype.addEventListenerOnShow = function () {
    __s1param0.prototype.addEventListenerOnShow.call(this);
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_BURNING_CASTLE_UPDATED, this.bindFunction(this.onUpdateCastleData));
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onSwitchCastle));
  };
  BuildingDistrictDialog.prototype.removeEventListenerOnHide = function () {
    __s1param0.prototype.removeEventListenerOnHide.call(this);
    this.controller.removeEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_BURNING_CASTLE_UPDATED, this.bindFunction(this.onUpdateCastleData));
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.bindFunction(this.onSwitchCastle));
  };
  BuildingDistrictDialog.prototype.onUpdateCastleData = function (__s11param0) {
    this.updateBuildingSlots();
    if (this._interactionData.selectedBuilding && this._slots != null) {
      for (var __s11local0 = 0, __s11local1 = this._slots; __s11local0 < __s11local1.length; __s11local0++) {
        var __s11local2 = __s11local1[__s11local0];
        if (__s11local2 !== undefined && __s11local2.index == this._interactionData.selectedBuilding.districtSlotID && (!__s11local2.building || __s11local2.building.vo != this._interactionData.selectedBuilding)) {
          this.deselectBuilding();
          break;
        }
      }
    }
    this.updateDecoPoints();
  };
  BuildingDistrictDialog.prototype.onSwitchCastle = function (__s17param0) {
    this.hide();
  };
  BuildingDistrictDialog.prototype.showLoaded = function (__s19param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s19param0);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafe(this.dialogProperties.districtBuildingVO.getInfoTooltipLine1())));
    this.initBuildingListTooltip();
    this.updateBuildingSlots();
    this.updateUpgradeButton();
    this.updateDecoPoints();
    this.updateGacha();
    this._currentDistrictType = this.dialogProperties.districtBuildingVO.districtTypeID;
    var __s19local0 = Math.max(0, Math.ceil((this.getMaxLevelCapacity() - BuildingDistrictDialog.ITEMS_PER_ROW * BuildingDistrictDialog.VISIBLE_ROWS) / BuildingDistrictDialog.ITEMS_PER_ROW)) * BuildingDistrictDialog.ROW_HEIGHT + BuildingDistrictDialog.ADDITIONAL_BOTTOM_HEIGHT;
    this._scrollComponent.init(0, __s19local0, BuildingDistrictDialog.ROW_HEIGHT, BuildingDistrictDialog.ROW_HEIGHT / 4);
    this._scrollComponent.show();
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onScrollValueChange));
    this._interactionData.SGN_UPDATE.add(this.bindFunction(this.onSelectBuilding));
    this.onScrollValueChange();
    if (this._ciSlots != null) {
      for (var __s19local1 = 0, __s19local2 = this._ciSlots; __s19local1 < __s19local2.length; __s19local1++) {
        var __s19local3 = __s19local2[__s19local1];
        if (__s19local3 !== undefined) {
          __s19local3.show();
        }
      }
    }
    window.setTimeout(this.bindFunction(this.preselectBuilding), 1);
    this.disp.addEventListener(__s0local0.PRESS_MOVE, this.bindFunction(this.onMouseMove));
  };
  BuildingDistrictDialog.prototype.preselectBuilding = function () {
    if (this.dialogProperties.targetBuildingVE) {
      __dep_export_Iso.Iso.renderer.mouse.deselectTarget();
      __dep_export_Iso.Iso.renderer.mouse.changeSelectedTarget(this.dialogProperties.targetBuildingVE);
      this._interactionData.setSelectedBuilding(this.dialogProperties.targetBuildingVE.buildingVO);
    }
  };
  BuildingDistrictDialog.prototype.onScrollValueChange = function () {
    this.dialogDisp.mc_contentHolder.y = this._contentStartPosY - this._scrollComponent.currentValue;
  };
  BuildingDistrictDialog.prototype.hideLoaded = function (__s30param0 = null) {
    __s1param0.prototype.hideLoaded.call(this, __s30param0);
    this._scrollComponent.hide();
    this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onScrollValueChange));
    this.deselectBuilding();
    this._interactionData.SGN_UPDATE.remove(this.bindFunction(this.onSelectBuilding));
    if (this._ciSlots != null) {
      for (var __s30local0 = 0, __s30local1 = this._ciSlots; __s30local0 < __s30local1.length; __s30local0++) {
        __s30local4 = __s30local1[__s30local0];
        if (__s30local4 !== undefined) {
          __s30local4.hide();
        }
      }
    }
    if (this._slots != null) {
      for (var __s30local2 = 0, __s30local3 = this._slots; __s30local2 < __s30local3.length; __s30local2++) {
        var __s30local4;
        __s30local4 = __s30local3[__s30local2];
        if (__s30local4 !== undefined) {
          __s30local4.onHide();
        }
      }
    }
    var __s30local5 = this.layoutManager.getIngameUIComponent(__dep_export_RingMenuBuilding.RingMenuBuilding);
    if (__s30local5) {
      __s30local5.disp.mask = null;
    }
    this._slots = [];
    __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_contentHolder);
    this.disp.removeEventListener(__s0local0.PRESS_MOVE, this.bindFunction(this.onMouseMove));
  };
  BuildingDistrictDialog.prototype.initBuildingListTooltip = function () {
    var __s41local0 = this.textFieldManager.registerTextField(this.dialogDisp.mc_buildingList_tooltip.txt_buildings, new __dep_exact_92d05af59ee2ff30_1.TextVO(this.getValidBuildingsList()));
    this.dialogDisp.mc_buildingList_tooltip.bg.height = __s41local0.textHeight + 20;
    this.dialogDisp.mc_buildingList_tooltip.visible = false;
  };
  BuildingDistrictDialog.prototype.updateUpgradeButton = function () {
    var __s43local0 = this.dialogProperties.districtBuildingVO.hasUpgrade;
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_upgrade, __s43local0);
    this.dialogDisp.btn_upgrade.toolTipText = __s43local0 ? "upgrade" : "levelCapReached";
  };
  BuildingDistrictDialog.prototype.updateBuildingSlots = function () {
    var __s45local0 = __dep_exact_81dacdf05bd32292_1.getDefinitionByName(this.dialogProperties.districtBuildingVO.buildingSlotAssetName);
    var __s45local1 = this.getBuildings();
    var __s45local2 = this.getMaxLevelCapacity();
    this._slots = [];
    __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(this.dialogDisp.mc_contentHolder);
    this.updateDistrictBackground(__s45local2);
    var __s45local3 = 0;
    for (var __s45local4 = 0; __s45local4 < __s45local2; __s45local4++) {
      var __s45local5 = new __s45local0();
      var __s45local6 = __s45local1[__s45local4];
      var __s45local7 = new __dep_export_BuildingDistrictSlot.BuildingDistrictSlot(__s45local5, __s45local6, this.dialogProperties.districtBuildingVO, __s45local4, this._interactionData);
      this.dialogDisp.mc_contentHolder.addChild(__s45local7.disp);
      __s45local7.onShow();
      this._slots.push(__s45local7);
      if (__s45local6) {
        __s45local3++;
      }
    }
    this.textFieldManager.registerTextField(this.dialogDisp.mc_capacity.txt_capacity, new __dep_exact_92d05af59ee2ff30_3.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_3.GenericTextIds.VALUE_PROPORTIONAL_VALUE, [__s45local3, this.dialogProperties.districtBuildingVO.districtSlots]));
  };
  BuildingDistrictDialog.prototype.updateDistrictBackground = function (__s50param0) {
    if (this._currentDistrictType != this.dialogProperties.districtBuildingVO.districtTypeID) {
      this._backgroundClip_Top = null;
      this._backgroundClip_Bottom = null;
      this._backgroundClips_Middle = [];
    }
    this._backgroundClip_Top ||= this.createBackgroundTile("BuildingDistrictBackground_Top_" + this.dialogProperties.districtBuildingVO.districtTypeID);
    this._backgroundClip_Bottom ||= this.createBackgroundTile("BuildingDistrictBackground_Bottom_" + this.dialogProperties.districtBuildingVO.districtTypeID);
    this._backgroundClips_Middle ||= [];
    var __s50local0 = Math.max(0, Math.ceil(__s50param0 / 3) - 2);
    this.dialogDisp.mc_contentHolder.addChild(this._backgroundClip_Top);
    this._backgroundClip_Top.recolor();
    for (var __s50local1 = 0; __s50local1 < __s50local0; __s50local1++) {
      if (this._backgroundClips_Middle.length < __s50local1 + 1) {
        this._backgroundClips_Middle.push(this.createBackgroundTile("BuildingDistrictBackground_Middle_" + this.dialogProperties.districtBuildingVO.districtTypeID));
      }
      var __s50local2 = this._backgroundClips_Middle[__s50local1];
      __s50local2.y = (__s50local1 + 1) * BuildingDistrictDialog.ROW_HEIGHT;
      this.dialogDisp.mc_contentHolder.addChild(__s50local2);
      __s50local2.recolor();
    }
    this._backgroundClip_Bottom.y = (__s50local1 + 1) * BuildingDistrictDialog.ROW_HEIGHT;
    this.dialogDisp.mc_contentHolder.addChild(this._backgroundClip_Bottom);
    this._backgroundClip_Bottom.recolor();
  };
  BuildingDistrictDialog.prototype.createBackgroundTile = function (__s56param0) {
    var __s56local0 = [];
    __s56local0.push(new __dep_exact_9e901e8e2483a22f_2.ClipColor("flag", __dep_export_CastleModel.CastleModel.userData.playerCrest.colorsTwo));
    var __s56local1 = __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl("BuildingDistrictBackground_" + this.dialogProperties.districtBuildingVO.districtTypeID);
    return new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip(__s56param0, __s56local1, __s56local0, 0, false, null, false, 1, false, false, true);
  };
  BuildingDistrictDialog.prototype.initCISlots = function () {
    this._ciSlots = [];
    for (var __s58local0 = 0; __s58local0 < __dep_exact_26a421b704832cff.ConstructionItemConst.SLOT_TYPE_COUNTS.length; ++__s58local0) {
      for (var __s58local1 = 0; __s58local1 < __dep_exact_26a421b704832cff.ConstructionItemConst.SLOT_TYPE_COUNTS[__s58local0]; ++__s58local1) {
        var __s58local2 = new __dep_export_ConstructionItemSlotBuildingDistrict.ConstructionItemSlotBuildingDistrict(new __dep_export_ConstructionItemSlotVO.ConstructionItemSlotVO(__s58local0, __s58local1), this._interactionData, this.bindFunction(this.onClickConstructionItemSlot), this.dialogDisp.bottomMenu["slot_" + __s58local0 + "_" + __s58local1]);
        this._ciSlots.push(__s58local2);
      }
    }
  };
  BuildingDistrictDialog.prototype.onSelectBuilding = function (__s64param0) {
    var __s64local0 = !!this._interactionData.selectedBuilding;
    this.bottomMenu.visible = __s64local0;
    if (__s64local0) {
      var __s64local1 = this._interactionData.selectedBuilding.multiInfoPanelVO.items;
      for (var __s64local2 = 0; __s64local2 < this.getMaxEffects(); __s64local2++) {
        var __s64local3 = this.bottomMenu["mc_effect" + __s64local2];
        var __s64local4 = __s64local1.length > __s64local2 ? __s64local1[__s64local2] : null;
        if (__s64local4) {
          __s64local3.mc_empty.visible = false;
          __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.clearMovieClip(__s64local3.mc_icon);
          var __s64local5 = new __s64local4.iconClass();
          __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.scaleToFit(__s64local5, 30, 30);
          __s64local3.mc_icon.addChild(__s64local5);
          __s64local3.toolTipText = __s64local4.tooltipText;
          __s64local3.mouseChildren = false;
          var __s64local6 = this.textFieldManager.registerTextField(__s64local3.txt_value, __s64local4.textVO);
          var __s64local7 = __s64local4.textColor == __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR ? __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT_BRIGHT : __s64local4.textColor;
          __dep_export_SubscriptionHelper.SubscriptionHelper.showSubscriptionStarToTextField(__s64local6, __s64local4.useSubscription, 15, new __s0local1(-3, -3), true, __s64local7);
        } else {
          __s64local3.mc_empty.visible = true;
          __s64local3.toolTipText = null;
        }
      }
      var __s64local8 = this._interactionData.selectedBuilding.hasConstructionItemSlots;
      if (this._ciSlots != null) {
        for (var __s64local9 = 0, __s64local10 = this._ciSlots; __s64local9 < __s64local10.length; __s64local9++) {
          var __s64local11 = __s64local10[__s64local9];
          if (__s64local11 !== undefined) {
            __s64local11.disp.visible = __s64local8;
          }
        }
      }
      var __s64local12 = this.layoutManager.getIngameUIComponent(__dep_export_RingMenuBuilding.RingMenuBuilding);
      if (__s64local12 && __s64local12.disp && __s64local12.disp.parent) {
        var __s64local13 = __dep_export_CastleMovieClipHelper.CastleMovieClipHelper.applyMaskFromMovieClip(__s64local12.disp, this.dialogDisp.mc_ringmenuMask, __s64local12.disp.parent);
        var __s64local14 = this.dialogDisp.localToGlobal(this.dialogDisp.mc_ringmenuMask.x, this.dialogDisp.mc_ringmenuMask.y);
        var __s64local15 = __s64local12.disp.parent.globalToLocal(__s64local14);
        __s64local13.x = __s64local15.x;
        __s64local13.y = __s64local15.y;
      }
      this.adjustScrollBounds(this.bottomMenu.height);
      this._scrollComponent.scrollToValue(this._scrollComponent.currentValue);
      var __s64local16 = Math.floor(this._interactionData.selectedBuilding.districtSlotID / BuildingDistrictDialog.ITEMS_PER_ROW) * BuildingDistrictDialog.ROW_HEIGHT;
      var __s64local17 = __s64local16 - BuildingDistrictDialog.ROW_HEIGHT * 0.25;
      if (this._scrollComponent.currentValue > __s64local16) {
        this._scrollComponent.scrollToValue(__s64local16);
      } else if (this._scrollComponent.currentValue < __s64local17) {
        this._scrollComponent.scrollToValue(__s64local17);
      }
    } else {
      this.adjustScrollBounds();
      this._scrollComponent.scrollToValue(this._scrollComponent.currentValue);
    }
  };
  BuildingDistrictDialog.prototype.adjustScrollBounds = function (__s79param0 = 0) {
    var __s79local0 = Math.max(0, Math.ceil((this.getMaxLevelCapacity() - BuildingDistrictDialog.ITEMS_PER_ROW * BuildingDistrictDialog.VISIBLE_ROWS) / BuildingDistrictDialog.ITEMS_PER_ROW));
    var __s79local1 = __dep_exact_f855840627e6e145.int(__s79local0 * BuildingDistrictDialog.ROW_HEIGHT + __s79param0 + BuildingDistrictDialog.ADDITIONAL_BOTTOM_HEIGHT);
    this._scrollComponent.setScrollBounds(this._scrollComponent.minValue, __s79local1);
  };
  BuildingDistrictDialog.prototype.onClickConstructionItemSlot = function (__s81param0) {
    if (__s81param0.isLocked()) {
      __dep_export_ConstructionItemsHelper.ConstructionItemsHelper.handleSlotClickLocked(__s81param0.slotVO);
    } else {
      var __s81local0 = new __dep_export_CastleConstructionItemsMainDialogProperties.CastleConstructionItemsMainDialogProperties(__dep_export_CastleConstructionItemsMainDialog.CastleConstructionItemsMainDialog.SUBLAYER_ITEMS_ASSIGN, __s81param0.slotVO, __s81param0.buildingVO);
      __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.registerDefaultDialogs(__dep_export_CastleConstructionItemsMainDialog.CastleConstructionItemsMainDialog, __s81local0);
    }
  };
  BuildingDistrictDialog.prototype.onClick = function (__s85param0) {
    if (!!this._interactionData.selectedBuilding && !__dep_export_ButtonHelper.ButtonHelper.hasBasicButton(__s85param0.target) && !this.clickTargetIsBuilding(__s85param0.target)) {
      this.deselectBuilding();
    }
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s85param0.target)) {
      switch (__s85param0.target) {
        case this.dialogDisp.btn_upgrade:
          this.hide();
          var __s85local0 = __dep_exact_81dacdf05bd32292_2.castAs(__dep_export_Iso.Iso.renderer.objects.provider.getObjectById(this.dialogProperties.districtBuildingVO.objectId), "ADistrictBuildingVE");
          if (__s85local0) {
            __dep_export_Iso.Iso.renderer.mouse.changeSelectedTarget(__s85local0);
          }
          break;
        case this.dialogDisp.btn_help:
          __dep_export_CastleExternalDialog.CastleExternalDialog.dialogHandler.showHelper("", __dep_exact_92d05af59ee2ff30_2.Localize.text("help_district"));
          break;
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_gacha:
          var __s85local1 = this.getGachaEventVO();
          this.hide();
          if (__s85local1) {
            __s85local1.openDialog();
          }
      }
      if (__dep_exact_81dacdf05bd32292.currentBrowserInfo.isTouchEvent(__s85param0) && __s85param0.target == this.dialogDisp.mc_buildingList) {
        this.dialogDisp.mc_buildingList_tooltip.visible = !this.dialogDisp.mc_buildingList_tooltip.visible;
        __dep_export_Iso.Iso.renderer.mouse.deselectTarget();
      }
    }
  };
  BuildingDistrictDialog.prototype.onMouseOver = function (__s93param0) {
    __s1param0.prototype.onMouseOver.call(this, __s93param0);
    if (__s93param0.target == this.dialogDisp.mc_buildingList) {
      this.dialogDisp.mc_buildingList_tooltip.visible = true;
      __dep_export_Iso.Iso.renderer.mouse.deselectTarget();
    }
  };
  BuildingDistrictDialog.prototype.onMouseOut = function (__s96param0) {
    __s1param0.prototype.onMouseOut.call(this, __s96param0);
    if (__s96param0.target == this.dialogDisp.mc_buildingList) {
      this.dialogDisp.mc_buildingList_tooltip.visible = false;
    }
  };
  BuildingDistrictDialog.prototype.onMouseDown = function (__s99param0) {
    if (__dep_exact_9e901e8e2483a22f_4.MovieClipHelper.isChildrenOf(__s99param0.target, this.dialogDisp.mc_contentHolder)) {
      this.isDragging = true;
      this.lastMousePosY = this.dialogDisp.stage.mouseY;
      this.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_DRAG);
    }
  };
  BuildingDistrictDialog.prototype.onMouseUp = function (__s102param0) {
    if (this.isDragging) {
      this.isDragging = false;
      this.layoutManager.nativeCursor.setCursorType(__dep_exact_9e901e8e2483a22f.BasicCustomCursor.CURSOR_ARROW);
    }
  };
  BuildingDistrictDialog.prototype.onMouseMove = function (__s105param0) {
    if (this.isDragging) {
      var __s105local0 = __dep_exact_f855840627e6e145.int(this.dialogDisp.stage.mouseY - this.lastMousePosY);
      this._scrollComponent.scrollToValue(this._scrollComponent.currentValue - __s105local0);
      this.lastMousePosY = this.dialogDisp.stage.mouseY;
    }
  };
  BuildingDistrictDialog.prototype.clickTargetIsBuilding = function (__s108param0) {
    if (__s108param0 && this._slots != null) {
      for (var __s108local0 = 0, __s108local1 = this._slots; __s108local0 < __s108local1.length; __s108local0++) {
        var __s108local2 = __s108local1[__s108local0];
        if (__s108local2 !== undefined && __dep_exact_9e901e8e2483a22f_4.MovieClipHelper.isChildrenOf(__s108param0, __s108local2.disp.buildingHolder)) {
          return true;
        }
      }
    }
    return false;
  };
  BuildingDistrictDialog.prototype.deselectBuilding = function () {
    __dep_export_Iso.Iso.renderer.mouse.deselectTarget();
    this._interactionData.setSelectedBuilding(null);
  };
  BuildingDistrictDialog.prototype.getValidBuildingsList = function () {
    var __s116local0;
    var __s116local1 = __dep_export_CastleModel.CastleModel.areaData.activeArea ? __dep_export_CastleModel.CastleModel.areaData.activeArea.spaceId : -1;
    var __s116local2 = __dep_export_CastleModel.CastleModel.areaData.activeArea ? __dep_export_CastleModel.CastleModel.areaData.activeArea.areaInfo.areaType : -1;
    var __s116local3 = __dep_export_CastleModel.CastleModel.buildingDistrictData.getPossibleBuildingsForType(this.dialogProperties.districtBuildingVO.districtTypeID, __s116local1, __s116local2);
    var __s116local4 = "";
    var __s116local5 = [];
    if (__s116local3 != null) {
      for (var __s116local6 = 0, __s116local7 = __s116local3; __s116local6 < __s116local7.length; __s116local6++) {
        var __s116local8 = __s116local7[__s116local6];
        if (__s116local8 !== undefined) {
          __s116local0 = __dep_exact_92d05af59ee2ff30_2.Localize.text(__dep_exact_9e901e8e2483a22f_3.GenericTextIds.VALUE_SIMPLE_COMP, ["•", __dep_exact_92d05af59ee2ff30_2.Localize.text(__s116local8.getNameString())]);
          if (!(__s116local5.indexOf(__s116local0) > -1)) {
            if (__s116local4 != "") {
              __s116local4 += "\n";
            }
            __s116local5.push(__s116local0);
            __s116local4 += __s116local0;
          }
        }
      }
    }
    if (this.isDecoDistrict()) {
      __s116local4 += "\n";
      __s116local4 += __dep_exact_92d05af59ee2ff30_2.Localize.text(__dep_exact_9e901e8e2483a22f_3.GenericTextIds.VALUE_SIMPLE_COMP, ["•", __dep_exact_92d05af59ee2ff30_2.Localize.text("moreComingSoon")]);
    }
    return __dep_exact_92d05af59ee2ff30_2.Localize.text("dialog_district_buildingList_desc", [__s116local4]);
  };
  BuildingDistrictDialog.prototype.getBuildings = function () {
    var __s125local0 = new Array(this.getMaxLevelCapacity());
    var __s125local1 = __dep_export_Iso.Iso.renderer.objects.provider.getObjectsByGroupType(__dep_export_IsoObjectGroupEnum.IsoObjectGroupEnum.INNER_BUILDINGS);
    if (__s125local1 != null) {
      for (var __s125local2 = 0, __s125local3 = __s125local1; __s125local2 < __s125local3.length; __s125local2++) {
        var __s125local4 = __s125local3[__s125local2];
        if (__s125local4 !== undefined && __dep_exact_81dacdf05bd32292_3.instanceOfClass(__s125local4.vo, "ABasicBuildingVO") && __s125local4.vo.inDistrictID == this.dialogProperties.districtBuildingVO.districtTypeID) {
          __s125local0[__s125local4.vo.districtSlotID] = __s125local4;
        }
      }
    }
    return __s125local0;
  };
  BuildingDistrictDialog.prototype.getMaxLevelCapacity = function () {
    return __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.wodData.getHighestUpgradeForBuilding(this.dialogProperties.districtBuildingVO.wodId).districtSlots);
  };
  BuildingDistrictDialog.prototype.isDecoDistrict = function () {
    return this.dialogProperties.districtBuildingVO.districtTypeID == 7;
  };
  Object.defineProperty(BuildingDistrictDialog.prototype, "bottomMenu", {
    get: function () {
      if (this.isDecoDistrict()) {
        return this.dialogDisp.bottomMenu_noCI;
      } else {
        return this.dialogDisp.bottomMenu;
      }
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(BuildingDistrictDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  BuildingDistrictDialog.prototype.getMaxEffects = function () {
    if (this.isDecoDistrict()) {
      return BuildingDistrictDialog.MAX_EFFECTS_NO_CI;
    } else {
      return BuildingDistrictDialog.MAX_EFFECTS;
    }
  };
  BuildingDistrictDialog.prototype.updateDecoPoints = function () {
    if (this.isDecoDistrict()) {
      this.dialogDisp.mc_decoPoints.visible = true;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_decoPoints.txt_decoPoints, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(this.dialogProperties.districtBuildingVO.getDistrictDecoPoints()));
    } else {
      this.dialogDisp.mc_decoPoints.visible = false;
    }
  };
  BuildingDistrictDialog.prototype.updateGacha = function () {
    if (this.dialogDisp.btn_gacha) {
      this.dialogDisp.btn_gacha.visible = this.dialogProperties.districtBuildingVO.gachaEventID > -1;
      var __s149local0 = this.getGachaEventVO();
      this.dialogDisp.btn_gacha.toolTipText = __s149local0 ? __s149local0.eventBuildingNameId : "comingSoon";
      __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_gacha, !!__s149local0);
    }
  };
  BuildingDistrictDialog.prototype.getGachaEventVO = function () {
    return __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(this.dialogProperties.districtBuildingVO.gachaEventID);
  };
  BuildingDistrictDialog.NAME = "BuildingDistrict_Oct24";
  BuildingDistrictDialog.ITEMS_PER_ROW = 3;
  BuildingDistrictDialog.VISIBLE_ROWS = 2;
  BuildingDistrictDialog.ROW_HEIGHT = 214;
  BuildingDistrictDialog.MAX_EFFECTS = 6;
  BuildingDistrictDialog.MAX_EFFECTS_NO_CI = 10;
  BuildingDistrictDialog.ADDITIONAL_BOTTOM_HEIGHT = 72;
  return BuildingDistrictDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.BuildingDistrictDialog = __s0local2;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList");
var __dep_export_IsoObjectGroupEnum = require("gge-module:export_IsoObjectGroupEnum");
var __dep_export_Iso = require("gge-module:export_Iso");
var __dep_export_RingMenuBuilding = require("gge-module:export_RingMenuBuilding");
var __dep_export_CastleConstructionItemsMainDialog = require("gge-module:export_CastleConstructionItemsMainDialog");
var __dep_export_CastleConstructionItemsMainDialogProperties = require("gge-module:export_CastleConstructionItemsMainDialogProperties");
var __dep_export_ConstructionItemsHelper = require("gge-module:export_ConstructionItemsHelper");
var __dep_export_ConstructionItemsInteractionData = require("gge-module:export_ConstructionItemsInteractionData");
var __dep_export_ConstructionItemSlotBuildingDistrict = require("gge-module:export_ConstructionItemSlotBuildingDistrict");
var __dep_export_BuildingDistrictSlot = require("gge-module:export_BuildingDistrictSlot");
var __dep_exact_81dacdf05bd32292_2 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_3 = require("gge-module:exact_81dacdf05bd32292");
var __dep_export_CastleMovieClipHelper = require("gge-module:export_CastleMovieClipHelper");
var __dep_export_ClickFeedbackButton = require("gge-module:export_ClickFeedbackButton");
