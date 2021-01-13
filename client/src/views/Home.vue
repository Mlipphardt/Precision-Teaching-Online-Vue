<template>
  <div class="home">
    <WelcomeCarousel />
  </div>
</template>

<script>
import WelcomeCarousel from "../components/WelcomeCarousel";

export default {
  name: "Home",
  components: {
    WelcomeCarousel,
  },
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 85vh;
  align-content: center;
  text-align: center;
}
</style>
