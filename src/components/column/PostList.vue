<template>
  <div class="column-page__list-post">
    <div class="column-page__list-post__row">
      <div
        class="column-page__list-post__row__item"
        v-for="(post, index) in postList"
        :key="index"
      >
        <div class="column-page__list-post__row__item__image">
          <img
            :src="require(`@/assets/images/column/column-${post.image}.jpg`)"
          />
          <p>
            <span>{{ post.date }}</span
            ><span>{{ post.time }}</span>
          </p>
        </div>
        <p class="column-page__list-post__row__item__text">
          {{ post.text }}
        </p>
        <div class="column-page__list-post__row__item__hashtag">
          <span v-for="(tag, idxTag) in post.hashtag" :key="idxTag"
            >#{{ tag }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "PostList",
  computed: {
    ...mapState("column", ["postList"]),
  },
};
</script>

<style scoped></style>
