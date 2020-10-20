<template>
  <div class="article">
    <Container>
      <h1 class="article__title">
        PwC – международная сеть компаний, оказывающих услуги в области аудита и
        консалтинга.
      </h1>
      <div class="article__cover">
        <img
          src="/static/articleCover.jpg"
          srcset="/static/articleCover@2x.jpg 2x"
        />
      </div>
      <div class="article__wysiwyg">
        <p>
          PwC предоставляет аудиторские и консультационные услуги, а также
          услуги в области налогообложения и юридические услуги публичным и
          частным компаниям разных отраслей. Благодаря опыту, накопленному
          нашими сотрудниками, объединенному с обширными знаниями специалистов
          международной сети, мы готовы оказать вам содействие в развитии вашего
          бизнеса как в России, так и за рубежом.
        </p>
        <img
          src="/static/articleCover.jpg"
          srcset="/static/articleCover@2x.jpg 2x"
        />
        <p>
          PwC предоставляет аудиторские и консультационные услуги, а также
          услуги в области налогообложения и юридические услуги публичным и
          частным компаниям разных отраслей. Благодаря опыту, накопленному
          нашими сотрудниками, объединенному с обширными знаниями специалистов
          международной сети, мы готовы оказать вам содействие в развитии вашего
          бизнеса как в России, так и за рубежом.
        </p>
      </div>
    </Container>
  </div>
</template>

<script>
export default {
  name: 'ArticleContent',
  props: {},
}
</script>

<style lang="scss" scoped>
.article {
  margin: 16px 0;
  &__title {
    font-size: 22px;
    font-weight: 700;
    line-height: 28px;
  }
  &__cover {
    margin: 16px 0;
    text-align: center;
    font-size: 0;
    img,
    picture {
      width: 100%;
    }
  }
  &__wysiwyg {
    margin: 16px 0;
    p {
      margin: 16px 0;
      font-size: 15px;
      font-weight: 400;
      line-height: 25px;
    }
    img,
    picture {
      max-width: 100%;
    }
  }
}
</style>
