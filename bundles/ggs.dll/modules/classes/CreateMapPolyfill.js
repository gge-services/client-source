var __dep_class_Item = require("gge-module:class_Item");
var __dep_exact_d8857732a937369e = require("gge-module:exact_d8857732a937369e");
var __s0local0;
(function (__s1param0) {
  (function (__s3param0) {
    var __s3local0 = typeof __dep_exact_d8857732a937369e == "object" ? __dep_exact_d8857732a937369e : typeof self == "object" ? self : typeof this == "object" ? this : Function("return this;")();
    var __s3local1 = makeExporter(__s1param0);
    function makeExporter(__s5param0, __s5param1) {
      return function (__s7param0, __s7param1) {
        if (typeof __s5param0[__s7param0] != "function") {
          Object.defineProperty(__s5param0, __s7param0, {
            configurable: true,
            writable: true,
            value: __s7param1
          });
        }
        if (__s5param1) {
          __s5param1(__s7param0, __s7param1);
        }
      };
    }
    if (__s3local0.Reflect === undefined) {
      __s3local0.Reflect = __s1param0;
    } else {
      __s3local1 = makeExporter(__s3local0.Reflect, __s3local1);
    }
    (function (__s13param0) {
      var __s13local0 = Object.prototype.hasOwnProperty;
      var __s13local1 = typeof Symbol == "function";
      var __s13local2 = __s13local1 && Symbol.toPrimitive !== undefined ? Symbol.toPrimitive : "@@toPrimitive";
      var __s13local3 = __s13local1 && Symbol.iterator !== undefined ? Symbol.iterator : "@@iterator";
      var __s13local4 = typeof Object.create == "function";
      var __s13local5 = {
        __proto__: []
      } instanceof Array;
      var __s13local6 = !__s13local4 && !__s13local5;
      var __s13local7 = {
        create: __s13local4 ? function () {
          return MakeDictionary(Object.create(null));
        } : __s13local5 ? function () {
          return MakeDictionary({
            __proto__: null
          });
        } : function () {
          return MakeDictionary({});
        },
        has: __s13local6 ? function (__s21param0, __s21param1) {
          return __s13local0.call(__s21param0, __s21param1);
        } : function (__s23param0, __s23param1) {
          return __s23param1 in __s23param0;
        },
        get: __s13local6 ? function (__s25param0, __s25param1) {
          if (__s13local0.call(__s25param0, __s25param1)) {
            return __s25param0[__s25param1];
          } else {
            return undefined;
          }
        } : function (__s29param0, __s29param1) {
          return __s29param0[__s29param1];
        }
      };
      var __s13local8 = Object.getPrototypeOf(Function);
      var __s13local9 = typeof __dep_class_Item == "object" && __dep_class_Item.env && __dep_class_Item.env.REFLECT_METADATA_USE_MAP_POLYFILL === "true";
      var __s13local10 = __s13local9 || typeof Map != "function" || typeof Map.prototype.entries != "function" ? function CreateMapPolyfill() {
        var __s31local0 = {};
        var __s31local1 = [];
        var __s31local2 = function () {
          function MapIterator(__s35param0, __s35param1, __s35param2) {
            this._index = 0;
            this._keys = __s35param0;
            this._values = __s35param1;
            this._selector = __s35param2;
          }
          MapIterator.prototype["@@iterator"] = function () {
            return this;
          };
          MapIterator.prototype[__s13local3] = function () {
            return this;
          };
          MapIterator.prototype.next = function () {
            var __s41local0 = this._index;
            if (__s41local0 >= 0 && __s41local0 < this._keys.length) {
              var __s41local1 = this._selector(this._keys[__s41local0], this._values[__s41local0]);
              if (__s41local0 + 1 >= this._keys.length) {
                this._index = -1;
                this._keys = __s31local1;
                this._values = __s31local1;
              } else {
                this._index++;
              }
              return {
                value: __s41local1,
                done: false
              };
            }
            return {
              value: undefined,
              done: true
            };
          };
          MapIterator.prototype.throw = function (__s46param0) {
            if (this._index >= 0) {
              this._index = -1;
              this._keys = __s31local1;
              this._values = __s31local1;
            }
            throw __s46param0;
          };
          MapIterator.prototype.return = function (__s49param0) {
            if (this._index >= 0) {
              this._index = -1;
              this._keys = __s31local1;
              this._values = __s31local1;
            }
            return {
              value: __s49param0,
              done: true
            };
          };
          return MapIterator;
        }();
        return function () {
          function Map() {
            this._keys = [];
            this._values = [];
            this._cacheKey = __s31local0;
            this._cacheIndex = -2;
          }
          Object.defineProperty(Map.prototype, "size", {
            get: function () {
              return this._keys.length;
            },
            enumerable: true,
            configurable: true
          });
          Map.prototype.has = function (__s58param0) {
            return this._find(__s58param0, false) >= 0;
          };
          Map.prototype.get = function (__s60param0) {
            var __s60local0 = this._find(__s60param0, false);
            if (__s60local0 >= 0) {
              return this._values[__s60local0];
            } else {
              return undefined;
            }
          };
          Map.prototype.set = function (__s64param0, __s64param1) {
            var __s64local0 = this._find(__s64param0, true);
            this._values[__s64local0] = __s64param1;
            return this;
          };
          Map.prototype.delete = function (__s66param0) {
            var __s66local0 = this._find(__s66param0, false);
            if (__s66local0 >= 0) {
              for (var __s66local1 = this._keys.length, __s66local2 = __s66local0 + 1; __s66local2 < __s66local1; __s66local2++) {
                this._keys[__s66local2 - 1] = this._keys[__s66local2];
                this._values[__s66local2 - 1] = this._values[__s66local2];
              }
              this._keys.length--;
              this._values.length--;
              if (__s66param0 === this._cacheKey) {
                this._cacheKey = __s31local0;
                this._cacheIndex = -2;
              }
              return true;
            }
            return false;
          };
          Map.prototype.clear = function () {
            this._keys.length = 0;
            this._values.length = 0;
            this._cacheKey = __s31local0;
            this._cacheIndex = -2;
          };
          Map.prototype.keys = function () {
            return new __s31local2(this._keys, this._values, getKey);
          };
          Map.prototype.values = function () {
            return new __s31local2(this._keys, this._values, getValue);
          };
          Map.prototype.entries = function () {
            return new __s31local2(this._keys, this._values, getEntry);
          };
          Map.prototype["@@iterator"] = function () {
            return this.entries();
          };
          Map.prototype[__s13local3] = function () {
            return this.entries();
          };
          Map.prototype._find = function (__s84param0, __s84param1) {
            if (this._cacheKey !== __s84param0) {
              this._cacheIndex = this._keys.indexOf(this._cacheKey = __s84param0);
            }
            if (this._cacheIndex < 0 && __s84param1) {
              this._cacheIndex = this._keys.length;
              this._keys.push(__s84param0);
              this._values.push(undefined);
            }
            return this._cacheIndex;
          };
          return Map;
        }();
        function getKey(__s88param0, __s88param1) {
          return __s88param0;
        }
        function getValue(__s90param0, __s90param1) {
          return __s90param1;
        }
        function getEntry(__s92param0, __s92param1) {
          return [__s92param0, __s92param1];
        }
      }() : Map;
      var __s13local11 = __s13local9 || typeof Set != "function" || typeof Set.prototype.entries != "function" ? function CreateSetPolyfill() {
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
      }() : Set;
      var __s13local12 = new (__s13local9 || typeof WeakMap != "function" ? function CreateWeakMapPolyfill() {
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
      }() : WeakMap)();
      function GetOrCreateMetadataMap(__s162param0, __s162param1, __s162param2) {
        var __s162local0 = __s13local12.get(__s162param0);
        if (IsUndefined(__s162local0)) {
          if (!__s162param2) {
            return;
          }
          __s162local0 = new __s13local10();
          __s13local12.set(__s162param0, __s162local0);
        }
        var __s162local1 = __s162local0.get(__s162param1);
        if (IsUndefined(__s162local1)) {
          if (!__s162param2) {
            return;
          }
          __s162local1 = new __s13local10();
          __s162local0.set(__s162param1, __s162local1);
        }
        return __s162local1;
      }
      function OrdinaryHasOwnMetadata(__s168param0, __s168param1, __s168param2) {
        var __s168local0 = GetOrCreateMetadataMap(__s168param1, __s168param2, false);
        return !IsUndefined(__s168local0) && function ToBoolean(__s170param0) {
          return !!__s170param0;
        }(__s168local0.has(__s168param0));
      }
      function OrdinaryGetOwnMetadata(__s172param0, __s172param1, __s172param2) {
        var __s172local0 = GetOrCreateMetadataMap(__s172param1, __s172param2, false);
        if (!IsUndefined(__s172local0)) {
          return __s172local0.get(__s172param0);
        }
      }
      function OrdinaryDefineOwnMetadata(__s175param0, __s175param1, __s175param2, __s175param3) {
        var __s175local0 = GetOrCreateMetadataMap(__s175param2, __s175param3, true);
        __s175local0.set(__s175param0, __s175param1);
      }
      function OrdinaryOwnMetadataKeys(__s177param0, __s177param1) {
        var __s177local0 = [];
        var __s177local1 = GetOrCreateMetadataMap(__s177param0, __s177param1, false);
        if (IsUndefined(__s177local1)) {
          return __s177local0;
        }
        var __s177local2 = __s177local1.keys();
        var __s177local3 = function GetIterator(__s180param0) {
          var __s180local0 = GetMethod(__s180param0, __s13local3);
          if (!IsCallable(__s180local0)) {
            throw new TypeError();
          }
          var __s180local1 = __s180local0.call(__s180param0);
          if (!IsObject(__s180local1)) {
            throw new TypeError();
          }
          return __s180local1;
        }(__s177local2);
        var __s177local4 = 0;
        while (true) {
          var __s177local5 = IteratorStep(__s177local3);
          if (!__s177local5) {
            __s177local0.length = __s177local4;
            return __s177local0;
          }
          var __s177local6 = __s177local5.value;
          try {
            __s177local0[__s177local4] = __s177local6;
          } catch (__s188local0) {
            try {
              IteratorClose(__s177local3);
            } finally {
              throw __s188local0;
            }
          }
          __s177local4++;
        }
      }
      function Type(__s192param0) {
        if (__s192param0 === null) {
          return 1;
        }
        switch (typeof __s192param0) {
          case "undefined":
            return 0;
          case "boolean":
            return 2;
          case "string":
            return 3;
          case "symbol":
            return 4;
          case "number":
            return 5;
          case "object":
            if (__s192param0 === null) {
              return 1;
            } else {
              return 6;
            }
          default:
            return 6;
        }
      }
      function IsUndefined(__s198param0) {
        return __s198param0 === undefined;
      }
      function IsNull(__s200param0) {
        return __s200param0 === null;
      }
      function IsObject(__s202param0) {
        if (typeof __s202param0 == "object") {
          return __s202param0 !== null;
        } else {
          return typeof __s202param0 == "function";
        }
      }
      function ToPrimitive(__s206param0, __s206param1) {
        switch (Type(__s206param0)) {
          case 0:
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            return __s206param0;
        }
        var __s206local0 = __s206param1 === 3 ? "string" : __s206param1 === 5 ? "number" : "default";
        var __s206local1 = GetMethod(__s206param0, __s13local2);
        if (__s206local1 !== undefined) {
          var __s206local2 = __s206local1.call(__s206param0, __s206local0);
          if (IsObject(__s206local2)) {
            throw new TypeError();
          }
          return __s206local2;
        }
        return function OrdinaryToPrimitive(__s211param0, __s211param1) {
          if (__s211param1 === "string") {
            var __s211local0 = __s211param0.toString;
            if (IsCallable(__s211local0)) {
              var __s211local1 = __s211local0.call(__s211param0);
              if (!IsObject(__s211local1)) {
                return __s211local1;
              }
            }
            var __s211local2 = __s211param0.valueOf;
            if (IsCallable(__s211local2)) {
              var __s211local1 = __s211local2.call(__s211param0);
              if (!IsObject(__s211local1)) {
                return __s211local1;
              }
            }
          } else {
            var __s211local2 = __s211param0.valueOf;
            if (IsCallable(__s211local2)) {
              var __s211local1 = __s211local2.call(__s211param0);
              if (!IsObject(__s211local1)) {
                return __s211local1;
              }
            }
            var __s211local3 = __s211param0.toString;
            if (IsCallable(__s211local3)) {
              var __s211local1 = __s211local3.call(__s211param0);
              if (!IsObject(__s211local1)) {
                return __s211local1;
              }
            }
          }
          throw new TypeError();
        }(__s206param0, __s206local0 === "default" ? "number" : __s206local0);
      }
      function ToPropertyKey(__s223param0) {
        var __s223local0 = ToPrimitive(__s223param0, 3);
        if (function IsSymbol(__s225param0) {
          return typeof __s225param0 == "symbol";
        }(__s223local0)) {
          return __s223local0;
        } else {
          return function ToString(__s229param0) {
            return "" + __s229param0;
          }(__s223local0);
        }
      }
      function IsArray(__s231param0) {
        if (Array.isArray) {
          return Array.isArray(__s231param0);
        } else if (__s231param0 instanceof Object) {
          return __s231param0 instanceof Array;
        } else {
          return Object.prototype.toString.call(__s231param0) === "[object Array]";
        }
      }
      function IsCallable(__s236param0) {
        return typeof __s236param0 == "function";
      }
      function IsConstructor(__s238param0) {
        return typeof __s238param0 == "function";
      }
      function GetMethod(__s240param0, __s240param1) {
        var __s240local0 = __s240param0[__s240param1];
        if (__s240local0 !== undefined && __s240local0 !== null) {
          if (!IsCallable(__s240local0)) {
            throw new TypeError();
          }
          return __s240local0;
        }
      }
      function IteratorStep(__s244param0) {
        var __s244local0 = __s244param0.next();
        return !__s244local0.done && __s244local0;
      }
      function IteratorClose(__s246param0) {
        var __s246local0 = __s246param0.return;
        if (__s246local0) {
          __s246local0.call(__s246param0);
        }
      }
      function OrdinaryGetPrototypeOf(__s249param0) {
        var __s249local0 = Object.getPrototypeOf(__s249param0);
        if (typeof __s249param0 != "function" || __s249param0 === __s13local8) {
          return __s249local0;
        }
        if (__s249local0 !== __s13local8) {
          return __s249local0;
        }
        var __s249local1 = __s249param0.prototype;
        var __s249local2 = __s249local1 && Object.getPrototypeOf(__s249local1);
        if (__s249local2 == null || __s249local2 === Object.prototype) {
          return __s249local0;
        }
        var __s249local3 = __s249local2.constructor;
        if (typeof __s249local3 != "function") {
          return __s249local0;
        } else if (__s249local3 === __s249param0) {
          return __s249local0;
        } else {
          return __s249local3;
        }
      }
      function MakeDictionary(__s257param0) {
        __s257param0.__ = undefined;
        delete __s257param0.__;
        return __s257param0;
      }
      __s13param0("decorate", function decorate(__s259param0, __s259param1, __s259param2, __s259param3) {
        if (IsUndefined(__s259param2)) {
          if (!IsArray(__s259param0)) {
            throw new TypeError();
          }
          if (!IsConstructor(__s259param1)) {
            throw new TypeError();
          }
          return function DecorateConstructor(__s264param0, __s264param1) {
            for (var __s264local0 = __s264param0.length - 1; __s264local0 >= 0; --__s264local0) {
              var __s264local1 = __s264param0[__s264local0];
              var __s264local2 = __s264local1(__s264param1);
              if (!IsUndefined(__s264local2) && !IsNull(__s264local2)) {
                if (!IsConstructor(__s264local2)) {
                  throw new TypeError();
                }
                __s264param1 = __s264local2;
              }
            }
            return __s264param1;
          }(__s259param0, __s259param1);
        }
        if (!IsArray(__s259param0)) {
          throw new TypeError();
        }
        if (!IsObject(__s259param1)) {
          throw new TypeError();
        }
        if (!IsObject(__s259param3) && !IsUndefined(__s259param3) && !IsNull(__s259param3)) {
          throw new TypeError();
        }
        if (IsNull(__s259param3)) {
          __s259param3 = undefined;
        }
        __s259param2 = ToPropertyKey(__s259param2);
        return function DecorateProperty(__s274param0, __s274param1, __s274param2, __s274param3) {
          for (var __s274local0 = __s274param0.length - 1; __s274local0 >= 0; --__s274local0) {
            var __s274local1 = __s274param0[__s274local0];
            var __s274local2 = __s274local1(__s274param1, __s274param2, __s274param3);
            if (!IsUndefined(__s274local2) && !IsNull(__s274local2)) {
              if (!IsObject(__s274local2)) {
                throw new TypeError();
              }
              __s274param3 = __s274local2;
            }
          }
          return __s274param3;
        }(__s259param0, __s259param1, __s259param2, __s259param3);
      });
      __s13param0("metadata", function metadata(__s280param0, __s280param1) {
        return function decorator(__s282param0, __s282param1) {
          if (!IsObject(__s282param0)) {
            throw new TypeError();
          }
          if (!IsUndefined(__s282param1) && !function IsPropertyKey(__s285param0) {
            switch (Type(__s285param0)) {
              case 3:
              case 4:
                return true;
              default:
                return false;
            }
          }(__s282param1)) {
            throw new TypeError();
          }
          OrdinaryDefineOwnMetadata(__s280param0, __s280param1, __s282param0, __s282param1);
        };
      });
      __s13param0("defineMetadata", function defineMetadata(__s289param0, __s289param1, __s289param2, __s289param3) {
        if (!IsObject(__s289param2)) {
          throw new TypeError();
        }
        if (!IsUndefined(__s289param3)) {
          __s289param3 = ToPropertyKey(__s289param3);
        }
        return OrdinaryDefineOwnMetadata(__s289param0, __s289param1, __s289param2, __s289param3);
      });
      __s13param0("hasMetadata", function hasMetadata(__s293param0, __s293param1, __s293param2) {
        if (!IsObject(__s293param1)) {
          throw new TypeError();
        }
        if (!IsUndefined(__s293param2)) {
          __s293param2 = ToPropertyKey(__s293param2);
        }
        return function OrdinaryHasMetadata(__s297param0, __s297param1, __s297param2) {
          var __s297local0 = OrdinaryHasOwnMetadata(__s297param0, __s297param1, __s297param2);
          if (__s297local0) {
            return true;
          }
          var __s297local1 = OrdinaryGetPrototypeOf(__s297param1);
          if (!IsNull(__s297local1)) {
            return OrdinaryHasMetadata(__s297param0, __s297local1, __s297param2);
          }
          return false;
        }(__s293param0, __s293param1, __s293param2);
      });
      __s13param0("hasOwnMetadata", function hasOwnMetadata(__s301param0, __s301param1, __s301param2) {
        if (!IsObject(__s301param1)) {
          throw new TypeError();
        }
        if (!IsUndefined(__s301param2)) {
          __s301param2 = ToPropertyKey(__s301param2);
        }
        return OrdinaryHasOwnMetadata(__s301param0, __s301param1, __s301param2);
      });
      __s13param0("getMetadata", function getMetadata(__s305param0, __s305param1, __s305param2) {
        if (!IsObject(__s305param1)) {
          throw new TypeError();
        }
        if (!IsUndefined(__s305param2)) {
          __s305param2 = ToPropertyKey(__s305param2);
        }
        return function OrdinaryGetMetadata(__s309param0, __s309param1, __s309param2) {
          var __s309local0 = OrdinaryHasOwnMetadata(__s309param0, __s309param1, __s309param2);
          if (__s309local0) {
            return OrdinaryGetOwnMetadata(__s309param0, __s309param1, __s309param2);
          }
          var __s309local1 = OrdinaryGetPrototypeOf(__s309param1);
          if (!IsNull(__s309local1)) {
            return OrdinaryGetMetadata(__s309param0, __s309local1, __s309param2);
          }
          return;
        }(__s305param0, __s305param1, __s305param2);
      });
      __s13param0("getOwnMetadata", function getOwnMetadata(__s313param0, __s313param1, __s313param2) {
        if (!IsObject(__s313param1)) {
          throw new TypeError();
        }
        if (!IsUndefined(__s313param2)) {
          __s313param2 = ToPropertyKey(__s313param2);
        }
        return OrdinaryGetOwnMetadata(__s313param0, __s313param1, __s313param2);
      });
      __s13param0("getMetadataKeys", function getMetadataKeys(__s317param0, __s317param1) {
        if (!IsObject(__s317param0)) {
          throw new TypeError();
        }
        if (!IsUndefined(__s317param1)) {
          __s317param1 = ToPropertyKey(__s317param1);
        }
        return function OrdinaryMetadataKeys(__s321param0, __s321param1) {
          var __s321local0 = OrdinaryOwnMetadataKeys(__s321param0, __s321param1);
          var __s321local1 = OrdinaryGetPrototypeOf(__s321param0);
          if (__s321local1 === null) {
            return __s321local0;
          }
          var __s321local2 = OrdinaryMetadataKeys(__s321local1, __s321param1);
          if (__s321local2.length <= 0) {
            return __s321local0;
          }
          if (__s321local0.length <= 0) {
            return __s321local2;
          }
          var __s321local3 = new __s13local11();
          var __s321local4 = [];
          for (var __s321local5 = 0, __s321local6 = __s321local0; __s321local5 < __s321local6.length; __s321local5++) {
            var __s321local7 = __s321local6[__s321local5];
            var __s321local8 = __s321local3.has(__s321local7);
            if (!__s321local8) {
              __s321local3.add(__s321local7);
              __s321local4.push(__s321local7);
            }
          }
          for (var __s321local9 = 0, __s321local10 = __s321local2; __s321local9 < __s321local10.length; __s321local9++) {
            var __s321local7 = __s321local10[__s321local9];
            var __s321local8 = __s321local3.has(__s321local7);
            if (!__s321local8) {
              __s321local3.add(__s321local7);
              __s321local4.push(__s321local7);
            }
          }
          return __s321local4;
        }(__s317param0, __s317param1);
      });
      __s13param0("getOwnMetadataKeys", function getOwnMetadataKeys(__s332param0, __s332param1) {
        if (!IsObject(__s332param0)) {
          throw new TypeError();
        }
        if (!IsUndefined(__s332param1)) {
          __s332param1 = ToPropertyKey(__s332param1);
        }
        return OrdinaryOwnMetadataKeys(__s332param0, __s332param1);
      });
      __s13param0("deleteMetadata", function deleteMetadata(__s336param0, __s336param1, __s336param2) {
        if (!IsObject(__s336param1)) {
          throw new TypeError();
        }
        if (!IsUndefined(__s336param2)) {
          __s336param2 = ToPropertyKey(__s336param2);
        }
        var __s336local0 = GetOrCreateMetadataMap(__s336param1, __s336param2, false);
        if (IsUndefined(__s336local0)) {
          return false;
        }
        if (!__s336local0.delete(__s336param0)) {
          return false;
        }
        if (__s336local0.size > 0) {
          return true;
        }
        var __s336local1 = __s13local12.get(__s336param1);
        __s336local1.delete(__s336param2);
        return __s336local1.size > 0 || (__s13local12.delete(__s336param1), true);
      });
    })(__s3local1);
  })();
})(__s0local0 ||= {});
