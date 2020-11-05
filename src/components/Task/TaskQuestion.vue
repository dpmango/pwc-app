<template>
  <div class="question" ref="container">
    <Container v-if="question">
      <template v-if="!testDone">
        <div
          class="question__title"
          v-if="question.question"
          v-html="question.question"
        ></div>
        <div
          class="question__picture"
          v-if="question.questions_pictures.length"
        >
          <img :src="question.questions_pictures[0].picture_path" />
        </div>
        <div class="question__list" v-if="question.answer_options">
          <TaskAnswer
            v-for="(answer, idx) in question.answer_options"
            :key="idx"
            :id="idx"
            :selected="curAnswer === idx + 1"
            :text="answer"
            :images="question.answers_pictures"
            :comment="answerComment"
            :isCorrect="answerIsCorrect"
            :clickHandler="handleSelectClick"
            :ref="`question_${idx + 1}`"
          />
        </div>
        <div class="question__cta" @click="handleNextClick" v-if="!testDone">
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

    <Loader v-else />
  </div>
</template>

<script>
import cloneDeep from 'lodash/cloneDeep'
import { mapGetters, mapActions } from 'vuex'
import { ScrollTo, getTop } from '@/helpers'

const defaultState = {
  questionIndex: 0,
  curAnswer: null,
  testDone: false,
  answerComment: undefined,
  answerIsCorrect: undefined,
  answerApiResponce: undefined,
}

// TODO reset data when id has changed
export default {
  name: 'TaskQuestion',
  data() {
    return cloneDeep(defaultState)
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
      if (this.answerComment === undefined) {
        this.curAnswer = id + 1
        this.handleNextClick()
      }
    },
    async handleNextClick() {
      // handle next / compleated when comment displayed
      if (this.answerApiResponce) {
        if (!this.answerApiResponce.test_completed) {
          ScrollTo(getTop(this.$refs.container))
          this.questionIndex++
        } else {
          this.testDone = true
          this.questionIndex = 0
        }

        // cleanup state
        this.answerApiResponce = undefined
        this.answerComment = undefined
        this.answerIsCorrect = undefined
        this.curAnswer = null
      } else if (this.curAnswer !== null) {
        // post answer to api
        const aRes = await this.postAnswer({
          qid: this.question.id,
          aidx: this.curAnswer.toString(),
          session_key: this.test.session_key,
        })

        console.log({ aRes })
        this.answerApiResponce = aRes

        // TODO api returns null, assume all are correct now
        // this.answerComment = aRes.comment
        // this.answerIsCorrect = aRes.right_answer ? false : true

        this.answerComment =
          'Крутая идея! И можно сказать, что рабочая. Ведь именно так поступила Gloria Jeans, которая, в 2008 году столкнувшись с обвалом рынка, перевела одну часть сотрудников на производство, а вторую сделала торговыми представителями компании. После такого маневра экономия на зарплатах достигла 100 миллионов рублей, а закрытие представительств помогло сэкономить около восьми миллионов долларов! Stonks!'
        this.answerIsCorrect = true

        ScrollTo(getTop(this.$refs[`question_${this.curAnswer}`][0].$el) - 16)
      }
    },
    ...mapActions('questions', ['postAnswer']),
  },
}
</script>

<style lang="scss">
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
  &__picture {
    margin-top: 16px;
    img,
    picture {
      width: 100%;
    }
  }
  &__list {
    margin: 24px 0;
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
