import { Continent } from "./continent.interface";

export interface Country {
    code: string;
    name: string;
    currency: string;
    continent: Continent;
    image?: string;
  }