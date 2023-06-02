<template>
  <footer id="main-footer">
    <section class="main-footer-section">
        <article class="main-footer-logo">
            <img src="../assets/header/logo.svg" class="main-footer-logo-img">
            <span>Телефон для записи: +7-495-956-32-54</span>
            <span>Наша почта: Pushistik@mail.ru</span>
        </article>
        <article class="main-footer-prime-time">
            <h1 style="text-align: center;">Часы работы</h1>
            <span>Пн - Пт с 9:00 до 18:00</span>
            <span>Суббота с 9:00 до 17:00</span>
            <span>Воскресенье с 9:00 до 16:00</span>
        </article>
    </section>
  </footer>
</template>

<script lang="js">
export default {
    name: "main-footer"
}
</script>

<style lang="scss" scoped>
#main-footer{
    width: 100%;
    padding: calc(1em - 8px) 1em;
    background-color: var(--background-header);
    font-size: var(--font-size-main);
    color: white;

    .main-footer-section{
        display: flex;
        justify-content: space-between;

        .main-footer-logo{
            display: flex;
            flex-direction: column;
            gap: 4px;

            .main-footer-logo-img{
            width: calc(20vmax - 1em);
            pointer-events: none;
            }
        }

        .main-footer-prime-time{
            display: flex;
            flex-direction: column;
        }
    }
}
</style>