//1.

const URL = "http://numbersapi.com"
// axios.get(`${URL}/34?json`).then(res => console.log(res.data.text)).catch(err => {console.log(err)})

//2.


// let fiveNumberPromises = []

// for(let i=1; i<6; i++){
//     let promise = axios.get(`${URL}/${i}?json`)
//     fiveNumberPromises.push(promise)
// }

// Promise.all(fiveNumberPromises)
//     .then(numbersArr => {
//         for (res of numbersArr) {
//             console.log(res.data.text)
//         }
//     })


//3. 

let favNumber = 5;
let baseURL = "http://numbersapi.com";

// 1.
$.getJSON(`${baseURL}/${favNumber}?json`).then(data => {
  console.log(data);
});

// 2.
let favNumbers = [7, 11, 22];
$.getJSON(`${baseURL}/${favNumbers}?json`).then(data => {
  console.log(data);
});

// 3.
Promise.all(
  Array.from({ length: 4 }, () => {
    return $.getJSON(`${baseURL}/${favNumber}?json`);
  })
).then(facts => {
  facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
});


//CARDS

const deckId = axios.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1").then(res => {
    console.log(res.data.deck_id) 
})

const cardAPI = `https://deckofcardsapi.com/api/deck/1l4jz0kxcsu6/draw/?count=`
const cardCount = 1

// // axios.get(`${cardAPI}${cardCount}`).then(res => {
// //     const number = res.data.cards[0].value
// //     const suit = res.data.cards[0].suit
// //     console.log(`${number} of ${suit}`)
// //     console.log(res.data.deck_id)
// // })

// axios.get(`${cardAPI}${cardCount}`)
// .then(res => {
//     const number = res.data.cards[0].value
//     const suit = res.data.cards[0].suit
//     console.log(`${number} of ${suit}`)
//     console.log(res.data.deck_id)
//     return axios.get(`${cardAPI}${cardCount}`)
// })
// .then(res => {
//     const number = res.data.cards[0].value
//     const suit = res.data.cards[0].suit
//     console.log(`${number} of ${suit}`)
//     console.log(res.data.deck_id)})
// .catch(err => console.log(err))

const button = document.querySelector('button')
const cardsArea = document.querySelector('#cards-area')

button.addEventListener("click",drawCard)

let cardsDrawn = 1 

function drawCard(){
    axios.get(`${cardAPI}${cardCount}`)
    .then(res => {
        const number = res.data.cards[0].value
        const suit = res.data.cards[0].suit
        console.log(number, suit)
        const newCard = document.createElement("div")
        newCard.innerText = `${number} of ${suit}`
        newCard.classList.add("card")
        cardsArea.append(newCard)
        cardsDrawn +=1
        console.log(cardsDrawn)
        

    })
    .catch(err=> console.log(err))
}

//FURTHER STUDY

