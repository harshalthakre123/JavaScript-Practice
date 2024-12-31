    // -------------------------------------------------String-------------------------------------------->
    
    // It is primitive datatype.
    // anything inside the single and double quotes is considered as string.

function string(){

    let text="This is a String";

    // Some Basic Methods of String are as follows:-
    
    
    
    // 1. length- it gives the length of the string.
    
    // document.write(text.length);
    
    
    
    // 2. slice-
    
    // document.write(text.slice(2,10)); //it gives the output from index 2 to 9 or (10-1). 
    
    let text2="i am fromCybromOfficial";
    // document.write(text2.slice(9,15));
    
    
    
    // 3. concat()-

        // document.write(text.concat(text2)); //Combines or join two Strings

        
    // 4. substring()-

    let substr= text2.substring(2, 15)
    // console.log(substr);
 
 
    // 5. replace()-

        let stringg="the Java mern Java and javascript is fun.";
        let answerr=stringg.replace(/Java/ig, "hello");
        // console.log(answerr);



    // 6. toUpperCase()-

    // document.write(text2.toUpperCase(0,22));



    // 8. toLowerCase()-

    // document.write(text2.toLowerCase(0,22));



    // 7. trim()- it replace the extra white space from starting and ending.

    // document.write(text.trim);



    // 8.charAt()-

    let word="Harshal";
    // document.write(text2.charAt(10));
    // document.write(word.charAt(4));

    // 9. indexof()-

    // document.write(word.indexOf("a"));

    // 10. charCodeAt() //Ascii value.
    document.write(word.charCodeAt(1));

    // 11 replaceAll()




    // 12. split()
    
    // it takes all letters in the array as a element.
    let answer=text2.split(""); //taking every thing as separater.
    // console.log(answer);

    // it takes all single word in the array as a element. this is taking " "(space) as a separater
    let answer1=text2.split(" ");
    // console.log(answer1);

       
}

string()

//13. Template Laterals "  ``  ".

// 13.1;
    function button()
    {
        alert(`This is "Cybrom" and 'sid' is faculty here.`);
    }

//  13.2; // template laterals.
    function sum1(){
        let a1= number(prompt("Enter the number 1:"));
        let a2= number(prompt("Enter the number 2:"));

        alert(`the sum of ${a1} and ${a2} is ${(a1+a2)}`);
    }