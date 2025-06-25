// /* Lección booleans: */
// // var myBool: boolean; // Esto es para añadir el tipo y decirle que es booleano.

// // myBool = true;

// /* Lección numbers */
// var num = 2; // No le estoy especificando que es un número pero lo toma como tal.

// // num = 'Hello'; // Si hacemos esto, no nos permite ya que define number implicitamente.

// var num2: number;
// num2 = 1;

// /* Lección Strings: */
// var str1: string;

// str1 = 'Hello';
// str1= 'Double quotes';
// str1 = `Back tick`; // Estas comillas las traduce como dobles.

// // str1 = 2; // Esto lanza error.

// /* Lección Arrays */
// var myActivities = [1, 'hello', true];

// myActivities.push('world');
// myActivities.push(2);
// myActivities.push(false);

// var myActivities2: string[] = ['Sport', 'Films'];

// // myActivities2.push(1); // Esto dará error.
// myActivities2.push('world'); 
// myActivities2.push(`run`);

// var results: number[] = [1,2];

// // results.push('ads'); // Esto da error.

// /* Lección :any */
// // Normalmente no usaremos :any, ya que quita toda la funcionalidad de TS:

// var item: any; 

// item = 'hello';

// // item. // Al poner el tipo any, el editor no sabe realmente qué opciones ofrecer.

// // var arr: any[] = [1, true, 'hello'];

// // arr.filter(function(item){
// //     item. // Aquí tampoco sabe el editor qué ofrecerte porque no sabe el tipo.
// // });

// /* TIPOS AVANZADOS */
// var arr: [number, number] = [1, 2];

// // arr.push(3);
// // arr.push(4);

// /* TYPE (DEFINIR NUESTRO PROPIO TIPO) */

// type Person = {
//     name: string; // Actúa como una Interface en Java.
//     age?: number; // Ponemos un interrogante para definir que no es obligatorio.
// };

// // const person1: Person = {
// //     name: 2, // Da error porque incumplimos contrato.
// //     age: 'two', // Incluso aunque lo hayamos puesto de forma opcional, ts nos da error por incumplir el contrato.
// // }

// const person2: Person = {
//     name: 'Doe',
// };

// /* INTERFACE */

// /* Si nos fijamos, la diferencia entre type e interface es que uno se declara
// como objeto con valores predefinidos y el otro se declara directamente sin 
// asignar un valor (= o sin él): */
// interface Persona {
//     name: string,
//     age?: number, 
//     sayHello(): void,
// };

// /* También podemos definir métodos (es como la interfaz de Java o cualquier
// lenguaje orientado a objetos) aunque type también puede hacerlo */

// const humano: Persona = {
//     name: 'John',
//     age: 35,
//     sayHello: function() {

//     },
// };

// /* OBJECTS (NO EXISTEN DESDE V2.2) */

// /* RECORDS */
// const myObject: Record<string, any> = {};

// myObject.name = 'Pep'; // Se quedaría como Record<name, Pep>
// myObject['age'] = 29; // Se quedaría como Record<'age', 29>

// /* UNION */
// type MonsterName = {
//     name:string,
// };

// type MonsterAge = {
//     age:number;
// };

// // Asi se declaran las funciones en TS dentro de los type o interface:
// type MonsterAttack = {
//     attack: () => void,
// };

// type Monster = MonsterName & MonsterAge & MonsterAttack; 

// const monster: Monster = {
//     name: 'Dracula',
//     age: 715,
//     attack: function () {
//         console.log('Dracula muerde');
//     },
// };

// /* OR */
// type TypeMonster = MonsterName | MonsterAge | MonsterAttack;

// const monsterTwo: TypeMonster = {
//     name: 'John',
// };











