<template>
  <div>
    <Header />
    <img
      src="https://cfcdn.apowersoft.info/astro/picwish/_astro/header-bg.c927d2ec.svg"
      alt=""
      class="image"
    />
    <main class="main-content">
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
    <!-- <Footer /> -->
  </div>
</template>
<script>
import Header from "./Header.vue";
// import Footer from "./Footer.vue";
export default {
  name: "DefaultPage",
  components: {
    Header,
    // Footer,
  },
};
</script>
<style lang="css" scoped>
.main-content {
  background: rgba(241, 241, 255, 0.6);
  min-height: calc(100vh - var(--height-header));
  padding: 30px 0;
}
.image {
  position: absolute;
  left: 0;
  top: var(--height-header);
  z-index: -1;
}
</style>
