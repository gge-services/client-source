Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_AMovementRenderStrategy = require("gge-module:export_AMovementRenderStrategy");
var __s0local0 = function (__s1param0) {
  function RenderMarket() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(RenderMarket, __s1param0);
  RenderMarket.prototype.renderData = function (__s5param0, __s5param1) {
    var __s5local0 = new __dep_export_CastleResourceListComponent.CastleResourceListComponent(__s5param0.btn_goods, Library.CastleInterfaceElements.GoodsInfoItem);
    var __s5local1 = __s5param1;
    __dep_export_AMovementRenderStrategy.AMovementRenderStrategy.setDecoFrame(__s5param0, __dep_export_AMovementRenderStrategy.AMovementRenderStrategy.FRAME_MARKET);
    __s5param0.btn_goods.visible = true;
    __s5local0.updateComponent(__s5local1.lootList);
    if (__s5local1.lootList.length > 0) {
      __s5param0.fieldAction = this.textFieldManager.registerTextField(__s5param0.txt_action, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("dialog_moveOverview_trade"), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    } else {
      var __s5local2 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_moveOverview_trade");
      var __s5local3 = __dep_exact_92d05af59ee2ff30.Localize.text("dialog_moveOverview_wayHome");
      __s5param0.fieldAction = this.textFieldManager.registerTextField(__s5param0.txt_action, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO(__dep_exact_9e901e8e2483a22f.GenericTextIds.VALUE_DASH_SPLIT, [__s5local2, __s5local3]), new __dep_exact_9e901e8e2483a22f_1.InternalGGSTextFieldConfigVO(true));
    }
  };
  return RenderMarket;
}(__dep_export_AMovementRenderStrategy.AMovementRenderStrategy);
exports.RenderMarket = __s0local0;
var __dep_export_CastleResourceListComponent = require("gge-module:export_CastleResourceListComponent");
