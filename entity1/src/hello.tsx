import * as React from 'react';
import * as ally from 'ally.js';
import * as loader from './loader';

export const Hello2Component = () => {
  const a = ally.maintain.disabled({
    filter: '#test'
  });
  var test: any = loader.default;
  return (
    <div>
    <h2>EntryPoint 1 component !</h2>
    
    <button> Click </button>
    </div>
  );
}
