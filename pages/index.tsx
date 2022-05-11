import type { NextPage } from 'next';
import {
	Box,
	Button,
	Container,
	Flex,
	HStack,
	Heading,
	Text,
} from '@chakra-ui/react';

const Home: NextPage = () => {
	return (
		<Box>
			<Box top='0' left='0' ml={[20, 40]}>
				<Heading mb={4} fontSize='40px' color='black.600'>
					Budget
				</Heading>
				<Text as='i' fontSize='30px' color='blue.700'>
					Let&apos;s do it right.
				</Text>
			</Box>
			<Container>
				<HStack direction='row' gap={8} my={4} align='center' ml={8}>
					<Button colorScheme='blue' variant='solid'>
						Create Budget
					</Button>
					<Button colorScheme='blue' variant='outline'>
						Create Expense
					</Button>
				</HStack>
			</Container>
		</Box>
	);
};

export default Home;
