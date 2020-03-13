//var imiona =['marcin,michal,hola'];
//imiona[3]='piotrek';
//imiona[4]='hdwah';
//
//console.log(imiona[1]);
//
//imiona.pop;
//
//console.log(imiona)
//
//imiona.unshift('krzeszlo,lodowka');
//
//console.log(imiona.sort())
//=====================================================
//var osoba = {
//    name: 'michal',
//    height: ' 180',
//    print: function()
//    {console.log(this.name);
//
//    osoba.weight= 87;
//    osoba.printDetail = function (){
//return this.name + "" + this.height + this.weight;
//
//    
//    
//    
//}
//    }
//}
//console.log(osoba)
//
//

class osobnik {
constructor(michal,grubski){
    this.imie = 'Michal';
        this.nazwisko = "Grubski";
}
wyswietlInfo(){
console.log("imie" + this.imie + "," "nazwisko" + this.nazwisko);
}
}

var Michal = new Osoba('michal','grubski');

Michal.wyswietlInfo();