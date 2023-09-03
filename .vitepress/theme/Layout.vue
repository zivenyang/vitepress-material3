<script setup lang="ts">
import { useData } from 'vitepress'
import { onMounted, computed } from 'vue';
import Home from './views/Home.vue';
import Post from './views/Post.vue';
import SideBar from './components/SideBar.vue';
import Footer from './components/Footer.vue';
import { data as posts } from './posts.data'


// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
const currentPost = computed(() => posts.find(p => p.title === frontmatter.value.title)!)

onMounted(() => {
  // 加载字体
  import('webfontloader').then((loader) =>
    loader.load({
      google: {
        families: ['Roboto'],
      },
    })
  )
});

</script>

<template>
  <v-layout>
    <SideBar></SideBar>
    <v-main>
      <v-lazy :min-height="0" :options="{ 'threshold': 0.5 }" transition="fade-transition">
        <v-container fluid class="pa-0">
          <div v-if="frontmatter.home">
            <Home></Home>
          </div>
          <div v-else>
            <Post :post="currentPost"></Post>
          </div>
        </v-container>
      </v-lazy>
      <Footer></Footer>
    </v-main>

  </v-layout>
</template>
<style scoped lang="scss">
</style>
