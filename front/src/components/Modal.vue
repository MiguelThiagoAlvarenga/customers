<template lang="pug">
  #modal
    .modal-content
      .modal-header
        span.close(v-on:click="cancel()") ×
        h2 {{title}}
      slot.modal-body
      div.modal-footer
          button.btn.cancel(v-on:click="cancel()") Cancelar
          button.btn.save.tooltip(
                          type="submit"
                          v-on:click="save()"
                          :disabled="disableSave") Salvar
            span.tooltiptext(v-if="disableSave") "Deve-se preencher os campos obrigatórios(*)"
</template>

<script>
  export default {
    name: "Modal",
		props: {
      disableSave: {
        type: Boolean,
        required: true,
        default: true
      },
      title: {
        type: String,
				required: true
			}
    },
    data() {
      return {
        
      }
    },
    methods: {
      showModal() {
        const modal = document.getElementById('modal');
        modal.style.display = "block";
      },
      hideModal() {
        const modal = document.getElementById('modal');
        modal.style.display = "none";
      },
      cancel(){
        if(confirm('Se prosseguir irá perder os dados digitados no formulário!!!')) {
          this.$emit('onCancel');
          this.hideModal();
        }
      },
      save(){
        this.$emit('onSave');
        this.hideModal();
      }
    }
  }
</script>

<style scoped lang="sass">
  #modal
    display: none
    left: 0
    position: fixed
    z-index: 1
    padding-top: 100px
    top: 0
    width: 100%
    height: 100%
    overflow: auto
    background-color: rgb(0, 0, 0)
    background-color: rgba(0, 0, 0, 0.4)
    
    .modal-content
      position: relative
      background-color: #fefefe
      margin: auto
      padding: 0
      border: 1px solid #888
      width: 80%
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
      -webkit-animation-name: animatetop
      -webkit-animation-duration: 0.4s
      animation-name: animatetop
      animation-duration: 0.4s

    /* Add Animation
    @-webkit-keyframes animatetop
    from
      top: -300px
      opacity: 0

    to
      top: 0
      opacity: 1

    @keyframes animatetop
    from
      top: -300px
      opacity: 0

    to
      top: 0
      opacity: 1

    /* The Close Button

    .close
      color: white
      float: right
      font-size: 28px
      font-weight: bold

    &:hover, &:focus
      color: #000
      text-decoration: none
      cursor: pointer

    .modal-header
      padding: 2px 16px
      background-color: #0f1c5a
      color: white

    .modal-body
      padding: 2px 16px

    .modal-footer
      padding: 2px 16px
      background-color: #0f1c5a
      color: white
      height: 3rem
  
    .btn
      margin-top: 0.5rem
      float: right
      font-size: 15px
      font-weight: bold
      height: 2rem
      width: 7rem
      margin-left: 1rem

    .tooltip
      position: relative
      display: inline-block
      border-bottom: 1px dotted black

      .tooltiptext
        visibility: hidden
        width: 16rem
        background-color: #555
        color: #fff
        text-align: center
        border-radius: 6px
        padding: 5px 0
        position: absolute
        z-index: 1
        bottom: 125%
        left: 50%
        margin-left: -60px
        opacity: 0
        transition: opacity 0.3s

        &::after
          content: ""
          position: absolute
          top: 100%
          left: 50%
          margin-left: -5px
          border-width: 5px
          border-style: solid
          border-color: #555 transparent transparent transparent

      &:hover .tooltiptext
        visibility: visible
        opacity: 1
</style>