/* Async/Await
    There's a special syntax to work 
    with promises in a more comfortable
    fashion, called "async/await" .
    it's surprisingly easy to understand
    and use.

    The work "async" before a function 
    means one simple thing: a function
    always returns a promise.

    So the async keyword is added to 
    functions to tell them to return a
    promise rather then directly 
    returning the value

    we can use await when calling any 
    function any function that returns a
    Promise, including web API functions.

    The keyword await makes Javascript 
    wait until that promisse settles and
    returns its result.
*/
const pobj = new Promise((resolve,reject)=>{
    setTimeout(() => {
        let roll_no = [1,2,3,4,5];
        resolve(roll_no);
        // reject('Error while communicating');
    }, 2000);
});

const getbiodata = (indexdata) => {
    return new Promise((resolve,reject)=>{
        setTimeout((indexdata)=>{
            const biodata = {
                name : 'Manan',
                age : 21
            }
            resolve(`My roll no is ${indexdata}. My name is ${biodata.name} and I am ${biodata.age} years old.
            `)
        },2000,indexdata)
    });
}

// consuming promises
// pobj.then((rollno)=>{
//     console.log(rollno);
    // giving argument and calling 2nd promise
//    return getbiodata(rollno[1])
//     }).then((kuchbhi)=>{
//         console.log(kuchbhi);
// }).catch((erorrmie)=>{
//     console.log(erorrmie)
// })

async function getData () {
   const rollNoData = await pobj;
   console.log(rollNoData);

   const biodatas = await getbiodata(rollNoData[1]);
   console.log(biodatas);

   return biodatas;

}

// here the return value of getData is passing to the 
// getname and we cannot directly get data from getname 
// that's why we need to use old .then method in this method
// getnname data is passing to myvar and simply we can use it.

const getname = getData().then((myvar)=>{
    console.log(myvar);
});
