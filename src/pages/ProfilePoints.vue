<template>
  <section>
    <Title name="Баллы и уровни" back="/profile" />
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
    value: 0,
    name: 'Student',
  },
  {
    value: 50,
    name: 'Intern',
  },
  {
    value: 150,
    name: 'Associate',
  },
  {
    value: 300,
    name: 'Senior Associate',
  },
  {
    value: 500,
    name: 'Manager',
  },
  {
    value: 700,
    name: 'Senior Manager',
  },
  {
    value: 900,
    name: 'Director',
  },
  {
    value: 1200,
    name: 'Partner',
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
