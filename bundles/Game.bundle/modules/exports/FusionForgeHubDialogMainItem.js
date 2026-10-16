Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstFusion = require("gge-module:export_ClientConstFusion");
var __dep_export_FusionForgeEvent = require("gge-module:export_FusionForgeEvent");
var __dep_export_CastleItemRenderer = require("gge-module:export_CastleItemRenderer");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function FusionForgeHubDialogMainItem(__s3param0, __s3param1, __s3param2, __s3param3) {
    var __s3local0 = this;
    __s3local0._forgeId = 0;
    __s3local0._showDetailedInfo = false;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this)._forgeId = __s3param1;
    __s3local0._forgeDialog = __s3param2;
    __s3local0._forgeDialogOpenedFunc = __s3param3;
    __s3local0.init();
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FusionForgeHubDialogMainItem, __s1param0);
  FusionForgeHubDialogMainItem.prototype.init = function () {
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.infoBtn);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.infoMc, 1);
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.disp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_fusionHub_fusionForges_title"));
    this.disp.mc_info.mouseChildren = false;
  };
  FusionForgeHubDialogMainItem.prototype.addEventListener = function () {
    __s1param0.prototype.addEventListener.call(this);
    this.disp.addEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.addEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED, this.bindFunction(this.onEnergyUpdated));
    __dep_export_CastleComponent.CastleComponent.controller.addEventListener(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FORGE_ENERGY_RECHARGED, this.bindFunction(this.onEnergyUpdated));
  };
  FusionForgeHubDialogMainItem.prototype.removeEventListener = function () {
    this.disp.removeEventListener(__s0local0.MOUSE_DOWN, this.bindFunction(this.onMouseDown));
    this.disp.removeEventListener(__s0local0.MOUSE_UP, this.bindFunction(this.onMouseUp));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FUSION_FORGE_INFO_UPDATED, this.bindFunction(this.onEnergyUpdated));
    __dep_export_CastleComponent.CastleComponent.controller.removeEventListener(__dep_export_FusionForgeEvent.FusionForgeEvent.ON_FORGE_ENERGY_RECHARGED, this.bindFunction(this.onEnergyUpdated));
    __s1param0.prototype.removeEventListener.call(this);
  };
  FusionForgeHubDialogMainItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this._showDetailedInfo = false;
    this.update();
  };
  FusionForgeHubDialogMainItem.prototype.update = function () {
    this.mainMc.visible = !this._showDetailedInfo;
    this.detailMc.visible = this._showDetailedInfo;
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.infoMc.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(this.getNameTextId())).autoFitToBounds = true;
    var __s13local0 = __dep_export_CastleModel.CastleModel.fusionForgeData.getForge(this._forgeId);
    if (this._showDetailedInfo) {
      var __s13local1 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.currencyData.getAmountById(__dep_export_CastleModel.CastleModel.fusionForgeData.xml.getFusionForge(this._forgeId).dustCurrencyID));
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.detailMc.txt_level_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("forgeLevel")).autoFitToBounds = true;
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.detailMc.txt_level, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s13local0.level)).autoFitToBounds = true;
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.detailMc.txt_dust, new __dep_exact_92d05af59ee2ff30.LocalizedNumberVO(__s13local1)).autoFitToBounds = true;
      __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.detailMc.txt_hint, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("forgeLevel_available", [__dep_export_ClientConstFusion.ClientConstFusion.getAvailableLevelUps(__s13local0.level, __s13local1)])).autoFitToBounds = true;
    } else {
      this.mainMc.mc_icon.gotoAndStop(this._forgeId);
      var __s13local2 = __s13local0.currentEnergy;
      var __s13local3 = __s13local0.getFullEnergy();
      var __s13local4 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(this.mainMc.txt_amount, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("value_proportional_value", [__s13local2, __s13local3]));
      __s13local4.autoFitToBounds = true;
      __s13local4.color = __s13local2 >= __s13local3 ? __dep_export_ClientConstColor.ClientConstColor.MODERN_GREEN : __dep_export_ClientConstColor.ClientConstColor.MODERN_DEFAULT;
    }
    this.updateInfoButtonState();
    this.downStateMc.visible = false;
  };
  FusionForgeHubDialogMainItem.prototype.updateInfoButtonState = function () {
    this.infoBtn.gotoAndStop(__dep_exact_f855840627e6e145.int(this._showDetailedInfo ? 4 : 1));
  };
  FusionForgeHubDialogMainItem.prototype.getNameTextId = function () {
    switch (this._forgeId) {
      case __dep_exact_26a421b704832cff.FusionConst.DECORATION_FORGE_ID:
        return "dialog_fusionHub_fusionForges_deco";
      default:
        return "";
    }
  };
  FusionForgeHubDialogMainItem.prototype.onClick = function (__s22param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s22param0.target)) {
      __s1param0.prototype.onClick.call(this, __s22param0);
      switch (__s22param0.target) {
        case this.infoBtn:
          this._showDetailedInfo = !this._showDetailedInfo;
          this.update();
          break;
        case this.disp.mc_info:
          if (this._forgeDialog) {
            __dep_export_CastleComponent.CastleComponent.dialogHandler.registerDefaultDialogs(this._forgeDialog);
            if (this._forgeDialogOpenedFunc) {
              this._forgeDialogOpenedFunc();
            }
          }
      }
    }
  };
  FusionForgeHubDialogMainItem.prototype.onMouseOver = function (__s28param0) {
    __s1param0.prototype.onMouseOver.call(this, __s28param0);
    if (__s28param0.target == this.infoBtn) {
      this.infoBtn.gotoAndStop(2);
    }
  };
  FusionForgeHubDialogMainItem.prototype.onMouseOut = function (__s31param0) {
    __s1param0.prototype.onMouseOut.call(this, __s31param0);
    switch (__s31param0.target) {
      case this.infoBtn:
        this.updateInfoButtonState();
        break;
      default:
        this.downStateMc.visible = false;
    }
  };
  FusionForgeHubDialogMainItem.prototype.onMouseDown = function (__s34param0) {
    switch (__s34param0.target) {
      case this.infoBtn:
        this.infoBtn.gotoAndStop(3);
        break;
      case this.infoMc:
        this.downStateMc.visible = true;
    }
  };
  FusionForgeHubDialogMainItem.prototype.onMouseUp = function (__s37param0) {
    switch (__s37param0.target) {
      case this.infoBtn:
        this.updateInfoButtonState();
        break;
      case this.infoMc:
        this.downStateMc.visible = false;
    }
  };
  FusionForgeHubDialogMainItem.prototype.onEnergyUpdated = function (__s40param0) {
    this.update();
  };
  Object.defineProperty(FusionForgeHubDialogMainItem.prototype, "infoBtn", {
    get: function () {
      return this.disp.btn_info;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeHubDialogMainItem.prototype, "infoMc", {
    get: function () {
      return this.disp.mc_info;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeHubDialogMainItem.prototype, "detailMc", {
    get: function () {
      return this.infoMc.mc_detail;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeHubDialogMainItem.prototype, "mainMc", {
    get: function () {
      return this.infoMc.mc_main;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(FusionForgeHubDialogMainItem.prototype, "downStateMc", {
    get: function () {
      return this.infoMc.mc_downState;
    },
    enumerable: true,
    configurable: true
  });
  return FusionForgeHubDialogMainItem;
}(__dep_export_CastleItemRenderer.CastleItemRenderer);
exports.FusionForgeHubDialogMainItem = __s0local1;
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
