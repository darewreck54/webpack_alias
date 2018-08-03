import * as React from 'react';
import { CommonHelloComponent } from '@common/hello';

export const HelloComponent = () => {
  return (
    <div>
    <h2>EntryPoint component !</h2>
    <CommonHelloComponent/>

    <button> Click </button>
    </div>
  );
}
