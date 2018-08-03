import * as React from 'react';
//import { CommonHelloComponent } from '@common/hello';

export const HelloComponent = () => {
  
  import (/* webpackMode: "eager", webpackChunkName: "entity1" */ '@entity1/loader').then( (ex) => {
    console.log("working");
    const app: any = new ex.default();
    app.printTest();
           
  
  });

  return (
    <div>
    <h2>EntryPoint2 component !</h2>
    </div>
  );
}
