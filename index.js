const scriptURL = 'https://script.google.com/macros/s/AKfycbycVhriTWXlRzHPZzfLYE4u8CDB33u7vpDSdhjW13fkWxjNLvNH4ihECSGO8t4XsDoxhA/exec'
                const form = document.forms['google-sheet']

                form.addEventListener('submit', e => {
                    e.preventDefault()
                    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                        .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
                        .catch(error => console.error('Error!', error.message))
                })