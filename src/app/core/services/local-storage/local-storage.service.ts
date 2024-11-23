import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor() {}

  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  exist(key: string): boolean {
    let exist = this.getItem(key);
    if (exist) {
      return true;
    }
    return false;
  }

  addItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  clearStorage(): void {
    localStorage.clear();
  }
}
