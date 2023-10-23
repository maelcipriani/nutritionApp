import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {
  constructor() {}

  initFormData(obj: any, file?: File): FormData {
    const formData = new FormData();

    Object.keys(obj).forEach(key => {
      if (obj[key] !== null && obj[key] !== undefined) {
        let value = obj[key];
        console.log(value, typeof value);
        if (typeof value !== 'object') {
          value = value.toString();
        } else {
          value = obj[key];
        }
        console.log(value, typeof value);

        formData.append(key, value);
      }
    });

    if (file) {
      formData.append('image', file, file.name);
    }
    console.log(formData);
    return formData;
  }
}
