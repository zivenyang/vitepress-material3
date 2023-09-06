<template>
    <v-container class="content-container">
        <div class="section">
            <div class="section-head">
                <div class="text-h2 font-weight-regular" style="line-height:1.25">Posts</div>
            </div>
            <masonry-wall :items="posts" :ssr-columns="1" :column-width="300" :gap="16">
                <template #default="{ item, index }">
                    <PostCard :post="item"></PostCard>
                </template>
            </masonry-wall>
        </div>
    </v-container>
</template>

<script setup lang="ts">
import { data as posts } from '../posts.data';
import PostCard from './PostCard.vue';
</script>

<style lang="scss" scoped>
.section-head {
    margin: 24px;
}
</style>