module.exports = {
    head: [
        ['link', {rel: 'icon', type: 'image/png', href: '/img/favicon-16x16.png', sizes: '16x16'}],
        ['link', {rel: 'icon', type: 'image/png', href: '/img/favicon-32x32.png', sizes: '32x32'}],
    ],
    base: process.env.BASE_PATH || '/',
    plugins: [
        '@vuepress/register-components',
        [
            'vuepress-plugin-container',
            {
                type: 'content',
                before: info => `<div class="${info}">`,
                after: '</div>',
            },
        ],
    ],
    markdown: {
        anchor: {
            permalink: false
        }
    },
    themeConfig: {
        search: false,
        nav: [
            {text: 'Developers', link: '/'},
            {text: 'Entrepreneurs', link: ''},
            {text: 'Æternity Consulting', link: ''},
            {text: 'Community', link: ''},
            {text: `Dæmo`, link: ''},
        ]
    },
    locales: {
        // The key is the path for the locale to be nested under.
        // As a special case, the default locale can use '/' as its path.
        '/': {
            lang: 'en-US' // this will be set as the lang attribute on <html>
        }
    }
};
