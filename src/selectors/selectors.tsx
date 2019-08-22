const filterRecipes = (recipes, {text, sortBy}) => {
    return recipes.filter((recipe) => {
        const titleMatch = recipe.title.toLowerCase().includes(text.toLowerCase());
        const descritptionMatch = recipe.description.toLowerCase().includes(text.toLowerCase());

        return titleMatch || descritptionMatch
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1
        } else if (sortBy === 'title') {
            return (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : ((b.title.toLowerCase() > a.title.toLocaleLowerCase()) ? -1 : 0);
        }
    });

};

export {filterRecipes}