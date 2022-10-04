
import { AppBar, Toolbar, Typography, styled } from "@mui/material";

const Component = styled(AppBar)`
    background: #FFFFFF;
    color: #000;
`


const Header = () => {
    
    return (
        <Component>
            <Toolbar>
                <Typography>HOME</Typography>
                <Typography>ABOUT</Typography>
                <Typography>CONTACT</Typography>
                <Typography>LOGOUT</Typography>
            </Toolbar>
        </Component>
    )
}
export default Header;