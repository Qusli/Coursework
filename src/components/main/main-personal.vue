<template>
    <section id="main-personal">
        <article class="main-personal-logo">
            <h1>Наши услуги</h1>
        </article>
        <article class="main-personal-inner" :style="heigth">
            <div v-for="personal in personals" :key="personal.id" class="main-personal-container">
                <img :src="`/assets/personal/doctor${personal.id}.png`"  class="main-personal-container-img">
                <div class="main-personal-container-text">
                    <div class="text">
                        <h1 class="head">{{ personal.fullname }}</h1>
                        <p>{{ personal.post }}</p>
                        <p class="exp">Стаж: {{ personal.experience }}</p>
                    </div>
                    <div>
                        <p>Телефон для записи: {{ personal.number }}</p>
                    </div>
                </div>
            </div>
        </article>
        <CustomButton class="main-personal-button" @click="active()">
            {{ textButton }}
        </CustomButton>
    </section>
</template>

<script lang="js">
import CustomButton from "@/components/elements/custom-button.vue"
export default {
    name: "main-personal",
    components:{
        CustomButton,
    },
    data(){
        return{
            personals:[
                {id: 1, fullname: "Зуева Василиса Ивановна", post: "Терапевт", experience: "6 лет", number: "+7(495)960-12-32"},
                {id: 2, fullname: "Воронкова Алиса Владимирована", post: "Главный врач клиники, хирург, невролог", experience: "10 лет", number: "+7(495)960-43-22"},
                {id: 3, fullname: "Визер Егор Михайлович", post: "Врач-лаборант", experience: "2 года", number: "+7(495)960-12-21"},
                {id: 4, fullname: "Карасев Максим Павлович", post: "Терапевт", experience: "8 лет", number: "+7(495)960-23-35"},
            ],
            heigth: "height: calc(20 + 1em)",
            isActive: false,
            textButton: "Показать больше"
        }
    },
    methods:{
        active(){
            if(this.isActive == false) {
                this.heigth = "height: calc(42vmax + 2em + 4px)"
                this.isActive = true
                this.textButton = "Свернуть"
            }
            else{
                this.heigth = "height: calc(20vmax + 1em)"
                this.isActive = false
                this.textButton = "Показать больше"
            }
        }
    }
}
</script>

<style lang="scss">
#main-personal{
    width: 100%;
    margin-top: var(--margin-top-main);

    .main-personal-logo{
        display: flex;
        justify-content: center;
        font-size: calc(3vmax);
        margin-bottom: calc(var(--margin-top-main) - 2em);
        color: #2FA412;
    }

    .main-personal-button{
        margin: 1em auto 0 auto;
    }

    .main-personal-inner{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: calc(2em + 8px);
        flex-wrap: wrap;
        overflow: hidden;
        height: calc(20vmax + 1em);
        transition: all 500ms;

        .main-personal-container{
            display: flex;
            width: calc(45vmax - 3vw + 1em);
            height: 20vmax;
            padding: calc(1em - 6px);
            border: 4px solid var(--color-border);
            border-radius: calc(1em + 5px);
            cursor: pointer;
            transition: all 500ms;
            position: relative;


            .main-personal-container-img{
                width: calc(10vmax + 3em - 5px);
                pointer-events: none;
            }

            .main-personal-container-text{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                text-align: center;


                .text{
                    display: inline-flex;
                    flex-direction: column;
                    gap: calc(1em - 14px);
                }

                .head{
                    color: #363636;
                    font-size: calc(2vmax - 3px);
                    line-height: calc(2vmax + 4px);
                    font-weight: 800;
                }

                .exp{
                    color: #363636;
                    font-size: calc(1vmax + 8px);
                    line-height: calc(2vmax + 8px);
                    font-weight: 700;
                }

            }

        }
        

    }
}
</style>