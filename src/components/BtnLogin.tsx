import { MouseEventHandler } from 'react';
import { Button } from '@chakra-ui/react';

interface botao {
	children?: string
	onClick: MouseEventHandler
}

export const BtnLogin = ({ children, onClick }: botao) => {
	return (
		<Button
			onClick={onClick}
			size='lg'
			bg={'#ff8a00'}
			color={'white'}
			_hover={{ bg: '#FFFF',color:'#000' }}
			>
			{children}
		</Button>
	);
};