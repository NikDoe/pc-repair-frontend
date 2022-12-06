import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useLocation } from 'react-router-dom';

const DashFooter = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	const onGoHomeClicked = () => navigate('/dash');

	let goHomeButton = null;
	if (pathname !== '/dash') {
		goHomeButton = (
			<button
				className="dash-footer__button icon-button"
				title="Home"
				onClick={onGoHomeClicked}
			>
				<FontAwesomeIcon icon={faHouse} />
			</button>
		);
	}

	return (
		<footer className="dash-footer">
			{goHomeButton}
			<p>Текущий пользователь:</p>
			<p>Статус:</p>
		</footer>
	);
};
export default DashFooter;
