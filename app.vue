<script setup lang="ts"></script>

<template>
  <div class="grid h-dvh place-items-center px-4 py-16">
    <div
      class="grid place-items-center gap-12 sm:gap-16 xl:grid-cols-[auto_1fr] xl:gap-24"
    >
      <div
        class="flex max-w-md flex-col items-center text-center xl:order-2 xl:items-start xl:text-left"
      >
        <EpicStackLogo class="size-20" />
        <h1
          class="mt-6 text-4xl font-medium sm:text-4.5xl md:mt-8 md:text-5xl lg:text-5.5xl"
        >
          The <span class="text-highlight">Epic</span> Stack
        </h1>
        <p class="text-slate-60 mt-4 sm:mt-6 sm:text-lg md:text-xl">
          Check the <a href="#" class="text-black">Getting Started</a> guide
          file for how to get your project off the ground!
        </p>
      </div>
      <Logos />
    </div>
  </div>
</template>
