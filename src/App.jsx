import { useState } from 'react';
import DayCard from './DayCard';

function App() {
  const [displayedDate, setDisplayedDate] = useState(new Date())

  const handleDateUpdate = (days) => {
    setDisplayedDate(d =>  new Date(d.getFullYear(), d.getMonth(), d.getDate() + days));
  }


  return (
    <>
      <div>
        <h1>utwórz potrawę</h1>
        <form>
          <div>
            <label htmlFor="name">Nazwa</label>
            <input type="text" id="name"/>
          </div>
          <div>
            <label htmlFor="unit">Jednostka</label>
            <select id="unit">
              <option>Sztuki</option>
              <option>ml</option>
              <option>g</option>
            </select>
          </div>
          <div>
            <div>
              <label htmlFor="ingredient-name">Nazwa</label>
              <input type="text" id="ingredient-name"/>
            </div>
            <div>
              <label htmlFor="calories">Kalorie(kcal)/100[g/ml]</label>
              <input type="number" id="calories"/>
            </div>
            <div>
              <label htmlFor="proteins">Białko(g)/100[g/ml]</label>
              <input type="number" id="proteins"/>
            </div>
            <div>
              <label htmlFor="proteins">Ilość(g/ml)</label>
              <input type="number" id="proteins"/>
            </div>
          </div>
          <button type="button">Dodaj składnik</button>
          <table>
          <thead>
            <tr>
              <th>Nazwa</th>
              <th>Kalorie(kcal/100g)</th>
              <th>Białko(g/100g)</th>
              <th>Ilość(g)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ser biały</td>
              <td>300</td>
              <td>500</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
        </form>
      </div>
      <div>
        <h1>Utwórz plan</h1>
        <form>
          <div>
            <label htmlFor="time">Pora dnia</label>
            <select id="time">
              <option>Śniadanie</option>
              <option>Obiad</option>
              <option>Kolacja</option>
            </select>
          </div>
          <div>
            <label htmlFor="name">Nazwa</label>
            <input type="text" id="name"/>
            <button type="button">Utwórz potrawę</button>
          </div>
            <div>
              <label htmlFor="servings">Ilość</label>
              <input type="number" id="servings"/>
            </div>
          <button type="button">Dodaj</button>
        </form>
      </div>
      <div className="card">
        <h3>{displayedDate.toLocaleDateString("pl",{weekday: "long", month: "long", day: "numeric"})}</h3>
        <p>Brak posiłków</p>
        <button>Dodaj posiłek</button>
      </div>
      <div className="card">
        <h3>{displayedDate.toLocaleDateString("pl",{weekday: "long", month: "long", day: "numeric"})}</h3>
        <div>Kalorie: 500 kcal, białko: 4g</div>
        <table className="meals">
          <thead>
            <tr>
              <th>Pora</th>
              <th>Potrawa</th>
              <th>Kalorie(kcal)</th>
              <th>Białko(g)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Śniadanie</td>
              <td>Kanapki z serem zółtym</td>
              <td>500</td>
              <td>4</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br/>
      <div>
        <button onClick={() => handleDateUpdate(-1)}>{"<"}</button>
        <DayCard date={displayedDate}/>
        <button onClick={() => handleDateUpdate(1)}>{">"}</button>
      </div>
    </>
  )
}

export default App
