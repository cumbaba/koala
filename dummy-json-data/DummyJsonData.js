import React from 'react';

export default class DummyJsonData extends React.Component {
  constructor(props) {
    super(props);

    this.callbackFunction = data => {
      this.state = {
        data: data,
      };
    };
  }
}
