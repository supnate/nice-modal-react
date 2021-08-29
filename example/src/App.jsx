// import { useEffect } from 'react';
// import NiceModal, { useModal } from '@ebay/nice-modal-react';
// import MyAntdModal from './MyAntdModal';
// import MyAntdDrawer from './MyAntdDrawer';
// import MyBootstrapDialog from './MyBootstrapDialog';
// import MyMuiDialog from './MyMuiDialog';
import useHash from './useHash';
import CodeViewer from './CodeViewer';
// import codeMyAntdModal from '!!raw-loader!./MyAntdModal.tsx';//eslint-disable-line
import './App.css';

import UserList from './UserList';
// const UserList = () => null;
// NiceModal.register('mm', MyAntdModal, { name: 'nate333' });

const examples = {
  real: {
    name: 'Real Case',
    component: UserList,
    description: 'Show a dialog to create a new user or edit user info.',
    code: ['UserList.jsx', 'UserInfoModal.jsx'],
  },
  mui: {
    name: 'Material UI',
  },
  antd: {
    name: 'Ant Design',
    code: ['MyAntdModal.tsx', 'MyAntdModal.tsx'],
  },
  bootstrap: {
    name: 'Bootstrap React',
  },
  redux: {
    name: 'Redux Integration',
  },
};

function App() {
  const current = useHash() || 'real';

  const renderExample = () => {
    const item = examples[current];
    if (!item || !item.component) {
      return <span style={{ color: 'red' }}>Error: example "{current}" not found.</span>;
    }
    const Comp = item.component;
    return (
      <>
        <h1>
          {item.name}
          <p className="example-description">{item.description}</p>
        </h1>
        <Comp />
      </>
    );
  };
  const example = examples[current] || {};
  return (
    <div className="app">
      <div className="sider">
        <h1>
          <span className="header-name">@ebay/nice-modal-react</span>
          <span className="example-title">Examples</span>
        </h1>
        <div className="scroll-container">
          <ul>
            {Object.keys(examples).map((key) => (
              <li key={key}>
                <a href={`#${key}`} className={current === key ? 'active' : ''}>
                  {examples[key].name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="social">
          <a href="https://github.com/ebay/nice-modal-react">
            <img src="https://img.shields.io/github/stars/eBay/nice-modal-react?style=social" alt="Github Repo" />
          </a>
          <br />
          <a href="https://ebay.github.io/nice-modal-react/api">
            <img src="https://img.shields.io/badge/API-Reference-green" alt="api reference" />
          </a>
          <br />
          <a href="https://codesandbox.io/s/github/ebay/nice-modal-react/tree/master/examples">
            <img width="150px" src="https://codesandbox.io/static/img/play-codesandbox.svg" alt="codesandbox" />
          </a>
        </div>
      </div>
      <div>
        <div className="example-container">{renderExample()}</div>
        <div className="code-container">
          {example.code?.map((f) => (
            <CodeViewer filename={f} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;