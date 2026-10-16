Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_1 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_26a421b704832cff_2 = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstEvent = require("gge-module:export_ClientConstEvent");
var __dep_export_C2SGetCastleResourcesVO = require("gge-module:export_C2SGetCastleResourcesVO");
var __dep_export_C2SColossusDepositResourcesVO = require("gge-module:export_C2SColossusDepositResourcesVO");
var __dep_export_CastleResourceCollectorEvent = require("gge-module:export_CastleResourceCollectorEvent");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_AreaDataEvent = require("gge-module:export_AreaDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.EventDispatcher;
var __s0local1 = function (__s1param0) {
  function CastleColossusDonateDialog() {
    var __s3local0 = this;
    __s3local0._points = 0;
    __s3local0._bonusStone = 0;
    __s3local0._bonusWood = 0;
    CONSTRUCTOR_HACK;
    return __s3local0 = __s1param0.call(this, CastleColossusDonateDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleColossusDonateDialog, __s1param0);
  CastleColossusDonateDialog.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_cancel, this.dialogDisp.btn_ok]);
    this._castleSelector = new __dep_export_CastleSelectorComponent.CastleSelectorComponent(this.dialogDisp.mc_selectSource);
    this._woodDonator = new __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent(this.dialogDisp.mc_donateWood);
    this._woodDonator.dispatcher = new __s0local0();
    this._woodDonator.notifyValueChange = true;
    this._stoneDonator = new __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent(this.dialogDisp.mc_donateStone);
    this._stoneDonator.dispatcher = new __s0local0();
    this._stoneDonator.notifyValueChange = true;
    this.itxtpoint = this.textFieldManager.registerTextField(this.dialogDisp.txt_points, new __dep_exact_92d05af59ee2ff30_1.TextVO(""));
    var __s5local0 = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("ResourcePointsIcon", __dep_exact_9e901e8e2483a22f_1.BasicModel.basicLoaderData.getVersionedItemAssetUrl("ResourcePointsIcon"), null, 0, false);
    if (__s5local0.isLoaded) {
      this.onPointIconLoaded(__s5local0);
    } else {
      __s5local0.clipLoaded.addOnce(this.bindFunction(this.onPointIconLoaded));
    }
    this.initCollectorListeners();
    this.setValues(this._bonusWood, this._bonusStone);
    this.setTexts();
  };
  CastleColossusDonateDialog.prototype.initCollectorListeners = function () {
    this._bonusStone = this._bonusWood = 0;
    if (this._woodDonator && this._stoneDonator) {
      this._woodDonator.dispatcher.addEventListener(__dep_export_CastleResourceCollectorEvent.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY, this.bindFunction(this.onValueChangeWood));
      this._stoneDonator.dispatcher.addEventListener(__dep_export_CastleResourceCollectorEvent.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY, this.bindFunction(this.onValueChangeStone));
    }
  };
  CastleColossusDonateDialog.prototype.removeCollectorListeners = function () {
    this._woodDonator.dispatcher.removeEventListener(__dep_export_CastleResourceCollectorEvent.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY, this.bindFunction(this.onValueChangeWood));
    this._stoneDonator.dispatcher.removeEventListener(__dep_export_CastleResourceCollectorEvent.CastleResourceCollectorEvent.VALUE_CHANGE_NOTIFY, this.bindFunction(this.onValueChangeStone));
    this._woodDonator.resetValue();
    this._stoneDonator.resetValue();
  };
  CastleColossusDonateDialog.prototype.onPointIconLoaded = function (__s14param0) {
    var __s14local0 = __s14param0.asDisplayObject();
    this.dialogDisp.mc_empty.addChild(__s14local0);
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.scaleToFit(this.dialogDisp.mc_empty, 55, 55);
  };
  CastleColossusDonateDialog.prototype.onValueChangeWood = function (__s16param0) {
    this._bonusWood = __s16param0.newValue;
    this.setValues(this._bonusWood, this._bonusStone);
  };
  CastleColossusDonateDialog.prototype.onValueChangeStone = function (__s18param0) {
    this._bonusStone = __s18param0.newValue;
    this.setValues(this._bonusWood, this._bonusStone);
  };
  CastleColossusDonateDialog.prototype.applyProperties = function () {
    __s1param0.prototype.applyProperties.call(this);
    this._points = __dep_exact_f855840627e6e145.int(__dep_exact_f855840627e6e145.int(this.properties.eventVO.ownPoints));
    this._bonusStone = this._bonusWood = 0;
    var __s20local0 = __dep_export_CastleModel.CastleModel.userData.castleList.listOfCastlesWithoutAreaTypesAndEventCamps([__dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_CAPITAL, __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_METROPOL]);
    var __s20local1 = new __dep_export_CastleListVO.CastleListVO();
    if (__s20local0 != null) {
      for (var __s20local2 = 0, __s20local3 = __s20local0; __s20local2 < __s20local3.length; __s20local2++) {
        var __s20local4 = __s20local3[__s20local2];
        if (__s20local4 !== undefined && __s20local4.areaType != __dep_exact_26a421b704832cff_1.WorldConst.AREA_TYPE_CAPITAL && __s20local4.kingdomID != __dep_exact_26a421b704832cff_2.WorldIsland.KINGDOM_ID && __s20local4.controllerWorldMapOwnerInfoVO.playerID == __dep_export_CastleModel.CastleModel.userData.playerID) {
          __s20local1.addCastle(__s20local4, __s20local4.kingdomID);
        }
      }
    }
    this._castleSelector.initComponent(__dep_export_CastleModel.CastleModel.otherPlayerData.getOwnInfoVO(), __s20local1);
    this._castleSelector.castleList.disp.addEventListener(__dep_exact_9e901e8e2483a22f.BasicComboboxEvent.COMBOBOXCHANGE, this.bindFunction(this.onSelectCastle));
    this.onSelectCastle();
    this.controller.addEventListener(__dep_export_AreaDataEvent.AreaDataEvent.ON_RESOURCES_CHANGED, this.bindFunction(this.onChangeRessources));
    if (this._woodDonator) {
      this._woodDonator.selectionSlider.setSelectedIndex(0);
    }
    if (this._stoneDonator) {
      this._stoneDonator.selectionSlider.setSelectedIndex(0);
    }
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.dialogDisp.btn_ok, false);
    this.setValues(this._bonusWood, this._bonusStone);
  };
  CastleColossusDonateDialog.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    this.initCollectorListeners();
  };
  CastleColossusDonateDialog.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveSpecialEvent));
    this.removeCollectorListeners();
  };
  CastleColossusDonateDialog.prototype.onClick = function (__s32param0) {
    __s1param0.prototype.onClick.call(this, __s32param0);
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s32param0.target)) {
      switch (__s32param0.target) {
        case this.dialogDisp.btn_cancel:
        case this.dialogDisp.btn_close:
          this.hide();
          break;
        case this.dialogDisp.btn_ok:
          this.onDonate();
      }
    }
  };
  CastleColossusDonateDialog.prototype.onDonate = function () {
    if (this._woodDonator.getSelectedAmount() > 0 || this._stoneDonator.getSelectedAmount() > 0) {
      __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SColossusDepositResourcesVO.C2SColossusDepositResourcesVO(this._castleSelector.selectedCastleVO.objectId, this._castleSelector.selectedCastleVO.kingdomID, this._stoneDonator.getSelectedAmount(), this._woodDonator.getSelectedAmount()));
      this.donateButton.enableButton = false;
    }
  };
  Object.defineProperty(CastleColossusDonateDialog.prototype, "donateButton", {
    get: function () {
      return this.dialogDisp.btn_ok.basicButton;
    },
    enumerable: true,
    configurable: true
  });
  CastleColossusDonateDialog.prototype.onSelectCastle = function (__s41param0 = null) {
    __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SGetCastleResourcesVO.C2SGetCastleResourcesVO(this._castleSelector.selectedCastleVO.objectId, this._castleSelector.selectedCastleVO.kingdomID));
    this.resetComponents();
  };
  CastleColossusDonateDialog.prototype.resetComponents = function () {
    this._woodDonator.resetValue();
    this._stoneDonator.resetValue();
    this._bonusStone = this._bonusWood = 0;
    this.setValues(0, 0);
  };
  CastleColossusDonateDialog.prototype.onChangeRessources = function (__s45param0 = null) {
    var __s45local0 = __dep_exact_81dacdf05bd32292.castAs(__s45param0.params[0], "CastleResourcesVO");
    if (__s45local0 && __s45local0.castleID == this._castleSelector.selectedCastleVO.objectId) {
      var __s45local1 = __dep_exact_f855840627e6e145.int(this._woodDonator ? this._woodDonator.getSelectedAmount() : 0);
      var __s45local2 = __dep_exact_f855840627e6e145.int(this._stoneDonator ? this._stoneDonator.getSelectedAmount() : 0);
      this._castleResourcesVO = __s45local0;
      var __s45local3 = __dep_exact_f855840627e6e145.int(this._castleResourcesVO.resources.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.WOOD));
      var __s45local4 = __dep_exact_f855840627e6e145.int(this._castleResourcesVO.resources.getAmountOrDefaultByType(__dep_export_CollectableEnum.CollectableEnum.STONE));
      this._woodDonator.initComponent(__s45local3, __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.WOOD, 51);
      this._woodDonator.selectionSlider.setSelectedIndex(Math.min(__s45local3, __s45local1));
      this._stoneDonator.initComponent(__s45local4, __dep_export_CastleResourceCollectorComponent.CastleResourceCollectorComponent.STONE, 52);
      this._stoneDonator.selectionSlider.setSelectedIndex(Math.min(__s45local4, __s45local2));
    }
  };
  CastleColossusDonateDialog.prototype.onRemoveSpecialEvent = function (__s48param0) {
    if (__s48param0.specialEventVO.eventType == "Colossus") {
      this.hide();
    }
  };
  CastleColossusDonateDialog.prototype.setTexts = function () {
    this.dialogDisp.btn_ok.toolTipText = {
      t: "colossus_donate_minPoints",
      p: [0]
    };
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("colossus_donateResource_title"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_label_points, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("colossus_donateResource_labelPoints"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_copy_donate, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("colossus_donateResource_copy", [CastleColossusDonateDialog.WOOD_EQUIVALENT_MIN_DECO, CastleColossusDonateDialog.STONE_EQUIVALENT_MIN_DECO, CastleColossusDonateDialog.MIN_DECO_DEPOSIT]));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_from, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_startAttack_from"));
  };
  CastleColossusDonateDialog.prototype.setValues = function (__s53param0, __s53param1) {
    var __s53local0 = __dep_exact_81dacdf05bd32292.castAs(__dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByAnyEventId(__dep_export_ClientConstEvent.ClientConstEvent.COLOSSUS_EVENTS), "ColossusEventVO");
    if (__s53local0) {
      if (__s53param0 > 0 || __s53param1 > 0) {
        var __s53local1 = __dep_exact_f855840627e6e145.int(__dep_exact_26a421b704832cff.ColossusConst.calcResourcePointsForResources(__s53param0, __s53param1) * __s53local0.getConversionRateForEvent());
        this.itxtpoint.textContentVO.stringValue = this._points + " (+ " + __s53local1 + ")";
        if (this._points >= __dep_exact_26a421b704832cff.ColossusConst.MIN_POINTS && (__s53param0 > 0 || __s53param1 > 0) || this._points == 0 && __s53local1 >= __dep_exact_26a421b704832cff.ColossusConst.MIN_POINTS) {
          this.donateButton.enableButton = true;
          this.dialogDisp.btn_ok.toolTipText = null;
        } else {
          this.donateButton.enableButton = false;
          this.dialogDisp.btn_ok.toolTipText = {
            t: "colossus_donate_minPoints",
            p: [__dep_exact_26a421b704832cff.ColossusConst.MIN_POINTS]
          };
        }
      } else {
        this.itxtpoint.textContentVO.stringValue = String(this._points);
        this.donateButton.enableButton = false;
        if (this._points >= __dep_exact_26a421b704832cff.ColossusConst.MIN_POINTS) {
          this.dialogDisp.btn_ok.toolTipText = {
            t: "colossus_donate_minWoodStone"
          };
        } else {
          this.dialogDisp.btn_ok.toolTipText = {
            t: "colossus_donate_minPoints",
            p: [__dep_exact_26a421b704832cff.ColossusConst.MIN_POINTS]
          };
        }
      }
    } else {
      this.hide();
    }
  };
  CastleColossusDonateDialog.__initialize_static_members = function () {
    CastleColossusDonateDialog.NAME = "CastleColossusDonateDialog";
    CastleColossusDonateDialog.WOOD_EQUIVALENT_MIN_DECO = 500;
    CastleColossusDonateDialog.STONE_EQUIVALENT_MIN_DECO = 340;
    CastleColossusDonateDialog.MIN_DECO_DEPOSIT = 10;
  };
  return CastleColossusDonateDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleColossusDonateDialog = __s0local1;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CastleListVO = require("gge-module:export_CastleListVO");
var __dep_export_CastleResourceCollectorComponent = require("gge-module:export_CastleResourceCollectorComponent");
var __dep_export_CastleSelectorComponent = require("gge-module:export_CastleSelectorComponent");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
