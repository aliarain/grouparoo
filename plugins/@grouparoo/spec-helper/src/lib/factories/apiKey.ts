import { loadPath } from "../loadPath";
import faker from "faker";

const data = async (props = {}) => {
  const defaultProps = {
    name: faker.name.jobDescriptor(),

    createdAt: new Date(),
    updatedAt: new Date(),
  };

  return Object.assign({}, defaultProps, props);
};

export default async (props = {}) => {
  const { ApiKey } = await import(`@grouparoo/core/${loadPath}`);
  return ApiKey.create(await data(props));
};
