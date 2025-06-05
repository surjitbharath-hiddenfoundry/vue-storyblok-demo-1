import { createApp } from 'vue'
import './style.css'
import { StoryblokVue, apiPlugin } from '@storyblok/vue';
import { createWebHistory, createRouter } from 'vue-router';

import App from './App.vue';
import article from './components/Article.vue';
import PageView from './components/PageView.vue';
import Blog from './components/Blog.vue';

const routes = [
	{ path: '/', component: Blog },
	{ path: '/:slug', component: PageView },
];
	
const router = createRouter({
	history: createWebHistory(),
	routes,
});

const app = createApp(App);

app.use(StoryblokVue, {
  accessToken: import.meta.env.VITE_STORYBLOK_DELIVERY_API_TOKEN,
  use: [apiPlugin],
  components: {
    article: article,
  },
});
app.component("article", article);
app.use(router)
app.mount('#app')
