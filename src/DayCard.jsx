export default function DayCard({date, meals}) {
    const title = date.toLocaleDateString("pl",{weekday: "long", month: "long", day: "numeric"});
    if(meals == undefined || meals.length === 0) {
        return (
            <div className="card">
                <h3>{title}</h3>
                <div>
                    <button>Dodaj posiłek</button>
                </div>
            </div>
        );
    }

    return(
        <div className="card">
            <h3>{title}</h3>
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
                    {meals.map(m => 
                    <tr>
                        <td>{m.time}</td>
                        <td>{m.name}</td>
                        <td>{m.calories}</td>
                        <td>{m.proteins}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}