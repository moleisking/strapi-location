import pluginId from '../pluginId';
import { request } from "@strapi/helper-plugin";

const getPosition = async () => {
    try {
      const data = await request(`/${pluginId}/position`, { method: "GET" });
      return data;
    } catch (error) {
      return null;
    }
  };