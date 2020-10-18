<template>
  <section>
    <Head />
    <TaskBanner />
    <div class="task-list">
      <Container>
        <TaskCard v-for="(card, idx) in tasks" :key="idx" :data="card" />
      </Container>
    </div>
  </section>
</template>

<script>
const tasksData = [
  {
    id: 1,
    label: 'Тест',
    name:
      'Представь, что ты уже миллиардер. Пройди тест и узнай, сможешь ли ты приумножить свое состояние.',
    image: 'static/testIllustration_1.svg',
  },
  {
    id: 2,
    label: 'Игра',
    name: 'Технологии в эмоциях',
    image: 'static/testIllustration_2.svg',
  },
  {
    id: 3,
    label: 'тест',
    name: 'Технологии в эмоциях',
    result: [39, 78],
    status: 'Ты – начинающий эксперт. Так держать',
    image: 'static/testIllustration_1.svg',
  },
]
export default {
  name: 'Tasks',
  data() {
    return {
      tasks: tasksData,
    }
  },
}
</script>

<style lang="scss"></style>
