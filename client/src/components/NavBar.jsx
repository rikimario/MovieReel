import { Button, AppBar, Typography, Link, Toolbar, Avatar, ThemeProvider } from "@mui/material";
import styles from '../Css/Nav.module.css';

export default function NavBar() {
    return (

        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography variant="h4" component='div' noWrap sx={{ flexGrow: 1 }}>
                    <Link className={styles.logo} href="/">MovieReel</Link>
                </Typography>

                <nav>
                    <Link
                        className={styles.navbar}
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Home
                    </Link>
                    <Link
                        className={styles.navbar}
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        About
                    </Link>
                    <Link
                        className={styles.navbar}
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Contact
                    </Link>
                </nav>
                <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5 }}>
                    Login
                </Button>
                <Button href="#" variant="contained" sx={{ my: 1, mx: 1.5 }}>
                    Register
                </Button>
                <Avatar alt="Elon Musk" src="https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982181284/elon-musk-9781982181284_hr.jpg" />
            </Toolbar>
        </AppBar>
    );
};