const elements = {
    header: document.getElementById('header'),
    welcome: document.getElementById('welcome'),
    name: document.getElementById('name'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    country: document.getElementById('country'),
    emagency: document.getElementById('emagency'),
    gender: document.getElementById('gender'),
};

function setText(element, text) {
    if (element && text) {
        element.innerText = text;
    }
}

export function getProfile(user) {
    if (!user) {
        console.error('Not able to fetch data.');
        return;
    }

    // Header
    if (user.campus) {
        const campusName = user.campus.charAt(0).toUpperCase() + user.campus.slice(1);
        setText(elements.header, `Zone01 ${campusName} Dashboard`);
    }

    // Welcome
    setText(elements.welcome, user.firstName ? `Welcome ${user.firstName}` : '');

    // Name
    const fullName = [user.firstName, user.lastName].filter(Boolean).join(' ');
    setText(elements.name, fullName);

    // Email
    setText(elements.email, user.email);

    // Phone, Country, Emergency, Gender
    if (user.attrs) {
        setText(elements.phone, user.attrs.phone);
        setText(elements.country, user.attrs.country);
        setText(elements.emagency, user.attrs.emergencyTel);
        setText(elements.gender, user.attrs.gender);
    }

}
















