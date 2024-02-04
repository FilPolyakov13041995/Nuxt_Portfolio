<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.WorkSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ]),
);
</script>

<template>
  <Bounded
    class="!py-4 md:!py-6 lg:!py-8"
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="py-10 font-mono text-4xl">
      <span class="font-light tracking-wide text-neutral-500 mr-4">{{ slice.primary.heading }}</span>
      <span class="font-semibold tracking-wide text-white">{{ slice.primary.heading_bold }}</span>
    </div>
  </Bounded>
</template>
