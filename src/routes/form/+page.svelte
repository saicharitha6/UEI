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

  import { isOpen } from "$lib/store";
  import { isActiveTab } from "$lib/store";
  import { onMount } from "svelte";

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
  };

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

  // let organizationName = "";
  // let natureOfOrganization = "";
  // let website = "";
  // let industryField = "";
  // let pointOfContact = "";
  // let missionDescription = "";
  // let ceoNameEmail = "";
  // let howDidYouKnow = "";
  // let memberReferral = "";

  // async function handleSubmit() {
  //   const formData = {
  //     organizationName,
  //     natureOfOrganization,
  //     website,
  //     industryField,
  //     pointOfContact,
  //     missionDescription,
  //     ceoNameEmail,
  //     howDidYouKnow,
  //     memberReferral,
  //   };

  //   try {
  //     const response = await fetch("/formData", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (response.ok) {
  //       alert("Form submitted successfully!");
  //     } else {
  //       alert("Form submission failed.");
  //     }
  //   } catch (error) {
  //     console.error("Error submitting form:", error);
  //     alert("An error occurred while submitting the form.");
  //   }
  // }
</script>

<div
  class="container mx-auto px-5 sm:px-10 text-xl items-center lg:px-8 mt-40"
  style="font-family: 'Open Sans'"
>
  <div class="w-full sm:w-3/4 lg:w-3/4 mx-auto items-center">
    <!-- <form on:submit|preventDefault={handleSubmit}> -->
      <div class="flex justify-between">
        <h2 class="font-bold text-2xl mb-10">UEI Alliance Membership Form</h2>
        <a href="/" on:click={toggle}
          ><CloseButton class="mb-4 dark:text-white" /></a
        >
      </div>
      <div class="mb-5 text-xl">
        UEI Alliance (<a
          class="text-blue-600 underline"
          href="https://ueialliance.org/">https://ueialliance.org/</a
        >) is a collaborative group formed by various stakeholders in the energy
        sector, committed to global development, adoption and compliance with
        the Beckn Protocol (<a
          class="text-blue-600 underline"
          href="https://becknprotocol.io/">https://becknprotocol.io/</a
        >) for energy-related economic transactions between digital platforms.
        Its primary aim is to promote the adoption and interoperability of the
        Beckn Protocol within the energy field, thereby scaling the Unified
        Energy Interface (UEI) network. The alliance serves as a hub for open
        network concepts, providing support and advisory services.
      </div>
      <!-- <div class="relative bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-black to-gray-500 mt-3"></div> -->
 <hr/>
      <!-- Form fields -->

      <div class="my-3">
        <Label for="id0" class="block font-bold mb-2">Email *</Label
        >
        <Input id="id0" size="md" placeholder="Enter Email" />
      </div>
      <div class="mb-3">
        <Label for="id0" class="block font-bold mb-2">Name of Organization*</Label
        >
        <Input id="id0" size="md" placeholder="Enter Organization" />
      </div>

      <div class="mb-3">
        <Label id="id1" class="font-bold">Nature of Organization *</Label>
        <Select class="mt-2" items={type} bind:value={selected} />
      </div>
      <div class="mb-3">
        <Label for="id2" class="block mb-2 font-bold">Website *</Label>
        <Input id="id2" size="md" placeholder="Enter Organization" />
      </div>
      <div class="mb-3">
        <Label for="id3" class="block mb-1 font-bold">Industry/Field *</Label>
        <p class="text-sm mb-3">
          eg. Charging Point Operator, EV fleet management, software and service
          provider, energy storage, etc.
        </p>
        <Input id="id3" size="md" placeholder="Enter Field" />
      </div>
      <div class="mb-3">
        <Label id="id4" class="block mb-2 font-bold"
          >Name & Contact Details of Point of Contact 1</Label
        >
        <p class="text-sm mb-3">
          This would be one of your organization's designated representatives.
          Please identify that person by writing in their name, title, e-mail
          and contact number.
        </p>
        <!-- <Input id="idi" size="md" placeholder="Enter Details" /> -->
        <Textarea
          for="idi"
          rows="4"
          placeholder="Enter details..."
          class="block mb-2"
        ></Textarea>
      </div>
      <div class="mb-3">
        <Label id="id4" class="block mb-2 font-bold"
          >Name & Contact Details of Point of Contact 2</Label
        >
        <p class="text-sm mb-3">
          This would be one of your organization's designated representatives.
          Please identify that person by writing in their name, title, e-mail
          and contact number.
        </p>
        <!-- <Input id="id4" size="md" placeholder="Enter Details" /> -->
        <Textarea
          for="id4"
          rows="4"
          placeholder="Enter details..."
          class="block mb-2"
        ></Textarea>
      </div>
      <!-- <div class="mb-3">
        <Label id="id5" class="block mb-2 font-bold"
          >Mission / Description of Organization's Work
        </Label>
        <Textarea
          for="id9"
          rows="4"
          placeholder="Enter details..."
          class="block mb-2"
        ></Textarea>
      </div> -->
      <div class="mb-3">
        <Label id="id6" class="block mb-2 font-bold"
          >Name & Email Id of Organization's CEO/Chairman *</Label
        >
        <Input id="id6" size="md" placeholder="Enter Details" />
      </div>

      

      <div class="my-3">
        <Label id="id7" class="font-bold block mb-2"
          >How did you know about UEI Alliance?</Label
        >
        <Textarea
          for="medium-input"
          rows="4"
          placeholder="Enter details..."
          class="block mb-2"
        ></Textarea>
      </div>
      <Label id="id9" class="mb-3 font-bold">Upload Logo</Label>
      <Fileupload {...fileuploadprops} />

      <div class="mb-3 ">
        <Label id="id-8" class="block text-xl font-bold mb-2"
          >Terms of Association</Label
        >
        <ol class="list-decimal ml-4">
          <li class="text-sm">
            <span class="font-bold text-sm"
              >Permission for Usage of Logo and Name:</span
            > You grant permission to UEI Alliance and its representatives to use
            your logo and name solely for the purposes of promoting the agenda of
            UEI alliance by means of presenting it in the UEI Alliance website, PR
            and marketing materials and presentations.
          </li>
          <li class="text-sm">
            <span class="font-bold text-sm"
              >Usage of UEI Alliance logo, name and PR materials:</span
            > You agree to use the alliance's logo and name in a manner consistent
            with our brand guidelines, which will be provided to you upon request.
            This includes maintaining the integrity and professionalism of the UEI
            Alliance.
          </li>
          <li class="text-sm">
            <span class="font-bold text-sm">Usage Termination:</span> Your organization
            reserves the right to revoke this permission and terminate the usage
            of the logo and name at any time, with proper cause during the membership
            period. Similarly, UEI Alliance reserves the right to revoke the permission
            and terminate your usage of the logo and name at any time, with proper
            cause during the membership period.
          </li>
        </ol>
        <p class="my-3 text-sm">
          By confirming your membership with UEI Alliance, you acknowledge that
          you have read, understood, and agree to abide by these terms and
          conditions.
        </p>

        <Radio name="example" class="mb-2">Yes</Radio>
        <Radio name="example" checked={true}>No</Radio>
      </div>

      <div class="mt-3">
        <Label id="id10" class="block mb-2 font-bold">Member Referral</Label>
        <p class="text-sm mb-2">
          Please refer any potential UEI Alliance members you may be aware of -
          share names & contacts details below
        </p>
        <Input id="id10" size="md" placeholder="Enter referral details" />
      </div>

      <div class="flex justify-center my-6">
        <Button
          type="submit"
          class="bg-green-500 no-underline hover:bg-green-800 text-white mx-20 ring-1 font-bold mb-10"
        >
          Submit
        </Button>
      </div>
    <!-- </form> -->
  </div>
</div>
