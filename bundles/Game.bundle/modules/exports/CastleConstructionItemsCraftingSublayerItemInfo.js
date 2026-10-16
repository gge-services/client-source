Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function CastleConstructionItemsCraftingSublayerItemInfo(__s3param0, __s3param1) {
    this.selectedRecipeIndex = 0;
    this.itemInfo = __s3param0;
    this.sublayer = __s3param1;
    __dep_export_ButtonHelper.ButtonHelper.initSmallButtons([__s3param0.btnLeft, __s3param0.btnRight]);
  }
  CastleConstructionItemsCraftingSublayerItemInfo.prototype.addEventListeners = function () {
    this.itemInfo.addEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onScrollLevels));
  };
  CastleConstructionItemsCraftingSublayerItemInfo.prototype.removeEventListeners = function () {
    this.itemInfo.removeEventListener(__s0local0.MOUSE_WHEEL, this.bindFunction(this.onScrollLevels));
  };
  CastleConstructionItemsCraftingSublayerItemInfo.prototype.onScrollLevels = function (__s9param0) {
    if (this.sublayer.bluePrintShown && this.sublayer.bluePrintShown.recipes) {
      if (__s9param0.delta < 0) {
        if (this.selectedRecipeIndex > 0) {
          this.decreaseLevel();
        }
      } else if (this.selectedRecipeIndex < this.sublayer.bluePrintShown.recipes.length - 1) {
        this.increaseLevel();
      }
    }
  };
  CastleConstructionItemsCraftingSublayerItemInfo.prototype.decreaseLevel = function () {
    this.selectedRecipeIndex--;
    this.sublayer.updateItemInfo();
  };
  CastleConstructionItemsCraftingSublayerItemInfo.prototype.increaseLevel = function () {
    this.selectedRecipeIndex++;
    this.sublayer.updateItemInfo();
  };
  CastleConstructionItemsCraftingSublayerItemInfo.prototype.onClick = function (__s19param0) {
    switch (__s19param0) {
      case this.itemInfo.btnLeft:
        this.decreaseLevel();
        break;
      case this.itemInfo.btnRight:
        this.increaseLevel();
    }
  };
  CastleConstructionItemsCraftingSublayerItemInfo.prototype.update = function (__s22param0) {
    CastleConstructionItemsCraftingSublayerItemInfo.textFieldManager.registerTextField(this.itemInfo.title, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__s22param0.nameTextId)).autoFitToBounds = true;
    CastleConstructionItemsCraftingSublayerItemInfo.textFieldManager.registerTextField(this.itemInfo.level, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("ci_level", [__s22param0.level]));
    CastleConstructionItemsCraftingSublayerItemInfo.textFieldManager.registerTextField(this.itemInfo.description, new __dep_exact_92d05af59ee2ff30_1.TextVO(__s22param0.effectText));
    this.itemInfo.primaryLeft.visible = this.itemInfo.primaryRight.visible = this.itemInfo.appearanceLeft.visible = this.itemInfo.appearanceRight.visible = this.itemInfo.secondaryLeft.visible = this.itemInfo.secondaryRight.visible = false;
    var __s22local0 = "primary";
    if (__s22param0.isAppearanceItem) {
      __s22local0 = "appearance";
    } else if (__s22param0.isSecondaryItem) {
      __s22local0 = "secondary";
    }
    this.itemInfo[__s22local0 + "Left"].visible = this.itemInfo[__s22local0 + "Right"].visible = true;
    this.itemInfo[__s22local0 + "Left"].gotoAndStop(__s22param0.rarity + 2);
    this.itemInfo[__s22local0 + "Right"].gotoAndStop(__s22param0.rarity + 2);
    var __s22local1 = this.sublayer.bluePrintShown.recipes.length;
    this.itemInfo.btnLeft.visible = this.selectedRecipeIndex > 0;
    this.itemInfo.btnRight.visible = this.selectedRecipeIndex < __s22local1 - 1 && __s22local1 > 1;
    var __s22local2 = __s22param0.skinnedBuildingVO;
    if (__s22param0.isAppearanceItem && __s22local2) {
      __dep_export_WodPicHelper.WodPicHelper.addWodPic(__s22local2, this.itemInfo.buildingClip.mc_building, 93.65, 93.65);
    } else {
      __dep_exact_9e901e8e2483a22f_1.MovieClipHelper.clearMovieClip(this.itemInfo.buildingClip.mc_building);
    }
  };
  Object.defineProperty(CastleConstructionItemsCraftingSublayerItemInfo, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleConstructionItemsCraftingSublayerItemInfo;
}();
exports.CastleConstructionItemsCraftingSublayerItemInfo = __s0local1;
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
