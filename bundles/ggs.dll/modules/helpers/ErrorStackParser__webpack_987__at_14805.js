// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 987; original: modules/classes/BugsnagBreadcrumb.js
function ErrorStackParser(__s184param0) {
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
  }
