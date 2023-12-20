import { Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

/**
 * L'idea è quella di esportare le constanti delle variabili salvate in modo da ridurre l'errore umano
 * e nel caso servisse modificarne il valore lo si può fare a livello globale sull'applicazione
 * senza dover effettuare una modifica puntuale in ogni punto utilizzato
 */
export enum STORAGE_KEYS {
  LOCAL_USER = "user_in_storage",
  IDENTITY = 'identity',
  TOKEN = "token",
}

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor(
    private localStorageService: LocalStorageService,
    private sessionStorageService: SessionStorageService
  ) {}

  // Metodi per la gestione dei dati nella localStorage

  setLocalItem(key: STORAGE_KEYS, value: any): void {
    this.localStorageService.store(key, value);
  }

  getLocalItem<T>(key: STORAGE_KEYS): T | null {
    return this.localStorageService.retrieve(key);
  }

  removeLocalItem(key: STORAGE_KEYS): void {
    this.localStorageService.clear(key);
  }

  // Metodi per la gestione dei dati nella sessionStorage

  setSessionItem(key: STORAGE_KEYS, value: any): void {
    this.sessionStorageService.store(key, value);
  }

  getSessionItem<T>(key: STORAGE_KEYS): T | null {
    return this.sessionStorageService.retrieve(key);
  }

  removeSessionItem(key: STORAGE_KEYS): void {
    this.sessionStorageService.clear(key);
  }
}
