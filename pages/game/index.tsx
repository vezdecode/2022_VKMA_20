import React, { useState } from 'react';
import Button from '../../components/Button';
import { screens } from '../../shared/types/game';

const GamePage = (): JSX.Element => {
	const [currentPlayer, setCurrentPlayer] = useState<number>(0);
	const [screen, setScreen] = useState<screens>('common');
	const players = JSON.parse(localStorage.getItem('players'));
	
	const newPlayer = () => {
		if ((currentPlayer + 1) < localStorage.playersCount) {
			setCurrentPlayer(currentPlayer+1);
			setScreen('common');
		}
		else {
			setCurrentPlayer(0);
			setScreen('playing');
		}
	};

	function getContent(){
		switch (screen) {
			case 'common':
				return(
					<div className='mt-8'>
						<p className='font-semibold text-xl'>
							Привет! Настала твоя очередь узнать свою роль. Для этого просто нажми на кнопку
						</p>
						<Button className='px-16 mt-4' onClick={() => setScreen('personal')}>
							Показать мою роль
						</Button>
					</div>
				);
			case 'personal':
				return(
					<div className='mt-8'>
						<p className='font-semibold text-xl'>
							{players[currentPlayer] ? 
								(`Ты шпион. Не раскрой себя! Твоя задача выжить всего 
									${localStorage.playersCount} минут, ты справишься!`) 
								: (`Ты обычный житель. Твоя задача максимально быстро раскрыть шпиона и выиграть игру. 
								Локация: Казино`)}
						</p>

						<Button className='px-16 mt-4' onClick={() => newPlayer()}>
							Хорошо, я понял
						</Button>
					</div>
				);
			case 'playing':
				return(
					<div className='mt-8'>
						<p className='font-semibold text-xl'>
							Игра идет. Удачи обеим сторонам! Да победит сиьнейший!
						</p>
					</div>
				);
		};
	}

	return(
		<div className='p-8'>
			<header>
				<h1 className='font-semibold text-3xl'>
					Находка для шпиона!
					{' '}
					<span className='text-staticPrimary font-bold'>
						{localStorage.playersCount}
						{' '}
						игроков
					</span>
				</h1>

				{screen != 'playing' && (
					<h2 className='text-2xl'>
						Игрок
						{' '}
						<span className='text-staticPrimary font-bold'>
							№
							{currentPlayer + 1}	
						</span>
					</h2>
				)}
			</header>

			{getContent()}
		</div>
	);
};

export default GamePage;
