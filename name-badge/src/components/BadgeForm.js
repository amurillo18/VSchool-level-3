import React from "react"
import Badge from "./Badge"
import './BadgeForm.css'

function BadgeForm (){

    // setting initial state for form
    const [formData, setFormData] = React.useState(() => ({
        firstName: "",
        lastName: "",
        email: "",
        birthPlace: "",
        phoneNumber: "",
        favFood: "",
        about:""
    }))
// setting initial state for nameBadges
    const [nameBadges, setNameBadges] = React.useState(()=>[])

    function handleChange(event) {
        const {name, value} = event.target
        setFormData(prevState=> ({
            ...prevState,
            [name]: value
        }))
    }

    function handleSubmit(event) {
        event.preventDefault()

        setNameBadges(prevState => ([
            ...prevState,
            formData
        ]))

        setFormData({
            firstName: "",
            lastName: "",
            email: "",
            birthPlace: "",
            phoneNumber: "",
            favFood: "",
            about:""
        })
    }

    const list = nameBadges.map(info => (
        <Badge
        key={info.email}
        info= {info}
        />
    ))

 return (
    <div>
        <form className="form" onSubmit={handleSubmit}>
            <input
            id="firstName"
            minLength="3" required
            type="text"
            value={formData.firstName}
            onChange={handleChange}
            name="firstName"
            placeholder="First Name"
            />

            <input
            id="lastName"
            minLength="3" required
            type="text"
            value={formData.lastName}
            onChange={handleChange}
            name="lastName"
            placeholder="Last Name"
            />

            <input
            id="email"
            minLength="3" required
            type="email"
            value={formData.email}
            onChange={handleChange}
            name="email"
            placeholder="Email"
            />

            <input
            id="birthPlace"
            minLength="3" required
            type="text"
            value={formData.birthPlace}
            onChange={handleChange}
            name="birthPlace"
            placeholder="Place of Birth"
            />

            <input
            id="phoneNumber"
            minLength="3" required
            type="number"
            value={formData.phoneNumber}
            onChange={handleChange}
            name="phoneNumber"
            placeholder="Phone Number"
            />

            <input
            id="favFood"
            minLength="3" required
            type="text"
            value={formData.favFood}
            onChange={handleChange}
            name="favFood"
            placeholder="Favorite Food"
            />

            <textarea
            rows="5"
            cols="60"
            id="about"
            name="about"
            value={formData.about}
            onChange={handleChange}
            placeholder="Tell us about yourself"
            />

            <button>Submit</button>
        </form>
        {list}
    </div>
 )
}

export default BadgeForm