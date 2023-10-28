<template>
  <div>
    <div :id="$style.crackerMain">
      <div :id="$style.barrel"></div>
      <div
        v-for="bullet of state.bullets"
        v-show="state.bulletShow[bullet.id]"
        :key="bullet"
        :class="$style.bullet"
        :style="{
          'background-color': bullet.color,
          'animation-name': bullet.keyframe,
        }"
      ></div>
    </div>
  </div>
</template>

<script>
import { reactive } from 'vue';

export default {
  name: 'CrackerAnimation',
  setup() {
    const bulletsLength = 70;
    const state = reactive({ bullets: [], bulletShow: [] });
    const color = [
      'red',
      'green',
      'blue',
      'cyan',
      'magenta',
      'yellow',
      'black',
    ];
    for (let i = 0; i < bulletsLength; i++) {
      state.bullets.push({
        color: color[Math.floor(Math.random() * (color.length + 1))],
        direction: '',
        keyframe: `bullet_animation${i}`,
        id: i,
      });
    }
    let j = 0;
    const interval = setInterval(() => {
      state.bulletShow.push(true);
      j++;
      if (j > bulletsLength) clearInterval(interval);
    }, 10);

    onMounted(() => {
      const styleElement = document.createElement('style');
      let styleStr = '';
      for (let i = 0; i < bulletsLength; i++) {
        styleStr += `
      @keyframes bullet_animation${i} {
        0% {
          top: 100px;
          left: 25px;
          opacity: 1;
        }
        80% {
          opacity: 1;
        }
        100% {
          top: -100px;
          opacity: 0;
          left: ${Math.random() * 120 - 30}px
        }
      }
      `;
      }
      styleElement.textContent = styleStr;
      document.head.appendChild(styleElement);
    });

    return { state };
  },
};
</script>

<style lang="scss" module>
#crackerMain {
  position: relative;
  overflow: visible;
  height: 150px;
  width: 60px;
}

#barrel {
  position: absolute;
  background-color: #19c298;
  height: 50px;
  width: 30px;
  bottom: 0px;
  left: 15px;
  clip-path: polygon(0 0, 100% 0, 50% 100%);
}

.bullet {
  position: absolute;
  height: 5px;
  width: 5px;
  top: 100px;
  left: 25px;
  animation-duration: 1s;
  /* animation-iteration-count: 1; */
  animation-fill-mode: forwards;
  background-color: cyan;
}
</style>
