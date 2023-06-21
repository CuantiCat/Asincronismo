const promise = new Promise(function (resolve, rejet){
    resolve('Hey!');
});

const cows = 10;
const countCows = new Promise(function(resolve, rejet){
    if(cows > 10){
        resolve(`We have enough cows\n Cows: ${cows}`);
    }else{
        rejet("There is no enough cows");
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("finally");
});