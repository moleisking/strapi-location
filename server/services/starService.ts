import { Strapi } from '@strapi/strapi';

let v : number = 0
export default ({ strapi }: { strapi: Strapi }) => ({    
    setStarValue(v:number) {
        this.v = v;
    },
    getStarValue() {
        return v;
    },
});