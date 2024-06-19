<script lang="ts">
  import {
    Label,
    Input,
    Select,
    Button,
    Fileupload,
    Textarea,
    CloseButton,
    Radio,
  } from "flowbite-svelte";
  import thankyou from "$lib/assets/images/thankyou.png";
  import { isOpen } from "$lib/store";
  import { isActiveTab } from "$lib/store";
  import { onMount } from "svelte";
  import { bounceIn } from "svelte/easing";

  let showThankYou = false

  onMount(() => {
    console.log($isOpen);
  });

  function toggle() {
    isActiveTab.set("home");
    isOpen.update((n) => {
      if (!n) {
        isOpen.set(false);
      }
      return !n;
    });
  }

  let fileuploadprops = {
    id: "user_avatar",
    fontSize: "22px",
  };

  let selected = "";

  let type = [
    { value: "tt", name: "Think tank" },
    { value: "pc", name: "Private Corporations" },
    { value: "psu", name: "PSU" },
    { value: "fn", name: "Foundation/Non-Profit/NGO" },
    { value: "ue", name: "University/Education" },
    { value: "ot", name: "Other" },
  ];

  function SubmitEvent() {
    // Here you would typically handle form submission (not implemented in this example)
    // For now, just toggle the thank you message
    showThankYou = true;
  }
</script>

<div
  class="container mx-auto px-5 sm:px-10 items-center lg:px-8 mt-40"
  style="font-family: 'Open Sans'" 
>
  <div class="w-full sm:w-3/4 lg:w-3/4 mx-auto items-center">
    <!-- <form on:submit|preventDefault={handleSubmit}> -->
    <div class="flex justify-between">
      <h2 class="font-bold text-3xl mb-10">UEI Alliance Membership Form</h2>
      <a href="/" on:click={toggle}
        ><CloseButton class="mb-4 dark:text-white" /></a
      >
    </div>
    <div class="mb-5 text-[22px]">
      UEI Alliance (<a
        class="text-blue-600 underline"
        href="https://ueialliance.org/">https://ueialliance.org/</a
      >) is a collaborative group formed by various stakeholders in the energy
      sector, committed to global development, adoption and compliance with the
      Beckn Protocol (<a
        class="text-blue-600 underline"
        href="https://becknprotocol.io/">https://becknprotocol.io/</a
      >) for energy-related economic transactions between digital platforms. Its
      primary aim is to promote the adoption and interoperability of the Beckn
      Protocol within the energy field, thereby scaling the Unified Energy
      Interface (UEI) network. The alliance serves as a hub for open network
      concepts, providing support and advisory services.
    </div>
    <!-- <div class="relative bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-black to-gray-500 mt-3"></div> -->
    <hr />
    <!-- Form fields -->

    <div class="my-3">
      <Label for="id0" class="text-[22px] block font-bold mb-2">Email *</Label>
      <Input id="id0" size="md" class="text-[22px]" placeholder="Enter Email" />
    </div>
    <div class="mb-3">
      <Label for="id1" class="text-[22px] block font-bold mb-2"
        >Name of Organization*</Label
      >
      <Input
        id="id1"
        size="md"
        class="text-[22px]"
        placeholder="Enter Organization"
      />
    </div>

    <div class="mb-3">
      <Label id="id11" class="text-[22px] font-bold"
        >Nature of Organization *</Label
      >
      <Select class="mt-2 text-[22px]" items={type} bind:value={selected} />
    </div>
    <div class="mb-3">
      <Label for="id2" class="text-[22px] block mb-2 font-bold">Website *</Label
      >
      <Input
        id="id2"
        class="text-[22px]"
        size="md"
        placeholder="Enter Organization"
      />
    </div>
    <div class="mb-3">
      <Label for="id03" class="text-[22px] block mb-1 font-bold"
        >Industry/Field *</Label
      >
      <p class="text-lg mb-3">
        eg. Charging Point Operator, EV fleet management, software and service
        provider, energy storage, etc.
      </p>
      <Input
        id="id03"
        class="text-[22px]"
        size="md"
        placeholder="Enter Field"
      />
    </div>
    <div class="mb-3">
      <Label id="idi" class="text-[22px] block mb-2 font-bold"
        >Name & Contact Details of Point of Contact 1</Label
      >
      <p class="text-lg mb-3">
        This would be one of your organization's designated representatives.
        Please identify that person by writing in their name, title, e-mail and
        contact number.
      </p>
      <!-- <Input id="idi" size="md" placeholder="Enter Details" /> -->
      <Textarea
        for="idi"
        text=""
        rows="4"
        placeholder="Enter details..."
        class="block mb-2 text-lg placeholder-gray-400"
        style="font-size: 22px; line-height: 1.5;"
      ></Textarea>
    </div>
    <div class="mb-3">
      <Label id="id30" class="text-[22px] block mb-2 font-bold"
        >Name & Contact Details of Point of Contact 2</Label
      >
      <p class="text-lg mb-3">
        This would be one of your organization's designated representatives.
        Please identify that person by writing in their name, title, e-mail and
        contact number.
      </p>
      <!-- <Input id="id4" size="md" placeholder="Enter Details" /> -->
      <Textarea
        for="id40"
        rows="4"
        placeholder="Enter details..."
        class="block mb-2 text-lg placeholder-gray-400"
        style="font-size: 22px; line-height: 1.5;"
      ></Textarea>
    </div>
    <div class="mb-3">
      <Label id="id50" class="text-[22px] block mb-2 font-bold"
        >Name & Email Id of Organization's CEO/Chairman *</Label
      >
      <Input
        id="id50"
        class="text-[22px]"
        size="md"
        placeholder="Enter Details"
      />
    </div>

    <div class="my-3">
      <Label id="id70" class="text-[22px] font-bold block mb-2"
        >How did you know about UEI Alliance?</Label
      >
      <Textarea
        for="medium-input"
        rows="4"
        placeholder="Enter details..."
        class="block mb-2 text-lg placeholder-gray-400"
        style="font-size: 22px; line-height: 1.5;"
      ></Textarea>
    </div>
    <div class="mb-3 text-[22px]">
      <Label id="id9" class="text-[22px] mb-3 font-bold">Upload Logo</Label>
      <Fileupload {...fileuploadprops} style={{ fontSize: "22px" }} />
    </div>
    <div class="mb-3">
      <Label id="id-8" class="text-[22px] block text-xl font-bold mb-2"
        >Terms of Association</Label
      >
      <ol class="list-decimal ml-4">
        <li class="text-lg">
          <span class="font-bold text-lg"
            >Permission for Usage of Logo and Name:</span
          > You grant permission to UEI Alliance and its representatives to use your
          logo and name solely for the purposes of promoting the agenda of UEI alliance
          by means of presenting it in the UEI Alliance website, PR and marketing
          materials and presentations.
        </li>
        <li class="text-lg">
          <span class="font-bold"
            >Usage of UEI Alliance logo, name and PR materials:</span
          > You agree to use the alliance's logo and name in a manner consistent
          with our brand guidelines, which will be provided to you upon request.
          This includes maintaining the integrity and professionalism of the UEI
          Alliance.
        </li>
        <li class="text-lg">
          <span class="font-bold text-lg">Usage Termination:</span> Your organization
          reserves the right to revoke this permission and terminate the usage of
          the logo and name at any time, with proper cause during the membership
          period. Similarly, UEI Alliance reserves the right to revoke the permission
          and terminate your usage of the logo and name at any time, with proper
          cause during the membership period.
        </li>
      </ol>
      <p class="my-3 text-lg">
        By confirming your membership with UEI Alliance, you acknowledge that
        you have read, understood, and agree to abide by these terms and
        conditions.
      </p>

      <Radio name="example" class="text-[22px] mb-2">Yes</Radio>
      <Radio name="example" class="text-[22px]" checked={true}>No</Radio>
    </div>

    <div class="mt-3">
      <Label id="id10" class="text-[22px] block mb-2 font-bold"
        >Member Referral</Label
      >
      <p class="text-lg mb-2">
        Please refer any potential UEI Alliance members you may be aware of -
        share names & contacts details below
      </p>
      <Input
        id="id17"
        class="text-[20px]"
        size="md"
        placeholder="Enter referral details"
      />
    </div>

    <div class="flex justify-center my-6">
      <Button
        type="submit"
        on:click={SubmitEvent}
        class="bg-green-500 no-underline text-[22px] hover:bg-green-800 text-white mx-20 ring-1 font-bold mb-10"
      >
        Submit
      </Button>
    </div>
     <!-- Popover for Thank You Message -->
     {#if showThankYou }
     <div class="fixed inset-0 flex items-center justify-center z-50">
       <div class="bg-white p-8 rounded-lg shadow-lg">
         <img src={thankyou} alt="ThankImage" class="mb-4 mx-auto" style="max-width: 200px;" />
         <p class="text-lg text-center">Thank you for your interest in joining the UEI Alliance. <br/>We will be in touch with you shortly to discuss next steps.</p>
         <div class="justify-center items-center flex">
         <Button on:click={() => showThankYou = false} class="bg-gray-300 text-gray-800 hover:bg-gray-400 hover:text-gray-900 mt-4 px-6 py-2 rounded-lg ">Close</Button>
       </div>
      </div>
     </div>
   {/if}
    <!-- </form> -->
  </div>
</div>
