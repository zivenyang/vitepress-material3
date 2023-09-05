<template>
    <v-card rounded="xl" v-ripple class="post-card" :href="site.base + post.url">
        <v-img cover height="200" class="rounded-xl" :src="post.cover"></v-img>
        <v-card-title>{{ post.title }}</v-card-title>
        <v-card-text>
            {{ post.description }}
        </v-card-text>
        <v-card-actions>
            <v-list-item>
                <template v-slot:prepend>
                    <v-chip prepend-icon="mdi-calendar-month" variant="text">{{ formatTime(post.create) }}</v-chip>
                    </template>
                <template v-slot:append>
                    <v-chip v-for="(tag, index) in post.tags" :key="index" color="primary" class="ma-1" density="comfortable">{{ tag }}</v-chip>
                </template>
            </v-list-item>
        </v-card-actions>
    </v-card>
</template>
<script setup lang="ts">
import { Post } from '../types/common'
import { useData } from 'vitepress';
import { formatTime } from '../utils'

const { site, frontmatter } = useData();
const props = defineProps<{ post: Post }>()
</script>

<style scoped lang="scss">
.post-card:hover {
    background-color: #c2e7ff;
    cursor: pointer;
}
</style>