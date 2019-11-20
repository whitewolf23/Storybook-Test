import React from 'react';
import {storiesOf} from '@storybook/react';
import { action } from '@storybook/addon-actions';

import {TaskItem} from 'components/TaskItem';

export const task = {
    idx: 1,
    content: '오늘할일',
    archive: false,
    pinned: false,
  };

export const actions = {
    onPinTask: action('onPinTask'),
    onArchiveTask: action('onArchiveTask'),
    onRemoveTask: action('onRemoveTask'),
  };

storiesOf('TaskItem', module)
    .add('default', () => <TaskItem task={task} {...actions} />)
    //  순서 중요, finished 가 나오지 않느다.
    // .add('archived', () => <TaskItem task={{archive: true, ...task }} actions={actions} />) /
    .add('archived', () => <TaskItem task={{...task, archive: true}} {...actions} />)
    .add('pinned', () => <TaskItem task={{...task, pinned: true}} {...actions} />)
    .add('archived and pinned', () => <TaskItem task={{...task, archive: true, pinned: true}} {...actions} />)
