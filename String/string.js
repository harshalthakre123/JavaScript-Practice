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
 
 
    // 5. replace()-



    // 6. toUpperCase()-

    // document.write(text2.toUpperCase(0,22));



    // 8. toLowerCase()-

    // document.write(text2.toLowerCase(0,22));



    // 7. trim()- it replace the extra white space from starting and ending.

    // document.write(text.trim);



    // 8.charAt()-

    let word="Harshal"
    // document.write(text2.charAt(10));
    // document.write(word.charAt(4));

    // 9. indexof()-

    // document.write(word.indexOf("a"));

    // 10. charCodesAt()
    // document.write(word.charCodesAt(2));

    // 11. replace()
    // 12 replaceAll()
    // 13. split()
    
    // it takes all letters in the array as a element.
    let answer=text2.split(""); //taking every thing as separater.
    console.log(answer);

    // it takes all single word in the array as a element. this is taking " "(space) as a separater
    let answer1=text2.split(" ");
    console.log(answer1);

    //14. Template Laterals "  ``  ".

    
    
    
}

string();