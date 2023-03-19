import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({    
    getStarValue(ctx) {
        ctx.body = strapi
            .plugin('location')
            .service('starService')
            .getStarValue();
    },
    setStarValue(ctx) {
        ctx.body = strapi
            .plugin('location')
            .service('starService')
            .setStarValue();
    },
});
