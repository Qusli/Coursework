<template>
  <button class="custom-button">
    <slot></slot>
  </button>
</template>

<script lang="js">
export default {

}
</script>

<style lang="scss">
.custom-button{
    display: flex;
    border: 0;
    padding: calc(1em - 4px) calc(3em - 5px);
    border-radius: var(--border-radius-full);
    background-color: var(--background-header);
    font-size: calc(1vmax + 3px);
    font-weight: 600;
    color: var(--color-nav);
    cursor: pointer;

}
</style>