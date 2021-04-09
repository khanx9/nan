
import { Injectable, Pipe, PipeTransform } from '@angular/core';
import { TranslationService } from '../services/translate.service';


@Injectable()
@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

    constructor(private translationService: TranslationService) {}

  transform(value: any, args?: any): any {
     return this.translationService.translate(value);
  }

}