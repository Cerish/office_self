<template>
  <div class="home">
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
// import axios from 'axios'
export default {
  name: 'main',
  directives: {
      focus: {
          inserted(el) {
              console.log(el)
              console.log(el.children)
              el.children[0].focus()
          }
      }
  },
  components: {
  },
  data () {
    return {
    }
  },
  created () {
  }
}
</script>
<style>
.home {
  height: 100%;
}
</style>

