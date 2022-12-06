import { Link } from 'react-router-dom';

const Welcome = () => {
	const date = new Date();
	const today = new Intl.DateTimeFormat('ru-RU', {
		dateStyle: 'full',
		timeStyle: 'short',
	}).format(date);

	return (
		<section className="welcome">
			<p>{today}</p>

			<h1>с возвращением</h1>

			<p>
				<Link to="/dash/notes">Показать заметки</Link>
			</p>

			<p>
				<Link to="/dash/users">Показать настройки пользователей</Link>
			</p>
		</section>
	);
};
export default Welcome;
