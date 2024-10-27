
//  Assignmnet no 1
// Tittle formater
let input_titile = prompt("Enter a sentence for the conersion of title case");
let uppercase = input_titile.charAt(0).toUpperCase() + input_titile.slice(1);
alert(uppercase)

// Assignment no 2

// Vowel length finder
let input_vowels = prompt("Enetr a sentence to extract vowels").toLowerCase();
let count ="";
let found = false;
for( let i = 0 ; i < input_vowels.length ; i++){
    if (input_vowels[i] === "a" || input_vowels[i] === 'e' || input_vowels[i] === 'i' || input_vowels[i] === 'o' || input_vowels[i] === 'u') {
      count += input_vowels[i];
      found = true
      alert("Your sentence cantains "+count.length+" letter");
    }
}
if(!found){
    alert("Your sentence doesnt cantain any vowel")
}

// Assignmnet no 3
// Etracting user name from email
let user_input =prompt("Enter your email to find user nmae");
let empty ="";
let foundname = false ;
for (let j = 0; j <user_input.length; j++){
 if (user_input[j] ==="@"){
    user_input = user_input.slice(0 ,j) ;
    foundname = true;
   alert("Your user name is "+user_input);
    }
}
if (!foundname){
    alert("Please enter a valid email !");
}

// Assignment no 4
// // rounding no in  array
// let noarray =  [ 32.45 , 97.6 , 12.4 ,32.90];
// let array_str = noarray.split(" ");
// alert(array_str);
// let rounding = Math.round(array_str);

// alert(rounding);


// Assignmnet no 5
// Random password generator
let password_generator = Math.random()*100000000;
let rounding_data = Math.round(password_generator)
alert("Your 8 digit password will be "+ rounding_data);

// Assignmnet no 6
//  Temperature converter celcius to farhentie
let temp_input = prompt("Enter temp");
let formula = (temp_input* 9 / 5) + 32;
let onedigit = formula.toFixed(1)
alert("Temp in Fahrenheit "+onedigit +"F");

// Assignmnet no 7
//  Reversing a sentence 
let sentence_rev = prompt("Enter a sentence").toLowerCase();
let replce = sentence_rev.replace(/" "/g + "")
let Reversing = replce.split("").reverse().join("");
alert(Reversing);

// Assignment no 8 
// Bigest sentene length
let check = prompt("Enter a sentence to check which has the highest length");
let words = check.split(" ");
let highest_word = "";
for ( k = 0 ; k < words.length ; k++){
if ( words[k].length > highest_word.length){
    highest_word = words[k];
}
}
alert(highest_word+" this is larger in your sentence");

// Asssignmet no 9
// Palendrom checker
let word_check = prompt("Enter a word to check whether the eord is palindrome  or not").toLowerCase();
let remoe_space = "";
for (let l= 0; l < word_check.length;l++){
if( word_check[l] !== " "){
    remoe_space += word_check[l];
}
}
let reverse = remoe_space.split("").reverse().join("");
// alert(reverse);
 if (remoe_space === reverse){
            alert("The word is palindrome ")
        }else{
                alert("The word is not palindrome ")
            };

// Assignmnet no 10 
  // Second name of pak cities genertor
let city =prompt("Enter a city to get its second name").toLowerCase();
for( let m = 0 ; m <city.length;m++){
    if (city.slice(m,m+7) ==="karachi"){
        city = city.slice(0,m)+"The city of lights "+ city.slice(m+7);
        break;
    }else if (city.slice(m,m+7) === "lahore"){
        city= city.slice (0,m) + "The city of gardens"+ city.slice(m+6);
        break;
    }else if(city.slice(m,m+7)==="multan"){
        city = city.slice (0,m) +"The city of saints" +city.slice (m +6);
        break;
    }else if (city.slice(m,m+8) === "peshawar"){
        city = city.slice (0,m)+"The city of flowers"+ city.slice(m +8);
        break;
    }else {
        city = city.slice(m,m+7)+"In-valid please try to enter 4 big cities";
        break;
    }

}
alert(city);
