// packmode:expert

ServerEvents.recipes(event => {
    const id_prefix = 'crowpack:expert/create/sequenced_assembly/'
    const recipes = [
        {
            input: '#forge:leather',
            outputs: ['minecraft:book'],
            transitionalItem: 'kubejs:incomplete_book',
            loops: 4,
            sequence: [
                {
                    type: 'deploying',
                    input: ['kubejs:incomplete_book', '#forge:string'],
                    output: 'kubejs:incomplete_book',
                },
                {
                    type: 'deploying',
                    input: ['kubejs:incomplete_book', '#forge:paper'],
                    output: 'kubejs:incomplete_book',
                },
                {
                    type: 'deploying',
                    input: ['kubejs:incomplete_book', '#forge:paper'],
                    output: 'kubejs:incomplete_book',
                },
                {
                    type: 'deploying',
                    input: ['kubejs:incomplete_book', '#forge:paper'],
                    output: 'kubejs:incomplete_book',
                },
            ],
            id: `${id_prefix}book_from_leather`
        }
    ]

    recipes.forEach(recipe => {
        let sequence = []

        recipe.sequence.forEach(step => {
            if (step.type === 'deploying') {
                sequence.push(event.recipes.create.deploying(step.output, step.input))
            } else if (step.type === 'cutting') {
                sequence.push(event.recipes.create.cutting(step.output, step.input).processingTime(step.processingTime))
            } else if (step.type === 'filling') {
                sequence.push(event.recipes.create.filling(step.output, step.input))
            } else if (step.type === 'pressing') {
                sequence.push(event.recipes.create.pressing(step.output, step.input))
            }
        })

        event.recipes.create.sequenced_assembly(recipe.outputs, recipe.input, sequence)
            .loops(recipe.loops)
            .transitionalItem(recipe.transitionalItem)
            .id(recipe.id)
    })
})