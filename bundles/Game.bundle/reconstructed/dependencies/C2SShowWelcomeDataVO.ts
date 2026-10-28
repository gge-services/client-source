import { BasicCommandVO } from "../../../ggs.dll/reconstructed/exports/BasicCommandVO";
import { ClientConstSF } from "./ClientConstSF";
export class C2SShowWelcomeDataVO extends BasicCommandVO {
  constructor() {
    super();
  }
  getCmdId() {
    return ClientConstSF.C2S_SHOW_WELCOMEDATA;
  }
}
