import { StringManipulationService ,
    NumberManipulationService} from "./main-service";

class StringManipulations implements StringManipulationService{
    public print(word: String):void{
        console.log(word);
        console.log(word.toUpperCase());
        console.log(word.toLowerCase());
        console.log(word.charAt(5));
        console.log(word.concat("yadav"));
        console.log(word.slice(1,5));
        console.log(word.length);
    }

    printWithSpace(sentence:String):void{
        console.log(sentence);
        console.log(sentence.split("").join(" "));
    }

    findVowel(word:string):void{
        console.log(word);
        var vowelsCount =0;
        for (var i = 0; i <= word.length - 1; i++) {

            //if a vowel, add to vowel count
              if (word.charAt(i) == "a" || word.charAt(i) == "e" || word.charAt(i) == "i" || word.charAt(i) == "o" || word.charAt(i) == "u") {
                vowelsCount += 1;
              }
            }
            console.log(vowelsCount);
    }
    

}

let StringObject = new StringManipulations();
StringObject.print("nethravathi");
StringObject.printWithSpace("nethra");
StringObject.findVowel("nethravathi");
 class NumbersManipulations implements NumberManipulationService{

    findPrime(num:number):void{
        console.log(num);
        if(num%2 ===0){
            console.log("the given number is not prime number");
        }
        else{
            console.log("its a prime number");
        }
    }


    findMagic(num:number):void{
        console.log(num);
        if(num%9 == 1){
            console.log("its a magic number");

        }
        else{
            console.log("the given number is not a magic number");
        }
    }
 }

 let magicNumberObj = new NumbersManipulations();
 magicNumberObj.findMagic(200);
 magicNumberObj.findPrime(25);
