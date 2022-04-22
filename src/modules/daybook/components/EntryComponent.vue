<template>
  <div class="entry-container mb-3 pointer p-2"
  @click="$router.push({name:'entry',params:{id:1}})">
    <div class="entry-tile d-flex">
      <span class="text-success fs-5 fw-bold">15</span>
      <span class="mx-1 fs-5">Julio</span>
      <span class="mx-2 fw-light">2021, jueves</span>
    </div>
    <div class="entry-description">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rerum molestiae voluptates, 
      sunt aliquid magnam debitis eligendi itaque ratione ipsa sequi aperiam deleniti nulla corrupti 
      quod voluptas similique ab iusto est! Minima, molestias, id quaerat, perspiciatis sit distinctio 
      adipisci quia alias amet quam et. Est consequatur nostrum corporis ipsum cum.
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container{
  border-bottom: 1px solid #2c3e50;
  transition: 0.2s all ease-in;
  &:hover{
    background-color: lighten($color: gray, $amount: 45);
  transition: 0.2s all ease-in;
  }
  .entry-description{
    font-size: 15px;
  }
}
</style>