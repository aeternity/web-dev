<template>
    <div class="orbits">
        <ul class="advantages"
            :style="{'background-image': 'url('+ $withBase('/img/Technical_Advantages_Section_Graphic2.svg') +')', 'background-size':'contain'}">
            <li class="advantage" v-for="advantage in advantages">
                <a href="#" onclick="return false;"
                   :style="{'background-image': 'url('+ $withBase(advantage.image) +')'}"></a>
                <span>{{ advantage.text }}</span>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        computed: {
            advantages() {
                return this.$page.frontmatter.advantages;
            }
        }
    }
</script>
