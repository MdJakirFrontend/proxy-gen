import React from 'react';
import heroBanner from '../../../../../../public/images/hero-banner.png';
import trustpilot from '../../../../../../public/images/trustpilot.png';
import Image from 'next/image';

import { Typography } from '../../typography'
import Button from '../../Button/button';

const Hero = () => {

  return (
    <section className='bg-cover bg-center object-cover object-center py-60 relative' style={{ backgroundImage: `url(${heroBanner.src})` }}>
      <div className='container'>
        <div className='w-5/12'>
          <Typography Tag='h1' variant='title' className='mb-6'>
            Create 4G/5G mobile proxies using Android devices
          </Typography>
          <Typography Tag='p' variant='p' className='mb-9'>
            Mobile network connection (simcard) in your Android is required to make 4G proxies. Use numerous devices and create 4G mobile proxy farm for large-scale output!
          </Typography>
          <Button className='mb-6'>Learn More</Button>
          <Image src={trustpilot} alt="Trustpilot Logo" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
