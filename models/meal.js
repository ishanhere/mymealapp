class Meal {
    constructor(id,categoryIds,title,affrdability,complexity,imageUrl,duration,ingredients,steps,isGluteenFree,isVegan,isVegeterian,isLactoseFree)
    {
        this.id=id,
        this.categoryIds=categoryIds,
        this.title=title,
        this.affrdability=affrdability,
        this.complexity=complexity,
        this.imageUrl=imageUrl,
        this.duration=duration,
        this.ingredients=ingredients,
        this.steps=steps,
        this.isGluteenFree=isGluteenFree,
        this.isVegan=isVegan,
        this.isVegeterian=isVegeterian,
        this.isLactoseFree=isLactoseFree
    }
} 
export default Meal;