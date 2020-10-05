<template>
  <b-card
    :header="`${header} - ${money}`"
    header-text-variant="white"
    header-bg-variant="dark"
    bg-variant="light"
    style="max-width: 30rem; width: 100%"
    class="m-2"
    @keydown="handleKeyDown"
  >
    <span>Amount</span>
    <div class="form">
      <b-form-input id="input-default" @input="handleChange"></b-form-input>
      <b-button variant="primary" class="ml-2" @click="handleClick">{{ buttonLabel }}</b-button>
    </div>
  </b-card>
</template>

<script>
export default {
  props: ['buttonLabel', 'header', 'money', 'value', 'id'],
  methods: {
    handleChange(value) {
      this.$emit('input', value);
    },
    handleClick() {
      this.$emit('click', this.$props.id);
    },
    handleKeyDown(e) {
      if (e.keyCode === 13) {
        this.handleClick();
      }
    },
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
