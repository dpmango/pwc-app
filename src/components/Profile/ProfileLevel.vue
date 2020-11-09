<template>
  <div class="p-label" :class="{ 'is-past': isPast, 'is-current': isCurrent }">
    <div class="p-label__wrapper">
      <div class="p-label__score">
        <div class="p-label__score-progress">
          <radial-progress-bar
            :diameter="80"
            :completed-steps="radialProgress"
            :total-steps="scoreCurrentLevel"
            :stroke-width="4"
            :inner-stroke-width="4"
            start-color="#D93954"
            stop-color="#D93954"
            inner-stroke-color="#DEDEDE"
            stroke-linecap="butt"
          >
          </radial-progress-bar>
          <div class="radial-stripes-wrap">
            <div class="radial-stripes-wrap__inner">
              <div class="radial-stripes">
                <div
                  v-for="step in radialTurns"
                  class="radial-stripes__turn"
                  :key="step"
                  :style="`transform: rotate(${step / radialTurns.length}turn)`"
                >
                  <div class="radial-stripes__inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="p-label__score-number">
          <span>{{ score }}</span>
        </div>
      </div>
      <div class="p-label__content">
        <ProfileLevelLabel
          :name="name"
          :isActive="isCurrent || isPast"
          :isVerified="isPast"
        />
        <div class="p-label__text">
          <template v-if="isPast">Ты успешно прошел этот уровень</template>
          <template v-else-if="isCurrent">
            До следующего уровня тебе не хватает {{ scoreLeftText }}
          </template>
          <template v-else>Этот уровень тебе пока еще недоступен</template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import RadialProgressBar from 'vue-radial-progress'
import { Plurize } from '@/helpers'

export default {
  name: 'ProfileLevel',
  components: {
    RadialProgressBar,
  },
  data() {
    return {
      radialTurns: [...Array(12).keys()],
    }
  },
  props: {
    score: Number,
    name: String,
    prevScore: Number,
  },
  computed: {
    userScore() {
      return this.personalCard ? this.personalCard.points : 0
    },
    isPast() {
      return this.userScore >= this.score
    },
    isCurrent() {
      return this.userScore > this.prevScore && this.userScore < this.score
    },
    scoreCurrentLevel() {
      return this.score - this.prevScore
    },
    scoreDiff() {
      return this.score - this.userScore
    },
    scoreLeftText() {
      const plural = Plurize(this.scoreDiff, 'балл', 'балла', 'баллов')
      return `${this.scoreDiff} ${plural}`
    },
    radialProgress() {
      if (this.isPast) {
        return this.scoreCurrentLevel
      } else if (this.isCurrent) {
        return this.scoreCurrentLevel - this.scoreDiff
      } else {
        return 0
      }
    },
    ...mapGetters('vk', ['personalCard']),
  },
}
</script>

<style lang="scss" scoped>
.p-label {
  background: #f5f5f5;
  margin-bottom: 16px;
  padding: 16px;
  border: 1px solid transparent;
  color: rgba($fontColor, 0.56);
  &.is-past {
    background: $colorGray;
    color: white;
    .p-label__score-number {
      background: white;
      color: $colorRed;
    }
    .radial-stripes__inner {
      background: $colorGray;
    }
  }
  &.is-current {
    background: transparent;
    border-color: rgba($colorGray, 0.56);
    .p-label__score-number {
      background: $colorRed;
    }
    .radial-stripes__inner {
      background: white;
    }
  }
  &:last-child {
    margin-bottom: 0;
  }
  &__wrapper {
    display: flex;
    align-items: center;
  }
  &__score {
    position: relative;
    flex: 0 0 72px;
    width: 72px;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &__score-progress {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__score-number {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    overflow: hidden;
    background: rgba($colorGrayLight, 0.72);
    color: white;
    span {
      font-family: Avenir;
      font-size: 18px;
      font-weight: 800;
      line-height: 25px;
    }
  }
  &__content {
    flex: 1 1 auto;
    padding-left: 16px;
  }
  &__text {
    margin-top: 4px;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
  }
}

.radial-stripes-wrap {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.radial-stripes-wrap__inner {
  position: relative;
  flex: 1 0 auto;
}

.radial-stripes {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__turn {
    position: absolute;
    height: 100%;
  }
  &__inner {
    background: #f5f5f5;
    width: 2px;
    height: 10%;
  }
}
</style>
