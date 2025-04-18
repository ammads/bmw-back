import type { Schema, Struct } from '@strapi/strapi';

export interface SocialsSocials extends Struct.ComponentSchema {
  collectionName: 'components_socials_socials';
  info: {
    description: '';
    displayName: 'Socials';
    icon: 'write';
  };
  attributes: {
    instagram: Schema.Attribute.String;
    tiktok: Schema.Attribute.String;
    youtube: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'socials.socials': SocialsSocials;
    }
  }
}
