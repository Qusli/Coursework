<template>
  <MainHeader/>
  <section id="main-our-service">
    <article class="main-our-service-container">
        <div class="main-our-service-logo">
            <h1>Наши услуги</h1>
        </div>
        <div class="main-our-service-up">
            <p>Название услуг</p>
            <p>Цена услуг</p>
        </div>
        <div class="container">
            <div v-for="service in services" :key="service.id" class="main-our-service-container-down">
                <div class="main-our-service-name">
                    <p>{{ service.service }}</p>
                </div>
                <div class="main-our-service-price">
                    <p>{{ service.price }}₽</p>
                </div>
            </div>
        </div>
    </article>
  </section>
  <MainFooter/>
</template>

<script lang="js">
import MainHeader from "@/components/main-header.vue"
import MainFooter from "@/components/main-footer.vue"
import axios from "axios"

export default {
components:{
    MainHeader,
    MainFooter
},
data(){
    return{
        services:[]
    }
},
async created(){
    const response = await axios.get('/service')

    this.services = response.data
}
}
</script>

<style lang="scss">
#main-our-service{
    width: 100%;
    font-size: var(--font-size-main);
    margin-bottom: 2em;

    .main-our-service-container{
        display: flex;
        flex-direction: column;

        .main-our-service-logo{
            text-align: center;
            font-size: calc(3vmax);
            margin: calc(var(--margin-top-main) - 2em) 0;
            color: #2FA412;
        }

        .main-our-service-up{
            display: flex;
            margin: 0 auto;
            gap: calc(53vmax + 1em);
            margin-bottom: 1em;
            font-size: calc(2vmax + 4px);
        }
        .container{
            display: flex;
            flex-direction: column;
            gap: calc(1vmax);

            .main-our-service-container-down{
                display: flex;
                justify-content: center;
                gap: 20vmax;

                .main-our-service-name{
                    border: solid 2px #3EC11D;
                    padding: 2px 4px;
                    border-radius: 10px;
                    width: calc(50vmax + 1em);
                }

                .main-our-service-price{
                    border: solid 2px #FF7C7C;
                    padding: 2px 3em;
                    border-radius: 10px;
                    width: auto;
                    height: 3vmax;
                }
            }
        }
    }
}
</style>