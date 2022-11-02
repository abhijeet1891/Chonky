// import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { FullFileBrowser, ChonkyActions } from '../src';

const data = [
    {
        id: '0',
        name: 'Root',
        isDir: true,
    },
    {
      id: '1',
      name: 'Administration',
      isDir: true,
      files: [
          {
              id: '11',
              name: 'Performance',
              isDir: true,
              files: [
                  {
                      id: '111',
                      name: 'Quaterly Reports',
                      isDir: true,
                      files: [
                          {
                              id: '1111',
                              name: '2020-qty-report1.pdf',
                          },
                          {
                              id: '1112',
                              name: '2020-qty-report2.pdf',
                          },
                      ],
                  },
              ],
          },
      ],
  },
  { id: '2', name: 'Closure', isDir: true },
  { id: '3', name: 'Formation', isDir: true },
  { id: '4', name: 'Closure', isDir: true },
  { id: '5', name: 'Formation', isDir: true },
  { id: '6', name: 'Closure', isDir: true },
  { id: '7', name: 'Formation', isDir: true },
  { id: '8', name: 'Closure', isDir: true },
  { id: '9', name: 'Formation', isDir: true },
  { id: '10', name: 'Closure', isDir: true },
  { id: '11', name: 'Formation', isDir: true },
  { id: '12', name: 'Closure', isDir: true },
  { id: '13', name: 'Formation', isDir: true },
  { id: '14', name: 'Closure', isDir: true },
  { id: '15', name: 'Formation', isDir: true },
  { id: '16', name: 'Closure', isDir: true },
  { id: '17', name: 'Formation ', isDir: true },
];

const App = () => {
    return (
        <div style={{ height: 400 }}>
            <FullFileBrowser
                files={data}
                defaultFileViewActionId={ChonkyActions.EnableListView.id}
                fileListStyle={{ height: 70, width: 182, gridHeight: 150 }}
            />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
