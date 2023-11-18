import { Button, AppBar, Typography, Toolbar, Avatar, CssBaseline, Stack } from "@mui/material";
import styles from '../Css/Nav.module.css';
import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <>
            <CssBaseline />
            <AppBar
                position="static"
                color="default"
                elevation={0}
                sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
            >
                <Toolbar sx={{ flexWrap: 'wrap' }}>
                    <Typography variant="h3" component='div' color='chocolate' sx={{ flexGrow: 1, fontWeight: 600 }}>
                        MovieReel
                    </Typography>
                    <Stack direction='row' spacing={2}>

                        <Button
                            component={Link}
                            to='/'
                            className={styles.navbar}
                            variant="button"
                            color="text.primary"
                            sx={{ my: 1, mx: 1 }}
                        >
                            Home
                        </Button>
                        <Button
                            component={Link}
                            to='about'
                            className={styles.navbar}
                            variant="button"
                            color="text.primary"
                            sx={{ my: 1, mx: 1 }}
                        >
                            About
                        </Button>
                        <Button
                            component={Link}
                            to='/create'
                            className={styles.navbar}
                            variant="button"
                            color="text.primary"
                            sx={{ my: 1, mx: 1 }}
                        >
                            Create
                        </Button>
                        
                        <Button
                         component={Link}
                         to='/login'
                         variant="outlined" 
                         sx={{ my: 1, mx: 1.5 }}>
                            Login
                        </Button>
                        <Button href="#" variant="contained" sx={{ my: 1, mx: 1.5 }}>
                            Register
                        </Button>
                        <Avatar alt="Elon Musk" src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982181284/elon-musk-9781982181284_hr.jpg" />

                    </Stack>
                </Toolbar>
            </AppBar>
        </>
    );
};