<template>
    <v-card rounded="xl" v-ripple class="post-card" :href="site.base + post.url">
        <v-img cover height="200" class="rounded-xl" :src="post.cover"></v-img>
        <v-card-title>{{ post.title }}</v-card-title>
        <v-card-text>
            {{ post.description }}
        </v-card-text>
    </v-card>
</template>
<script setup lang="ts">
import { Post } from '../types/common'
import { useData } from 'vitepress';

const { site, frontmatter } = useData();
const props = defineProps<{ post: Post }>()
</script>

<style scoped lang="scss">
.post-card:hover {
    background-color: #c2e7ff;
    cursor: pointer;
}
</style>