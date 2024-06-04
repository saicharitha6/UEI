<script lang="ts">
  import Cards from "./Cards.svelte";
  import Background from "./backgroud.svelte";
  import Members from "./Members.svelte";
  import Paragraph from "./paragraph.svelte";
  import MainContent from "./home/MainContent.svelte";
  import Content from "./home/Content.svelte";
  // import Steps from "./home/Steps.svelte";
  import Customers from "./home/News.svelte";
</script>

<div
  class="flex flex-col bg-gradient-to-t to-[#1C2328] from-[#14181B] min-h-screen"
>
  <MainContent />
  <Content />
  <!-- <Paragraph /> -->
  <Background />
<Customers />
  <Cards />
  <Members />
</div>
