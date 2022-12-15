import { useSelector } from 'react-redux';
import { selectAllUsers } from '../users/usersApiSlice';
import NewNoteForm from './NewNoteForm';

const NewNote = () => {
	const users = useSelector(selectAllUsers);

	if (!users?.length) return <p>В настоящее время недоступно</p>;

	return <NewNoteForm users={users} />;
};
export default NewNote;
