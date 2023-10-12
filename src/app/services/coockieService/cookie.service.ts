import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  getCookie(name: string): string | null {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.startsWith(`${name}=`)) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

  setCookie(name: string, value: string, expires?: Date, path: string = '/') {
    let cookie = `${name}=${value}`;
    if (expires) {
      cookie += `; expires=${expires.toUTCString()}`;
    }
    cookie += `; path=${path}`;
    document.cookie = cookie;
  }

  deleteCookie(name: string, path: string = '/') {
    const expiration = new Date('Thu, 01 Jan 1970 00:00:00 UTC');
    this.setCookie(name, '', expiration, path);
  }
}
