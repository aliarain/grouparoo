import { log, config } from "actionhero";
import { Run } from "../models/Run";

/**
 * This method creates a new Run for internal use, ie: when you want to create a run due to a new Property
 * This method will enqueue a run which creates an import for every profile
 * Enqueuing a new internal run will end any previous runs for the same creator type
 */
export async function internalRun(creatorType: string, creatorId: string) {
  const previousRuns = await Run.findAll({
    where: {
      creatorType,
      state: "running",
    },
  });

  for (const i in previousRuns) {
    await previousRuns[i].stop();
  }

  const run = await Run.create({
    creatorType,
    creatorId,
    state: "running",
    groupMethod: "internalRun",
  });

  log(
    `[ run ] starting run ${
      run.id
    } for ${creatorType} ${await run.getCreatorName()} (${creatorId})`,
    "notice"
  );

  return run;
}
