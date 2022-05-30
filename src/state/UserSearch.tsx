import { useState } from 'react';

const users = [
	{ name: 'Justin', age: 23 },
	{ name: 'Stevie', age: 65 },
	{ name: 'BB King', age: 80 },
];

const UserSearch: React.FC = () => {
	const [name, setName] = useState('');
	const [user, setUser] = useState<{ name: string; age: number } | undefined>();

	const onClick = () => {
		const foundUser = users.find((user) => {
			return user.name === name;
		});

		setUser(foundUser);
	};

	return (
		<div>
			<input
				type='text'
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={onClick}>Find user</button>
			<div>
				{user?.name} {user?.age}
			</div>
		</div>
	);
};

export default UserSearch;
