import { Injectable } from '@angular/core';
import { MapperConfiguration, MappingPair } from "@dynamic-mapper/mapper";
import { UserModel } from "../../utilities/models/UserModel";

@Injectable({
  providedIn: 'root',
})
export class MappingService {
  private CustomerDtoToCustomer = new MappingPair<any, UserModel>();

  private mapperUser;

  constructor() {
    this.initializeUserMappings();
    // Aggiungi altre inizializzazioni se necessario
  }

  private initializeUserMappings(): void {
    const configuration = new MapperConfiguration(cfg => {
      cfg.createAutoMap(this.CustomerDtoToCustomer, {
        id: opt => opt.mapFrom(src => src.id),
        name: opt => opt.mapFrom(src => src.name)
      });
    });
    this.mapperUser = configuration.createMapper();
  }

  mapUserFromApiToApp(userFromApi: any): UserModel {
    return this.mapperUser.map(this.CustomerDtoToCustomer, userFromApi);
  }

}
