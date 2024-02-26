<script setup lang="ts">
import { type Content } from "@prismicio/client";
import AOS from "aos";
import { onMounted } from "vue";

onMounted(() => {
  AOS.init();
})

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
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div data-aos="fade-up"
      class="grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-end gap-8"
    >
      <div
        :class="{
          'md:order-2': slice.variation === 'reverse',
        }"
      >
        <PrismicImage
          class="w-full h-auto rounded-2xl"
          :field="slice.primary.image"
        />
      </div>
      <div>
        <PrismicRichText
          :field="slice.primary.project_title"
          class="font-semibold text-center md:text-left text-base leading-6 tracking-wider text-white pb-4"
        />
        <div class="pb-6">
          <p
            class="text-xl lg:text-2xl text-center md:text-left leading-7 md:leading-10 text-gray-300"
          >
            {{ slice.primary.description }}
          </p>
        </div>
        <PrismicRichText
          :field="slice.primary.category"
          class="text-neutral-500 text-center md:text-left text-lg leading-6 pb-8"
        />
        <div
          class="py-2 flex items-center justify-center w-[163px] h-[40px] gap-2 bg-black rounded-full border border-white mx-auto md:mx-0"
          :class="{
            'bg-gradient-to-r from-purple-600 to-pink-500':
              slice.variation === 'reverse',
          }"
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
