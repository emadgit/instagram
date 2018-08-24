import React from 'react';
import HeaderComponent from './HeaderComponent/HeaderComponent'
import ContentComponent from './ContentComponent/ContentComponent'
import '../index.css'

export default () => {
    return (
        <div>
           <HeaderComponent />
           <div className="mt-50">
                <ContentComponent />
           </div>
        </div>
    )
}