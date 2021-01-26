//constructor method

    //executor
    //produceing promises
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
    pobj.then((rollno)=>{
        console.log(rollno);
        // giving argument and calling 2nd promise
       return getbiodata(rollno[1])
        }).then((kuchbhi)=>{
            console.log(kuchbhi);
    }).catch((erorrmie)=>{
        console.log(erorrmie)
    })