document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("jalapeno")
    
    // These are the values and their IDs, to determine if a value is correct.

    form.addEventListener("submit", event=>{
        const jeebles = document.getElementById("jeebles").value
        const joobles = document.getElementById("joobles").value
        const jeepers = document.getElementById("jeepers").value

    // This determines if the name is valid and is not too long. 

        const fullname = jeebles + " " + joobles
        if(fullname.length > 20) {
            alert ("no one has a name that long lmao get a shorter one")
            return
        }

    // These are the functions for the Zip code. If a inputted zip code is too long or has letters, it will flag it. 

        if (jeepers.length !== 5){
            alert ("no one lives at "+jeepers+" my guy")
            return
        }
        for (let i = 0; i < jeepers.length; i++){
            const egg = jeepers[i]
            if (isNaN(Number(egg))) {
                alert ("that's not a zip code lol")
                return
            }
        }

        // Secret Message!!!!!!!!
        alert ("Hi Marquit, If You Are Not Matthew Marquit, You Are In Violation of Sector I-0276423656223. You Are Now a Fugitive, Congratulations.")

        event.preventDefault()
    })
})
