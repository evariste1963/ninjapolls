import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "Python or Javascript?",
    answerA: "Python",
    answerB: "Javascript",
    votesA: 9,
    votesB: 15,
  },
  {
    id: 2,
    question: "big or small?",
    answerA: "bigg...ish!",
    answerB: "yeah, small!",
    votesA: 45,
    votesB: 90,
  },
]);

export default PollStore;
