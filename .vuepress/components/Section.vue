<template>
    <section :id="id" :class="classes">
        <slot name="header"></slot>
        <div class="section-content">
            <slot></slot>
        </div>
        <slot name="body"></slot>
        <div class="cards">
            <slot name="cards"></slot>
        </div>
        <div class="section-buttons">
            <slot name="buttons"></slot>
        </div>
        <div class="section-content">
            <slot name="footer"></slot>
        </div>
    </section>
</template>
<script>
    export default {
        props: {id: String, type: {type: String, default: 'normal'}},
        computed: {
            classes() {
                return 'section section--' + this.type
            }
        }
    }
</script>
