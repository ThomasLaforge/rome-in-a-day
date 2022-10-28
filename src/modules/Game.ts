import { difference } from "../tools/arrays";
import { City } from "./typings";

export class Game {

    constructor(public cities: City[] = [], public stacks = []){

    }

    removeCities(cities: City[]){
        this.cities = difference(this.cities, cities)
    }

}