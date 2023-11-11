
import { Box, Button, Grid, Paper, TextField } from '@mui/material';
import { Auth, User } from 'firebase/auth';
import { Firestore } from 'firebase/firestore';
import { SignInRequired, useRequiredSignIn } from '../components/UseSignIn';
import { SignOutButton } from '../components/SignOutButton';
import { FestiveBackground } from '../components/FestiveBackground';
import { NavigateFunction, useNavigate } from 'react-router';
import { fetchAccount, fetchSecretSanta } from '../model/Model';
import { useState } from 'react';


export const Home = (props: {
	firestore: Firestore,
	auth: Auth
}) => {
	const user = useRequiredSignIn(props.auth);
	return (<>
		<FestiveBackground>
			<SignInRequired auth={props.auth} user={user}>
				<HomeSignedIn {...props} user={user!!} />
			</SignInRequired>
		</FestiveBackground>
	</>);
};

const HomeSignedIn = (props: {
	auth: Auth,
	firestore: Firestore,
	user: User
}) => {
	const navigate = useNavigate();

	return (<>
		<Paper
			sx={{ p: 2 }}
			elevation={3}>
			<Grid
				container
				spacing={1}
				textAlign="center"
				justifyContent='center'
				alignItems="center">
				<Grid item xs={12}>
					<h1>Welcome, {props.user.displayName}!</h1>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Button
						variant="contained"
						onClick={() => navigate("/create")}>
						Create New Secret Santa
					</Button>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Button
						variant="contained"
						onClick={() => navigate("/join")}>
						Join a Secret Santa
					</Button>
				</Grid>
				<Grid item xs={6}>
					<SignOutButton auth={props.auth} />
				</Grid>
			</Grid>
		</Paper>
	</>);
};