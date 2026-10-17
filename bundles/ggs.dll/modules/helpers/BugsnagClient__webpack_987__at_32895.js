// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 987; original: modules/classes/BugsnagBreadcrumb.js
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
