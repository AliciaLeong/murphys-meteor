import React from 'react';
import TopMenu from '../components/TopMenu';
import Middle from '../components/Middle';
import Bottom from '../components/Bottomz';

export default class Murphys extends React.Component {
  render() {
    return (
        <div>
          <TopMenu/>
          <Middle/>
          <Bottom/>
        </div>
    );
  }
}
