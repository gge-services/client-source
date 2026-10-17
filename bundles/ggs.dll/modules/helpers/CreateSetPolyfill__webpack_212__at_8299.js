// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 212; original: modules/classes/CreateMapPolyfill.js
function CreateSetPolyfill() {
        return function () {
          function Set() {
            this._map = new __s13local10();
          }
          Object.defineProperty(Set.prototype, "size", {
            get: function () {
              return this._map.size;
            },
            enumerable: true,
            configurable: true
          });
          Set.prototype.has = function (__s102param0) {
            return this._map.has(__s102param0);
          };
          Set.prototype.add = function (__s104param0) {
            this._map.set(__s104param0, __s104param0);
            return this;
          };
          Set.prototype.delete = function (__s106param0) {
            return this._map.delete(__s106param0);
          };
          Set.prototype.clear = function () {
            this._map.clear();
          };
          Set.prototype.keys = function () {
            return this._map.keys();
          };
          Set.prototype.values = function () {
            return this._map.values();
          };
          Set.prototype.entries = function () {
            return this._map.entries();
          };
          Set.prototype["@@iterator"] = function () {
            return this.keys();
          };
          Set.prototype[__s13local3] = function () {
            return this.keys();
          };
          return Set;
        }();
      }
