Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_2bba671be60e4997 = require("gge-module:exact_2bba671be60e4997");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleLocalizedNumberVO = require("gge-module:export_CastleLocalizedNumberVO");
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_AInfiniteScrollListItem = require("gge-module:export_AInfiniteScrollListItem");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_WodPicHelper = require("gge-module:export_WodPicHelper");
var __dep_export_WodPicHelperUnitFramePerfectCallbackWrapper = require("gge-module:export_WodPicHelperUnitFramePerfectCallbackWrapper");
var __dep_export_CastleRecruitInfoDialog = require("gge-module:export_CastleRecruitInfoDialog");
var __dep_export_CastleRecruitInfoDialogProperties = require("gge-module:export_CastleRecruitInfoDialogProperties");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function (__s1param0) {
  function CastleCompactArmyDialogUnitItem() {
    return __s1param0 !== null && __s1param0.apply(this, arguments) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleCompactArmyDialogUnitItem, __s1param0);
  CastleCompactArmyDialogUnitItem.prototype.initLoaded = function () {
    __s1param0.prototype.initLoaded.call(this);
  };
  CastleCompactArmyDialogUnitItem.prototype.onShow = function () {
    __s1param0.prototype.onShow.call(this);
    this.disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onMouseClick));
  };
  CastleCompactArmyDialogUnitItem.prototype.onHide = function () {
    __s1param0.prototype.onHide.call(this);
    this.disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onMouseClick));
  };
  CastleCompactArmyDialogUnitItem.prototype.fill = function () {
    __dep_export_ButtonHelper.ButtonHelper.initBasicButtons([this.getItemMc().btn_info0, this.getItemMc().btn_info1, this.getItemMc().btn_info2]);
    this.fillItem(0);
    this.fillItem(1);
    this.fillItem(2);
  };
  CastleCompactArmyDialogUnitItem.prototype.fillItem = function (__s13param0) {
    var __s13local0 = this.data["data" + __s13param0];
    var __s13local1 = this.getItemMc()["item" + __s13param0];
    var __s13local2 = this.getItemMc()["btn_info" + __s13param0];
    var __s13local3 = __s13local0.unitVO;
    var __s13local4 = __s13local0.crestVO;
    if (!__s13local3) {
      __s13local1.visible = false;
      __s13local2.visible = false;
      return;
    }
    __s13local1.visible = true;
    __s13local2.visible = true;
    __s13local1.gotoAndStop(1);
    __s13local1.toolTipText = __s13local3.getNameString();
    __s13local1.mouseChildren = false;
    this.textFieldManager.registerTextField(__s13local1.mc_counter.txt_pick, new __dep_export_CastleLocalizedNumberVO.CastleLocalizedNumberVO(__s13local3.inventoryAmount, {
      compactThreshold: 10000,
      compactFractionalDigits: 0
    }), new __dep_exact_2bba671be60e4997.InternalGGSTextFieldConfigVO(true));
    if (__s13local3.type == "Soldiers" || __s13local3.type == "Tools") {
      if (__s13local3.isStronghold) {
        __s13local1.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text("Unknown_name") + "\n" + __dep_exact_92d05af59ee2ff30.Localize.text("stronghold_UnitInside");
      } else {
        __s13local1.toolTipText = "Unknown_name";
      }
    } else if (__s13local3.isStronghold) {
      __s13local1.toolTipText = __dep_exact_92d05af59ee2ff30.Localize.text(String(String(__s13local3.type).toLowerCase() + "_name")) + "\n" + __dep_exact_92d05af59ee2ff30.Localize.text("stronghold_UnitInside");
    } else {
      __s13local1.toolTipText = String(String(__s13local3.type).toLowerCase() + "_name");
    }
    __s13local1.toolTipText = {
      t: __s13local1.toolTipText,
      ox: __s13local1.width / 2
    };
    __s13local1.mc_counter.visible = !__s13local0.isDefenceSpyItem;
    __dep_export_WodPicHelper.WodPicHelper.addUnitPicToContainer(__s13local3, __s13local1, __s13local0.maxUnitSize > 0 ? __s13local0.maxUnitSize : __dep_export_WodPicHelper.WodPicHelper.SMALL_UNIT_WIDTH, __s13local0.maxUnitSize > 0 ? __s13local0.maxUnitSize : __dep_export_WodPicHelper.WodPicHelper.SMALL_UNIT_HEIGHT, __s13local0.maxUnitSize > 0 ? __s13local0.maxUnitSize : __dep_export_WodPicHelper.WodPicHelper.SMALL_UNIT_WIDTH, __s13local0.maxUnitSize > 0 ? __s13local0.maxUnitSize : __dep_export_WodPicHelper.WodPicHelper.SMALL_UNIT_HEIGHT, __s13local4.backgroundColor1, __s13local4.backgroundColor2, __s13local0.levelIconSize, __s13local0.levelIconOffset, true, __dep_export_WodPicHelperUnitFramePerfectCallbackWrapper.WodPicHelperUnitFramePerfectCallbackWrapper.callback4SmallPic(__s13local3, __dep_export_WodPicHelper.WodPicHelper.SMALL_UNIT_WIDTH, __dep_export_WodPicHelper.WodPicHelper.SMALL_UNIT_HEIGHT));
  };
  CastleCompactArmyDialogUnitItem.prototype.onMouseClick = function (__s21param0) {
    var __s21local0;
    switch (__s21param0.target) {
      case this.getItemMc().btn_info0:
      case this.getItemMc().item0:
        __s21local0 = this.data.data0.unitVO;
        break;
      case this.getItemMc().btn_info1:
      case this.getItemMc().item1:
        __s21local0 = this.data.data1.unitVO;
        break;
      case this.getItemMc().btn_info2:
      case this.getItemMc().item2:
        __s21local0 = this.data.data2.unitVO;
        break;
      default:
        return;
    }
    if (__s21local0) {
      __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleRecruitInfoDialog.CastleRecruitInfoDialog, new __dep_export_CastleRecruitInfoDialogProperties.CastleRecruitInfoDialogProperties(__s21local0, this.data.data0.crestVO));
    }
  };
  Object.defineProperty(CastleCompactArmyDialogUnitItem.prototype, "textFieldManager", {
    get: function () {
      return __dep_exact_9e901e8e2483a22f.GoodgameTextFieldManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyDialogUnitItem.prototype, "itemMc", {
    get: function () {
      return this.getItemMc();
    },
    enumerable: true,
    configurable: true
  });
  CastleCompactArmyDialogUnitItem.prototype.onClick = function (__s29param0) {
    __s1param0.prototype.onClick.call(this, __s29param0);
  };
  Object.defineProperty(CastleCompactArmyDialogUnitItem.prototype, "rewards", {
    get: function () {
      return this.data.rewards;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyDialogUnitItem.prototype, "rewardCategory", {
    get: function () {
      return this.data.rewardCategory;
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleCompactArmyDialogUnitItem.prototype, "chance", {
    get: function () {
      return this.data.chance;
    },
    enumerable: true,
    configurable: true
  });
  return CastleCompactArmyDialogUnitItem;
}(__dep_export_AInfiniteScrollListItem.AInfiniteScrollListItem);
exports.CastleCompactArmyDialogUnitItem = __s0local1;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local1, "ICollectableRendererList");
