<script setup>
import { useMarkdown } from "../composables/useMarkdown.js";
const { blok } = defineProps({ blok: Object });

const html = useMarkdown(blok.content);
</script>

<template>
  <article>
    <h1>{{ blok.title }}</h1>
    <div v-html="html"></div>
  </article>
</template>

<style scoped>
article {
  max-width: 600px;
  margin: 3rem auto;
  font-family: sans-serif;
}
h1 {
  margin: 0 0 3rem;   /* bottom space ↑ (was 1rem) */
  font-size: 2.4rem;      /* larger title (was 1.5rem) */
  line-height: 1.2;
  text-align: left;
}
</style>
