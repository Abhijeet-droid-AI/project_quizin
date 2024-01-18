import {Flex, Text, Link as ChakraLink} from '@chakra-ui/core';

const Footer = () => (
	<Flex as="footer" w="100%" h="4rem" align="center" justify="center">
		<Text>
			Made by{' '}
			<ChakraLink href="https://github.com/Abhijeet-droid-AI" isExternal>
				Abhijeet
			</ChakraLink>{' '}
			@Quizin.
		</Text>
	</Flex>
);

export default Footer;
