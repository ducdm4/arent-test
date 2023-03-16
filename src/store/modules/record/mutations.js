import { randomInteger } from "@/lib/common";

export default {
  INIT_EXERCISE_LIST(state) {
    for (let i = 1; i < 30; i++) {
      state.exerciseList.push({
        title: "家事全般（立位・軽い）",
        kcal: `${randomInteger(0, 100)}kcal`,
        time: `${randomInteger(0, 100)}min`,
      });
    }
  },
  ADD_DIARY_LIST(state) {
    for (let i = 0; i < 8; i++) {
      state.diaryList.push({
        date: "2021.05.21",
        time: "23:25",
        text: "私の日記の記録が一部表示されます。 テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
      });
    }
  },
};
