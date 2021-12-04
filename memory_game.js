const cardTypes = ["red", "red", "blue", "blue", "green", "green", "yellow",
    "yellow", "pink", "pink", "violet", "violet", "cadetblue",
    "cadetblue", "brown", "brown", "orange", "orange"];

let cards = document.querySelectorAll("div");
cards = [...cards];




let activeCard = "";
const activeCards = [];

const cardPairs = cards.length / 2;
let gameResult = 0;
let turns = 0;



const clickCard = function () {

    activeCard = this;

    if (activeCard == activeCards[0]) return;
    activeCard.classList.toggle("flip-card");
    activeCard.classList.remove("hide-card");




    if (activeCards.length === 0) {
        activeCards[0] = activeCard;
        return
    }
    else {
        cards.forEach(function (card) {
            card.removeEventListener("click", clickCard)
        })
        activeCards[1] = activeCard;
        setTimeout(function () {
            if (activeCards[0].className === activeCards[1].className) {
                console.log("wygrana runda")
                activeCards.forEach(function (card) {
                    card.classList.add("off-card")


                })
                gameResult++;
                turns++;
                if (gameResult == cardPairs) {
                    alert(`CONGRATULATIONS! YOU WIN IN ${turns} TURNS.`)
                }

            }

            else {
                console.log("przegrana runda")
                activeCards.forEach(function (card) {
                    card.classList.toggle("flip-card");
                    card.classList.toggle("hide-card")

                })
                turns++;
            }
            activeCard = "";
            activeCards.length = 0;
            cards.forEach(function (card) {
                card.addEventListener("click", clickCard)
            })

        }, 1000)

    }

}




const start = function () {
    cards.forEach(function (card) {
        const position = Math.floor(Math.random() * cardTypes.length);
        card.classList.add(cardTypes[position]);
        cardTypes.splice(position, 1);
    })


    setTimeout(function () {
        cards.forEach(function (card) {
            card.classList.add("hide-card")
            card.addEventListener("click", clickCard)
        })
    }, 2000)
}




start()
