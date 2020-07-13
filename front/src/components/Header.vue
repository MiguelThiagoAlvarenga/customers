<template lang="pug">
  #nav
    div
      router-link.text-left.text-link(to="/")
        | Página Inicial
      router-link.text-left.text-center.text-link(to="/customers")
        | Cadastro de Clientes
      router-link.text-right.text-link(to="/about")
        | Sobre
</template>

<script>
  export default {
    name: "Header"
  }
</script>

<style scoped lang="sass">

  #nav
    padding: 0 1rem
    color: #f8f8fa
    font-weight: bold
    display: flex
    align-items: center
    background: #0f1c5a
    width: 98.25%
    top: 0
    left: 0
    right: 0
    position: relative
    height: 50px
    font-size: 1.5rem

    a
      font-weight: bold
      color: #f8f8fa
      text-decoration: none

      &.router-link-exact-active
        color: #42b983
        text-decoration: underline

    .text-right
      float: right
      margin: 0 1rem
      margin-left: 70.14vw

    .text-left
      float: left

    .text-center
      margin: 0 1rem

    .text-link
      &:hover
        color: #48f343

</style>