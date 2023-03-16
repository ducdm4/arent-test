import { randomInteger } from "@/lib/common";

export default {
  ADD_POST_LIST(state) {
    for (let i = 0; i < 8; i++) {
      state.postList.push({
        image: randomInteger(1, 8),
        date: "2021.05.17",
        time: "23:25",
        text: "魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…",
        hashtag: ["魚料理", "和食", "DHA"],
      });
    }
  },
};
