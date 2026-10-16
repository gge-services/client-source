Object.defineProperty(exports, "__esModule", {
  value: true
});
var __s0local0 = function () {
  function RenderScheduler() {
    this.RENDER_SCHEDULER_ACTIVE = false;
    this.isRunning = false;
    this.tasks = [];
    this.autoTerminateDelay = 0;
  }
  RenderScheduler.prototype.start = function () {
    if (!this.isRunning) {
      createjs.Ticker.addEventListener("tick", this.bindFunction(this.process));
      this.isRunning = true;
    }
  };
  RenderScheduler.prototype.process = function (__s8param0) {
    var __s8local0 = 0;
    var __s8local1 = 1000 / __s8param0.delta >> 1;
    for (var __s8local2 = 0; __s8local2 < this.tasks.length; __s8local2++) {
      if (__s8local0 >= __s8local1) {
        return;
      }
      var __s8local3 = this.tasks.shift();
      if (!Function.prototype.call.apply(__s8local3)) {
        __s8local0++;
      }
    }
    if (__s8local0 === 0) {
      this.autoTerminateDelay++;
      if (this.autoTerminateDelay > 3) {
        this.terminate();
      }
    } else {
      this.autoTerminateDelay = 0;
    }
  };
  RenderScheduler.prototype.addTask = function (__s17param0) {
    if (this.RENDER_SCHEDULER_ACTIVE) {
      this.tasks.push(__s17param0);
      this.start();
    } else {
      Function.prototype.call.apply(__s17param0);
    }
  };
  RenderScheduler.prototype.terminate = function () {
    createjs.Ticker.removeEventListener("tick", this.bindFunction(this.process));
    this.isRunning = false;
    this.autoTerminateDelay = 0;
    if (this.tasks.length) {
      this.tasks = [];
    }
  };
  return RenderScheduler;
}();
exports.renderScheduler = window.renderScheduler = new __s0local0();
