import { useState } from 'react'

export default function useInputValidation(initialValue) {
	const [value, setValue] = useState(initialValue)

	const onChange = (event) => {
		setValue(event.target.value)
	}

	const error = () => value.search(/\d/) >= 0 ? "text-danger" : null

	return {value, onChange, error}
}