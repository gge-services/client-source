import { CastleModel } from "./CastleModel";
import { IsoController } from "./IsoController";
import { IsoViewRenderer } from "./IsoViewRenderer";
export class Iso {
  static _controller: any;
  static _renderer: any;

  static get data() {
    if (CastleModel.areaData) {
      return CastleModel.areaData.activeIsoData;
    } else {
      return null;
    }
  }
  static get renderer() {
    (() => {
      const sourceObject = Iso;
      const sourceKey = "_renderer";
      const previousValue = sourceObject[sourceKey];
      return !previousValue ? sourceObject[sourceKey] = new IsoViewRenderer() : previousValue;
    })();
    return Iso._renderer;
  }
  static get controller() {
    (() => {
      const sourceObject = Iso;
      const sourceKey = "_controller";
      const previousValue = sourceObject[sourceKey];
      return !previousValue ? sourceObject[sourceKey] = new IsoController() : previousValue;
    })();
    return Iso._controller;
  }
  static destroy() {
    if (Iso._renderer) {
      Iso._renderer.destroy();
      Iso._renderer = null;
    }
    if (Iso._controller) {
      Iso._controller.destroy();
      Iso._controller = null;
    }
  }
}
