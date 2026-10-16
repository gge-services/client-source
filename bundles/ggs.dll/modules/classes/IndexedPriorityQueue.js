Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function IndexedPriorityQueue(__s3param0) {
    this._size = 0;
    this._indexValues = [];
    this._compareValues = __s3param0;
    this._size = 0;
  }
  IndexedPriorityQueue.prototype.sortInto = function (__s5param0) {
    this._size++;
    this._indexValues[this._size] = __s5param0;
    this.sortUpTheHeap(this._size);
  };
  IndexedPriorityQueue.prototype.pop = function () {
    var __s7local0 = this._indexValues[1];
    this._indexValues[1] = this._indexValues[this._size];
    this.sortDownTheHeap(1);
    this._size--;
    return __s7local0;
  };
  IndexedPriorityQueue.prototype.length = function () {
    return this._size;
  };
  IndexedPriorityQueue.prototype.sortUpTheHeap = function (__s11param0) {
    var __s11local0 = this._indexValues[__s11param0];
    var __s11local1 = this._compareValues[__s11local0];
    for (var __s11local2 = __s11param0 >> 1; __s11local2 > 0;) {
      var __s11local3 = this._indexValues[__s11local2];
      if (!(__s11local1 < this._compareValues[__s11local3])) {
        break;
      }
      this._indexValues[__s11param0] = __s11local3;
      __s11param0 = __s11local2;
      __s11local2 >>= 1;
    }
    this._indexValues[__s11param0] = __s11local0;
  };
  IndexedPriorityQueue.prototype.sortDownTheHeap = function (__s16param0) {
    for (var __s16local0, __s16local1 = this._indexValues[__s16param0], __s16local2 = this._compareValues[__s16local1], __s16local3 = __s16param0 << 1; __s16local3 < this._size && (__s16local3 < this._size - 1 && this._compareValues[this._indexValues[__s16local3]] > this._compareValues[this._indexValues[__s16local3 + 1]] && __s16local3++, __s16local0 = this._indexValues[__s16local3], __s16local2 > this._compareValues[__s16local0]);) {
      this._indexValues[__s16param0] = __s16local0;
      __s16param0 = __s16local3;
      __s16local3 <<= 1;
    }
    this._indexValues[__s16param0] = __s16local1;
  };
  return IndexedPriorityQueue;
}();
exports.IndexedPriorityQueue = __s0local0;
