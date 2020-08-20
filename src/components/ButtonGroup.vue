<template>
  <div class="button-group flex">
    <slot />
  </div>
</template>

<style lang="scss">
.button-group {
  :first-child:not(:last-child) {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    border-right: 0;
  }

  :not(:first-child):not(:last-child) {
    border-radius: 0;
    border-right: 0;
  }

  :last-child:not(:first-child) {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    /* border-left: 0; */
  }
}
</style>
