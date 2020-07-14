<template lang="pug">
  #search
    b.title Filtrar por CPF:
    input.filter(
      type="search"
      placeholder="Digite o CPF"
      @input="onChangeCPF($event.target.value)")
    b.title Filtrar por Nome:
    input.filter(
      type="search"
      placeholder="Digite o Nome"
      @input="onChangeName($event.target.value)")
</template>

<script>
  export default {
    name: "Search",
    methods: {
      onChangeCPF(value) {
          this.$root.$emit('filterCPF', value);
      },
      onChangeName(value) {
          this.$root.$emit('filterName', value);
      }
    },
    data() {
      return {
        filter: ''
      }
    }
    }
</script>

<style scoped lang="sass">
  #search
    align-content: center
    padding: 0.01em 16px
    margin-top: 16px
    margin-bottom: 16px
    background-color: #b8b8b8
    height: 3rem
    .title
      margin-top: 1rem
      padding-right: 0.5rem
      float: left

    .filter
      margin-top: 0.8rem
      padding-left: 0.5rem
      margin-right: 0.5rem
      float: left
</style>