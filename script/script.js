alert('hi, a script has been added')





let reloadTime = 2000
let loop = 1

const btcPrice = document.querySelector('.btc-price')
const ethPrice = document.querySelector('.eth-price')
const ltcPrice = document.querySelector('.ltc-price')
const dogePrice = document.querySelector('.doge-price')
const tronPrice = document.querySelector('.tron-price')
const loopPrice = document.querySelector('.loop-price')

let oldprice;

// let dollarValue;


// setTimeout(() => {

//     while (loop){
//         updateAllPrices()
//         loop = loop - 1
//     }

// } ,5000)



// function updateAllPrices(){

//     updatePrice('bitcoin', btcPrice )
//     updatePrice('ethereum', ethPrice)
//     updatePrice('litecoin', ltcPrice)
//     updatePrice('doge', dogePrice)
//     updatePrice('tron', tronPrice)
//     updatePrice('loop', loopPrice)

// }


// async function updatePrice(coin, priceboard){
    
//     const res = await axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`)
//         .then(price => {
//             dollarValue = price.data[coin].usd
//             console.log(dollarValue)
//         })
//         .catch(err => console.log(err))

//     priceboard.innerText = dollarValue
//     dollarValue = ''


// }




setInterval(async () => {
    try{
        btcPrice.innerText = await getPrice('bitcoin');
        ethPrice.innerText = await getPrice('ethereum');
    }catch(e){
        console.log(e)
    }
}, 8000);

setInterval( async () => {

    try{
        ltcPrice.innerText = await getPrice('litecoin');
        dogePrice.innerText = await getPrice('dogecoin');
        
    }catch(e){
        console.log(e)
    }

}, 10000)

setInterval(async () => {

    try{
       tronPrice.innerText = await getPrice('tron');
        loopPrice.innerText = await getPrice('loop')
    }catch(e){
        console.log(e)
    }
    

}, 12000)



function getPrice(coin) {
    return axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin}&vs_currencies=usd`)
        .then(price => price.data[coin].usd)
        .catch(err => {
            console.log(err);
            throw err; // Rethrow error if needed
        });

}
