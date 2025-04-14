function isPalindrome(str) {
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
console.log(isPalindrome('bob'))

// 2. In an array of [1,2,1000,3,-1] 

 let arrays = [1,2,1000,3,-1]
 let max =0

function findMaximumNumberInArray(arr){

    for (let i=0;i<= arrays.length;i++) {
        if(max < arrays[i]) {
            max = arrays[i]
            
        }
        
     }
     console.log(max)
}
findMaximumNumberInArray(array)


// 3. Find the factorial of any number using JavaScript (no method)

 function calculateFactorial(num) {
        let factorial = 1;
        for (let i = 1; i <= num; i++) {
            factorial *= i; 
        }
        console.log(factorial);
    }
    
    calculateFactorial(7);


// 4. calculate the sum of numbers in an array of your choice (no methods)

let array  = [0,2,4,6,8,10,12]
let output = 0

function getSumOfArrayNumbers(sum) {

    for (let i=0;i<array.length;i++) {
        output += array[i]
        console.log(output)
        }
}
getSumOfArrayNumbers(array)



//

// 5. Count vowels in a string and return the number if vowels in the string.
function countVowels(string){
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;    
    for (let i = 0; i < string.length; i++) { 
        for (let j = 0; j < vowels.length; j++) {  
            if (string[i] === vowels[j]) {  
                count++; 
            }
        }
    }

    console.log(count);
}
countVowels("God")
countVowels("COMMAND")

// 6. Write a function that accepts a number and returns a Boolean if the number is a Prime number.
function isPrime(num){
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) {
          return false;
        }
      }
      return true;
    }
    
    console.log(isPrime(2))

   //  7. In an array of numbers find the multiples of any number in the array and return the multiple found

    function multiplesOf(numbers, number) { 
        let multiples = [];
        for (let i = 0; i < numbers.length; i++) {
          if (numbers[i] % number === 0) { 
            multiples.push(numbers[i]); 
          }
        }
      
        return multiples;
      }
      
      console.log(multiplesOf([4, 5, 6, 7, 8], 2)); 

    //8. Find the index of a number in an array .
        let occupation = ['Teaching','Marketing', 'Banking','HumanResource']
        for (let i = 0; i < occupation.length; i++){
            console.log(i,occupation[i])
        
        }


    // 9. Given two arrays, merge the arrays and sort the merged array such that the output printed in ascending or descending order depending on how it is consoled.

    function mergeAndSort(array1, array2, order = 'ascending') {
        const mergedArray = [...array1, ...array2];
        mergedArray.sort((a, b) => {
          if (order === 'ascending') {
            return a - b; 
          } else {
            return b - a; 
          }
        });
        return mergedArray;
      }
      
      
      const array1 = [1, 3, 5];
      const array2 = [2, 4, 6];
      
      
    //   const ascendingSortedArray = mergeAndSort(array1, array2);
    //   console.log("Ascending:", ascendingSortedArray);
      
      
    //   const descendingSortedArray = mergeAndSort(array1, array2, 'descending');
    //   console.log("Descending:", descendingSortedArray);



    // 10. Create a program "Adashe" Implement CRUD for the Adashe program

    let Adashe=[]


    function addMember(name,gender,amount) {
        let member ={
            name:name,
            gender:gender,
            amount:amount
        }
        Adashe.push(member)
        console.log(Adashe)

    }
    addMember("Nanbam","f",200)
    addMember("Dakshak","m",300)
    addMember("Praise","f",350)
    addMember("Kristen","f",200)
    addMember("Promise","m",250)
    addMember("Timothy","m",400)
    addMember("Plangz","m",500)


    function updateMembers(name,newAmount) {
        for (let i = 0;i < Adashe.length;i++) {
            if(Adashe[i].name == name ){
                Adashe[i].amount += newAmount
                console.log(`${name}'s updated amount:`, Adashe[i].amount);
                return Adashe[i].amount
            }
        }
        console.log(`${name} not found.`);
        return null;
    }
    updateMembers("Nanbam",500)
    updateMembers("Dashak",500)
    updateMembers("Praise",500)
    updateMembers("Kristen",500)
    updateMembers("Promise",500)
    updateMembers("Timothy",500)
    updateMembers("Plangz",500)

    // let members = member
    // function seeAllActiveMembers (name,amount) {
    //     for (let i =1;i < Adashe.length;i++) {
    //         if (Adashe[i].name == name){ 
    //             Adashe[i].amount == amount
    //             let member = i
    //             members = member
    //             console.log(members)
    //         }
    //             }
    // }
    // seeAllActiveMembers("Nanbam",700)
    // seeAllActiveMembers("Dashak",500)
    // seeAllActiveMembers("Praise",500)
    // seeAllActiveMembers("Kristen",500)
    // seeAllActiveMembers("Promise",500)
    // seeAllActiveMembers("Timothy",500)
    //seeAllActiveMembers("Plangz",500)

    function seeAllActiveMembers() {
        // console.log("Name of All Active Members in Adashe:");
        for (let i = 0; i < Adashe.length; i++) {

            // console.log(`${Adashe[i].name}`) 
            // console.log(`${Adashe[i].gender}`)  
            // console.log(`${Adashe[i].amount}`);

            console.log(`${Adashe[i].name} ${Adashe[i].gender} => ${Adashe[i].amount}`)
        }
    }
    seeAllActiveMembers();
    

    function seeMemberByNameOrAmount(name, amount) {
        for (let i = 0; i < Adashe.length; i++) {
            if (Adashe[i].name === name && Adashe[i].amount === amount) {
                console.log(`${name} found with ₦${amount}`);
                return;
            }
        }
        console.log(`${name} with ${amount} not found.`);
    }
    seeMemberByNameOrAmount("Timothy",900)
    seeMemberByNameOrAmount("kristen",750)

    function withdrawAmount (name,amount) {
        for (let i =0; i < Adashe.length;i++) {
            if (Adashe[i].amount >= amount) {
                Adashe[i].amount -= amount;
                console.log(`${name} has withdrawn ${amount}. New balance: ₦${Adashe[i].amount}`);
                return Adashe[i].amount;
            // if (Adashe[i].name === name && Adashe[i].amount === amount) {
            //     Adashe[i].amount -= amountWithdrawn
            //     console.log(`${name}'s amount of money witdrawn:`, Adashe[i].amount);
            //     return Adashe[i].amount

            }  else {
                console.log(`${name} has insufficient funds to withdraw ₦${amount}.`);
                return null;
            }
        }
        
    }
    withdrawAmount("Plangz",1000)

    function removeMember(name) {
        for (let i = 0; i < Adashe.length; i++) {
            if (Adashe[i].name === name) {
                Adashe.splice(i, 1); 
                console.log(`${name} has been removed from Adashe.`);
                return;
            }
        }
        console.log(`${name} not found in Adashe.`);
    }
    removeMember("Praise")

// function removeMember (name) {
//     if (Adashe[i].name === name) {

//         Adashe.splice(i, 2); 
//         console.log(`${name} has been removed from Adashe.`);
//         return;
//     }
// }
// console.log(`${name} not found in Adashe.`);


// removeMember("Praise")


