import { CLI } from "actionhero";
import { teams } from "../../../teams";
import { users, purchases } from "../../../sample_data";
import { groups } from "../../../groups";
import { events } from "../../../events";
import { init } from "../../../util/shared";

export class Console extends CLI {
  constructor() {
    super();
    this.name = "grouparoo demo eCommerce data";
    this.description =
      "Load eCommerce users and purchases into a source database.";
  }

  async run() {
    const scale = 2000; // 2M users and purchases
    await init({ reset: true });
    await teams();
    await users({ scale });
    await purchases({ scale });
    await events();
    await groups();
    return true;
  }
}