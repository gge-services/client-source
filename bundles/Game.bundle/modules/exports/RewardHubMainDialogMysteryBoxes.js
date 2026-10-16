Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_84d43d9c404bd4d8 = require("gge-module:exact_84d43d9c404bd4d8");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleLootBoxDataEvent = require("gge-module:export_CastleLootBoxDataEvent");
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_InfiniteScrollListClips = require("gge-module:export_InfiniteScrollListClips");
var __dep_export_InfiniteScrollListComponent = require("gge-module:export_InfiniteScrollListComponent");
var __dep_export_InfiniteScrollListOptions = require("gge-module:export_InfiniteScrollListOptions");
var __dep_export_TooltipManagerFacade = require("gge-module:export_TooltipManagerFacade");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_RewardHubDialogMysteryBoxItem = require("gge-module:export_RewardHubDialogMysteryBoxItem");
var __dep_export_RewardHubMainDialog = require("gge-module:export_RewardHubMainDialog");
var __dep_export_MysteryBoxOpeningAnimationHandler = require("gge-module:export_MysteryBoxOpeningAnimationHandler");
var __dep_export_C2SGetLootBoxesStatus = require("gge-module:export_C2SGetLootBoxesStatus");
var __dep_export_CastleServerMessageArrivedEvent = require("gge-module:export_CastleServerMessageArrivedEvent");
var __s0local0 = function (__s1param0) {
  function RewardHubMainDialogMysteryBoxes(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.selectedKeyIndex = 0;
    __s3local0.parent = __s3param1;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RewardHubMainDialogMysteryBoxes, __s1param0);
  RewardHubMainDialogMysteryBoxes.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.subLayerDisp.btn_settings, this.subLayerDisp.mc_config.btn_config], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this._checkboxStart = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.subLayerDisp.mc_config.btn_cbx, true);
    this._checkboxKey0 = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.subLayerDisp.cbx0, true);
    this._checkboxKey1 = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.subLayerDisp.cbx1, true);
    this._checkboxKey2 = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.subLayerDisp.cbx2, true);
    this._checkboxKey3 = new __dep_exact_84d43d9c404bd4d8.CheckBoxButton(this.subLayerDisp.cbx3, true);
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_title, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_mysteryBoxSystem_mysteryBoxHUB_header")));
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_config.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_rewardHub_showAtGameStart_desc"));
    this.subLayerDisp.btn_settings.toolTipText = "settings";
    this.subLayerDisp.mc_config.btn_config.toolTipText = "settings";
    this.subLayerDisp.mc_progress.mouseChildren = false;
    this.subLayerDisp.mc_progress.toolTipText = "dialog_mysteryBoxSystem_keyDraws_basics_tooltip";
    this.subLayerDisp.mc_key.mouseChildren = false;
    this.subLayerDisp.mc_key.toolTipText = "dialog_mysteryBoxSystem_keyDraws_basics_tooltip";
    this.subLayerDisp.mc_key_0.toolTipText = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 0, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_COMMON).getNameTextId();
    this.subLayerDisp.mc_key_1.toolTipText = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 0, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_RARE).getNameTextId();
    this.subLayerDisp.mc_key_2.toolTipText = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 0, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_EPIC).getNameTextId();
    this.subLayerDisp.mc_key_3.toolTipText = __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 0, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_LEGENDARY).getNameTextId();
    __dep_export_MysteryBoxOpeningAnimationHandler.MysteryBoxOpeningAnimationHandler.loadAnimations();
  };
  RewardHubMainDialogMysteryBoxes.prototype.show = function (__s7param0) {
    __s1param0.prototype.show.call(this, __s7param0);
    __dep_exact_9e901e8e2483a22f.BasicModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetLootBoxesStatus.C2SGetLootBoxesStatus());
    this.subLayerDisp.mc_config.visible = this.parent.isSettingTabOpen;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_list.mc_items);
    this._checkboxStart.selectButton = __dep_export_CastleModel.CastleModel.localData.readOpenRewardHubAtStart();
    var __s7local0 = new __dep_export_InfiniteScrollListOptions.InfiniteScrollListOptions(__dep_export_RewardHubDialogMysteryBoxItem.RewardHubDialogMysteryBoxItem, "CastleRewardHub_MysteryBox_ListItem", __dep_export_RewardHubMainDialog.RewardHubMainDialog.NAME);
    __s7local0.itemPaddingY = 0;
    __s7local0.useSmoothScroll = true;
    this._list = new __dep_export_InfiniteScrollListComponent.InfiniteScrollListComponent(new __dep_export_InfiniteScrollListClips.InfiniteScrollListClips(this.subLayerDisp.mc_list).addSliderMc(this.subLayerDisp.mc_list.mc_slider), __s7local0);
    this._list.onShow();
    if (this.getSelectedKeyID() == __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_COMMON || __dep_export_CastleModel.CastleModel.currencyData.getAmountById(this.getSelectedKeyID()) > 0) {
      this.keySelection(this.selectedKeyIndex);
    } else {
      this.keySelection(0);
    }
    __dep_export_CastleModel.CastleModel.lootBoxData.addEventListener(__dep_export_CastleLootBoxDataEvent.CastleLootBoxDataEvent.INVENTORY_UPDATED, this.bindFunction(this.updateAllInfos));
    this._list.scrollComponent.onScrollSignal.add(this.bindFunction(this.onScroll));
    this.controller.addEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.OLE_LOOT_BOX_ARRIVED, this.bindFunction(this.onServerResponseLootBoxOpened));
  };
  RewardHubMainDialogMysteryBoxes.prototype.onServerResponseLootBoxOpened = function (__s11param0) {
    this.parent.hide();
  };
  RewardHubMainDialogMysteryBoxes.prototype.onScroll = function (__s13param0 = null) {
    __dep_export_TooltipManagerFacade.TooltipManagerFacade.hideAllTooltips();
  };
  RewardHubMainDialogMysteryBoxes.prototype.hide = function () {
    if (this._list && this._list.scrollComponent.scrollVO) {
      this._list.onHide();
      this._list.destroy();
    }
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleModel.CastleModel.lootBoxData.removeEventListener(__dep_export_CastleLootBoxDataEvent.CastleLootBoxDataEvent.INVENTORY_UPDATED, this.bindFunction(this.updateAllInfos));
    this.controller.removeEventListener(__dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.OLE_LOOT_BOX_ARRIVED, this.bindFunction(this.onServerResponseLootBoxOpened));
  };
  RewardHubMainDialogMysteryBoxes.prototype.updateAllInfos = function (__s18param0 = null) {
    this.initKeyTextField(this.subLayerDisp.txt_copy1, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_RARE);
    this.initKeyTextField(this.subLayerDisp.txt_copy2, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_EPIC);
    this.initKeyTextField(this.subLayerDisp.txt_copy3, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_LEGENDARY);
    var __s18local0 = this.dataList();
    this._list.updateWithNewData(__s18local0, false);
    this._list.onShow();
    this.subLayerDisp.mc_progress.mc_bar.scaleX = Math.min(__dep_export_CastleModel.CastleModel.lootBoxData.getMysteryKeyProgress() / __dep_export_CastleModel.CastleModel.lootBoxData.getMysteryKeyProgressMax(), 1);
    this.textFieldManager.registerTextField(this.subLayerDisp.mc_progress.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("numbersXY", [__dep_export_CastleModel.CastleModel.lootBoxData.getMysteryKeyProgress(), __dep_export_CastleModel.CastleModel.lootBoxData.getMysteryKeyProgressMax()]));
    this.textFieldManager.registerTextField(this.subLayerDisp.txt_empty, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_mysteryBoxSystem_mysteryBoxHUB_empty")).visible = __s18local0.length == 0;
    this._list.setVisibility(__s18local0.length > 0);
    this.initCBX(this._checkboxKey1, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_RARE);
    this.initCBX(this._checkboxKey2, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_EPIC);
    this.initCBX(this._checkboxKey3, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_LEGENDARY);
  };
  RewardHubMainDialogMysteryBoxes.prototype.initKeyTextField = function (__s20param0, __s20param1) {
    var __s20local0 = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__s20param1);
    var __s20local1 = __dep_export_CastleModel.CastleModel.currencyData.getXmlCurrencyById(__s20param1).hardCap;
    this.textFieldManager.registerTextField(__s20param0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("numbersXY", [__s20local0, __s20local1])).color = __s20local0 >= __s20local1 ? __dep_export_ClientConstColor.ClientConstColor.MODERN_RED2 : __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT_BRIGHT;
  };
  RewardHubMainDialogMysteryBoxes.prototype.initCBX = function (__s22param0, __s22param1) {
    __s22param0.mouseEnabled = __dep_export_CastleModel.CastleModel.currencyData.getAmountById(__s22param1) >= 1;
    if (__s22param0.mouseEnabled) {
      __s22param0.disp.gotoAndStop(__s22param0.isSelected ? 2 : 1);
    } else {
      __s22param0.disp.gotoAndStop(3);
    }
  };
  RewardHubMainDialogMysteryBoxes.prototype.dataList = function () {
    for (var __s26local0 = __dep_export_CastleModel.CastleModel.lootBoxData.allLootBoxes(), __s26local1 = [], __s26local2 = 0; __s26local2 < __s26local0.length; __s26local2 += RewardHubMainDialogMysteryBoxes.AMOUNT_BOXES_ONE_ROW) {
      var __s26local3 = [];
      for (var __s26local4 = 0; __s26local4 < RewardHubMainDialogMysteryBoxes.AMOUNT_BOXES_ONE_ROW; __s26local4++) {
        if (__s26local2 + __s26local4 < __s26local0.length) {
          __s26local3.push(__s26local0[__s26local2 + __s26local4]);
        }
      }
      __s26local1.push({
        data: __s26local3,
        selectedKey: this.getSelectedKeyID()
      });
    }
    return __s26local1;
  };
  RewardHubMainDialogMysteryBoxes.prototype.getSelectedKeyID = function () {
    switch (this.selectedKeyIndex) {
      case 0:
        return __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_COMMON;
      case 1:
        return __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_RARE;
      case 2:
        return __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_EPIC;
      case 3:
        return __dep_export_ClientConstCurrency.ClientConstCurrency.ID_MYSTERY_BOX_KEY_LEGENDARY;
    }
  };
  RewardHubMainDialogMysteryBoxes.prototype.onClick = function (__s36param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s36param0.target)) {
      __s1param0.prototype.onClick.call(this, __s36param0);
      switch (__s36param0.target) {
        case this.subLayerDisp.btn_settings:
          this.subLayerDisp.mc_config.visible = true;
          this.parent.isSettingTabOpen = true;
          break;
        case this.subLayerDisp.mc_config.btn_config:
          this.subLayerDisp.mc_config.visible = false;
          this.parent.isSettingTabOpen = false;
          break;
        case this._checkboxKey0.disp:
          this.keySelection(0);
          break;
        case this._checkboxKey1.disp:
          if (this._checkboxKey1.mouseEnabled) {
            this.keySelection(1);
          }
          break;
        case this._checkboxKey2.disp:
          if (this._checkboxKey2.mouseEnabled) {
            this.keySelection(2);
          }
          break;
        case this._checkboxKey3.disp:
          if (this._checkboxKey3.mouseEnabled) {
            this.keySelection(3);
          }
          break;
        case this._checkboxStart.disp:
          this._checkboxStart.toggleSelected();
          __dep_export_CastleModel.CastleModel.localData.saveOpenRewardHubAtStart(this._checkboxStart.isSelected);
      }
    }
  };
  RewardHubMainDialogMysteryBoxes.prototype.keySelection = function (__s43param0) {
    this.selectedKeyIndex = __s43param0;
    if (__s43param0 == 0) {
      this._checkboxKey0.selected();
    } else {
      this._checkboxKey0.deselected();
    }
    if (__s43param0 == 1) {
      this._checkboxKey1.selected();
    } else {
      this._checkboxKey1.deselected();
    }
    if (__s43param0 == 2) {
      this._checkboxKey2.selected();
    } else {
      this._checkboxKey2.deselected();
    }
    if (__s43param0 == 3) {
      this._checkboxKey3.selected();
    } else {
      this._checkboxKey3.deselected();
    }
    this.updateAllInfos();
  };
  RewardHubMainDialogMysteryBoxes.AMOUNT_BOXES_ONE_ROW = 3;
  return RewardHubMainDialogMysteryBoxes;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.RewardHubMainDialogMysteryBoxes = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
