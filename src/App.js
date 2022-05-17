import './App.css';
import Header from './Header.js';
import Card from './card.js';
import info from './info.js';

function App (){
  const mainElements = info.map(card=>{
    return <Card 
    key={card.id}
    {...card}
    />
  })
  return(
<div>
  <Header />
   <div style={{margin:"1rem"}} >
  {mainElements}
  </div>
</div>

  )
}

export default App;