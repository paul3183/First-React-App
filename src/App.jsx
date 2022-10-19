import './App.css'
import Micomida from './components/ComidasFavoritas'
import Card from './components/CompGeneral'
import MisHobbies from './components/MisHobbies'
import MiStack from './components/MiStack'
import SobreMi from './components/SobreMi'
import TiempoLibre from './components/TiempoLibre'

function App() {
  return (
    <div className="App">
      {/* <SobreMi/> */}
      {/* <MisHobbies/>
     <TiempoLibre/>
     <Micomida/>
     <MiStack/> */}
     <Card  color='green' title='About Me' item1='Paul Ruiz' item2='Favorite Movie: Fast and Furious' item3='Favorite Music: Beatles'/>
     <Card sayHello="hobbies" color='red' title='Hobbies' item1='Muay Thai' item2='Video Game' item3='Drive my Car'/>
     <Card color='blue' title='FreeTime' item1='Run' item2='Program' item3='Play with my son'/>
     <Card color='pink' title='Food' item1='Lomo Saltado' item2='Ceviche' item3='Picante de Cuy'/>
     <Card color='yellow' title='Technologies' item1='HTML' item2='CSS' item3='JavaScripts'/>
    </div>
  )
}

export default App
