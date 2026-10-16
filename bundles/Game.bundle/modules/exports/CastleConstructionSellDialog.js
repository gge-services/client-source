Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_C2SellBuildingDeco = require("gge-module:export_C2SellBuildingDeco");
var __dep_export_C2SellStoredDeco = require("gge-module:export_C2SellStoredDeco");
var __dep_export_TextHelper = require("gge-module:export_TextHelper");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CastleLayoutManager = require("gge-module:export_CastleLayoutManager");
var __dep_export_ClickFeedbackButtonHover = require("gge-module:export_ClickFeedbackButtonHover");
var __dep_export_ModernSliderScrollComponent = require("gge-module:export_ModernSliderScrollComponent");
var __dep_export_SimpleScrollVO = require("gge-module:export_SimpleScrollVO");
var __dep_export_SimpleScrollStrategyHorizontal = require("gge-module:export_SimpleScrollStrategyHorizontal");
var __dep_export_DecoBuildingToolTipManager = require("gge-module:export_DecoBuildingToolTipManager");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleBuildingInfoDialog = require("gge-module:export_CastleBuildingInfoDialog");
var __dep_export_CastleBuildingInfoDialogProperties = require("gge-module:export_CastleBuildingInfoDialogProperties");
var __dep_export_CastleExternalDialog = require("gge-module:export_CastleExternalDialog");
var __s0local0 = createjs.Point;
var __s0local1 = function (__s1param0) {
  function CastleConstructionSellDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleConstructionSellDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleConstructionSellDialog, __s1param0);
  CastleConstructionSellDialog.prototype.initLoaded = function (__s5param0 = null) {
    this.initBasicButtons([this.dialogDisp.mc_item.btn_info]);
    __dep_export_ButtonHelper.ButtonHelper.initButtons([this.dialogDisp.btnCancel, this.dialogDisp.btnConfirm, this.dialogDisp.btnClose], __dep_export_ClickFeedbackButtonHover.ClickFeedbackButtonHover);
    this.textFieldManager.registerTextField(this.dialogDisp.tfTitle, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId("dialog_decoSale_title")));
    this._scrollComponent = new __dep_export_ModernSliderScrollComponent.ModernSliderScrollComponent(new __dep_export_SimpleScrollVO.SimpleScrollVO().initByParent(this.dialogDisp).addSliderButton(this.dialogDisp.mc_slider.btn_slider).addSliderLine(this.dialogDisp.mc_slider.sliderBar).addMaxButton(this.dialogDisp.btn_max).addMinusButton(this.dialogDisp.amountPicker.btn_left).addPlusButton(this.dialogDisp.amountPicker.btn_right).addMouseWheelElements([this.dialogDisp]).addVisualElements([this.dialogDisp.amountPicker]), new __dep_export_SimpleScrollStrategyHorizontal.SimpleScrollStrategyHorizontal(true));
    __s1param0.prototype.initLoaded.call(this);
  };
  CastleConstructionSellDialog.prototype.onValueChange = function (__s7param0 = null) {
    this.updateCostText();
    this.dialogDisp.mc_slider.mc_sliderLineFill.width = this.dialogDisp.mc_slider.btn_slider.x;
    this.textFieldManager.registerTextField(this.dialogDisp.amountPicker.txt_pick, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(this._scrollComponent.currentValue));
  };
  CastleConstructionSellDialog.prototype.fillCurrencyContainer = function () {
    if (this.buildingVO.sellBuildingVO.hasCosts) {
      if (this.buildingVO.sellBuildingVO.list.length == 1) {
        this.dialogDisp.mc_reward.item1_0.visible = true;
        this.dialogDisp.mc_reward.item2_0.visible = false;
        this.dialogDisp.mc_reward.item2_1.visible = false;
        this.dialogDisp.mc_reward.item3_0.visible = false;
        this.dialogDisp.mc_reward.item3_1.visible = false;
        this.dialogDisp.mc_reward.item3_2.visible = false;
        this.fillCostContainer(this.dialogDisp.mc_reward.item1_0, this.buildingVO.sellBuildingVO.list[0]);
      } else if (this.buildingVO.sellBuildingVO.list.length == 2) {
        this.dialogDisp.mc_reward.item1_0.visible = false;
        this.dialogDisp.mc_reward.item2_0.visible = true;
        this.dialogDisp.mc_reward.item2_1.visible = true;
        this.dialogDisp.mc_reward.item3_0.visible = false;
        this.dialogDisp.mc_reward.item3_1.visible = false;
        this.dialogDisp.mc_reward.item3_2.visible = false;
        this.fillCostContainer(this.dialogDisp.mc_reward.item2_0, this.buildingVO.sellBuildingVO.list[0]);
        this.fillCostContainer(this.dialogDisp.mc_reward.item2_1, this.buildingVO.sellBuildingVO.list[1]);
      } else {
        this.dialogDisp.mc_reward.item1_0.visible = false;
        this.dialogDisp.mc_reward.item2_0.visible = false;
        this.dialogDisp.mc_reward.item2_1.visible = false;
        this.dialogDisp.mc_reward.item3_0.visible = true;
        this.dialogDisp.mc_reward.item3_1.visible = true;
        this.dialogDisp.mc_reward.item3_2.visible = true;
        this.fillCostContainer(this.dialogDisp.mc_reward.item3_0, this.buildingVO.sellBuildingVO.list[0]);
        this.fillCostContainer(this.dialogDisp.mc_reward.item3_1, this.buildingVO.sellBuildingVO.list[1]);
        this.fillCostContainer(this.dialogDisp.mc_reward.item3_2, this.buildingVO.sellBuildingVO.list[2]);
      }
    }
  };
  CastleConstructionSellDialog.prototype.updateCostText = function () {
    if (this.buildingVO.sellBuildingVO.list.length == 1) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.item1_0.txt_copy, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(this.buildingVO.sellBuildingVO.list[0].amount * this._scrollComponent.currentValue, {
        compactThreshold: 1000000
      }));
    } else if (this.buildingVO.sellBuildingVO.list.length == 2) {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.item2_0.txt_copy, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(this.buildingVO.sellBuildingVO.list[0].amount * this._scrollComponent.currentValue, {
        compactThreshold: 1000000
      }));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.item2_1.txt_copy, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(this.buildingVO.sellBuildingVO.list[1].amount * this._scrollComponent.currentValue, {
        compactThreshold: 1000000
      }));
    } else {
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.item3_0.txt_copy, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(this.buildingVO.sellBuildingVO.list[0].amount * this._scrollComponent.currentValue, {
        compactThreshold: 1000000
      }));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.item3_1.txt_copy, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(this.buildingVO.sellBuildingVO.list[1].amount * this._scrollComponent.currentValue, {
        compactThreshold: 1000000
      }));
      this.textFieldManager.registerTextField(this.dialogDisp.mc_reward.item3_2.txt_copy, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(this.buildingVO.sellBuildingVO.list[2].amount * this._scrollComponent.currentValue, {
        compactThreshold: 1000000
      }));
    }
  };
  CastleConstructionSellDialog.prototype.fillCostContainer = function (__s20param0, __s20param1) {
    __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(new __dep_export_CollectableRenderClips.CollectableRenderClips().addIconMc(__s20param0.mc_icon), __s20param1, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ICON, new __s0local0(26, 26)));
    __s20param0.toolTipText = __s20param1.getTooltipTextId();
  };
  CastleConstructionSellDialog.prototype.applyPropertiesLoaded = function (__s22param0 = null) {
    this.fillSlotContainer(this.buildingVO);
    this.textFieldManager.registerTextField(this.dialogDisp.tfName, new __dep_exact_92d05af59ee2ff30.TextVO(__dep_export_TextHelper.TextHelper.toUpperCaseLocaSafeTextId(this.buildingVO.getNameString()))).autoFitToBounds = true;
    this.fillCurrencyContainer();
    this.updateCostText();
    var __s22local0 = __dep_exact_f855840627e6e145.int(this.dialogProperties.basicBuilding ? 1 : __dep_export_CastleModel.CastleModel.decoStorage.getCurrentStorage().getAmount(this.buildingVO.wodId));
    this._scrollComponent.init(1, __s22local0, 1, 1);
    this._scrollComponent.scrollToValue(1);
  };
  CastleConstructionSellDialog.prototype.fillSlotContainer = function (__s24param0) {
    if (__s24param0) {
      __dep_export_WodPicHelper.WodPicHelper.addWodPic(__s24param0, this.dialogDisp.mc_item.mc_icon, 130, 130, "", true);
      this.dialogDisp.mc_item.mc_buildingLevel.visible = __s24param0.level > 1;
      this.textFieldManager.registerTextField(this.dialogDisp.mc_item.mc_buildingLevel.txt_value, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s24param0.level));
    }
  };
  CastleConstructionSellDialog.prototype.showLoaded = function (__s27param0 = null) {
    __s1param0.prototype.showLoaded.call(this, __s27param0);
    this._scrollComponent.onScrollSignal.add(this.bindFunction(this.onValueChange));
    this._scrollComponent.show();
    this._scrollComponent.scrollToValue(1);
  };
  CastleConstructionSellDialog.prototype.hideLoaded = function (__s29param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    if (this._scrollComponent) {
      this._scrollComponent.onScrollSignal.remove(this.bindFunction(this.onValueChange));
    }
  };
  CastleConstructionSellDialog.prototype.onMouseOver = function (__s32param0) {
    __s1param0.prototype.onMouseOver.call(this, __s32param0);
    if (__s32param0.target == this.dialogDisp.mc_building) {
      __dep_export_DecoBuildingToolTipManager.DecoBuildingToolTipManager.showToolTip(__s32param0.target, this.buildingVO);
    }
  };
  CastleConstructionSellDialog.prototype.onMouseOut = function (__s35param0) {
    __s1param0.prototype.onMouseOut.call(this, __s35param0);
    if (__s35param0.target == this.dialogDisp.mc_building) {
      this.dialogDisp.mc_buildingTooltip.visible = false;
    }
  };
  CastleConstructionSellDialog.prototype.onClick = function (__s38param0) {
    switch (__s38param0.target) {
      case this.dialogDisp.btnCancel:
      case this.dialogDisp.btnClose:
        this.hide();
        break;
      case this.dialogDisp.mc_item.btn_info:
        __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance().showDialog(__dep_export_CastleBuildingInfoDialog.CastleBuildingInfoDialog, new __dep_export_CastleBuildingInfoDialogProperties.CastleBuildingInfoDialogProperties(this.buildingVO));
        break;
      case this.dialogDisp.btnConfirm:
        if (this.dialogProperties.basicBuilding) {
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SellBuildingDeco.C2SellBuildingDeco(this.dialogProperties.basicBuilding.vo.objectId));
        } else {
          __dep_export_CastleModel.CastleModel.smartfoxClient.sendCommandVO(new __dep_export_C2SellStoredDeco.C2SellStoredDeco(this.buildingVO.wodId, this._scrollComponent.currentValue, this.getUniqueId()));
        }
        this.hide();
    }
  };
  CastleConstructionSellDialog.prototype.getUniqueId = function () {
    var __s43local0 = this.buildingVO;
    if (__s43local0) {
      return __s43local0.uniqueBuildingId;
    } else {
      return -1;
    }
  };
  Object.defineProperty(CastleConstructionSellDialog.prototype, "buildingVO", {
    get: function () {
      return this.dialogProperties.buildingVO;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleConstructionSellDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionSellDialog.__initialize_static_members = function () {
    CastleConstructionSellDialog.NAME = "CastleConstructionSell3";
  };
  return CastleConstructionSellDialog;
}(__dep_export_CastleExternalDialog.CastleExternalDialog);
exports.CastleConstructionSellDialog = __s0local1;
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
__s0local1.__initialize_static_members();
