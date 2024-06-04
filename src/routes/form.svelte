<script>
  import { Drawer, Button, CloseButton, Textarea } from "flowbite-svelte";
  import { InfoCircleSolid, ArrowRightOutline } from "flowbite-svelte-icons";
  import { sineIn } from "svelte/easing";
  import { Label, Input } from "flowbite-svelte";

  let hidden6 = true;
  let transitionParamsRight = {
    x: 320,
    duration: 200,
    easing: sineIn,
  };
</script>

<div class="text-center">
  <Button
    class="font-bold p-2 sm:p-1 md:p-auto text-gray text-xs lg:text-sm md:text-sm sm:text-xs bg-white"
    on:click={() => (hidden6 = false)}>Join Us</Button
  >
</div>

<Drawer
  placement="right"
  transitionType="fly"
  transitionParams={transitionParamsRight}
  bind:hidden={hidden6}
  id="sidebar6"
>
  <div class="flex items-center">
    <h5
      id="drawer-label"
      class="inline-flex items-center mb-4 text-base font-semibold text-gray-500 dark:text-gray-400"
    >
      <InfoCircleSolid class="w-5 h-5 me-2.5" />Form
    </h5>
    <CloseButton
      on:click={() => (hidden6 = true)}
      class="mb-4 dark:text-white"
    />
  </div>
  <div class="mb-6">
    <Label for="medium-input" class="block mb-2">Participant Name *</Label>
    <Input id="medium-input" size="md" placeholder="Enter participant" />
  </div>
  <div class="mb-6">
    <Label for="medium-input" class="block mb-2">Location *</Label>
    <Input id="medium-input" size="md" placeholder="Enter location" />
  </div>
  <div class="mb-6">
    <Label for="medium-input" class="block mb-2">Description</Label>
    <Textarea for="medium-input" rows=4 placeholder="Enter details..." class="block mb-2"></Textarea>
  </div>

  <Button
    class="bg-green-500 no-underline hover:bg-green-800 text-white mx-20 ring-1 font-bold"
    color="light"
    href="/">Submit</Button
  >
</Drawer>
