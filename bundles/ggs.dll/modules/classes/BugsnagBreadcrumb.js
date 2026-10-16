module.exports = function () {
  function __s1local0(__s3param0, __s3param1, __s3param2) {
    var __s3local0 = __s3param2;
    for (var __s3local1 = 0, __s3local2 = __s3param0.length; __s3local1 < __s3local2; __s3local1++) {
      __s3local0 = __s3param1(__s3local0, __s3param0[__s3local1], __s3local1, __s3param0);
    }
    return __s3local0;
  }
  var __s1local1 = !{
    toString: null
  }.propertyIsEnumerable("toString");
  var __s1local2 = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"];
  function __s1local3(__s7param0) {
    if (__s7param0 < 10) {
      return "0" + __s7param0;
    } else {
      return __s7param0;
    }
  }
  var __s1local4 = {
    map: function (__s11param0, __s11param1) {
      return __s1local0(__s11param0, function (__s13param0, __s13param1, __s13param2, __s13param3) {
        return __s13param0.concat(__s11param1(__s13param1, __s13param2, __s13param3));
      }, []);
    },
    reduce: __s1local0,
    filter: function (__s15param0, __s15param1) {
      return __s1local0(__s15param0, function (__s17param0, __s17param1, __s17param2, __s17param3) {
        if (__s15param1(__s17param1, __s17param2, __s17param3)) {
          return __s17param0.concat(__s17param1);
        } else {
          return __s17param0;
        }
      }, []);
    },
    includes: function (__s21param0, __s21param1) {
      return __s1local0(__s21param0, function (__s23param0, __s23param1, __s23param2, __s23param3) {
        return __s23param0 === true || __s23param1 === __s21param1;
      }, false);
    },
    keys: function (__s25param0) {
      var __s25local0 = [];
      var __s25local1 = undefined;
      for (__s25local1 in __s25param0) {
        if (Object.prototype.hasOwnProperty.call(__s25param0, __s25local1)) {
          __s25local0.push(__s25local1);
        }
      }
      if (!__s1local1) {
        return __s25local0;
      }
      for (var __s25local2 = 0, __s25local3 = __s1local2.length; __s25local2 < __s25local3; __s25local2++) {
        if (Object.prototype.hasOwnProperty.call(__s25param0, __s1local2[__s25local2])) {
          __s25local0.push(__s1local2[__s25local2]);
        }
      }
      return __s25local0;
    },
    isArray: function (__s34param0) {
      return Object.prototype.toString.call(__s34param0) === "[object Array]";
    },
    isoDate: function () {
      var __s36local0 = new Date();
      return __s36local0.getUTCFullYear() + "-" + __s1local3(__s36local0.getUTCMonth() + 1) + "-" + __s1local3(__s36local0.getUTCDate()) + "T" + __s1local3(__s36local0.getUTCHours()) + ":" + __s1local3(__s36local0.getUTCMinutes()) + ":" + __s1local3(__s36local0.getUTCSeconds()) + "." + (__s36local0.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + "Z";
    }
  };
  var __s1local5 = __s1local4.isoDate;
  var __s1local6 = function () {
    function BugsnagBreadcrumb(__s40param0 = "[anonymous]", __s40param1 = {}, __s40param2 = "manual", __s40param3 = __s1local5()) {
      (function _classCallCheck(__s42param0, __s42param1) {
        if (!(__s42param0 instanceof __s42param1)) {
          throw new TypeError("Cannot call a class as a function");
        }
      })(this, BugsnagBreadcrumb);
      this.type = __s40param2;
      this.name = __s40param0;
      this.metaData = __s40param1;
      this.timestamp = __s40param3;
    }
    BugsnagBreadcrumb.prototype.toJSON = function toJSON() {
      return {
        type: this.type,
        name: this.name,
        timestamp: this.timestamp,
        metaData: this.metaData
      };
    };
    return BugsnagBreadcrumb;
  }();
  var __s1local7 = {};
  var __s1local8 = __s1local4.includes;
  __s1local7.positiveIntIfDefined = function (__s47param0) {
    return __s1local8(["undefined", "number"], typeof __s47param0) && parseInt("" + __s47param0, 10) === __s47param0 && __s47param0 > 0;
  };
  __s1local7.stringWithLength = function (__s49param0) {
    return typeof __s49param0 == "string" && !!__s49param0.length;
  };
  var __s1local9 = {};
  var __s1local10 = __s1local4.filter;
  var __s1local11 = __s1local4.reduce;
  var __s1local12 = __s1local4.keys;
  var __s1local13 = __s1local4.isArray;
  var __s1local14 = __s1local4.includes;
  var __s1local15 = __s1local7.positiveIntIfDefined;
  var __s1local16 = __s1local7.stringWithLength;
  __s1local9.schema = {
    apiKey: {
      defaultValue: function () {
        return null;
      },
      message: "is required",
      validate: __s1local16
    },
    appVersion: {
      defaultValue: function () {
        return null;
      },
      message: "should be a string",
      validate: function (__s55param0) {
        return __s55param0 === null || __s1local16(__s55param0);
      }
    },
    autoNotify: {
      defaultValue: function () {
        return true;
      },
      message: "should be true|false",
      validate: function (__s59param0) {
        return __s59param0 === true || __s59param0 === false;
      }
    },
    beforeSend: {
      defaultValue: function () {
        return [];
      },
      message: "should be a function or array of functions",
      validate: function (__s63param0) {
        return typeof __s63param0 == "function" || __s1local13(__s63param0) && __s1local10(__s63param0, function (__s65param0) {
          return typeof __s65param0 == "function";
        }).length === __s63param0.length;
      }
    },
    endpoints: {
      defaultValue: function () {
        return {
          notify: "https://notify.bugsnag.com",
          sessions: "https://sessions.bugsnag.com"
        };
      },
      message: "should be an object containing endpoint URLs { notify, sessions }. sessions is optional if autoCaptureSessions=false",
      validate: function (__s69param0, __s69param1) {
        return __s69param0 && typeof __s69param0 == "object" && __s1local16(__s69param0.notify) && (__s69param1.autoCaptureSessions === false || __s1local16(__s69param0.sessions)) && __s1local10(__s1local12(__s69param0), function (__s71param0) {
          return !__s1local14(["notify", "sessions"], __s71param0);
        }).length === 0;
      }
    },
    autoCaptureSessions: {
      defaultValue: function (__s73param0, __s73param1) {
        return __s73param1.endpoints === undefined || !!__s73param1.endpoints && !!__s73param1.endpoints.sessions;
      },
      message: "should be true|false",
      validate: function (__s75param0) {
        return __s75param0 === true || __s75param0 === false;
      }
    },
    notifyReleaseStages: {
      defaultValue: function () {
        return null;
      },
      message: "should be an array of strings",
      validate: function (__s79param0) {
        return __s79param0 === null || __s1local13(__s79param0) && __s1local10(__s79param0, function (__s81param0) {
          return typeof __s81param0 == "string";
        }).length === __s79param0.length;
      }
    },
    releaseStage: {
      defaultValue: function () {
        return "production";
      },
      message: "should be a string",
      validate: function (__s85param0) {
        return typeof __s85param0 == "string" && __s85param0.length;
      }
    },
    maxBreadcrumbs: {
      defaultValue: function () {
        return 20;
      },
      message: "should be a number ≤40",
      validate: function (__s89param0) {
        return __s89param0 === 0 || __s1local15(__s89param0) && (__s89param0 === undefined || __s89param0 <= 40);
      }
    },
    autoBreadcrumbs: {
      defaultValue: function () {
        return true;
      },
      message: "should be true|false",
      validate: function (__s93param0) {
        return typeof __s93param0 == "boolean";
      }
    },
    user: {
      defaultValue: function () {
        return null;
      },
      message: "(object) user should be an object",
      validate: function (__s97param0) {
        return typeof __s97param0 == "object";
      }
    },
    metaData: {
      defaultValue: function () {
        return null;
      },
      message: "should be an object",
      validate: function (__s101param0) {
        return typeof __s101param0 == "object";
      }
    },
    logger: {
      defaultValue: function () {},
      message: "should be null or an object with methods { debug, info, warn, error }",
      validate: function (__s105param0) {
        return !__s105param0 || __s105param0 && __s1local11(["debug", "info", "warn", "error"], function (__s107param0, __s107param1) {
          return __s107param0 && typeof __s105param0[__s107param1] == "function";
        }, true);
      }
    }
  };
  __s1local9.mergeDefaults = function (__s109param0, __s109param1) {
    if (!__s109param0 || !__s109param1) {
      throw new Error("opts and schema objects are required");
    }
    return __s1local11(__s1local12(__s109param1), function (__s112param0, __s112param1) {
      __s112param0[__s112param1] = __s109param0[__s112param1] !== undefined ? __s109param0[__s112param1] : __s109param1[__s112param1].defaultValue(__s109param0[__s112param1], __s109param0);
      return __s112param0;
    }, {});
  };
  __s1local9.validate = function (__s114param0, __s114param1) {
    if (!__s114param0 || !__s114param1) {
      throw new Error("opts and schema objects are required");
    }
    var __s114local0 = __s1local11(__s1local12(__s114param1), function (__s117param0, __s117param1) {
      if (__s114param1[__s117param1].validate(__s114param0[__s117param1], __s114param0)) {
        return __s117param0;
      } else {
        return __s117param0.concat({
          key: __s117param1,
          message: __s114param1[__s117param1].message,
          value: __s114param0[__s117param1]
        });
      }
    }, []);
    return {
      valid: !__s114local0.length,
      errors: __s114local0
    };
  };
  function __s1local17(__s121param0) {
    if (__s121param0.app && typeof __s121param0.app.releaseStage == "string") {
      return __s121param0.app.releaseStage;
    } else {
      return __s121param0.config.releaseStage;
    }
  }
  function __s1local18(__s125param0) {
    return !!__s125param0 && (!!__s125param0.stack || !!__s125param0.stacktrace || !!__s125param0["opera#sourceloc"]) && typeof (__s125param0.stack || __s125param0.stacktrace || __s125param0["opera#sourceloc"]) == "string" && __s125param0.stack !== __s125param0.name + ": " + __s125param0.message;
  }
  var __s1local19 = {};
  (function (__s127param0, __s127param1) {
    'use strict';

    if (typeof __s1local19 == "object") {
      __s1local19 = __s127param1();
    } else {
      __s127param0.StackFrame = __s127param1();
    }
  })(this, function () {
    'use strict';

    function _isNumber(__s133param0) {
      return !isNaN(parseFloat(__s133param0)) && isFinite(__s133param0);
    }
    function _capitalize(__s135param0) {
      return __s135param0.charAt(0).toUpperCase() + __s135param0.substring(1);
    }
    function _getter(__s137param0) {
      return function () {
        return this[__s137param0];
      };
    }
    var __s131local0 = ["isConstructor", "isEval", "isNative", "isToplevel"];
    var __s131local1 = ["columnNumber", "lineNumber"];
    var __s131local2 = ["fileName", "functionName", "source"];
    var __s131local3 = __s131local0.concat(__s131local1, __s131local2, ["args"]);
    function StackFrame(__s141param0) {
      if (__s141param0 instanceof Object) {
        for (var __s141local0 = 0; __s141local0 < __s131local3.length; __s141local0++) {
          if (__s141param0.hasOwnProperty(__s131local3[__s141local0]) && __s141param0[__s131local3[__s141local0]] !== undefined) {
            this["set" + _capitalize(__s131local3[__s141local0])](__s141param0[__s131local3[__s141local0]]);
          }
        }
      }
    }
    StackFrame.prototype = {
      getArgs: function () {
        return this.args;
      },
      setArgs: function (__s149param0) {
        if (Object.prototype.toString.call(__s149param0) !== "[object Array]") {
          throw new TypeError("Args must be an Array");
        }
        this.args = __s149param0;
      },
      getEvalOrigin: function () {
        return this.evalOrigin;
      },
      setEvalOrigin: function (__s154param0) {
        if (__s154param0 instanceof StackFrame) {
          this.evalOrigin = __s154param0;
        } else {
          if (!(__s154param0 instanceof Object)) {
            throw new TypeError("Eval Origin must be an Object or StackFrame");
          }
          this.evalOrigin = new StackFrame(__s154param0);
        }
      },
      toString: function () {
        var __s159local0 = this.getFunctionName() || "{anonymous}";
        var __s159local1 = "(" + (this.getArgs() || []).join(",") + ")";
        var __s159local2 = this.getFileName() ? "@" + this.getFileName() : "";
        var __s159local3 = _isNumber(this.getLineNumber()) ? ":" + this.getLineNumber() : "";
        var __s159local4 = _isNumber(this.getColumnNumber()) ? ":" + this.getColumnNumber() : "";
        return __s159local0 + __s159local1 + __s159local2 + __s159local3 + __s159local4;
      }
    };
    for (var __s131local4 = 0; __s131local4 < __s131local0.length; __s131local4++) {
      StackFrame.prototype["get" + _capitalize(__s131local0[__s131local4])] = _getter(__s131local0[__s131local4]);
      StackFrame.prototype["set" + _capitalize(__s131local0[__s131local4])] = function (__s163param0) {
        return function (__s165param0) {
          this[__s163param0] = Boolean(__s165param0);
        };
      }(__s131local0[__s131local4]);
    }
    for (var __s131local5 = 0; __s131local5 < __s131local1.length; __s131local5++) {
      StackFrame.prototype["get" + _capitalize(__s131local1[__s131local5])] = _getter(__s131local1[__s131local5]);
      StackFrame.prototype["set" + _capitalize(__s131local1[__s131local5])] = function (__s169param0) {
        return function (__s171param0) {
          if (!_isNumber(__s171param0)) {
            throw new TypeError(__s169param0 + " must be a Number");
          }
          this[__s169param0] = Number(__s171param0);
        };
      }(__s131local1[__s131local5]);
    }
    for (var __s131local6 = 0; __s131local6 < __s131local2.length; __s131local6++) {
      StackFrame.prototype["get" + _capitalize(__s131local2[__s131local6])] = _getter(__s131local2[__s131local6]);
      StackFrame.prototype["set" + _capitalize(__s131local2[__s131local6])] = function (__s176param0) {
        return function (__s178param0) {
          this[__s176param0] = String(__s178param0);
        };
      }(__s131local2[__s131local6]);
    }
    return StackFrame;
  });
  var __s1local20 = {};
  (function (__s180param0, __s180param1) {
    'use strict';

    if (typeof __s1local20 == "object") {
      __s1local20 = __s180param1(__s1local19);
    } else {
      __s180param0.ErrorStackParser = __s180param1(__s180param0.StackFrame);
    }
  })(this, function ErrorStackParser(__s184param0) {
    'use strict';

    var __s184local0 = /(^|@)\S+\:\d+/;
    var __s184local1 = /^\s*at .*(\S+\:\d+|\(native\))/m;
    var __s184local2 = /^(eval@)?(\[native code\])?$/;
    return {
      parse: function ErrorStackParser$$parse(__s186param0) {
        if (__s186param0.stacktrace !== undefined || __s186param0["opera#sourceloc"] !== undefined) {
          return this.parseOpera(__s186param0);
        }
        if (__s186param0.stack && __s186param0.stack.match(__s184local1)) {
          return this.parseV8OrIE(__s186param0);
        }
        if (__s186param0.stack) {
          return this.parseFFOrSafari(__s186param0);
        }
        throw new Error("Cannot parse given Error object");
      },
      extractLocation: function ErrorStackParser$$extractLocation(__s191param0) {
        if (__s191param0.indexOf(":") === -1) {
          return [__s191param0];
        }
        var __s191local0 = /(.+?)(?:\:(\d+))?(?:\:(\d+))?$/.exec(__s191param0.replace(/[\(\)]/g, ""));
        return [__s191local0[1], __s191local0[2] || undefined, __s191local0[3] || undefined];
      },
      parseV8OrIE: function ErrorStackParser$$parseV8OrIE(__s194param0) {
        var __s194local0 = __s194param0.stack.split("\n").filter(function (__s196param0) {
          return !!__s196param0.match(__s184local1);
        }, this);
        return __s194local0.map(function (__s198param0) {
          if (__s198param0.indexOf("(eval ") > -1) {
            __s198param0 = __s198param0.replace(/eval code/g, "eval").replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, "");
          }
          var __s198local0 = __s198param0.replace(/^\s+/, "").replace(/\(eval code/g, "(").split(/\s+/).slice(1);
          var __s198local1 = this.extractLocation(__s198local0.pop());
          var __s198local2 = __s198local0.join(" ") || undefined;
          var __s198local3 = ["eval", "<anonymous>"].indexOf(__s198local1[0]) > -1 ? undefined : __s198local1[0];
          return new __s184param0({
            functionName: __s198local2,
            fileName: __s198local3,
            lineNumber: __s198local1[1],
            columnNumber: __s198local1[2],
            source: __s198param0
          });
        }, this);
      },
      parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(__s201param0) {
        var __s201local0 = __s201param0.stack.split("\n").filter(function (__s203param0) {
          return !__s203param0.match(__s184local2);
        }, this);
        return __s201local0.map(function (__s205param0) {
          if (__s205param0.indexOf(" > eval") > -1) {
            __s205param0 = __s205param0.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ":$1");
          }
          if (__s205param0.indexOf("@") === -1 && __s205param0.indexOf(":") === -1) {
            return new __s184param0({
              functionName: __s205param0
            });
          }
          var __s205local0 = /((.*".+"[^@]*)?[^@]*)(?:@)/;
          var __s205local1 = __s205param0.match(__s205local0);
          var __s205local2 = __s205local1 && __s205local1[1] ? __s205local1[1] : undefined;
          var __s205local3 = this.extractLocation(__s205param0.replace(__s205local0, ""));
          return new __s184param0({
            functionName: __s205local2,
            fileName: __s205local3[0],
            lineNumber: __s205local3[1],
            columnNumber: __s205local3[2],
            source: __s205param0
          });
        }, this);
      },
      parseOpera: function ErrorStackParser$$parseOpera(__s209param0) {
        if (!__s209param0.stacktrace || __s209param0.message.indexOf("\n") > -1 && __s209param0.message.split("\n").length > __s209param0.stacktrace.split("\n").length) {
          return this.parseOpera9(__s209param0);
        } else if (__s209param0.stack) {
          return this.parseOpera11(__s209param0);
        } else {
          return this.parseOpera10(__s209param0);
        }
      },
      parseOpera9: function ErrorStackParser$$parseOpera9(__s214param0) {
        var __s214local0 = /Line (\d+).*script (?:in )?(\S+)/i;
        var __s214local1 = __s214param0.message.split("\n");
        var __s214local2 = [];
        for (var __s214local3 = 2, __s214local4 = __s214local1.length; __s214local3 < __s214local4; __s214local3 += 2) {
          var __s214local5 = __s214local0.exec(__s214local1[__s214local3]);
          if (__s214local5) {
            __s214local2.push(new __s184param0({
              fileName: __s214local5[2],
              lineNumber: __s214local5[1],
              source: __s214local1[__s214local3]
            }));
          }
        }
        return __s214local2;
      },
      parseOpera10: function ErrorStackParser$$parseOpera10(__s219param0) {
        var __s219local0 = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
        var __s219local1 = __s219param0.stacktrace.split("\n");
        var __s219local2 = [];
        for (var __s219local3 = 0, __s219local4 = __s219local1.length; __s219local3 < __s219local4; __s219local3 += 2) {
          var __s219local5 = __s219local0.exec(__s219local1[__s219local3]);
          if (__s219local5) {
            __s219local2.push(new __s184param0({
              functionName: __s219local5[3] || undefined,
              fileName: __s219local5[2],
              lineNumber: __s219local5[1],
              source: __s219local1[__s219local3]
            }));
          }
        }
        return __s219local2;
      },
      parseOpera11: function ErrorStackParser$$parseOpera11(__s224param0) {
        var __s224local0 = __s224param0.stack.split("\n").filter(function (__s226param0) {
          return !!__s226param0.match(__s184local0) && !__s226param0.match(/^Error created at/);
        }, this);
        return __s224local0.map(function (__s228param0) {
          var __s228local0;
          var __s228local1 = __s228param0.split("@");
          var __s228local2 = this.extractLocation(__s228local1.pop());
          var __s228local3 = __s228local1.shift() || "";
          var __s228local4 = __s228local3.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^\)]*\)/g, "") || undefined;
          if (__s228local3.match(/\(([^\)]*)\)/)) {
            __s228local0 = __s228local3.replace(/^[^\(]+\(([^\)]*)\)$/, "$1");
          }
          var __s228local5 = __s228local0 === undefined || __s228local0 === "[arguments not available]" ? undefined : __s228local0.split(",");
          return new __s184param0({
            functionName: __s228local4,
            args: __s228local5,
            fileName: __s228local2[0],
            lineNumber: __s228local2[1],
            columnNumber: __s228local2[2],
            source: __s228param0
          });
        }, this);
      }
    };
  });
  var __s1local21 = {};
  (function (__s231param0, __s231param1) {
    'use strict';

    if (typeof __s1local21 == "object") {
      __s1local21 = __s231param1(__s1local19);
    } else {
      __s231param0.StackGenerator = __s231param1(__s231param0.StackFrame);
    }
  })(this, function (__s235param0) {
    return {
      backtrace: function StackGenerator$$backtrace(__s237param0) {
        var __s237local0 = [];
        var __s237local1 = 10;
        if (typeof __s237param0 == "object" && typeof __s237param0.maxStackSize == "number") {
          __s237local1 = __s237param0.maxStackSize;
        }
        for (var __s237local2 = arguments.callee; __s237local2 && __s237local0.length < __s237local1 && __s237local2.arguments;) {
          for (var __s237local3 = new Array(__s237local2.arguments.length), __s237local4 = 0; __s237local4 < __s237local3.length; ++__s237local4) {
            __s237local3[__s237local4] = __s237local2.arguments[__s237local4];
          }
          if (/function(?:\s+([\w$]+))+\s*\(/.test(__s237local2.toString())) {
            __s237local0.push(new __s235param0({
              functionName: RegExp.$1 || undefined,
              args: __s237local3
            }));
          } else {
            __s237local0.push(new __s235param0({
              args: __s237local3
            }));
          }
          try {
            __s237local2 = __s237local2.caller;
          } catch (__s247local0) {
            break;
          }
        }
        return __s237local0;
      }
    };
  });
  var __s1local22 = Object.assign || function (__s249param0) {
    for (var __s249local0 = 1; __s249local0 < arguments.length; __s249local0++) {
      var __s249local1 = arguments[__s249local0];
      for (var __s249local2 in __s249local1) {
        if (Object.prototype.hasOwnProperty.call(__s249local1, __s249local2)) {
          __s249param0[__s249local2] = __s249local1[__s249local2];
        }
      }
    }
    return __s249param0;
  };
  var __s1local23 = __s1local4.reduce;
  var __s1local24 = __s1local4.filter;
  var __s1local25 = function () {
    function BugsnagReport(__s258param0, __s258param1, __s258param2 = [], __s258param3 = __s1local28()) {
      (function ___classCallCheck_9(__s260param0, __s260param1) {
        if (!(__s260param0 instanceof __s260param1)) {
          throw new TypeError("Cannot call a class as a function");
        }
      })(this, BugsnagReport);
      this.__isBugsnagReport = true;
      this._ignored = false;
      this._handledState = __s258param3;
      this.app = undefined;
      this.apiKey = undefined;
      this.breadcrumbs = [];
      this.context = undefined;
      this.device = undefined;
      this.errorClass = __s1local29(__s258param0, "[no error class]");
      this.errorMessage = __s1local29(__s258param1, "[no error message]");
      this.groupingHash = undefined;
      this.metaData = {};
      this.request = undefined;
      this.severity = this._handledState.severity;
      this.stacktrace = __s1local23(__s258param2, function (__s263param0, __s263param1) {
        var __s263local0 = __s1local26(__s263param1);
        try {
          if (JSON.stringify(__s263local0) === "{}") {
            return __s263param0;
          } else {
            return __s263param0.concat(__s263local0);
          }
        } catch (__s268local0) {
          return __s263param0;
        }
      }, []);
      this.user = undefined;
      this.session = undefined;
    }
    BugsnagReport.prototype.ignore = function ignore() {
      this._ignored = true;
    };
    BugsnagReport.prototype.isIgnored = function isIgnored() {
      return this._ignored;
    };
    BugsnagReport.prototype.updateMetaData = function updateMetaData(__s274param0) {
      var __s274local0;
      if (!__s274param0) {
        return this;
      }
      var __s274local1 = undefined;
      if ((arguments.length <= 1 ? undefined : arguments[1]) === null) {
        return this.removeMetaData(__s274param0);
      } else if ((arguments.length <= 2 ? undefined : arguments[2]) === null) {
        return this.removeMetaData(__s274param0, arguments.length <= 1 ? undefined : arguments[1], arguments.length <= 2 ? undefined : arguments[2]);
      } else {
        if (typeof (arguments.length <= 1 ? undefined : arguments[1]) == "object") {
          __s274local1 = arguments.length <= 1 ? undefined : arguments[1];
        }
        if (typeof (arguments.length <= 1 ? undefined : arguments[1]) == "string") {
          (__s274local0 = {})[arguments.length <= 1 ? undefined : arguments[1]] = arguments.length <= 2 ? undefined : arguments[2];
          __s274local1 = __s274local0;
        }
        if (__s274local1) {
          this.metaData[__s274param0] ||= {};
          this.metaData[__s274param0] = __s1local22({}, this.metaData[__s274param0], __s274local1);
          return this;
        } else {
          return this;
        }
      }
    };
    BugsnagReport.prototype.removeMetaData = function removeMetaData(__s284param0, __s284param1) {
      if (typeof __s284param0 != "string") {
        return this;
      } else if (__s284param1) {
        if (this.metaData[__s284param0]) {
          delete this.metaData[__s284param0][__s284param1];
          return this;
        } else {
          return this;
        }
      } else {
        delete this.metaData[__s284param0];
        return this;
      }
    };
    BugsnagReport.prototype.toJSON = function toJSON() {
      return {
        payloadVersion: "4",
        exceptions: [{
          errorClass: this.errorClass,
          message: this.errorMessage,
          stacktrace: this.stacktrace,
          type: "browserjs"
        }],
        severity: this.severity,
        unhandled: this._handledState.unhandled,
        severityReason: this._handledState.severityReason,
        app: this.app,
        device: this.device,
        breadcrumbs: this.breadcrumbs,
        context: this.context,
        user: this.user,
        metaData: this.metaData,
        groupingHash: this.groupingHash,
        request: this.request,
        session: this.session
      };
    };
    return BugsnagReport;
  }();
  function __s1local26(__s293param0) {
    var __s293local0 = {
      file: __s293param0.fileName,
      method: __s1local27(__s293param0.functionName),
      lineNumber: __s293param0.lineNumber,
      columnNumber: __s293param0.columnNumber,
      code: undefined,
      inProject: undefined
    };
    if (__s293local0.lineNumber > -1 && !__s293local0.file && !__s293local0.method) {
      __s293local0.file = "global code";
    }
    return __s293local0;
  }
  function __s1local27(__s296param0) {
    if (/^global code$/i.test(__s296param0)) {
      return "global code";
    } else {
      return __s296param0;
    }
  }
  function __s1local28() {
    return {
      unhandled: false,
      severity: "warning",
      severityReason: {
        type: "handledException"
      }
    };
  }
  function __s1local29(__s302param0, __s302param1) {
    if (typeof __s302param0 == "string" && __s302param0) {
      return __s302param0;
    } else {
      return __s302param1;
    }
  }
  __s1local25.getStacktrace = function (__s306param0, __s306param1 = 0, __s306param2 = 0) {
    if (__s1local18(__s306param0)) {
      return __s1local20.parse(__s306param0).slice(__s306param1);
    } else {
      return __s1local24(__s1local21.backtrace(), function (__s310param0) {
        return (__s310param0.functionName || "").indexOf("StackGenerator$$") === -1;
      }).slice(1 + __s306param2);
    }
  };
  __s1local25.ensureReport = function (__s312param0, __s312param1 = 0, __s312param2 = 0) {
    if (__s312param0.__isBugsnagReport) {
      return __s312param0;
    }
    try {
      var __s312local0 = __s1local25.getStacktrace(__s312param0, __s312param1, 1 + __s312param2);
      return new __s1local25(__s312param0.name, __s312param0.message, __s312local0);
    } catch (__s316local0) {
      return new __s1local25(__s312param0.name, __s312param0.message, []);
    }
  };
  var __s1local30 = __s1local25;
  var __s1local31 = function pad(__s318param0, __s318param1) {
    var __s318local0 = "000000000" + __s318param0;
    return __s318local0.substr(__s318local0.length - __s318param1);
  };
  var __s1local32 = typeof window == "object" ? window : self;
  var __s1local33 = 0;
  for (var __s1local34 in __s1local32) {
    if (Object.hasOwnProperty.call(__s1local32, __s1local34)) {
      __s1local33++;
    }
  }
  var __s1local35 = navigator.mimeTypes ? navigator.mimeTypes.length : 0;
  var __s1local36 = __s1local31((__s1local35 + navigator.userAgent.length).toString(36) + __s1local33.toString(36), 4);
  var __s1local37 = function fingerprint() {
    return __s1local36;
  };
  var __s1local38 = 0;
  var __s1local39 = 4;
  var __s1local40 = 36;
  var __s1local41 = Math.pow(__s1local40, __s1local39);
  function randomBlock() {
    return __s1local31((Math.random() * __s1local41 << 0).toString(__s1local40), __s1local39);
  }
  function cuid() {
    var __s327local0 = new Date().getTime().toString(__s1local40);
    var __s327local1 = __s1local31(function safeCounter() {
      __s1local38 = __s1local38 < __s1local41 ? __s1local38 : 0;
      return ++__s1local38 - 1;
    }().toString(__s1local40), __s1local39);
    var __s327local2 = __s1local37();
    var __s327local3 = randomBlock() + randomBlock();
    return "c" + __s327local0 + __s327local1 + __s327local2 + __s327local3;
  }
  cuid.fingerprint = __s1local37;
  var __s1local42 = cuid;
  var __s1local43 = __s1local4.isoDate;
  var __s1local44 = function () {
    function Session() {
      (function ___classCallCheck_10(__s335param0, __s335param1) {
        if (!(__s335param0 instanceof __s335param1)) {
          throw new TypeError("Cannot call a class as a function");
        }
      })(this, Session);
      this.id = __s1local42();
      this.startedAt = __s1local43();
      this._handled = 0;
      this._unhandled = 0;
    }
    Session.prototype.toJSON = function toJSON() {
      return {
        id: this.id,
        startedAt: this.startedAt,
        events: {
          handled: this._handled,
          unhandled: this._unhandled
        }
      };
    };
    Session.prototype.trackError = function trackError(__s340param0) {
      this[__s340param0._handledState.unhandled ? "_unhandled" : "_handled"] += 1;
    };
    return Session;
  }();
  var __s1local45 = function isError(__s342param0) {
    switch (Object.prototype.toString.call(__s342param0)) {
      case "[object Error]":
      case "[object Exception]":
      case "[object DOMException]":
        return true;
      default:
        return __s342param0 instanceof Error;
    }
  };
  var __s1local46 = Object.assign || function (__s345param0) {
    for (var __s345local0 = 1; __s345local0 < arguments.length; __s345local0++) {
      var __s345local1 = arguments[__s345local0];
      for (var __s345local2 in __s345local1) {
        if (Object.prototype.hasOwnProperty.call(__s345local1, __s345local2)) {
          __s345param0[__s345local2] = __s345local1[__s345local2];
        }
      }
    }
    return __s345param0;
  };
  var __s1local47 = __s1local4.map;
  var __s1local48 = __s1local4.reduce;
  var __s1local49 = __s1local4.includes;
  var __s1local50 = __s1local4.isArray;
  function __s1local51() {}
  var __s1local52 = function () {
    function BugsnagClient(__s356param0, __s356param1 = __s1local9.schema, __s356param2 = null) {
      (function ___classCallCheck_2(__s358param0, __s358param1) {
        if (!(__s358param0 instanceof __s358param1)) {
          throw new TypeError("Cannot call a class as a function");
        }
      })(this, BugsnagClient);
      if (!__s356param0 || !__s356param0.name || !__s356param0.version || !__s356param0.url) {
        throw new Error("`notifier` argument is required");
      }
      this.notifier = __s356param0;
      this.configSchema = __s356param1;
      this._configured = false;
      this._transport = {
        sendSession: __s1local51,
        sendReport: __s1local51
      };
      this._logger = {
        debug: __s1local51,
        info: __s1local51,
        warn: __s1local51,
        error: __s1local51
      };
      this.plugins = [];
      this.session = __s356param2;
      this.beforeSession = [];
      this.breadcrumbs = [];
      this.app = {};
      this.context = undefined;
      this.device = undefined;
      this.metaData = undefined;
      this.request = undefined;
      this.user = {};
      this.BugsnagReport = __s1local30;
      this.BugsnagBreadcrumb = __s1local6;
      this.BugsnagSession = __s1local44;
    }
    BugsnagClient.prototype.configure = function configure(__s362param0 = {}) {
      this.config = __s1local9.mergeDefaults(__s1local46({}, this.config, __s362param0), this.configSchema);
      var __s362local0 = __s1local9.validate(this.config, this.configSchema);
      if (!__s362local0.valid == 1) {
        throw new Error(__s1local55(__s362local0.errors));
      }
      if (typeof this.config.beforeSend == "function") {
        this.config.beforeSend = [this.config.beforeSend];
      }
      if (this.config.appVersion !== null) {
        this.app.version = this.config.appVersion;
      }
      if (this.config.metaData) {
        this.metaData = this.config.metaData;
      }
      if (this.config.user) {
        this.user = this.config.user;
      }
      if (this.config.logger) {
        this.logger(this.config.logger);
      }
      this._configured = true;
      this._logger.debug("Loaded!");
      return this;
    };
    BugsnagClient.prototype.use = function use(__s370param0) {
      this.plugins.push(__s370param0);
      return __s370param0.init(this);
    };
    BugsnagClient.prototype.transport = function transport(__s372param0) {
      this._transport = __s372param0;
      return this;
    };
    BugsnagClient.prototype.logger = function logger(__s374param0, __s374param1) {
      this._logger = __s374param0;
      return this;
    };
    BugsnagClient.prototype.sessionDelegate = function sessionDelegate(__s376param0) {
      this._sessionDelegate = __s376param0;
      return this;
    };
    BugsnagClient.prototype.startSession = function startSession() {
      if (this._sessionDelegate) {
        return this._sessionDelegate.startSession(this);
      } else {
        this._logger.warn("No session implementation is installed");
        return this;
      }
    };
    BugsnagClient.prototype.leaveBreadcrumb = function leaveBreadcrumb(__s382param0, __s382param1, __s382param2, __s382param3) {
      if (!this._configured) {
        throw new Error("client not configured");
      }
      __s382param0 = __s382param0 || undefined;
      __s382param2 = typeof __s382param2 == "string" ? __s382param2 : undefined;
      __s382param3 = typeof __s382param3 == "string" ? __s382param3 : undefined;
      __s382param1 = typeof __s382param1 == "object" && __s382param1 !== null ? __s382param1 : undefined;
      if (typeof __s382param0 == "string" || __s382param1) {
        var __s382local0 = new __s1local6(__s382param0, __s382param1, __s382param2, __s382param3);
        this.breadcrumbs.push(__s382local0);
        if (this.breadcrumbs.length > this.config.maxBreadcrumbs) {
          this.breadcrumbs = this.breadcrumbs.slice(this.breadcrumbs.length - this.config.maxBreadcrumbs);
        }
        return this;
      }
    };
    BugsnagClient.prototype.notify = function notify(__s387param0, __s387param1 = {}) {
      if (!this._configured) {
        throw new Error("client not configured");
      }
      var __s387local0 = __s1local17(this);
      var __s387local1 = __s1local53(__s387param0, __s387param1, this._logger);
      var __s387local2 = __s387local1.err;
      var __s387local3 = __s387local1.errorFramesToSkip;
      var __s387local4 = __s387local1._opts;
      if (__s387local4) {
        __s387param1 = __s387local4;
      }
      if (!__s387local2) {
        var __s387local5 = __s1local56("nothing");
        this._logger.warn("Usage error. " + __s387local5);
        __s387local2 = new Error("Bugsnag usage error. " + __s387local5);
      }
      if (typeof __s387param1 != "object" || __s387param1 === null) {
        __s387param1 = {};
      }
      var __s387local6 = __s1local30.ensureReport(__s387local2, __s387local3, 1);
      __s387local6.app = __s1local46({
        releaseStage: __s387local0
      }, __s387local6.app, this.app);
      __s387local6.context = __s387local6.context || __s387param1.context || this.context || undefined;
      __s387local6.device = __s1local46({}, __s387local6.device, this.device, __s387param1.device);
      __s387local6.request = __s1local46({}, __s387local6.request, this.request, __s387param1.request);
      __s387local6.user = __s1local46({}, __s387local6.user, this.user, __s387param1.user);
      __s387local6.metaData = __s1local46({}, __s387local6.metaData, this.metaData, __s387param1.metaData);
      __s387local6.breadcrumbs = this.breadcrumbs.slice(0);
      if (this.session) {
        this.session.trackError(__s387local6);
        __s387local6.session = this.session;
      }
      if (__s387param1.severity !== undefined) {
        __s387local6.severity = __s387param1.severity;
        __s387local6._handledState.severityReason = {
          type: "userSpecifiedSeverity"
        };
      }
      if (__s1local50(this.config.notifyReleaseStages) && !__s1local49(this.config.notifyReleaseStages, __s387local0)) {
        this._logger.warn("Report not sent due to releaseStage/notifyReleaseStages configuration");
        return false;
      }
      var __s387local7 = __s387local6.severity;
      var __s387local8 = [].concat(__s387param1.beforeSend).concat(this.config.beforeSend);
      var __s387local9 = __s1local48(__s387local8, function (__s396param0, __s396param1) {
        return __s396param0 === true || typeof __s396param1 == "function" && __s396param1(__s387local6) === false || !!__s387local6.isIgnored();
      }, false);
      if (__s387local9) {
        this._logger.debug("Report not sent due to beforeSend callback");
        return false;
      } else {
        if (this.config.autoBreadcrumbs) {
          this.leaveBreadcrumb(__s387local6.errorClass, {
            errorClass: __s387local6.errorClass,
            errorMessage: __s387local6.errorMessage,
            severity: __s387local6.severity
          }, "error");
        }
        if (__s387local7 !== __s387local6.severity) {
          __s387local6._handledState.severityReason = {
            type: "userCallbackSetSeverity"
          };
        }
        this._transport.sendReport(this._logger, this.config, {
          apiKey: __s387local6.apiKey || this.config.apiKey,
          notifier: this.notifier,
          events: [__s387local6]
        });
        return true;
      }
    };
    return BugsnagClient;
  }();
  function __s1local53(__s402param0, __s402param1, __s402param2) {
    var __s402local0 = undefined;
    var __s402local1 = 0;
    var __s402local2 = undefined;
    switch (typeof __s402param0) {
      case "string":
        if (typeof __s402param1 == "string") {
          var __s402local3 = __s1local56("string/string");
          __s402param2.warn("Usage error. " + __s402local3);
          __s402local0 = new Error("Bugsnag usage error. " + __s402local3);
          __s402local2 = {
            metaData: {
              notifier: {
                notifyArgs: [__s402param0, __s402param1]
              }
            }
          };
        } else {
          __s402local0 = new Error(String(__s402param0));
          __s402local1 += 2;
        }
        break;
      case "number":
      case "boolean":
        __s402local0 = new Error(String(__s402param0));
        break;
      case "function":
        var __s402local4 = __s1local56("function");
        __s402param2.warn("Usage error. " + __s402local4);
        __s402local0 = new Error("Bugsnag usage error. " + __s402local4);
        break;
      case "object":
        if (__s402param0 !== null && (__s1local45(__s402param0) || __s402param0.__isBugsnagReport)) {
          __s402local0 = __s402param0;
        } else if (__s402param0 !== null && __s1local54(__s402param0)) {
          (__s402local0 = new Error(__s402param0.message || __s402param0.errorMessage)).name = __s402param0.name || __s402param0.errorClass;
          __s402local1 += 2;
        } else {
          var __s402local5 = __s1local56("unsupported object");
          __s402param2.warn("Usage error. " + __s402local5);
          __s402local0 = new Error("Bugsnag usage error. " + __s402local5);
        }
    }
    return {
      err: __s402local0,
      errorFramesToSkip: __s402local1,
      _opts: __s402local2
    };
  }
  function __s1local54(__s410param0) {
    return (typeof __s410param0.name == "string" || typeof __s410param0.errorClass == "string") && (typeof __s410param0.message == "string" || typeof __s410param0.errorMessage == "string");
  }
  function __s1local55(__s412param0) {
    return "Bugsnag configuration error\n" + __s1local47(__s412param0, function (__s414param0) {
      return "\"" + __s414param0.key + "\" " + __s414param0.message + " \n    got " + __s1local57(__s414param0.value);
    }).join("\n\n");
  }
  function __s1local56(__s416param0) {
    return "notify() expected error/opts parameters, got " + __s416param0;
  }
  function __s1local57(__s418param0) {
    if (typeof __s418param0 == "object") {
      return JSON.stringify(__s418param0);
    } else {
      return String(__s418param0);
    }
  }
  var __s1local58 = __s1local52;
  var __s1local59 = __s1local7.positiveIntIfDefined;
  var __s1local60 = {
    init: function (__s422param0) {
      var __s422local0 = 0;
      __s422param0.config.beforeSend.push(function (__s424param0) {
        if (__s422local0 >= __s422param0.config.maxEvents) {
          return __s424param0.ignore();
        }
        __s422local0++;
      });
      __s422param0.refresh = function () {
        __s422local0 = 0;
      };
    },
    configSchema: {
      maxEvents: {
        defaultValue: function () {
          return 10;
        },
        message: "should be a positive integer ≤100",
        validate: function (__s431param0) {
          return __s1local59(__s431param0) && __s431param0 < 100;
        }
      }
    }
  };
  var __s1local61 = Object.assign || function (__s433param0) {
    for (var __s433local0 = 1; __s433local0 < arguments.length; __s433local0++) {
      var __s433local1 = arguments[__s433local0];
      for (var __s433local2 in __s433local1) {
        if (Object.prototype.hasOwnProperty.call(__s433local1, __s433local2)) {
          __s433param0[__s433local2] = __s433local1[__s433local2];
        }
      }
    }
    return __s433param0;
  };
  var __s1local62 = __s1local9.schema;
  var __s1local63 = __s1local4.map;
  var __s1local64 = {
    releaseStage: {
      defaultValue: function () {
        if (/^localhost(:\d+)?$/.test(window.location.host)) {
          return "development";
        } else {
          return "production";
        }
      },
      message: "should be set",
      validate: __s1local7.stringWithLength
    },
    collectUserIp: {
      defaultValue: function () {
        return true;
      },
      message: "should be true|false",
      validate: function (__s446param0) {
        return __s446param0 === true || __s446param0 === false;
      }
    },
    logger: __s1local61({}, __s1local62.logger, {
      defaultValue: function () {
        if (typeof console != "undefined" && typeof console.debug == "function") {
          return __s1local65();
        } else {
          return undefined;
        }
      }
    })
  };
  function __s1local65() {
    var __s452local0 = {};
    var __s452local1 = console.log;
    __s1local63(["debug", "info", "warn", "error"], function (__s454param0) {
      var __s454local0 = console[__s454param0];
      __s452local0[__s454param0] = typeof __s454local0 == "function" ? __s454local0.bind(console, "[bugsnag]") : __s452local1.bind(console, "[bugsnag]");
    });
    return __s452local0;
  }
  var __s1local66 = {};
  var __s1local67 = __s1local4.map;
  var __s1local68 = __s1local4.reduce;
  var __s1local69 = __s1local4.filter;
  __s1local66.init = function (__s456param0) {
    __s1local67(__s1local70, function (__s458param0) {
      var __s458local0 = console[__s458param0];
      console[__s458param0] = function () {
        for (var __s460local0 = arguments.length, __s460local1 = Array(__s460local0), __s460local2 = 0; __s460local2 < __s460local0; __s460local2++) {
          __s460local1[__s460local2] = arguments[__s460local2];
        }
        __s456param0.leaveBreadcrumb("Console output", __s1local68(__s460local1, function (__s464param0, __s464param1, __s464param2) {
          var __s464local0 = String(__s464param1);
          if (__s464local0 === "[object Object]") {
            try {
              __s464local0 = JSON.stringify(__s464param1);
            } catch (__s468local0) {}
          }
          __s464param0["[" + __s464param2 + "]"] = __s464local0;
          return __s464param0;
        }, {
          severity: __s458param0.indexOf("group") === 0 ? "log" : __s458param0
        }), "log");
        __s458local0.apply(console, __s460local1);
      };
      console[__s458param0]._restore = function () {
        console[__s458param0] = __s458local0;
      };
    });
  };
  __s1local66.configSchema = {
    consoleBreadcrumbsEnabled: {
      defaultValue: function () {},
      validate: function (__s474param0) {
        return __s474param0 === true || __s474param0 === false || __s474param0 === undefined;
      },
      message: "should be true|false"
    }
  };
  var __s1local70 = __s1local69(["log", "debug", "info", "warn", "error"], function (__s476param0) {
    return typeof console != "undefined" && typeof console[__s476param0] == "function";
  });
  var __s1local71 = {
    init: function (__s478param0) {
      __s478param0.config.beforeSend.unshift(function (__s480param0) {
        __s480param0.context ||= window.location.pathname;
      });
    }
  };
  var __s1local72 = Object.assign || function (__s482param0) {
    for (var __s482local0 = 1; __s482local0 < arguments.length; __s482local0++) {
      var __s482local1 = arguments[__s482local0];
      for (var __s482local2 in __s482local1) {
        if (Object.prototype.hasOwnProperty.call(__s482local1, __s482local2)) {
          __s482param0[__s482local2] = __s482local1[__s482local2];
        }
      }
    }
    return __s482param0;
  };
  var __s1local73 = __s1local4.isoDate;
  var __s1local74 = {
    init: function (__s489param0) {
      __s489param0.config.beforeSend.unshift(function (__s491param0) {
        __s491param0.device = __s1local72({
          time: __s1local73(),
          locale: navigator.browserLanguage || navigator.systemLanguage || navigator.userLanguage || navigator.language,
          userAgent: navigator.userAgent
        }, __s491param0.device);
      });
      __s489param0.beforeSession.push(function (__s493param0) {
        __s493param0.device = {
          userAgent: navigator.userAgent
        };
      });
    }
  };
  var __s1local75 = {};
  var __s1local76 = __s1local4.reduce;
  var __s1local77 = /^.*<script.*?>/;
  var __s1local78 = /<\/script>.*$/;
  var __s1local79 = (__s1local75 = {
    init: function (__s495param0) {
      var __s495local0 = "";
      var __s495local1 = false;
      function __s495local2() {
        return document.documentElement.outerHTML;
      }
      var __s495local3 = window.location.href;
      __s495local0 = __s495local2();
      document.onreadystatechange = function () {
        if (document.readyState === "interactive") {
          __s495local0 = __s495local2();
          __s495local1 = true;
        }
      };
      __s495param0.config.beforeSend.unshift(function (__s502param0) {
        var __s502local0 = __s502param0.stacktrace[0];
        if (!__s502local0 || !__s502local0.file || !__s502local0.lineNumber) {
          return __s502local0;
        }
        if (__s502local0.file.replace(/#.*$/, "") !== __s495local3.replace(/#.*$/, "")) {
          return __s502local0;
        }
        if (!__s495local1 || !__s495local0) {
          __s495local0 = __s495local2();
        }
        var __s502local1 = ["<!-- DOC START -->"].concat(__s495local0.split("\n"));
        var __s502local2 = __s1local79(__s502local1, __s502local0.lineNumber - 1);
        var __s502local3 = __s502local2.script;
        var __s502local4 = __s502local2.start;
        var __s502local5 = __s1local76(__s502local3, function (__s507param0, __s507param1, __s507param2) {
          if (Math.abs(__s502local4 + __s507param2 + 1 - __s502local0.lineNumber) > 10) {
            return __s507param0;
          } else {
            __s507param0["" + (__s502local4 + __s507param2 + 1)] = __s507param1;
            return __s507param0;
          }
        }, {});
        __s502local0.code = __s502local5;
        __s502param0.updateMetaData("script", {
          content: __s502local3.join("\n")
        });
      });
    }
  }).extractScriptContent = function (__s511param0, __s511param1) {
    for (var __s511local0 = __s511param1; __s511local0 < __s511param0.length && !__s1local78.test(__s511param0[__s511local0]);) {
      __s511local0++;
    }
    var __s511local1 = __s511local0;
    for (; __s511local0 > 0 && !__s1local77.test(__s511param0[__s511local0]);) {
      __s511local0--;
    }
    var __s511local2 = __s511local0;
    var __s511local3 = __s511param0.slice(__s511local2, __s511local1 + 1);
    __s511local3[0] = __s511local3[0].replace(__s1local77, "");
    __s511local3[__s511local3.length - 1] = __s511local3[__s511local3.length - 1].replace(__s1local78, "");
    return {
      script: __s511local3,
      start: __s511local2
    };
  };
  var __s1local80 = {
    init: function (__s517param0) {
      if ("addEventListener" in window) {
        window.addEventListener("click", function (__s520param0) {
          var __s520local0 = undefined;
          var __s520local1 = undefined;
          try {
            __s520local0 = __s1local81(__s520param0.target);
            __s520local1 = function getNodeSelector(__s523param0) {
              var __s523local0 = [__s523param0.tagName];
              if (__s523param0.id) {
                __s523local0.push("#" + __s523param0.id);
              }
              if (__s523param0.className && __s523param0.className.length) {
                __s523local0.push("." + __s523param0.className.split(" ").join("."));
              }
              if (!document.querySelectorAll || !Array.prototype.indexOf) {
                return __s523local0.join("");
              }
              try {
                if (document.querySelectorAll(__s523local0.join("")).length === 1) {
                  return __s523local0.join("");
                }
              } catch (__s530local0) {
                return __s523local0.join("");
              }
              if (__s523param0.parentNode.childNodes.length > 1) {
                var __s523local1 = Array.prototype.indexOf.call(__s523param0.parentNode.childNodes, __s523param0) + 1;
                __s523local0.push(":nth-child(" + __s523local1 + ")");
              }
              if (document.querySelectorAll(__s523local0.join("")).length === 1) {
                return __s523local0.join("");
              } else if (__s523param0.parentNode) {
                return getNodeSelector(__s523param0.parentNode) + " > " + __s523local0.join("");
              } else {
                return __s523local0.join("");
              }
            }(__s520param0.target);
          } catch (__s536local0) {
            __s520local0 = "[hidden]";
            __s520local1 = "[hidden]";
            __s517param0._logger.error("Cross domain error when tracking click event. See docs: https://tinyurl.com/y94fq5zm");
          }
          __s517param0.leaveBreadcrumb("UI click", {
            targetText: __s520local0,
            targetSelector: __s520local1
          }, "user");
        }, true);
      }
    },
    configSchema: {
      interactionBreadcrumbsEnabled: {
        defaultValue: function () {},
        validate: function (__s540param0) {
          return __s540param0 === true || __s540param0 === false || __s540param0 === undefined;
        },
        message: "should be true|false"
      }
    }
  };
  function __s1local81(__s542param0) {
    var __s542local0 = __s542param0.textContent || __s542param0.innerText || "";
    if (!__s542local0 && (__s542param0.type === "submit" || __s542param0.type === "button")) {
      __s542local0 = __s542param0.value;
    }
    return function truncate(__s545param0, __s545param1) {
      if (__s545param0 && __s545param0.length <= __s545param1) {
        return __s545param0;
      } else {
        return __s545param0.slice(0, __s545param1 - "(...)".length) + "(...)";
      }
    }(__s542local0 = __s542local0.replace(/^\s+|\s+$/g, ""), 140);
  }
  var __s1local82 = Object.assign || function (__s549param0) {
    for (var __s549local0 = 1; __s549local0 < arguments.length; __s549local0++) {
      var __s549local1 = arguments[__s549local0];
      for (var __s549local2 in __s549local1) {
        if (Object.prototype.hasOwnProperty.call(__s549local1, __s549local2)) {
          __s549param0[__s549local2] = __s549local1[__s549local2];
        }
      }
    }
    return __s549param0;
  };
  var __s1local83 = {
    init: function (__s556param0) {
      if (!__s556param0.config.collectUserIp) {
        __s556param0.config.beforeSend.push(function (__s559param0) {
          __s559param0.user = __s1local82({
            id: "[NOT COLLECTED]"
          }, __s559param0.user);
          __s559param0.request = __s1local82({
            clientIp: "[NOT COLLECTED]"
          }, __s559param0.request);
        });
      }
    }
  };
  var __s1local84 = {
    init: function (__s561param0) {
      if ("addEventListener" in window) {
        function __s563local0(__s564param0) {
          return function () {
            return __s561param0.leaveBreadcrumb(__s564param0, {}, "navigation");
          };
        }
        window.addEventListener("pagehide", __s563local0("Page hidden"), true);
        window.addEventListener("pageshow", __s563local0("Page shown"), true);
        window.addEventListener("load", __s563local0("Page loaded"), true);
        window.document.addEventListener("DOMContentLoaded", __s563local0("DOMContentLoaded"), true);
        window.addEventListener("load", function () {
          return window.addEventListener("popstate", __s563local0("Navigated back"), true);
        });
        window.addEventListener("hashchange", function (__s570param0) {
          var __s570local0 = __s570param0.oldURL ? {
            from: __s1local85(__s570param0.oldURL),
            to: __s1local85(__s570param0.newURL),
            state: __s1local87()
          } : {
            to: __s1local85(window.location.href)
          };
          __s561param0.leaveBreadcrumb("Hash changed", __s570local0, "navigation");
        }, true);
        if (window.history.replaceState) {
          __s1local86(__s561param0, window.history, "replaceState");
        }
        if (window.history.pushState) {
          __s1local86(__s561param0, window.history, "pushState");
        }
        __s561param0.leaveBreadcrumb("Bugsnag loaded", {}, "navigation");
      }
    },
    configSchema: {
      navigationBreadcrumbsEnabled: {
        defaultValue: function () {},
        validate: function (__s576param0) {
          return __s576param0 === true || __s576param0 === false || __s576param0 === undefined;
        },
        message: "should be true|false"
      }
    }
  };
  function __s1local85(__s578param0) {
    var __s578local0 = document.createElement("A");
    __s578local0.href = __s578param0;
    return "" + __s578local0.pathname + __s578local0.search + __s578local0.hash;
  }
  function __s1local86(__s580param0, __s580param1, __s580param2) {
    var __s580local0 = __s580param1[__s580param2];
    __s580param1[__s580param2] = function (__s582param0, __s582param1, __s582param2) {
      __s580param0.leaveBreadcrumb("History " + __s580param2, function (__s584param0, __s584param1, __s584param2) {
        var __s584local0 = __s1local85(window.location.href);
        return {
          title: __s584param1,
          state: __s584param0,
          prevState: __s1local87(),
          to: __s584param2 || __s584local0,
          from: __s584local0
        };
      }(__s582param0, __s582param1, __s582param2), "navigation");
      if (typeof __s580param0.refresh == "function") {
        __s580param0.refresh();
      }
      if (__s580param0.session) {
        __s580param0.startSession();
      }
      __s580local0.apply(__s580param1, [__s582param0, __s582param1].concat(__s582param2 !== undefined ? __s582param2 : []));
    };
    __s580param1[__s580param2]._restore = function () {
      __s580param1[__s580param2] = __s580local0;
    };
  }
  function __s1local87() {
    try {
      return window.history.state;
    } catch (__s593local0) {}
  }
  var __s1local88 = {};
  var __s1local89 = "request";
  var __s1local90 = "BS~~U";
  var __s1local91 = "BS~~M";
  var __s1local92 = __s1local4.includes;
  var __s1local93 = undefined;
  function __s1local94() {
    return [__s1local93.config.endpoints.notify, __s1local93.config.endpoints.sessions];
  }
  __s1local88.init = function (__s597param0) {
    __s1local93 = __s597param0;
    __s1local95();
    __s1local96();
  };
  __s1local88.configSchema = {
    networkBreadcrumbsEnabled: {
      defaultValue: function () {},
      validate: function (__s601param0) {
        return __s601param0 === true || __s601param0 === false || __s601param0 === undefined;
      },
      message: "should be true|false"
    }
  };
  function __s1local95() {
    if ("addEventListener" in window.XMLHttpRequest.prototype) {
      var __s603local0 = window.XMLHttpRequest.prototype.open;
      window.XMLHttpRequest.prototype.open = function open(__s606param0, __s606param1) {
        this[__s1local90] = __s606param1;
        this[__s1local91] = __s606param0;
        if (this["BS~~S"]) {
          this.removeEventListener("load", handleXHRLoad);
          this.removeEventListener("error", handleXHRError);
        }
        this.addEventListener("load", handleXHRLoad);
        this.addEventListener("error", handleXHRError);
        this["BS~~S"] = true;
        __s603local0.apply(this, arguments);
      };
    }
  }
  function handleXHRLoad() {
    if (!__s1local92(__s1local94(), this[__s1local90])) {
      var __s609local0 = {
        status: this.status,
        request: this[__s1local91] + " " + this[__s1local90]
      };
      if (this.status >= 400) {
        __s1local93.leaveBreadcrumb("XMLHttpRequest failed", __s609local0, __s1local89);
      } else {
        __s1local93.leaveBreadcrumb("XMLHttpRequest succeeded", __s609local0, __s1local89);
      }
    }
  }
  function handleXHRError() {
    if (!__s1local92(__s1local94(), this[__s1local90])) {
      __s1local93.leaveBreadcrumb("XMLHttpRequest error", {
        request: this[__s1local91] + " " + this[__s1local90]
      }, __s1local89);
    }
  }
  function __s1local96() {
    if ("fetch" in window) {
      var __s617local0 = window.fetch;
      window.fetch = function fetch() {
        for (var __s620local0 = arguments.length, __s620local1 = Array(__s620local0), __s620local2 = 0; __s620local2 < __s620local0; __s620local2++) {
          __s620local1[__s620local2] = arguments[__s620local2];
        }
        var __s620local3 = __s620local1[0];
        var __s620local4 = __s620local1[1];
        var __s620local5 = "GET";
        if (__s620local4 && __s620local4.method) {
          __s620local5 = __s620local4.method;
        }
        return new Promise(function (__s625param0, __s625param1) {
          __s617local0.apply(undefined, __s620local1).then(function (__s627param0) {
            __s1local97(__s627param0, __s620local5, __s620local3);
            __s625param0(__s627param0);
          }).catch(function (__s629param0) {
            __s1local98(__s620local5, __s620local3);
            __s625param1(__s629param0);
          });
        });
      };
    }
  }
  function __s1local97(__s631param0, __s631param1, __s631param2) {
    var __s631local0 = {
      status: __s631param0.status,
      request: __s631param1 + " " + __s631param2
    };
    if (__s631param0.status >= 400) {
      __s1local93.leaveBreadcrumb("fetch() failed", __s631local0, __s1local89);
    } else {
      __s1local93.leaveBreadcrumb("fetch() succeeded", __s631local0, __s1local89);
    }
  }
  function __s1local98(__s635param0, __s635param1) {
    __s1local93.leaveBreadcrumb("fetch() error", {
      request: __s635param0 + " " + __s635param1
    }, __s1local89);
  }
  var __s1local99 = Object.assign || function (__s637param0) {
    for (var __s637local0 = 1; __s637local0 < arguments.length; __s637local0++) {
      var __s637local1 = arguments[__s637local0];
      for (var __s637local2 in __s637local1) {
        if (Object.prototype.hasOwnProperty.call(__s637local1, __s637local2)) {
          __s637param0[__s637local2] = __s637local1[__s637local2];
        }
      }
    }
    return __s637param0;
  };
  var __s1local100 = {
    init: function (__s644param0) {
      __s644param0.config.beforeSend.unshift(function (__s646param0) {
        if (!__s646param0.request || !__s646param0.request.url) {
          __s646param0.request = __s1local99({}, __s646param0.request, {
            url: window.location.href
          });
        }
      });
    }
  };
  var __s1local101 = Object.assign || function (__s649param0) {
    for (var __s649local0 = 1; __s649local0 < arguments.length; __s649local0++) {
      var __s649local1 = arguments[__s649local0];
      for (var __s649local2 in __s649local1) {
        if (Object.prototype.hasOwnProperty.call(__s649local1, __s649local2)) {
          __s649param0[__s649local2] = __s649local1[__s649local2];
        }
      }
    }
    return __s649param0;
  };
  var __s1local102 = __s1local4.map;
  var __s1local103 = __s1local4.isArray;
  var __s1local104 = __s1local4.includes;
  var __s1local105 = {
    init: function (__s656param0) {
      return __s656param0.sessionDelegate(__s1local106);
    }
  };
  var __s1local106 = {
    startSession: function (__s658param0) {
      var __s658local0 = __s658param0;
      __s658local0.session = new __s658param0.BugsnagSession();
      __s1local102(__s658local0.beforeSession, function (__s660param0) {
        return __s660param0(__s658local0);
      });
      var __s658local1 = __s1local17(__s658local0);
      if (__s1local103(__s658local0.config.notifyReleaseStages) && !__s1local104(__s658local0.config.notifyReleaseStages, __s658local1)) {
        __s658local0._logger.warn("Session not sent due to releaseStage/notifyReleaseStages configuration");
        return __s658local0;
      } else if (__s658local0.config.endpoints.sessions) {
        __s658local0._transport.sendSession(__s658local0._logger, __s658local0.config, {
          notifier: __s658local0.notifier,
          device: __s658local0.device,
          app: __s1local101({
            releaseStage: __s658local1
          }, __s658local0.app),
          sessions: [{
            id: __s658local0.session.id,
            startedAt: __s658local0.session.startedAt,
            user: __s658local0.user
          }]
        });
        return __s658local0;
      } else {
        __s658local0._logger.warn("Session not sent due to missing endpoints.sessions configuration");
        return __s658local0;
      }
    }
  };
  var __s1local107 = {};
  var __s1local108 = Object.assign || function (__s665param0) {
    for (var __s665local0 = 1; __s665local0 < arguments.length; __s665local0++) {
      var __s665local1 = arguments[__s665local0];
      for (var __s665local2 in __s665local1) {
        if (Object.prototype.hasOwnProperty.call(__s665local1, __s665local2)) {
          __s665param0[__s665local2] = __s665local1[__s665local2];
        }
      }
    }
    return __s665param0;
  };
  var __s1local109 = __s1local4.map;
  var __s1local110 = (__s1local107 = {
    init: function (__s672param0) {
      __s672param0.config.beforeSend.push(function (__s674param0) {
        __s674param0.stacktrace = __s1local109(__s674param0.stacktrace, function (__s676param0) {
          return __s1local108({}, __s676param0, {
            file: __s1local110(__s676param0.file)
          });
        });
      });
    }
  })._strip = function (__s678param0) {
    if (typeof __s678param0 == "string") {
      return __s678param0.replace(/\?.*$/, "").replace(/#.*$/, "");
    } else {
      return __s678param0;
    }
  };
  var __s1local111 = {};
  var __s1local112 = __s1local4.reduce;
  __s1local111.init = function (__s682param0) {
    function __s682local0(__s684param0) {
      var __s684local0 = __s684param0.reason;
      var __s684local1 = false;
      if (__s684param0.detail && __s684param0.detail.reason) {
        __s684local0 = __s684param0.detail.reason;
        __s684local1 = true;
      }
      var __s684local2 = {
        severity: "error",
        unhandled: true,
        severityReason: {
          type: "unhandledPromiseRejection"
        }
      };
      var __s684local3 = undefined;
      if (__s684local0 && __s1local18(__s684local0)) {
        __s684local3 = new __s682param0.BugsnagReport(__s684local0.name, __s684local0.message, __s1local20.parse(__s684local0), __s684local2);
        if (__s684local1) {
          __s684local3.stacktrace = __s1local112(__s684local3.stacktrace, __s1local114(__s684local0), []);
        }
      } else {
        (__s684local3 = new __s682param0.BugsnagReport(__s684local0 && __s684local0.name ? __s684local0.name : "UnhandledRejection", __s684local0 && __s684local0.message ? __s684local0.message : "Rejection reason was not an Error. See \"Promise\" tab for more detail.", [], __s684local2)).updateMetaData("promise", "rejection reason", __s1local113(__s684local0));
      }
      __s682param0.notify(__s684local3);
    }
    if ("addEventListener" in window) {
      window.addEventListener("unhandledrejection", __s682local0);
    } else {
      window.onunhandledrejection = function (__s692param0, __s692param1) {
        __s682local0({
          detail: {
            reason: __s692param0,
            promise: __s692param1
          }
        });
      };
    }
  };
  function __s1local113(__s694param0) {
    if (__s694param0 === null || __s694param0 === undefined) {
      return "undefined (or null)";
    } else if (__s1local45(__s694param0)) {
      (__s694local0 = {})[Object.prototype.toString.call(__s694param0)] = {
        name: __s694param0.name,
        message: __s694param0.message,
        code: __s694param0.code,
        stack: __s694param0.stack
      };
      return __s694local0;
    } else {
      return __s694param0;
    }
    var __s694local0;
  }
  function __s1local114(__s699param0) {
    return function (__s701param0, __s701param1) {
      if (__s701param1.file === __s699param0.toString()) {
        return __s701param0;
      } else {
        __s701param1.method &&= __s701param1.method.replace(/^\s+/, "");
        return __s701param0.concat(__s701param1);
      }
    };
  }
  var __s1local115 = {
    init: function (__s705param0) {
      var __s705local0 = window.onerror;
      window.onerror = function (__s707param0, __s707param1, __s707param2, __s707param3, __s707param4) {
        if (__s707param2 === 0 && /Script error\.?/.test(__s707param0)) {
          __s705param0._logger.warn("Ignoring cross-domain or eval script error. See docs: https://tinyurl.com/y94fq5zm");
        } else {
          var __s707local0 = {
            severity: "error",
            unhandled: true,
            severityReason: {
              type: "unhandledException"
            }
          };
          var __s707local1 = undefined;
          if (__s707param4) {
            if (__s707param4.name && __s707param4.message) {
              __s707local1 = new __s705param0.BugsnagReport(__s707param4.name, __s707param4.message, __s1local116(__s705param0.BugsnagReport.getStacktrace(__s707param4), __s707param1, __s707param2, __s707param3), __s707local0);
            } else {
              (__s707local1 = new __s705param0.BugsnagReport("window.onerror", String(__s707param4), __s1local116(__s705param0.BugsnagReport.getStacktrace(__s707param4, 1), __s707param1, __s707param2, __s707param3), __s707local0)).updateMetaData("window onerror", {
                error: __s707param4
              });
            }
          } else if (typeof __s707param0 != "object" || __s707param0 === null || __s707param1 || __s707param2 || __s707param3 || __s707param4) {
            (__s707local1 = new __s705param0.BugsnagReport("window.onerror", String(__s707param0), __s1local116(__s705param0.BugsnagReport.getStacktrace(__s707param4, 1), __s707param1, __s707param2, __s707param3), __s707local0)).updateMetaData("window onerror", {
              event: __s707param0
            });
          } else {
            var __s707local2 = __s707param0.type ? "Event: " + __s707param0.type : "window.onerror";
            var __s707local3 = __s707param0.message || __s707param0.detail || "";
            (__s707local1 = new __s705param0.BugsnagReport(__s707local2, __s707local3, __s705param0.BugsnagReport.getStacktrace(new Error(), 1).slice(1), __s707local0)).updateMetaData("window onerror", {
              event: __s707param0
            });
          }
          __s705param0.notify(__s707local1);
          if (typeof __s705local0 == "function") {
            __s705local0(__s707param0, __s707param1, __s707param2, __s707param3, __s707param4);
          }
        }
      };
    }
  };
  function __s1local116(__s717param0, __s717param1, __s717param2, __s717param3) {
    var __s717local0 = __s717param0[0];
    if (__s717local0) {
      if (!__s717local0.fileName) {
        __s717local0.setFileName(__s717param1);
      }
      if (!__s717local0.lineNumber) {
        __s717local0.setLineNumber(__s717param2);
      }
      if (!__s717local0.columnNumber) {
        if (__s717param3 !== undefined) {
          __s717local0.setColumnNumber(__s717param3);
        } else if (window.event && window.event.errorCharacter) {
          __s717local0.setColumnNumber(window.event && window.event.errorCharacter);
        }
      }
      return __s717param0;
    } else {
      return __s717param0;
    }
  }
  function __s1local117(__s726param0, __s726param1, __s726param2) {
    return JSON.stringify(function ensureProperties(__s728param0) {
      var __s728local0 = [];
      var __s728local1 = 0;
      return function visit(__s730param0, __s730param1) {
        function edgesExceeded() {
          return __s730param1 > __s1local120 && __s728local1 > __s1local119;
        }
        __s728local1++;
        if (__s730param1 === undefined) {
          __s730param1 = 0;
        }
        if (__s730param1 > __s1local118) {
          return __s1local121;
        }
        if (edgesExceeded()) {
          return __s1local121;
        }
        if (__s730param0 === null || typeof __s730param0 != "object") {
          return __s730param0;
        }
        if (function find(__s738param0, __s738param1) {
          for (var __s738local0 = 0, __s738local1 = __s738param0.length; __s738local0 < __s738local1; __s738local0++) {
            if (__s738param0[__s738local0] === __s738param1) {
              return true;
            }
          }
          return false;
        }(__s728local0, __s730param0)) {
          return "[Circular]";
        }
        __s728local0.push(__s730param0);
        if (typeof __s730param0.toJSON == "function") {
          try {
            __s728local1--;
            var __s730local0 = visit(__s730param0.toJSON(), __s730param1);
            __s728local0.pop();
            return __s730local0;
          } catch (__s746local0) {
            return throwsMessage(__s746local0);
          }
        }
        if (function __isArray_32(__s748param0) {
          return Object.prototype.toString.call(__s748param0) === "[object Array]";
        }(__s730param0)) {
          var __s730local1 = [];
          for (var __s730local2 = 0, __s730local3 = __s730param0.length; __s730local2 < __s730local3; __s730local2++) {
            if (edgesExceeded()) {
              __s730local1.push(__s1local121);
              break;
            }
            __s730local1.push(visit(__s730param0[__s730local2], __s730param1 + 1));
          }
          __s728local0.pop();
          return __s730local1;
        }
        var __s730local4 = {};
        try {
          for (var __s730local5 in __s730param0) {
            if (Object.prototype.hasOwnProperty.call(__s730param0, __s730local5)) {
              if (edgesExceeded()) {
                __s730local4[__s730local5] = __s1local121;
                break;
              }
              __s730local4[__s730local5] = visit(safelyGetProp(__s730param0, __s730local5), __s730param1 + 1);
            }
          }
        } catch (__s759local0) {}
        __s728local0.pop();
        return __s730local4;
      }(__s728param0);
    }(__s726param0), __s726param1, __s726param2);
  }
  var __s1local118 = 20;
  var __s1local119 = 25000;
  var __s1local120 = 8;
  var __s1local121 = "...";
  function throwsMessage(__s761param0) {
    return "[Throws: " + (__s761param0 ? __s761param0.message : "?") + "]";
  }
  function safelyGetProp(__s763param0, __s763param1) {
    try {
      return __s763param0[__s763param1];
    } catch (__s766local0) {
      return throwsMessage(__s766local0);
    }
  }
  function __s1local122(__s768param0) {
    var __s768local0 = __s1local117(__s768param0);
    if (__s768local0.length > 1000000 && (delete __s768param0.events[0].metaData, __s768param0.events[0].metaData = {
      notifier: "WARNING!\nSerialized payload was " + __s768local0.length / 1000000 + "MB (limit = 1MB)\nmetaData was removed"
    }, (__s768local0 = __s1local117(__s768param0)).length > 1000000)) {
      throw new Error("payload exceeded 1MB limit");
    }
    return __s768local0;
  }
  var __s1local123 = {};
  var __s1local124 = __s1local4.isoDate;
  __s1local123 = {
    sendReport: function (__s771param0, __s771param1, __s771param2, __s771param3 = function () {}) {
      var __s771local0 = __s1local125(__s771param1, "notify", "4.0");
      var __s771local1 = new window.XDomainRequest();
      __s771local1.onload = function () {
        __s771param3(null, __s771local1.responseText);
      };
      __s771local1.open("POST", __s771local0);
      setTimeout(function () {
        try {
          __s771local1.send(__s1local122(__s771param2));
        } catch (__s780local0) {
          __s771param0.error(__s780local0);
        }
      }, 0);
    },
    sendSession: function (__s782param0, __s782param1, __s782param2, __s782param3 = function () {}) {
      var __s782local0 = __s1local125(__s782param1, "sessions", "1.0");
      var __s782local1 = new window.XDomainRequest();
      __s782local1.onload = function () {
        __s782param3(null, __s782local1.responseText);
      };
      __s782local1.open("POST", __s782local0);
      setTimeout(function () {
        try {
          __s782local1.send(__s1local117(__s782param2));
        } catch (__s791local0) {
          __s782param0.error(__s791local0);
        }
      }, 0);
    }
  };
  function __s1local125(__s793param0, __s793param1, __s793param2) {
    return __s1local126(__s793param0.endpoints[__s793param1], window.location.protocol) + "?apiKey=" + encodeURIComponent(__s793param0.apiKey) + "&payloadVersion=" + __s793param2 + "&sentAt=" + encodeURIComponent(__s1local124());
  }
  var __s1local126 = __s1local123._matchPageProtocol = function (__s795param0, __s795param1) {
    if (__s795param1 === "http:") {
      return __s795param0.replace(/^https:/, "http:");
    } else {
      return __s795param0;
    }
  };
  var __s1local127 = __s1local4.isoDate;
  var __s1local128 = {
    sendReport: function (__s799param0, __s799param1, __s799param2, __s799param3 = function () {}) {
      try {
        var __s799local0 = __s799param1.endpoints.notify;
        var __s799local1 = new window.XMLHttpRequest();
        __s799local1.onreadystatechange = function () {
          if (__s799local1.readyState === window.XMLHttpRequest.DONE) {
            __s799param3(null, __s799local1.responseText);
          }
        };
        __s799local1.open("POST", __s799local0);
        __s799local1.setRequestHeader("Content-Type", "application/json");
        __s799local1.setRequestHeader("Bugsnag-Api-Key", __s799param2.apiKey || __s799param1.apiKey);
        __s799local1.setRequestHeader("Bugsnag-Payload-Version", "4.0");
        __s799local1.setRequestHeader("Bugsnag-Sent-At", __s1local127());
        __s799local1.send(__s1local122(__s799param2));
      } catch (__s807local0) {
        __s799param0.error(__s807local0);
      }
    },
    sendSession: function (__s809param0, __s809param1, __s809param2, __s809param3 = function () {}) {
      try {
        var __s809local0 = __s809param1.endpoints.sessions;
        var __s809local1 = new window.XMLHttpRequest();
        __s809local1.onreadystatechange = function () {
          if (__s809local1.readyState === window.XMLHttpRequest.DONE) {
            __s809param3(null, __s809local1.responseText);
          }
        };
        __s809local1.open("POST", __s809local0);
        __s809local1.setRequestHeader("Content-Type", "application/json");
        __s809local1.setRequestHeader("Bugsnag-Api-Key", __s809param1.apiKey);
        __s809local1.setRequestHeader("Bugsnag-Payload-Version", "1.0");
        __s809local1.setRequestHeader("Bugsnag-Sent-At", __s1local127());
        __s809local1.send(__s1local117(__s809param2));
      } catch (__s817local0) {
        __s809param0.error(__s817local0);
      }
    }
  };
  var __s1local129 = {};
  var __s1local130 = Object.assign || function (__s819param0) {
    for (var __s819local0 = 1; __s819local0 < arguments.length; __s819local0++) {
      var __s819local1 = arguments[__s819local0];
      for (var __s819local2 in __s819local1) {
        if (Object.prototype.hasOwnProperty.call(__s819local1, __s819local2)) {
          __s819param0[__s819local2] = __s819local1[__s819local2];
        }
      }
    }
    return __s819param0;
  };
  var __s1local131 = __s1local4.map;
  var __s1local132 = __s1local4.reduce;
  var __s1local133 = __s1local130({}, __s1local9.schema, __s1local64);
  var __s1local134 = [__s1local115, __s1local111, __s1local74, __s1local71, __s1local100, __s1local60, __s1local66, __s1local88, __s1local84, __s1local80, __s1local75, __s1local105, __s1local83, __s1local107];
  __s1local129 = function (__s826param0, __s826param1 = []) {
    if (typeof __s826param0 == "string") {
      __s826param0 = {
        apiKey: __s826param0
      };
    }
    var __s826local0 = [];
    if (__s826param0.sessionTrackingEnabled) {
      __s826local0.push("deprecated option sessionTrackingEnabled is now called autoCaptureSessions");
      __s826param0.autoCaptureSessions = __s826param0.sessionTrackingEnabled;
    }
    if ((!!__s826param0.endpoint || !!__s826param0.sessionEndpoint) && !__s826param0.endpoints) {
      __s826local0.push("deprecated options endpoint/sessionEndpoint are now configured in the endpoints object");
      __s826param0.endpoints = {
        notify: __s826param0.endpoint,
        sessions: __s826param0.sessionEndpoint
      };
    }
    if (__s826param0.endpoints && __s826param0.endpoints.notify && !__s826param0.endpoints.sessions) {
      __s826local0.push("notify endpoint is set but sessions endpoint is not. No sessions will be sent.");
    }
    var __s826local1 = __s1local132([].concat(__s1local134).concat(__s826param1), function (__s832param0, __s832param1) {
      if (__s832param1.configSchema) {
        return __s1local130({}, __s832param0, __s832param1.configSchema);
      } else {
        return __s832param0;
      }
    }, __s1local133);
    var __s826local2 = new __s1local58({
      name: "Bugsnag JavaScript",
      version: "4.7.3",
      url: "https://github.com/bugsnag/bugsnag-js"
    }, __s826local1);
    __s826local2.transport(window.XDomainRequest ? __s1local123 : __s1local128);
    __s826local2.configure(__s826param0);
    __s1local131(__s826local0, function (__s836param0) {
      return __s826local2._logger.warn(__s836param0);
    });
    __s826local2.use(__s1local74);
    __s826local2.use(__s1local71);
    __s826local2.use(__s1local100);
    __s826local2.use(__s1local75);
    __s826local2.use(__s1local60);
    __s826local2.use(__s1local105);
    __s826local2.use(__s1local83);
    __s826local2.use(__s1local107);
    if (__s826local2.config.autoNotify !== false) {
      __s826local2.use(__s1local115);
      __s826local2.use(__s1local111);
    }
    if (__s1local135(__s826local2.config, "navigationBreadcrumbsEnabled")) {
      __s826local2.use(__s1local84);
    }
    if (__s1local135(__s826local2.config, "interactionBreadcrumbsEnabled")) {
      __s826local2.use(__s1local80);
    }
    if (__s1local135(__s826local2.config, "networkBreadcrumbsEnabled")) {
      __s826local2.use(__s1local88);
    }
    if (__s1local135(__s826local2.config, "consoleBreadcrumbsEnabled", false)) {
      __s826local2.use(__s1local66);
    }
    __s1local131(__s826param1, function (__s843param0) {
      return __s826local2.use(__s843param0);
    });
    if (__s826local2.config.autoCaptureSessions) {
      return __s826local2.startSession();
    } else {
      return __s826local2;
    }
  };
  function __s1local135(__s847param0, __s847param1) {
    var __s847local0 = !(arguments.length > 2) || arguments[2] === undefined || arguments[2];
    if (typeof __s847param0[__s847param1] == "boolean") {
      return __s847param0[__s847param1];
    } else {
      return __s847param0.autoBreadcrumbs && (__s847local0 || !/^dev(elopment)?$/.test(__s847param0.releaseStage));
    }
  }
  __s1local129.Bugsnag = {
    Client: __s1local58,
    Report: __s1local30,
    Session: __s1local44,
    Breadcrumb: __s1local6
  };
  __s1local129.default = __s1local129;
  return __s1local129;
}();
