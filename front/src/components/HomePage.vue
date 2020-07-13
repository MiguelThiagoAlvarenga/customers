<template lang="pug">
  #home-page
    h1 {{msg}}
    img(alt="Vue logo" src="../assets/logo.png")
</template>

<script>
  export default {
    name: "HomePage",
    props: { msg: String }
  }
</script>

<style scoped lang="sass">
  #home-page
    margin: 31.3vh 0
</style>