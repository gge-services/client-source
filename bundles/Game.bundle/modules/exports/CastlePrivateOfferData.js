Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_BasicPrivateOfferData = require("gge-module:export_BasicPrivateOfferData");
var __dep_export_OfferDescriptionAdditionalABTestDependency = require("gge-module:export_OfferDescriptionAdditionalABTestDependency");
var __dep_export_OfferDescriptionAdditionalBuildingID = require("gge-module:export_OfferDescriptionAdditionalBuildingID");
var __dep_export_OfferDescriptionAdditionalClientTracking = require("gge-module:export_OfferDescriptionAdditionalClientTracking");
var __dep_export_OfferDescriptionAdditionalIsInviteeConversionOffer = require("gge-module:export_OfferDescriptionAdditionalIsInviteeConversionOffer");
var __dep_export_OfferDescriptionAdditionalIsOneTimeOffer = require("gge-module:export_OfferDescriptionAdditionalIsOneTimeOffer");
var __dep_export_OfferDescriptionAdditionalIsTimeless = require("gge-module:export_OfferDescriptionAdditionalIsTimeless");
var __dep_export_OfferDescriptionAdditionalPackageIDs = require("gge-module:export_OfferDescriptionAdditionalPackageIDs");
var __dep_export_OfferDescriptionAdditionalPrimeSaleSkipBuilding = require("gge-module:export_OfferDescriptionAdditionalPrimeSaleSkipBuilding");
var __dep_export_OfferDescriptionCostResources = require("gge-module:export_OfferDescriptionCostResources");
var __dep_export_OfferDescriptionVisualEuroAmount = require("gge-module:export_OfferDescriptionVisualEuroAmount");
var __dep_export_OfferQuestConditionIntegerPlayerLevel = require("gge-module:export_OfferQuestConditionIntegerPlayerLevel");
var __dep_export_OfferQuestConditionPaymentMinWithUpdate = require("gge-module:export_OfferQuestConditionPaymentMinWithUpdate");
var __dep_export_OfferQuestConditionPayUser = require("gge-module:export_OfferQuestConditionPayUser");
var __s0local0 = function (__s1param0) {
  function CastlePrivateOfferData() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastlePrivateOfferData, __s1param0);
  CastlePrivateOfferData.prototype.initOfferDescriptions = function () {
    __s1param0.prototype.initOfferDescriptions.call(this);
    this.registerOfferDescription(new __dep_export_OfferDescriptionCostResources.OfferDescriptionCostResources());
    this.registerOfferAdditionalParameter(new __dep_export_OfferDescriptionAdditionalPackageIDs.OfferDescriptionAdditionalPackageIDs());
    this.registerOfferAdditionalParameter(new __dep_export_OfferDescriptionAdditionalPrimeSale.OfferDescriptionAdditionalPrimeSale());
    this.registerOfferAdditionalParameter(new __dep_export_OfferDescriptionAdditionalPrimeSaleUpgrade.OfferDescriptionAdditionalPrimeSaleUpgrade());
    this.registerOfferAdditionalParameter(new __dep_export_OfferDescriptionAdditionalPrimeSaleSkipBuilding.OfferDescriptionAdditionalPrimeSaleSkipBuilding());
    this.registerOfferAdditionalParameter(new __dep_export_OfferDescriptionAdditionalBuildingID.OfferDescriptionAdditionalBuildingID());
    this.registerOfferAdditionalParameter(new __dep_export_OfferDescriptionAdditionalIsTimeless.OfferDescriptionAdditionalIsTimeless());
    this.registerOfferAdditionalParameter(new __dep_export_OfferDescriptionAdditionalIsInviteeConversionOffer.OfferDescriptionAdditionalIsInviteeConversionOffer());
    this.registerOfferAdditionalParameter(new __dep_export_OfferDescriptionAdditionalClientTracking.OfferDescriptionAdditionalClientTracking());
    this.registerOfferAdditionalParameter(new __dep_export_OfferDescriptionAdditionalABTestDependency.OfferDescriptionAdditionalABTestDependency());
    this.registerOfferAdditionalParameter(new __dep_export_OfferDescriptionAdditionalIsOneTimeOffer.OfferDescriptionAdditionalIsOneTimeOffer());
    this.registerOfferAdditionalParameter(new __dep_export_OfferDescriptionAdditionalCosts.OfferDescriptionAdditionalCosts());
    this.registerOfferRewardParameter(new __dep_export_OfferDescriptionRewardStandard.OfferDescriptionRewardStandard());
    this.registerOfferVisualParameter(new __dep_export_OfferDescriptionVisualIsoObject.OfferDescriptionVisualIsoObject());
    this.registerOfferVisualParameter(new __dep_export_OfferDescriptionVisualTreasureChestObject.OfferDescriptionVisualTreasureChestObject());
    this.registerOfferVisualParameter(new __dep_export_OfferDescriptionVisualFinishDialog.OfferDescriptionVisualFinishDialog());
    this.registerOfferVisualParameter(new __dep_export_OfferDescriptionVisualInterfaceButton.OfferDescriptionVisualInterfaceButton());
    this.registerOfferVisualParameter(new __dep_export_OfferDescriptionVisualOfferDialog.OfferDescriptionVisualOfferDialog());
    this.registerOfferVisualParameter(new __dep_export_OfferDescriptionVisualQuestAcceptDialog.OfferDescriptionVisualQuestAcceptDialog());
    this.registerOfferVisualParameter(new __dep_export_OfferDescriptionVisualQuestDialog.OfferDescriptionVisualQuestDialog());
    this.registerOfferVisualParameter(new __dep_export_OfferDescriptionVisualFailedDialog.OfferDescriptionVisualFailedDialog());
    this.registerOfferVisualParameter(new __dep_export_OfferDescriptionVisualHideEvent.OfferDescriptionVisualHideEvent());
    this.registerOfferVisualParameter(new __dep_export_OfferDescriptionVisualEuroAmount.OfferDescriptionVisualEuroAmount());
    this.registerOfferVisualParameter(new __dep_export_OfferDescriptionVisualSubOffer.OfferDescriptionVisualSubOffer());
  };
  CastlePrivateOfferData.prototype.initOfferQuestConditions = function () {
    __s1param0.prototype.initOfferQuestConditions.call(this);
    this.registerOfferQuestCondition(new __dep_export_OfferQuestConditionIntegerPlayerLevel.OfferQuestConditionIntegerPlayerLevel());
    this.registerOfferQuestCondition(new __dep_export_OfferQuestConditionPaymentMinWithUpdate.OfferQuestConditionPaymentMinWithUpdate());
    this.registerOfferQuestCondition(new __dep_export_OfferQuestConditionPayUser.OfferQuestConditionPayUser());
    this.registerOfferQuestCondition(new __dep_export_OfferQuestConditionVoucherCode.OfferQuestConditionVoucherCode());
    this.registerOfferQuestCondition(new __dep_export_OfferQuestConditionBoughtOfferReward.OfferQuestConditionBoughtOfferReward());
  };
  CastlePrivateOfferData.prototype.getPrivateOfferIDbyWodID = function (__s9param0, __s9param1) {
    var __s9local0 = __dep_exact_f855840627e6e145.int(__dep_export_CastleModel.CastleModel.primeSaleData.getBestDiscountPrivateOfferID(__s9param0, __s9param1));
    if (__s9local0 == -1) {
      for (var __s9local1 = this.getActivePrivateOffersByDescription(__dep_export_ClientConstOffer.ClientConstOffer.ADDITIONAL_COMPONENT_CONTAINER), __s9local2 = 0; __s9local2 < __s9local1.length; __s9local2++) {
        var __s9local3 = __s9local1[__s9local2];
        var __s9local4 = __s9local3.getAdditionalComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_ADDITIONAL_BUILDING_ID);
        if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s9local4, "OfferDescriptionAdditionalBuildingID") && __s9local4.ID == __s9param0) {
          __s9local0 = __s9local3.id;
        }
      }
    }
    return __s9local0;
  };
  CastlePrivateOfferData.prototype.getPrivateOfferMerchantID = function () {
    var __s15local0 = null;
    for (var __s15local1 = this.getPrivateOffersWithVisualParamter(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_OFFER_DIALOG), __s15local2 = 0; __s15local2 < __s15local1.length; __s15local2++) {
      var __s15local3 = __s15local1[__s15local2];
      var __s15local4 = __s15local3.getVisualComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_OFFER_DIALOG);
      if (__dep_exact_81dacdf05bd32292_1.instanceOfClass(__s15local4, "OfferDescriptionVisualOfferDialog") && __s15local4.dialogName == __dep_export_CastleResourceMerchantEventDialog.CastleResourceMerchantEventDialog.NAME) {
        __s15local0 = __s15local3;
      }
    }
    return __dep_exact_f855840627e6e145.int(__s15local0 ? __s15local0.id : -1);
  };
  return CastlePrivateOfferData;
}(__dep_export_BasicPrivateOfferData.BasicPrivateOfferData);
exports.CastlePrivateOfferData = __s0local0;
var __dep_export_CastleResourceMerchantEventDialog = require("gge-module:export_CastleResourceMerchantEventDialog");
var __dep_export_OfferDescriptionAdditionalPrimeSale = require("gge-module:export_OfferDescriptionAdditionalPrimeSale");
var __dep_export_OfferDescriptionAdditionalPrimeSaleUpgrade = require("gge-module:export_OfferDescriptionAdditionalPrimeSaleUpgrade");
var __dep_export_OfferDescriptionRewardStandard = require("gge-module:export_OfferDescriptionRewardStandard");
var __dep_export_OfferDescriptionVisualFailedDialog = require("gge-module:export_OfferDescriptionVisualFailedDialog");
var __dep_export_OfferDescriptionVisualFinishDialog = require("gge-module:export_OfferDescriptionVisualFinishDialog");
var __dep_export_OfferDescriptionVisualHideEvent = require("gge-module:export_OfferDescriptionVisualHideEvent");
var __dep_export_OfferDescriptionVisualInterfaceButton = require("gge-module:export_OfferDescriptionVisualInterfaceButton");
var __dep_export_OfferDescriptionVisualIsoObject = require("gge-module:export_OfferDescriptionVisualIsoObject");
var __dep_export_OfferDescriptionVisualOfferDialog = require("gge-module:export_OfferDescriptionVisualOfferDialog");
var __dep_export_OfferDescriptionVisualQuestAcceptDialog = require("gge-module:export_OfferDescriptionVisualQuestAcceptDialog");
var __dep_export_OfferDescriptionVisualQuestDialog = require("gge-module:export_OfferDescriptionVisualQuestDialog");
var __dep_export_OfferDescriptionVisualTreasureChestObject = require("gge-module:export_OfferDescriptionVisualTreasureChestObject");
var __dep_export_OfferQuestConditionVoucherCode = require("gge-module:export_OfferQuestConditionVoucherCode");
var __dep_export_OfferDescriptionAdditionalCosts = require("gge-module:export_OfferDescriptionAdditionalCosts");
var __dep_export_OfferDescriptionVisualSubOffer = require("gge-module:export_OfferDescriptionVisualSubOffer");
var __dep_export_OfferQuestConditionBoughtOfferReward = require("gge-module:export_OfferQuestConditionBoughtOfferReward");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "IUpdatable");
