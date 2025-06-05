<script setup>
import { useStoryblok } from "@storyblok/vue";
import { useRoute } from "vue-router";

console.log("Attempting to use slug to load story");

const route = useRoute()
const slug  = route.params.slug
const VERSION  = import.meta.env.VITE_STORYBLOK_VERSION


const story = await useStoryblok(`${slug ? slug : ""}`, { version: VERSION });

if (story.value) {
  console.log('Loaded slug:', slug)
  console.log('Story:', story.value)
}
</script>

<template>
  <!-- If the story hasn’t arrived yet -->
  <p v-if="!story">Loading…</p>

  <!-- Once it’s loaded, render it -->
  <StoryblokComponent v-else :blok="story.content" />
</template>
