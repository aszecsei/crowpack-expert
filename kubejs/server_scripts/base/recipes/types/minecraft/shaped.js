ServerEvents.recipes(event => {
    const id_prefix = 'crowpack:base/crowpack/shaped/'
    const recipes = [
        {
            output: 'minecraft:copper_ingot',
            pattern: ['NNN', 'NNN', 'NNN'],
            key: {
                N: 'alltheores:copper_nugget'
            },
            id: `${id_prefix}copper_ingot_from_nuggets`
        }
    ]
})