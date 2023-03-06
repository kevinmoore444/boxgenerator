import React from 'react'
import { useState } from 'react'



const Boxgenerator = () => {
    const [color, setColor] = useState("")
    let [listOfBoxes, setListOfBoxes] = useState([])


    const submitHandler = (e) => {
        e.preventDefault()
        let boxObj = {color}

        setListOfBoxes([...listOfBoxes, boxObj]);
    }


  return (
    <>
    <div>
        <h1>Box Generator</h1>
        <form onSubmit={submitHandler}>
            <label>Color</label>
            <input onChange={(e) => setColor(e.target.value) } value={color} type= "text"/>
            <button type='submit'>Add Box</button>
        </form>

    </div>
   <div>
   {
        listOfBoxes.map((box, idx) => { 
            return(
                console.log(box),
                <div key={idx} style={{backgroundColor: box.color, height: "100px", width: "100px"}}>
                    <h3>This box is #{idx}</h3>
                    <h3>{box.color}</h3>
                </div>
            ) })
    }
   </div>
   </>
  )
}

export default Boxgenerator