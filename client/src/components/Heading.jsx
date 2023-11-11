import { CssBaseline, Box, Container, Typography } from '@mui/material';
import styles from '../Css/Heading.module.css';

export default function SimpleContainer() {
    return (
        <>
            <CssBaseline />
            <Container maxWidth="false" >
                <Box sx={{ height: '100vh' }} className={styles.box}>
                    <Typography >
                    </Typography>

                </Box>
            </Container>
        </>
    );
}