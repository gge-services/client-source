Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_ClientConstCastle = require("gge-module:export_ClientConstCastle");
var __dep_export_ClientConstOffer = require("gge-module:export_ClientConstOffer");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function IsoDataObjectGroupTreasureChest() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoDataObjectGroupTreasureChest, __s1param0);
  IsoDataObjectGroupTreasureChest.prototype.initObjects = function () {
    this.resetList();
    if (this.isoData.areaData.isMyHomeCastle) {
      var __s5local0 = __dep_export_CastleModel.CastleModel.privateOfferData.getPrivateOffersWithVisualParamter(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_TREASURE_CHEST);
      if (__s5local0 != null) {
        for (var __s5local1 = 0, __s5local2 = __s5local0; __s5local1 < __s5local2.length; __s5local1++) {
          var __s5local3 = __s5local2[__s5local1];
          if (__s5local3 !== undefined) {
            var __s5local4 = __s5local3.getDescriptionByName(__dep_export_ClientConstOffer.ClientConstOffer.VISUAL_COMPONENT_CONTAINER).visuals.get(__dep_export_ClientConstOffer.ClientConstOffer.OFFER_VISUAL_TREASURE_CHEST);
            if (__s5local4.isVisible && __s5local4.isTreasureChestVisibleByArea(this.isoData.areaData.areaInfo.areaType)) {
              var __s5local5 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName(__s5local4.objectType + __dep_export_ClientConstCastle.ClientConstCastle.GROUP_SURROUNDINGS + "VO"))();
              this.initObjectVO(__s5local5, __s5local3);
              this._list.push(__s5local5);
            }
          }
        }
      }
    }
  };
  IsoDataObjectGroupTreasureChest.prototype.initObjectVO = function (__s13param0, __s13param1) {
    __s13param0.offerVO = __s13param1;
    __s13param0.init(this.isoData);
    var __s13local0 = __dep_exact_f855840627e6e145.int(__dep_exact_9e901e8e2483a22f.MathBase.random(0, 3, true));
    var __s13local1 = this.isoData.areaData.isMyHomeCastle ? __dep_export_ClientConstCastle.ClientConstCastle.TREASURECHEST_POSITIONS_HOME_CASTLE : __dep_export_ClientConstCastle.ClientConstCastle.TREASURECHEST_POSITIONS;
    __s13param0.posOffset.x = __s13local1[__s13local0][0];
    __s13param0.posOffset.y = __s13local1[__s13local0][1];
    __s13param0.updateData();
  };
  return IsoDataObjectGroupTreasureChest;
}(require("gge-module:export_AIsoDataObjectGroupSimpleList").AIsoDataObjectGroupSimpleList);
exports.IsoDataObjectGroupTreasureChest = __s0local0;
