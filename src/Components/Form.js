import { useState } from "react";
export default function Form({ onAddItems }) {
    const [description, setDescription] = useState("")
    const [choice, setChoice] = useState(1)
  
  
    function handleSubmit(e) {
      e.preventDefault()
      if (!description) return;
      const newItem = {
        description, choice, packed:
          false, id: Date.now()
      }
      console.log(newItem)
      onAddItems(newItem)
      setDescription("")
      setChoice(1)
    }
    return (
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>what do you need for the trip 😍?</h3>
        <select value={choice}
          onChange={(e) => setChoice(Number(e.target.value))} >
          {Array.from({ length: 20 }, (v, i) => i + 1).
            map(num => <option value={num} key={num}
            >{num}</option>)
          }
        </select>
        <input type="text" placeholder='item...'
          value={description}
          onChange={(e) => setDescription(e.target.value)} />
        <button>Add</button>
      </form>
  
    )
  
  }