<template>
  <form name="signin-up" @submit.prevent="identify">
    <h2>{{ member? 'Connexion':'Créez un compte'}}</h2><br>

    <h3>Email</h3>
    <input v-model="email" type="email">

    <h3>Mot de passe</h3>
    <input v-model="password" @focus="known" type="password">

    <h3 v-show="!member">Confirmez votre mot de passe</h3>
    <input v-model="confirmPsw" v-show="!member" type="password"><br>
    <button type="submit">Connexion
    </button>
    <p class="newPsw" v-show="true" @click="reinitializePsw">
      Réinitialiser mon mot de passe</p>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Form',
  data() {
    return {
      email: '',
      member: true,
      password: '',
      confirmPsw: '',
    };
  },
  methods: {
    identify() {
      if (this.member) {
        this.$store.dispatch('user/login', {
          email: this.email,
          password: this.password,
        })
          .then((loggedIn) => {
            if (loggedIn) {
              this.$emit('closing');
            } else {
              this.retry();
            }
          });
      } else {
        this.$store.dispatch('user/signin', {
          email: this.email,
          psw: this.password,
          confirmPsw: this.confirmPsw,
        });
      }
      return null;
    },
    async known() {
      // TODO: /ezel → member (in the api)
      this.member = await axios.post(`${this.$store.state.api}/api/ezel`, { email: this.email })
        .then((res) => res.data.ezel)
        .catch((err) => console.error(err));
      return null;
    },
    retry() {
      console.log('wrong password!');
      return null;
    },
    reinitializePsw() {
      return null;
    },
  },
};
</script>

<style lang="css" scoped>
input {
  background-color: rgba(247, 247, 202, 0.9);
  border-radius: 10rem;
  margin-bottom: .8rem;
  border: 0;
  padding: 1rem;
}

button {
  margin-top: 1rem;
  display: inline-block;
  font-weight: 400;
  color: rgb(255, 255, 255);
  text-align: center;
  vertical-align: middle;
  background-color: rgba(67, 207, 88, 0.7);
  border-color: rgba(67, 207, 88, 0.7);
  border: 1px solid transparent;
    border-top-color: transparent;
    border-top-style: solid;
    border-top-width: 1px;
    border-right-color: transparent;
    border-right-style: solid;
    border-right-width: 1px;
    border-bottom-color: transparent;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-left-color: transparent;
    border-left-style: solid;
    border-left-width: 1px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  line-height: 1.2;
  border-radius: 2rem;
  transition: color 0.15s ease-in-out,
    background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;
}

button:hover {
  cursor: pointer;
  color: #fff;
  background-color: rgba(89, 166, 210, 0.6);
  border-color: rgba(0, 77, 179, 0.6);
      border-top-color: rgba(0, 77, 179, 0.6);
      border-right-color: rgba(0, 77, 179, 0.6);
      border-bottom-color: rgba(0, 77, 179, 0.6);
      border-left-color: rgba(0, 77, 179, 0.6);
}

button:focus {
  color: #fff;
  background-color: rgba(89, 166, 210, 0.6);
  border-color: rgba(89, 166, 210, 0.9);
  box-shadow: 0 0 0 0.2rem rgba(0, 77, 179, 0.0);
}
</style>
