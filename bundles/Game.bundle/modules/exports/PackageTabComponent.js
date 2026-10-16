Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.MouseEvent;
var __s0local1 = function () {
  function PackageTabComponent(__s3param0, __s3param1) {
    this.disp = __s3param0;
    this.onTabChanged = __s3param1;
    this.tabs = [];
  }
  PackageTabComponent.prototype.addTab = function (__s5param0, __s5param1, __s5param2) {
    this.tabs.push(new __s0local2(__s5param0, __s5param1, __s5param2));
  };
  PackageTabComponent.prototype.init = function () {
    this.defaultTab = this.tabs[0];
    if (this.tabs != null) {
      for (var __s7local0 = 0, __s7local1 = this.tabs; __s7local0 < __s7local1.length; __s7local0++) {
        var __s7local2 = __s7local1[__s7local0];
        if (__s7local2 !== undefined) {
          __s7local2.disp.toolTipText = __s7local2.toolTip;
          __dep_export_ButtonHelper.ButtonHelper.initBasicButton(__s7local2.disp);
        }
      }
    }
  };
  PackageTabComponent.prototype.updateTabsEnablement = function (__s13param0) {
    if (this.tabs != null) {
      for (var __s13local0 = 0, __s13local1 = this.tabs; __s13local0 < __s13local1.length; __s13local0++) {
        var __s13local2 = __s13local1[__s13local0];
        if (__s13local2 !== undefined) {
          var __s13local3 = false;
          if (__s13param0 != null) {
            for (var __s13local4 = 0, __s13local5 = __s13param0; __s13local4 < __s13local5.length; __s13local4++) {
              var __s13local6 = __s13local5[__s13local4];
              if (__s13local6 !== undefined && __s13local2.filterFunction(__s13local6)) {
                __s13local3 = true;
                break;
              }
            }
          }
          __dep_export_ButtonHelper.ButtonHelper.enableButton(__s13local2.disp, __s13local3);
          __s13local2.disp.toolTipText = __s13local3 ? __s13local2.toolTip : "alert_not_available";
        }
      }
    }
  };
  PackageTabComponent.prototype.show = function () {
    this.disp.addEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
    this.selectedTab = this.defaultTab;
  };
  PackageTabComponent.prototype.hide = function () {
    this.disp.removeEventListener(__s0local0.CLICK, this.bindFunction(this.onClick));
  };
  PackageTabComponent.prototype.onClick = function (__s27param0) {
    if (__dep_export_ButtonHelper.ButtonHelper.isButtonEnabled(__s27param0.target) && this.tabs != null) {
      for (var __s27local0 = 0, __s27local1 = this.tabs; __s27local0 < __s27local1.length; __s27local0++) {
        var __s27local2 = __s27local1[__s27local0];
        if (__s27local2 !== undefined && __s27param0.target == __s27local2.disp) {
          this.selectedTab = __s27local2;
          return;
        }
      }
    }
  };
  Object.defineProperty(PackageTabComponent.prototype, "selectedTab", {
    set: function (__s33param0) {
      this._selectedTab = __s33param0;
      this.updateTabFrames();
      this.onTabChanged();
    },
    enumerable: true,
    configurable: true
  });
  PackageTabComponent.prototype.updateTabFrames = function () {
    if (this.tabs != null) {
      for (var __s35local0 = 0, __s35local1 = this.tabs; __s35local0 < __s35local1.length; __s35local0++) {
        var __s35local2 = __s35local1[__s35local0];
        if (__s35local2 !== undefined) {
          __s35local2.disp.gotoAndStop(this.getTabFrame(__s35local2));
        }
      }
    }
  };
  PackageTabComponent.prototype.getTabFrame = function (__s41param0) {
    if (this._selectedTab == __s41param0) {
      return PackageTabComponent.SELECTED_TAB_FRAME;
    } else {
      return PackageTabComponent.DEFAULT_TAB_FRAME;
    }
  };
  PackageTabComponent.prototype.isPackageInCurrentTab = function (__s45param0) {
    return !!this._selectedTab.filterFunction(__s45param0);
  };
  Object.defineProperty(PackageTabComponent.prototype, "isFilterReset", {
    get: function () {
      return this._selectedTab == this.defaultTab;
    },
    enumerable: true,
    configurable: true
  });
  PackageTabComponent.__initialize_static_members = function () {
    PackageTabComponent.DEFAULT_TAB_FRAME = 2;
    PackageTabComponent.SELECTED_TAB_FRAME = 1;
  };
  return PackageTabComponent;
}();
exports.PackageTabComponent = __s0local1;
var __dep_export_ButtonHelper = require("gge-module:export_ButtonHelper");
var __s0local2 = function () {
  return function Tab(__s53param0, __s53param1, __s53param2) {
    this.disp = __s53param0;
    this.toolTip = __s53param1;
    this.filterFunction = __s53param2;
  };
}();
__s0local1.__initialize_static_members();
