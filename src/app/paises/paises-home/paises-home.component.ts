import { Component } from '@angular/core';
import { CountryDetails } from 'src/app/interfaces/country-details.interface';
import { Country } from 'src/app/interfaces/country.interface';
import { Language } from 'src/app/interfaces/language.interface';
import { CountrieslService } from 'src/app/servicios/countries.service';

@Component({
  selector: 'app-paises-home',
  templateUrl: './paises-home.component.html',
  styleUrls: ['./paises-home.component.css'],
})
export class PaisesHomeComponent {
  list: Country[] = [];

  detalleCountry?: CountryDetails;

  filterContinent?: string;
  constructor(public countriesService: CountrieslService) {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.countriesService
      .getCountries({ name: filterValue, continent: this.filterContinent })
      .subscribe((data) => {
        this.list = data;
        console.log(this.list);
      });
  }

  getFlag(code: string): string {
    return `https://flagcdn.com/w40/${code.toLowerCase()}.png`;
  }

  showDetail(country: Country) {
    this.countriesService
      .getCountryById(country.code)
      .subscribe((data: CountryDetails) => {
        this.detalleCountry = data;
        console.log(this.detalleCountry);
      });
  }

  getLanguages(languages: Language[]): string {
    return languages.map((language) => language.name).join(', ');
  }
}
