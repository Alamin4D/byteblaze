
import { RingLoader } from 'react-spinners';

const Loader = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-[calc(100vh-116px)]'>
            <RingLoader size={50} color='#F92FD3' />
        </div>
    );
};

export default Loader;