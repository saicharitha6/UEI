<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import member1 from "../lib/images/member1.png";
  import member2 from "../assets/chargezone.png";
  import member3 from "../assets/sheru.png";
  import member4 from "../assets/isof.png";
  // import member5 from "../lib/images/member2.png";
  import member6 from "../lib/images/image3.jpg";
  import member7 from "../lib/images/image4.jpg";
  import member8 from "../assets/thunder.png";

  let members = [member1, member2, member3, member4,  member6, member7, member8];
  let container: HTMLElement | null = null;
  let interval: number | null = null;

  onMount(() => {
    container = document.querySelector(".participantList");
    if (container) {
      // Duplicate items to create infinite scrolling effect
      container.innerHTML += container.innerHTML;

      interval = setInterval(() => {
        if (container) {
          container.scrollLeft += 1; // Adjust scroll speed as needed
          if (container.scrollLeft >= container.scrollWidth / 2) {
            container.scrollLeft = 0; // Reset to the start of the original items
          }
        }
      }, 20); // Adjust scroll interval as needed
    }
  });

  onDestroy(() => {
    if (interval) {
      clearInterval(interval);
    }
  });
</script>

<h3 class="text-3xl text-green-500 text-center font-bold mb-5">
  Member Participants
</h3>

<div class="mx-auto max-w-screen-xl">
  <a href="/participants">
    <div class="flex items-center space-x-7 overflow-x-auto mb-10 scrollbar-hide participantList">
      {#each members as member}
        <img
          src={member}
          alt="Member"
          class="w-35 h-24 justify-between space-x-5 rounded-md"
        />
      {/each}
    </div>
  </a>
</div>

<style>
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .participantList {
    white-space: nowrap;
  }
  .participantList img {
    display: inline-block;
  }
</style>