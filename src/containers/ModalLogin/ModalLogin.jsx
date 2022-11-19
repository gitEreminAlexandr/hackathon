import { Modal, Row, Col, Typography, Button, Input, Checkbox } from 'antd';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { LOGIN, REGISTOR } from '../../constant';
import { CLOSE_MODAL, SET_TYPE_MODAL } from '../../redux/typeModal';
import gu from './img/gu.png';
import classes from './ModalLogin.module.css';

export const ModalLogin = () => {
	const dispatch = useDispatch();
	const { Title, Text, Link } = Typography;
	const type = useSelector((state) => state.typeModal.type);
	const [data, setData] = useState({
		username: '',
		password: '',
		email: '',
	})

	const hendleOnChangeName = (event) => {
		setData({...data, username: event.target.value})
	}

	const hendleOnChangePassword = (event) => {
		setData({...data, password: event.target.value})
	}

	const hendleOnChangeEmail = (event) => {
		setData({...data, email: event.target.value})
	}

	const handelTypeModal = () => {
		dispatch(SET_TYPE_MODAL(REGISTOR));
	};

	const handleCloseModal = () => {
		dispatch(CLOSE_MODAL());
	};

	return (
		<Modal onCancel={handleCloseModal} footer={[]} open keyboard={false}>
			<div className={classes.modal}>
				<Row>
					<Col span={24} className={classes.conteiner_title}>
						<Title className={classes.title} level={3}>
							{type === LOGIN ? 'Войти с помощью' : 'Регистрация с помощью'}
						</Title>
					</Col>
				</Row>
				<Row className={classes.conteiner_login}>
					<Button className={classes.button_gu}>
						<img src={gu} alt="кнопка" width={90} height={20} />
					</Button>
				</Row>
				<Row className={classes.conteiner_login}>
					<Text className={classes.text} type="secondary">
						или {type === LOGIN ? 'войти' : 'регистрация'} по телефону
					</Text>
				</Row>
				<form>
					<Row className={classes.conteiner_input}>
						{type === REGISTOR && (
							<Input
								onChange={hendleOnChangeName}
								type="text"
								required
								placeholder="Имя"
								className={classes.input}
							/>
						)}
						<Input
							onChange={hendleOnChangeEmail}
							type="mail"
							placeholder="Email"
							required
							className={classes.input}
						/>
						{type === LOGIN ? (
							<Input
								onChange={hendleOnChangePassword}
								required
								type="password"
								placeholder="Пароль"
								className={classes.input}
							/>
						) : (
							<Col className={classes.passwords}>
								<Input
									onChange={hendleOnChangePassword}
									required
									type="password"
									placeholder="Пароль"
									className={classes.password}
								/>
								<Input
									required
									type="password"
									placeholder="Повторить пароль*"
									className={classes.password}
								/>
							</Col>
						)}
						<Button
							type="primary"
							htmlType="submit"
							className={classes.button}
							block
						>
							{type === LOGIN ? 'Войти' : 'Регистрация'}
						</Button>
					</Row>

					<Row className={classes.footer}>
						{type === LOGIN ? (
							<>
								<Button type="link">Забыть пароль?</Button>
								<Text type="secondary">
									Не зарегистрированы?
									<Button type="link" onClick={handelTypeModal}>
										Зарегистрироваться
									</Button>
								</Text>
							</>
						) : (
							<div className={classes.conteiner_checkbox}>
								<Checkbox required>
									<Text>
										Я прочитал и принимаю{' '}
										<Link target="_blank">
											Условия пользования и Политику конфедициальности *
										</Link>
									</Text>
								</Checkbox>
							</div>
						)}
					</Row>
				</form>
			</div>
		</Modal>
	);
};
