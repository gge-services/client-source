Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __s0local0 = function (__s1param0) {
  function CastleStormIslandsRuleItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleStormIslandsRuleItem, __s1param0);
  CastleStormIslandsRuleItem.prototype.fill = function () {
    var __s5local0 = this.data;
    var __s5local1 = this.getItemMc();
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s5local1.txt_copy, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s5local0.teaserID));
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s5local1.mc_icon);
    var __s5local2 = new Library.CastleStormIslandsRules[__s5local0.teaserID]();
    if (__s5local2) {
      __s5local1.mc_icon.addChild(__s5local2);
    }
  };
  return CastleStormIslandsRuleItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.CastleStormIslandsRuleItem = __s0local0;
