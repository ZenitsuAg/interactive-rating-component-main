const buttons = document.querySelectorAll('.buttons');
const submit = document.querySelector('.submit');
let butVal = '';

for (const button of buttons) {
    button.addEventListener('click', (e) => {
        butVal = e.target.value;

        button.style.backgroundColor = 'hsl(0, 0%, 100%)';
        button.setAttribute('state', 'on');
                  
    });

    /* This block didn't work, so it's possible to click on multiple
    buttons, but the value of the last button that you have clicked is what will
    be saved to butVal*/

    // button.addEventListener('click', () => {
    //     if (button.setAttribute('state', 'on')) {
    //         button.setAttribute('state', 'off')
    //         alert('You have unclicked me')
    //         butVal = undefined;
    //         button.style.backgroundColor = '#262f38';
    //     }
    // })
}


submit.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (butVal === "") {
        alert('Pls give us a rating!');
        return false;
    };

// Showing the second phase

// const ratingState = document.querySelector('.rating-state');
// ratingState.style.display = "none";

// A shorter way to change the state instead of declaring a variable
document.querySelector('.rating-state').style.display = 'none';
document.querySelector('.rating-state').style.visibility = 'hidden';
document.querySelector('.thank-you-state').style.display = 'block';

document.querySelector('.rating-p').textContent = `You selected ${butVal} out of 5`;

})