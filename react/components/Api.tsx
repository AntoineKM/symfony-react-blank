import React from "react";

const Api: React.FC = () => {
  const [state, setState] = React.useState<any>(null);

  React.useEffect(() => {
    const updateData = async () => {
      const res = await fetch("/api");
      const data = await res.json();
      setState(data);
    };
    updateData();
  }, [setState]);

  return <div>Api: {state ? state.message : "loading..."}</div>;
};

export default Api;
