<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

function go(this: any, where: string) {
  if (where === 'back') this.$router.go(-1)
  else this.$router.go(1)
}

function toGitHub() {
  window.open('https://github.com/sakana9826')
}

function toSettings(this: any) {
  this.$router.push({ name: 'settings' })
}
</script>

<template>
  <nav>
    <div class="navigation-links">
      <RouterLink to="/" :class="{ active: $route.name === 'home' }">Home</RouterLink>
      <RouterLink to="/developers" :class="{ active: $route.name === 'developers' }">developer</RouterLink>
      <RouterLink to="/user" :class="{ active: $route.name === 'user' }">user</RouterLink>
    </div>
  </nav>
<!--  <div class="item" @click="toSettings">-->
<!--    设置-->
<!--  </div>-->
<!--  <hr />-->
<!--  <div class="item" @click="toGitHub">-->
<!--    github-->
<!--  </div>-->
  <div class="flex-1 mt-24 p-6">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: {
    right: 10vw;
    left: 10vw;
  }
  backdrop-filter: saturate(180%) blur(20px);

  background-color: var(--color-navbar-bg);
  z-index: 100;
  -webkit-app-region: drag;
}

.navigation-links {
  flex: 1;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  user-select: none;

  a {
    -webkit-app-region: no-drag;
    font-size: 18px;
    font-weight: 700;
    text-decoration: none;
    border-radius: 6px;
    padding: 6px 10px;
    color: var(--color-text);
    transition: 0.2s;
    -webkit-user-drag: none;
    margin: {
      right: 12px;
      left: 12px;
    }

    &:hover {
      background: var(--color-secondary-bg-for-transparent);
    }

    &:active {
      transform: scale(0.92);
      transition: 0.2s;
    }
  }

  a.active {
    color: var(--color-primary);
  }
}
@media (max-width: 1336px) {
  nav {
    padding: 0 max(5vw, 90px);
  }
}

@supports (-moz-appearance: none) {
  nav {
    background-color: var(--color-body-bg);
  }
}


@media (max-width: 970px) {
  .navigation-buttons {
    flex: unset;
  }
}
</style>
