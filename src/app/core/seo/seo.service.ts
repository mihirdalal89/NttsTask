import { Inject, Injectable } from '@angular/core';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(private title:Title, private meta:Meta, @Inject(DOCUMENT) private dom:any) { }

  updateTitle(title:string){
    this.title.setTitle(title?title:"NTTS Task");
  }

  updateDescription(desc:string){
    this.meta.updateTag({name:"description", content: desc})
  }

  updateCanonicalUrl(url:string){
    const head = this.dom.getElementsByTagName('head')[0];
    var element: HTMLLinkElement = this.dom.querySelector(`link[rel='canonical']`)||null;
    if(element==null){
      element=this.dom.createElement('link') as HTMLLinkElement;
      head.appendChild(element);
    }
    element.setAttribute('rel','canonical')
    element.setAttribute('href',url)
  }
}
