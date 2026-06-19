const loadApiData = () => {
    // resolve - successful answer
    // resolve - not successful answer
    return new Promise((resolve, reject) => {
        const response = 200;
        if(response == 200){
            resolve({data : [], message : "Данні з серверу успішно отримано"});
        }else{
            reject("Помилка отримання данних з серверу ");
        }
    });
}
// async await
const fetchData = async () =>{
    
    try{
        const result = await loadApiData();
        console.log(result);
    }catch(error){
        console.log(error)
    }finally{
        console.log("End with API")
    }
}

// fetchData();

// then catch

loadApiData()
    .then((result) => console.log(result)) // resolve
    .catch((error) => console.log(error)) // reject
    .finally(() => console.log("End with API")) // finally

fetch("")
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
    .finally(() => console.log("End with API"))


    
function getUserId()
{
    return new Promise((resolve) => {
        resolve(1)
    })   
}

function getUserData()
{
    return new Promise((resolve) => {
        resolve({userId: id, name : "Joshua"});
    })   
}

async function userProfile() {
    const userId = await getUserId();
    const userData = await getUserData(userId);
    console.log(userData);
}
userProfile();



