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
    <div class="text-center py-52 px-20 font-mono sm:text-4xl md:text-5xl ">
      <span class="font-light tracking-wide text-neutral-500 mr-4">{{
        slice.primary.heading
      }}</span>
      <span class="font-semibold text-white mr-4">{{
        slice.primary.heading_ui_ux
      }}</span>
      <span class="font-light tracking-wide text-neutral-400">{{
        slice.primary.text_and
      }}</span>
      <div class="font-semibold pt-4 text-white">
        {{ slice.primary.heading_interaction_design }}
      </div>
    </div>
    <PrismicLink :field="slice.primary.arrow_link">
      <IconsArrow class="w-10 h-10 text-white mx-auto" />
    </PrismicLink>
  </Bounded>
</template>
