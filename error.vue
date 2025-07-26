<template>
    <div class="error container">
        <h1>404: Not Found</h1>
        <p>The page is not found.</p>
    </div>
</template>

<script setup>
useHead({
    title: "Error Page",
    meta: [
        { name: "description", content: "This is an error page" }
    ],
})
</script>