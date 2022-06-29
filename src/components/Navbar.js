import {Appbar, Toolbar, IconButton, Typography} from "@mui/material"
import QuestionMarkSharpIcon from '@mui/icons-material/QuestionMarkSharp';
import { QuestionMark } from "@mui/icons-material";


export default function Navbar() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <QuestionMark />
                </IconButton>
                <Typography variant='h6' component='div'>Michael Webb's Portfolio</Typography>
            </Toolbar>
        </AppBar>

    )
}