<template>
  <div class="ac">
    <div class="ac__head">
      <router-link to="/articles/1" class="ac__title">
        {{ data.title }}
      </router-link>
      <div class="ac__datetime" v-if="data.datetime">
        {{ data.datetime }}
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
      <button class="ac__likes">
        <!-- <SvgIcon name="like-filled" /> -->
        <SvgIcon name="like-outline" />
        <span>{{ data.likeCount }}</span>
      </button>
      <button class="ac__shares">
        <SvgIcon name="share" />
        <span>{{ data.shareCount }}</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleCard',
  props: {
    data: {
      title: {
        type: String,
        required: true,
      },
      datetime: String,
      image: String,
      image2x: String,
      likeCount: {
        type: Number,
        default: 0,
      },
      shareCount: {
        type: Number,
        default: 0,
      },
    },
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
    img {
      max-width: 100%;
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
    -webkit-appearance: none;
    background: transparent;
    box-shadow: none;
    border: 0;
    display: inline-flex;
    align-items: center;
    padding: 0;
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
      &--share {
        font-size: 22px;
      }
    }
  }
  &__likes {
    margin-right: 24px;
  }
}
</style>
