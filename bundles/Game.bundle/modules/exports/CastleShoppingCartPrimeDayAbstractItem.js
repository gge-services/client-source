Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Point;
var __s0local1 = function () {
  function CastleShoppingCartPrimeDayAbstractItem(__s3param0, __s3param1, __s3param2) {
    this.category = __s3param0;
    this.itemMc = __s3param0.categoryMc[__s3param1 + __s3param2];
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.itemMc.mc_item);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(this.itemMc.emptySlot);
    this.itemMc.mc_item.actLikeButton = true;
    this.itemMc.emptySlot.mouseEnabled = false;
  }
  CastleShoppingCartPrimeDayAbstractItem.prototype.setPlaceholderVisibility = function (__s5param0 = true) {
    this.itemMc.emptySlot.visible = __s5param0;
    this.itemVisibility(!__s5param0);
  };
  CastleShoppingCartPrimeDayAbstractItem.prototype.itemVisibility = function (__s7param0) {
    this.itemMc.btn_info.visible = __s7param0;
    this.itemMc.mc_item.mc_icon.visible = __s7param0;
    this.itemMc.mc_item.txt_text.visible = __s7param0;
    this.itemMc.mc_item.mc_textBackground.visible = __s7param0;
  };
  CastleShoppingCartPrimeDayAbstractItem.prototype.checkClick = function (__s9param0) {
    return false;
  };
  CastleShoppingCartPrimeDayAbstractItem.prototype.enable = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.itemMc.mc_item, true);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.itemMc.emptySlot, true);
    this.hideBlocker();
  };
  CastleShoppingCartPrimeDayAbstractItem.prototype.disable = function () {
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.itemMc.mc_item, false);
    __dep_export_ButtonHelper.ButtonHelper.enableButton(this.itemMc.emptySlot, false);
    this.showBlocker();
  };
  CastleShoppingCartPrimeDayAbstractItem.prototype.hideBlocker = function () {
    this.itemMc.blocker.visible = false;
  };
  CastleShoppingCartPrimeDayAbstractItem.prototype.showBlocker = function () {
    this.itemMc.blocker.toolTipText = "dialog_shoppingCartPrimeDay_categoryFull_tooltip";
    this.itemMc.blocker.visible = true;
  };
  CastleShoppingCartPrimeDayAbstractItem.prototype.isEmpty = function () {
    return this._node == null;
  };
  Object.defineProperty(CastleShoppingCartPrimeDayAbstractItem.prototype, "optionId", {
    get: function () {
      if (this.isEmpty()) {
        return -1;
      } else {
        return this._node.cartOptionId;
      }
    },
    set: function (__s25param0) {
      this.node = __dep_export_CastleModel.CastleModel.shoppingCartPrimeDayData.getNodeByOption(__s25param0);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayAbstractItem.prototype, "typeId", {
    set: function (__s27param0) {
      this.node = __dep_export_CastleModel.CastleModel.shoppingCartPrimeDayData.getNodeByTypeAndGroup(__s27param0, this.category.groupId);
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayAbstractItem.prototype, "node", {
    set: function (__s29param0) {
      this._node = __s29param0;
      this.renderNode();
    },
    enumerable: true,
    configurable: true
  });
  CastleShoppingCartPrimeDayAbstractItem.prototype.renderNode = function () {
    var __s31local0 = this.isEmpty();
    if (this._renderComponent) {
      this._renderComponent.destroy();
      this._renderComponent = null;
    }
    this.itemMc.blocker.visible = __s31local0;
    if (!__s31local0) {
      this._renderComponent = __dep_export_CollectableRenderHelper.CollectableRenderHelper.displaySingleItem(new __dep_export_CollectableRenderClips.CollectableRenderClips(this.itemMc.mc_item).addInfoBtn(this.itemMc.btn_info), this._node.item, new __dep_export_CollectableRenderOptions.CollectableRenderOptions(__dep_export_CollectableRenderOptions.CollectableRenderOptions.SET_ADVANCED, CastleShoppingCartPrimeDayAbstractItem.REWARD_DIMENSION));
      this.enable();
    }
    this.setPlaceholderVisibility(__s31local0);
  };
  CastleShoppingCartPrimeDayAbstractItem.prototype.clear = function () {
    this.itemMc.blocker.visible = true;
    this.setPlaceholderVisibility(true);
    if (this._renderComponent) {
      this._renderComponent.destroy();
      this._renderComponent = null;
    }
  };
  Object.defineProperty(CastleShoppingCartPrimeDayAbstractItem.prototype, "visible", {
    set: function (__s38param0) {
      this.itemMc.visible = __s38param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayAbstractItem.prototype, "x", {
    set: function (__s40param0) {
      this.itemMc.x = __s40param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayAbstractItem.prototype, "y", {
    set: function (__s42param0) {
      this.itemMc.y = __s42param0;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleShoppingCartPrimeDayAbstractItem.prototype, "width", {
    get: function () {
      return this.itemMc.width;
    },
    enumerable: true,
    configurable: true
  });
  CastleShoppingCartPrimeDayAbstractItem.prototype.reset = function () {
    this.enable();
    this.setPlaceholderVisibility(false);
    this.hideBlocker();
  };
  CastleShoppingCartPrimeDayAbstractItem.prototype.select = function (__s48param0) {
    return !!__s48param0 && !!this.isEmpty() && (this.node = __s48param0._node, true);
  };
  CastleShoppingCartPrimeDayAbstractItem.prototype.unselect = function () {};
  CastleShoppingCartPrimeDayAbstractItem.__initialize_static_members = function () {
    CastleShoppingCartPrimeDayAbstractItem.REWARD_DIMENSION = new __s0local0(55, 50);
  };
  return CastleShoppingCartPrimeDayAbstractItem;
}();
exports.CastleShoppingCartPrimeDayAbstractItem = __s0local1;
var __dep_export_CollectableRenderHelper = require("gge-module:export_CollectableRenderHelper");
var __dep_export_CollectableRenderClips = require("gge-module:export_CollectableRenderClips");
var __dep_export_CollectableRenderOptions = require("gge-module:export_CollectableRenderOptions");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
__s0local1.__initialize_static_members();
