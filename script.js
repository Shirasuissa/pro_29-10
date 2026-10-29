// Exercise 1 - Live Business Card
// Write all your code in this file. Read README.md for the full instructions.
// Run the tests with: npm test

// Step 1: live text (name, job, email, bio -> card), trimmed, default text when empty

// Step 2: avatar letter (first letter of the name in uppercase, "?" when empty)

// Step 3: bio character counter + "warning" class when 10 or fewer are left

// Step 4: accent color (card border + avatar background)

// Step 5: dark mode button

// Step 6: reset button

const form = document.getElementById("card-form")
const nameInput = document.getElementById("name-input")
const jobInput = document.getElementById("job-input")
const emailInput = document.getElementById("email-input")
const bioInput = document.getElementById("bio-input")

const cardName = document.getElementById("card-name")
const cardJob = document.getElementById("card-job")
const cardEmail = document.getElementById("card-email")
const cardBio = document.getElementById("card-bio")

const avatar = document.getElementById("avatar")
const themeBtn = document.getElementById("theme-btn")
const resetBtn = document.getElementById("reset-btn")

form.addEventListener("input", function() {
    cardName.textContent = nameInput.value.trim() || "Your name"
    cardJob.textContent = jobInput.value.trim() || "Your job title"
    cardEmail.textContent = emailInput.value.trim() || "your@email.com"
    cardBio.textContent = bioInput.value.trim() || "Your bio will appear here."

})

 //step 2
 function updateCard() {
    const cleanName = nameInput.value.trim()
    if (cleanName) {
          avatar.textContent = cleanName[0].toUpperCase();
    } else {
         avatar.textContent = "?";
       }
 }

 nameInput.addEventListener("input",updateCard)

 //step 3
 const bioLeft = document.getElementById("bio-left")
 const counter = document.querySelector(".counter")

 bioInput.addEventListener("input", function() {
    const remaining = 80 - bioInput.value.length
    bioLeft.textContent = remaining
    counter.classList.toggle("warning", remaining<=10)
 })

 //step 4
 const colorSelect = document.getElementById("color-select")
 const card = document.getElementById("card")
 colorSelect.addEventListener("change", function() {
    const selectedColor =colorSelect.value
    card.style.borderColor = selectedColor
    avatar.style.backgroundColor = selectedColor
 })

 //step 5
 themeBtn.addEventListener("click", function() {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark")
        themeBtn.textContent = "Dark mode"
  } else {
        document.body.classList.add("dark")
        themeBtn.textContent = "Light mode"
    }
 })

 //step 6
resetBtn.addEventListener("click", function() {
    form.reset()
    cardName.textContent = "Your name"
    cardJob.textContent = "Your job title"
    cardEmail.textContent = "your@email.com"
    cardBio.textContent = "Your bio will appear here."
    avatar.textContent = "?"
    card.style.borderColor = "#4f46e5"
    avatar.style.backgroundColor = "#4f46e5"
    bioLeft.textContent = "80"
    counter.classList.remove("warning")
})

