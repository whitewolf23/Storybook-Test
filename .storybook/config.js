import { configure } from '@storybook/react';

import requestContext from 'require-context.macro';
import 'util.scss';

// *.stories.js으로 끝나는 모든 파일을 import 합니다.
// components 폴더에서 story.js 라는 파일을 한꺼번에 등록 시킬때 사용.

// const req = requestContext('../src/components', true, /\.stories\.js$/);

// function loadStories() {
//     req.keys().forEach(filename => req(filename));
// }

// configure(loadStories, module)




// automatically import all files ending in *.stories.js
configure(require.context('../stories', true, /\.stories\.js$/), module);
