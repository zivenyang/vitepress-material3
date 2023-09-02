import { ContentData } from 'vitepress'
import { Post } from "./types/common"
import { BlogThemeConfig, Tag } from './types/config'

export function formatTime(
  timestamp: number,
  withTime: boolean = false
): string {
  const date = new Date(timestamp)
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  const hour = date.getHours().toString().padStart(2, '0')
  const minute = date.getMinutes().toString().padStart(2, '0')
  const str = `${year}-${month}-${day}`
  return withTime ? str + ` ${hour}:${minute}` : str
}

export function getPostFromContentData(post: ContentData): Post {
  return {
    frontmatter: post.frontmatter,
    id: /(?<=\/posts\/).*(?=\/)/.exec(post.url)![0],
    title: post.frontmatter.title ?? 'Untitled Post',
    cover: post.frontmatter.cover,
    description: post.frontmatter.description,
    create: post.frontmatter.create ? new Date(post.frontmatter.create).getTime() : Date.now(),
    category: post.frontmatter.category,
    tags: post.frontmatter.tags ?? [],
    url: post.url.replace('index.html', ''),
    comment: !!(post.frontmatter.comment ?? true),
  }
}

const primaryColors = [
  'red', 'pink', 'purple',
  'deep-purple', 'indigo', 'blue',
  'light-blue', 'cyan', 'teal',
  'green', 'light-green', 'lime',
  'yellow', 'amber', 'orange',
  'deep-orange', 'brown', 'blue-grey', 'grey'
]

export function getTagColor(tagId: string): string {
  let n = 0
  for (let i = 0; i < tagId.length; i++)
    n += tagId.charCodeAt(i)
  return `${primaryColors[n % primaryColors.length]}-darken-${n % 4 + 1}`
}

export function getTag(tagId: string, themeConfig: BlogThemeConfig): Tag {
  const item = themeConfig.tags?.[tagId]
  return [item?.[0] ?? tagId, item?.[1] ?? getTagColor(tagId)]
}
