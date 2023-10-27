import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpHelperService {
  constructor() {
  }

  initFormData(obj: any, file?: File): FormData {
    const formData = new FormData();

    Object.keys(obj).forEach(key => {
      if (obj[key] !== null && obj[key] !== undefined) {
        let value = obj[key];
        if (typeof value !== 'object') {
          value = value.toString();
        } else {
          value = obj[key];
        }

        formData.append(key, value);
      }
    });

    if (file) {
      formData.append('image', file, file.name);
    }
    return formData;
  }
}
