import MiniCard from '@/components/Cards/MiniCard';
import React from 'react';
export const metadata ={
    title: "About ",
    description: "This is about page"
}
const AboutPage = () => {
    return (
        <div className='py-10'>
           
            <button className='button-1 '>What About You!</button>
            <MiniCard/>
        </div>
    );
};

export default AboutPage;