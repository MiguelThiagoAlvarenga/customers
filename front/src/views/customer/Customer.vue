<template lang="pug">
  #customer
    Modal(
            ref="modal"
            @onSave="onSave()"
            @onCancel="onCancel()"
            title="Cadastro de Clientes")
      RegistrationForm(
                        :name="customer.name",
                        :cpf="customer.cpf",
                        :email="customer.email",
                        :telephone="customer.telephone")
    Search
    Grid(
          :data="filteredCustomers"
          @onShowModal="onShowModal($event)"
          @onDelete="onDelete($event)")

</template>

<script>
  import Grid from "../../components/Grid";
  import Search from "../../components/Search";
  import Modal from "../../components/Modal";
  import RegistrationForm from "../../components/RegistrationForm";
  import Customer from "../../domain/customer/Customer"
  
  export default {
    name: "customer",
    components: {
      Search,
			Grid,
			Modal,
			RegistrationForm
		},
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
    },
    data() {
      return {
          customers: [],
          customer: new Customer(),
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
      onShowModal($event) {
        this.customer = $event;
        this.$refs['modal'].showModal();
			},
      onCancel() {
        this.customer = new Customer();
        alert('Cadastro cancelado!');
      },
			onSave() {
        console.log(this.customer);
        alert('Cliente salvo com sucesso!');
      },
      onDelete($event){
        alert(`Excluído o cliente ${$event.name}`);
      },
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
    .modal-cad-enter, .modal-cad-leave-active
      opacity: 0
    .modal-cad-enter-active, .modal-cad-leave-active
      transition: opacity 1s
</style>