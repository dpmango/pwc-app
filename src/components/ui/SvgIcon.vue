<template>
  <svg
    :style="{ width: width }"
    :class="className"
    xmlns="http://www.w3.org/2000/svg"
  >
    <use :xlink:href="iconPath" xmlns:xlink="http://www.w3.org/1999/xlink" />
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',
  data() {
    return {
      content: undefined,
      width: '1em',
    }
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  created() {
    try {
      let icon = require(`@/assets/icons/${this.name}.svg`)
      const size = icon.default.viewBox.split(' ').slice(2)
      if (size.length === 2) {
        const ratio = `${(size[0] / size[1]).toFixed(2)}em`
        this.width = ratio
      }
    } catch (err) {
      console.log(err)
    }
  },
  computed: {
    iconPath() {
      return `#${this.name}`
    },
    className() {
      return 'svg-icon svg-icon--' + this.name
    },
  },
}
</script>

<style lang="scss">
.svg-icon {
  display: inline-block;
  vertical-align: baseline;
  fill: currentColor;
  height: 1em;
  /* transition: opacity 0.25s ease-in-out; */
}
</style>
