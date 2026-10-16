Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_GeneralsSkillTierComponent = require("gge-module:export_GeneralsSkillTierComponent");
var __s0local0 = createjs.MovieClip;
var __s0local1 = function () {
  function GeneralsSkillTreeComponent(__s3param0, __s3param1) {
    this._height = 0;
    this._attackHighlight = false;
    this._disp = new __s0local0();
    this._attackHighlight = __s3param1;
    this._treeNode = this.generalsData.getSkillTreeNode(__s3param0);
    this.createTree();
    this.updateTree();
  }
  GeneralsSkillTreeComponent.prototype.createTree = function () {
    this._tierComponents = [];
    this._height = 10;
    for (var __s5local0 = 0, __s5local1 = this._treeNode.childs; __s5local0 < __s5local1.length; __s5local0++) {
      var __s5local2 = __s5local1[__s5local0];
      if (__s5local2 && !__s5local2.isHidden) {
        var __s5local3 = new __dep_export_GeneralsSkillTierComponent.GeneralsSkillTierComponent(__s5local2, this._treeNode.id, this._attackHighlight);
        this._disp.addChild(__s5local3.disp);
        this._tierComponents.push(__s5local3);
        __s5local3.disp.y = this._height;
        this._height += __s5local3.disp.height + GeneralsSkillTreeComponent.TIER_SPACING_Y;
      }
    }
    if (this.treeNode.isIncomplete) {
      var __s5local4 = new (__dep_exact_81dacdf05bd32292.getDefinitionByName("GeneralSkillTreeDialogExt_SkillTier"))();
      __s5local4.bg_completed.visible = false;
      __s5local4.txt_tier.width = 720;
      __s5local4.y = this._height;
      __dep_exact_9e901e8e2483a22f_1.GoodgameTextFieldManager.getInstance().registerTextField(__s5local4.txt_tier, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_generals_skillTree_comingSoon_banner"), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true)).textAlign = __dep_exact_9e901e8e2483a22f.GGSTextAlign.CENTER;
      this._disp.addChild(__s5local4);
      this._height += GeneralsSkillTreeComponent.COMINGSOON_HEIGHT;
    }
  };
  GeneralsSkillTreeComponent.prototype.updateTree = function () {
    for (var __s11local0 = 0; __s11local0 < this._tierComponents.length; __s11local0++) {
      this._tierComponents[__s11local0].updateTier();
    }
  };
  GeneralsSkillTreeComponent.prototype.show = function () {
    for (var __s15local0 = 0; __s15local0 < this._tierComponents.length; __s15local0++) {
      this._tierComponents[__s15local0].show();
    }
  };
  GeneralsSkillTreeComponent.prototype.hide = function () {
    for (var __s19local0 = 0; __s19local0 < this._tierComponents.length; __s19local0++) {
      this._tierComponents[__s19local0].hide();
    }
  };
  Object.defineProperty(GeneralsSkillTreeComponent.prototype, "height", {
    get: function () {
      return this._height;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsSkillTreeComponent.prototype, "disp", {
    get: function () {
      return this._disp;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsSkillTreeComponent.prototype, "treeNode", {
    get: function () {
      return this._treeNode;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsSkillTreeComponent.prototype, "generalsData", {
    get: function () {
      return __dep_export_CastleModel.CastleModel.generalsData;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(GeneralsSkillTreeComponent.prototype, "tierComponents", {
    get: function () {
      return this._tierComponents;
    },
    enumerable: true,
    configurable: true
  });
  GeneralsSkillTreeComponent.TIER_SPACING_Y = 10;
  GeneralsSkillTreeComponent.COMINGSOON_HEIGHT = 100;
  return GeneralsSkillTreeComponent;
}();
exports.GeneralsSkillTreeComponent = __s0local1;
