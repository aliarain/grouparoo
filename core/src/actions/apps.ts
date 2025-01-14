import { api } from "actionhero";
import { AuthenticatedAction } from "../classes/actions/authenticatedAction";
import { App } from "../models/App";
import { GrouparooPlugin, PluginApp } from "../classes/plugin";
import { OptionHelper } from "../modules/optionHelper";

export class AppsList extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "apps:list";
    this.description = "list all the apps";
    this.permission = { topic: "app", mode: "read" };
    this.outputExample = {};
    this.inputs = {
      limit: { required: true, default: 100, formatter: parseInt },
      offset: { required: true, default: 0, formatter: parseInt },
      state: { required: false },
      order: {
        required: false,
        default: [
          ["name", "desc"],
          ["createdAt", "desc"],
        ],
      },
    };
  }

  async runWithinTransaction({ params }) {
    const where = {};

    if (params.state) where["state"] = params.state;
    const total = await App.scope(null).count({ where });

    const apps = await App.scope(null).findAll({
      where,
      limit: params.limit,
      offset: params.offset,
      order: params.order,
    });

    return {
      total,
      apps: await Promise.all(apps.map(async (app) => app.apiData())),
    };
  }
}

export class AppOptions extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "app:options";
    this.description = "enumerate the options for creating a new app";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "read" };
    this.inputs = {};
  }

  async runWithinTransaction() {
    const types: Array<{
      name: string;
      maxInstances: number;
      minInstances: number;
      addible: boolean;
      options: PluginApp["options"];
      plugin: { name: string; icon: string };
      provides: { source: boolean; destination: boolean };
    }> = [];

    for (const i in api.plugins.plugins) {
      const plugin = api.plugins.plugins[i];
      if (plugin.apps) {
        for (const j in plugin.apps) {
          const app = plugin.apps[j];
          const source = api.plugins.plugins.find((p) =>
            p?.connections?.find(
              (c) => c.app === app.name && c.direction === "import"
            )
          )
            ? true
            : false;

          const destination = api.plugins.plugins.find((p) =>
            p?.connections?.find(
              (c) => c.app === app.name && c.direction === "export"
            )
          )
            ? true
            : false;

          const appsOfThisType = await App.count({ where: { type: app.name } });
          let addible = true;
          if (app.maxInstances && app.maxInstances === appsOfThisType) {
            addible = false;
          }

          types.push({
            name: app.name,
            maxInstances: app.maxInstances,
            minInstances: app.minInstances,
            addible,
            options: app.options,
            plugin: { name: plugin.name, icon: plugin.icon },
            provides: { source, destination },
          });
        }
      }
    }

    const environmentVariableOptions = OptionHelper.getEnvironmentVariableOptionsForTopic(
      "app"
    );

    return { environmentVariableOptions, types };
  }
}

export class AppOptionOptions extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "app:optionOptions";
    this.description = "return option choices from this app";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "read" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const app = await App.findById(params.id);
    return { options: await app.appOptions() };
  }
}

export class AppCreate extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "app:create";
    this.description = "create an app";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "write" };
    this.inputs = {
      name: { required: false },
      type: { required: true },
      state: { required: false },
      options: { required: false },
    };
  }

  async runWithinTransaction({ params }) {
    const app = await App.create({
      name: params.name,
      type: params.type,
    });

    if (params.options) await app.setOptions(params.options);
    if (params.state) await app.update({ state: params.state });

    return { app: await app.apiData() };
  }
}

export class AppEdit extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "app:edit";
    this.description = "edit an app";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "write" };
    this.inputs = {
      id: { required: true },
      name: { required: false },
      type: { required: false },
      state: { required: false },
      options: { required: false },
    };
  }

  async runWithinTransaction({ params }) {
    const app = await App.findById(params.id);
    if (params.options) {
      await app.setOptions(params.options);
    }
    await app.update(params);

    return { app: await app.apiData() };
  }
}

export class AppTest extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "app:test";
    this.description = "test the options passed to an app";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "write" };
    this.inputs = {
      id: { required: true },
      options: { required: false },
    };
  }

  async runWithinTransaction({ params }) {
    const app = await App.findById(params.id);
    const test = await app.test(params.options);
    if (test.error) test.error = String(test.error);

    return {
      test,
      app: await app.apiData(),
    };
  }
}

export class AppView extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "app:view";
    this.description = "view an app";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "read" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const app = await App.findById(params.id);
    return { app: await app.apiData() };
  }
}

export class AppDestroy extends AuthenticatedAction {
  constructor() {
    super();
    this.name = "app:destroy";
    this.description = "destroy an app";
    this.outputExample = {};
    this.permission = { topic: "app", mode: "write" };
    this.inputs = {
      id: { required: true },
    };
  }

  async runWithinTransaction({ params }) {
    const app = await App.findById(params.id);
    await app.destroy();

    return { success: true };
  }
}
