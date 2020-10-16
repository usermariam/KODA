import serversConfig from './serversConfig';

//Adresse du serveur de l'api
const baseURL = serversConfig.serversLink.api;

function PostData(url, data) {
    return new Promise((resolve, reject) =>{
        fetch(baseURL+url,{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

function GetData(url) {
    return new Promise((resolve, reject) =>{
        console.log(baseURL+url);
        fetch(baseURL+url,{
            method:'GET',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
            }
        })
            .then((response) => response.json())
            .then((res) => {
                resolve(res);
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export { PostData , GetData  };
