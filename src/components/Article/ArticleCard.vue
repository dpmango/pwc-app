<template>
  <div class="ac" :data-id="data.id">
    <div class="ac__head">
      <router-link :to="`/articles/${data.id}`" class="ac__title">
        {{ data.title }}
      </router-link>
      <div class="ac__datetime" v-if="data.published_at">
        {{ dateFormated }}
      </div>
    </div>
    <router-link to="/articles/1" class="ac__image" v-if="data.image">
      <img
        :src="data.image"
        :srcset="data.image2x ? `${data.image2x} 2x` : null"
        alt=""
      />
    </router-link>
    <div class="ac__metrics">
      <button
        type="button"
        class="ac__likes"
        :class="{ 'is-active': data.like }"
        @click="handleLikeClick"
      >
        <SvgIcon name="like-filled" />
        <SvgIcon name="like-outline" />
        <span>{{ data.likes_count }}</span>
      </button>
      <button
        type="button"
        class="ac__shares"
        :class="{ 'is-active': data.repost }"
        @click="handleShareClick"
      >
        <SvgIcon name="share" />
        <span>{{ data.reposts_count }}</span>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import moment from 'moment'

export default {
  name: 'ArticleCard',
  data() {
    return {
      likePending: false,
      sharePending: false,
    }
  },
  props: {
    data: {
      id: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      published_at: Number,
      image: String,
      image2x: String,
      likes_count: {
        type: Number,
        default: 0,
      },
      reposts_count: {
        type: Number,
        default: 0,
      },
      like: Boolean,
      repost: Boolean,
    },
  },
  computed: {
    dateFormated() {
      const m = moment.unix(this.data.published_at)
      try {
        return m.format('MM/DD/YY')
      } catch (e) {
        return ''
      }
    },
  },
  methods: {
    async handleLikeClick() {
      if (this.likePending) return
      this.likePending = true
      await this.likePublication(this.data.id)
      this.likePending = false
    },
    async handleShareClick() {
      if (this.sharePending) return
      this.sharePending = true
      await this.sharePublication(this.data.id)
      this.sharePending = false
    },
    ...mapActions('publications', ['likePublication', 'sharePublication']),
  },
}
</script>

<style lang="scss" scoped>
.ac {
  padding-top: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid $colorBorder;
  &:last-child {
    border-bottom: 0;
  }
  &__head {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }
  &__title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    padding-right: 10px;
    transition: color 0.25s $ease;
    &:hover {
      color: $colorRed;
    }
  }
  &__datetime {
    flex: 0 0 auto;
    margin-left: auto;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    color: $colorGrayLight;
  }
  &__image {
    margin: 16px 0;
    font-size: 0;
    img,
    picture {
      width: 100%;
    }
    transition: opacity 0.25s $ease;
    &:hover {
      opacity: 0.75;
    }
  }
  &__metrics {
    margin-top: 16px;
    display: flex;
    align-items: center;
  }
  &__likes,
  &__shares {
    position: relative;
    -webkit-appearance: none;
    background: transparent;
    box-shadow: none;
    border: 0;
    display: inline-flex;
    align-items: center;
    padding: 0;
    min-height: 22px;
    cursor: pointer;
    color: $colorGrayLight;
    transition: 0.25s $ease;
    span {
      display: inline-block;
      font-family: Avenir;
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      margin-left: 8px;
    }
    .svg-icon {
      font-size: 20px;
      transition: opacity 0.25s $ease, transform 0.25s $ease;
      &--share {
        font-size: 22px;
      }
    }
    &:hover {
      color: $fontColor;
    }
  }
  &__likes {
    margin-right: 24px;
    .svg-icon {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      transform-origin: center center;
    }
    span {
      padding-left: 22px;
    }
    .svg-icon--like-filled {
      opacity: 0;
    }
    .svg-icon--like-outline {
      opacity: 1;
    }
    &.is-active {
      color: #e0301e;
      .svg-icon {
        transform: scale(1.25) translateY(-50%);
      }
      .svg-icon--like-filled {
        opacity: 1;
      }
      .svg-icon--like-outline {
        opacity: 0;
      }
    }
  }
  &__shares {
    &.is-active {
      color: $colorPrimary;
    }
  }
}
</style>
