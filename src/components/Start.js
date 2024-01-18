import React from 'react';
import {
	Stack,
	Heading,
	Text,
	List,
	ListItem,
	ListIcon,
	Button,
} from '@chakra-ui/core';
import Link from 'next/link';
import {useRouter} from 'next/router';

const Start = () => {
	const [loading, setLoading] = React.useState(false);
	const router = useRouter();

	React.useEffect(() => {
		const handleRouteChange = () => {
			setLoading(true);
		};
		router.events.on('routeChangeStart', handleRouteChange);
		return () => {
			router.events.off('routeChangeStart', handleRouteChange);
		};
	}, [router.events]);

	React.useEffect(() => {
		const handleRouteChange = () => {
			setLoading(false);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<Stack
			borderWidth="2px"
			rounded="xl"
			width="80%"
			p={6}
			spacing={4}
			maxW="600px" // Adjusted maximum width
			mx="auto" // Centered content
			boxShadow="md" // Added box shadow for a lifted look
		>
			<Heading
				as="h2"
				alignSelf="center"
				fontSize="xl"
				color="yellow.600"
			>
				<span role="img" aria-label="Nerd Face">
					🧠
				</span>{' '}
				Welcome to the Challenge!
			</Heading>
			<Text>
				Let the trivia fun begin! Familiarize yourself with the rules
				below:
			</Text>
			<List as="ol" spacing={3}>
				<ListItem>
					<ListIcon icon="check" color="green.500" />
					Choose your answer and submit to reveal the correct one.
				</ListItem>
				<ListItem>
					<ListIcon icon="check" color="green.500" />
					Incorrect answers won't affect your score - play
					stress-free!
				</ListItem>
				<ListItem>
					<ListIcon icon="check" color="green.500" />
					Beat the clock - answer as many questions as you can in the
					least time.
				</ListItem>
				<ListItem>
					<ListIcon icon="check" color="green.500" />
					Take your time after submission; the timer won't increase
					during the review.
				</ListItem>
				<ListItem>
					<ListIcon icon="check" color="green.500" />
					Check your rank on the scoreboard - aim for the top!
				</ListItem>
			</List>
			<Link href="/trivia">
				<Button
					isLoading={loading}
					width="100%"
					variantColor="yellow"
					alignSelf="center"
				>
					Let's Start!
				</Button>
			</Link>
		</Stack>
	);
};

export default Start;
