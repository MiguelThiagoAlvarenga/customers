<template lang="pug">
  #registration-form
    form( @submit = "")
      .control
        .text
          label(for="name") Nome Completo
          input#name(
                      autocomplete="off"
                      v-model="name")
        .text
          label(for="cpf") CPF
          input#cpf(
                    autocomplete="off"
                    v-model="cpf")
      .control
        .text
          label(for="email") E-mail
          input#titulo(
                      autocomplete="off"
                      v-model="email")
        .text
          label(for="telephone") Telefone
          input#titulo(
                      autocomplete="off"
                      v-model="telephone")

</template>

<script>
  export default {
    name: "RegistrationForm",
		props: {
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
    },
    watch: { },
    methods: { }
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