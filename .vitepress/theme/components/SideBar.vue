<template>
    <v-navigation-drawer expand-on-hover :rail="navState.rail" @update:rail="oneUpdateRail">
        <v-list :lines="navState.lines">
            <v-list-item prepend-avatar="https://avatars.githubusercontent.com/u/26645341?v=4" :title="site.title"
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
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { useData } from 'vitepress';

const { site, frontmatter } = useData();

const navState = reactive({
    lines: "one",
    rail: true
});
const oneUpdateRail = (e: boolean) => {
    if (!navState.rail) return;
    !e ? navState.lines = "three" : navState.lines = "one";
};
</script>