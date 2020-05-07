<template>
    <div :id="id" class="marquee">
        <ul class="metrics">
            <li v-for="metric in this.metrics">
                <a :href="metric.link || '#'" target="_blank">
                    <img :src="$withBase(metric.image)" alt="">
                    <div>{{ metric.text }}:</div>
                    <div>{{ (metric.value * 1).toLocaleString() }}</div>
                </a>
            </li>
        </ul>
        <ul class="metrics">
            <li v-for="metric in this.metrics">
                <a :href="metric.link || '#'" target="_blank">
                    <img :src="$withBase(metric.image)" alt="">
                    <div>{{ metric.text }}:</div>
                    <div>{{ (metric.value * 1).toLocaleString() }}</div>
                </a>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props: { id: { type: String, default: 'metrics' }, type: { type: String, default: 'metrics' } },
        data() {
            return {
                metrics: [],
            };
        },
        methods: {
            fetchData() {
                let metrics = this.$frontmatter['metrics'];

                Object.entries(metrics).map(async ([id, metric]) => {
                    let src = Object.assign({}, { type: 'json', 'path': '', regex: '' }, metric['src'] || {});
                    let value = metric['value'];
                    if (!src['url']) {
                        return;
                    }
                    metric['value'] = await fetch(src['url'])
                        .then(async (response) => {
                            if ('headers' === src['type']) {
                                return response.headers.get(src['path']);
                            }
                            if ('json' === src['type']) {
                                return await response.json().then((result) => {
                                    if (src['path']) {
                                        return eval(`${src['path']}`);
                                    }
                                    return result;
                                });
                            }
                            return await response.text().then((text) => {
                                return text;
                            });
                        })
                        .catch(() => {
                            return new Promise((resolve) => resolve(value));
                        })
                        .then((data) => {
                            if (!data) {
                                return value;
                            }
                            data = data + '';

                            if (data && src['regex']) {
                                let Regex = new RegExp(src['regex'], 'g');
                                let match = Regex.exec(data);
                                if (match && match.length) {
                                    return match[0];
                                }
                                return value;
                            }
                            return data;
                        });
                    return metric;
                });
                this.metrics = metrics;
            },
        },
        mounted() {
            this.$nextTick(() => {
                this.fetchData();
                setInterval(() => this.fetchData(), 60000);
            });
        },
    };
</script>
