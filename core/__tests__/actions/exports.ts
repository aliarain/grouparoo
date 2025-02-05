import { helper } from "@grouparoo/spec-helper";
import { specHelper } from "actionhero";
import { Export } from "../../src";

describe("actions/exports", () => {
  helper.grouparooTestServer({ truncate: true, enableTestPlugin: true });

  beforeAll(async () => {
    await specHelper.runAction("team:initialize", {
      firstName: "Mario",
      lastName: "Mario",
      password: "P@ssw0rd!",
      email: "mario@example.com",
    });
  });

  describe("reader signed in", () => {
    let connection;
    let csrfToken;
    let destination;
    let profile;
    let id;

    beforeAll(async () => {
      profile = await helper.factories.profile();
      destination = await helper.factories.destination();
      const otherDestination = await helper.factories.destination();

      const firstExport = await Export.create({
        destinationId: destination.id,
        profileId: profile.id,
        oldProfileProperties: {},
        newProfileProperties: {},
        oldGroups: [],
        newGroups: [],
      });
      id = firstExport.id;

      await Export.create({
        destinationId: destination.id,
        profileId: "other-profile",
        startedAt: new Date(),
        oldProfileProperties: {},
        newProfileProperties: {},
        oldGroups: [],
        newGroups: [],
      });

      await Export.create({
        destinationId: otherDestination.id,
        profileId: profile.id,
        startedAt: new Date(),
        completedAt: new Date(),
        oldProfileProperties: {},
        newProfileProperties: {},
        oldGroups: [],
        newGroups: [],
      });

      await Export.create({
        destinationId: otherDestination.id,
        profileId: profile.id,
        startedAt: new Date(),
        oldProfileProperties: {},
        newProfileProperties: {},
        oldGroups: [],
        newGroups: [],
        errorMessage: "broken",
      });

      connection = await specHelper.buildConnection();
      connection.params = { email: "mario@example.com", password: "P@ssw0rd!" };
      const sessionResponse = await specHelper.runAction(
        "session:create",
        connection
      );
      csrfToken = sessionResponse.csrfToken;
    });

    test("a reader can view the exports", async () => {
      connection.params = { csrfToken };
      const { error, exports, total } = await specHelper.runAction(
        "exports:list",
        connection
      );

      expect(error).toBeUndefined();
      expect(exports.length).toBe(4);
      expect(total).toBe(4);
    });

    test("a reader can view an export", async () => {
      connection.params = { csrfToken, id };
      const { error, export: _export } = await specHelper.runAction(
        "export:view",
        connection
      );

      expect(error).toBeUndefined();
      expect(_export.id).toBe(id);
      expect(_export.createdAt).toBeGreaterThan(0);
      expect(_export.destination.id).toBe(destination.id);
    });

    test("a reader can ask for exports about a profile", async () => {
      connection.params = { csrfToken, profileId: profile.id };
      const { error, exports, total } = await specHelper.runAction(
        "exports:list",
        connection
      );

      expect(error).toBeUndefined();
      expect(exports.length).toBe(3);
      expect(exports[0].profileId).toBe(profile.id);
      expect(exports[1].profileId).toBe(profile.id);
      expect(total).toBe(3);
    });

    test("a reader can ask for exports about a destination", async () => {
      connection.params = { csrfToken, destinationId: destination.id };
      const { error, exports, total } = await specHelper.runAction(
        "exports:list",
        connection
      );

      expect(error).toBeUndefined();
      expect(exports.length).toBe(2);
      expect(exports[0].destination.id).toBe(destination.id);
      expect(exports[1].destination.id).toBe(destination.id);
      expect(total).toBe(2);
    });

    test("a reader can get export totals", async () => {
      connection.params = { csrfToken };
      const { error, totals } = await specHelper.runAction(
        "exports:totals",
        connection
      );
      expect(error).toBeUndefined();
      expect(totals).toEqual({
        all: 4,
        created: 1,
        started: 1,
        completed: 1,
        error: 1,
      });
    });

    test("a reader can get export totals for a profile", async () => {
      connection.params = { csrfToken, profileId: profile.id };
      const { error, totals } = await specHelper.runAction(
        "exports:totals",
        connection
      );
      expect(error).toBeUndefined();
      expect(totals).toEqual({
        all: 3,
        created: 1,
        started: 0,
        completed: 1,
        error: 1,
      });
    });

    test("a reader can get export totals for a destination", async () => {
      connection.params = { csrfToken, destinationId: destination.id };
      const { error, totals } = await specHelper.runAction(
        "exports:totals",
        connection
      );
      expect(error).toBeUndefined();
      expect(totals).toEqual({
        all: 2,
        created: 1,
        started: 1,
        completed: 0,
        error: 0,
      });
    });
  });
});
