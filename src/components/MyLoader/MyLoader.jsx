import React from 'react';
import {Rings} from 'react-loader-spinner';
import c from './MyLoader.module.css';
//import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Loading = () => {
  return (
    <div className={c.spiner}>
      <Rings type="BallTriangle" color="black" height={80} width={80} />
    </div>
  );
};

export default Loading;
