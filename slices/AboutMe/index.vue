<script setup lang="ts">
import { type Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.AboutMeSlice>([
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
    <div class="grid md:grid-cols-4 grid-rows-2 gap-10 place-items-center">
      <div class="col-span-2 row-span-2">
        <PrismicRichText
          :field="slice.primary.project_title"
          class="font-semibold leading-6 tracking-wider text-white pb-4 text-2xl"
        />
        <span class="font-light text-3xl text-neutral-500 mr-2">{{
          slice.primary.description
        }}</span>
        <span class="font-semibold tracking-wide text-white text-3xl">
          {{ slice.primary.description_bold }}</span
        >
      </div>
      <div v-for="(item, index) in slice.items" :key="item.images ?? ''">
        <div>
          <PrismicImage
            v-if="index === 0"
            :field="item.images"
            class="w-[282px] h-[408px] object-cover rounded-xl"
          />
        </div>
        <div>
          <PrismicImage
            v-if="index === 1"
            :field="item.images"
            class="w-[282px] h-[408px] object-cover rounded-xl"
          />
        </div>
        <div>
          <PrismicImage
            v-if="index === 2"
            class="w-[282px] h-[408px] object-cover rounded-xl"
            :field="item.images"
          />
        </div>
        <div>
          <PrismicImage
            v-if="index === 3"
            class="w-[282px] h-[408px] object-cover rounded-xl"
            :field="item.images"
          />
        </div>
      </div>
    </div>
  </Bounded>
</template>
