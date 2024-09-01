import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div>
            {/* Navbar */}
            <div className='h-16'>
                <Navbar />
            </div>
            {/* Outlet */}
            <div className='min-h-[calc(100vh-116px)]'>
                <Outlet />
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Main;