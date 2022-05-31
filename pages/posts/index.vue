<template>
  <section class="section">
    <button class="bg-blue-100" @click="callApi">Test</button>
    <div class="columns is-mobile">
      <card title="Free" icon="github">
        Open source on <a href="https://github.com/buefy/buefy"> GitHub </a>
      </card>

      <card title="Responsive" icon="cellphone-link">
        <b class="has-text-grey"> Every </b> component is responsive
      </card>

      <card title="Modern" icon="alert-decagram">
        Built with <a href="https://vuejs.org/"> Vue.js </a> and
        <a href="http://bulma.io/"> Bulma </a>
      </card>

      <card title="Lightweight" icon="arrange-bring-to-front">
        {{ $t('lang') }}
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
    return {}
  },
  methods: {
    async callApi() {      
      console.log(this.$api.user.createPost('huy','huy'))
    },
  },
})
</script>
