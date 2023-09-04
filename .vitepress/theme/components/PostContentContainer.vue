<template>
    <v-container class="content-container vp-doc">
        <v-row>
            <v-col>
                <PostToc :data="data.page.value.headers" :active="active" :title="data.page.value.title"></PostToc>
            </v-col>
            <v-col class="content">
                <Content />
            </v-col>
        </v-row>
    </v-container>
</template>
<script setup lang="ts">
import { useData } from 'vitepress'
import PostToc from '../components/PostToc.vue';
import { ref } from 'vue'
const data = useData();
const active = ref(0);
</script>
<style scoped lang="scss">
.content {
    min-width: 900px;
    max-width: fit-content;
}
</style>