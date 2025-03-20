import { Outlet } from "react-router";

export default function MainLayout() {
    return(
        <>
            <nav className="nav">
                <a className="logo">SimpleFitness</a>
            </nav>
            <div className="content">
                <Outlet/>
            </div>
        </>
    )
}