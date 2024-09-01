import React, { createContext, useState } from 'react';

// Create the context
export const ComputationContext = createContext();

// Create a provider component
export const ComputationProvider = ({ children }) => {
	const [currentInput, setCurrentInput] = useState('');
	const [result, setResult] = useState(null);

	// Function to handle adding inputs
	const addInput = (value) => {
		if (result) {
			clearInput();
		}
		setCurrentInput((prev) => prev + value);
	};

	const deleteInput = () => {
		if (currentInput.length > 0) {
			setCurrentInput((prev) => prev.slice(0, prev.length - 1));
		} else {
			clearInput();
		}
	};

	// Function to handle clearing the input
	const clearInput = () => {
		setCurrentInput('');
		setResult(null);
	};

	// Function to handle the computation
	const computeResult = () => {
		try {
			// Use eval for simplicity, but be cautious with this in production
			const computed = eval(currentInput); // Replace with a safer method in production
			setResult(computed);
		} catch (error) {
			setResult('Error');
		}
	};

	return (
		<ComputationContext.Provider
			value={{
				currentInput,
				result,
				addInput,
				deleteInput,
				clearInput,
				computeResult,
			}}
		>
			{children}
		</ComputationContext.Provider>
	);
};
