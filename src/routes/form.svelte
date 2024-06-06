<script>
  import {
    Drawer,
    Button,
    CloseButton,
    Fileupload,
    Textarea,
  } from "flowbite-svelte";
  import { InfoCircleSolid } from "flowbite-svelte-icons";
  import { sineIn } from "svelte/easing";
  import { Label, Input, Select, Checkbox } from "flowbite-svelte";

  let fileuploadprops = {
    id: "user_avatar",
  };

  let fileuploadprops2 = {
    id: "user_avatar2",
  };

  let hidden6 = true;
  let hiddenTerms = true;
  let transitionParamsRight = {
    x: 320,
    duration: 200,
    easing: sineIn,
  };

  $: formDrawerVisible = hidden6 && hiddenTerms;

  let selected = "";

  let type = [
    { value: "su", name: "start-up" },
    { value: "ca", name: "Corporate" },
    { value: "fr", name: "PSU" },
    { value: "fr", name: "Foundation/ Society" },
    { value: "fr", name: "Non-Profit/NGO" },
    { value: "fr", name: "University/Education" },
    { value: "fr", name: "Think tank" },
    { value: "fr", name: "Other" },
  ];

  function toggleTerms() {
    hidden6 = false;
    hiddenTerms = false;
  }

  function acceptTerms() {
    hiddenTerms = true;
  }

  function closeTerms() {
    hiddenTerms = true;
  }

  function toggleFormDrawer() {
    hidden6 = !hidden6;
  }
</script>

<div class="text-center">
  <Button
    class="font-bold p-3 py-2 sm:p-3 md:p-3 lg:p-3 text-gray text-xs lg:text-sm md:text-sm sm:text-xs bg-white"
    on:click={toggleFormDrawer}>Join Us</Button
  >
</div>

<Drawer
  placement="right"
  transitionType="fly"
  transitionParams={transitionParamsRight}
  bind:hidden={formDrawerVisible}
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
    <Label for="medium-input" class="block mb-2">Organization Name *</Label>
    <Input id="medium-input" size="md" placeholder="Enter Organization" />
  </div>

  <div class="mb-6">
    <Label>
      Select an option
      <Select class="mt-2" items={type} bind:value={selected} />
    </Label>
  </div>
  <div class="mb-6">
    <Label for="medium-input" class="block mb-2">Website *</Label>
    <Input id="id1" size="md" placeholder="Enter Organization" />
  </div>
  <div class="mb-6">
    <Label for="medium-input" class="block mb-2">Industry/Field *</Label>
    <Input id="id2" size="md" placeholder="Enter Field" />
  </div>
  <div class="mb-6">
    <Label for="medium-input" class="block mb-2">Name & Contact Details</Label>
    <Input id="id3" size="md" placeholder="Enter Details" />
  </div>
  <div class="mb-6">
    <Label for="medium-input" class="block mb-2"
      >Name & EmailId of Organization CEO*</Label
    >
    <Input id="id4" size="md" placeholder="Enter Details" />
  </div>

  <div class="mb-6">
    <Label for="medium-input" class="block mb-2">Organization Name *</Label>
    <Input id="id5" size="md" placeholder="Enter Organization" />
  </div>

  <div class="mb-6">
    <Label for="medium-input" class="block mb-2">How did you know about UEI Alliance?</Label>
    <Textarea for="medium-input" rows=4 placeholder="Enter details..." class="block mb-2"></Textarea>
  </div>

  <Label class="mb-3">Upload Photo</Label>
  <Fileupload {...fileuploadprops} />

  <div class="flex my-6">
    <Checkbox checked on:click={toggleTerms} class="text-red-800"
      >Terms & Conditions</Checkbox
    >
  </div>

  <!-- Submit button -->
  <Button
    class="bg-green-500 no-underline hover:bg-green-800 text-white mx-20 ring-1 font-bold"
    color="light"
    href="/"
    on:click={() => (hidden6 = false)}>Submit</Button
  >
</Drawer>

<!-- Terms and Conditions Drawer -->
<Drawer
  placement="right"
  transitionType="fly"
  transitionParams={transitionParamsRight}
  bind:hidden={hiddenTerms}
  id="termsDrawer"
>
  <div class="flex flex-col p-20 items-center">
    <div class="flex items-center mb-5">
      <!-- Close button -->
      <CloseButton on:click={closeTerms} class="mr-4 dark:text-white" />
      <!-- Terms and conditions header -->
      <h3 class="font-bold text-xl">Terms and conditions</h3>
    </div>
    <div>
      <!-- Checkboxes at the start of the text -->
      <Label for="input" class="block font-bold my-2">
        Permission for Usage of Logo and Name *
      </Label>

      <Checkbox checked class="mr-2 text-red-800">
        You grant permission to UEI Alliance and its representatives to use your
        logo and name solely for the purposes of promoting the agenda of UEI
        alliance by means of presenting it in the UEI Alliance website, PR and
        marketing materials and presentations.
      </Checkbox>
    </div>

    <div>
      <Label for="input" class="block my-2 font-bold"
        >Usage of UEI Alliance logo, name and PR materials *</Label
      >
      <Checkbox checked class="mr-2 text-red-800">
        You agree to use the alliance's logo and name in a manner consistent
        with our brand guidelines, which will be provided to you upon request.
        This includes maintaining the integrity and professionalism of the UEI
        Alliance.
      </Checkbox>
    </div>

    <div>
      <Label for="input" class="block my-2 font-bold">Usage Termination *</Label
      >
      <Checkbox checked class="mr-2 text-red-800">
        Your organization reserves the right to revoke this permission and
        terminate the usage of the logo and name at any time, with proper cause
        during the membership period. Similarly, UEI Alliance reserves the right
        to revoke the permission and terminate your usage of the logo and name
        at any time, with proper cause during the membership period.
      </Checkbox>
    </div>

    <div>
      <Label for="input" class="block my-2 font-bold">Acceptance *</Label>
      <Checkbox checked class="mr-2 text-red-800"
        >By confirming your membership with UEI Alliance, you acknowledge that
        you have read, understood, and agree to abide by these terms and
        conditions.</Checkbox
      >
    </div>
    <Button
      class="bg-green-500 no-underline mt-5 hover:bg-green-800 text-white mx-20 ring-1 font-bold"
      color="light"
      on:click={acceptTerms}>Accept</Button
    >
  </div>
</Drawer>
