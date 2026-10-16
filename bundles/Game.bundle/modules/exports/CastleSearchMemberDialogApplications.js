Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __dep_exact_9e901e8e2483a22f = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_9e901e8e2483a22f_1 = require("gge-module:exact_9e901e8e2483a22f");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_92d05af59ee2ff30 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_exact_92d05af59ee2ff30_1 = require("gge-module:exact_92d05af59ee2ff30");
var __dep_export_CastleAllianceDataEvent = require("gge-module:export_CastleAllianceDataEvent");
var __dep_export_CastleModel = require("gge-module:export_CastleModel");
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __dep_export_CastleDialogSubLayer = require("gge-module:export_CastleDialogSubLayer");
var __dep_export_CastleAllianceReadApplicationDialogProperties = require("gge-module:export_CastleAllianceReadApplicationDialogProperties");
var __dep_export_ListAllianceApplicationItem = require("gge-module:export_ListAllianceApplicationItem");
var __dep_export_ListAllianceApplicationItemVO = require("gge-module:export_ListAllianceApplicationItemVO");
var __s0local0 = function (__s1param0) {
  function CastleSearchMemberDialogApplications(__s3param0) {
    var __s3local0 = __s1param0.call(this, __s3param0) || this;
    __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_date, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_date"));
    __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_name, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("generic_name"));
    __s3local0.textFieldManager.registerTextField(__s3local0.sublayerDisp.txt_level, new __dep_exact_92d05af59ee2ff30_1.LocalizedTextVO("level"));
    __s3local0.sublayerDisp.icon_distance.toolTipText = "distance";
    __s3local0.sublayerDisp.icon_honor.toolTipText = "honor";
    __s3local0._applicationListComponent = new __dep_exact_9e901e8e2483a22f.ItemScrollList(__s3local0.sublayerDisp.mc_applicationList, __s3local0.sublayerDisp);
    __s3local0._applicationListComponent.scrollItemClass = __dep_export_ListAllianceApplicationItem.ListAllianceApplicationItem;
    __s3local0._applicationListComponent.clear();
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0.sublayerDisp.mc_applicationList.btn_up);
    __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s3local0.sublayerDisp.mc_applicationList.btn_down);
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleSearchMemberDialogApplications, __s1param0);
  CastleSearchMemberDialogApplications.prototype.show = function (__s5param0) {
    __s1param0.prototype.show.call(this, __s5param0);
    this.fillList(this.properties.applicationList);
    this._applicationListComponent.addEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.CLICK, this.bindFunction(this.onClickScrollistItem));
    __dep_export_CastleModel.CastleModel.allianceData.addEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCE_APPLICATION_LIST_UPDATED, this.bindFunction(this.onApplicationListUpdated));
  };
  CastleSearchMemberDialogApplications.prototype.onApplicationListUpdated = function (__s7param0) {
    this.properties.applicationList = __s7param0.params[0];
    this.fillList(this.properties.applicationList);
  };
  CastleSearchMemberDialogApplications.prototype.fillList = function (__s9param0) {
    this._applicationListComponent.clear();
    if (__s9param0 != null) {
      for (var __s9local0 = 0, __s9local1 = __s9param0; __s9local0 < __s9local1.length; __s9local0++) {
        var __s9local2 = __s9local1[__s9local0];
        if (__s9local2 !== undefined) {
          var __s9local3 = new __dep_export_ListAllianceApplicationItemVO.ListAllianceApplicationItemVO();
          __s9local3.listVO = __s9local2;
          this._applicationListComponent.pushContent(__s9local3);
        }
      }
    }
    this._applicationListComponent.initList();
  };
  CastleSearchMemberDialogApplications.prototype.hide = function () {
    __s1param0.prototype.hide.call(this);
    this._applicationListComponent.removeEventListener(__dep_exact_9e901e8e2483a22f_1.ScrollItemEvent.CLICK, this.bindFunction(this.onClickScrollistItem));
    __dep_export_CastleModel.CastleModel.allianceData.removeEventListener(__dep_export_CastleAllianceDataEvent.CastleAllianceDataEvent.ALLIANCE_APPLICATION_LIST_UPDATED, this.bindFunction(this.onApplicationListUpdated));
  };
  CastleSearchMemberDialogApplications.prototype.onClickScrollistItem = function (__s17param0) {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().registerDefaultDialogs(__dep_export_CastleAllianceReadApplicationDialog.CastleAllianceReadApplicationDialog, new __dep_export_CastleAllianceReadApplicationDialogProperties.CastleAllianceReadApplicationDialogProperties(__s17param0.scrollItem.itemVO.listVO));
  };
  CastleSearchMemberDialogApplications.prototype.showHelp = function () {
    __dep_export_CastleDialogHandler.CastleDialogHandler.getInstance().showHelper("", __dep_exact_92d05af59ee2ff30.Localize.text("help_allianceOpenRequests"));
  };
  Object.defineProperty(CastleSearchMemberDialogApplications.prototype, "properties", {
    get: function () {
      return this._params[0];
    },
    enumerable: true,
    configurable: true
  });
  Object.defineProperty(CastleSearchMemberDialogApplications.prototype, "sublayerDisp", {
    get: function () {
      return this.disp;
    },
    enumerable: true,
    configurable: true
  });
  return CastleSearchMemberDialogApplications;
}(__dep_export_CastleDialogSubLayer.CastleDialogSubLayer);
exports.CastleSearchMemberDialogApplications = __s0local0;
var __dep_export_CastleDialogHandler = require("gge-module:export_CastleDialogHandler");
var __dep_export_CastleAllianceReadApplicationDialog = require("gge-module:export_CastleAllianceReadApplicationDialog");
__dep_exact_81dacdf05bd32292.classImplementsInterfaces(__s0local0, "ICollectableRendererList", "ISublayer");
