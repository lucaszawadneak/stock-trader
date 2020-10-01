<template>
  <b-card
    :header="header"
    header-text-variant="white"
    header-bg-variant="dark"
    bg-variant="light"
    style="max-width: 30rem; width: 100%"
    class="m-2"
  >
    <span>Ammount</span>
    <div class="form">
      <b-form-input id="input-default" v-model.number="ammount"></b-form-input>
      <b-button variant="primary" class="ml-2">{{ buttonLabel }}</b-button>
    </div>
  </b-card>
</template>

<script>
export default {
  props: ['buttonLabel', 'header'],
  data() {
    return {
      ammount: 0,
    };
  },
};
</script>

<style scoped>
.form {
  display: flex;
  flex-direction: row;
}

span {
  font-size: 14px;
}
</style>
