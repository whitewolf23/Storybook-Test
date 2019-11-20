import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaRegStar, FaStar, FaRegTrashAlt } from 'react-icons/fa'; // react-icons 개발 시 엄청 좋은 듯

/**
 *
 *
 * @param {*} {
 *     task: {
 *         idx, content, archive, pinned
 *     }, // 과제정보
 *     onPinTask, // 과제 핀 설정 함수
 *     onArchiveTask, // 과제 완료 함수
 *     onRemoveTask // 과제 삭제 함수
 * }
 * @returns
 */
const TaskItem = ({
    // task: {
    //     idx, content, archive, pinned
    // },
    task,
    onPinTask,
    onArchiveTask,
    onRemoveTask
}) => {
    const { idx, content, archive, pinned } = task;

    const onArchive = (e) => {
        onArchiveTask(); // props
        // 난 이렇게 복잡한 이벤트 전달 방식 알고 싶지 않고, 그냥 원하는 화면 요소의 이벤트만 신경 쓰고 싶어요.
        e.stopPropagation(); 
    }

    const onPin = (e) => {
        onArchiveTask(); // props
        e.onPinTask();
    }

    const onRemove = (e) => {
        onRemoveTask(); // props
        e.stopPropagation();
    }

    // console.log({task})
    console.table(task)
    // UI 설계
    return (
        <div className="TaskItem-container" onClick={onArchive}>
            <div className="TaskItem">
                {/* 획득 */}
                <div className="TaskItem-content">
                    { archive ? (
                        <div>
                            <span className="TaskItem-content-fin">{content}</span>
                            <span className="TaskItem-content-fin-icon">Finish</span>
                        </div>
                    ) : (
                        <span> {content} </span>
                    )}
                </div>
                    {/* 핀 */}
                <div className="TaskItem-pin" onClick={onPin} >
                    { pinned ?
                        <FaStar className="TaskItem-pin-iconDone" /> :
                        <FaRegStar className="TaskItem-pin-icon" />
                    }
                </div>
                    {/* 지우기 */}
                <div className="TaskItem-remove" onClick={onRemove} >
                    <FaRegTrashAlt className="TaskItem-remove-icon" />
                </div>
            </div>
        </div>
    )
}

export default TaskItem;