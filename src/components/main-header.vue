<template>
  <header id="main-header">
    <section class="main-header-section">
        <article class="main-header-logo">
            <img src="../assets/header/logo.svg"  class="main-header-logo-img">
        </article>  
        <nav class="main-header-nav">
            <router-link to="/" :class="checkURL('/')">Главная</router-link>
            <router-link to="/our-service" :class="checkURL('/our-service')">Наши услуги</router-link>
        </nav>  
        <article class="main-header-auth" v-if="this.$store.state.isLogin == false">
            <router-link to="/sing-in" class="" :class="checkURL('/sing-in')">Логин</router-link>
            <span class="main-header-auth-line"></span>
            <router-link to="/sing-up" :class="checkURL('/sing-up')">Регистрация</router-link>
        </article>
        <article v-else-if="$store.state.isLogin == true" style="display: flex; align-items: center; gap: 15px;">
            <router-link to="/profile" :class="checkURL('/profile')">Профиль</router-link>
            <img src="@/assets/main/ico.png" class="main-header-img">
        </article>
    </section>
  </header>
</template>

<script lang="js">
export default {
    name: "main-header",
    data(){
        return{
            login: false
        }
    },
    methods:{
        checkURL(route){
            if(this.$route.path == route){
                return "main-header-nav-central"
            }
            else{
                return ""
            }
        }
    },
    created(){
        this.$store.commit('setLogin')
    }
}
</script>

<style lang="scss" scoped>
#main-header{
    width: 100%;
    font-size: var(--font-size-main);
    line-height: calc(var(--font-size-main) + 4px);
    padding: 8px;
    background-color: var(--background-header);

    .main-header-section{
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .main-header-logo{
        display: flex;

        .main-header-logo-img{
            width: calc(20vmax - 1em);
            pointer-events: none;
        }
    }

    .main-header-nav{
        display: flex;
        align-content: center;
        gap: calc(1em + 5px);


    }

    .main-header-auth{
        display: flex;
        gap: calc(1em - 10px);

        .main-header-auth-login{
            display: flex;
            gap: calc(1em - 10px);
        }

        .main-header-auth-line::after{
            content: "";
            display: flex;
            width: 2px;
            height: 100%;
            transform: rotateZ(15deg);
            border-radius: var(--border-radius-full);
            background-color: var(--color-nav);
        }
    }

    .main-header-nav-central{
            display: flex;
            font-weight: 600;
            flex-direction: column;
        }

        .main-header-nav-central::after{
            content: "";
            display: flex;
            position: relative;
            width: 100%;
            height: 2px;
            border-radius: var(--border-radius-full);
            background-color: var(--color-nav);
        }

        .main-header-img{
            width: 3vmax;
            height: 3vmax;
        }
}
</style>