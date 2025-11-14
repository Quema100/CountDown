const countdown = () => {
    const lastDateText = document.getElementById("countDownDate");
    const lastTimeText = document.getElementById("countDownTime");
    const happyNewYear = document.getElementById("HappyNewYear")
    const targetYear = new Date().getFullYear() + 1;
    const nowDate = new Date();
    const nextYear = new Date(targetYear, 0, 1);
    const countDate = nextYear - nowDate;
    const ms = String(countDate % 1000).padStart(3, "0").slice(0, 2);
    const secs = String(Math.floor((countDate / 1000) % 60)).padStart(2, "0");
    const mins = String(Math.floor((countDate / (1000 * 60)) % 60)).padStart(2, "0");
    const hours = String(Math.floor((countDate / (1000 * 60 * 60)) % 24)).padStart(2, "0");
    let months =
        (nextYear.getFullYear() - nowDate.getFullYear()) * 12 +
        (nextYear.getMonth() - nowDate.getMonth());
    const temp = new Date(nowDate);
    temp.setMonth(temp.getMonth() + months);
    if (temp > nextYear) {
        months -= 1;
        temp.setMonth(temp.getMonth() - 1);
    }
    months = String(months).padStart(2, "0");
    const diffAfterMonths = nextYear - temp;
    const days = String(Math.floor(diffAfterMonths / (1000 * 60 * 60 * 24))).padStart(2, "0");

    lastDateText.innerText = `${months} months ${days} days`
    lastTimeText.innerText = `${hours}:${mins}:${secs}.${ms}`

    Math.abs(nowDate.getTime() - nextYear.getTime()) < 50 && happyNewYear.innerText === ""
        ? (
            happyNewYear.innerText = "Happy New Year!",
            setTimeout(() => { happyNewYear.innerText = "" }, 60000)
        )
        : null;
}

window.onload = () => {
    themeToggle()
    display()
    setInterval(() => countdown(), 5);
}