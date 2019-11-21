import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaRegStar, FaStar, FaRegTrashAlt } from 'react-icons/fa'; // react-icons 개발 시 엄청 좋은 듯


const TaskItemContainer = styled.div`
    cursor: pointer;
    padding: 1rem;
    border-bottom: 1px solid #737373;

    & * {
    user-select: none;
    color: #fafafafa;
    font-size: 0.9rem;
    }
`;

const TaskItem1 = styled.div`
    display: flex;
    flex-direction: row;
`;

const TaskItemContent = styled.div`
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const TaskItemContentFin = styled.span`
    text-decoration: line-through;
`;

const TaskItemContentFinIcon = styled.span`
    margin: 0 0.8rem;
    padding: 0.3rem;
    border-radius: 8px;
    background-color: #15859e;
    color: #fff;
`;

const TaskItemPin = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TaskItemPinIconDone = styled.div`
    margin-right: 1rem;
    color: #45cae7;

    & * {
    color: #45cae7;
    }
`;

const TaskItemPinIcon = styled.div`
    margin-right: 1rem;
`;

const TaskItemRemove = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        & * {
            color: tomato;
        }
    }
`;


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
        onPinTask(); // props
        e.stopPropagation(); 
    }

    const onRemove = (e) => {
        onRemoveTask(); // props
        e.stopPropagation();
    }

    // console.log({task})
    console.table(task)
    // UI 설계
    return (
        <TaskItemContainer onClick={onArchive}>
            <TaskItem1>
                <TaskItemContent>
                    { archive ? (
                        <div>
                            <TaskItemContentFin>
                                {content}
                            </TaskItemContentFin>
                            <TaskItemContentFinIcon>
                                finished
                            </TaskItemContentFinIcon>
                        </div>
                    ) : (<span>{content}</span>)}
                </TaskItemContent>
                    {/* 핀 */}
                        <TaskItemPin onClick={onPin}>
                            { pinned ? (
                                <TaskItemPinIconDone>
                                    <FaStar/>
                                </TaskItemPinIconDone>
                            ) : (
                                <TaskItemPinIcon>
                                    <FaRegStar/>
                                </TaskItemPinIcon>
                            )}
                        </TaskItemPin>
                    {/* 지우기 */}
                    <TaskItemRemove onClick={onRemove}>
                        <FaRegTrashAlt />
                    </TaskItemRemove>           
            </TaskItem1>
        </TaskItemContainer>
    )
}

export default TaskItem;