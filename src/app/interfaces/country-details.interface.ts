import { Continent } from "./continent.interface";
import { Language } from "./language.interface";
import { State } from "./state.interface";

export interface CountryDetails {
    code: string;
    name: string;
    capital: string;
    currencies: string[];
    languages: Language[];
    states: State[];
    continent: Continent;
  }