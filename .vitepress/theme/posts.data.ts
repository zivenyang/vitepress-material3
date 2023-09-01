import { createContentLoader } from 'vitepress'
import { getPostFromContentData } from "./utils"
import { Post } from "./types/common";

const loader = createContentLoader('posts/**/index.md')
export default {
  ...loader,
  async load() {
    const data = await loader.load()
    return data.map(getPostFromContentData).sort((a, b) => b.create - a.create);
  }
}

declare const data: Post[]
export { data } // 已经按时间顺序排序