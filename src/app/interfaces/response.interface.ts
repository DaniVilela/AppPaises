import { Country } from "./country.interface";

export interface ResponseData {
    data: {
      countries: Country[];
    };
  }