<script setup>
import { ref, onMounted } from 'vue'
import { useStoryblokApi } from '@storyblok/vue'

const articles = ref(null)
const api = useStoryblokApi()
const VERSION  = import.meta.env.VITE_STORYBLOK_VERSION

onMounted(async () => {
  const { data } = await api.get('cdn/stories', { version: VERSION })
  console.log(VERSION);
  articles.value = data.stories
})

const teaser = (src = '', max = 200) =>
  src.length > max ? src.slice(0, max) + '…' : src
</script>

<template>
  <p v-if="!articles">Loading…</p>

  <ul v-else class="index-list">
    <li v-for="s in articles" :key="s.id">
      <RouterLink :to="'/' + s.full_slug">
        <h2>{{ s.content.title }}</h2>
        <p class="teaser">{{ teaser(s.content.content) }}</p>
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>
.index-list   { max-width: 700px; margin: 2rem auto; padding: 0; list-style: none; }
.index-list li{ margin-bottom: 1.5rem; border-bottom: 1px solid #eee; padding-bottom: 1rem; }
h2            { margin: 0 0 .5rem; font-size: 1.25rem; color: #333; }
.teaser       { margin: 0; color: #555; font-size: .95rem; }
</style>