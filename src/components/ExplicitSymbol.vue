<template>
  <svg-icon name="explicit" :style="svgStyle"></svg-icon>
</template>

<script lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ExplicitSymbol',
  components: {
    SvgIcon
  },
  props: {
    size: {
      type: Number,
      default: 16
    }
  },
  data() {
    return {
      svgStyle: {}
    }
  },
  created() {
    this.svgStyle = {
      height: this.size + 'px',
      width: this.size + 'px',
      position: 'relative',
      left: '-1px'
    }
  }
})
</script>
