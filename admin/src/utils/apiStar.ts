import pluginId from '../pluginId';
import { request } from "@strapi/helper-plugin";
const getTrad = (id: string) => `${pluginId}.${id}`;


const getStarValue = async () => {
  try {
    const data = await request(`/${pluginId}/star`, { method: "GET" });
    return data;
  } catch (error) {
    return null;
  }
};

const setStarValue = async (value: number) => {
  try {
    const data = await request(`/${pluginId}/star`, { method: "POST", body: { 'score': value } });
    return null;
  } catch (error) {
    return null;
  }
};