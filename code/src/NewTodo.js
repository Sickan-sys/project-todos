import React, { useState } from 'react';
///import List from "@material-ui/core/List";

import { useDispatch } from './store';
import { useFlasher } from './utils';

const NewTodo = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');
  const addTodo = () => {
    dispatch({ type: 'ADD_TODO', title: text });
    setText('');
  };
  return (
    <list ref={useFlasher()}>
      <input
        value={text}
        placeholder="Enter title..."
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={addTodo}>Add</button>
    </list>
  );
};

export default React.memo(NewTodo);
