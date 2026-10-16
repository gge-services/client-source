Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleComponent = require("gge-module:export_CastleComponent");
var __s0local0 = createjs.MouseEvent;
var __s0local1 = createjs.Point;
var __s0local2 = function (__s1param0) {
  function ConstructionItemExpiredCastleSelector(__s3param0, __s3param1) {
    var __s3local0 = __s1param0.call(this) || this;
    __s3local0._disp = __s3param0;
    __s3local0._castleSelectionCallback = __s3param1;
    __s3local0._pagination = new __dep_export_Pagination.Pagination(__s3local0, 1, false, true);
    __s3local0._paginationDots = new __dep_export_PaginationDots.PaginationDots(__s3local0, __s3local0._pagination, __s3local0._disp.mc_dotContainer.mc_dot);
    __s3local0._pagination.addControl(__s3local0._paginationDots);
    __s3local0._pagination.addControl(new __dep_export_PaginationArrows.PaginationArrows(__s3local0, __s3local0._pagination));
    __s3local0._pagination.addControl(new __dep_export_PaginationMouseWheel.PaginationMouseWheel(__s3local0._disp, __s3local0._pagination));
    __s3local0._castleDimension = new __s0local1(70, 60);
    __s3local0._castlesClickFeedback = [];
    for (var __s3local1 = 0; __s3local1 < ConstructionItemExpiredCastleSelector.MAX_CASTLES_SHOWN; __s3local1++) {
      var __s3local2 = __s3local0._disp["castle" + __s3local1];
      __s3local0._castlesClickFeedback.push(new __dep_export_ClickFeedbackHoverBehaviour.ClickFeedbackHoverBehaviour(__s3local2, __s3local2.mc_hover, __s3local2.mc_down));
    }
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(ConstructionItemExpiredCastleSelector, __s1param0);
  ConstructionItemExpiredCastleSelector.prototype.fillFromAreas = function (__s7param0) {
    this._expiredAreas = __s7param0;
    var __s7local0 = __dep_export_CastleModel.CastleModel.areaData.activeArea.areaInfo;
    for (var __s7local1 = 0; __s7local1 < this._expiredAreas.length; __s7local1++) {
      var __s7local2 = this._expiredAreas[__s7local1];
      if (__s7local0.kingdomID == __s7local2.castleWMO.kingdomID && __s7local0.objectId == __s7local2.castleWMO.objectId) {
        this._selectedArea = __s7local2;
      }
    }
    if (!this._selectedArea) {
      var __s7local3 = new __dep_export_ConstructionItemExpiredAreaVO.ConstructionItemExpiredAreaVO();
      __s7local3.castleWMO = __s7local0;
      this._expiredAreas.push(__s7local3);
      this._selectedArea = __s7local3;
    }
    this._expiredAreas.sort(this.bindFunction(this.sortExpiredAreas));
    this._pagination.maxPages = Math.ceil(this._expiredAreas.length / ConstructionItemExpiredCastleSelector.MAX_CASTLES_SHOWN);
    this._pagination.currentPage = Math.floor(this._expiredAreas.indexOf(this._selectedArea) / ConstructionItemExpiredCastleSelector.MAX_CASTLES_SHOWN) + 1;
    this.update();
  };
  ConstructionItemExpiredCastleSelector.prototype.sortExpiredAreas = function (__s13param0, __s13param1) {
    if (__s13param0) {
      if (__s13param1) {
        return __dep_export_ClientConstSort.ClientConstSort.sortByKingdomId(__s13param0.castleWMO, __s13param1.castleWMO);
      } else {
        return -1;
      }
    } else {
      return 1;
    }
  };
  ConstructionItemExpiredCastleSelector.prototype.onClick = function (__s19param0) {
    this._pagination.handleClick(__s19param0);
    switch (__s19param0.target) {
      case this._disp.castle0:
      case this._disp.castle1:
      case this._disp.castle2:
        var __s19local0 = parseInt(__s19param0.target.name.replace("castle", "")) + this._pagination.currentPageIndex * ConstructionItemExpiredCastleSelector.MAX_CASTLES_SHOWN;
        this._selectedArea = this._expiredAreas[__s19local0];
        if (this._castleSelectionCallback) {
          this._castleSelectionCallback();
        }
    }
  };
  ConstructionItemExpiredCastleSelector.prototype.show = function () {
    this._pagination.enable();
    for (var __s23local0 = 0; __s23local0 < this._castlesClickFeedback.length; __s23local0++) {
      this._castlesClickFeedback[__s23local0].addEventListener();
    }
    this._disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
  };
  ConstructionItemExpiredCastleSelector.prototype.hide = function () {
    this._pagination.disable();
    for (var __s27local0 = 0; __s27local0 < this._castlesClickFeedback.length; __s27local0++) {
      this._castlesClickFeedback[__s27local0].removeEventListener();
    }
    this._disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
  };
  ConstructionItemExpiredCastleSelector.prototype.update = function () {
    this.updatePages(this._pagination.currentPageIndex, this._pagination.currentPageIndex);
  };
  ConstructionItemExpiredCastleSelector.prototype.updatePages = function (__s33param0, __s33param1) {
    for (var __s33local0 = 0; __s33local0 < ConstructionItemExpiredCastleSelector.MAX_CASTLES_SHOWN; __s33local0++) {
      var __s33local1 = this._disp["castle" + __s33local0];
      var __s33local2 = this._pagination.currentPageIndex * ConstructionItemExpiredCastleSelector.MAX_CASTLES_SHOWN + __s33local0;
      if (this._expiredAreas.length > __s33local2) {
        var __s33local3 = this._expiredAreas[__s33local2];
        this.renderCastle(__s33local1, __s33local3);
      } else {
        __s33local1.visible = false;
      }
    }
  };
  ConstructionItemExpiredCastleSelector.prototype.renderCastle = function (__s39param0, __s39param1) {
    var __s39local0 = __s39param1.castleWMO;
    var __s39local1 = __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s39param0.txt_name, new __dep_exact_92d05af59ee2ff30.TextVO(__s39local0.areaNameString));
    __dep_export_CastleComponent.CastleComponent.textFieldManager.registerTextField(__s39param0.txt_name_bold, new __dep_exact_92d05af59ee2ff30.TextVO(__s39local0.areaNameString)).visible = __s39local0 == this._selectedArea.castleWMO;
    __s39local1.visible = __s39local0 != this._selectedArea.castleWMO;
    __dep_exact_9e901e8e2483a22f.MovieClipHelper.clearMovieClip(__s39param0.castleHolder);
    __s39param0.mc_kingdomCrest.gotoAndStop(__s39local0.kingdomID + 1);
    __s39param0.mc_selected.visible = __s39local0 == this._selectedArea.castleWMO;
    __s39param0.mc_deselected.visible = __s39local0 != this._selectedArea.castleWMO;
    __s39param0.castleHolder.addChild(__dep_export_WorldmapObjectIconHelper.WorldmapObjectIconHelper.drawMapObjectIcon(__s39local0, this._castleDimension, true, false, false));
    __s39param0.visible = true;
    __s39param0.mouseChildren = false;
  };
  ConstructionItemExpiredCastleSelector.prototype.addDot = function (__s41param0) {
    this._disp.mc_dotContainer.addChild(__s41param0);
  };
  ConstructionItemExpiredCastleSelector.prototype.highlightDot = function (__s43param0, __s43param1) {
    __s43param0.gotoAndStop(__s43param1 ? 2 : 1);
  };
  ConstructionItemExpiredCastleSelector.prototype.changeArrow = function (__s45param0, __s45param1) {
    return false;
  };
  ConstructionItemExpiredCastleSelector.prototype.getLeftArrow = function () {
    return this._disp.btn_left;
  };
  ConstructionItemExpiredCastleSelector.prototype.getRightArrow = function () {
    return this._disp.btn_right;
  };
  Object.defineProperty(ConstructionItemExpiredCastleSelector.prototype, "selectedArea", {
    get: function () {
      return this._selectedArea;
    },
    enumerable: true,
    configurable: true
  });
  ConstructionItemExpiredCastleSelector.MAX_CASTLES_SHOWN = 3;
  return ConstructionItemExpiredCastleSelector;
}(__dep_export_CastleComponent.CastleComponent);
exports.ConstructionItemExpiredCastleSelector = __s0local2;
var __dep_export_ClickFeedbackHoverBehaviour = require("gge-module:export_ClickFeedbackHoverBehaviour");
var __dep_export_ConstructionItemExpiredAreaVO = require("gge-module:export_ConstructionItemExpiredAreaVO");
var __dep_export_Pagination = require("gge-module:export_Pagination");
var __dep_export_PaginationDots = require("gge-module:export_PaginationDots");
var __dep_export_PaginationArrows = require("gge-module:export_PaginationArrows");
var __dep_export_WorldmapObjectIconHelper = require("gge-module:export_WorldmapObjectIconHelper");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ClientConstSort = require("gge-module:export_ClientConstSort");
var __dep_export_PaginationMouseWheel = require("gge-module:export_PaginationMouseWheel");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local2, "ICollectableRendererList", "IPaginationContainer", "IPaginationDotsContainer", "IPaginationArrowsContainer");
