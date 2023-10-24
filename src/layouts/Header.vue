<template>
  <nav class="navbar">
    <div class="container container-nav h-100">
      <img class="logo" :src="require('@/assets/images/logo.png')" alt="logo" />
      <div class="action">
        <button class="btn-auth">Đăng nhập</button>
        <button class="btn-auth">Đăng ký</button>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "HeaderDefault",
};
</script>
<style lang="css" scoped>
.navbar {
  height: 80px;
  padding: 0;
  background-color: #fff;
}
.navbar .container-nav {
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.navbar .container-nav .logo {
  height: 100%;
}
.navbar .container-nav .action {
  display: flex;
  gap: 10px;
}
.navbar .container-nav .btn-auth {
  background-image: linear-gradient(
    to right,
    rgba(59, 171, 255, var(--un-from-opacity, 1)),
    rgba(85, 85, 255, var(--un-to-opacity, 1))
  );
  border: none;
  padding: 6px 30px;
  border-radius: 25px;
  color: #fff;
}
</style>
