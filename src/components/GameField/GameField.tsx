import { BaseSyntheticEvent, FC, useCallback, useContext } from "react";
import styles from "./GameField.module.scss"
import { getGameMap } from "../../helpers/getGameMap";
import { CellState, GameState } from "../../types/game";
import { GameContext } from "../../context/GameContext";
import { GameCell } from "../GameCell/GameCell";
import { cleanMap } from "../../helpers/cleanMap";
import { showBombs } from "../../helpers/showBombs";
import { BOMBS_COUNT, MAP_SIZE } from "../../vars/game";
import { showFlags } from "../../helpers/showFlags";


export const GameField: FC = ( {} ) => {
  const {
    gameState,
    setGameState,
    map,
    setMap,
    toggleIsMouseDown,
    isMouseDown,
    flagsCount,
    setFlagsCount,
    openedCellsCount,
    setOpenedCellsCount
  } = useContext( GameContext );

  const handleClick = useCallback( ( e: BaseSyntheticEvent ) => {
    if ( e.target.dataset.i === undefined ) return;
    if ( gameState === GameState.LOOSED || gameState === GameState.WINED ) return;

    const i: number = +e.target.dataset.i;
    const j: number = +e.target.dataset.j;

    if ( map[ i ][ j ].state === CellState.FLAG || map[ i ][ j ].state === CellState.GUESS ) return;

    setMap( prev => {
      let currentOpenedCellsCount = 0;
      if ( gameState === GameState.NOT_STARTED ) {
        setGameState( GameState.STARTED );
        getGameMap( MAP_SIZE, BOMBS_COUNT, [ i, j ], prev );
      }

      if ( map[ i ][ j ].inner !== -1 ) {
        currentOpenedCellsCount = cleanMap( prev, i, j );
      } else {
        showBombs( prev, i, j );
        setFlagsCount( 0 );
        setGameState( GameState.LOOSED );
      }

      if ( MAP_SIZE * MAP_SIZE - BOMBS_COUNT - openedCellsCount - currentOpenedCellsCount === 0 ) {
        setGameState( GameState.WINED );
        showFlags( prev );
        setFlagsCount( 0 );
      } else {
        setOpenedCellsCount( currentOpenedCellsCount + openedCellsCount );
      }

      return [ ...prev ];
    } )
  }, [ gameState, map, openedCellsCount, gameState, flagsCount, openedCellsCount ] )

  const handleContextMenu = useCallback( ( e: BaseSyntheticEvent ) => {
    e.preventDefault();
    if ( e.target.dataset.i === undefined ) return;
    if ( gameState === GameState.LOOSED || gameState === GameState.WINED ) return;

    const i: number = +e.target.dataset.i;
    const j: number = +e.target.dataset.j;
    setMap( prev => {
      if ( map[ i ][ j ].state === CellState.ACTIVE && BOMBS_COUNT - flagsCount > 0 ) {
        map[ i ][ j ].state = CellState.FLAG;
        setFlagsCount( flagsCount + 1 )
      } else if ( map[ i ][ j ].state === CellState.FLAG ) {
        map[ i ][ j ].state = CellState.GUESS;
        setFlagsCount( flagsCount - 1 )
      } else if ( map[ i ][ j ].state === CellState.GUESS )
        map[ i ][ j ].state = CellState.ACTIVE;


      return [ ...prev ];
    } )
  }, [ gameState, map, flagsCount ] )

  const handleMouse = useCallback( () => {
    if ( gameState !== GameState.WINED && gameState !== GameState.LOOSED )
      toggleIsMouseDown();
  }, [ isMouseDown, gameState ] );

  const preventDragHandler = useCallback(
    ( e: BaseSyntheticEvent ) => e.preventDefault()
    , [] );

  return (
    <div className={ styles.GameField }
         onClick={ handleClick }
         onContextMenu={ handleContextMenu }
         onMouseDown={ handleMouse }
         onMouseUp={ handleMouse }
         onDragStart={ preventDragHandler }>
      {
        map.map( ( row, i ) =>
          row.map( ( cell, j ) =>
            <GameCell cell={ map[ i ][ j ] } i={ i } j={ j } key={ `${ i }${ j }` }/>
          )
        )
      }
    </div>
  )
}