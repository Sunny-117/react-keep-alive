import { useContext, useEffect, useRef } from "react";
import { KeepAliveContext } from "./KeepAliveContext";

export function keepAliveTransfer(KeepAliveComponent, KeepAliveId) {
  return function (props) {
    const _ref = useRef(null);
    const { keepAliveStates, setKeepAliveState } = useContext(KeepAliveContext);
    useEffect(() => {
      const state = keepAliveStates[KeepAliveId];
      if (state && state.nodes) {
        state.nodes.forEach((node) => _ref.current.appendChild(node));
      } else {
        setKeepAliveState({
          reactElement: <KeepAliveComponent {...props} />,
          KeepAliveId,
        });
      }
    }, [keepAliveStates, props, setKeepAliveState]);
    return <div ref={_ref}></div>;
  };
}
