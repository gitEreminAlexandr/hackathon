import { Menu, Input, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logo from './img/logo.png';
import classes from './Headers.module.css';
import { useDispatch } from 'react-redux';
import { SET_TYPE_MODAL } from '../../redux/typeModal';
import { LOGIN, REGISTOR } from '../../constant';

export const Headers = () => {
	const dispatch = useDispatch();
	const logunUser = false;

	const handelOpenModalLogin = () => {
		dispatch(SET_TYPE_MODAL(LOGIN))
	}

	const handelOpenModalRegistr = () => {
		dispatch(SET_TYPE_MODAL(REGISTOR))
	}

	return (
		<div className={classes.conteiner}>
			<img src={logo} alt="logo" width="60" height="60px" />
			<h1>Финансы</h1>
			{logunUser ? (
				<>
					<Menu mode="horizontal" defaultSelectedKeys={['portfel']}>
						<Menu.Item key="portfel">Портфель</Menu.Item>
						<Menu.Item key="analitika">Аналитика</Menu.Item>
						<Menu.Item key="terminal">Терминал</Menu.Item>
					</Menu>
					<Input.Search
						placeholder="Поиск..."
						style={{
							width: 200,
						}}
					/>
					<Avatar
						className={classes.avatar}
						size="large"
						icon={<UserOutlined />}
					/>
					<Button>Выход</Button>
				</>
			) : (
				<div className={classes.wrapper}>
					<Button className={classes.button_login} type="link" onClick={handelOpenModalLogin}>Войти</Button>
					<Button className={classes.button} onClick={handelOpenModalRegistr}>Регистрация</Button>
				</div>
			)}
		</div>
	);
};
