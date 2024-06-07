<script lang="ts">
  import {
    Label,
    Input,
    Select,
    Checkbox,
    Button,
    Fileupload,
    Textarea,
    Modal,
  } from "flowbite-svelte";

  let fileuploadprops = {
    id: "user_avatar",
  };

  let hiddenTerms = true;

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

  let termsAccepted = false; // Track if terms are accepted
  let modalOpen = false;

  function toggleTerms() {
    modalOpen = true;
    hiddenTerms = false;
  }

  function acceptTerms() {
    modalOpen = false;
    hiddenTerms = true;
    termsAccepted = true;
  }

  function handleSubmit() {
    if (termsAccepted) {
      // Form submission logic here
      console.log("Form submitted!");
    } else {
      // Show error message or handle it as per your UI/UX
      alert("Please accept the terms and conditions.");
    }
  }
</script>

<div class="container mx-auto px-4 sm:px-6 lg:px-8 mt-20">
  <div class="w-full sm:w-3/4 lg:w-3/4 mx-auto items-center">
    <!-- Form fields -->
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
      <Label for="medium-input" class="block mb-2">Name & Contact Details</Label
      >
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
      <Label for="medium-input" class="block mb-2"
        >How did you know about UEI Alliance?</Label
      >
      <Textarea
        for="medium-input"
        rows="4"
        placeholder="Enter details..."
        class="block mb-2"
      ></Textarea>
    </div>

    <Label class="mb-3">Upload Photo</Label>
    <Fileupload {...fileuploadprops} />

    <!-- Other form fields -->

    <!-- Terms and conditions -->
    <div class="flex my-6">
      <Checkbox on:click={toggleTerms} class="text-red-800">
        Terms & Conditions
      </Checkbox>
    </div>
    <div class="flex justify-center my-6">
      <Button
        on:click={handleSubmit}
        class="bg-green-500 no-underline hover:bg-green-800 text-white mx-20 ring-1 font-bold mb-10"
      >
        Submit
      </Button>
    </div>
    <!-- Terms and conditions modal -->
    {#if !hiddenTerms}
      <Modal
        open={modalOpen}
        title="Terms and Conditions"
        on:close={acceptTerms}
      >
      <div>
        <div>
          <Label for="input" class="block font-bold my-2">
            Permission for Usage of Logo and Name *
          </Label>
          <Checkbox checked class="mr-2 text-red-800">
            You grant permission to UEI Alliance and its representatives to use
            your logo and name solely for the purposes of promoting the agenda
            of UEI alliance by means of presenting it in the UEI Alliance
            website, PR and marketing materials and presentations.
          </Checkbox>
        </div>
        <div>
          <Label for="input" class="block my-2 font-bold"
            >Usage of UEI Alliance logo, name and PR materials *</Label
          >
          <Checkbox checked class="mr-2 text-red-800">
            You agree to use the alliance's logo and name in a manner consistent
            with our brand guidelines, which will be provided to you upon
            request. This includes maintaining the integrity and professionalism
            of the UEI Alliance.
          </Checkbox>
        </div>

        <div>
          <Label for="input" class="block my-2 font-bold"
            >Usage Termination *</Label
          >
          <Checkbox checked class="mr-2 text-red-800">
            Your organization reserves the right to revoke this permission and
            terminate the usage of the logo and name at any time, with proper
            cause during the membership period. Similarly, UEI Alliance reserves
            the right to revoke the permission and terminate your usage of the
            logo and name at any time, with proper cause during the membership
            period.
          </Checkbox>
        </div>

        <div>
          <Label for="input" class="block my-2 font-bold">Acceptance *</Label>
          <Checkbox checked class="mr-2 text-red-800"
            >By confirming your membership with UEI Alliance, you acknowledge
            that you have read, understood, and agree to abide by these terms
            and conditions.</Checkbox
          >
        </div>

        <!-- Other terms and conditions checkboxes -->
        <div class="flex justify-center my-6">
          <Button class="bg-green-500 text-white " on:click={acceptTerms}>Accept</Button>
        </div>
      </div>
      </Modal>
    {/if}
  </div>
</div>
