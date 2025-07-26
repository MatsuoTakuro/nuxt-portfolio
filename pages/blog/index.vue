<template>
    <div class="wrapper">
        <div class="container">
        <h1>Blog</h1>
        <p>Sharing my everyday life as an engineer.</p>
        <div v-for="singleData in data" :key="singleData.id" class="blogCard">
            <div class="textsContainer">
                <h3>{{ singleData.title }}</h3>
                <!-- <pre>{{ singleData }}</pre> -->
                <p>{{ singleData.description }}</p>
                <p>{{ singleData.date }}</p>
                <NuxtLink :to="singleData._path" class="linkButton">Read More</NuxtLink>
            </div>
            <div class="blogImg">
                <nuxt-img :src="singleData.image" alt="blog-image" format="webp" />
            </div>
        </div>
        </div>
        <Pagination :numberPages="numberPages" />
    </div>
</template>

<script setup>
const blogsPerPage = 5

const { data } = await useAsyncData("blogQuery", () =>
    queryContent("/blog")
    .sort({ date: 1 })
    .limit(blogsPerPage)
    .find()
)
</script>
