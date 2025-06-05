<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <header>
    <h1>Storyblok Blog</h1>
  </header>
      <Suspense>
        <template #default>
          <RouterView />
        </template>
        <template #fallback>
          <div>Loading...</div>
        </template>
      </Suspense>

</template>

<style scoped>
/* header strip with a “box” */
header {
  padding: 1.5rem 0;
  margin: 0 auto 2rem;
  max-width: 800px;           /* keeps the box from stretching too wide */
  text-align: center;

  background: #fafafa25;        /* very light grey fill (optional) */
}

/* title text */
h1 {
  margin: 0;
  font-size: 2rem;
  font-weight: 700;
  font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
}
</style>