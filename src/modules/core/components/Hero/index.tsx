import React from 'react';
import { cn } from "@/modules/core/lib/cn";
import heroBanner from '../../../../../public/images/hero-banner.png';

import {Typography} from '../typography'

const Index = () => {
  return (
    <section className='bg-cover bg-center object-cover object-center max-h-full' style={{backgroundImage: `url(${heroBanner.src})`}}>
      <div className='container'>
        
        <Typography Tag='h1'>
            Create 4G/5G mobile proxies using Android devices
        </Typography>
        <Typography Tag='label'> Hello</Typography>

      </div>
    </section>
  );
}

export default Index;
