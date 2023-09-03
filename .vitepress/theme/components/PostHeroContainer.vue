<template>
    <v-container class="primary-container" fluid>
        <v-card rounded="xl" class="head-cart">
            <v-img cover height="500" rounded="xl" :src="post.cover">
                <v-row no-gutters class="fill-height align-middle">
                    <v-col align-self="center">
                        <v-card-title class="text-h1 font-weight-bold text-center" style="line-height:1.25">
                            {{ post.title }}
                        </v-card-title>
                        <v-card-text class="text-h5 font-weight-regular text-center">
                            {{ post.description }}
                        </v-card-text>
                    </v-col>
                </v-row>
            </v-img>
        </v-card>
    </v-container>
</template>
<script setup lang="ts">
import { Post } from '../types/common'
const props = defineProps<{ post: Post }>()
</script>