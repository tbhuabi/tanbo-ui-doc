import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Demo1Service {
  constructor(private http: HttpClient) {
  }

  uploadImg(data: FormData) {
    return this.http.post<{
      imageUrl: string
    }>('/api/upadodImg', data);
  }
}
