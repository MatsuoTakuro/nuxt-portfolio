import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      source: 'blog/*.md',
      type: 'page',
      schema: z.object({
        id: z.string(),
        title: z.string(),
        date: z.string(),
        image: z.string(),
      })
    })
  }
})
