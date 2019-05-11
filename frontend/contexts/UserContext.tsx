import React, { createContext, ReactNode, useState } from "react";

export const defaults = {
	id: "48732093478543",
	name: "George",
	email: "email@gmail.com",
}

export interface IUser {
	id: string;
	name: string;
	email: string;
}

interface IProps {
	children: ReactNode;
}

export const UserContext = createContext<IUser | null>(null)
const Provider: any = UserContext.Provider

export const UserContextProvider = (props: IProps) => {
	let [user, setUser] = useState(defaults)

	return (
		<Provider value={[user, setUser]}>
			{props.children}
		</Provider>
	)
}