<template>
  <div class="question" ref="container">
    <Container v-if="question">
      <template v-if="!testDone">
        <div
          class="question__title"
          v-if="question.question"
          v-html="question.question"
        ></div>
        <div class="question__list" v-if="question.answer_options">
          <div
            class="question__item"
            v-for="(answer, idx) in question.answer_options"
            :class="{ 'is-active': curAnswer === idx }"
            :key="idx"
            @click="() => handleSelectClick(idx)"
          >
            <div class="question__item-box">
              <SvgIcon name="check" />
            </div>
            <div class="question__item-content" v-html="answer" />
          </div>
        </div>
        <div class="question__cta" @click="handlePostAnswer" v-if="!testDone">
          <a href="#" :class="{ 'is-disabled': curAnswer === null }"
            >Следующий вопрос</a
          >
        </div>
      </template>
      <div class="question__cta" v-if="testDone">
        <p>Тест выполнен. Спасибо</p>
        <router-link :to="`/tasks`">
          Вернуться к тестам
        </router-link>
      </div>
    </Container>

    <Loader v-if="!question" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import { ScrollTo, getTop } from '@/helpers'

export default {
  name: 'TaskQuestion',
  data() {
    return {
      questionIndex: 0,
      curAnswer: null,
      testDone: false,
    }
  },
  props: {},
  computed: {
    test() {
      return this.testById(this.$route.params.id)
    },
    question() {
      if (this.test && this.test.questions_ids) {
        const firstId = this.test.questions_ids[this.questionIndex]

        return this.questionById(firstId)
      }
      return null
    },
    ...mapGetters('tests', ['testById']),
    ...mapGetters('questions', ['questionById']),
  },
  methods: {
    handleSelectClick(id) {
      this.curAnswer = id
    },
    async handlePostAnswer() {
      if (this.curAnswer !== null) {
        const aRes = await this.postAnswer({
          qid: this.question.id,
          aidx: this.curAnswer.toString(),
          session_key: this.test.session_key,
        })

        console.log({ aRes })

        const nextQuestion = this.test.questions_ids[this.questionIndex + 1]

        if (nextQuestion) {
          ScrollTo(getTop(this.$refs.container))
          this.questionIndex++
        } else {
          this.testDone = true
          this.questionIndex = 0
        }

        this.curAnswer = null
      }
    },
    ...mapActions('questions', ['postAnswer']),
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
      &.is-disabled {
        background: $colorGrayLight;
        pointer-events: none;
      }
    }
  }
}
</style>
