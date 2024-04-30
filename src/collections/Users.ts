import { SampleComponent } from '@/app/components/SampleComponent'
import type { CollectionConfig } from 'payload/types'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: 'header',
      type: 'ui',
      admin: {
        components: {
          Field: SampleComponent,
        },
      },
    },
    // { name: 'editor', type: 'richText', label: 'Rich Text' }, // for rich text editor
    // {
    //   name: 'enableCoolStuff', // required
    //   type: 'checkbox', // required
    //   label: 'Click me to see fanciness',
    //   defaultValue: false,
    // },
  ],
}
