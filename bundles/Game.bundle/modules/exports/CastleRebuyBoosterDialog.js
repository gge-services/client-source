Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_2 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCharacter = require("gge-module:export_ClientConstCharacter");
var __dep_export_ClientConstColor = require("gge-module:export_ClientConstColor");
var __dep_export_ClientConstTextIds = require("gge-module:export_ClientConstTextIds");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_CharacterHelper = require("gge-module:export_CharacterHelper");
var __s0local0 = function (__s1param0) {
  function CastleRebuyBoosterDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, new Library.CastleInterfaceElements.CastleRebuyBooster()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleRebuyBoosterDialog, __s1param0);
  CastleRebuyBoosterDialog.prototype.init = function () {
    this.showBackground = true;
    __s1param0.prototype.init.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_rebuyBoost_title"));
    this.itxt_desc = this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO("dialog_rebuyBoost_desc"));
    this.itxt_percent = this.textFieldManager.registerTextField(this.dialogDisp.mc_percent.txt_percent, new __dep_exact_92d05af59ee2ff30_2.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_PERCENTAGE_SUBTRACT, [0]));
    this.itxt_cost = this.textFieldManager.registerTextField(this.dialogDisp.mc_costs.txt_value, new __dep_exact_92d05af59ee2ff30_1.LocalizedNumberVO(0));
  };
  CastleRebuyBoosterDialog.prototype.applyProperties = function () {
    this.itxt_desc.textContentVO.textReplacements = this.getTextReplacements();
    this.itxt_percent.textContentVO.textReplacements = [String(__dep_exact_26a421b704832cff.BoosterConst.DISCOUNT_FACTOR * 100)];
    this.itxt_cost.textContentVO.numberValue = Number(this.dialogProperties.heroBoosterShopVO.costString);
    this.itxt_cost.color = __dep_export_CastleModel.CastleModel.currencyData.c2Amount >= this.dialogProperties.heroBoosterShopVO.finalCostsC2 ? __dep_export_ClientConstColor.ClientConstColor.FONT_DEFAULT_COLOR : __dep_export_ClientConstColor.ClientConstColor.FONT_INSUFFICIENT_COLOR;
    this.dialogDisp.mc_costs.toolTipText = __dep_export_ClientConstTextIds.ClientConstTextIds.C2;
    this.dialogDisp.mc_percent.toolTipText = "dialog_rebuyBoost_percentTooltip";
    var __s7local0 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_GENERAL);
    switch (this.dialogProperties.heroBoosterShopVO.id) {
      case __dep_exact_26a421b704832cff.BoosterConst.OVERSEER_FOOD:
      case __dep_exact_26a421b704832cff.BoosterConst.OVERSEER_STONE:
      case __dep_exact_26a421b704832cff.BoosterConst.OVERSEER_WOOD:
      case __dep_exact_26a421b704832cff.BoosterConst.OVERSEER_MEAD:
      case __dep_exact_26a421b704832cff.BoosterConst.OVERSEER_HONEY:
      case __dep_exact_26a421b704832cff.BoosterConst.OVERSEER_BEEF:
        __s7local0 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_OVERSEER);
        break;
      case __dep_exact_26a421b704832cff.BoosterConst.MARAUDER:
        __s7local0 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_MARAUDER);
        break;
      case __dep_exact_26a421b704832cff.BoosterConst.TAX:
        __s7local0 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_TAXCOLLECTOR);
        break;
      case __dep_exact_26a421b704832cff.BoosterConst.INSTRUCTOR:
        __s7local0 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_INSTRUCTOR);
        break;
      case __dep_exact_26a421b704832cff.BoosterConst.CARAVAN_OVERLOADER:
        __s7local0 = __dep_exact_f855840627e6e145.int(__dep_export_ClientConstCharacter.ClientConstCharacter.CHAR_ID_MERCHANT);
    }
    __dep_export_CharacterHelper.CharacterHelper.createCharacterBig(__s7local0, this.dialogDisp.mc_charPlaceHolder, 369.6, 312.65, true);
  };
  CastleRebuyBoosterDialog.prototype.getTextReplacements = function () {
    var __s10local0 = [];
    if (!this.dialogProperties.heroBoosterShopVO) {
      return null;
    }
    switch (this.dialogProperties.heroBoosterShopVO.id) {
      case __dep_exact_26a421b704832cff.BoosterConst.OVERSEER_FOOD:
        __s10local0.push(this.heroNameWithProfession(__dep_export_ClientConstTextIds.ClientConstTextIds.FOOD));
        break;
      case __dep_exact_26a421b704832cff.BoosterConst.OVERSEER_STONE:
        __s10local0.push(this.heroNameWithProfession(__dep_export_ClientConstTextIds.ClientConstTextIds.STONE));
        break;
      case __dep_exact_26a421b704832cff.BoosterConst.OVERSEER_WOOD:
        __s10local0.push(this.heroNameWithProfession(__dep_export_ClientConstTextIds.ClientConstTextIds.WOOD));
        break;
      case __dep_exact_26a421b704832cff.BoosterConst.OVERSEER_MEAD:
        __s10local0.push(this.heroNameWithProfession("mead"));
        break;
      case __dep_exact_26a421b704832cff.BoosterConst.OVERSEER_HONEY:
        __s10local0.push(this.heroNameWithProfession("honey"));
        break;
      case __dep_exact_26a421b704832cff.BoosterConst.OVERSEER_BEEF:
        __s10local0.push(this.heroNameWithProfession("beef"));
        break;
      default:
        __s10local0.push(this.dialogProperties.heroBoosterShopVO.heroName);
    }
    return __s10local0;
  };
  CastleRebuyBoosterDialog.prototype.heroNameWithProfession = function (__s14param0) {
    var __s14local0 = this.dialogProperties.heroBoosterShopVO.heroName;
    var __s14local1 = __dep_exact_92d05af59ee2ff30.Localize.text(__s14param0);
    return __dep_exact_92d05af59ee2ff30.Localize.text(__dep_exact_9e901e8e2483a22f_2.GenericTextIds.VALUE_WITH_BRACES, [__s14local0, __s14local1]);
  };
  CastleRebuyBoosterDialog.prototype.show = function () {
    __s1param0.prototype.show.call(this);
    if (!this.dialogProperties.heroBoosterShopVO.hasRebuyDiscount) {
      this.hide();
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleStandardOkDialog.CastleStandardOkDialog, new __dep_exact_9e901e8e2483a22f.BasicStandardOkDialogProperties("", __dep_exact_92d05af59ee2ff30.Localize.text("alert_message_is_not_available")));
    }
  };
  CastleRebuyBoosterDialog.prototype.onClick = function (__s19param0) {
    switch (__s19param0.target) {
      case this.dialogDisp.btn_yes:
        __dep_exact_9e901e8e2483a22f_1.CommandController.instance.executeCommand(__dep_export_IngameClientCommands.IngameClientCommands.OPEN_BUY_BOOSTER_COMMAND, this.dialogProperties.heroBoosterShopVO);
        this.hide();
        break;
      case this.dialogDisp.btn_no:
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  Object.defineProperty(CastleRebuyBoosterDialog.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleRebuyBoosterDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleRebuyBoosterDialog.__initialize_static_members = function () {
    CastleRebuyBoosterDialog.NAME = "CastleRebuyBoosterDialog";
  };
  return CastleRebuyBoosterDialog;
}(require("gge-module:export_CastleDialog").CastleDialog);
exports.CastleRebuyBoosterDialog = __s0local0;
var __dep_export_IngameClientCommands = require("gge-module:export_IngameClientCommands");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleStandardOkDialog = require("gge-module:export_CastleStandardOkDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
