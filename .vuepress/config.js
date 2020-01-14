module.exports = {
    plugins: ['@vuepress/register-components'],
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
            lang: 'en-US', // this will be set as the lang attribute on <html>
            title: 'Aeternity developers',
            description: 'Aeternity Blockchain : Lightning Smart Contracts. Turing-Complete State-Channels. Oracles.'
        }
    }
};
