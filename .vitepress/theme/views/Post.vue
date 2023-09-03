<template>
    <PostHeroContainer :post="post"></PostHeroContainer>
    <PostContentContainer></PostContentContainer>
</template>
<script setup lang="ts">
import PostHeroContainer from '../components/PostHeroContainer.vue';
import PostContentContainer from '../components/PostContentContainer.vue';
import { Post } from '../types/common'
const props = defineProps<{ post: Post }>()
</script>