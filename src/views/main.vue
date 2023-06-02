<template>
  <MainHeader/>
  <main id="main">
    <section class="main-logo">
      <article class="main-logo-inner">
        <img src="../assets/main/logo.svg" class="main-logo-inner-img">
        <p class="main-logo-inner-text">Всегда поможем вашим<br>домашним любимцам</p>
        <router-link to="">
          <CustomButton>
            Записаться на приём
          </CustomButton>
        </router-link>
      </article>
      <img src="../assets/main/veterinar.png" class="main-logo-img">
    </section>
    <section class="main-achivment">
      <article class="main-achivment-inner">
        <div v-for="achivment in achivments" :key="achivment.id">
          <p class="main-achivment-inner-number">{{ achivment.num }}</p>
          <p class="main-achivment-inner-text">{{ achivment.text }}</p>
        </div>
      </article>
    </section>
    <section class="main-service">
      <article class="main-service-logo">
        <h1>Наши услуги</h1>
      </article>
      <article class="main-service-inner">
        <div class="main-service-container">
          <div>
            <img src="../assets/main/service/service1.png" class="main-service-container-img">
            <h1 style="font-weight: 500">Первичный клинический осмотр</h1>
            <p style="color: #868686;">*для записи, подайте заявку<br> в личном кабинете</p>
            <p class="main-service-container-text">Мы проводим клинический осмотр
              вашего питомца, чтобы выявить
              какие-либо заболевания или 
              некачественные образования
            </p>
          </div>
          <div class="main-service-container-price">
            <p>400₽</p>
          </div>
        </div>
        <div class="main-service-container">
          <div>
            <img src="../assets/main/service/service2.png" class="main-service-container-img">
            <h1 style="font-weight: 500">Чистка ушных раковин</h1>
            <p style="color: #868686;">*для записи, подайте заявку<br> в личном кабинете</p>
            <p class="main-service-container-text">
              У животных как и у людей, 
              загрязняються ушные проходы, 
              поэтому их нужно чистить 
              не реже 1 - 2 раза в месяц
            </p>
          </div>
          <div class="main-service-container-price">
            <p>250₽</p>
          </div>
        </div>
        <div class="main-service-container">
          <div>
          <img src="../assets/main/service/service3.png" class="main-service-container-img">
          <h1 style="font-weight: 500">Стрижка когтей</h1>
          <p style="color: #868686;">*для записи, подайте заявку<br> в личном кабинете</p>
          <p class="main-service-container-text">
            У животных как и у людей, 
            загрязняються ушные проходы, 
            поэтому их нужно чистить 
            не реже 1 - 2 раза в месяц
          </p>
          </div>
          <div class="main-service-container-price">
            <p>350₽</p>
          </div>
        </div>
      </article>
      <article class="main-service-button">
        <router-link to="">
          <CustomButton>
              Подробнее
          </CustomButton>
        </router-link>
      </article>
    </section>
    <MainPersonal/>
    <MainRegistration/>
  </main>
  <MainFooter/>
</template>

<script lang="js">
import MainHeader from "@/components/main-header.vue"
import MainFooter from "@/components/main-footer.vue"
import CustomButton from "@/components/elements/custom-button.vue"
import MainPersonal from "@/components/main/main-personal.vue"
import MainRegistration from "@/components/main/main-registration.vue"

export default {
  name: 'main',
  components:{
    MainHeader,
    MainFooter,
    CustomButton,
    MainPersonal,
    MainRegistration,
  },
  data(){
    return{
      achivments:[
        {id:1, num: "7", text: "Квалифицированных сотрудников"},
        {id:2, num: "13", text: "лет успешной работы"},
        {id:3, num: "15", text: "услуг для ваших питомцев"},
        {id:4, num: "100+", text: "довольных клиентов"}
      ]
    }
  },

}
</script>

<style lang="scss" scoped>
#main{
  width: auto;
  font-size: calc(1vmax + 4px);
  margin-top: var(--margin-top-main);

  .main-logo{
    display: flex;
    justify-content: space-evenly;
    width: 100%;

    .main-logo-inner{
      display: flex;
      flex-direction: column;
      width: calc(25vmax - 4px);
      height: auto;
      justify-content: center;
      align-items: center;
      text-align: center;
      border: 2px solid var(--color-border);
      border-radius: calc(1em + 5px);
      padding: 1em;

        .main-logo-inner-img{
          width: calc(15vmax + 2em);
          pointer-events: none;
        }

        .main-logo-inner-text{
          margin: 1em 0 3em 0;
        }
    }
    .main-logo-img{
      height: calc(30vmax + 4px);
    }
  }

  // main

  .main-achivment{
      width: 100%;
      padding: calc(2em + 12px) 0;
      margin-top: var(--margin-top-main);
      background-color: #F7F7F7;

      .main-achivment-inner{
        display: flex;
        justify-content: space-around;
        text-align: center;
        color:  #363636;

        .main-achivment-inner-number{
          font-weight: 800;
          line-height: calc(1em + 6px);
          font-size: calc(5vmax);
        }

        .main-achivment-inner-text{
          font-weight: 800;
          line-height: calc(1em + 6px);
          font-size: calc(2vmax);
        }
      }
    }

  .main-service{
    width: 100%;
    text-align: center;
    margin-top: var(--margin-top-main);

    .main-service-logo{
      font-size: calc(3vmax);
      margin-bottom: calc(var(--margin-top-main) - 2em);
      color: #2FA412;
    }
    
    .main-service-inner{
      display: flex;
      justify-content: space-around;

      .main-service-container{
        display: inline-flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: calc(1em + 2px);
        width: calc(25vmax + 2em);
        border: 4px solid var(--color-border);
        border-radius: calc(1em + 5px);
        transition: all 500ms;

        .main-service-container-img{
          width: calc(20vmax + 1em);
        }

        .main-service-container-text{
          text-align: start;
          margin: 10px 0 calc(1em + 10px) 0;
        }

        .main-service-container-price{
          display: inline-flex;
          margin: 0 auto;
          padding: calc(1em - 14px) calc(2em + 15px);
          border: 2px solid #FF7C7C;
          border-radius: calc(1em - 5px);
        }
      }

    }

    .main-service-button{
      display: flex;
      justify-content: center;
      margin-top: calc(1em + 5px);
    }
  }

}
</style>
