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
          td.actions
            button( v-on:click="changeElement(element)")
              b.btnLabel Editar
            button.delete( v-on:click="deleteElement(element)")
              b.btnLabel Excluir

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
    props: {
      data: {
        type: Array,
				required: true
			}
		},
    created() {
    },
    data(){
      return {
      }
    },
    methods: {
      changeElement(element) {
        this.$emit('onShowModal', element);
      },
      deleteElement(element) {
        if(confirm('Depois de excluído não terá mais os dados do Cliente. Deseja prosseguir?')) {
          this.$emit('onDelete', element);
        }
      }
    }
  }
</script>

<style scoped lang="sass">
  #grid
    .delete
      color: width
      background-color: red
    .btnLabel
      padding: 4px
    button
      float: center
      font-size: 15px
      font-weight: bold
      height: 2rem
      width: 7rem
      margin: 0.5rem
      cursor: pointer
      &:hover
        background-color: blue
        color: white
    
    .btnAddCustomer
      width: 16rem
      height: 3rem
      float: right
      color: white
      background-color: #0f1c5a
      margin: 1rem 0 1rem 1rem
      font-size: 18px
      cursor: pointer
      &:hover
        background-color: blue

    table
      width: 100%
      
    table tr:nth-child(even)
      background-color: white

    table tr:nth-child(odd)
      background-color: #959595

    table th
      text-aligne: center
      background-color: #0f1c5a
      font-size: 18px
      color: white
      height: 3rem
    table td
      text-aligne: center
      font-size: 14px
      height: 4rem
    .actions
      width: 17rem
      text-aligne: center

</style>