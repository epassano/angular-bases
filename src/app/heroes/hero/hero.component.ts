import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name:string="ironman";
  public age:number=45;

  get capitalizedName():string{
    return this.name.toUpperCase();
  }

 public getHeroDescription():string{
    return `${ this.name } - ${ this.age }`
  }

  changeHero():void{
    this.name="Spiderman";
  }

  changeAge():void{
    this.age=10;
  }

  resetForm():void{
    this.name='ironman';
    this.age=45;
   // document.querySelectorAll('h1')!.forEach(element=>{element.innerHTML='<h1>Hola desde Angular</h1>'
  //})
  }
}
