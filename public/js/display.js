const display = () => {
    const nextYearText = document.getElementById("nextYear")
    const targetYear = new Date().getFullYear() + 1;

    nextYearText.innerText = `Countdown until ${targetYear}`
}