<template>
  <section>
    <Head />
    <button @click="flushProfileResults" class="test-btn">
      Сбросить результаты
    </button>
    <button @click="disableNotifications" class="test-btn">
      Отключить уведомления
    </button>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Dev',
  methods: {
    ...mapActions('tests', ['flushProfileResults']),
    ...mapActions('vk', ['disableNotifications']),
  },
  computed: {
    ...mapGetters('tests', ['tests']),
  },
}
</script>

<style lang="scss">
.test-btn {
  background: $fontColor;
  color: white;
  margin-left: 20px;
  border-radius: 4px;
  padding: 4px;
  border: 0;
  font-size: 12px;
  cursor: pointer;
}
</style>
