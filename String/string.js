    // -------------------------------------------------String-------------------------------------------->
    
    // It is primitive datatype.
    // anything inside the single and double quotes is considered as string.

function string(){

    let text="This is a String";

    // Some Basic Methods of String are as follows:-
    
    
    
    // 1. length- it gives the length of the string.
    
    document.write(text.length);
    
    
    
    // 2. slice-
    
    document.write(text.slice(2,10)); //it gives the output from index 2 to 9 or (10-1). 
    
    let text2="i am fromCybromOfficial";
    document.write(text2.slice(9,15));
    
    
    
    // 3. concat()-

        document.write(text.concat(text2)); //Combines or join two Strings
    // 4. substring()-
    // 5. replace()-
    // 6. toUpperCase()-
    // 8. toLowerCase()-
    // 7. trim()- it replace the extra white space from starting and ending.


    
}

string();