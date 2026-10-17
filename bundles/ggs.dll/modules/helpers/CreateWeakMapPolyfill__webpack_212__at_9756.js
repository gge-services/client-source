// Lexically nested helper class excerpt (not executable by itself).
// Bundle: ggs.dll; Webpack module: 212; original: modules/classes/CreateMapPolyfill.js
function CreateWeakMapPolyfill() {
        var __s120local0 = 16;
        var __s120local1 = __s13local7.create();
        var __s120local2 = CreateUniqueKey();
        return function () {
          function WeakMap() {
            this._key = CreateUniqueKey();
          }
          WeakMap.prototype.has = function (__s126param0) {
            var __s126local0 = GetOrCreateWeakMapTable(__s126param0, false);
            return __s126local0 !== undefined && __s13local7.has(__s126local0, this._key);
          };
          WeakMap.prototype.get = function (__s128param0) {
            var __s128local0 = GetOrCreateWeakMapTable(__s128param0, false);
            if (__s128local0 !== undefined) {
              return __s13local7.get(__s128local0, this._key);
            } else {
              return undefined;
            }
          };
          WeakMap.prototype.set = function (__s132param0, __s132param1) {
            var __s132local0 = GetOrCreateWeakMapTable(__s132param0, true);
            __s132local0[this._key] = __s132param1;
            return this;
          };
          WeakMap.prototype.delete = function (__s134param0) {
            var __s134local0 = GetOrCreateWeakMapTable(__s134param0, false);
            return __s134local0 !== undefined && delete __s134local0[this._key];
          };
          WeakMap.prototype.clear = function () {
            this._key = CreateUniqueKey();
          };
          return WeakMap;
        }();
        function CreateUniqueKey() {
          var __s138local0;
          do {
            __s138local0 = "@@WeakMap@@" + CreateUUID();
          } while (__s13local7.has(__s120local1, __s138local0));
          __s120local1[__s138local0] = true;
          return __s138local0;
        }
        function GetOrCreateWeakMapTable(__s142param0, __s142param1) {
          if (!__s13local0.call(__s142param0, __s120local2)) {
            if (!__s142param1) {
              return;
            }
            Object.defineProperty(__s142param0, __s120local2, {
              value: __s13local7.create()
            });
          }
          return __s142param0[__s120local2];
        }
        function FillRandomBytes(__s146param0, __s146param1) {
          for (var __s146local0 = 0; __s146local0 < __s146param1; ++__s146local0) {
            __s146param0[__s146local0] = Math.random() * 255 | 0;
          }
          return __s146param0;
        }
        function CreateUUID() {
          var __s150local0 = function GenRandomBytes(__s152param0) {
            if (typeof Uint8Array == "function") {
              if (typeof crypto != "undefined") {
                return crypto.getRandomValues(new Uint8Array(__s152param0));
              } else if (typeof msCrypto != "undefined") {
                return msCrypto.getRandomValues(new Uint8Array(__s152param0));
              } else {
                return FillRandomBytes(new Uint8Array(__s152param0), __s152param0);
              }
            }
            return FillRandomBytes(new Array(__s152param0), __s152param0);
          }(__s120local0);
          __s150local0[6] = __s150local0[6] & 79 | 64;
          __s150local0[8] = __s150local0[8] & 191 | 128;
          var __s150local1 = "";
          for (var __s150local2 = 0; __s150local2 < __s120local0; ++__s150local2) {
            var __s150local3 = __s150local0[__s150local2];
            if (__s150local2 === 4 || __s150local2 === 6 || __s150local2 === 8) {
              __s150local1 += "-";
            }
            if (__s150local3 < 16) {
              __s150local1 += "0";
            }
            __s150local1 += __s150local3.toString(16).toLowerCase();
          }
          return __s150local1;
        }
      }
