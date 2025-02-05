import Spreadsheet from "./spreadsheet";
import { plugin, ProfilesPluginMethod } from "@grouparoo/core";

export const profiles: ProfilesPluginMethod = async ({
  run,
  appOptions,
  source,
  sourceOptions,
  sourceMapping,
  sourceOffset,
  limit,
}) => {
  let combinedMapping = sourceMapping;
  const properties = await source.$get("properties");
  for (const rule of properties) {
    const ruleOptions = await rule.getOptions();
    const ruleMapping = {};
    if (ruleOptions.column) {
      ruleMapping[ruleOptions.column?.toString()] = rule.key;
      combinedMapping = Object.assign(combinedMapping, ruleMapping);
    }
  }

  const offset = sourceOffset ? parseInt(sourceOffset.toString()) : 0;
  let importsCount = 0;
  const sheet = new Spreadsheet(
    appOptions,
    sourceOptions.sheet_url?.toString()
  );
  const rows = await sheet.read({ limit, offset });

  for (const row of rows) {
    await plugin.createImport(combinedMapping, run, row);
    importsCount++;
  }

  return {
    importsCount,
    highWaterMark: {},
    sourceOffset: offset + importsCount,
  };
};
