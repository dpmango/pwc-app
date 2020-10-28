<template>
  <div class="question" v-if="question">
    <Container>
      <div
        class="question__title"
        v-if="question.question"
        v-html="question.question"
      ></div>
      <div class="question__list" v-if="question.answer_options">
        <div
          class="question__item"
          :class="{ 'is-active': activeId === idx }"
          v-for="(answer, idx) in question.answer_options"
          :key="idx"
          @click="() => handleClick(idx)"
        >
          <div class="question__item-box">
            <SvgIcon name="check" />
          </div>
          <div class="question__item-content">
            {{ answer }}
          </div>
        </div>
      </div>
      <div class="question__cta">
        <a href="#">Следующий вопрос</a>
      </div>
    </Container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'TaskQuestion',
  data() {
    return {
      activeId: null,
    }
  },
  props: {},
  computed: {
    test() {
      return this.testById(this.$route.params.id)
    },
    question() {
      return this.test && this.test.questions_ids
        ? this.questionById(this.test.questions_ids[0])
        : null
    },
    ...mapGetters('tests', ['testById']),
    ...mapGetters('questions', ['questionById']),
  },
  methods: {
    handleClick(id) {
      this.activeId = id
    },
  },
}
</script>

<style lang="scss" scoped>
.question {
  margin: 24px 0 24px;
  &__title {
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    img,
    picture {
      margin-top: 16px;
      width: 100%;
    }
  }
  &__list {
    margin: 24px 0;
  }
  &__item {
    display: flex;
    align-items: center;
    padding: 16px;
    background: #ffffff;
    border: 1px solid rgba(10, 10, 20, 0.04);
    cursor: pointer;
    margin-bottom: 8px;
    transition: border 0.25s $ease;
    &:last-child {
      margin-bottom: 0;
    }
    &.is-active {
      border-color: $fontColor;
      .question__item-box {
        background: $fontColor;
        .svg-icon {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
      }
    }
    &:hover {
      border-color: $fontColor;
    }
  }
  &__item-box {
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
  &__item-content {
    padding-left: 16px;
    p {
      margin: 0;
      font-size: 12px;
      font-weight: 400;
      line-height: 14px;
    }
    img,
    picture {
      max-width: 100%;
    }
    p + img,
    p + picture {
      margin-top: 8px;
    }
  }
  &__cta {
    margin-top: 24px;
    a {
      display: block;
      padding: 20px;
      background: $fontColor;
      color: white;
      font-family: Avenir;
      font-size: 12px;
      font-weight: 800;
      line-height: 16px;
      text-align: center;
      transition: 0.25s $ease;
      &:hover {
        background: $colorRed;
      }
    }
  }
}
</style>
