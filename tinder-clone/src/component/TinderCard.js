import './styles/tinderCard.css'
import TinderCard from 'react-tinder-card'

const TinderCards = ({people}) => {
    
    const changeNameFormat = (name) => {
        name = [...name]
        for(let i = 0; i <= name.length - 1; i++) {
            if(name[i] === ' ') name[i+1] = name[i + 1].toUpperCase()
        }
        name[0] = name[0].toUpperCase()
        return name.join('')
    }
    const swiped = (direction, nameToDelete) => {
        console.log("Removing : " + nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + "left the screen")
    }
  return (
    <div className="tinder-card">
    <div className='tindercard-container'>
         {people.map(p => (
        <TinderCard
        key={p._id}
        className='swipe' 
        preventSwipe={['up', 'dodown']}
        onSwipe={(dir) => swiped(dir, p.name)}
        onCardLeftScreen={() => outOfFrame(p.name)}>
            <div
            style={{backgroundImage: `url(${p.src})`}}
            className='card'>
                <h3>{changeNameFormat(p.name)}</h3>
            </div>
        </TinderCard>
      ))}
    </div>
     
    </div>
  )
}

export default TinderCards
