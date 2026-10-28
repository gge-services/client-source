import { CastleComponent } from "./CastleComponent";
import { classImplementsInterfaces } from "../../../ggs.dll/reconstructed/exports/classImplementsInterfaces";
export class AIsoCommand extends CastleComponent {
  constructor() {
    const __initial0 = false;
    CONSTRUCTOR_HACK;
    super();
    this._isExecuted = __initial0;
  }
  execute() {}
  get isExecuted() {
    return this._isExecuted;
  }
  set isExecuted(value) {
    this._isExecuted = value;
  }
}
classImplementsInterfaces(AIsoCommand, "ICollectableRendererList");
