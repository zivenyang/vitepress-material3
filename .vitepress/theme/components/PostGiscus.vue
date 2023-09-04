<template>
    <v-card :key="page.relativePath" class="giscus-card pa-4">
        <Giscus v-bind="theme.giscus" theme="light" />
    </v-card>
</template>

<script setup lang="ts">
import { useData } from 'vitepress'
import { BlogThemeConfig } from '../types/config'
import Giscus from '@giscus/vue'
const { page, theme } = useData<BlogThemeConfig>()

</script>