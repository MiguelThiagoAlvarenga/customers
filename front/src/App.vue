<template lang="pug">
  #app
    Header
    transition(name="page")
      router-view
    Footer
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import Modal from "./components/Modal";

export default {
  components: {Footer, Header, Modal},
  data() {
    return {
      customer: {}
    }
  }
}
</script>

<style lang="sass">
  #app
    font-family: Avenir, Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50
    .page-enter, .page-leave-active
      opacity: 0
    .page-enter-active, .page-leave-active
      transition: opacity .5s
</style>