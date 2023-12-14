import { CountryDetails } from "./country-details.interface";

export interface ResponseDetails {
    data: {
      country: CountryDetails;
    };
  }