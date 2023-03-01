import { FC, ReactElement, useRef, useState } from "react";
import styles from "./Stopwatch.module.scss"
import classNames from "classnames";
import Zero from "../../asset/time0.png";
import One from "../../asset/time1.png";
import Two from "../../asset/time2.png";
import Three from "../../asset/time3.png";
import Four from "../../asset/time4.png";
import Five from "../../asset/time5.png";
import Six from "../../asset/time6.png";
import Seven from "../../asset/time7.png";
import Eight from "../../asset/time8.png";
import Nine from "../../asset/time9.png";


const TimeImgs = [ Zero, One, Two, Three, Four, Five, Six, Seven, Eight, Nine ]

const formatTime = ( time: number ): ReactElement => {
  const imgs = []
  for ( let i = 0; i < 3; i++ ) {
    imgs.push( TimeImgs[ time % 10 ] )
    time = Math.floor(time / 10);
  }
  return (
    <>
      {
        imgs.reverse().map( (el, i) =>
          <img src={ el } className={ classNames( styles.Stopwatch_item ) } key={i}/>
        )
      }
    </>
  )
}

interface StopwatchProps {
}

export const Stopwatch: FC<StopwatchProps> = ( {} ) => {
  const [ time, setTime ] = useState( 0 );
  const increment = useRef( null );

  increment.current = setInterval( () => {
    if (time < 1000) setTime( time + 1 )
  }, 1000 );
  return (
    <div className={ classNames( styles.Stopwatch ) }>
      { formatTime(time) }
    </div>
  )
}