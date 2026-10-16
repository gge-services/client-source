Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_2 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_3 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_81dacdf05bd32292_1 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_ComboboxItemRendererVO = require("gge-module:export_ComboboxItemRendererVO");
var __dep_export_ComboboxItemRendererWorldSelection = require("gge-module:export_ComboboxItemRendererWorldSelection");
var __s0local0 = function (__s1param0) {
  function CastleWorldSelectionDialog() {
    CONSTRUCTOR_HACK;
    return __s1param0.call(this, new (__dep_exact_81dacdf05bd32292.getDefinitionByName("CastleWorldSelection"))()) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleWorldSelectionDialog, __s1param0);
  CastleWorldSelectionDialog.prototype.init = function () {
    __s1param0.prototype.init.call(this);
    this.textFieldManager.registerTextField(this.dialogDisp.txt_title, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_select_world"));
    this.selectServerCombobox = new __dep_export_ComboboxComponent.ComboboxComponent(this.dialogDisp.worldcombobox, "", 1, 40, 32, -1, 0, new __dep_export_ComboboxItemRendererWorldSelection.ComboboxItemRendererWorldSelection());
    this.dialogDisp.worldcombobox.scaleX = this.dialogDisp.worldcombobox.scaleY = 0.75;
  };
  CastleWorldSelectionDialog.prototype.initSelectServerCombobox = function () {
    var __s7local0;
    this.selectServerCombobox.clearItems();
    for (var __s7local1 = __dep_exact_9e901e8e2483a22f_1.BasicModel.instanceProxy.getInstancesForActualCountry(), __s7local2 = __dep_exact_9e901e8e2483a22f_1.BasicModel.instanceProxy.selectedInstanceVO, __s7local3 = 0, __s7local4 = 0; __s7local4 < __s7local1.length; __s7local4++) {
      var __s7local5 = __s7local1[__s7local4];
      (__s7local0 = new __dep_export_ComboboxItemRendererVO.ComboboxItemRendererVO()).itemLabel = __dep_exact_92d05af59ee2ff30.Localize.text(__s7local5.instanceLocaId);
      __s7local0.data = __s7local5;
      this.selectServerCombobox.addItem(__s7local0);
      if (__s7local2 && __s7local2.instanceId == __s7local5.instanceId) {
        __s7local3 = __s7local4;
      }
    }
    this.selectInstance(__s7local1[__s7local3].instanceId);
  };
  CastleWorldSelectionDialog.prototype.selectInstance = function (__s12param0) {
    for (var __s12local0 = 0; __s12local0 < this.selectServerCombobox.itemData.length; __s12local0++) {
      if (this.selectServerCombobox.itemData[__s12local0].data.instanceId == __s12param0) {
        this.selectServerCombobox.selectItemIndex(__s12local0);
        return;
      }
    }
    this.selectServerCombobox.selectItemIndex(1);
  };
  CastleWorldSelectionDialog.prototype.applyProperties = function () {
    this.initSelectServerCombobox();
  };
  CastleWorldSelectionDialog.prototype.onClick = function (__s19param0) {
    __s1param0.prototype.onClick.call(this, __s19param0);
    switch (__s19param0.target) {
      case this.dialogDisp.btn_ok:
        this.selectWorld();
        this.hide();
    }
  };
  CastleWorldSelectionDialog.prototype.selectWorld = function () {
    var __s22local0 = this.selectServerCombobox.selectedData;
    __dep_exact_9e901e8e2483a22f_3.debug("---------------------ZoneID = " + __s22local0.zoneId);
    __dep_exact_9e901e8e2483a22f_3.debug("---------------------Zone name = " + __s22local0.zone);
    if (__dep_exact_9e901e8e2483a22f_1.BasicModel.branchesModel && __dep_exact_9e901e8e2483a22f_1.BasicModel.branchesModel.branchByZoneId(__s22local0.zoneId.toString()) != __dep_exact_9e901e8e2483a22f_1.BasicModel.branchesModel.currentBranch) {
      __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_RELOAD_PAGE_WITH_ZONE_ID, __s22local0);
    } else {
      __dep_exact_9e901e8e2483a22f_2.CommandController.instance.executeCommand(__dep_exact_9e901e8e2483a22f.BasicController.COMMAND_CONNECT_TO_INSTANCEVO, __s22local0);
    }
  };
  CastleWorldSelectionDialog.prototype.updatePosition = function () {
    if (this.disp && this.disp.stage) {
      var __s26local0 = 1;
      if (this.disp.stage.stageWidth < this.dispBounds.width) {
        __s26local0 = this.disp.stage.stageWidth / this.dispBounds.width;
      }
      if (this.disp.stage.stageHeight < this.dispBounds.height * __s26local0) {
        __s26local0 = this.disp.stage.stageHeight / this.dispBounds.height;
      }
      this.disp.x = -this.dispBounds.left * __s26local0 - this.dispBounds.width * __s26local0 / 2 + this.disp.stage.stageWidth / 2;
      if (this.env.isTest || this.env.isLocal) {
        this.disp.y = -this.dispBounds.top * __s26local0 - this.dispBounds.height * __s26local0 / 2 + this.disp.stage.stageHeight / 4;
      } else {
        this.disp.y = -this.dispBounds.top * __s26local0 - this.dispBounds.height * __s26local0 / 2 + this.disp.stage.stageHeight / 2;
      }
      this.disp.scaleX = this.disp.scaleY = __s26local0;
    }
  };
  Object.defineProperty(CastleWorldSelectionDialog.prototype, "dialogDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  CastleWorldSelectionDialog.__initialize_static_members = function () {
    CastleWorldSelectionDialog.NAME = "CastleWorldSelectionDialog";
  };
  return CastleWorldSelectionDialog;
}(require("gge-module:export_CastleDialog").CastleDialog);
exports.CastleWorldSelectionDialog = __s0local0;
var __dep_export_ComboboxComponent = require("gge-module:export_ComboboxComponent");
__dep_exact_81dacdf05bd32292_1.classImplementsInterfaces(__s0local0, "ICollectableRendererList");
__s0local0.__initialize_static_members();
