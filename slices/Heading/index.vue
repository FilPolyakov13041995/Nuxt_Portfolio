<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HeadingSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <Bounded
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="text-center py-36 sm:py-52 px-10 sm:px-20 font-mono">
      <h1 class="tracking-wide text-2xl md:text-4xl lg:text-5xl text-slate-100">
        {{ slice.primary.heading }}
      </h1>
    </div>
    <div class="flex justify-center">
      <PrismicLink :field="slice.primary.arrow_link">
        <IconsArrow class="inline-block w-10 h-10 text-white" />
      </PrismicLink>
    </div>
  </Bounded>
</template>
