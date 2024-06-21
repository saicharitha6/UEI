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

  let showThankYou = false;
  let selected = "";
  let email = "";
  let organizationName = "";
  let website = "";
  let industryField = "";
  let contact1 = "";
  let contact2 = "";
  let ceoDetails = "";
  let ueiAlliance = "";
  let logo: any;
  let termsAccepted = "Yes";
  let referral = "";

  let type = [
    { value: "Think tank", name: "Think tank" },
    { value: "Private Corporations", name: "Private Corporations" },
    { value: "PSU", name: "PSU" },
    { value: "Foundation/Non-Profit/NGO", name: "Foundation/Non-Profit/NGO" },
    { value: "University/Education", name: "University/Education" },
    { value: "Other", name: "Other" },
  ];

  async function SubmitEvent() {
    showThankYou = true;
  }

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
    id: "logo",
    name: "logo",
    fontSize: "20px",
    type: "file",
  };
</script>

<div
  class="container mx-auto px-5 sm:px-10 items-center lg:px-8 mt-40"
  style="font-family: 'Open Sans'"
>
  <!-- <form id="myForm" on:submit|preventDefault={SubmitEvent}> -->
  <form method="POST" on:submit={SubmitEvent}>
    <div class="w-full sm:w-3/4 lg:w-3/4 mx-auto items-center">
      <div class="flex justify-between">
        <h2 class="font-bold text-[29px] mb-10">
          UEI Alliance Membership Form
        </h2>
        <a href="/" on:click={toggle}
          ><CloseButton class="mb-4 dark:text-white" /></a
        >
      </div>
      <div class="mb-5 text-[20px]">
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
      <hr />

      <div class="my-3">
        <Label for="email" class="text-[20px] block font-bold mb-2"
          >Email *</Label
        >
        <Input
          id="email"
          bind:value={email}
          size="md"
          name="email"
          class="text-[20px]"
          placeholder="Enter Email"
        />
      </div>
      <div class="mb-3">
        <Label for="organizationName" class="text-[20px] block font-bold mb-2"
          >Name of Organization*</Label
        >
        <Input
          id="organizationName"
          bind:value={organizationName}
          size="md"
          name="organizationName"
          class="text-[20px]"
          placeholder="Enter Organization"
        />
      </div>

      <div class="mb-3">
        <Label id="organizationType" class="text-[20px] font-bold"
          >Nature of Organization *</Label
        >
        <Select
          class="mt-2 text-[20px]"
          items={type}
          name="organizationType"
          bind:value={selected}
        />
      </div>
      <div class="mb-3">
        <Label for="website" class="text-[20px] block mb-2 font-bold"
          >Website *</Label
        >
        <Input
          id="website"
          bind:value={website}
          class="text-[20px]"
          name="website"
          size="md"
          placeholder="Enter Organization"
        />
      </div>
      <div class="mb-3">
        <Label for="industryField" class="text-[20px] block mb-1 font-bold"
          >Industry/Field *</Label
        >
        <p class="text-lg mb-3">
          eg. Charging Point Operator, EV fleet management, software and service
          provider, energy storage, etc.
        </p>
        <Input
          id="industryField"
          bind:value={industryField}
          class="text-[20px]"
          name="industryField"
          size="md"
          placeholder="Enter Field"
        />
      </div>
      <div class="mb-3">
        <Label id="contact1" class="text-[20px] block mb-2 font-bold"
          >Name & Contact Details of Point of Contact 1</Label
        >
        <p class="text-lg mb-3">
          This would be one of your organization's designated representatives.
          Please identify that person by writing in their name, title, e-mail
          and contact number.
        </p>
        <Textarea
          for="contact1"
          bind:value={contact1}
          text=""
          name="contact1"
          rows="4"
          placeholder="Enter details..."
          class="block mb-2 text-lg placeholder-gray-400"
          style="font-size: 20px; line-height: 1.5;"
        ></Textarea>
      </div>
      <div class="mb-3">
        <Label id="contact2" class="text-[20px] block mb-2 font-bold"
          >Name & Contact Details of Point of Contact 2</Label
        >
        <p class="text-lg mb-3">
          This would be one of your organization's designated representatives.
          Please identify that person by writing in their name, title, e-mail
          and contact number.
        </p>
        <Textarea
          for="contact2"
          bind:value={contact2}
          name="contact2"
          rows="4"
          placeholder="Enter details..."
          class="block mb-2 text-lg placeholder-gray-400"
          style="font-size: 20px; line-height: 1.5;"
        ></Textarea>
      </div>
      <div class="mb-3">
        <Label id="ceoDetails" class="text-[20px] block mb-2 font-bold"
          >Name & Email Id of Organization's CEO/Chairman *</Label
        >
        <Input
          id="ceoDetails"
          bind:value={ceoDetails}
          name="ceoDetails"
          class="text-[20px]"
          size="md"
          placeholder="Enter Details"
        />
      </div>

      <div class="my-3">
        <Label id="ueiAlliance" class="text-[20px] font-bold block mb-2"
          >How did you know about UEI Alliance?</Label
        >
        <Textarea
          for="medium-input"
          bind:value={ueiAlliance}
          rows="4"
          name="ueiAlliance"
          placeholder="Enter details..."
          class="block mb-2 text-lg placeholder-gray-400"
          style="font-size: 20px; line-height: 1.5;"
        ></Textarea>
      </div>
      <div class="mb-3 text-[20px]">
        <Label id="logo" name="logo" class="text-[20px] mb-3 font-bold"
          >Upload Logo</Label
        >
        <Fileupload {...fileuploadprops} style={{ fontSize: "20px" }} />
      </div>
      <div class="mb-3">
        <Label
          id="termsAccepted"
          name="termsAccepted"
          class="text-[20px] block text-xl font-bold mb-2"
          >Terms of Association</Label
        >
        <ol class="list-decimal ml-4">
          <li class="text-lg">
            <span class="font-bold text-lg"
              >Permission for Usage of Logo and Name:</span
            > You grant permission to UEI Alliance and its representatives to use
            your logo and name solely for the purposes of promoting the agenda of
            UEI alliance by means of presenting it in the UEI Alliance website, PR
            and marketing materials and presentations.
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
            reserves the right to revoke this permission and terminate the usage
            of the logo and name at any time, with proper cause during the membership
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

        <Radio
          name="termsAccepted"
          bind:group={termsAccepted}
          value="Yes"
          class="text-[20px] mb-2">Yes</Radio
        >
        <Radio
          name="termsAccepted"
          bind:group={termsAccepted}
          value="No"
          class="text-[20px]"
          checked={true}>No</Radio
        >
      </div>

      <div class="mt-3">
        <Label id="referral" class="text-[20px] block mb-2 font-bold"
          >Member Referral</Label
        >
        <p class="text-lg mb-2">
          Please refer any potential UEI Alliance members you may be aware of -
          share names & contacts details below
        </p>
        <Input
          id="referral"
          name="referral"
          bind:value={referral}
          class="text-[20px]"
          size="md"
          placeholder="Enter referral details"
        />
      </div>

      <div class="flex justify-center my-6">
        <Button
          type="submit"
          value="submit"
          on:submit={SubmitEvent}
          class="bg-black no-underline text-[20px] hover:bg-green-800 text-white mx-20 ring-1 font-bold mb-10"
        >
          Submit
        </Button>
      </div>
    </div>
  </form>
  {#if showThankYou}
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <div class="bg-white p-8 rounded-lg shadow-lg">
        <img
          src={thankyou}
          alt="ThankImage"
          class="mb-4 mx-auto"
          style="max-width: 200px;"
        />
        <p class="text-lg text-center">
          Thank you for your interest in joining the UEI Alliance. <br />We will
          be in touch with you shortly to discuss next steps.
        </p>
        <div class="justify-center items-center flex">
          <Button
            on:click={() => (showThankYou = false)}
            class="bg-gray-300 text-gray-800 hover:bg-gray-400 hover:text-gray-900 mt-4 px-6 py-2 rounded-lg "
            >Close</Button
          >
        </div>
      </div>
    </div>
  {/if}
</div>
