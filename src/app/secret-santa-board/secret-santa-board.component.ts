import { Component, OnInit, Input } from '@angular/core';
import { names } from '../../assets/json/names';

type SecretSantaItemObj = {
  name_displayed: string;
  name_hidden: string;
};

function Parejas (name:string, nameHidden:string) {  //nuestro array va a estar compuesto por objetos(parejas, con un name y un name_hidden)
  this.name_displayed = name;
  this.name_hidden = nameHidden;
};


@Component({
  selector: 'app-secret-santa-board',
  templateUrl: './secret-santa-board.component.html',
  styleUrls: ['./secret-santa-board.component.scss'],
})


export class SecretSantaBoardComponent implements OnInit {

  friendsList: string[] = names; //lo traigo del archivo assets/json/names.ts
  secretSantaList: SecretSantaItemObj[]= [];

  constructor() {
    this.crearSorteo()
  }

  crearSorteo() {
    var suffle_list = this.friendsList.slice().sort(function(){ //con Slice clonamos el array sin modificar el original
      return Math.random()-0.5  //La función Math.random() nos devuelve un número aleatorio entre 0 y 0.9999..., lo que conseguimos al restarle 0.5 es que nos genere números negativos y positivos para que la función sort() nos re-ordene el array de forma aleatoria colocando un elemento delante otro detrás.
    });

    this.friendsList.forEach((item, i) => {
      var creacion_parejas = new Parejas (item, suffle_list[i]); //creamos el objeto, En function Parejas le hemos marcado la estructura, (le tenemos que pasar dos parametros para que moneten el name y el name_hidden)
      this.secretSantaList.push(creacion_parejas); //con push lo metemos en el array de secretSanta, al final tendremos un array de objetos
    })
      console.log(this.secretSantaList);
    };


  ngOnInit(): //objeto.buildSecretSanta();
  void {}
}
