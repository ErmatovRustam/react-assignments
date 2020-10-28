import React from 'react';

import Welcome from './Welcome'
import Signin from './Signin'

function Greeting(props) {
  if (props.data.logged) {
    return <Welcome data={props.data} />
  }
  return <Signin/>
}
