import React from 'react';
import PropTypes from 'prop-types';

// styled commponent 적용해보기

export default function Task ({task: {id, title, state}, onArchiveTask, onPinTask }){
    return (
        <div className={`list-item ${state}`}>
            <label className="checkbox">
                <input 
                    type="checkbox"
                    defaultChecked = {state === 'TASK_ARCHIVED'}
                    disabled={true}
                    name="checked"
                /> 
                {/* 인라인 함수를 되도록 쓰지 말아야 하지만 test 중이니 그냥 .. */}
                <span className="checkbox-custom" onClick={() => onArchiveTask(id)}></span>
            </label>

            <div className="title">
                <input type="text" value={title} readOnly={true} placeholder="input title"></input>
            </div>
          
            <div className="actions" onClick={event => event.stopPropagation()}>
                {state != 'TASK_ARCHIVED' && (
                    <a onClick={() => onPinTask(id)}>
                        <span className={`icon-star`}></span>
                    </a>
                )}
            </div>
        </div>
    );
}

//  validate 
Task.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired,
    }),
    onArchiveTask: PropTypes.func,
    onPinTask: PropTypes.func
}