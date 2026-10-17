// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 987; original: modules/classes/BugsnagBreadcrumb.js
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
