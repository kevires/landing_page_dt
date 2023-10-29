<template>
  <div class="icon-scroll">
    <div class="blink_me text-white">Scroll to explore</div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.icon-scroll,
.icon-scroll:before {
  position: absolute;
  left: 50%;
}
.icon-scroll {
  width: 30px;
  height: 50px;
  margin-left: -20px;
  bottom: 10px;
  margin-top: -35px;
  border: 2px solid #fff;
  border-radius: 25px;
}
@media (max-width: 767px) {
  .icon-scroll {
    /* position: relative; */
  }
}
.icon-scroll:before {
  content: "";
  width: 8px;
  height: 8px;
  background: #fff;
  margin-left: -4px;
  top: 8px;
  border-radius: 4px;
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-name: scroll;
}
.blink_me {
  font-size: 14px;
  animation: blinker 1.5s linear infinite;
  position: absolute;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  opacity: 1;
}

@keyframes blinker {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
@keyframes scroll {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateY(26px);
  }
}
</style>