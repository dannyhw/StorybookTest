module.exports = {
    root: true,
    plugins: ['import'],
    settings: {
        'import/resolver': {
            node: {
                paths: ['./src'],
                alias: {
                    _assets: 'src/stories/assets',
                    _components: 'src/stories/components',
                    _atoms: 'src/stories/components/atoms',
                    _molecules: 'src/stories/components/molecules',
                    _organisms: 'src/stories/components/organisms',
                    _navigations: 'src/stories/navigations',
                    _scenes: 'src/stories/scenes',
                    _services: 'src/stories/services',
                    _styles: 'src/stories/styles',
                    _utils: 'src/stories/utils',
                },
            },
        },
    },
};