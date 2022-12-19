import NewNoteForm from './NewNoteForm';
import { useGetUsersQuery } from '../users/usersApiSlice';
import { PuffLoader } from 'react-spinners';

const NewNote = () => {
	const { users } = useGetUsersQuery('usersList', {
		selectFromResult: ({ data }) => ({
			users: data?.ids.map(id => data?.entities[id]),
		}),
	});

	if (!users?.length) return <PuffLoader color={'#FFF'} />;

	return <NewNoteForm users={users} />;
};
export default NewNote;
