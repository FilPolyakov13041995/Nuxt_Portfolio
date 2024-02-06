<template>
  <Bounded as="header" class="!py-4 md:!py-6 lg:!py-8 text-white">
    <div class="flex gap-4 items-center justify-between flex-col sm:flex-row">
      <Logo />
      <nav>
        <ul class="flex">
          <li
            v-for="(item, index) in settings?.data.navigation"
            :key="item.label ?? ''"
          >
            <PrismicLink
              :field="item.link"
              :class="{
                'mr-8': index !== settings.data.navigation.length - 1,
                'text-pink-400': $route.path === item.link.url,
                'border-b-2 border-white py-2': $route.path === item.link.url
              }"
            >
              {{ item.label.toUpperCase() }}
            </PrismicLink>
          </li>
        </ul>
      </nav>
    </div>
  </Bounded>
</template>

<script setup lang="ts">
const settings = useSettings();

</script>