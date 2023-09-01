export interface Post {
    frontmatter: Record<string, any>
    id?: string   // 若为 undefined，则不在一个 Post 中
    title: string
    cover?: string
    description?: string
    create: number
    category?: string
    tags: string[]
    url: string
    comment: boolean
  }