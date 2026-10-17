// Canonical symbol view; NOT a standalone executable Webpack module.
// Bundle: Game.bundle; Webpack module: 835
// Export: CastleTutorialController; preserved source: modules/webpack/exports/CastleTutorialController.js
// Original canonical SHA-256: 70ec26426a76d5ef19511f264a02db0499be98334be48cf1985f4cd52aa62432
var __s0local1 = function (__s1param0) {
  function CastleTutorialController(__s3param0) {
    return __s1param0.call(this) || this;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(CastleTutorialController, __s1param0);
  Object.defineProperty(CastleTutorialController, "layoutManager", {
    get: function () {
      return __dep_export_CastleLayoutManager.CastleLayoutManager.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  CastleTutorialController.prototype.removeListeners = function () {
    __dep_export_CastleModel.CastleModel.tutorialData.removeAllListeners();
  };
  CastleTutorialController.prototype.startStep = function (__s9param0, __s9param1) {
    __dep_export_CastleModel.CastleModel.tutorialData.removeAllListeners();
    __dep_export_CastleModel.CastleModel.tutorialData.activateTutorial(true);
    __dep_exact_9e901e8e2483a22f.CommandController.instance.executeCommand(__s9param0.command, [__s9param0, __s9param1]);
  };
  CastleTutorialController.prototype.finishStep = function () {
    __dep_export_CastleModel.CastleModel.tutorialData.removeAllListeners();
    __dep_export_CastleModel.CastleModel.tutorialData.clearBlockers();
    if (CastleTutorialController.layoutManager.tutorialPanel) {
      CastleTutorialController.layoutManager.tutorialPanel.hide();
    }
    __dep_export_CastleModel.CastleModel.tutorialData.activateTutorial(false);
    __dep_export_CastleModel.CastleModel.tutorialData.checkDelayedSteps();
  };
  CastleTutorialController.prototype.waitForDialogShow = function (__s14param0, __s14param1) {
    if (CastleTutorialController.layoutManager.isDialogVisibleByName(__s14param0)) {
      __s14param1();
    } else {
      var __s14local0 = new __dep_export_TutorialListenerObject.TutorialListenerObject(CastleTutorialController.controller, __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_DIALOG, this.waitForDialogListener(__s14param0, __s14param1, __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_DIALOG));
      this.startListening(__s14local0);
    }
  };
  CastleTutorialController.prototype.waitForExternalDialogShow = function (__s18param0, __s18param1) {
    if (CastleTutorialController.layoutManager.isDialogVisibleByName(__s18param0)) {
      __s18param1();
    } else {
      var __s18local0 = new __dep_export_TutorialListenerObject.TutorialListenerObject(CastleTutorialController.controller, __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_EXTERNAL_DIALOG, this.waitForDialogListener(__s18param0, __s18param1, __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_EXTERNAL_DIALOG));
      this.startListening(__s18local0);
    }
  };
  CastleTutorialController.prototype.waitForSublayerPanelShow = function (__s22param0, __s22param1) {
    var __s22local0 = new __dep_export_TutorialListenerObject.TutorialListenerObject(CastleTutorialController.controller, __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_SUBLAYER_PANEL, this.waitForDialogListener(__s22param0.buttonClassName, __s22param1, __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.SHOW_SUBLAYER_PANEL));
    this.startListening(__s22local0);
  };
  CastleTutorialController.prototype.waitForSublayerPanelHide = function (__s24param0, __s24param1) {
    var __s24local0 = new __dep_export_TutorialListenerObject.TutorialListenerObject(CastleTutorialController.controller, __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.HIDE_SUBLAYER_PANEL, this.waitForDialogListener(__s24param0.buttonClassName, __s24param1, __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.HIDE_SUBLAYER_PANEL));
    this.startListening(__s24local0);
  };
  CastleTutorialController.prototype.waitForDialogHide = function (__s26param0, __s26param1) {
    var __s26local0 = new __dep_export_TutorialListenerObject.TutorialListenerObject(CastleTutorialController.controller, __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.HIDE_DIALOG, this.waitForDialogListener(__s26param0, __s26param1, __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.HIDE_DIALOG));
    this.startListening(__s26local0);
  };
  CastleTutorialController.prototype.waitForExternalDialogHide = function (__s28param0, __s28param1) {
    var __s28local0 = new __dep_export_TutorialListenerObject.TutorialListenerObject(CastleTutorialController.controller, __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.HIDE_EXTERNAL_DIALOG, this.waitForDialogListener(__s28param0, __s28param1, __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.HIDE_EXTERNAL_DIALOG));
    this.startListening(__s28local0);
  };
  CastleTutorialController.prototype.waitForLayoutStateChange = function (__s30param0, __s30param1) {
    var __s30local0 = new __dep_export_TutorialListenerObject.TutorialListenerObject(CastleTutorialController.controller, __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE, this.waitForLayoutStateListener(__s30param0, __s30param1, __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE));
    this.startListening(__s30local0);
  };
  CastleTutorialController.prototype.waitForLayoutStateChangeFinished = function (__s32param0, __s32param1) {
    var __s32local0 = new __dep_export_TutorialListenerObject.TutorialListenerObject(CastleTutorialController.controller, __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE_FINISHED, this.waitForLayoutStateListener(__s32param0, __s32param1, __dep_export_CastleLayoutManagerEvent.CastleLayoutManagerEvent.CHANGE_LAYOUTSTATE_FINISHED));
    this.startListening(__s32local0);
  };
  CastleTutorialController.prototype.waitForJoinCastle = function (__s34param0) {
    var __s34local0 = new __dep_export_TutorialListenerObject.TutorialListenerObject(CastleTutorialController.controller, __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED, this.genericEventListener(CastleTutorialController.controller, __s34param0, __dep_export_CastleServerMessageArrivedEvent.CastleServerMessageArrivedEvent.JAA_ARRIVED));
    this.startListening(__s34local0);
  };
  CastleTutorialController.prototype.registerComplexListener = function (__s36param0, __s36param1, __s36param2) {
    __dep_export_CastleModel.CastleModel.tutorialData.registerListener(__s36param0, __s36param1, __s36param2);
  };
  CastleTutorialController.prototype.removeComplexListener = function (__s38param0, __s38param1, __s38param2) {
    __dep_export_CastleModel.CastleModel.tutorialData.removeListener(__s38param0, __s38param1, __s38param2);
  };
  CastleTutorialController.prototype.removeListenerFrom = function (__s40param0) {
    __dep_export_CastleModel.CastleModel.tutorialData.removeFromExisting(__s40param0);
  };
  CastleTutorialController.prototype.waitForDialogListener = function (__s42param0, __s42param1, __s42param2) {
    function __s42local0(__s44param0) {
      if (__s44param0.type == __s42param2 && __s44param0.params[0] && __s44param0.params[0] == __s42param0) {
        CastleTutorialController.controller.removeEventListener(__s42param2, __s42local0);
        __dep_export_CastleModel.CastleModel.tutorialData.removeFromExisting(__s42local0);
        __s42param1();
      }
    }
    return __s42local0;
  };
  CastleTutorialController.prototype.waitForDialogListenerCallback = function (__s47param0, __s47param1, __s47param2, __s47param3) {
    if (__s47param0.type == __s47param2 && __s47param0.params[0] && __s47param0.params[0] == __s47param3) {
      CastleTutorialController.controller.removeEventListener(__s47param2, this.bindFunction(this.waitForDialogListener));
      __dep_export_CastleModel.CastleModel.tutorialData.removeFromExisting(this.bindFunction(this.waitForDialogListener));
      __s47param1();
    }
  };
  CastleTutorialController.prototype.genericEventListener = function (__s50param0, __s50param1, __s50param2) {
    function __s50local0(__s52param0) {
      if (__s52param0.type == __s50param2) {
        __s50param0.removeEventListener(__s52param0.type, __s50local0);
        __dep_export_CastleModel.CastleModel.tutorialData.removeFromExisting(__s50local0);
        __s50param1();
      }
    }
    return __s50local0;
  };
  CastleTutorialController.prototype.waitForLayoutStateListener = function (__s55param0, __s55param1, __s55param2) {
    function __s55local0(__s57param0) {
      if (__s57param0.type == __s55param2 && __s57param0.params[0] && __s57param0.params[0] == __s55param0) {
        CastleTutorialController.controller.removeEventListener(__s55param2, __s55local0);
        __dep_export_CastleModel.CastleModel.tutorialData.removeFromExisting(__s55local0);
        __s55param1();
      }
    }
    return __s55local0;
  };
  CastleTutorialController.prototype.onClick = function (__s60param0, __s60param1) {
    function __s60local0() {
      __s60param0.removeEventListener(__s0local0.CLICK, __s60local0);
      __dep_export_CastleModel.CastleModel.tutorialData.removeFromExisting(__s60local0);
      __s60param1();
    }
    var __s60local1 = new __dep_export_TutorialListenerObject.TutorialListenerObject(__s60param0, __s0local0.CLICK, __s60local0);
    this.startListening(__s60local1);
  };
  CastleTutorialController.prototype.startListening = function (__s64param0) {
    __dep_export_CastleModel.CastleModel.tutorialData.existingListeners.push(__s64param0);
    __s64param0.target.addEventListener(__s64param0.type, __s64param0.listenerFunc);
  };
  CastleTutorialController.getInstance = function () {
    CastleTutorialController.tutorialControllerInstance ||= new CastleTutorialController(new __s0local2());
    return CastleTutorialController.tutorialControllerInstance;
  };
  Object.defineProperty(CastleTutorialController, "controller", {
    get: function () {
      return __dep_export_CastleBasicController.CastleBasicController.getInstance();
    },
    enumerable: true,
    configurable: true
  });
  return CastleTutorialController;
}(__dep_export_CastleEventDispatcher.CastleEventDispatcher);
exports.CastleTutorialController = __s0local1;
