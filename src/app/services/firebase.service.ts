import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  constructor(private firestore: AngularFirestore) {}

  saveBookTitle(title: string, type: 'robot' | 'dog', imageUrl: string) {
    return this.firestore.collection('books').add({
      title,
      type,
      imageUrl,
      timestamp: new Date()
    });
  }
} 