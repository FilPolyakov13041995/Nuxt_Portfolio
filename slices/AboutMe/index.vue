<script setup lang="ts">
import { ref } from "vue";
import { type Content } from "@prismicio/client";

defineProps(
  getSliceComponentProps<Content.AboutMeSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const { client } = usePrismic();
const { data: about } = useAsyncData("about", () =>
  client.getByUID("page", "about")
);


</script>

<template>
  <Bounded
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="text-white py-7">
      <PrismicRichText
        :field="slice.primary.project_title"
        class="font-semibold leading-6 tracking-wider text-center md:text-left pb-4 text-2xl"
      />
      <p class="font-light text-xl md:text-3xl">
        {{ slice.primary.description }}
      </p>
    </div>
    <div class="flex justify-center md:justify-between gap-2">
      <div
        class="w-80 md:w-72 h-[500px]"
        v-for="(item, index) in slice.items"
        :key="index ?? ''"
      >
        <PrismicImage
          v-if="index < 4"
          :field="item.images"
          class="w-full h-full rounded-xl"
        />
      </div>

      <!-- <form @submit.prevent="submitForm" class="text-black">
        <input type="text" v-model="name" placeholder="Ваше имя" />
        <input type="email" v-model="email" placeholder="Email" />
        <button class="text-white" type="submit">Отправить</button>
      </form> -->
    </div>
  </Bounded>
</template>
