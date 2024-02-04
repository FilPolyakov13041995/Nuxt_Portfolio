<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.ClientsSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <Bounded
    class="!py-4 md:!py-6 lg:!py-8"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="py-20 font-mono">
      <div class="sm:text-lg md:text-4xl w-[550px] mb-20">
        <span class="font-light tracking-wide text-neutral-500 mr-4">{{
          slice.primary.heading
        }}</span>
        <span class="font-semibold tracking-wide text-white">{{
          slice.primary.heading_bold
        }}</span>
      </div>
      <div class="flex flex-wrap justify-between">
        <div v-for="item in slice.items" :key="item.icon ?? ''">
          <div v-if="item.icon">
            <IconClients :name="item.icon" />
          </div>
        </div>
      </div>
    </div>
  </Bounded>
</template>