<template>
    <v-container class="primary-container" fluid>
        <v-card rounded="xl" class="head-cart">
            <v-img cover height="500" rounded="xl"
                src="https://lh3.googleusercontent.com/2OrUzHCRSI-V46Z1qJBh90usG6OkKwCbXN80FbrjkWoQz4VfoJjNAoQHLHPQRZWH7dI_m5I1gi48h6xMJ5pK6kkdXmUnXPe4VqwvEdo4QeWRjLV9Oew=w2400-rj">
                <v-row no-gutters class="fill-height align-middle">
                    <v-col align-self="center">
                        <v-card-title class="text-h1 font-weight-bold text-center" style="line-height:1.25">{{ site.title
                        }}</v-card-title>
                        <v-card-text class="text-h5 font-weight-regular text-center">
                            {{ site.description }}
                        </v-card-text>
                    </v-col>
                </v-row>
            </v-img>
        </v-card>
    </v-container>
</template>
<script setup lang="ts">
import { useData } from 'vitepress';
const { site, frontmatter } = useData();
</script>
<style scoped lang="scss">
</style>