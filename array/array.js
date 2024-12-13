function arr(){

// 1. pop

    let fruits=["Mango","Apple","Banana","Orange","Grapes"];
    // fruits.pop();
    // fruits.pop();
    // document.write(fruits);

// 2. push.

    let ans=fruits.push("Oranges", "Pineapples");
    // document.write(ans); //return updated lenght;
    // document.write(fruits); //updated array print;

// 3. shift.  //Remove First element.

    // fruits.shift();
    // fruits.shift();
    // console.log(fruits);
    

// 4. unshift. //Add element from first elements side;

    // fruits.unshift("aam", "tarbooz");
    // console.log(fruits);



// 5. length
    let answer=fruits.length;
    // document.write(ans);

// 6. Concat()
    let arr1=[9, 18, 17, 61, 55, 4];
    let arr2=[1, 2, 3, 4];
    // let final=arr1.concat(arr2);
    // console.log(final);
    

// 7. sort() //Ascending order print;

    // let answ=arr1.sort();
    // document.write(answ);

// 8. reverse() //reverse an array;
    
    // let answe=answ.reverse();
    // document.reverse(answe);

//  9. descending order;

    // Approach- 1st array-sort then reverse the sorted array.

    // let desc=arr2.sort().reverse();
    // document.write(desc);

// slice()

    // let anss=arr1.slice(2,5);
    // let anss=arr1.slice(0,-1);
    // document.write(anss);

// splice()

    // arr1.splice(1,2,65, 66);   //splice(insert index, delete no. of element,insert element)
    // arr1.splice(2,2,69,68,67);
    // document.write(arr1);


//  map();   //return array;

    // let arrayn=arr1.map(function(n){
    //     return n*2;
    // })
    // console.log(arrayn);

//  filter()  //returns array

    // let arrayn=arr1.filter(function(n){
    //     return n*5;
    // })
    // console.log(arrayn);

// forEach()  // returns string;

    // arr1.forEach(function(num){
        // console.log(num);
    // })

// for-Of()
for(let i of arr1){
    console.log(i)
}
    


}

arr();