const mycheckbox = document.getElementById("mycheckbox");
const mastercard = document.getElementById("mastercard");
const visa = document.getElementById("visa");
const paypal = document.getElementById("paypal");
const submit = document.getElementById("submit");
const subscribed = document.getElementById("subscribed");
const subscribing = document.getElementById("subscribing");

submit.onclick = function(){
    if (mycheckbox.checked && mastercard.checked || mycheckbox.checked && visa.checked || mycheckbox.checked && paypal.checked){
        subscribed.textContent = `something error !!!`;
        subscribing.textContent = `please select one of them !!!`;
    }
    
    else if (mycheckbox.checked){
        subscribed.textContent = `you are already subscribed, you can watch any content on this platform`;
    }

    else if (mastercard.checked){
        subscribed.textContent = `you are subscribing !!!`;
        subscribing.textContent = `you are paying via mastercard`;
    }
    else if (visa.checked){
        subscribed.textContent = `you are subscribing !!!`;
        subscribing.textContent = `you are paying via visa`;
    }
    else if (paypal.checked){
        subscribed.textContent = `you are subscribing !!!`;
        subscribing.textContent = `you are paying via paypal`;
    }
    else if (!mycheckbox.checked && !mastercard.checked || !mycheckbox.checked && !visa.checked|| !mycheckbox.checked && !paypal.checked){
        subscribed.textContent = `you are not subscribed to this platform !!!`;
        subscribing.textContent= `please select any payment method to watch our content`;
    }
    
    
}