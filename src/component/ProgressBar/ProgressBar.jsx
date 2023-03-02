import React from 'react';
import ProgressProvider from "./ProgressProvider";
import { CircularProgressbar } from "react-circular-progressbar";

const ProgressBar = (props) => {

    const { value } = props;

  return (
    <ProgressProvider valueStart={0} valueEnd={value}>
        {(value) => <CircularProgressbar value={value} />}
    </ProgressProvider>
  )
}

export default ProgressBar