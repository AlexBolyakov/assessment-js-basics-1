///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

let totalAcres = 0;

for (i = 0; i < fujiAcres.length; i ++) {
    totalAcres += fujiAcres[i] 
}

for (i = 0; i < galaAcres.length; i ++) {
    totalAcres += galaAcres[i]  
}

for (i = 0; i < pinkAcres.length; i ++) {
    totalAcres += pinkAcres[i]  
} 

console.log('Total acres:', totalAcres)

// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE

let averageDailyAcres = totalAcres / 21

console.log('Average number of acres picked per day:', averageDailyAcres)


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE

while (acresLeft > 0) {
    days += 1
    acresLeft -= averageDailyAcres
}
console.log(`${days} days of work are left`)


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

   let fujiTons = fujiAcres.slice(0, 7)
   for (i = 0; i < fujiTons.length; i ++) {
       fujiTons[i] = fujiTons[i] * 6.5
   } 
   console.log('fujiTons Array:', fujiTons)
 
  let galaTons = galaAcres.slice(0, 7)
    for (i = 0; i < galaTons.length; i ++) {
        galaTons[i] = galaTons[i] * 6.5
  } 
  console.log('galaTons Array:', galaTons)
 
  let pinkTons = pinkAcres.slice(0, 7)
  for (i = 0; i < pinkTons.length; i ++) {
     pinkTons[i] = pinkTons[i] * 6.5
  }
 console.log('pinkTons Array:', pinkTons)


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

 let fujiPounds = 0
 for (i = 0; i < fujiTons.length; i ++) {
    fujiPounds += (fujiTons[i] * 2000) 
 }
 console.log('The total number of pounds picked per fuji:', fujiPounds)

 let galaPounds = 0
 for (i = 0; i < galaTons.length; i ++) {
    galaPounds += (galaTons[i] * 2000) 
 }
 console.log('The total number of pounds picked per gala:', galaPounds)

 let pinkPounds = 0

 for (i = 0; i < pinkTons.length; i ++) {
    pinkPounds += (pinkTons[i] * 2000) 
 }
 console.log('The total number of pounds picked per pink:', pinkPounds)

// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

 let fujiProfit = (fujiPounds * fujiPrice) * .01
 let galaProfit = (galaPounds * galaPrice) * .01
 let pinkProfit = (pinkPounds * pinkPrice) * .01

console.log('The profit from fuji apples is $', fujiProfit)
console.log('The profit from gala apples is $', galaProfit)
console.log('The profit from pink apples is $', pinkProfit)

// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE

let totalProfit = fujiProfit + galaProfit + pinkProfit

console.log('The total profit is $', totalProfit)
