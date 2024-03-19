function createProductValidation(props) {
	if (!props?.title?.trim()) {
		throw new Error("Title is not provided. Please provide a title");
	}
	if (!props?.description?.trim()) {
		throw new Error(
			"Description is not provided. Please provide a description"
		);
	}
}

export { createProductValidation };
