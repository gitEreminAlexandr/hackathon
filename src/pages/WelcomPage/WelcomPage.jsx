import { useState } from 'react';
import { Col, Row, Typography, Button, Popover, Steps } from 'antd';

import classes from './WelcomPage.module.css';
import image1 from './img/image1.png';
import image2 from './img/image2.png';
import image3 from './img/image3.jpg';

export const WelcomPage = () => {
	const { Title } = Typography;
	const [page, setPage] = useState(0);

	const customDot = (dot, { status, index }) => (
		<Popover
			content={
				<span>
					step {index} status: {status}
				</span>
			}
		>
			{dot}
		</Popover>
	);
	return (
		<>
			<Row>
				<Col
					className={classes.pointer}
					span={12}
					onClick={() => {
						if (page !== 0) {
							setPage(page - 1);
						}
					}}
				>
					<Row justify="center">
						<Col span={15} className={classes.conteiner}>
							{page === 0 && (
								<>
									<Title level={2}>Инвестируйте в ценные бумаги</Title>
									<p>Открытие брокерского счета за 5 минут без визита в офис</p>
								</>
							)}
							{page === 1 && (
								<>
									<Title level={2}>Бесплатный демо-счет</Title>
									<p>
										Ознакомьтесь со всеми возможностями работы с торговым
										терминалом на биржевых рынках, используя демо-счет с
										виртуальными деньгами
									</p>
								</>
							)}
							{page === 2 && (
								<>
									<Title level={2}>Обучение инвестированию</Title>
									<p>
										Рассказываем как научиться грамотно инвестировать и
										минимизировать риск потери денег. Топ-20 главных правил для
										новчиков
									</p>
								</>
							)}
						</Col>
					</Row>
				</Col>
				<Col
					className={classes.pointer}
					span={12}
					onClick={() => {
						if (page !== 2) {
							setPage(page + 1);
						}
					}}
				>
					<img
						src={page === 0 ? image1 : page === 2 ? image2 : image3}
						alt="content"
						width={541}
						height={585}
					/>
				</Col>
			</Row>
			<Row className={classes.wrapper}>
				<Col span={20} className={classes.footer}>
					<Steps
						className={classes.steps}
						current={page}
						progressDot={customDot}
						items={[
							{
								title: '',
							},
							{
								title: '',
							},
							{
								title: '',
							},
						]}
					/>
				</Col>
				<Col>
					<Button className={classes.button} type="link">
						Пропустить
					</Button>
				</Col>
			</Row>
		</>
	);
};
