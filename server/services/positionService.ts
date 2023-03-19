import { Strapi } from '@strapi/strapi';

export default ({ strapi }: { strapi: Strapi }) => ({ 
  getPosition() {
    if (navigator.geolocation) {
      return navigator.geolocation.getCurrentPosition(
        (position) => {
          {
            return position;
          }
        }, (error) => {
          return error;
        }
      );
    } else {
      return "Geolocation is not supported by this browser.";
    }
  },
});


