<template>
  <div class="task-card" :data-id="data.id">
    <router-link :to="taskRoute" class="task-card__label" v-if="data.label">
      {{ data.label }}
    </router-link>
    <div class="task-card__status" v-if="data.status">{{ data.status }}</div>
    <div class="task-card__wrapper">
      <div class="task-card__content">
        <div class="task-card__result" v-if="data.test_completed">
          <p class="task-card__result-info">Тест пройден.</p>
          <p class="task-card__result-value">
            Ты набрал <strong>{{ data.score }}</strong> из {{ 'Y' }}
            {{ plurizeBall }}.
          </p>
        </div>
        <router-link
          :to="taskRoute"
          class="task-card__name"
          v-if="!data.test_completed && data.title"
        >
          {{ data.title }}
        </router-link>
      </div>
      <div class="task-card__image" v-if="data.test_pictures.length">
        <router-link :to="taskRoute" v-if="!data.test_completed">
          <img :src="data.test_pictures[0].picture_path" :alt="data.title" />
        </router-link>
        <img
          v-else
          :src="data.test_pictures[0].picture_path"
          :alt="data.title"
        />
      </div>
    </div>
    <div class="task-card__share" v-if="data.test_completed">
      <a href="#" @click="handleClickPostStory">
        <SvgIcon name="share" />
        <span>Поделиться</span>
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Plurize } from '@/helpers'

export default {
  name: 'TaskCard',
  props: {
    data: {
      id: Number,
      label: String,
      title: String,
      test_pictures: Array,
      test_completed: Boolean,
      status: String,
      result: {
        type: Array[(Number, Number)],
        required: false,
      },
    },
  },
  computed: {
    taskRoute() {
      return `tasks/${this.data.id}`
    },
    plurizeBall() {
      return Plurize(10, 'балл', 'балла', 'баллов')
    },
  },
  methods: {
    handleClickPostStory() {
      // story with bg image
      const pics = this.data.test_pictures
      this.postStory({
        url: pics.length ? pics[0].picture_path : undefined,
      })

      // share dialog
      // this.shareApp()

      // wall post
      // this.postOnWall({
      //   message:
      //     'Сообщение https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRh9vtXvtS9NMPnAErSKvEy8RtdLD2zV6LZiw&usqp=CAU',
      //   // attach: 'photo202119180_456239034',
      // })
    },
    ...mapActions('vk', ['postStory', 'shareApp', 'postOnWall']),
  },
}
</script>

<style lang="scss" scoped>
.task-card {
  margin: 8px 0;
  padding: 16px;
  &__label {
    display: inline-block;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    padding: 6px 18px;
    text-align: center;
    color: rgba($colorGrayLight, 0.56);
    border-radius: 20px;
    border: 1px solid rgba($colorGrayLight, 0.56);
    transition: 0.25s $ease;
    &:hover {
      color: $fontColor;
      border-color: $fontColor;
    }
  }
  &__wrapper {
    margin-top: 8px;
    display: flex;
    align-items: center;
  }
  &__content {
    flex: 1 1 auto;
    padding-right: 8px;
  }
  &__name {
    display: block;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    transition: color 0.25s $ease;
    &:hover {
      color: $colorRed;
    }
  }
  &__image {
    flex: 0 0 auto;
    max-width: 100px;
    img {
      width: 100%;
    }
  }
  &__result-info {
    margin: 0;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
    color: $colorGray;
  }
  &__result-value {
    margin: 1em 0 0;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    color: $colorGrayLight;
    strong {
      font-size: 18px;
    }
  }
  &__status {
    margin: 16px 0;
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
  }
  &__share {
    margin-top: 16px;
    text-align: center;
    a {
      display: inline-flex;
      align-items: center;
      padding: 8px 16px;
      background: transparent;
      border: 1px solid $colorGray;
      color: $colorGray;
      transition: 0.25s $ease;
      .svg-icon {
        margin-right: 8px;
        font-size: 11px;
      }
      span {
        display: inline-block;
        font-family: Avenir;
        font-size: 12px;
        font-weight: 300;
        line-height: 16px;
      }
      &:hover {
        background: $colorRed;
        border-color: $colorRed;
        color: white;
      }
    }
  }
}
</style>
