<template lang="pug">
  #modal
    .modal-content
      .modal-header
        span.close(v-on:click="hideModal('cancel')") ×
        h2 Modal Header
      slot.modal-body
      div.modal-footer
          button.btn.cancel(v-on:click="cancel()") Cancelar
          button.btn.save(v-on:click="save()") Salvar

</template>

<script>
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
    this.$root.$emit('onCloseModal', 'cancel');
  }
}
  export default {
    name: "Modal",
    methods: {
      showModal() {
        const modal = document.getElementById('modal');
        modal.style.display = "block";
        
      },
      hideModal(action) {
        const modal = document.getElementById('modal');
        modal.style.display = "none";
        this.$root.$emit('onCloseModal', action);
      },
      cancel(){
        this.hideModal('cancel');
      },
      save(){
        this.hideModal('save');
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
      margin-top: 0.8rem
      float: right
      font-size: 15px
      font-weight: bold
</style>