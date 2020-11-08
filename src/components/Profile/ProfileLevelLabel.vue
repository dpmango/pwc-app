<template>
  <div class="pl-label" :class="{ active: isActive, verified: isVerified }">
    <span>{{ name }}</span>
    <SvgIcon name="verification" v-if="isVerified" />
  </div>
</template>

<script>
export default {
  name: 'ProfileLevelLabel',
  props: {
    name: {
      type: String,
      required: true,
    },
    isVerified: Boolean,
    isActive: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.pl-label {
  min-width: 106px;
  display: inline-flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  padding: 6px;
  color: white;
  background: rgba($colorGrayLight, 0.87);
  span {
    font-family: Avenir;
    font-size: 12px;
    font-weight: 800;
    line-height: 16px;
  }
  .svg-icon {
    font-size: 11px;
    margin-left: 6px;
  }
  &.active {
    background-color: $colorRed;
  }
  // &.verified {
  // }
}
</style>
