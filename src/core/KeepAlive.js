import { useCallback, useReducer } from "react";
import KeepAliveReducer from "./KeepAliveReducer";
import { KeepAliveContext } from "./KeepAliveContext";
import { CREATED, CREATING } from "./actionTypes";
export function KeepAlive(props) {
  // {
  //   home: {
  //     keepAliveId: 'home',
  //     reactElement: reactElement,
  //     nodes: nodes
  //     status: create | created
  //   }
  // }
  const [keepAliveStates, dispatch] = useReducer(KeepAliveReducer, {});
  const setKeepAliveState = useCallback(
    ({ reactElement, keepAliveId }) => {
      if (!keepAliveStates[keepAliveId]) {
        // first time
        dispatch({
          type: CREATING,
          payload: {
            keepAliveId,
            reactElement,
          },
        });
      }
    },
    [keepAliveStates]
  );
  return (
    <KeepAliveContext.Provider
      value={{
        keepAliveStates,
        setKeepAliveState,
        dispatch,
      }}
    >
      {props.children}
      {Object.values(keepAliveStates).map(({ keepAliveId, reactElement }) => {
        return (
          <div
            key={keepAliveId}
            ref={(node) => {
              if (node && !keepAliveStates[keepAliveId].nodes) {
                dispatch({
                  type: CREATED,
                  payload: {
                    keepAliveId,
                    nodes: [...node.childNodes],
                  },
                });
              }
            }}
          >
            {reactElement}
          </div>
        );
      })}
    </KeepAliveContext.Provider>
  );
}

// ref={node=><div />}
