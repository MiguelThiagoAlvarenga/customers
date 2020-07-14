<template lang="pug">

  #customer-page

    Modal(
            ref="modal"
            @onSave="onSave()"
            @onCancel="onCancel()"
            title="Cadastro de Clientes")
      RegistrationForm(
                        :name="customer.name",
                        :cpf="customer.cpf",
                        :email="customer.email",
                        :telephone="customer.telephone"
												@changeInputs="onchangeInputs($event)")
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
      this.loadCustomers();
    },
    methods: {
      onChangeInputs($event) {
        this.customer = $event;
			},
			loadCustomers(){
        this.$http.get('http://localhost:3001/customer/getAll')
          .then(res => res.json())
          .then(customers => this.customers = customers)
      },
      onShowModal($event) {
        this.customer = $event;
        this.$refs['modal'].showModal();
			},
      onCancel() {
        this.customer = new Customer();
        alert('Cadastro cancelado!');
      },
			onSave() {
        const method = this.customer.id ? 'put' : 'post';
        const url = this.customer.id ? 'update' : 'create';
        
        this.$http[method](`http://localhost:3001/customer/${url}`, this.customer)
        .then(customers => {
          this.customers = customers
          this.loadCustomers()
          alert('Cliente salvo com sucesso!');
        }, err => console.log(err))
      },
      onDelete($event){
        this.$http['delete'](`http://localhost:3001/customer/delete`, $event.id)
          .then(() => {
            alert(`Excluído o cliente ${$event.name}`);
            this.loadCustomers()
          }, err => console.log(err))
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
  #customer-page
    width: 89%
    margin: 1% 5%
    align-content: center
    .modal-cad-enter, .modal-cad-leave-active
      opacity: 0
    .modal-cad-enter-active, .modal-cad-leave-active
      transition: opacity 1s
</style>