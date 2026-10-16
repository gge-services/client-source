Object.defineProperty(exports, "__esModule", {
  value: true
});
var __dep_exact_6fd0a7f85c69b366 = require("gge-module:exact_6fd0a7f85c69b366");
var __s0local0 = function (__s1param0) {
  function IsoEvent(__s3param0, __s3param1 = null, __s3param2 = true, __s3param3 = false) {
    var __s3local0 = __s1param0.call(this, __s3param0, __s3param2, __s3param3) || this;
    __s3local0.params = __s3param1;
    return __s3local0;
  }
  __dep_exact_6fd0a7f85c69b366.__extends(IsoEvent, __s1param0);
  IsoEvent.ON_SHOW_RING_MENU = "onShowRingMenu";
  IsoEvent.ON_HIDE_RING_MENU = "onHideRingMenu";
  IsoEvent.SHOW_PANEL_INFO = "showPanelInfo";
  IsoEvent.HIDE_PANEL_INFO = "hidePanelInfo";
  IsoEvent.ON_BUILDING_BUILD_PROGRESS = "onBuildingBuildProgress";
  IsoEvent.ON_BUILDING_CONSTRUCTION_DONE = "onBuildingConstructionDone";
  IsoEvent.ON_BUILDING_UPGRADE_STARTED = "onBuildingUpgradeStarted";
  IsoEvent.ON_OBJECT_ADDED = "onObjectAdded";
  IsoEvent.ON_OBJECT_CHANGED = "onObjectChanged";
  IsoEvent.ON_OBJECT_REMOVED = "onObjectRemoved";
  IsoEvent.ON_OBJECT_UPDATED = "onObjectUpdated";
  IsoEvent.ON_OBJECT_POS_CHANGED = "onObjectPosChanged";
  IsoEvent.ON_BUY_EXPANSION = "onBuyExpansion";
  IsoEvent.ON_EXPANSION_ARROW_REMOVED = "onExpansionArrowRemoved";
  IsoEvent.ON_EXPANSION_ARROW_ADDED = "onExpansionArrowAdded";
  IsoEvent.ON_DRAG_OF_NEW_OBJECT_DONE = "onDragOfNewObjectDone";
  IsoEvent.ON_DRAG_OF_NEW_OBJECT_CANCELED = "onDragOfNewObjectCanceled";
  IsoEvent.ON_DRAG_DONE = "onDragDone";
  IsoEvent.ON_DRAG_CANCELED = "onDragCanceled";
  IsoEvent.ON_DRAG_INVALID = "onDragInvalid";
  IsoEvent.ON_DRAG_STARTED_STORAGE_DECO = "onDragStartedStorageDeco";
  IsoEvent.ON_DECO_SHOP_DRAG_START = "onDecoShopDragStart";
  IsoEvent.ON_DECO_SHOP_DRAG_STOP = "onDecoShopDragStop";
  IsoEvent.ON_CAMERA_POS_CHANGED = "onCameraPosChanged";
  IsoEvent.ON_CAMERA_ZOOM_CHANGED = "onCameraZoomChanged";
  IsoEvent.ON_RENDERER_READY = "onRendererReady";
  IsoEvent.ON_RENDER_STRATEGY_CHANGED = "onRenderStrategyChanged";
  return IsoEvent;
}(require("gge-module:export_CastleEvent").CastleEvent);
exports.IsoEvent = __s0local0;
