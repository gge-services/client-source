Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ClientConstQuestCondition = require("gge-module:export_ClientConstQuestCondition");
var __dep_export_ClientConstCurrency = require("gge-module:export_ClientConstCurrency");
var __dep_export_C2SQuestDonateCurrencyVO = require("gge-module:export_C2SQuestDonateCurrencyVO");
var __dep_export_C2SQuestDonateRessourcesVO = require("gge-module:export_C2SQuestDonateRessourcesVO");
var __s0local0 = function (__s1param0) {
  function DonateForQuestCommand() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(DonateForQuestCommand, __s1param0);
  DonateForQuestCommand.prototype.execute = function (__s5param0 = null) {
    this.questVO = __s5param0[0];
    this.conditionVO = __s5param0[1];
    this.onYesFunc = __s5param0.length > 1 ? __s5param0[2] : null;
    this.onNoFunc = __s5param0.length > 2 ? __s5param0[3] : null;
    if (this.questVO && this.conditionVO) {
      var __s5local0 = this.conditionVO.conditionMaxCounter;
      var __s5local1 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_questbook_donateCheck_copy", [__s5local0, this.getCollectableVO().getNameTextId()]);
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_ModernYesNoDialog.ModernYesNoDialog, new __dep_exact_9e901e8e2483a22f_1.BasicStandardYesNoDialogProperties("dialog_questbook_donateCheck_title", __s5local1, this.bindFunction(this.performAction), this.bindFunction(this.onNoFunc)));
    }
  };
  DonateForQuestCommand.prototype.getCollectableVO = function () {
    switch (this.conditionVO.conditionType) {
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_FOOD:
        return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.FOOD);
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_WOOD:
        return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.WOOD);
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_STONE:
        return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.STONE);
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_C1:
        return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.C1);
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_COAL:
        return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.COAL);
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_OIL:
        return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.OIL);
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_GLASS:
        return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GLASS);
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_IRON:
        return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.IRON);
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_KHAN_MEDALS:
        return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 0, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_KHAN_MEDAL);
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_SAMURAI_TOKENS:
        return __dep_export_CollectableHelper.CollectableHelper.createVO(__dep_export_CollectableEnum.CollectableEnum.GENERIC_CURRENCY, 0, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SAMURAI_TOKEN);
    }
    return null;
  };
  DonateForQuestCommand.prototype.performAction = function (__s11param0 = null) {
    var __s11local0 = this.conditionVO.conditionMaxCounter;
    switch (this.conditionVO.conditionType) {
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_FOOD:
        this.controller.sendCommandVOAndWait(new __dep_export_C2SQuestDonateRessourcesVO.C2SQuestDonateRessourcesVO(this.questVO.questID, __s11local0));
        break;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_WOOD:
        this.controller.sendCommandVOAndWait(new __dep_export_C2SQuestDonateRessourcesVO.C2SQuestDonateRessourcesVO(this.questVO.questID, 0, __s11local0));
        break;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_STONE:
        this.controller.sendCommandVOAndWait(new __dep_export_C2SQuestDonateRessourcesVO.C2SQuestDonateRessourcesVO(this.questVO.questID, 0, 0, __s11local0));
        break;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_C1:
        this.controller.sendCommandVOAndWait(new __dep_export_C2SQuestDonateRessourcesVO.C2SQuestDonateRessourcesVO(this.questVO.questID, 0, 0, 0, __s11local0));
        break;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_COAL:
        this.controller.sendCommandVOAndWait(new __dep_export_C2SQuestDonateRessourcesVO.C2SQuestDonateRessourcesVO(this.questVO.questID, 0, 0, 0, 0, __s11local0));
        break;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_OIL:
        this.controller.sendCommandVOAndWait(new __dep_export_C2SQuestDonateRessourcesVO.C2SQuestDonateRessourcesVO(this.questVO.questID, 0, 0, 0, 0, 0, __s11local0));
        break;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_GLASS:
        this.controller.sendCommandVOAndWait(new __dep_export_C2SQuestDonateRessourcesVO.C2SQuestDonateRessourcesVO(this.questVO.questID, 0, 0, 0, 0, 0, 0, __s11local0));
        break;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_IRON:
        this.controller.sendCommandVOAndWait(new __dep_export_C2SQuestDonateRessourcesVO.C2SQuestDonateRessourcesVO(this.questVO.questID, 0, 0, 0, 0, 0, 0, 0, __s11local0));
        break;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_KHAN_MEDALS:
        this.controller.sendCommandVOAndWait(new __dep_export_C2SQuestDonateCurrencyVO.C2SQuestDonateCurrencyVO(this.questVO.questID, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_KHAN_MEDAL, __s11local0));
        break;
      case __dep_export_ClientConstQuestCondition.ClientConstQuestCondition.QUESTTYPE_DONATE_SAMURAI_TOKENS:
        this.controller.sendCommandVOAndWait(new __dep_export_C2SQuestDonateCurrencyVO.C2SQuestDonateCurrencyVO(this.questVO.questID, __dep_export_ClientConstCurrency.ClientConstCurrency.ID_SAMURAI_TOKEN, __s11local0));
    }
    if (this.onYesFunc) {
      this.onYesFunc(__s11param0);
    }
  };
  Object.defineProperty(DonateForQuestCommand.prototype, "controller", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f_2.BasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return DonateForQuestCommand;
}(__dep_exact_9e901e8e2483a22f.SimpleCommand);
exports.DonateForQuestCommand = __s0local0;
var __dep_export_CollectableEnum = require("gge-module:export_CollectableEnum");
var __dep_export_CollectableHelper = require("gge-module:export_CollectableHelper");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_ModernYesNoDialog = require("gge-module:export_ModernYesNoDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ISimpleCommand");
