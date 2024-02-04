<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CardsSlice>([
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
    <div class="grid grid-cols-1 md:grid-cols-2 place-items-end sm:justify-items-center md:justify-items-stretch gap-8">
      <div>
        <PrismicImage
          class="w-[594px] h-[490px] rounded-2xl"
          :field="slice.primary.image"
        />
      </div>
      <div>
        <PrismicRichText
          :field="slice.primary.project_title"
          class="font-semibold text-base leading-6 tracking-wider text-white pb-4"
        />
        <div class="pb-6">
          <span class="mr-2 font-light text-3xl leading-10 text-neutral-500">{{
            slice.primary.description
          }}</span>
          <span class="font-semibold text-3xl text-white">{{
            slice.primary.description_bold
          }}</span>
        </div>
        <PrismicRichText
          :field="slice.primary.category"
          class="font-light text-neutral-500 text-lg leading-6 pb-8"
        />
        <div
          class="py-2 flex items-center justify-center w-[163px] h-[40px] gap-2 bg-black rounded-full border border-white"
        >
          <PrismicLink :field="slice.primary.button_link" class="text-white">{{
            slice.primary.button_text
          }}</PrismicLink>
          <IconsArrowRight class="text-white h-4" />
        </div>
      </div>
    </div>
  </Bounded>
</template>
