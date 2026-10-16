function sortOn(__s1param0, __s1param1, __s1param2) {
  if (arguments.length === 2 && typeof __s1param1 == "number") {
    __s1param2 = __s1param1;
    __s1param1 = undefined;
  }
  if (!Array.isArray(__s1param1)) {
    __s1param1 = [__s1param1];
  }
  if (!Array.isArray(__s1param2)) {
    __s1param2 = [__s1param2];
  }
  if (__s1param1.length !== __s1param2.length) {
    __s1param2 = new Array(__s1param1.length).fill(undefined);
  }
  var __s1local0 = __s1param2[0] & sortOn.RETURNINDEXEDARRAY;
  if (__s1local0) {
    __s1param0 = Array.from(__s1param0);
  }
  var __s1local1 = __s1param1.map(function (__s8param0, __s8param1) {
    return function createComparisonFn(__s10param0, __s10param1) {
      if ((__s10param1 = __s10param1 || 0) & sortOn.UNIQUESORT) {
        throw new Error("UNIQUESORT is not implemented");
      }
      var __s10local0 = [];
      if (__s10param0) {
        __s10local0.push(function getProperty() {
          return this[__s10param0];
        });
      }
      __s10local0.push(__s10param1 & sortOn.NUMERIC ? function () {
        return parseFloat(this);
      } : function () {
        return typeof this == "string" && this || typeof this == "number" && "" + this || this && this.toString() || this;
      });
      if (__s10param1 & sortOn.CASEINSENSITIVE) {
        __s10local0.push(String.prototype.toLowerCase);
      }
      __s10local0.apply = Array.prototype.reduce.bind(__s10local0, function (__s21param0, __s21param1) {
        return __s21param1.apply(__s21param0);
      });
      var __s10local1 = __s10param1 & sortOn.DESCENDING ? -1 : 1;
      var __s10local2 = -__s10local1;
      return function comparisonFn(__s23param0, __s23param1) {
        __s23param0 = __s10local0.apply(__s23param0);
        __s23param1 = __s10local0.apply(__s23param1);
        if (__s23param0 > __s23param1 || __s23param0 != null && __s23param1 == null) {
          return __s10local1;
        } else if (__s23param0 < __s23param1 || __s23param0 == null && __s23param1 != null) {
          return __s10local2;
        } else {
          return 0;
        }
      };
    }(__s8param0, __s1param2[__s8param1]);
  });
  var __s1local2 = __s1param0.sort(function comparisonFn(__s28param0, __s28param1) {
    return __s1local1.reduce(function (__s30param0, __s30param1) {
      return __s30param0 || __s30param1(__s28param0, __s28param1);
    }, 0);
  });
  if (__s1local0) {
    return __s1local2;
  } else {
    return undefined;
  }
}
sortOn.defineConstants = function (__s34param0, __s34param1) {
  function constant(__s36param0) {
    return {
      get: function get() {
        return __s36param0;
      },
      set: function set() {
        throw new Error("trying to set read-only property");
      }
    };
  }
  if (arguments.length === 1) {
    __s34param1 = false;
  }
  var __s34local0 = {
    CASEINSENSITIVE: constant(1),
    DESCENDING: constant(2),
    UNIQUESORT: constant(4),
    RETURNINDEXEDARRAY: constant(8),
    NUMERIC: constant(16)
  };
  if (!!__s34param1 || !Object.keys(__s34local0).some(function (__s43param0) {
    return __s34param0[__s43param0];
  })) {
    Object.defineProperties(__s34param0, __s34local0);
  }
};
sortOn.defineConstants(sortOn);
sortOn.extend = function (__s46param0, __s46param1) {
  if (arguments.length === 1) {
    __s46param1 = false;
  }
  if (!!__s46param1 || !__s46param0.prototype.hasOwnProperty("sortOn")) {
    Object.defineProperty(__s46param0.prototype, "sortOn", {
      enumerable: false,
      value: function value(__s50param0, __s50param1) {
        var __s50local0 = Array.from(arguments);
        __s50local0.unshift(this);
        return sortOn.apply(this, __s50local0);
      }
    });
    sortOn.defineConstants(__s46param0, __s46param1);
  }
};
module.exports = sortOn;
