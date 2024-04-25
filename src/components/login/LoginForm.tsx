import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const LoginForm: React.FC = () => {
	const [user, setUser] = useState({
		username: "",
		password: "",
	});

	const [error, setError] = useState("");

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = event.target;
		setUser((prevUser) => ({
			...prevUser,
			[name]: value,
		}));
	};

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit}>
			<Card>
				<CardHeader className="pb-10">
					<CardTitle>Login</CardTitle>
					<CardDescription>Enter your credentials</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="flex flex-col space-y-4">
						<label className="input input-bordered flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="w-4 h-4 opacity-70"
							>
								<path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
							</svg>
							<input
								type="text"
								className="grow"
								name="username"
								placeholder="Username"
								onChange={handleChange}
							/>
						</label>
						<label className="input input-bordered flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 16 16"
								fill="currentColor"
								className="w-4 h-4 opacity-70"
							>
								<path
									fillRule="evenodd"
									d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
									clipRule="evenodd"
								/>
							</svg>
							<input
								type="password"
								className="grow"
								name="password"
								placeholder="Password"
								onChange={handleChange}
							/>
						</label>
						{error && <p className="text-red-500">{error}</p>}
					</div>
				</CardContent>
				<CardFooter className="flex justify-end">
					<button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
						Login
					</button>
				</CardFooter>
			</Card>
		</form>
	);
};

export default LoginForm;
