<template lang="pug">
  #grid
    button.btnAddCustomer( v-on:click="changeElement({})")
      b.btnLabel Adicionar Cliente
    div(v-if="data && data.length > 0")
      table
        tr
          th.cpf CPF
          th.name Nome
          th.email E-mail
          th.telephone Telefone
          th.actions Ações
        tr(v-for="element of data")
          td.cpf {{element.cpf}}
          td.name  {{element.name}}
          td.email {{element.email}}
          td.telephone {{element.telephone}}
          td
            button.actions( v-on:click="changeElement(element)")
              b.btnLabel Editar

    div(v-if="!data || data.length === 0")
      table
        tr
          th.cpf CPF
          th.name Nome
          th.email E-mail
          th.telephone Telefone
          th.actions Ações

      h2.empty-data Não há dados a serem exibidos!
</template>

<script>
  export default {
    name: "Grid",
    props: { data: []},
    created() {
    },
    data(){
      return {
      }
    },
    methods: {
      changeElement(element) {
        this.$root.$emit('showModal', element);
      }
    }
  }
</script>

<style scoped lang="sass">
  #grid
    .btnAddCustomer
      float: right
      color: white
      background-color: #0f1c5a
      margin: 1rem 0 1rem 1rem
      font-size: 18px
      cursor: pointer
      &:hover
        background-color: blue

    .btnLabel
      padding: 4px

    table
      width: 100%
      
    table tr:nth-child(even)
    background-color: white

    table tr:nth-child(odd)
      background-color: #959595

    table th
      background-color: #0f1c5a
      font-size: 18px
      color: white
    table td
      font-size: 14px
      .actions
        cursor: pointer
        &:hover
          background-color: blue
          color: white

</style>