<template>
  <div class="static">
    <Container>
      <div class="static__wysiwyg" v-html="bodyContent"></div>
    </Container>
  </div>
</template>

<script>
import content from './content'

export default {
  name: 'StaticContent',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    bodyContent() {
      return content[this.name]
    },
  },
}
</script>

<style lang="scss">
.static {
  margin: 16px 0;
  &__wysiwyg {
    margin: 16px 0;
    h1 {
      font-size: 22px;
      font-weight: 700;
      line-height: 28px;
    }
    p {
      margin: 16px 0;
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
    }
    img,
    picture {
      max-width: 100%;
    }
  }
}
</style>
