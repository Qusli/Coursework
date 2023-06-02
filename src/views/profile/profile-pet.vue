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
                  <router-link to="/profile-admin" style="color:#333;" v-if="isAdmin == true">Админ панель</router-link>
                  <div>
                      <span @click="logout()" style="color: rgb(228, 63, 63); cursor: pointer;" >Выйти</span>
                  </div>
              </nav>
          </article>
          <article class="main-profile-container">
              <div class="main-prfile-container-logo">
                  <h1>Питомцы</h1>
                  <button class="plus" @click="hiddenCheck()"></button>
              </div>
              <div :class="hiddenClass()">
                <form @click.prevent="" class="main-profile-form">
                    <label for="">
                        <p>Животное</p>
                        <input type="text" placeholder="Кот" v-model="animal">
                    </label>
                    <label for="">
                        <p>Порода</p>
                        <input type="text" placeholder="Мейн-Кун" v-model="species">
                    </label>
                    <label for="">
                        <p>Кличка</p>
                        <input type="text" placeholder="Мурзик" v-model="moniker">
                    </label>
                    <label for="">
                        <p>Пол</p>
                        <input type="text" placeholder="М" v-model="sex">
                    </label>
                    <CustomButton style="margin-top: 10px;">
                        Добавить
                    </CustomButton>
                </form>
              </div>
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
              user: [],
              isRead:false,
              hidden: false,
              pet: [],
              animal: "",
              species: "",
              moniker: "",
              sex: ""
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
          },
          hiddenClass(){
            if(this.hidden == true){
                return "container"
            }
            else{
                return "hidden"
            }
          },
          hiddenCheck(){
            if(this.hidden == true){
                this.hidden = false
            }
            else if(this.hidden == false){
                this.hidden = true
            }
          }
      },
      async created(){
      try{
        await (async ()=>{
                var response = await axios.get("/users/token", {
                    headers:{
                        "Authorization": `Bearer ${localStorage.getItem('token')}`,
                        "Content-Type": "application/json"
                    }
                })
                
                if(response.data.role == 'admin') this.isAdmin = true
        
                this.user = await response.data
        
                delete this.user['role']
                delete this.user['token']
            })()
        



      }
      catch{
        this.logout()
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
  
    
      .plus{
        width: calc(3vmax + 6px);
        height: calc(3vmax + 6px);
        border-radius: var(--border-radius-full);
        border: 0;
        margin: calc(1em + 2px) 0 0 1em;
        background: var(--background-header);
        cursor: pointer;
      }
      .plus::after{
        content: '';
        display: flex;
        position: relative;
        width: calc(3vmax - 4px);
        height: calc(1vmax - 5px);
        margin-left: 5px;
        margin-bottom: 11px;
        border-radius: 99em;
        background-color: #FFF;
      }
      .plus::before{
        content: '';
        display: flex;
        position: relative;
        width: calc(3vmax - 4px);
        height: calc(1vmax - 5px);
        margin-left: 5px;
        top: 11px;
        border-radius: 99em;
        transform: rotateZ(90deg);
        background-color: #FFF;
      }

      .container{
        display: flex;
        position: relative;
        flex-direction: column;
        align-content: center;
        justify-content: center;
        margin: 0 auto;
        border-radius: calc(1em + 6px);
        border: solid 4px var(--background-header);
        width: 30vmax;
        height: 35vmax;
        z-index: 20;
        .hidden{
        display: none;
      }

      .main-profile-form{
        align-items: center;
        margin: 0 !important;
      }

      label{
        width: 20vmax !important;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
  
        input{
            border: 0;
            border-bottom: solid 1px #333;
            font-size: 2vmax ;
            width: 20vmax !important;
            padding-left: 5px;
            cursor: default
        }
  
        input:focus{
            outline: 0;
            outline-offset: 0;
        }
        }
      }

    .hidden{
        display: none;
    }      
  }
  </style>