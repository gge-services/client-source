var __s0local0;
var __s0local1;
(function (__s1param0) {
  'use strict';

  var __s1local0;
  var __s1local1 = {
    VERSION: "1.6.1"
  };
  var __s1local2 = {};
  function __s1local3(__s3param0, __s3param1) {
    return function () {
      return __s3param1.apply(__s3param0, arguments);
    };
  }
  function __s1local4() {
    var __s7local0;
    var __s7local1;
    var __s7local2 = arguments;
    var __s7local3 = __s7local2[0];
    for (__s7local1 = 1; __s7local1 < __s7local2.length; __s7local1++) {
      for (__s7local0 in __s7local2[__s7local1]) {
        if (!(__s7local0 in __s7local3) && !!__s7local2[__s7local1].hasOwnProperty(__s7local0)) {
          __s7local3[__s7local0] = __s7local2[__s7local1][__s7local0];
        }
      }
    }
    return __s7local3;
  }
  function __s1local5(__s14param0, __s14param1) {
    return {
      value: __s14param0,
      name: __s14param1
    };
  }
  __s1local1.TRACE = __s1local5(1, "TRACE");
  __s1local1.DEBUG = __s1local5(2, "DEBUG");
  __s1local1.INFO = __s1local5(3, "INFO");
  __s1local1.TIME = __s1local5(4, "TIME");
  __s1local1.WARN = __s1local5(5, "WARN");
  __s1local1.ERROR = __s1local5(8, "ERROR");
  __s1local1.OFF = __s1local5(99, "OFF");
  function __s1local6(__s16param0) {
    this.context = __s16param0;
    this.setLevel(__s16param0.filterLevel);
    this.log = this.info;
  }
  __s1local6.prototype = {
    setLevel: function (__s18param0) {
      if (__s18param0 && "value" in __s18param0) {
        this.context.filterLevel = __s18param0;
      }
    },
    getLevel: function () {
      return this.context.filterLevel;
    },
    enabledFor: function (__s23param0) {
      var __s23local0 = this.context.filterLevel;
      return __s23param0.value >= __s23local0.value;
    },
    trace: function () {
      this.invoke(__s1local1.TRACE, arguments);
    },
    debug: function () {
      this.invoke(__s1local1.DEBUG, arguments);
    },
    info: function () {
      this.invoke(__s1local1.INFO, arguments);
    },
    warn: function () {
      this.invoke(__s1local1.WARN, arguments);
    },
    error: function () {
      this.invoke(__s1local1.ERROR, arguments);
    },
    time: function (__s35param0) {
      if (typeof __s35param0 == "string" && __s35param0.length > 0) {
        this.invoke(__s1local1.TIME, [__s35param0, "start"]);
      }
    },
    timeEnd: function (__s38param0) {
      if (typeof __s38param0 == "string" && __s38param0.length > 0) {
        this.invoke(__s1local1.TIME, [__s38param0, "end"]);
      }
    },
    invoke: function (__s41param0, __s41param1) {
      if (__s1local0 && this.enabledFor(__s41param0)) {
        __s1local0(__s41param1, __s1local4({
          level: __s41param0
        }, this.context));
      }
    }
  };
  var __s1local7;
  var __s1local8 = new __s1local6({
    filterLevel: __s1local1.OFF
  });
  (__s1local7 = __s1local1).enabledFor = __s1local3(__s1local8, __s1local8.enabledFor);
  __s1local7.trace = __s1local3(__s1local8, __s1local8.trace);
  __s1local7.debug = __s1local3(__s1local8, __s1local8.debug);
  __s1local7.time = __s1local3(__s1local8, __s1local8.time);
  __s1local7.timeEnd = __s1local3(__s1local8, __s1local8.timeEnd);
  __s1local7.info = __s1local3(__s1local8, __s1local8.info);
  __s1local7.warn = __s1local3(__s1local8, __s1local8.warn);
  __s1local7.error = __s1local3(__s1local8, __s1local8.error);
  __s1local7.log = __s1local7.info;
  __s1local1.setHandler = function (__s44param0) {
    __s1local0 = __s44param0;
  };
  __s1local1.setLevel = function (__s46param0) {
    __s1local8.setLevel(__s46param0);
    for (var __s46local0 in __s1local2) {
      if (__s1local2.hasOwnProperty(__s46local0)) {
        __s1local2[__s46local0].setLevel(__s46param0);
      }
    }
  };
  __s1local1.getLevel = function () {
    return __s1local8.getLevel();
  };
  __s1local1.get = function (__s53param0) {
    return __s1local2[__s53param0] ||= new __s1local6(__s1local4({
      name: __s53param0
    }, __s1local8.context));
  };
  __s1local1.createDefaultHandler = function (__s55param0) {
    (__s55param0 = __s55param0 || {}).formatter = __s55param0.formatter || function defaultMessageFormatter(__s57param0, __s57param1) {
      if (__s57param1.name) {
        __s57param0.unshift("[" + __s57param1.name + "]");
      }
    };
    var __s55local0 = {};
    function __s55local1(__s60param0, __s60param1) {
      Function.prototype.apply.call(__s60param0, console, __s60param1);
    }
    if (typeof console == "undefined") {
      return function () {};
    } else {
      return function (__s66param0, __s66param1) {
        __s66param0 = Array.prototype.slice.call(__s66param0);
        var __s66local0;
        var __s66local1 = console.log;
        if (__s66param1.level === __s1local1.TIME) {
          __s66local0 = (__s66param1.name ? "[" + __s66param1.name + "] " : "") + __s66param0[0];
          if (__s66param0[1] === "start") {
            if (console.time) {
              console.time(__s66local0);
            } else {
              __s55local0[__s66local0] = new Date().getTime();
            }
          } else if (console.timeEnd) {
            console.timeEnd(__s66local0);
          } else {
            __s55local1(__s66local1, [__s66local0 + ": " + (new Date().getTime() - __s55local0[__s66local0]) + "ms"]);
          }
        } else {
          if (__s66param1.level === __s1local1.WARN && console.warn) {
            __s66local1 = console.warn;
          } else if (__s66param1.level === __s1local1.ERROR && console.error) {
            __s66local1 = console.error;
          } else if (__s66param1.level === __s1local1.INFO && console.info) {
            __s66local1 = console.info;
          } else if (__s66param1.level === __s1local1.DEBUG && console.debug) {
            __s66local1 = console.debug;
          } else if (__s66param1.level === __s1local1.TRACE && console.trace) {
            __s66local1 = console.trace;
          }
          __s55param0.formatter(__s66param0, __s66param1);
          __s55local1(__s66local1, __s66param0);
        }
      };
    }
  };
  __s1local1.useDefaults = function (__s80param0) {
    __s1local1.setLevel(__s80param0 && __s80param0.defaultLevel || __s1local1.DEBUG);
    __s1local1.setHandler(__s1local1.createDefaultHandler(__s80param0));
  };
  __s1local1.setDefaults = __s1local1.useDefaults;
  if ((__s0local1 = typeof (__s0local0 = __s1local1) == "function" ? __s0local0.call(exports, require, exports, module) : __s0local0) !== undefined) {
    module.exports = __s0local1;
  }
})();
