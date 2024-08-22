// Google Tag Manager sample implementation
document.getElementById('signupButton').addEventListener('click', function() {
    // Push an event to the data layer
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
        'event': 'signUpButtonClick'
    });
});
