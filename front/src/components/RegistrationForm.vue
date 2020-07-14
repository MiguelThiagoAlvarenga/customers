<template lang="pug">
  #registration-form
    form( @submit = "")
      .control
        .text
          label(for="name") Nome Completo
          input#name(
                      autocomplete="off"
                      v-model="customer.name")
        .text
          label(for="cpf") CPF
          input#cpf(
                    autocomplete="off"
                    v-model="customer.cpf")
      .control
        .text
          label(for="email") E-mail
          input#email(
                      autocomplete="off"
                      v-model="customer.email")
        .text
          label(for="telephone") Telefone
          input#telephone(
                      autocomplete="off"
                      v-model="customer.telephone")

</template>

<script>
import Customer from '../domain/customer/Customer'
  export default {
    name: "RegistrationForm",
		props: {
      customer: {
        type: Customer,
        required: true
      },
      name: {
        type: String,
				required: false
			},
      cpf: {
        type: String,
				required: false
			},
      email: {
        type: String,
				required: false
			},
      telephone: {
        type: String,
				required: false
			}
    }
  }
</script>

<style scoped lang="sass">
  #registration-form
    .center
      text-align: center

    .control
      font-size: 1.2em
      margin-bottom: 20px
      display: flex

    .control label
      display: flex
      padding: 0.5rem 0
      font-weight: bold

    .control label + input
      width: 100%
      font-size: inherit
      border-radius: 7px
      height: 2rem

    .control .text
      margin: 2rem
      width: 45.5%
      display: block
</style>