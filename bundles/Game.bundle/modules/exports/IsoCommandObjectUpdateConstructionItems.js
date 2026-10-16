Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_export_ConstructionItemSlotVO = require("gge-module:export_ConstructionItemSlotVO");
var __s0local0 = function (__s1param0) {
  function IsoCommandObjectUpdateConstructionItems(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0._vo = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoCommandObjectUpdateConstructionItems, __s1param0);
  IsoCommandObjectUpdateConstructionItems.prototype.execute = function () {
    var __s5local0 = this.vo;
    if (__s5local0) {
      var __s5local1 = __s5local0.getConstructionItem(new __dep_export_ConstructionItemSlotVO.ConstructionItemSlotVO(__dep_exact_26a421b704832cff.ConstructionItemConst.APPEARANCE_SLOT_TYPE, 0));
      __s5local0.parseConstructionItems(this.isoData.areaData.constructionItems.constructionItemParams);
      if (__s5local1 != __s5local0.getConstructionItem(new __dep_export_ConstructionItemSlotVO.ConstructionItemSlotVO(__dep_exact_26a421b704832cff.ConstructionItemConst.APPEARANCE_SLOT_TYPE, 0))) {
        __s5local0.updateData();
        this.isoData.grid.updateBuildingPos(__s5local0);
        var __s5local2 = __dep_export_Iso.Iso.renderer.objects.provider.getObjectByVO(__s5local0);
        if (__s5local2) {
          __s5local2.updateDisp();
        }
      }
    }
  };
  Object.defineProperty(IsoCommandObjectUpdateConstructionItems.prototype, "vo", {
    get: function () {
      return this._vo;
    },
    enumerable: true,
    configurable: true
  });
  return IsoCommandObjectUpdateConstructionItems;
}(require("gge-module:export_AIsoCommandModel").AIsoCommandModel);
exports.IsoCommandObjectUpdateConstructionItems = __s0local0;
var __dep_export_Iso = require("gge-module:export_Iso");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
