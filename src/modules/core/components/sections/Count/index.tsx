import React from 'react';
import CountUp from './count';
import countbg from '../../../../../../public/images/count-bg.png';

const ExampleComponent: React.FC = () => {
    return (
        <div className='container'>
            <div className='bg-cover bg-center object-cover object-center py-28 relative rounded-3xl px-40 -mt-28' style={{ backgroundImage: `url(${countbg.src})` }}>
                <div className='grid grid-cols-3 '>
                    <div>
                        <CountUp start={0} end={5000} duration={5} />
                        <span className='text-white font-black text-3xxl leading-md'>+</span>
                    </div>
                    <div className='text-center'>
                        <CountUp start={0} end={1500} duration={4} />
                        <span className='text-white font-black text-3xxl leading-md'>+</span>
                    </div>
                    <div className='text-right'>
                        <CountUp start={0} end={99.9} duration={3} />
                        <span className='text-white font-black text-3xxl leading-md'>%</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExampleComponent;
