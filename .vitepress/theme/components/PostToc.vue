<template>
    <div class="toc">
        <div class="text-subtitle-2 pl-4 pt-2 pd-2">
            One this page
        </div>
        <div class="text-h6 pl-4 pt-2 pd-2">
            {{ title }}
        </div>
        <v-list density="compact">
            <v-list-item v-for="(h, i) in data" :key="i" rounded="xl" :title="h.title" :href="'#' + h.slug">
            </v-list-item>
        </v-list>
    </div>
</template>
  
<script setup lang="ts">
import { type Header } from 'vitepress'
const { data = [], active = 0 } = defineProps<{
    data: Header[]
    active: number
    title: string
}>()
</script>
  
<style scoped lang="scss">
.vp-doc a {
    text-decoration: none;
    color: #444746;
}

.toc {
    .toc-title {
        color: black;
    }

    position: sticky;
    top: 100px;
}
</style>