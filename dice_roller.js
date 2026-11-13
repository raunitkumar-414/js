function rolldice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const Dice_result = document.getElementById("Dice_result");
    const Dice_images = document.getElementById("Dice_images");
    const values = [];
    const images = [];

    for (let i=0; i<numOfDice; i++){
        const value = Math.floor(Math.random()*6) + 1;
        values.push(value);
        images.push(`<img src="dice_number/${value}.png">`)
    }
    Dice_result.textContent = `dice : ${values.join(", ")}`;
    Dice_images.innerHTML = images.join("");
}