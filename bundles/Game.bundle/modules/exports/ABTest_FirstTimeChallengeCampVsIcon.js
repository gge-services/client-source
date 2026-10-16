Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function ABTest_FirstTimeChallengeCampVsIcon() {
    this.HIDE_CAMP = "hideCamp";
  }
  ABTest_FirstTimeChallengeCampVsIcon.prototype.setupTest = function (__s5param0) {
    this.setupPrivateOffers();
    if (this._allConcernedPrivateOffers != null) {
      for (var __s5local0 = 0, __s5local1 = this._allConcernedPrivateOffers; __s5local0 < __s5local1.length; __s5local0++) {
        var __s5local2 = __s5local1[__s5local0];
        if (__s5local2 !== undefined) {
          var __s5local3 = __s5local2.getVisualComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_ISO_OBJECT);
          var __s5local4 = __s5local2.getVisualComponentByName(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_INTERFACE_BUTTON);
          __s5local3.hiddenByABTest = __dep_export_CastleModel.CastleModel.userData.splitRunData.getBooleanParam(this.HIDE_CAMP);
          __s5local4.hiddenByABTest = __dep_export_CastleModel.CastleModel.userData.splitRunData.getBooleanParam("hideIcon");
          __s5local3.execute(__s5local2);
          __s5local4.execute(__s5local2);
        }
      }
    }
  };
  ABTest_FirstTimeChallengeCampVsIcon.prototype.setupPrivateOffers = function () {
    this.setupAllConcernedPrivateOfferIDs();
    this.setupAllConcernedPrivateOffers();
  };
  ABTest_FirstTimeChallengeCampVsIcon.prototype.setupAllConcernedPrivateOfferIDs = function () {
    var __s13local0 = [];
    __s13local0.push(111);
    __s13local0.push(118);
    __s13local0.push(119);
    this._allConcernedPrivateOfferIDs = __s13local0;
    return __s13local0;
  };
  ABTest_FirstTimeChallengeCampVsIcon.prototype.setupAllConcernedPrivateOffers = function () {
    var __s15local0;
    this._allConcernedPrivateOffers = [];
    if (this._allConcernedPrivateOfferIDs != null) {
      for (var __s15local1 = 0, __s15local2 = this._allConcernedPrivateOfferIDs; __s15local1 < __s15local2.length; __s15local1++) {
        var __s15local3 = __s15local2[__s15local1];
        if (__s15local3 !== undefined && (__s15local0 = __dep_export_CastleModel.CastleModel.privateOfferData.getOfferById(__s15local3))) {
          this._allConcernedPrivateOffers.push(__s15local0);
        }
      }
    }
  };
  return ABTest_FirstTimeChallengeCampVsIcon;
}();
exports.ABTest_FirstTimeChallengeCampVsIcon = __s0local0;
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
