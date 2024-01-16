import React from 'react';

const CardDay = () => {
    return (
        <div className="card">
            <div className="card__wrap">
                <div className="card__title">Monday</div>
                <div className="card__body">
                    <div className="card__deg">16  &#8451;</div>
                    <div className="card__img">
                        <i className="pe-7w-rain-alt pe-5x pe-va"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDay;