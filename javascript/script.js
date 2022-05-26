/*Colonnes que l'on doit exclure de la condition -1 ou +1 */
const left_tiles = [5, 10, 15, 20];
const right_tiles = [4, 9, 14, 19];

// const found = array1.find(element => element > 10);

/* récupère les éléments de classe tile */ 
let tile = document.getElementsByClassName("tile");
let light = document.getElementsByClassName("red");

console.log(light.length)
/* on boucle sur les 25 cases tiles */ 
for (let i = 0 ; i < tile.length; i++) {
   
    /* lorsqu'on clique sur une tuile on contrôle sa 
        position pour allumer ou éteindre les tuiles adjacentes */
    tile[i].addEventListener("click", function() {

        /*recherche dans les tableau si i-1 ou i+1 correpond a un retour à la ligne */ 
        let found_left = left_tiles.find(element => element == i+1);
        let found_right = right_tiles.find(element => element == i-1);

        /* toggle de la classe red sur la tuile cliquée */ 
        tile[i].classList.toggle("red");

        /* Allume la tuile adjacente suivante si elle existe*/
        if( i < 24 && found_left === undefined){
            tile[i+1].classList.toggle("red");
        }
         /* Allume la tuile en dessous si elle existe */
        if(i < 20){
            tile[i+5].classList.toggle("red");
        }

        /* Allume la tuile adjacente précédente si elle existe*/
        if( i > 0 && found_right === undefined ){
            tile[i-1].classList.toggle("red");
        }

        /* Allume la tuile au dessus si elle existe */
        if(i >= 5){
            tile[i-5].classList.toggle("red");
        }

       if (light.length == 0){
           alert("Félicitation, vous avez gagné !!")

           
       }

     }); 
}