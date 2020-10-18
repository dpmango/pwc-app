<template>
  <div class="task-card" :data-id="data.id">
    <div class="task-card__label" v-if="data.label">{{ data.label }}</div>
    <div class="task-card__status" v-if="data.status">{{ data.status }}</div>
    <div class="task-card__wrapper">
      <div class="task-card__content">
        <div class="task-card__result" v-if="data.result">
          <p class="task-card__result-info">Тест пройден.</p>
          <p class="task-card__result-value">
            Ты набрал <strong>{{ data.result[0] }}</strong> из
            {{ data.result[1] }} {{ plurizeBall }}.
          </p>
        </div>
        <div class="task-card__name" v-if="!data.result && data.name">
          {{ data.name }}
        </div>
      </div>
      <div class="task-card__image" v-if="data.image">
        <img :src="data.image" :alt="data.name" />
      </div>
    </div>
    <div class="task-card__share" v-if="data.result">
      <a href="#">
        <SvgIcon name="share" />
        <span>Поделиться</span>
      </a>
    </div>
  </div>
</template>

<script>
import { Plurize } from '@/helpers'

export default {
  name: 'TaskCard',
  props: {
    data: {
      id: Number,
      label: String,
      name: String,
      image: String,
      result: {
        type: Array[(Number, Number)],
        required: false,
      },
    },
  },
  computed: {
    plurizeBall() {
      return Plurize(this.data.result[1], 'балл', 'балла', 'баллов')
    },
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
    font-size: 14px;
    font-weight: 700;
    line-height: 22px;
  }
  &__image {
    flex: 0 0 auto;
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
