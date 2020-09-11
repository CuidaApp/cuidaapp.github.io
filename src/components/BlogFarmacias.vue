<template>
  <div class="blogFarmacias">
    <router-view />
    <router-link to="/farmacias" tag="a" class="back">&laquo; Back</router-link>
  </div>
</template>

<style>
.containerVideo {
  margin: 0 auto;
  position: relative;
  max-width: 1000px;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
}

.img-config {
  text-align: center;
  margin: 0 auto;
  position: relative;
  max-width: 100%;
}

.responsive-iframe-Video {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
}
</style>
