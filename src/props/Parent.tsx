import { ChildAsFC } from './Child';

const Parent = () => {
	return (
		<ChildAsFC color='orange' onClick={() => console.log('clicked')}>
			justin
		</ChildAsFC>
	);
};

export default Parent;
