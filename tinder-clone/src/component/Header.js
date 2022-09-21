import  './styles/header.css'
import logo from './res/tinder-logo.png'
import PersonIcon from '@mui/icons-material/Person';
import { IconButton } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';

const Header = () => {
  return (
    <div className="header">
    <IconButton>
        <PersonIcon fontSize='large' className='header-icon' />
    </IconButton>

    <img src={logo}
    className='header-logo'
    alt='tinder-logo' />

    <IconButton>
    <ForumIcon fontSize='large' className='header-icon' />
    </IconButton>
    </div>
  )
}

export default Header
