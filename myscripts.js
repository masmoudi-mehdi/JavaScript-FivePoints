// var age = 27;
// var nom = 'Mehdi';
// var majeur = true;
// var enfants = null;
// // Null est une valeur qui ne représente rien. C'est nous même qui l'attribuons à une variable,
// //  c'est donc en quelque sorte une absence intentionnelle de valeur pour une variable.
// var project;
// // undefined veut dire qu'une variable à été défini, mais cette variable n'a aucune valeur.
// // Alors c'est différent de null, quand on déclare une variable, Javascript lui affecte 
// // automatiquement undefined si on n'associe pas à cette variable une valeur.
// var code = Symbol();
// // Un Symbol est un type de données unique et immuable.
// // Un symbol est un nouveau type de données primitif apparu avec ES6. 
// // Sa caractéristique principale est que chaque symbole est totalement unique, 
// // contrairement aux autres types de données qui peuvent être écrasés, donc modifiés.

// var otherInfos = {
//     id: 27,
//     cuntry: 'tunisia'
// }
// var hobbies = ["guitar", "chess"]

// alert(`ma variable age est de type : ${typeof(age)}`);
// alert(`ma variable nom est de type : ${typeof(nom)}`);
// alert(`ma variable majeur est de type : ${typeof(majeur)}`);
// alert(`ma variable enfants est de type : ${isNaN(enfants)}`);
// alert(`ma variable project est de type : ${typeof(project)}`);
// alert(`ma variable code est de type : ${typeof(code)}`);
// alert(`ma variable otherInfos est de type : ${typeof(otherInfos)}`);
// alert(`ma variable hobbies est de type : ${typeof(hobbies)}`);


var x = 5
var y = 7

alert(`Opérateur + pour l'Addition : x + y = ${x+y}`);
alert(`Opérateur - pour la Soustraction : x - y =  ${x-y}`);
alert(`Opérateur * pour la Multiplication : x * y = ${x*y}`);
alert(`Opérateur / pour la Division : x / y = ${x/y}`);
alert(`Opérateur % pour le Reste de la division : x % y = ${x%y}`);

var z = x++;
var w = ++x;
alert(`Opérateur x++ pour l'Incrémentation' : z = x++
z = ${z} 
et x = ${x}`);

alert(`Rappel de la valeur de x = ${x}`);
alert(`Opérateur ++x pour l'Incrémentation : w = x++ 
w = ${w}
et x = ${x}`);
alert(`Rappel de la valeur de x = ${x}`);

var i = y--;
var j = --y;

alert(`Opérateur y-- pour la Décrémentation : i = y--
i =  ${i}
et y = ${y}`);
alert(`Rappel de la valeur de x = ${y}`);

alert(`Opérateur --y pour la Décrémentation : j ${j}`);





