<template>
  <section class="section">

    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
            type="text" v-model="post.title" placeholder="New Title">
    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text" v-model="post.content" placeholder="Content">
    <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" 
            @click="addPost">Add post</button>
    <div class="columns is-mobile">
      <card 
        v-for="(post, i) in $store.state.posts"
        :key="i"
        :title="post.title"
        :content="post.content" 
        icon="post"
        >
<div class="inline-flex">
  <NuxtLink 
    to="/about"
    class="bg-red-300 hover:bg-red-400 text-red-800 font-bold py-2 px-4 rounded-r">
    Edit
  </NuxtLink>
  
  <button 
    @click="removePost"
    class="bg-yellow-300 hover:bg-yellow-400 text-yellow-800 font-bold py-2 px-4 rounded-l">
    Remove
  </button>
  
</div>
      </card>
    </div>
  </section>
</template>

<script lang="ts">
import Card from '~/components/Card.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Card,
  },
  data() {
    return {
      post: {
        id: 0, 
        title: '',
        content: '',
      }
    }
  },
  methods: {
    addPost() {   
      let d = new Date();
      let id = Math.round(d.getTime());
      this.post.id = id;
      this.$store.commit('ADD_POST', this.post);
      this.post = {
        id: 0,
        title: '',
        content: '',
      };
      console.log('hello');
    },
    removePost(){
      this.$store.commit('REMOVE_POST', this.post);
    }
  },
})
</script>
