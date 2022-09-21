import './styles/swipe.css'
import ReplayIcon from '@mui/icons-material/Replay';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FlashOnIcon from '@mui/icons-material/FlashOn';
import { IconButton } from '@mui/material';

const SwipeButton = ({setPeople}) => {
  return (
    <div className='swipeButton'>
      <IconButton className='swipeButton-repeat' onClick={() => setPeople([])}>
        <ReplayIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipeButton-left' onClick={() => setPeople([])}>
        <CloseIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipeButton-star' onClick={(e) => e.target.classList.toggle('yellow')}>
        <StarRateIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipeButton-right' onClick={(e) => e.target.classList.toggle('red')}>
        <FavoriteIcon fontSize='large' />
      </IconButton>
      <IconButton className='swipeButton-lighting' onClick={(e) => e.target.classList.toggle('yellow')}>
        <FlashOnIcon fontSize='large' />
      </IconButton>
    </div>
  )
}

export default SwipeButton
