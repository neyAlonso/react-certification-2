import React, { useEffect, useState } from "react"

const categoryAPI = 'https://opentdb.com/api_category.php'

function SelectCategory({ setSelectedCategory }) {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        makeRequest()
    }, [])

    const makeRequest = () => {
        fetch(categoryAPI)
            .then(response => response.json())
            .then(data => setCategories(data.trivia_categories))
    }

    const handleOnChange = (event) => {
        setSelectedCategory(event.target.value)
    }

    return (
        <select id='categorySelect' defaultValue='' onChange={handleOnChange} >
            <option value='' disabled>Select a category</option>
            {
                categories.map(category => (
                    <option
                        key={category.id}
                        value={category.id}
                    >
                        {category.name}
                    </option>
                ))
            }
        </select>
    )
}

export default SelectCategory
