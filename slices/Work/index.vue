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
    <div class="py-10 font-mono text-4xl ">
      <h3 class="font-light tracking-wide text-slate-100">{{ slice.primary.heading }}</h3>
    </div>
  </Bounded>
</template>
