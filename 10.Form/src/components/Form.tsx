import { SyntheticEvent, useState } from "react";

export default function Form(){
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        comments:"",
        isChecked:true,
        employment:"",
        favColor:""
    })

    function handleChange(event:any){
        const {value, type, checked, name} = event.target;
        setFormData((prevValues)=>{
            return {
                ...prevValues,
                [name]: (type==="checkbox")?checked:value
            }
        })
    }

    function handleSubmit(event:SyntheticEvent){
        event.preventDefault();
        console.log(formData)
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <input
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
                value={formData.firstName}
                className="input--text"
            />
            <input
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
                value={formData.lastName}
                className="input--text"
            />
            <textarea
                placeholder="Comments"
                name="comments"
                onChange={handleChange}
                value={formData.comments}
                className="input--text"
            />
            <div>
                <input
                    type="checkbox"
                    id="isChecked"
                    name="isChecked"
                    onChange={handleChange}
                    checked={formData.isChecked}
                />
                <label htmlFor="isChecked">Is Checked?</label>
            </div>
            <br/>
            <fieldset>
                <legend>Employment status</legend>
                <input
                    type="radio"
                    id="unemployed"
                    onChange={handleChange}
                    name="employment"
                    value="unemployed"
                    checked={formData.employment==="unemployed"}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br/>
                <input
                    type="radio"
                    id="part-time"
                    onChange={handleChange}
                    name="employment"
                    value="part-time"
                    checked={formData.employment==="part-time"}
                />
                <label htmlFor="part-time">Part Time</label>
                <br/>
                <input
                    type="radio"
                    id="employed"
                    onChange={handleChange}
                    name="employment"
                    value="employed"
                    checked={formData.employment==="employed"}
                />
                <label htmlFor="employed">Employed</label>
                <br/>
            </fieldset>
            <br/>
            <label htmlFor="favColor">Favorite Color</label>
            <select 
                id="favColor"
                name="favColor"
                value={formData.favColor}
                onChange={handleChange}
            >
                <option value="">--Choose--</option>
                <option value="red">Red</option>
                <option value="green">Green</option>
                <option value="orange">Orange</option>
                <option value="violet">Violet</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="pink">Pink</option>
            </select>
            <button>Submit</button>
            {/* Button inside Form is by default - submit */}
        </form>
    );
}