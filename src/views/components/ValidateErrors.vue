<template>
  <ul class="error-messages">
    <li v-for="message in errorMessages" :key="message">
      {{ message }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'McvValidateErrors',
  props: {
    validationErrors: {
      type: Object,
      required: true
    }
  },
  computed: {
    errorMessages() {
      return Object.keys(this.validationErrors).map(title => {
        const message = this.validationErrors[title].join(', ');
        return `${title} ${message}`;
      });
    }
  }
}
</script>