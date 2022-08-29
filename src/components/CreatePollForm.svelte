<script>
  import PollStore from "../stores/PollStore.js";
  import { createEventDispatcher } from "svelte";
  const dispatch = createEventDispatcher();

  import Button from "../shared/button.svelte";
import { each } from "svelte/internal";

  let fields = { question: "", answerA: "", answerB: "" };
  let errors = { question: "", answerA: "", answerB: "" };
  let valid = false;

  const submitHandler = (e) => {
    valid = true;
    // validate question
    if (fields.question.trim().length < 5) {
      valid = false;
      errors.question = "Question must be at least 5 characters long";
    } else {
      errors.question = "";
    }
    // validate answerA
    if (fields.answerA.trim().length < 1) {
      valid = false;
      errors.answerA = "Answer A cannot be empty";
    } else {
      errors.answerA = "";
    }
    // validate answerB
    if (fields.answerB.trim().length < 1) {
      valid = false;
      errors.answerB = "Answer B cannot be empty";
    } else {
      errors.answerB = "";
    }

    //add new poll
    if (valid) {
      let poll = { ...fields, votesA: 0, votesB: 0, id: Math.random() };
      // save poll to store
      PollStore.update((currentPolls) => {
        return [poll, ...currentPolls];
      });
      dispatch("add");
    }
  };

</script>



<form action="" on:submit|preventDefault={submitHandler}>
  <div class="form-field">
    <label for="question">Poll Question</label>
    <input type="text" id="question" bind:value={fields.question} />
  </div>
  <div class="error">{errors.question}</div>
  <div class="form-field">
    <label for="answer-a">Answer A</label>
    <input type="text" id="answer-a" bind:value={fields.answerA} />
  </div>
  <div class="error">{errors.answerA}</div>
  <div class="form-field">
    <label for="answer-b">Answer B</label>
    <input type="text" id="answer-b" bind:value={fields.answerB} />
  </div>
  <div class="error">{errors.answerB}</div>
  <Button type={"secondary"} flat={false}>Add Poll</Button>
</form>

<style>
  form {
    width: 400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-field {
    margin: 12px auto;
  }
  input {
    width: 100%;
    border-radius: 6px;
  }
  label {
    margin: 10px auto;
    text-align: left;
  }
  .error {
    font-weight: bold;
    font-size: 12px;
    color: #d91b42;
    font-style: italic;
    text-align: left;
  }
</style>
