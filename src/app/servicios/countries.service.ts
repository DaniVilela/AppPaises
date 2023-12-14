// src/app/graphql.service.ts

import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ResponseData } from '../interfaces/response.interface';
import { Country } from '../interfaces/country.interface';
import { CountryDetails } from '../interfaces/country-details.interface';

@Injectable({
  providedIn: 'root',
})
export class CountrieslService {
  constructor(private apollo: Apollo) {}

  // Función para obtener una lista de países con filtro de nombre y continente
  getCountries(filter: {
    name?: string;
    continent?: string;
  }): Observable<Country[]> {
    console.log('filter', filter);

    return this.apollo
      .query<any>({
        query: YOUR_LIST_COUNTRIES_QUERY,
      })
      .pipe(
        map((response: ResponseData) => {
          return response.data.countries.filter((country, index) => {
            if (filter.continent && filter.name) {
              return (
                country.name
                  .toLowerCase()
                  .includes(filter.name.toLowerCase()) &&
                country.continent.name
                  .toLowerCase()
                  .includes(filter.continent.toLowerCase())
              );
            } else if (filter.continent) {
              return country.continent.name
                .toLowerCase()
                .includes(filter.continent.toLowerCase());
            } else if (filter.name) {
              return country.name
                .toLowerCase()
                .includes(filter.name.toLowerCase());
            } else {
              return index < 20;
            }
          });
        })
      );
  }

  // Función para obtener un país por ID
  getCountryById(code: string): Observable<CountryDetails> {
    return this.apollo
      .query<any>({
        query: YOUR_COUNTRY_BY_ID_QUERY,
        variables: { code },
      })
      .pipe(
        map((response) => {
          return response.data.country;
        })
      );
  }
}

// Consultas GraphQL

export const YOUR_LIST_COUNTRIES_QUERY = gql`
  query ListCountries {
    countries {
      code
      name
      currency
      continent {
        name
      }
    }
  }
`;

export const YOUR_COUNTRY_BY_ID_QUERY = gql`
  query ListCountry($code: ID!) {
    country(code: $code) {
      code
      name
      capital
      currencies
      languages {
        name
      }
      states {
        name
      }
      continent {
        name
      }
    }
  }
`;
