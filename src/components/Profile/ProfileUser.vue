<template>
  <div class="p-user">
    <Container>
      <div class="p-user__wrapper">
        <div class="p-user__avatar">
          <img :src="profile.photo_100" :srcset="`${profile.photo_200} 2x`" />
        </div>
        <div class="p-user__content">
          <div class="p-user__name">
            {{ profile.first_name }} {{ profile.last_name }}
          </div>
          <div class="p-user__level" v-if="personalCard.level">
            <ProfileLevelLabel :name="personalCard.level" isActive isVerified />
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'ProfileUser',
  computed: {
    ...mapGetters('vk', ['profile', 'personalCard']),
  },
}
</script>

<style lang="scss" scoped>
.p-user {
  margin: 16px 0;
  &__wrapper {
    display: flex;
    align-items: center;
  }
  &__avatar {
    position: relative;
    z-index: 1;
    width: 100%;
    flex: 0 0 96px;
    width: 96px;
    height: 96px;
    border-radius: 50%;
    overflow: hidden;
    font-size: 0;
    img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
  &__content {
    padding-left: 24px;
  }
  &__name {
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;
  }
  &__level {
    margin-top: 8px;
  }
}
</style>
