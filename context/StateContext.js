import { createContext, useState } from 'react';
import useSWR from 'swr';

export const StateContext = createContext();
export default function StateContextProvider(props) {
  const [selectedTask, setSelectedTask] = useState({ id: 0, title: '' });
  return (
    <StateContext.Provider
      value={{
        selectedTask,
        setSelectedTask,
      }}
    >
      {props.children}
    </StateContext.Provider>
  );
}
