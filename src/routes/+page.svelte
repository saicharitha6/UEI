<script lang="ts">
  import Cards from "./Cards.svelte";
  import Background from "./backgroud.svelte";
  import Members from "./Members.svelte";
  import MainContent from "$lib/components/MainContent.svelte";
  import Content from "$lib/components/Content.svelte";
  import Customers from "$lib/components/News.svelte";
</script>

<div class="flex flex-col bg-white min-h-screen">
  <MainContent />
  <Content />
  <Background />
  <Customers />
  <Cards />
  <Members />
</div>
