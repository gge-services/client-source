// Lexically nested helper class excerpt (not executable by itself).
// Bundle: Game.bundle; Webpack module: 407; original: modules/exports/renderScheduler.js
function RenderScheduler() {
    this.RENDER_SCHEDULER_ACTIVE = false;
    this.isRunning = false;
    this.tasks = [];
    this.autoTerminateDelay = 0;
  }
