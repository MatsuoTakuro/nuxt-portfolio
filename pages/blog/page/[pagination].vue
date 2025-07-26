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

const currentPage = useRoute().params.pagination

const { data } = await useAsyncData("blogQueryPaginate", () =>
    queryContent("/blog")
    .sort({ date: 1 })
    .limit(blogsPerPage)
    .skip(blogsPerPage * (currentPage - 1))
    .find()
)

const allBlogs = await queryContent("/blog").find()

const numberPages = Math.ceil(allBlogs.length / blogsPerPage)

useHead({
    title: `Blog | ${currentPage}`,
    meta: [
        { name: "description", content: "Blog page description" }
    ],
})
</script>