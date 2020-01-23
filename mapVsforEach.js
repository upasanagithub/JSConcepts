var arr1 = [1,4,5,6,4,44,10];
var arr2 = [{'name':'abc', 'id':'234'},
{'name':'trr', 'id':'3232'},
{'name':'uee', 'id':'9444'}];

var arr11 = arr1.map(x => x*2);//returns a new array with new data
console.log("arr11->"+arr11);
console.log("arr1->"+arr1);

arr2.forEach(item => console.log(item.name));//returns undefined

var t1 = Date.now();
console.log(arr1.map(t => t*3));
var t2 = Date.now();

console.log("Map took:->"+(t2-t1)+" ms");//took more time

var t3 = Date.now();
arr1.forEach(i => console.log(i*3));
var t4 = Date.now();

console.log("forEach took:->"+(t4-t3)+" ms");
