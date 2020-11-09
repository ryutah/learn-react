import { configureStore, createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => state + 1,
    decrement: (state) => state - 1,
  },
});

const { increment, decrement } = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});
const valueEl = document.querySelector("#value");

function render() {
  if (valueEl === null) {
    return;
  }
  valueEl.innerHTML = store.getState().toString();
}

render();
store.subscribe(render);

document.querySelector("#increment")?.addEventListener("click", () => {
  store.dispatch(increment());
});
document.querySelector("#decrement")?.addEventListener("click", () => {
  store.dispatch(decrement());
});
document.querySelector("#incrementIfOdd")?.addEventListener("click", () => {
  if (store.getState() % 2 !== 0) {
    store.dispatch(increment());
  }
});
document.querySelector("#incrementAsync")?.addEventListener("click", () => {
  setTimeout(() => store.dispatch(increment()), 1000);
});
