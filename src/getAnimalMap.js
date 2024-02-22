const data = require('../data/zoo_data');
const speciesList = data.species;

function animalLocationsFactory(){
    const animalLocations = {
        NE: speciesList.filter(e=>e.location==='NE').map(i=>i.name),
        NW: speciesList.filter(e=>e.location==='NW').map(i=>i.name),
        SE: speciesList.filter(e=>e.location==='SE').map(i=>i.name),
        SW: speciesList.filter(e=>e.location==='SW').map(i=>i.name)
    };
    return animalLocations;
}

function getAnimalMap(options) {
    const animalLocations = animalLocationsFactory();
    if(options===undefined){return animalLocations}

    if(!options.includeNames && (options.sex || options.sorted)){
        return animalLocations;


    }else if(options.includeNames && options.sorted && (options.sex==='male' || options.sex==='female')){
        
        if(options.sex==='male'){

        }else if(options.sex==='female'){

        }

    }else if(options.includeNames && (options.sex==='male' || options.sex==='female')){

        if(options.sex==='male'){
            
            animalLocations.NE=[
                {lions: speciesList.filter(e=>e.name==='lions').map(i=>i.residents).flat().map(d=>d.name)},
                {giraffes: speciesList.filter(e=>e.name==='giraffes').map(i=>i.residents).flat().map(d=>d.name)}
            ];
            animalLocations.NW=[
                {tigers: speciesList.filter(e=>e.name==='tigers').map(i=>i.residents).flat().map(d=>d.name)},
                {bears: speciesList.filter(e=>e.name==='bears').map(i=>i.residents).flat().map(d=>d.name)},
                {elephants: speciesList.filter(e=>e.name==='elephants').map(i=>i.residents).flat().map(d=>d.name)}
            ];
            animalLocations.SE=[
                {penguins: speciesList.filter(e=>e.name==='penguins').map(i=>i.residents).flat().map(d=>d.name)},
                {otters: speciesList.filter(e=>e.name==='otters').map(i=>i.residents).flat().map(d=>d.name)}
            ];
            animalLocations.SW=[
                {frogs: speciesList.filter(e=>e.name==='frogs').map(i=>i.residents).flat().map(d=>d.name)},
                {snakes: speciesList.filter(e=>e.name==='snakes').map(i=>i.residents).flat().map(d=>d.name)}
            ];
            return animalLocations

        }else if(options.sex==='female'){

        }


    }else if(options.includeNames===true && options.sorted===true){

        animalLocations.NE=[
            {lions: speciesList.filter(e=>e.name==='lions').map(i=>i.residents).flat().map(d=>d.name).sort()},
            {giraffes: speciesList.filter(e=>e.name==='giraffes').map(i=>i.residents).flat().map(d=>d.name).sort()}
        ];
        animalLocations.NW=[
            {tigers: speciesList.filter(e=>e.name==='tigers').map(i=>i.residents).flat().map(d=>d.name).sort()},
            {bears: speciesList.filter(e=>e.name==='bears').map(i=>i.residents).flat().map(d=>d.name).sort()},
            {elephants: speciesList.filter(e=>e.name==='elephants').map(i=>i.residents).flat().map(d=>d.name).sort()}
        ];
        animalLocations.SE=[
            {penguins: speciesList.filter(e=>e.name==='penguins').map(i=>i.residents).flat().map(d=>d.name).sort()},
            {otters: speciesList.filter(e=>e.name==='otters').map(i=>i.residents).flat().map(d=>d.name).sort()}
        ];
        animalLocations.SW=[
            {frogs: speciesList.filter(e=>e.name==='frogs').map(i=>i.residents).flat().map(d=>d.name).sort()},
            {snakes: speciesList.filter(e=>e.name==='snakes').map(i=>i.residents).flat().map(d=>d.name).sort()}
        ];
        return animalLocations;
    
    }else if(options.includeNames===true){

        animalLocations.NE=[
            {lions: speciesList.filter(e=>e.name==='lions').map(i=>i.residents).flat().map(d=>d.name)},
            {giraffes: speciesList.filter(e=>e.name==='giraffes').map(i=>i.residents).flat().map(d=>d.name)}
        ];
        animalLocations.NW=[
            {tigers: speciesList.filter(e=>e.name==='tigers').map(i=>i.residents).flat().map(d=>d.name)},
            {bears: speciesList.filter(e=>e.name==='bears').map(i=>i.residents).flat().map(d=>d.name)},
            {elephants: speciesList.filter(e=>e.name==='elephants').map(i=>i.residents).flat().map(d=>d.name)}
        ];
        animalLocations.SE=[
            {penguins: speciesList.filter(e=>e.name==='penguins').map(i=>i.residents).flat().map(d=>d.name)},
            {otters: speciesList.filter(e=>e.name==='otters').map(i=>i.residents).flat().map(d=>d.name)}
        ];
        animalLocations.SW=[
            {frogs: speciesList.filter(e=>e.name==='frogs').map(i=>i.residents).flat().map(d=>d.name)},
            {snakes: speciesList.filter(e=>e.name==='snakes').map(i=>i.residents).flat().map(d=>d.name)}
        ];
        return animalLocations
    }






}
console.log(speciesList.filter(e=>e.name==='lions').map(i=>i.residents).flat().filter(d=>d.sex==='male').map(j=>j.name))
//console.log(getAnimalMap({includeNames: true, sorted: true, sex: 'male'}))
module.exports = getAnimalMap, animalLocationsFactory;
