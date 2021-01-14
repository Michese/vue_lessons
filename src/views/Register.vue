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
       <form @submit.prevent="onSubmit">
         <fieldset class="form-group">
           <input type="text" name="name"
                  class="form-control form-control-lg"
                  placeholder="никнейм">
         </fieldset>

         <fieldset class="form-group">
           <input type="text" name="email"
                  class="form-control form-control-lg"
                  placeholder="email">
         </fieldset>

         <fieldset class="form-group">
           <input type="text" name="password"
                  class="form-control form-control-lg"
                  placeholder="Пароль">
         </fieldset>
         <button class="btn btn-lg btn-primary pull-xs-right" :disabled="isSubmitting">Зарегистрироваться</button>
       </form>
     </div>
   </div>
 </section>
</template>

<script>
  export default {
    name: 'McvRegister',
    computed: {
      isSubmitting() {
        return this.$store.state.auth.isSubmitting;
      }
    },
    methods: {
      onSubmit() {
        console.log('register');
        this.$store.dispatch('register');
      }
    }
  }
</script>