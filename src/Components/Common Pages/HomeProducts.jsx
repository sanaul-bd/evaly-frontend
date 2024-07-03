import React from 'react';

const HomeProducts = () => {
    return (
        <div>
            <div className='flex justify-between'>
                <span>Products</span>
                <span>Show More</span>
            </div>
            {/*  */}
            <div>
                <div className="card-body bg-slate-100 w-32 h-40 rounded-md my-2 shadow-lg lg:my-4">
                    <div className="image">
                        image
                    </div>
                    <div className="title">
                        <span>Shop name</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeProducts;