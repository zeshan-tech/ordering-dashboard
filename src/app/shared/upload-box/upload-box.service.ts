import { Injectable, inject } from '@angular/core';
import {
  Storage,
  getDownloadURL,
  ref,
  uploadBytes,
} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root',
})
export class UploadBoxService {
  private storage: Storage = inject(Storage);

  async uploadImage(file: File): Promise<string | null> {
    try {
      const filePath = `images/${new Date().getTime()}_${file.name}`;
      const fileRef = ref(this.storage, filePath);
      await uploadBytes(fileRef, file);

      return getDownloadURL(fileRef);
    } catch (error) {
      console.error('Error uploading image:', error);
      return null;
    }
  }

  async uploadImages(files: File[]): Promise<string[] | null> {
    try {
      const downloadURLs: string[] = [];
      for (const file of files) {
        const downloadURL = await this.uploadImage(file);
        if (downloadURL) {
          downloadURLs.push(downloadURL);
        } else {
          // Handle upload failure
        }
      }
      return downloadURLs;
    } catch (error) {
      console.error('Error uploading images:', error);
      return null;
    }
  }
}
