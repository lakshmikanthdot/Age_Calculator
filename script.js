let userInput = document.getElementById("date");
let results = document.getElementById("results");
userInput.max = new Date().toISOString().split("T")[0];

function calculateAge() {
  let birthDate = new Date(userInput.value); // 29-07-2023

  let enteredDate = birthDate.getDate(); // 29
  let enteredMonth = birthDate.getMonth() + 1; // 07
  let enteredYear = birthDate.getFullYear(); // 2023

  let today = new Date(); // 24-08-2023

  let todayDate = today.getDate(); // 24
  let todayMonth = today.getMonth() + 1; //08
  let todayYear = today.getFullYear(); // 2023

  let calculatedDays, calculatedMonths, calculatedYears;

  calculatedYears = todayYear - enteredYear; // calculatedYears = 2023-2023

  if (todayMonth >= enteredMonth) {
    calculatedMonths = todayMonth - enteredMonth; // 08>07 so calculatedMonths will be 08-07 = 01
  } else {
    calculatedYears--; // suppose 09 is entered month then year will be reduced to 2022
    calculatedMonths = 12 + todayMonth - enteredMonth; // then 12months will be added to current month i.e 12 + 08 - 09 = 11months
  }

  if (todayDate >= enteredDate) {
    // 24 >= 29  false so it will enter to else statement
    calculatedDays = todayDate - enteredDate;
  } else {
    calculatedMonths--; // 01 to 00
    calculatedDays =
      getDaysInMonth(enteredYear, enteredMonth) + todayDate - enteredDate; // 31 + 24 - 29 i.e days in month 31
    // 31-29 last month remaining days 2 + current month days 24 then gives the answere 26
    // console.log(getDaysInMonth(enteredYear, enteredMonth));
  }
  if (calculatedMonths < 0) {
    calculatedMonths = 11;
    calculatedYears--;
  }
  results.innerHTML = `You are <span> ${calculatedYears} </span> years, <span> ${calculatedMonths} </span> months and <span> ${calculatedDays} </span> days old`;
}

function getDaysInMonth(year, month) {
  return new Date(year, month, 0).getDate();
}
