Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_Pagination = require("gge-module:export_Pagination");
var __dep_export_CastleGoodgameExternalClip = require("gge-module:export_CastleGoodgameExternalClip");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local0 = function (__s1param0) {
  function FactionEventIntroductionSublayer(__s3param0) {
    var __s3local0 = this;
    CONSTRUCTOR_HACK;
    (__s3local0 = __s1param0.call(this, __s3param0) || this).pagination = new __dep_export_Pagination.Pagination(__s3local0, FactionEventIntroductionSublayer.PAGES);
    __s3local0.externalClip = new __dep_export_CastleGoodgameExternalClip.CastleGoodgameExternalClip("FactionEventDlgInstructions", __dep_exact_9e901e8e2483a22f.BasicModel.basicLoaderData.getVersionedItemAssetUrl("FactionEventDlgInstructions"), null, 0, false);
    __s3local0.initBasicButtons([__s3param0.mc_pagination.btn_left, __s3param0.mc_pagination.btn_right]);
    __s3local0.textFieldManager.registerTextField(__s3param0.txt_header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_faction_tutorial_header"));
    __s3local0.itxt_pagination = __s3local0.textFieldManager.registerTextField(__s3param0.mc_pagination.txt_page, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO(__dep_exact_9e901e8e2483a22f_1.GenericTextIds.VALUE_PROPORTIONAL_VALUE));
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(FactionEventIntroductionSublayer, __s1param0);
  FactionEventIntroductionSublayer.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.loadPages();
    this.updatePageDisplay();
    this.updatePagination();
  };
  FactionEventIntroductionSublayer.prototype.onClick = function (__s7param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s7param0.target)) {
      switch (__s7param0.target) {
        case this.subLayerDisp.mc_pagination.btn_left:
          this.pagination.scrollLeft();
          break;
        case this.subLayerDisp.mc_pagination.btn_right:
          this.pagination.scrollRight();
      }
    }
  };
  FactionEventIntroductionSublayer.prototype.loadPages = function () {
    if (this.externalClip.isLoaded) {
      this.onPagesLoaded(this.externalClip);
    } else {
      this.externalClip.clipLoaded.addOnceWithPriority(this.bindFunction(this.onPagesLoaded));
    }
  };
  FactionEventIntroductionSublayer.prototype.onPagesLoaded = function (__s15param0) {
    var __s15local0 = this.externalClip.currentshownDisplayObject;
    __dep_exact_9e901e8e2483a22f_2.MovieClipHelper.clearMovieClip(this.subLayerDisp.mc_pages);
    this.subLayerDisp.mc_pages.addChild(this.externalClip.currentshownDisplayObject);
    this.textFieldManager.registerTextField(__s15local0.page0.txt_desc0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_faction_tutorial_slide1_copy1"));
    this.textFieldManager.registerTextField(__s15local0.page0.txt_desc1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_faction_tutorial_slide1_copy2"));
    this.textFieldManager.registerTextField(__s15local0.page0.txt_desc2, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_faction_tutorial_slide1_copy3"));
    this.textFieldManager.registerTextField(__s15local0.page1.txt_desc0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_faction_tutorial_slide2_copy1"));
    this.textFieldManager.registerTextField(__s15local0.page1.txt_desc1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_faction_tutorial_slide2_copy2"));
    this.textFieldManager.registerTextField(__s15local0.page2.txt_desc0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_faction_tutorial_slide3_copy1"));
    this.textFieldManager.registerTextField(__s15local0.page2.txt_desc1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_faction_tutorial_slide3_copy2"));
    this.textFieldManager.registerTextField(__s15local0.page3.txt_desc0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_faction_tutorial_slide4_copy1"));
    this.textFieldManager.registerTextField(__s15local0.page4.txt_header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_faction_tutorial_slide5_header"));
    this.textFieldManager.registerTextField(__s15local0.page5.txt_header, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_faction_tutorial_slide6_header"));
    this.textFieldManager.registerTextField(__s15local0.page5.txt_desc0, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_faction_tutorial_slide6_copy1"));
    this.textFieldManager.registerTextField(__s15local0.page5.txt_desc1, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_faction_tutorial_slide6_copy2"));
  };
  FactionEventIntroductionSublayer.prototype.updatePages = function (__s17param0, __s17param1) {
    this.updatePageDisplay();
    this.updatePagination();
  };
  FactionEventIntroductionSublayer.prototype.updatePageDisplay = function () {
    var __s19local0 = this.externalClip.currentshownDisplayObject;
    if (__s19local0) {
      for (var __s19local1 = 0; __s19local1 < FactionEventIntroductionSublayer.PAGES; ++__s19local1) {
        __s19local0["page" + __s19local1].visible = this.pagination.currentPageIndex == __s19local1;
      }
    }
  };
  FactionEventIntroductionSublayer.prototype.updatePagination = function () {
    this.subLayerDisp.mc_pagination.btn_left.visible = this.pagination.canScrollLeft();
    this.subLayerDisp.mc_pagination.btn_right.visible = this.pagination.canScrollRight();
    this.itxt_pagination.textContentVO.textReplacements = [this.pagination.currentPage, FactionEventIntroductionSublayer.PAGES];
  };
  FactionEventIntroductionSublayer.__initialize_static_members = function () {
    FactionEventIntroductionSublayer.PAGES = 6;
  };
  return FactionEventIntroductionSublayer;
}(require("gge-module:export_CastleDialogSubLayer").CastleDialogSubLayer);
exports.FactionEventIntroductionSublayer = __s0local0;
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer", "IPaginationContainer");
__s0local0.__initialize_static_members();
