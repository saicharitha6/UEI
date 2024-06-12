<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import member1 from "$lib/assets/images/member1.png";
  import member2 from "$lib/assets/company-icons/chargezone.png";
  import member3 from "$lib/assets/company-icons/sheru.png";
  import member4 from "$lib/assets/company-icons/isof.png";
  import member5 from "$lib/assets/images/image3.jpg";
  import member6 from "$lib/assets/images/image4.jpg";
  import member7 from "$lib/assets/company-icons/thunder.png";
  import { isActiveTab } from "$lib/store";

  let activeTab: string = "";
  const unsubscribe = isActiveTab.subscribe((value) => (activeTab = value));

  onDestroy(unsubscribe);

  function todo() {
    isActiveTab.set("");
  }

  let members = [member1, member2, member3, member4, member5, member6, member7];
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

<h3 class="text-3xl text-black text-center font-bold">Member Participants</h3>

<div class="mx-auto max-w-screen-xl">
  <a href="/participants" on:click={todo}>
    <div
      class="flex items-center space-x-1 overflow-x-auto mb-10 scrollbar-hide participantList"
    >
      {#each members as member}
        <img src={member} alt="Member" class="w-35 h-24 space-x-1 rounded-md" />
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
