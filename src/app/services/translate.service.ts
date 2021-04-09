import { Injectable } from "@angular/core";
import { Store, select } from "@ngrx/store";
import en from '../../assets/i18n/en_US.json';
import vi from '../../assets/i18n/vi_VN.json';
import { AppState } from "../states/models";
import { getLangApp } from './../states/selectors/index';


export class TranslationSet {
  public languange: string;
  public values: any;
}

@Injectable()
export class TranslationService {
  masterData: any[];
  currentLang = 'en_US';
  constructor(private store: Store<AppState>) {
    store.pipe(select(getLangApp)).subscribe(lang => {
      if(this.currentLang !== lang) {
        this.currentLang = lang;
        // console.log(lang)
      }
    });

  }
  captions = {
    'vi_VN': vi,
    'en_US': en,
  }

  deepFind = (obj, path) => {
    var paths = path.split('.')
      , current = obj
      , i;

    for (i = 0; i < paths.length; ++i) {
      if (current[paths[i]] === undefined) {
        return undefined;
      } else {
        current = current[paths[i]];
      }
    }
    return current;
  }

  /**
  * Translate web by lang
  *
  * @param {string} value
  * @returns {string} translated value
  * @memberof TranslationService
  */
  translate(value: string): string {
    // console.log(value);
    const code = value;
    const captionI18n = this.captions[this.currentLang];
    // console.log(code, captionI18n)
    if (captionI18n) {
      const result = this.deepFind(captionI18n, code);
      return result || code;
    }
    else {
      return code;
    }
  }

  // Please provide api for search master data for page
}
