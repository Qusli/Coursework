<template>
    <MainHeader/>
    <section id="main-login">
      <article class="main-login-inner">
          <form @click.prevent="" class="main-login-form">
              <article class="main-login-logo">
                  <h1>Логин</h1>
              </article>
              <label for="">
                  <input type="email" placeholder="Почта" v-model="email" class="main-login-input">
              </label>
              <label for="">
                  <input type="password" placeholder="Пароль" v-model="password" class="main-login-input">
              </label>
              <label for="">
                  <input type="password" placeholder="Повторите пароль" v-model="repeat_password" class="main-login-input">
              </label>
              <CustomButton class="main-login-button" @click="Login()">
                  Войти
              </CustomButton>
          </form>
          <img src="@/assets/auth/sing-in/cat.png"  class="main-login-img">
      </article>
    </section>
    <MainFooter/>
  </template>
  
  <script lang="js">
import MainHeader from "@/components/main-header.vue"
import MainFooter from "@/components/main-footer.vue"
import CustomButton from "@/components/elements/custom-button.vue"
import axios from "axios"

  export default {
      name: "main-registration",
      components:{
        MainHeader,
        MainFooter,
        CustomButton
      },
      data(){
          return{
              email: "",
              password: "",
              repeat_password: ""
          }
      },
      methods:{
          async Login(){
            if(this.password != this.repeat_password) return alert("Пароли не совпадают!")

            try{
                const user = {
                    email: this.email,
                    password: this.password
                }

                const response = await axios.post('/users/login', JSON.stringify(user), {
                    headers:{
                        "Content-Type": "application/json"
                    }
                })


                localStorage.setItem('token', response.data.token)
                this.$store.commit('setToken')

                await this.$router.push("/profile")
            }
            catch(e){
                console.log(e)
            }
          },
          async validate(){
              
          }
          
      }
  }
  </script>
  
  <style lang="scss">
  #main-login{
      width: 100%;
      margin: var(--margin-top-main) 0;
  
      .main-login-inner{
          display: flex;
          justify-content: space-evenly;
          align-items: center;
  
          .main-login-img{
              width: calc(40vmax + 3em);
          }
  
          .main-login-logo{
          display: flex;
          justify-content: center;
          font-size: calc(3vmax - 6px);
          color: #2FA412;
          pointer-events: none;
          }
  
          .main-login-button{
              margin-top: 1em;
          }
  
          .main-login-form{
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              width: calc(30vmax + 2em);
              gap: calc(1em + 4px);
              padding: calc(1em + 14px) 0;
              background-color: #E2E2E260;
              border-radius: calc(2em + 8px);
  
              .main-login-input{
                  border: 0;
                  border-bottom: solid 1px;
                  background-color: #E2E2E200;
                  padding: calc(1em - 4px) calc(1em - 3px);
                  font-size: calc(1vmax + 7px);
              
              }
  
              .main-login-input:focus{
                  outline: 0;
                  outline-offset: 0;
              }
          }
      }
  }
  </style>