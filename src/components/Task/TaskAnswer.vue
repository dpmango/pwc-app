<template>
  <div
    class="answer"
    ref="answer"
    :class="{
      'is-active': selected,
      'is-correct': selected && isCorrect === true,
      'is-wrong': selected && isCorrect === false,
    }"
  >
    <div
      class="answer__container"
      :class="{ 'is-active': selected }"
      @click="() => clickHandler(id)"
    >
      <div class="answer__box">
        <SvgIcon name="check" />
        <SvgIcon name="close" />
      </div>
      <div class="answer__content" v-html="content" />
    </div>
    <div class="answer__comment" v-if="selected && comment" v-html="comment" />
  </div>
</template>

<script>
export default {
  name: 'TaskAnswer',
  props: {
    id: {
      type: Number,
      required: true,
    },
    selected: {
      type: Boolean,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: false,
    },
    clickHandler: {
      type: Function,
      required: true,
    },
    comment: {
      type: String,
      required: false,
    },
    isCorrect: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    image() {
      // find inside all question images
      if (this.images) {
        return this.images.find(p => p.answer_number === this.id + 1)
      }
      return null
    },
    content() {
      const image = this.image ? `<img src="${this.image.picture_path}" />` : ''
      return this.text + image
    },
  },
  methods: {
    getRefDom() {
      return this.$refs.answer
    },
  },
}
</script>

<style lang="scss">
.answer {
  margin-bottom: 8px;
  &.is-active {
    .answer__container {
      border-color: $fontColor;
    }
    .answer__box {
      background: $fontColor;
      .svg-icon--check {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
      .svg-icon--close {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0);
      }
    }
  }
  &.is-correct {
    .answer__container {
      border-color: #175d2d;
    }
    .answer__box {
      background: #175d2d;
    }
  }
  &.is-wrong {
    .answer__container {
      border-color: #e0301e;
    }
    .answer__box {
      background: #e0301e;
      .svg-icon--check {
        opacity: 0;
        transform: translate(-50%, -50%) scale(0);
      }
      .svg-icon--close {
        opacity: 1;
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  &:last-child {
    margin-bottom: 0;
  }
  &__container {
    display: flex;
    align-items: center;
    padding: 16px;
    background: #ffffff;
    border: 1px solid rgba(10, 10, 20, 0.04);
    cursor: pointer;
    transition: border 0.25s $ease;
  }
  &:hover {
    border-color: $fontColor;
  }
  &__box {
    position: relative;
    flex: 0 0 24px;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    font-size: 9px;
    background: $colorBorder;
    color: white;
    .svg-icon {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 2;
      opacity: 0;
      transform: translate(-50%, -50%) scale(0);
      will-change: transform;
      transition: 0.25s $ease;
    }
  }
  &__content {
    padding-left: 16px;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    p {
      margin: 0;
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
    }
    img,
    picture {
      margin-top: 8px;
      display: block;
      max-width: 100%;
    }
  }
  &__comment {
    margin-top: 16px;
    margin-bottom: 16px;
    background: rgba($colorBorder, 0.24);
    padding: 16px;
    p {
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
      margin: 0;
    }
    p + p {
      margin-top: 1em;
    }
  }
}
</style>
