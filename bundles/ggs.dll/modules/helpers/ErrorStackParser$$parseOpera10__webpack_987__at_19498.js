// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 987; original: modules/classes/BugsnagBreadcrumb.js
function ErrorStackParser$$parseOpera10(__s219param0) {
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
      }
