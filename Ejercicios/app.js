/* Lección booleans: */
// var myBool: boolean; // Esto es para añadir el tipo y decirle que es booleano.
// myBool = true;
/* Lección numbers */
var num = 2; // No le estoy especificando que es un número pero lo toma como tal.
// num = 'Hello'; // Si hacemos esto, no nos permite ya que define number implicitamente.
var num2;
num2 = 1;
/* Lección Strings: */
var str1;
str1 = 'Hello';
str1 = 'Double quotes';
str1 = "Back tick"; // Estas comillas las traduce como dobles.
// str1 = 2; // Esto lanza error.
/* Lección Arrays */
var myActivities = [1, 'hello', true];
myActivities.push('world');
myActivities.push(2);
myActivities.push(false);
var myActivities2 = ['Sport', 'Films'];
// myActivities2.push(1); // Esto dará error.
myActivities2.push('world');
myActivities2.push("run");
var results = [1, 2];
// results.push('ads'); // Esto da error.
/* Lección :any */
// Normalmente no usaremos :any, ya que quita toda la funcionalidad de TS:
var item;
item = 'hello';
// item. // Al poner el tipo any, el editor no sabe realmente qué opciones ofrecer.
// var arr: any[] = [1, true, 'hello'];
// arr.filter(function(item){
//     item. // Aquí tampoco sabe el editor qué ofrecerte porque no sabe el tipo.
// });
/* TIPOS AVANZADOS */
var arr = [1, 2];
// arr.push(3);
// arr.push(4);
