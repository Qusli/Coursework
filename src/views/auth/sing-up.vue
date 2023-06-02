<template>
    <MainHeader/>
    <section id="main-registration">
      <article class="main-registration-inner">
          <form @click.prevent="" class="main-registration-form">
              <article class="main-registration-logo">
                  <h1>Регистрация</h1>
              </article>
              <label for="">
                  <input type="text" placeholder="ФИО" v-model="FIO" class="main-registration-input" >
              </label>
              <label for="">
                  <input type="text" placeholder="Номер телефона" v-model="phone" class="main-registration-input">
              </label>
              <label for="">
                  <input type="email" placeholder="Почта" v-model="email" class="main-registration-input">
              </label>
              <label for="">
                  <input type="password" placeholder="Пароль" v-model="password" class="main-registration-input">
              </label>
              <label for="">
                  <input type="password" placeholder="Повторите пароль" v-model="repeat_password" class="main-registration-input">
              </label>
              <CustomButton class="main-registration-button" @click="registration()">
                  Зарегистрироваться
              </CustomButton>
          </form>
          <img src="@/assets/auth/sing-up/cat.png"  class="main-registration-img">
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
              FIO: "",
              phone: "",
              email: "",
              password: "",
              repeat_password: ""
          }
      },
      methods:{
          async registration(){
            if(this.password != this.repeat_password) return alert("Пароли не совпадают!")
            
            try{
            const user = {
                surname: this.FIO.split(' ')[0],
                name: this.FIO.split(' ')[1],
                lastname: this.FIO.split(' ')[2],
                phone: this.phone,
                email: this.email,
                password: this.password
            }
            
            await axios.post('/users/registration', JSON.stringify(user), {
                headers:{
                    "Content-Type": "application/json"
                }
            })

            await this.$router.push("/sing-in")
            }
            catch{
                alert("Вы ввели не корректные значения")
            }
          },
          validate(){
              
          }
          
      }
  }
  </script>
  
  <style lang="scss">
  #main-registration{
      width: 100%;
      margin: var(--margin-top-main) 0;
  
      .main-registration-inner{
          display: flex;
          justify-content: space-evenly;
          align-items: center;
  
          .main-registration-img{
              width: calc(40vmax + 3em);
          }
  
          .main-registration-logo{
          display: flex;
          justify-content: center;
          font-size: calc(3vmax - 6px);
          color: #2FA412;
          pointer-events: none;
          }
  
          .main-registration-button{
              margin-top: 1em;
          }
  
          .main-registration-form{
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              width: calc(30vmax + 2em);
              gap: 6px;
              padding: calc(1em + 4px) 0;
              background-color: #E2E2E260;
              border-radius: calc(2em + 8px);
  
              .main-registration-input{
                  border: 0;
                  border-bottom: solid 1px;
                  background-color: #E2E2E200;
                  padding: calc(1em - 4px) calc(1em - 3px);
                  font-size: calc(1vmax + 7px);
              
              }
  
              .main-registration-input:focus{
                  outline: 0;
                  outline-offset: 0;
              }
          }
      }
  }
  </style>