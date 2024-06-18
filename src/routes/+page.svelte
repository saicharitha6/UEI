<script lang="ts">
  import Cards from "./Cards.svelte";
  import Video from "$lib/components/Video.svelte";
  import Members from "./Members.svelte";
  import HomeContent from "$lib/components/HomeContent.svelte";
</script>

<div class="bg-white h-auto overflow-y-auto mt-20">
  <HomeContent />
   <Cards />
  <Video />
  <Members />
</div>
