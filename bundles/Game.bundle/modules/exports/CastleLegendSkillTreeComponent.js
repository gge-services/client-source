Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_export_CastleLegendSkillTierComponent = require("gge-module:export_CastleLegendSkillTierComponent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = createjs.MovieClip;
var __s0local1 = function () {
  function CastleLegendSkillTreeComponent(__s3param0) {
    this._height = 0;
    this._disp = new __s0local0();
    this._treeNode = this.legendSkillData.getSkillTreeNode(__s3param0);
    this.createTree();
    this.updateTree();
  }
  CastleLegendSkillTreeComponent.prototype.createTree = function () {
    this._tierComponents = [];
    this._height = 0;
    for (var __s5local0 = 0, __s5local1 = this._treeNode.childs; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2) {
        var __s5local3 = new __dep_export_CastleLegendSkillTierComponent.CastleLegendSkillTierComponent(__s5local2, this._treeNode.id);
        this._disp.addChild(__s5local3.disp);
        this._tierComponents.push(__s5local3);
        __s5local3.disp.y = this._height;
        this._height += __s5local3.height + CastleLegendSkillTreeComponent.TIER_SPACING_Y;
      }
    }
  };
  CastleLegendSkillTreeComponent.prototype.updateTree = function () {
    for (var __s10local0 = 0; __s10local0 < this._tierComponents.length; __s10local0++) {
      this._tierComponents[__s10local0].updateTier();
    }
  };
  CastleLegendSkillTreeComponent.prototype.show = function () {
    for (var __s14local0 = 0; __s14local0 < this._tierComponents.length; __s14local0++) {
      this._tierComponents[__s14local0].show();
    }
  };
  CastleLegendSkillTreeComponent.prototype.hide = function () {
    for (var __s18local0 = 0; __s18local0 < this._tierComponents.length; __s18local0++) {
      this._tierComponents[__s18local0].hide();
    }
  };
  Object.defineProperty(CastleLegendSkillTreeComponent.prototype, "height", {
    get: function () {
      return this.disp.height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillTreeComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillTreeComponent.prototype, "treeNode", {
    get: function () {
      return this._treeNode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillTreeComponent.prototype, "legendSkillData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.legendSkillData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleLegendSkillTreeComponent.prototype, "tierComponents", {
    get: function () {
      return this._tierComponents;
    },
    enumerable: true,
    configurable: true
  });
  CastleLegendSkillTreeComponent.TIER_SPACING_Y = 4;
  return CastleLegendSkillTreeComponent;
}();
exports.CastleLegendSkillTreeComponent = __s0local1;
