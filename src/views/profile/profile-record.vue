<template>
    <MainHeader />
      <section id="main-profile">
          <article class="main-profile-container-logo">
              <div class="profile-logo">
                  <img src="@/assets/main/ico.png" class="main-profile-container-img">
                  <p>{{ user.name }}</p>
              </div>
              <nav class="main-profile-nav">
                  <router-link to="/profile" style="color:#333;">Контактная информация</router-link>
                  <router-link to="/profile-record" style="color:#333;">Записаться на приём</router-link>
                  <router-link to="/profile-history" style="color:#333;">История записей</router-link>
                  <router-link to="/profile-pet" style="color:#333;">Питомцы</router-link>
                  <router-link to="/profile-pet" style="color:#333;" v-if="isAdmin == true">Админ панель</router-link>
                  <div>
                      <span @click="logout()" style="color: rgb(228, 63, 63); cursor: pointer;" >Выйти</span>
                  </div>
              </nav>
          </article>
          <article class="main-profile-container">
              <div class="main-prfile-container-logo">
                  <h1>Запись на приём</h1>
              </div>
              <form @click.prevent="" class="main-profile-form">
                  <label for="">
                      <p>Фамилия:</p>
                      <input type="text" :readonly="false" :value="user.surname">
                      <div class="text">
                          <span @click="Read()">Изменить</span>
                      </div>
                  </label>
                  <label for="">
                      <p>Имя:</p>
                      <input type="text" :value="user.name">
                      <div class="text">
                          <span>Изменить</span>
                      </div>
                  </label>
                  <label for="">
                      <p>Отчество:</p>
                      <input type="text" :value="user.lastname">
                      <div class="text">
                          <span>Изменить</span>
                      </div>
                  </label>
                  <label for="">
                      <p>Номер телефона:</p>
                      <input type="text" :value="user.phone">
                      <div class="text">
                          <span>Изменить</span>
                      </div>
                  </label>
                  <label for="">
                      <p>Почта:</p>
                      <input type="text" :value="user.email">
                      <div class="text">
                          <span>Изменить</span>
                      </div>
                  </label>
                  <label for="">
                      <p>Пароль:</p>
                      <input type="password" :value="user.password">
                      <div class="text">
                          <span>Изменить</span>
                      </div>
                  </label>
              </form> 
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
      name: "main-profile",
      components:{
          MainHeader,
          MainFooter,
          CustomButton
      },
      data(){
          return{
              isAdmin: false,
              user:{},
              isRead:false
          }
      },
      methods:{
          async logout(){
              try{
                  await axios.post("/users/logout", JSON.stringify({email: this.user.email}), {
                      headers:{
                          "Authorization": `Bearer ${localStorage.getItem('token')}`,
                          "Content-Type": "application/json"
                      }
                  })
                  localStorage.setItem("token", null)
                  await this.$router.push("/sing-in")
              }
              catch(e){
                  console.log(e)
              }
          },
          Read(){
              return (this.isRead == false) ? this.isRead = true : this.isRead = false
          }
      },
      async created(){
      try{
          var response = await axios.get("/users/token", {
              headers:{
                  "Authorization": `Bearer ${localStorage.getItem('token')}`,
                  "Content-Type": "application/json"
              }
          })
          
  
          if(response.data.role == 'admin') this.isAdmin = true
  
          this.user = await response.data
  
          delete this.user['role']
          delete this.user['user_id']
          delete this.user['token']
      }
      catch{
          await this.logout()
      }
      }
  }
  </script>
  
  <style lang="scss" scoped>
  #main-profile{
      width: 100%;
      display: flex;
      font-size: var(--font-size-main);
  
  
      .main-profile-container-logo{
          position: relative;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: space-evenly;
          width: calc(22vmax + 5px);
          padding: calc(2vmax + 8px) 0;
          gap: calc(5vmax + 4px);
  
  
          .profile-logo{
              display: flex;
              flex-direction: column;
              align-items: center;
              gap: 1em;
  
              .main-profile-container-img{
                  width: 12vmax;
                  height: 12vmax;
                  border-radius:var(--border-radius-full) ;
              }
          }
  
          .main-profile-nav{
              display: flex;
              flex-direction: column;
              text-align: center;
              gap: calc(1vmax + 5px);
          }
      }
      .main-profile-container-logo::after{
          content: "";
          position: absolute;
          margin-left: calc(22vmax + 5px);
          bottom: 0;
          width: 3px;
          height: 100%;
          background-color: var(--background-header);
      }
  
      .main-profile-container{
          width: 78%;
          overflow:visible;
  
          .main-prfile-container-logo{
              display: flex;
              justify-content: flex-start;
              margin-left: calc(3vmax);
              font-size: calc(3vmax);
              margin-bottom: calc(var(--margin-top-main) - 3em);
              color: #2FA412;
          }
  
          .main-profile-form{
              display: flex;
              flex-direction: column;
              gap: calc(1em - 16px);
              font-size: calc(2vmax - 5px);
              margin-left: calc(3vmax);
  
              label{
                  width: 60vmax;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: space-between;
  
                  input{
                      border: 0;
                      border-bottom: solid 1px #333;
                      font-size: 2vmax ;
                      width: 40vmax;
                      padding-left: 5px;
                      cursor: default
                  }
  
                  input:focus{
                      border: solid 1px #2FA412;
                      outline: 0;
                      outline-offset: 0;
                  }
  
                  .text{
                      position: relative;
                      display: inline-flex;
                      bottom: 3vmax;
                      
  
                      span{
                          width: 39vmax;
                          position: relative;
                          display: flex;
                          justify-content: end;
                          cursor: pointer;
                      }
                  }
  
  
              }
          }
  
      }
  
  }
  </style>