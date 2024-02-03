<template>
    <div class="text-white">
        <Header />
        <slot/>
        <div class="fixed inset-0 bg-gradient-to-t to-black from-gray-900 z-[-1]" />
    </div>
</template>

<script setup lang="ts">
const settings = useSettings()

useSeoMeta({
    title: settings.value?.data.site_title,
    description: settings.value?.data.meta_description,
    ogImage: settings.value?.data.og_image
})
</script>