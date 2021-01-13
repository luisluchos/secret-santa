import { Component, OnInit, Input } from '@angular/core';
import { names } from '../../assets/json/names';

type SecretSantaItemObj = {
  name_displayed: string;
  name_hidden: string;
};

function Parejas (name:string, nameHidden:string) {  //nuestro dupla va a estar compuesto por objetos(parejas, con un name y un name_hidden)
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
  secretSantaList: SecretSantaItemObj[]= []; //el array de objetos donde iremos metiendo las parejas, lo suaremos para luego mostrarlo por html
  suffle_list:  string[];

  newFriendlist: any = [ ]; //nueva lista con loas participantes correctos que no coinciden
  newSuffleList: any = [ ]; //nueva lista con loas participantes correctos que no coinciden

  constructor() {
    this.suffle() //al cargar la página realizamos el primer suffle
    this.crearSorteo()


  }


suffle(){
    this.suffle_list = this.friendsList.slice().sort(function(){ //con Slice clonamos el array sin modificar el original
      return Math.random()-0.5  //La función Math.random() nos devuelve un número aleatorio entre 0 y 0.9999..., lo que conseguimos al restarle 0.5 es que nos genere números negativos y positivos para que la función sort() nos re-ordene el array de forma aleatoria colocando un elemento delante otro detrás.
    });
  }



crearSorteo() {

while (this.friendsList.length > 0) {

  this.friendsList.forEach((item, i) => {
// si los elementos de los 2 arrays son disitintos los vamos a meter en dos nuevos arrays, y los eliminaremos del array antiguo, "sacamos las papaleletas"
    if (this.friendsList[i] !== this.suffle_list[i]){
      let value = this.friendsList[i]; //el nombre del paricipante del 1º array
      let value_hidden = this.suffle_list[i]; // el nombre del participante del 2º array
// creamos los nuevos arrays con las parejas que son validas
      this.newFriendlist.push(value)
      this.newSuffleList.push(value_hidden)

// Eliminamos las parejas del antiguo array, ya que luego haremos un suffle con los que se queden repetidos
      this.friendsList= this.friendsList.filter(item=>item !== value)
      this.suffle_list= this.suffle_list.filter(item=>item !== value_hidden)

// creamos un array de objetos, que contendrán las parejas
      var creacion_parejas = new Parejas (value, value_hidden); //creamos la dupla, En function Parejas le hemos marcado la estructura, (le tenemos que pasar dos parametros para que moneten el name y el name_hidden)
      this.secretSantaList.push(creacion_parejas); //con push lo metemos en el array de secretSanta, al final tendremos un array de objetos
      console.log("nooo");

// volvemos a hacer suffle a los dos arrays
      this.friendsList = this.friendsList.slice().sort(function(){
        return Math.random()-0.5
      });

      this.suffle_list = this.suffle_list.slice().sort(function(){
        return Math.random()-0.5
      });

    }
})}


      console.log("new friend list",this.newFriendlist);
      console.log("new sufflelist",this.newSuffleList);

      console.log("repetido friend list",this.friendsList);
      console.log("repetido suffle",this.suffle_list);
    };

  ngOnInit(): //objeto.buildSecretSanta();
  void {}
}
