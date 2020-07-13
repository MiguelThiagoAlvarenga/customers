<template lang="pug">
  #customer
    Modal( ref="modal" )
      p Some text in the Modal Body
      p Some other text... {{customer}}
    Search
    Grid(:data="filteredCustomers")

</template>

<script>
  import Grid from "../../components/Grid";
  import Search from "../../components/Search";
  import Modal from "../../components/Modal";

  export default {
    name: "customer",
    components: { Search, Grid, Modal },
    computed: {
      filteredCustomers() {
        return this.filterCpf || this.filterName ? this.filter(this.filterCpf, this.filterName) : this.customers
      }
    },
    mounted() {
      this.$root.$on('filterCPF', cpf => {
        this.filterCpf = cpf;
      });
      this.$root.$on('filterName', name => {
        this.filterName = name;
      });
      this.$root.$on('showModal', customer => {
        this.customer = customer;
        this.$refs['modal'].showModal();
      });
      this.$root.$on( 'onCloseModal',action => {
        const actions = {
          save: function(){
            alert('Cliente salvo com sucesso!');
          },
          cancel: function() {
            alert('Cadastro cancelado!');
          }
        };
        actions[action]();
      });
    },
    data() {
      return {
          customers: [],
          customer: {},
          filterName:'',
          filterCpf:''
      }
    },
    created() {
      this.customers = [{
          id:1,
          cpf:'07426278611',
          name: 'Miguel',
          email: 'Não possui',
          telephone: 'Não possui'
        }, {
          id:2,
          cpf:'07426278611',
          name: 'Thiago',
          email: 'Não possui',
          telephone: 'Não possui'
        }, {
          id:3,
          cpf:'333333333',
          name: 'Miguel',
          email: 'Não possui',
          telephone: 'Não possui'
        }, {
          id:4,
          cpf:'07426278611',
          name: 'Miguel',
          email: 'Não possui',
          telephone: 'Não possui'
        }, {
          id:5,
          cpf:'07426278611',
          name: 'Alvarenga',
          email: 'Não possui',
          telephone: 'Não possui'
        }]
    },
    methods: {
      filter(cpf, name) {
        console.log(name)
        console.log(cpf)

				let expCpf = '';
          if(cpf) {
          expCpf = new RegExp(cpf.trim(), 'i')
        }

				let expName = '';
				if(name) {
          expName = new RegExp(name.trim(), 'i')
        }

        return expCpf && expName ?
						this.customers.filter(customer => expCpf.test(customer.cpf)).filter(customer => expName.test(customer.name)) :
							expCpf ?  this.customers.filter(customer => expCpf.test(customer.cpf)) :
								expName ? this.customers.filter(customer => expName.test(customer.name)) : this.customers;
      }
    }
  }
</script>

<style scoped lang="sass">
  #customer
    width: 89%
    margin: 1% 5%
    align-content: center
</style>