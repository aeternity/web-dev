<template>
    <section :id="id" :class="['section', 'section--' + this.type]">
        <div>
            <ul class="metrics">
                <li v-for="metric in this.$page['frontmatter']['metrics']">
                    <img :src="$withBase(metric.image)" alt="">
                    <div>{{ metric.value }}</div>
                    <div>{{ metric.text }}</div>
                </li>
            </ul>
        </div>
    </section>
</template>
<script>
    export default {
        props: {id: {type: String, default: 'metrics'}, type: {type: String, default: 'metrics'}},
    }
</script>
