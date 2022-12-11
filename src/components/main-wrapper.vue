<template>
  <div class="main-wrapper">
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
import '../styles/other/main-wrapper.css'
import {mapGetters} from "vuex";

export default {
  name: 'mainWrapper',
  components: {
  },
  computed: {
    ...mapGetters([
      'CART'
    ])
  }
}
</script>

<style scoped>

</style>
