<template>
    <v-container class="content-container">
        <div class="section">
            <div class="section-head">
                <div class="text-h2 font-weight-regular" style="line-height:1.25">Posts</div>
            </div>
            <v-row v-masonry>
                <v-col v-for="post in posts" :key="post.id" cols="12" sm="4">
                    <PostCard :post="post"></PostCard>
                </v-col>
            </v-row>
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