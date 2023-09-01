import { GiscusProps } from "@giscus/vue";

export interface BlogThemeConfig {
  author: string
  bio: string
  avatar: string
  avatarBg: string
  defaultPostCover: string
  navLinks?: NavLink[]
  socialLinks?: SocialLink[]
  giscus: GiscusProps
  tags?: Record<string, Tag>
}

export interface NavLink {
  href: string
  title: string
  icon: string
}

export interface SocialLink {
  href: string
  icon: string
  desc: string
}

export type Tag = [name: string, color?: string]