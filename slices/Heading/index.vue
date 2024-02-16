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
    <div class="text-center py-52 px-20 font-mono">
      <h1 class="font-light tracking-wide text-slate-100 sm:text-2xl lg:text-5xl">{{
        slice.primary.heading
      }}</h1>
    </div>
    <PrismicLink :field="slice.primary.arrow_link">
      <IconsArrow class="w-10 h-10 text-white mx-auto" />
    </PrismicLink>
  </Bounded>
</template>
