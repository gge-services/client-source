var __s0local0;
var __s0local1;
var __s0local2;
__s0local1 = [require("gge-module:opaque_5c61709ecb7732e44481babe")];
if ((__s0local2 = typeof (__s0local0 = function (__s1param0) {
  var __s1local0;
  var __s1local1;
  var __s1local2;
  var __s1local3 = __s1param0._pathNormalize;
  var __s1local4 = __s1param0._validatePresence;
  var __s1local5 = __s1param0._validateType;
  function __s1local6(__s3param0, __s3param1) {
    __s1local5(__s3param0, __s3param1, __s3param0 === undefined || typeof __s3param0 == "function", "Function");
  }
  var __s1local7 = new (__s1local0 = function () {
    function EventEmitter() {}
    var __s5local0 = EventEmitter.prototype;
    var __s5local1 = {};
    function indexOfListener(__s9param0, __s9param1) {
      for (var __s9local0 = __s9param0.length; __s9local0--;) {
        if (__s9param0[__s9local0].listener === __s9param1) {
          return __s9local0;
        }
      }
      return -1;
    }
    function alias(__s14param0) {
      return function aliasClosure() {
        return this[__s14param0].apply(this, arguments);
      };
    }
    __s5local0.getListeners = function getListeners(__s18param0) {
      var __s18local0;
      var __s18local1;
      var __s18local2 = this._getEvents();
      if (__s18param0 instanceof RegExp) {
        __s18local0 = {};
        for (__s18local1 in __s18local2) {
          if (__s18local2.hasOwnProperty(__s18local1) && __s18param0.test(__s18local1)) {
            __s18local0[__s18local1] = __s18local2[__s18local1];
          }
        }
      } else {
        __s18local0 = __s18local2[__s18param0] ||= [];
      }
      return __s18local0;
    };
    __s5local0.flattenListeners = function flattenListeners(__s25param0) {
      var __s25local0;
      var __s25local1 = [];
      for (__s25local0 = 0; __s25local0 < __s25param0.length; __s25local0 += 1) {
        __s25local1.push(__s25param0[__s25local0].listener);
      }
      return __s25local1;
    };
    __s5local0.getListenersAsObject = function getListenersAsObject(__s29param0) {
      var __s29local0;
      var __s29local1 = this.getListeners(__s29param0);
      if (__s29local1 instanceof Array) {
        (__s29local0 = {})[__s29param0] = __s29local1;
      }
      return __s29local0 || __s29local1;
    };
    __s5local0.addListener = function addListener(__s32param0, __s32param1) {
      var __s32local0;
      var __s32local1 = this.getListenersAsObject(__s32param0);
      var __s32local2 = typeof __s32param1 == "object";
      for (__s32local0 in __s32local1) {
        if (__s32local1.hasOwnProperty(__s32local0) && indexOfListener(__s32local1[__s32local0], __s32param1) === -1) {
          __s32local1[__s32local0].push(__s32local2 ? __s32param1 : {
            listener: __s32param1,
            once: false
          });
        }
      }
      return this;
    };
    __s5local0.on = alias("addListener");
    __s5local0.addOnceListener = function addOnceListener(__s37param0, __s37param1) {
      return this.addListener(__s37param0, {
        listener: __s37param1,
        once: true
      });
    };
    __s5local0.once = alias("addOnceListener");
    __s5local0.defineEvent = function defineEvent(__s39param0) {
      this.getListeners(__s39param0);
      return this;
    };
    __s5local0.defineEvents = function defineEvents(__s41param0) {
      for (var __s41local0 = 0; __s41local0 < __s41param0.length; __s41local0 += 1) {
        this.defineEvent(__s41param0[__s41local0]);
      }
      return this;
    };
    __s5local0.removeListener = function removeListener(__s45param0, __s45param1) {
      var __s45local0;
      var __s45local1;
      var __s45local2 = this.getListenersAsObject(__s45param0);
      for (__s45local1 in __s45local2) {
        if (__s45local2.hasOwnProperty(__s45local1) && (__s45local0 = indexOfListener(__s45local2[__s45local1], __s45param1)) !== -1) {
          __s45local2[__s45local1].splice(__s45local0, 1);
        }
      }
      return this;
    };
    __s5local0.off = alias("removeListener");
    __s5local0.addListeners = function addListeners(__s50param0, __s50param1) {
      return this.manipulateListeners(false, __s50param0, __s50param1);
    };
    __s5local0.removeListeners = function removeListeners(__s52param0, __s52param1) {
      return this.manipulateListeners(true, __s52param0, __s52param1);
    };
    __s5local0.manipulateListeners = function manipulateListeners(__s54param0, __s54param1, __s54param2) {
      var __s54local0;
      var __s54local1;
      var __s54local2 = __s54param0 ? this.removeListener : this.addListener;
      var __s54local3 = __s54param0 ? this.removeListeners : this.addListeners;
      if (typeof __s54param1 != "object" || __s54param1 instanceof RegExp) {
        for (__s54local0 = __s54param2.length; __s54local0--;) {
          __s54local2.call(this, __s54param1, __s54param2[__s54local0]);
        }
      } else {
        for (__s54local0 in __s54param1) {
          if (__s54param1.hasOwnProperty(__s54local0) && (__s54local1 = __s54param1[__s54local0])) {
            if (typeof __s54local1 == "function") {
              __s54local2.call(this, __s54local0, __s54local1);
            } else {
              __s54local3.call(this, __s54local0, __s54local1);
            }
          }
        }
      }
      return this;
    };
    __s5local0.removeEvent = function removeEvent(__s65param0) {
      var __s65local0;
      var __s65local1 = typeof __s65param0;
      var __s65local2 = this._getEvents();
      if (__s65local1 === "string") {
        delete __s65local2[__s65param0];
      } else if (__s65param0 instanceof RegExp) {
        for (__s65local0 in __s65local2) {
          if (__s65local2.hasOwnProperty(__s65local0) && __s65param0.test(__s65local0)) {
            delete __s65local2[__s65local0];
          }
        }
      } else {
        delete this._events;
      }
      return this;
    };
    __s5local0.removeAllListeners = alias("removeEvent");
    __s5local0.emitEvent = function emitEvent(__s73param0, __s73param1) {
      var __s73local0;
      var __s73local1;
      var __s73local2;
      var __s73local3 = this.getListenersAsObject(__s73param0);
      for (__s73local2 in __s73local3) {
        if (__s73local3.hasOwnProperty(__s73local2)) {
          for (__s73local1 = __s73local3[__s73local2].length; __s73local1--;) {
            if ((__s73local0 = __s73local3[__s73local2][__s73local1]).once === true) {
              this.removeListener(__s73param0, __s73local0.listener);
            }
            if (__s73local0.listener.apply(this, __s73param1 || []) === this._getOnceReturnValue()) {
              this.removeListener(__s73param0, __s73local0.listener);
            }
          }
        }
      }
      return this;
    };
    __s5local0.trigger = alias("emitEvent");
    __s5local0.emit = function emit(__s82param0) {
      var __s82local0 = Array.prototype.slice.call(arguments, 1);
      return this.emitEvent(__s82param0, __s82local0);
    };
    __s5local0.setOnceReturnValue = function setOnceReturnValue(__s84param0) {
      this._onceReturnValue = __s84param0;
      return this;
    };
    __s5local0._getOnceReturnValue = function _getOnceReturnValue() {
      return !this.hasOwnProperty("_onceReturnValue") || this._onceReturnValue;
    };
    __s5local0._getEvents = function _getEvents() {
      return this._events ||= {};
    };
    EventEmitter.noConflict = function noConflict() {
      __s5local1.EventEmitter = originalGlobalValue;
      return EventEmitter;
    };
    return EventEmitter;
  }())();
  /*!
   * EventEmitter v4.2.7 - git.io/ee
   * Oliver Caldwell
   * MIT license
   * @preserve
   */
  function validateThenCall(__s92param0, __s92param1) {
    return function (__s94param0, __s94param1) {
      __s1local4(__s94param0, "event");
      (function validateTypeEvent(__s96param0, __s96param1) {
        __s1local5(__s96param0, __s96param1, typeof __s96param0 == "string" || __s96param0 instanceof RegExp, "String or RegExp");
      })(__s94param0, "event");
      __s1local4(__s94param1, "listener");
      __s1local6(__s94param1, "listener");
      return __s92param1[__s92param0].apply(__s92param1, arguments);
    };
  }
  function off(__s98param0) {
    return validateThenCall("off", __s98param0);
  }
  function __s1local8(__s100param0) {
    return validateThenCall("on", __s100param0);
  }
  function once(__s102param0) {
    return validateThenCall("once", __s102param0);
  }
  function getOverload() {
    __s1local1 = __s1param0.prototype.get;
    __s1param0.prototype.get = function (__s106param0) {
      var __s106local0 = __s1local1.apply(this, arguments);
      __s106param0 = __s1local3(__s106param0, this.attributes).join("/");
      __s1local7.trigger("get", [__s106param0, __s106local0]);
      this.ee.trigger("get", [__s106param0, __s106local0]);
      return __s106local0;
    };
  }
  __s1param0.off = off(__s1local7);
  __s1param0.on = __s1local8(__s1local7);
  __s1param0.once = once(__s1local7);
  __s1local2 = __s1param0.prototype.init;
  __s1param0.prototype.init = function () {
    var __s108local0;
    this.ee = __s108local0 = new __s1local0();
    this.off = off(__s108local0);
    this.on = __s1local8(__s108local0);
    this.once = once(__s108local0);
    __s1local2.apply(this, arguments);
  };
  __s1param0._eventInit = getOverload;
  getOverload();
  return __s1param0;
}) == "function" ? __s0local0.apply(exports, __s0local1) : __s0local0) !== undefined) {
  module.exports = __s0local2;
}
