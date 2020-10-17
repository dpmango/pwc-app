<template>
  <section>
    <Title name="Баллы и уровни" />
    <div class="profile-points">
      <Container>
        <ProfileLevel
          v-for="(score, idx) in scores"
          :key="idx"
          :score="score.value"
          :prevScore="idx > 0 ? scores[idx - 1].value : 0"
          :name="score.name"
        />
      </Container>
    </div>
  </section>
</template>

<script>
const scoresData = [
  {
    value: 100,
    name: 'Intern',
  },
  {
    value: 200,
    name: 'Associate',
  },
  {
    value: 300,
    name: 'Senior Associate',
  },
  {
    value: 400,
    name: 'Manager',
  },
  {
    value: 500,
    name: 'Senior Manager',
  },
]

export default {
  name: 'ProfilePoints',
  data() {
    return {
      scores: scoresData,
    }
  },
}
</script>

<style lang="scss" scoped>
.profile-points {
  margin: 24px 0 0;
}
</style>
