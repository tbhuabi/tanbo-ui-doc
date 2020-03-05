import { Injectable } from '@angular/core';
import { HttpRequest } from '@angular/common/http';

@Injectable()
export class FileExampleService {
  upload(data: FormData) {
    return new HttpRequest('POST', '/upload/api', data, {
      reportProgress: true
    });
  }
}