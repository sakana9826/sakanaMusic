<script setup lang="ts">
import { RouterLink, useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import ButtonIcon from '@/components/ButtonIcon.vue'
import SvgIcon from '@/components/SvgIcon.vue'
import ContextMenu from '@/components/ContextMenu.vue'

const route = useRoute()
const router = useRouter()
const showNavbar = ref(true)
const inputFocus = ref(false)
const keywords = ref('')
const userProfileMenu = ref<InstanceType<typeof ContextMenu> | null>(null)

watch(() => route.path,
  newPath => {
    showNavbar.value = shouldShowNavbar(newPath)
  },
  { immediate: true }
)

function shouldShowNavbar(path: string) {
  const notShowNavBar = ['/login']
  return !notShowNavBar.includes(path)
}

function go(this: any, where: string) {
  if (where === 'back') router.go(-1)
  else router.go(1)
}

function toGitHub() {
  window.open('https://github.com/sakana9826')
}

function toLogin() {
  window.open('https://github.com/sakana9826')
}

function toSettings(this: any) {
  this.$router.push({ name: 'settings' })
}

function doSearch() {

}

function showUserProfileMenu(e: MouseEvent) {
  userProfileMenu.value?.openMenu(e)
}

</script>

<template>
  <div v-show="showNavbar">
    <nav>
      <div class="navigation-buttons">
        <button-icon @click="go('back')">
          <svg-icon name="arrow-left" />
        </button-icon>
        <button-icon @click="go('forward')">
          <svg-icon name="arrow-right" />
        </button-icon>
      </div>
      <div class="navigation-links">
        <RouterLink to="/" :class="{ active: $route.name === 'home' }">Home</RouterLink>
        <RouterLink to="/developers" :class="{ active: $route.name === 'developers' }">developer</RouterLink>
        <RouterLink to="/user" :class="{ active: $route.name === 'user' }">user</RouterLink>
      </div>
      <div class="right-part">
        <div class="search-box">
          <div class="container" :class="{ active: inputFocus }">
            <svg-icon name="search" />
            <div class="input">
              <input
                ref="searchInput"
                v-model="keywords"
                type="search"
                :placeholder="inputFocus ? '' : '搜索'"
                @keydown.enter="doSearch"
                @focus="inputFocus = true"
                @blur="inputFocus = false"
              />
            </div>
          </div>
        </div>
        <img
          class="avatar"
          src='http://s4.music.126.net/style/web2/img/default/default_avatar.jpg?param=60y60'
          @click="showUserProfileMenu"
          loading="lazy"
        />
      </div>
    </nav>

    <ContextMenu ref="userProfileMenu">
      <div class="item" @click="toSettings">
        <svg-icon class="inline-block w-5 h-5" name="settings" />
        设置
      </div>
      <div class="item" @click="toLogin">
        <svg-icon class="inline-block w-5 h-5" name="login" />
        登入
      </div>
      <hr/>
      <div class="item" @click="toGitHub">
        <svg-icon class="inline-block w-5 h-5" name="github" />
        github
      </div>
    </ContextMenu>
    <!--  <div class="item" @click="toSettings">-->
    <!--    设置-->
    <!--  </div>-->
    <!--  <hr />-->
    <!--  <div class="item" @click="toGitHub">-->
    <!--    github-->
    <!--  </div>-->
    <div class="flex-1 mt-24 p-6">
    </div>
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

.navigation-buttons {
  flex: 1;
  display: flex;
  align-items: center;

  .svg-icon {
    height: 24px;
    width: 24px;
  }

  button {
    -webkit-app-region: no-drag;
  }
}

.right-part {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .avatar {
    user-select: none;
    height: 30px;
    margin-left: 12px;
    vertical-align: -7px;
    border-radius: 50%;
    cursor: pointer;
    -webkit-app-region: no-drag;
    -webkit-user-drag: none;

    &:hover {
      filter: brightness(80%);
    }
  }

  .search-button {
    display: none;
    -webkit-app-region: no-drag;
  }
}

.search-box {
  display: flex;
  justify-content: flex-end;
  -webkit-app-region: no-drag;

  .container {
    display: flex;
    align-items: center;
    height: 32px;
    background: var(--color-secondary-bg-for-transparent);
    border-radius: 8px;
    width: 200px;
  }

  .svg-icon {
    height: 15px;
    width: 15px;
    color: var(--color-text);
    opacity: 0.28;
    margin: {
      left: 8px;
      right: 4px;
    }
  }

  input {
    font-size: 16px;
    border: none;
    background: transparent;
    width: 96%;
    font-weight: 600;
    margin-top: -1px;
    color: var(--color-text);
    outline: none;
  }

  .active {
    background: var(--color-primary-bg-for-transparent);

    input,
    .svg-icon {
      opacity: 1;
      color: var(--color-primary);
    }
  }
}

[data-theme='dark'] {
  .search-box {
    .active {
      input,
      .svg-icon {
        color: var(--color-text);
      }
    }
  }
}

.search {
  .svg-icon {
    height: 18px;
    width: 18px;
  }
}
</style>
