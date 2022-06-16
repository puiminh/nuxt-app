<template>
  <section class="section">
     {{ $route.params.id }}
    <div class="columns is-mobile">
      <card 
        :title="post.title"
        :content="post.content" 
        icon="post"
        />
    </div>
    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" 
            type="text" v-model="newpost.title" :placeholder="post.title">
    <input class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            type="text" v-model="newpost.content" :placeholder="post.content">
    <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded" 
            @click="editPost">Edit post</button>
  {{$store.state.posts}}
  </section>
</template>

<script>
import Card from '~/components/Card.vue'
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    Card,
  },
  data() {
    return {
      newpost:{
        id: this.$route.params.id,
        title: '',
        content: '',
      }
    }
  },
  computed: {
    post(){
      return this.$store.state.posts.find((p) => p.id == this.$route.params.id)
    }
  },
  methods: {
    editPost() {     
      
      this.$store.commit('EDIT_POST', this.newpost, this.newpost.id);
      console.log(this.post);
      console.log(this.newpost);
    },
  },
})
</script>
