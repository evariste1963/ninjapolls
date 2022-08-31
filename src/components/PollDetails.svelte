<script>
  import PollStore from "../stores/PollStore";
  import Card from "../shared/Card.svelte";
  import Button from "../shared/Button.svelte";
  import { tweened } from "svelte/motion";

  export let poll;

  //reactive values
  $: totalVotes = poll.votesA + poll.votesB;
  $: percentA = Math.floor((100 / totalVotes) * poll.votesA) || 0;
  $: percentB = Math.floor((100 / totalVotes) * poll.votesB) || 0;

  //teaned percentages
  const tweenedA = tweened(0);
  const tweenedB = tweened(0);

  $: tweenedA.set(percentA);
  $: tweenedB.set(percentB);
  //handling Votes
  const handleVote = (option, id) => {
    PollStore.update((currentPolls) => {
      let copiedPolls = [...currentPolls];
      let upVotedPoll = copiedPolls.find((poll) => poll.id == id);

      option === "a" ? upVotedPoll.votesA++ : upVotedPoll.votesB++;

      return copiedPolls;
    });
  };

  const handleDelete = (id) => {
    PollStore.update((currentPolls) => {
      return currentPolls.filter((poll) => poll.id !== id);
    });
  };
</script>

<Card>
  <div class="poll">
    <div class="title">
      <h3 style="margin-left:2px">{poll.question}</h3>
      <Button
        margin={"margin-top:0"}
        flat={true}
        on:click={() => handleDelete(poll.id)}>Delete</Button
      >
    </div>
    <p>Total votes: {totalVotes}</p>
    <div class="answer" on:click={() => handleVote("a", poll.id)}>
      <div class="percent percent-a" style="width:{$tweenedA}%" />
      <span>{poll.answerA} ({poll.votesA})</span>
    </div>
    <div class="answer" on:click={() => handleVote("b", poll.id)}>
      <div class="percent percent-b" style="width:{$tweenedB}%" />
      <span>{poll.answerB} ({poll.votesB})</span>
    </div>
  </div>
</Card>

<style>
  .title {
    display: flex;
  }
  h3 {
    margin: 0 auto;
  }

  p {
    margin-top: 6px;
    font-size: 14px;
    color: #aaa;
    margin-bottom: 30px;
  }
  .answer {
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
  }
  .answer:hover {
    opacity: 0.6;
  }
  span {
    display: inline-block;
    padding: 10px 20px;
  }
  .percent {
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }
  .percent-a {
    border-left: 4px solid #d91b42;
    background: rgba(217, 27, 66, 0.2);
  }
  .percent-b {
    border-left: 4px solid #45c496;
    background: rgba(69, 196, 150, 0.2);
  }
</style>
