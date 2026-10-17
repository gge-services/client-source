// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 987; original: modules/classes/BugsnagBreadcrumb.js
function ErrorStackParser$$parseOpera9(__s214param0) {
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
      }
