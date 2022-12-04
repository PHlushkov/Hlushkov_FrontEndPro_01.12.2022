const userTime = +prompt("What time is it?");

if (userTime) {
    const envelopeTime = userTime * 3600;
    alert(`${envelopeTime} секунд`)
}