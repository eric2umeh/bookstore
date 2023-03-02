import React, {useState, useEffect} from 'react';

const ProgressProvider = ({ valueStart, children, valueEnd}) => {
    const [value, setValue] = useState(valueStart);

    useEffect(() => {
        setValue(valueEnd);
    }, [valueEnd]);

  return (
    children(value)
  )
}

export default ProgressProvider;