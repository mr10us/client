import { $authHost, $host } from ".";

export const createType = async (type) => {
  const { data } = await $authHost.post("api/type/createType", type);

  return data;
};
export const fetchTypes = async () => {
  const { data } = await $host.get("api/type");

  return data;
};
export const dropType = async (name) => {
  const { data } = await $authHost.post("api/type/dropType", name);
};
export const createItem = async (item) => {
  const { data } = await $authHost.post("api/item", item);

  return data;
};

export const fetchItems = async (typeId, page, limit = 6, sortBy, sortDir) => {
  const { data } = await $host.get("api/item", {
    params: { typeId, page, limit, sortBy, sortDir },
  });

  return data;
};
export const fetchOneItem = async (id) => {
  const { data } = await $host.get("api/item/" + id);

  return data;
};
export const dropItem = async () => {};
