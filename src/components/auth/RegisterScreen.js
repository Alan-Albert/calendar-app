import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../../actions/ui";
import { startRegisterWithEmailPassName } from "../../actions/auth";

export const RegisterScreen = () => {
	const dispatch = useDispatch();
	const { msgError } = useSelector((state) => state.ui);
	// console.log(msgError);

	const [formValues, handleInputChange] = useForm({
		name: "Alan",
		email: "alanalbert@gmail.com",
		password: "123456",
		password2: "123456",
	});

	const { name, email, password, password2 } = formValues;

	const handleRegister = (e) => {
		e.preventDefault();
		if (isFormValid()) {
			console.log("Formulario correcto");
			console.log(name, email, password, password2);
			dispatch(startRegisterWithEmailPassName(email, name, password));
		}
	};

	const isFormValid = () => {
		if (name.trim().length === 0) {
			console.log("Name is required");
			dispatch(setError("Name is required"));
			return false;
		} else if (!validator.isEmail(email)) {
			console.log("Email not valid");
			dispatch(setError("Email not valid"));
			return false;
		} else if (password !== password2 || password.length < 5) {
			console.log(
				"Passwords should match and have at least 6 characters"
			);
			dispatch(
				setError(
					"Passwords should match and have at least 6 characters"
				)
			);
			return false;
		}
		dispatch(removeError());
		return true;
	};

	return (
		<>
			<h3 className="auth__title">Register</h3>
			<form onSubmit={handleRegister}>
				{msgError && (
					<div className="auth__alert-error">{msgError}</div>
				)}
				<input
					type="text"
					placeholder="Name"
					name="name"
					className="auth__input"
					autoComplete="off"
					value={name}
					onChange={handleInputChange}
				/>

				<input
					type="text"
					placeholder="Email"
					name="email"
					className="auth__input"
					autoComplete="off"
					value={email}
					onChange={handleInputChange}
				/>

				<input
					type="password"
					placeholder="Password"
					name="password"
					className="auth__input"
					value={password}
					onChange={handleInputChange}
				/>
				<input
					type="password"
					placeholder="Confirm password"
					name="password2"
					className="auth__input"
					value={password2}
					onChange={handleInputChange}
				/>

				<button
					type="submit"
					className="btn btn-primary btn-block mb-5"
				>
					Register
				</button>

				<Link to="/auth/login" className="link">
					Already registered?
				</Link>
			</form>
		</>
	);
};
