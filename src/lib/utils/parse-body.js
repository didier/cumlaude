// A function that takes either an object or encoded form data and returns an object.
export const parseBody = (data) => {
	if (data.get) {
		// If the data is ReadOnlyFormData, parse it.
		return Object.fromEntries(data)
	}

	// If the data is an object, return it.
	return data
}
