import { Menu, Input, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import logo from './img/logo.png';
import classes from './Headers.module.css';

export const Headers = () => {
	const logunUser = false;
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
					<Button className={classes.button_login} type="link">Войти</Button>
					<Button className={classes.button}>Регистрация</Button>
				</div>
			)}
		</div>
	);
};
