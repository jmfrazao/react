import React from "react"
import ContactCard from "./Contactcard"


function App() {
    return (
        <div className = "contacts">
            <ContactCard 
                name = "RealizaSom" 
                imgUrl = "https://www.linkpicture.com/q/avatars-000155802343-g9cvt5-t500x500.jpg"
                phone = "123456789"
                email= "RealizaSom@gmail.com"
            />
            <ContactCard/>
            <ContactCard/>
            <ContactCard/>
        </div>
    )
}


export default App