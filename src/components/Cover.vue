<template>
  <div
    class="cover size-full"
    :class="{ 'cover-hover': coverHover }"
    @mouseover="focus = true"
    @mouseleave="focus = false"
    @click="clickCoverToPlay ? play() : goTo()"
  >
    <div class="cover-container">
      <div class="shade">
        <button
          v-show="focus"
          class="play-button"
          :style="playButtonStyles"
          @click.stop="play()"
        >
          <svg-icon name="play" />
        </button>
      </div>
      <img :src="imageUrl" :style="imageStyles" loading="lazy" />
      <transition v-if="coverHover || alwaysShowShadow" name="fade">
        <div
          v-show="focus || alwaysShowShadow"
          class="shadow"
          :style="shadowStyles"
        ></div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import SvgIcon from '@/components/SvgIcon.vue'

const focus = ref(false)
const router = useRouter()

const props = withDefaults(defineProps<{
  id: number
  type: string
  imageUrl: string
  fixedSize?: number
  playButtonSize?: number
  coverHover?: boolean
  alwaysShowPlayButton?: boolean
  alwaysShowShadow?: boolean
  clickCoverToPlay?: boolean
  shadowMargin?: number
  radius?: number
}>(), {
  fixedSize: 0,
  playButtonSize: 22,
  coverHover: true,
  alwaysShowPlayButton: true,
  alwaysShowShadow: false,
  clickCoverToPlay: false,
  shadowMargin: 12,
  radius: 12
})

const imageStyles = computed(() => {
  const styles: Record<string, string> = {}
  if (props.fixedSize !== 0) {
    styles.width = props.fixedSize + 'px'
    styles.height = props.fixedSize + 'px'
  }
  if (props.type === 'artist') styles.borderRadius = '50%'
  return styles
})

const playButtonStyles = computed(() => {
  const styles: Record<string, string> = {}
  if (props.fixedSize !== 0) {
    styles.width = props.playButtonSize + 'px'
    styles.height = props.playButtonSize + 'px'
  }
  return styles
})

const shadowStyles = computed(() => {
  const styles: Record<string, string> = {}
  styles.backgroundImage = `url(${props.imageUrl})`
  if (props.type === 'artist') styles.borderRadius = '50%'
  return styles
})

function play() {
  // const player = store.state.player;
  // const playActions = {
  //   album: player.playAlbumByID,
  //   playlist: player.playPlaylistByID,
  //   artist: player.playArtistByID,
  // };
  // playActions[type].bind(player)(id);
}

function goTo() {
  router.push({ name: props.type, params: { id: props.id } })
}
</script>

<style lang="scss" scoped>
.cover {
  position: relative;
  transition: transform 0.3s;
}

.cover-container {
  position: relative;
}

img {
  border-radius: 0.75em;
  width: 100%;
  user-select: none;
  aspect-ratio: 1 / 1;
  border: 1px solid rgba(0, 0, 0, 0.04);
}

.cover-hover {
  &:hover {
    cursor: pointer;
    /* transform: scale(1.02); */
  }
}

.shade {
  position: absolute;
  top: 0;
  height: calc(100% - 3px);
  width: 100%;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
}

.play-button {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  backdrop-filter: blur(8px);
  background: rgba(255, 255, 255, 0.14);
  border: 1px solid rgba(255, 255, 255, 0.08);
  height: 22%;
  width: 22%;
  border-radius: 50%;
  cursor: default;
  transition: 0.2s;

  .svg-icon {
    width: 50%;
    margin: {
      left: 4px;
    }
  }

  &:hover {
    background: rgba(255, 255, 255, 0.28);
  }

  &:active {
    transform: scale(0.94);
  }
}

.shadow {
  position: absolute;
  top: 12px;
  height: 100%;
  width: 100%;
  filter: blur(16px) opacity(0.6);
  transform: scale(0.92, 0.96);
  z-index: -1;
  background-size: cover;
  border-radius: 0.75em;
  aspect-ratio: 1 / 1;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
