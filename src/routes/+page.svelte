<script lang="ts">
  import Cards from "./Cards.svelte";
  import Video from "$lib/components/Video.svelte";
  import Members from "./Members.svelte";
  import MainContent from "$lib/components/MainContent.svelte";
  import Background from "$lib/components/backgroud.svelte";
  import News from "$lib/components/News.svelte";
  import HomeImage from "$lib/components/HomeImage.svelte";
  import AboutUei from "$lib/components/AboutUEI.svelte";
</script>

<div class="flex flex-col bg-white min-h-screen">
  <HomeImage />
  <!-- <MainContent /> -->
  <Background />
  <AboutUei />
  <Video />
  <Cards />
  <Members />
  <News />
</div>
