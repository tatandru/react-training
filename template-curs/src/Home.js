import { Outlet } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div>header</div>
            <div>
                <Outlet />
            </div>
            <div>

            </div>
        </div>
    );
}

export default Home;