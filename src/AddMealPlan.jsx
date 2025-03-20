import { Link } from "react-router";

export default function AddMealPlan() {
    return (
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
            <Link to="/meals">Anuluj</Link>
        </form>
      </div>
    )
}