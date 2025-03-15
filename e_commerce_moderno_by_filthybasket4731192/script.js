import { gsap } from "gsap";

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Simple animation on click
            gsap.to(button, {
                duration: 0.3,
                scale: 1.1,
                yoyo: true,
                repeat: 1,
                onComplete: () => {
                    // You can add more complex logic here, like updating a cart counter
                    console.log('Produto adicionado ao carrinho!');
                }
            });
        });
    });
});

