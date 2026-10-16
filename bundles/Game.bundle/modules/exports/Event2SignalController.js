Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = createjs.Event;
var __s0local1 = createjs.MouseEvent;
var __s0local2 = function () {
  function Event2SignalController() {}
  Event2SignalController.add = function (__s5param0, __s5param1, __s5param2) {
    try {
      if (!Event2SignalController._eventDispatcherMap.get(__s5param0)) {
        Event2SignalController._eventDispatcherMap.set(__s5param0, {});
      }
      if (Event2SignalController._eventDispatcherMap.get(__s5param0)[__s5param1] == null) {
        Event2SignalController._eventDispatcherMap.get(__s5param0)[__s5param1] = new __dep_exact_5c7bc328fca9e4de.Signal();
      }
      Event2SignalController._eventDispatcherMap.get(__s5param0)[__s5param1].add(__s5param2);
    } catch (__s10local0) {
      __s0local3.warn("[Event2SignalController] [add]", __s5param0, __s5param1, __s5param2, __s10local0);
    }
  };
  Event2SignalController.hasEventListener = function (__s12param0, __s12param1) {
    return !!__s12param0 && !!__s12param1 && !!Event2SignalController._eventDispatcherMap && !!Event2SignalController._eventDispatcherMap.get(__s12param0) && !!Event2SignalController._eventDispatcherMap.get(__s12param0)[__s12param1];
  };
  Event2SignalController.dispatchSignal = function (__s14param0, __s14param1, __s14param2) {
    if (__s14param0 && __s14param1 && __s14param2 && Event2SignalController._eventDispatcherMap && Event2SignalController._eventDispatcherMap.get(__s14param0) && Event2SignalController._eventDispatcherMap.get(__s14param0)[__s14param1]) {
      if (__dep_exact_81dacdf05bd32292.instanceOfClass(__s14param2, "CastleEvent")) {
        __s14param2.target = __s14param0;
      }
      Event2SignalController._eventDispatcherMap.get(__s14param0)[__s14param1].dispatch(__s14param2);
    }
  };
  Event2SignalController.remove = function (__s18param0, __s18param1, __s18param2) {
    try {
      if (Event2SignalController._eventDispatcherMap.get(__s18param0) && Event2SignalController._eventDispatcherMap.get(__s18param0)[__s18param1]) {
        Event2SignalController._eventDispatcherMap.get(__s18param0)[__s18param1].remove(__s18param2);
        if (Event2SignalController._eventDispatcherMap.get(__s18param0)[__s18param1].numListeners <= 0) {
          delete Event2SignalController._eventDispatcherMap.get(__s18param0)[__s18param1];
        }
        if (Object.keys(Event2SignalController._eventDispatcherMap.get(__s18param0)).length == 0) {
          Event2SignalController._eventDispatcherMap.delete(__s18param0);
        }
      }
    } catch (__s24local0) {
      __s0local3.warn("[Event2SignalController] [remove]", __s18param0, __s18param1, __s18param2, __s24local0);
    }
  };
  Event2SignalController.clear = function () {
    var __s26local0 = Event2SignalController._eventDispatcherMap.get(__dep_export_CastleBasicController.CastleBasicController.getInstance());
    Event2SignalController._eventDispatcherMap.clear();
    Event2SignalController._eventDispatcherMap.set(__dep_export_CastleBasicController.CastleBasicController.getInstance(), __s26local0);
  };
  Event2SignalController.isNativeEvent = function (__s28param0) {
    var __s28local0 = false;
    switch (__s28param0) {
      case __s0local0.INIT:
      case __s0local0.ADDED_TO_STAGE:
      case __s0local0.REMOVED_FROM_STAGE:
      case __s0local0.REMOVED:
      case __s0local0.ENTER_FRAME:
      case __s0local0.FRAME_CONSTRUCTED:
      case __s0local0.RENDER:
      case __s0local0.COMPLETE:
      case __s0local0.RESIZE:
      case __s0local1.CLICK:
      case __s0local1.MOUSE_DOWN:
      case __s0local1.MOUSE_MOVE:
      case __s0local1.MOUSE_OUT:
      case __s0local1.MOUSE_OVER:
      case __s0local1.MOUSE_UP:
      case __s0local1.MOUSE_WHEEL:
      case __s0local1.ROLL_OUT:
      case __s0local1.ROLL_OVER:
        __s28local0 = true;
    }
    return __s28local0;
  };
  Event2SignalController.__initialize_static_members = function () {
    Event2SignalController._eventDispatcherMap = new Map();
  };
  Event2SignalController.LOGGER_NAME = "Event2SignalController";
  return Event2SignalController;
}();
exports.Event2SignalController = __s0local2;
var __dep_export_CastleBasicController = require("gge-module:export_CastleBasicController");
var __dep_exact_81dacdf05bd32292 = require("gge-module:exact_81dacdf05bd32292");
var __dep_exact_c549e43d1112dfff = require("gge-module:exact_c549e43d1112dfff");
var __dep_exact_5c7bc328fca9e4de = require("gge-module:exact_5c7bc328fca9e4de");
__s0local2.__initialize_static_members();
var __s0local3 = __dep_exact_c549e43d1112dfff.getLogger(__s0local2.LOGGER_NAME);
