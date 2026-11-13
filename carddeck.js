function shuffle(){ 
    const CARD_RESULT = document.getElementById("CARD_RESULT");
    const CARD_IMAGES = document.getElementById("CARD_IMAGES");
    const values = ['A',2,3,4,5,6,7,8,9,10,'J','Q','K'];     
        for (let i=values.length-1; i>0; i--){
        const random = Math.floor(Math.random()*(i+1));
        [values[i], values[random]] = [values[random], values [i]];       
    }
    CARD_RESULT.textContent = values.join(",");
    const images = values.map(val => `<img src="card/${val}.jpg">`);
    CARD_IMAGES.innerHTML = images.join("");
}