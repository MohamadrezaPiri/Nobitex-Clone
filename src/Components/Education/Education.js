import React from 'react';
import './Education.css';
import education1 from './download1.webp';
import education2 from './download2.webp';
import education3 from './download3.webp';
import education4 from './download4.webp';

const Education = () => {
    return (
        <div className="education-container">
            <h1 className='educations-title'>همراه با نوبیتکس بیشتر یاد بگیرید</h1>
            <div className='educations'>
                <div className='row1'>
                    <div className="education">
                        <div className="education-image-div">
                            <img src={education1} alt="راهنمای خرید ارز دیجیتال" className="education-image" />
                        </div>
                        <h3 className="education-title">راهنمای خرید ارز دیجیتال</h3>
                    </div>
                    <div className="education">
                        <div className="education-image-div">
                            <img src={education2} alt="ویدئوهای آموزشی" className="education-image" />
                        </div>
                        <h3 className="education-title"> ویدئوهای آموزشی  </h3>
                    </div>
                </div>
                <div className="row2">
                    <div className="education">
                        <div className="education-image-div">
                            <img src={education3} alt="نوبیتکس بلاگ" className="education-image" />
                        </div>
                        <h3 className="education-title">  نوبیتکس بلاگ </h3>
                    </div>
                    <div className="education">
                        <div className="education-image-div">
                            <img src={education4} alt="سوالات متداول" className="education-image" />
                        </div>
                        <h3 className="education-title">سوالات متداول   </h3>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Education