import React from 'react'
import { storiesOf} from '@storybook/react';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';

import {Links} from 'components/Links'
import {TestVideo} from 'components/TestVideo'
import {TestVideoPlaylist} from 'components/TestVideoPlaylist'
import {ThumbNailList} from 'components/ThumbNailList'
import {ThumbNailListItem} from 'components/ThumbNailListItem'

storiesOf('TestVideo', module)
    .addDecorator(StoryRouter()) // 해당 데코레이터가 없다면, Link 기능을 사용하지 못함.
    .add('link', () => <Links />)
    .add('default', () => <TestVideo/>)
    .add('playlist-default', () => <TestVideoPlaylist />)
    .add('thumbnail-list', () => <ThumbNailList />)
    .add('thumbnail-list-item', () => <ThumbNailListItem />)