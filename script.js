
const currentDayElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTimeElement = document.querySelector('[data-testid="currentUTCTime"]');


function updateDateTime() {
    const currentDate = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
    const currentUTCTime = currentDate.toUTCString().slice(17, 25);

    currentDayElement.textContent = currentDayOfWeek;
    currentUTCTimeElement.textContent = currentUTCTime;
}

updateDateTime();


setInterval(updateDateTime, 1000); // Update every 1 second
