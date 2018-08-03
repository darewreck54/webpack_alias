import * as React from 'react';
import * as ally from 'ally.js';

export const Hello2Component = () => {
  const a = ally.maintain.disabled({
    filter: '#test'
  });
  
  return (
    <div>
    <h2>EntryPoint 1 component !</h2>
    
    <button> Click </button>
    </div>
  );
}
