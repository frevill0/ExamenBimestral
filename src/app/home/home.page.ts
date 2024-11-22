import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Book {
  title: string;
}

interface BookResponse {
  results: Book[];
}

interface DogResponse {
  message: string;
}

interface Item {
  image: string;
  bookTitle: string;
  type: 'robot' | 'dog';
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  items: Item[] = [];
  isLoading = false;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadData();
  }

  async loadData() {
    this.isLoading = true;
    this.items = []; // Limpiar items existentes
    
    try {
      const randomIds = Array.from({length: 10}, () => Math.floor(Math.random() * 1000) + 1);
      const bookResponse = await this.http
        .get<BookResponse>(`https://gutendex.com/books?ids=${randomIds.join(',')}`)
        .toPromise();

      for (let i = 0; i < 10; i++) {
        const isRobot = Math.random() > 0.5;
        
        if (isRobot) {
          const randomString = Math.random().toString(36).substring(7);
          this.items.push({
            image: `https://robohash.org/${randomString}`,
            bookTitle: bookResponse?.results[i]?.title || 'Unknown Book',
            type: 'robot'
          });
        } else {
          const dogResponse = await this.http
            .get<DogResponse>('https://dog.ceo/api/breed/bulldog/images/random')
            .toPromise();
          this.items.push({
            image: dogResponse?.message || '',
            bookTitle: bookResponse?.results[i]?.title || 'Unknown Book',
            type: 'dog'
          });
        }
      }
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      this.isLoading = false;
    }
  }
}
