
import React, { useEffect } from 'react';
import { Box, Button, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'firebase/auth';
import { signInGoogle, useSignIn } from '../components/UseSignIn';
import { FestiveBackgroundAnimation } from '../components/FestiveBackgroundAnimation';
import { SignInButton } from '../components/SignInButton';

export const SignIn = (props: {
	auth: Auth
}) => {
	const foundUser = useSignIn(props.auth);
	const navigate = useNavigate();

	useEffect(() => {
		if (foundUser) navigate("home");
	}, [foundUser]);

	useEffect(() => {
        // Disable scrolling
        document.body.style.overflow = 'hidden';

        // Re-enable scrolling when the component is unmounted
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

	const h1Style = {
		fontFamily: 'Arial, sans-serif', 
	};

	return (<>
		<FestiveBackgroundAnimation>
				<Grid
					container
					direction="column"
					textAlign="center">
					<Grid item xs={12}>
						<Box sx = {{
							zIndex: 5,
							position: 'relative'}}>
								<h1 style={h1Style}>Secret Santa</h1>
						</Box>
					</Grid>
					<Grid item xs={12}>
					<Box sx = {{
							zIndex: 5,
							position: 'relative'}}>
					<SignInButton auth={props.auth}/>
					</Box>
					</Grid>
				</Grid>
		</FestiveBackgroundAnimation>
	</>);
}
