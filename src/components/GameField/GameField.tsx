import { FC, useMemo, useState } from "react";
import styles from "./GameField.module.scss"
import classNames from "classnames";
import { GameCellInner } from "../GameCellInner/GameCellInner";
import { getGameMap } from "../../helpers/getGameMap";
import { GameCellLock } from "../GameCellLock/GameCellLock";
import { getGameMask } from "../../helpers/getGameMask";
import { cleanMap } from "../../helpers/cleanMap";
import { GameMap } from "../../types/game";


interface GameFieldProps {
}

export const GameField: FC<GameFieldProps> = ( {} ) => {
  const size = 16;
  const [ isGameStarted, setIsGameStarted ] = useState( false );

  const [ map, setMap ] = useState<GameMap>( [] );
  const [ mask, setMask ] = useState( getGameMask( size ) );

  return (
    <div className={ classNames( styles.GameField ) }>
      { isGameStarted &&
        <div className={ classNames( styles.GameField_inner ) }>
          {
            map.map( ( row, i ) =>
              <div className={ styles.GameField_row } key={ `i:${ i }` }>
                {
                  row.map( ( el, j ) =>
                    <GameCellInner cellState={ el } key={ `i:${ i },${ j }` }/>
                  )
                }
              </div>
            )
          }
        </div>
      }
      <div className={ classNames( styles.GameField_mask ) }>
        {
          mask.map( ( row, i ) =>
            <div className={ styles.GameField_row } key={ `l:${ i }` }>
              {
                row.map( ( el, j ) =>
                  <GameCellLock onClick={ () => {
                    if ( !isGameStarted ) {
                      setMap( getGameMap( size, 30, [ i, j ] ) );
                      setIsGameStarted( true );
                    }

                    setMask( prev => {
                        if ( map[ i ][ j ] === 0 ) {
                          cleanMap( map, prev, i, j );
                        }
                        if ( prev[ i ][ j ] !== "selected" ) prev[ i ][ j ] = "selected";
                        return [ ...prev ]
                      }
                    )
                  } } state={ mask[ i ][ j ] } key={ `l:${ i },${ j }` }/>
                )
              }
            </div>
          )
        }
      </div>
    </div>
  )
}