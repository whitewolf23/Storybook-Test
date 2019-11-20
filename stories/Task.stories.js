import React from 'react';
import { storiesOf }from '@storybook/react';
import { action } from '@storybook/addon-actions' ;

import Task from 'components/Task';

// 가상 데이터 작성
export const task = {
    id : '1',
    title : 'Test Task',
    state : 'TASK_INBOX',
    updateAt: new Date(2019, 0, 1, 9, 0)
};
// 액션 작성 
export const actions = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask')
};

// 1. 스토리에 모듈을 추가해서 시나리오들을 테스트 하는것 같다.
storiesOf('Task', module)
    .add('default', () => <Task task={task} {...actions} /> )
    .add('pinned', () => <Task task={{...task, state: 'TASK_PINNED'}} {...actions} />)
    .add('archived', () => <Task task={{...task, state: 'TASK_ARCHIVED'}} {...actions} />)

