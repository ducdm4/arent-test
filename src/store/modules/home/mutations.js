export default {
  GENERATE_DATA_FOR_LIST_ITEM(state, payload) {
    state.listItem = state.listItem.concat(payload);
  },
};
