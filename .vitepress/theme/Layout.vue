<script setup lang="ts">
import { useData } from 'vitepress'
import { ref, reactive } from 'vue';
import { data as posts } from './posts.data'

// https://vitepress.dev/reference/runtime-api#usedata
const { site, frontmatter } = useData()
const navState = reactive({
  lines: "one",
  rail: true
});
const oneUpdateRail = (e: boolean) => {
  if (!navState.rail) return;
  !e ? navState.lines = "three" : navState.lines = "one";
};
</script>

<template>
  <v-layout>
    <v-navigation-drawer expand-on-hover :rail="navState.rail" @update:rail="oneUpdateRail">
      <v-list :lines="navState.lines">
        <v-list-item prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg" :title="site.title"
          :subtitle="site.description">
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item prepend-icon="mdi-home" title="Home" value="myfiles" rounded="xl" href="/"></v-list-item>
        <v-list-item prepend-icon="mdi-timeline" title="TimeLine" value="shared" rounded="xl"></v-list-item>
        <v-list-item prepend-icon="mdi-tag" title="Tags" value="starred" rounded="xl"></v-list-item>
      </v-list>
      <template v-slot:append>
        <v-list density="compact" nav>
          <v-list-item prepend-icon="mdi-brightness-6" title="Dark Modle" value="myfiles" rounded="xl"></v-list-item>
        </v-list>
      </template>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid class="pa-0">
        <div v-if="frontmatter.home">
          <v-container class="primary-container" fluid>
            <v-card rounded="xl" class="head-cart">
              <v-img cover height="500" rounded="xl"
                src="https://lh3.googleusercontent.com/BvKj8kuRZqLpqPuuZxOl4IeHv5jaD5kT1jhn3P8EMBcmzyoHRAFXsCxNH6ZeHhQG4V1F_AegXIw2cJIBmETy7eHM27IdLQe7FqEgz6NLaXflHiHM4xyh=w2400-rj">
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

          <v-container class="content-container">
            <div class="section">
              <div class="text-h2 font-weight-regular" style="line-height:1.25">Posts</div>
              <v-row>
                <v-col v-for="post in posts" :key="post.id" cols="12" sm="4">
                  <v-card rounded="xl" v-ripple class="post-card" :href="post.url">
                    <v-img cover height="200" class="rounded-xl" :src="post.cover"></v-img>
                    <v-card-title>{{ post.title }}</v-card-title>
                    <v-card-text>
                      {{ post.description }}
                    </v-card-text>
                  </v-card>
                </v-col>
              </v-row>
            </div>
          </v-container>
        </div>
        <div v-else>
          <v-container>
            <v-card>
              <Content />
            </v-card>
          </v-container>
        </div>
      </v-container>
    </v-main>
  </v-layout>
</template>
<style scoped lang="scss">
.post-card:hover {
  background-color: #c2e7ff;
  cursor: pointer;
}
</style>
