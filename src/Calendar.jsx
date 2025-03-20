import DayCard from "./DayCard"
import { useEffect, useState } from "react";
import ChevronRight from "./icons/ChevronRight";
import ChevronLeft from "./icons/ChevronLeft";

export default function Calendar() {
    const [displayedDate, setDisplayedDate] = useState(new Date())

    const handleDateUpdate = (days) => {
        setDisplayedDate(d =>  new Date(d.getFullYear(), d.getMonth(), d.getDate() + days));
      }

    return (
        <div className="calendar">
            <a className="icon" onClick={() => handleDateUpdate(-1)}><ChevronLeft/></a>
            <div>
                <DayCard date={displayedDate}/>
            </div>
            <a className="icon" onClick={() => handleDateUpdate(1)}><ChevronRight/></a>
        </div>
    )
}