import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  async saveBookTitles(titles: string[]) {
    const existingTitles = await this.getBookTitles();
    const newTitles = [...new Set([...existingTitles, ...titles])];
    return this._storage?.set('bookTitles', newTitles);
  }

  async getBookTitles(): Promise<string[]> {
    return this._storage?.get('bookTitles') || [];
  }
} 