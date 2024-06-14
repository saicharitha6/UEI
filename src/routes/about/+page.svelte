<script lang="ts">
  import Content from "$lib/components/Content.svelte";
  import Objectives from "./Objectives.svelte";
  import AboutAndNot from "./AboutAndNot.svelte";
  import Background from "$lib/components/backgroud.svelte";
  import LongAndShortTerm from "./LongAndShortTerm.svelte";
</script>

<div class="bg-white h-auto mt-40 overflow-y-auto">
  <Content />
  <Background />
  <Objectives />
  <LongAndShortTerm />
  <AboutAndNot />
</div>
