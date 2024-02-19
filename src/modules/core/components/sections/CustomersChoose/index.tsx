import React from 'react';
import Image from 'next/image';
import { Typography } from '../../typography';
import customers from '../../../../../../public/images/customers-bg.png';

const cardsData = [
    {
        id: 1,
        icon: 'price-svgrepo.svg',
        heading: 'Low Price',
        description: 'The cost of using the app is from 6 to 10 $/month.'
    },
    {
        id: 2,
        icon: 'plane-svgrepo.svg',
        heading: 'Fast and simple',
        description: 'Create private mobile proxies quickly and easily'
    },
    {
        id: 3,
        icon: 'maximum-control.svg',
        heading: 'Maximum control',
        description: 'We support all the necessary features for working with a proxy'
    },
    {
        id: 4,
        icon: 'tariffs.svg',
        heading: 'Tariffs with limited traffic distribution',
        description: 'Working through GenProxy looks like visiting sites from your phone (not hotspot).'
    },
    {
        id: 5,
        icon: 'world.svg',
        heading: 'We work all across the world',
        description: 'Launch mobile proxies in any corner of the world'
    },
];

const CustomerChooseSection = () => {
    return (
        <section className='bg-cover bg-center object-cover object-center pt-20 pb-44 relative' style={{ backgroundImage: `url(${customers.src})` }}>
            <div className="container mx-auto">
                <Typography Tag='h2' variant='sectitle' className="text-center mb-20">
                    Why customers choose mobile proxies from GenProxy
                </Typography>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-5">
                    {cardsData.map(card => (
                        <div key={card.id} className="text-center px-6">
                            <Image src={`/images/svg/${card.icon}`} alt={card.heading} width={80} height={80} className="mb-4 mx-auto" />
                            <Typography Tag='h3' variant='subText' className='text-primary-pink-1 mb-6'>{card.heading}</Typography>
                            <Typography Tag='p' variant='text' className='text-black'>
                                {card.description}
                            </Typography>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CustomerChooseSection;
