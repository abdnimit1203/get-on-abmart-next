import BottomNav from '@/components/Navbar/BottomNav';
import React from 'react';

const layoutLoginRegister = ({children}) => {
    return (
        <div>
            <div className='bg-neutral'>

            <BottomNav/>
            </div>
            <div className="px-[5%] min-h-screen bg-slate-100">{children}</div>
        </div>
    );
};

export default layoutLoginRegister;