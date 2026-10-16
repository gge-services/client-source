Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_26a421b704832cff = require("gge-module:exact_26a421b704832cff");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_f855840627e6e145 = require("gge-module:exact_f855840627e6e145");
var __dep_export_CastleSpecialEventEvent = require("gge-module:export_CastleSpecialEventEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __s0local0 = function (__s1param0) {
  function CastleConstructionExpertEventDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, CastleConstructionExpertEventDialog.NAME) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleConstructionExpertEventDialog, __s1param0);
  CastleConstructionExpertEventDialog.prototype.initLoaded = function (__s5param0 = null) {
    __s1param0.prototype.initLoaded.call(this);
    this.initBasicButtons([this.dialogDisp.btn_close, this.dialogDisp.btn_up, this.dialogDisp.btn_down]);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_speechBubble, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eventArchitekt_speechBubble"));
    this.textFieldManager.registerTextField(this.dialogDisp.txt_desc, new __dep_exact_92d05af59ee2ff30.LocalizedTextVO("dialog_eventArchitekt_description")).autoFitToBounds = true;
  };
  CastleConstructionExpertEventDialog.prototype.applyPropertiesLoaded = function (__s7param0 = null) {
    __dep_export_CastleModel.CastleModel.specialEventData.addEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
    var __s7local0 = __dep_export_CastleModel.CastleModel.specialEventData.getActiveEventByEventId(__dep_exact_26a421b704832cff.EventConst.EVENTTYPE_CONSTRUCTION_EXPERT).buildingList;
    this.initScrollList(__s7local0);
  };
  CastleConstructionExpertEventDialog.buildingSortOrder = function (__s9param0, __s9param1) {
    if (__s9param0.group != __s9param1.group) {
      return __dep_exact_f855840627e6e145.int(__s9param0.group > __s9param1.group ? 1 : -1);
    } else if (__s9param0.name != __s9param1.name) {
      return __dep_exact_f855840627e6e145.int(__s9param0.name > __s9param1.name ? 1 : -1);
    } else if (__s9param0.level != __s9param1.level) {
      return __dep_exact_f855840627e6e145.int(__s9param0.level > __s9param1.level ? 1 : -1);
    } else {
      return 0;
    }
  };
  CastleConstructionExpertEventDialog.prototype.initScrollList = function (__s15param0) {
    __s15param0.sort(CastleConstructionExpertEventDialog.buildingSortOrder);
    this.scrollList = new __dep_exact_9e901e8e2483a22f.ItemScrollList(this.dialogDisp, this.dialogDisp);
    this.scrollList.scrollStep = 2;
    this.scrollList.scrollItemClass = __dep_export_ConstructionExpertScrollItem.ConstructionExpertScrollItem;
    for (var __s15local0 = 0; __s15local0 < __s15param0.length; __s15local0++) {
      var __s15local1 = __s15param0[__s15local0];
      this.scrollList.pushContent(__s15local1.infoDialogVO);
    }
    this.scrollList.hideButtons = false;
    this.scrollList.initList(0);
  };
  CastleConstructionExpertEventDialog.prototype.onClick = function (__s19param0) {
    __s1param0.prototype.onClick.call(this, __s19param0);
    switch (__s19param0.target) {
      case this.dialogDisp.btn_close:
        this.hide();
    }
  };
  CastleConstructionExpertEventDialog.prototype.onRemoveEvent = function (__s22param0) {
    if (__s22param0.specialEventVO.eventId == this.dialogProperties.constructionExpertEventVO.eventId) {
      this.hide();
    }
  };
  CastleConstructionExpertEventDialog.prototype.hideLoaded = function (__s25param0 = null) {
    __s1param0.prototype.hideLoaded.call(this);
    __dep_export_CastleModel.CastleModel.specialEventData.removeEventListener(__dep_export_CastleSpecialEventEvent.CastleSpecialEventEvent.REMOVE_SPECIALEVENT, this.bindFunction(this.onRemoveEvent));
  };
  Object.defineProperty(CastleConstructionExpertEventDialog.prototype, "dialogProperties", {
    get: function () {
      return this.properties;
    },
    enumerable: true,
    configurable: true
  });
  CastleConstructionExpertEventDialog.__initialize_static_members = function () {
    CastleConstructionExpertEventDialog.NAME = "CastleConstructionExpertEvent";
  };
  return CastleConstructionExpertEventDialog;
}(require("gge-module:export_CastleExternalDialog").CastleExternalDialog);
exports.CastleConstructionExpertEventDialog = __s0local0;
var __dep_export_ConstructionExpertScrollItem = require("gge-module:export_ConstructionExpertScrollItem");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
