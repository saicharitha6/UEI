<script lang="ts">
  import Cards from "./Cards.svelte";
  import Video from "$lib/components/Video.svelte";
  import Members from "./Members.svelte";
  import News from "$lib/components/News.svelte";
  import AboutUei from "$lib/components/AboutUEI.svelte";
  import HomeContent from "$lib/components/HomeContent.svelte";
</script>

<div class="flex flex-col mt-10 bg-white min-h-screen">
  <HomeContent />
  <AboutUei />
   <Cards />
  <Video />
  <Members />
  <!-- <News /> -->
</div>
