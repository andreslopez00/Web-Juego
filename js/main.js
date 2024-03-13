// Solicita la edad del usuario
const age = prompt("Por favor, ingresa tu edad:", "");

if (age != null) {
    let redirectUrl;

    // Verifica la edad y redirige al usuario a la página web adecuada
    if (age >= 18) {
        // Si el usuario es mayor de edad, le damos la bienvenida
        alert('¡Bienvenido! Puedes acceder a nuestra web.');
    } else {
        // Redirige al usuario a una página web adecuada según su edad
        if (age >= 0 && age <= 3) {
            redirectUrl = 'https://www.dodot.com';
        } else if (age >= 4 && age <= 6) {
            redirectUrl = 'https://www.pocoyo.com';
        } else if (age >= 7 && age <= 12) {
            redirectUrl = 'https://www.harrypotter.com';
        } else if (age >= 13 && age <= 17) {
            redirectUrl = 'https://www.lego.com';
        }
        window.location.href = redirectUrl;
    }
}
