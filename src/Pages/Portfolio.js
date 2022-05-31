import React from "react"
import Props from "./props/Props.js"
import felix from "../Pages/props/images/felix.jpg"
import pumkin from "../Pages/props/images/pumkin.jpg"
import Box from "./Box"
import boxes from "./boxes"
function Portfolio(){
    const [squares, setSquares] = React.useState(boxes)
    const [starWarsData, setStarWarsData] = React.useState({})
    const [count, setCount] = React.useState(1)
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    
    function handleSubmit(event) {
        event.preventDefault()
        // submitToApi(formData)
        console.log(formData)
    }
    
    React.useEffect(function() {
        console.log("Effect ran")
        fetch(`https://swapi.dev/api/people/${count}`)
            .then(res => res.json())
            .then(data => setStarWarsData(data))
    }, [count])

    function toggle(id) {
        setSquares(item => {
            return item.map(item => {
                return item.id === id ?{...item, on: !item.on}: item
            })
        })
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            toggle={toggle}
        />
    ))
    return (
        <div className="wrapper">
            <h1>So, I never worked on projects and decided to show my skills.</h1>
            <div className="skill">
                <h2>This is me using props</h2>
                <div className="contacts">
                <Props 
                    img={felix}
                    name="Felix"
                    phone="(212) 555-4567"
                    email="thecat@hotmail.com"
                />
                <Props 
                    img={pumkin}
                    name="Pumpkin"
                    phone="(0800) CAT KING"
                    email="pumpkin@scrimba.com"
                />
                </div>
           </div>
           <div className="skill2">
            <h2>This me using React.useState, you can interact with it and it will change his color on your click</h2>   
             {squareElements}
           </div>
           <div className="skill3">
               <h2>Getting data from API and using React.useEffect(you can click that button and get another character)</h2>
              <h2>The count is {count}</h2>
              <button onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>
              <p>Name:{starWarsData.name}</p>
              <p>Height:{starWarsData.height}</p>
              <p>Mass:{starWarsData.mass}</p>
           </div>
           <div className="skill4">
               <h2>Also i can submit forms and a lot more if you want to.<br/>
                   P.s Every skill that i showed here requires JavaScript and i also made that too </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="First Name"
                    onChange={handleChange}
                    name="firstName"
                    value={formData.firstName}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    onChange={handleChange}
                    name="lastName"
                    value={formData.lastName}
                />
                <input
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    name="email"
                    value={formData.email}
                />
                <textarea 
                    value={formData.comments}
                    placeholder="Comments"
                    onChange={handleChange}
                    name="comments"
                />
                <input 
                    type="checkbox" 
                    id="isFriendly" 
                    checked={formData.isFriendly}
                    onChange={handleChange}
                    name="isFriendly"
                />
                <label htmlFor="isFriendly">Are you friendly?</label>
                <br />
                <br />
                
                <fieldset>
                    <legend>Current employment status</legend>
                    <input 
                        type="radio"
                        id="unemployed"
                        name="employment"
                        value="unemployed"
                        checked={formData.employment === "unemployed"}
                        onChange={handleChange}
                    />
                    <label htmlFor="unemployed">Unemployed</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="part-time"
                        name="employment"
                        value="part-time"
                        checked={formData.employment === "part-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="part-time">Part-time</label>
                    <br />
                    
                    <input 
                        type="radio"
                        id="full-time"
                        name="employment"
                        value="full-time"
                        checked={formData.employment === "full-time"}
                        onChange={handleChange}
                    />
                    <label htmlFor="full-time">Full-time</label>
                    <br />
                </fieldset>
                <br />
                
                <label htmlFor="favColor">What is your favorite color?</label>
                <br />
                <select 
                    id="favColor" 
                    value={formData.favColor}
                    onChange={handleChange}
                    name="favColor"
                >
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
                <br />
                <br />
                <button>Submit</button>
            </form>
           </div>
           <h2>You can check this websites source code in my GitHub account, link in the Contact page</h2>
       </div>
    )
}
export default Portfolio;