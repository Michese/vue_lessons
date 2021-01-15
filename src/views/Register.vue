<template>
  <section class="container page">
    <div class="row">
      <div class="col-md-6 offset-md-3 col-xs-12">

        <h1 class="text-xs-center">Регистрация</h1>
        <p class="text-xs-center">
          <router-link :to="{name: 'login'}">
            Вы уже зарегистрированы?
          </router-link>
        </p>
        <McvValidateErrors v-if="validationErrors" :validationErrors="validationErrors"></McvValidateErrors>
        <form @submit.prevent="onSubmit">
          <fieldset class="form-group">
            <input type="text" name="username"
                   class="form-control form-control-lg"
                   placeholder="Логин"
                   v-model="username"
            />
          </fieldset>

          <fieldset class="form-group">
            <input type="text" name="email"
                   class="form-control form-control-lg"
                   placeholder="email"
                   v-model="email"
            />
          </fieldset>

          <fieldset class="form-group">
            <input type="text" name="password"
                   class="form-control form-control-lg"
                   placeholder="Пароль"
                   v-model="password"
            />
          </fieldset>
          <button class="btn btn-lg btn-primary pull-xs-right" :disabled="isSubmitting">Зарегистрироваться</button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import McvValidateErrors from '@/views/components/ValidateErrors';

export default {
  name: 'McvRegister',
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  components: {
    McvValidateErrors
  },
  computed: {
    isSubmitting() {
      return this.$store.state.auth.isSubmitting;
    },
    validationErrors() {
      return this.$store.state.auth.validationErrors;
    }
  },
  methods: {
    onSubmit() {
      this.$store.dispatch('register', {
        username: this.username,
        email: this.email,
        password: this.password
      })
          .then(user => {
            console.log('success', user);
            this.$router.push({name: 'home'});
          });
    }
  }
}
</script>