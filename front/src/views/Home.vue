<template lang="pug">
  #home
    HomePage(msg="Bem vindos ao modelo CAD de clientes")
</template>

<script>
import HomePage from "../components/HomePage";

export default {
  name: 'Home',
  components: {HomePage}
}
</script>
