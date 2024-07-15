<script setup lang="ts">
import CoverRow from '@/components/CoverRow.vue'

const byAppleMusic = [
  {
    coverImgUrl:
      '/public/favicon.jpg',
    name: 'Happy Hits',
    id: 5278068783
  },
  {
    coverImgUrl:
      'https://p2.music.126.net/5CJeYN35LnzRDsv5Lcs0-Q==/109951165374966765.jpg',
    name: '\u4e2d\u563b\u5408\u74a7',
    id: 5277771961
  },
  {
    coverImgUrl:
      'https://p1.music.126.net/cPaBXr1wZSg86ddl47AK7Q==/109951165375130918.jpg',
    name: 'Heartbreak Pop',
    id: 5277965913
  },
  {
    coverImgUrl:
      'https://p2.music.126.net/FDtX55P2NjccDna-LBj9PA==/109951165375065973.jpg',
    name: 'Festival Bangers',
    id: 5277969451
  },
  {
    coverImgUrl:
      'https://p2.music.126.net/hC0q2dGbOWHVfg4nkhIXPg==/109951165374881177.jpg',
    name: 'Bedtime Beats',
    id: 5277778542
  }
]

</script>

<template>
  <div class="title"> by Apple Music</div>
  <cover-row type="aaaaa" v-bind:items=byAppleMusic />
</template>

<style lang="scss" scoped>
.title {
  padding: {
    right: 10vw;
    left: 10vw;
  }
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 20px;
  font-size: 28px;
  font-weight: 700;
  color: var(--color-text);

  a {
    font-size: 13px;
    font-weight: 600;
    opacity: 0.68;
  }
}
</style>