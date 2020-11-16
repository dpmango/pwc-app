<template>
  <div class="f-popular">
    <div class="f-popular__head">
      <Container>
        <div class="f-popular__head-wrapper">
          <div class="f-popular__title">{{ title }}</div>
          <a v-if="!hideMoreLink" class="f-popular__title-link">
            <span>Все</span>
            <SvgIcon name="arrow-right" />
          </a>
        </div>
      </Container>
    </div>

    <div class="f-popular__content">
      <swiper ref="feedSwiper" :options="swiperOptions">
        <swiper-slide v-for="p in publicationsPinned" :key="p.id">
          <router-link :to="`/articles/${p.id}`" class="popular-card">
            <div class="popular-card__background" v-if="p.cover_picture">
              <img :src="p.cover_picture.picture_path" />
            </div>
            <div class="popular-card__content">
              <div class="popular-card__title">
                {{ p.title }}
              </div>
            </div>
            <div class="popular-card__bookmark">
              <SvgIcon name="bookmark" />
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'

export default {
  name: 'FeedPopular',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOptions: {
        watchOverflow: true,
        slidesPerView: 'auto',
        spaceBetween: 16,
        slidesOffsetBefore: 24,
        slidesOffsetAfter: 24,
        freeMode: true,
        freeModeSticky: true,
      },
    }
  },
  props: {
    title: String,
    hideMoreLink: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    ...mapGetters('publications', ['publicationsPinned']),
  },
  directives: {
    swiper: directive,
  },
}
</script>

<style lang="scss" scoped>
@import '@/theme/vendor/swiper.css';

.f-popular {
  padding: 16px 0;
  max-width: 100%;
  // &__head {
  // }
  &__head-wrapper {
    display: flex;
    align-items: center;
  }
  &__title {
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    padding-right: 10px;
  }
  &__title-link {
    flex: 0 0 auto;
    margin-left: auto;
    display: inline-flex;
    align-items: center;
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    color: $colorGray;
    span {
      display: inline-block;
      margin-right: 8px;
    }
    &:hover {
      .svg-icon {
        transform: translateX(4px);
      }
    }
    .svg-icon {
      font-size: 8px;
      will-change: transform;
      transition: transform 0.25s $ease;
    }
  }
  &__content {
    margin-top: 10px;
    .swiper-container {
      width: 100vw;
      max-width: 480px;
      min-width: 1px;
    }
    .swiper-slide {
      padding-top: 2px;
      flex: 0 0 125px;
      max-width: 125px;
    }
  }
}

.popular-card {
  display: block;
  position: relative;
  z-index: 1;
  &__background {
    position: relative;
    z-index: 1;
    font-size: 0;
    min-height: 160px;
    img,
    picture {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__content {
    position: absolute;
    z-index: 2;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px 8px;
    color: white;
  }
  &__title {
    font-family: Avenir;
    font-size: 12px;
    font-weight: 800;
    line-height: 16px;
  }
  &__bookmark {
    position: absolute;
    z-index: 2;
    right: 10px;
    top: -2px;
    color: $colorRed;
    font-size: 28px;
  }
}
</style>
