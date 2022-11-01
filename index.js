const scriptURL = 'YOUR_GOOGLE _SHEETS_SCRIPT_url'
                const form = document.forms['google-sheet']
// Adding the event listner for the submit button, as soon as a user clicks on the below submit button, the below block of code will get executed.
                form.addEventListener('submit', e => {
                    e.preventDefault()
                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//                   After receving the form, user will see the below message in the browser as alert.
                        .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
//                   If any problem occurs, the user will see the below message.
                        .catch(error => console.error('Error!', error.message))
                })
