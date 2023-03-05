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
  const { gameContext, setGameContext } = useContext( GameContext );

  const handleClick = useCallback( ( e: BaseSyntheticEvent ) => {
    if ( e.target.dataset.i === undefined ) return;
    if ( gameContext.gameState === GameState.LOOSED || gameContext.gameState === GameState.WINED ) return;

    const i: number = +e.target.dataset.i;
    const j: number = +e.target.dataset.j;

    if ( gameContext.map[ i ][ j ].state === CellState.FLAG
      || gameContext.map[ i ][ j ].state === CellState.GUESS ) return;

    setGameContext( prev => {
      if ( prev.gameState === GameState.NOT_STARTED ) {
        prev.gameState = GameState.STARTED;
        getGameMap( MAP_SIZE, BOMBS_COUNT, [ i, j ], prev.map );
      }

      if ( prev.map[ i ][ j ].inner !== -1 ) {
        prev.openedCellsCount += cleanMap( prev.map, i, j );
      } else {
        showBombs( prev.map, i, j );
        prev.gameState = GameState.LOOSED;
      }

      if ( MAP_SIZE * MAP_SIZE - BOMBS_COUNT - prev.openedCellsCount === 0 ) {
        prev.gameState = GameState.WINED;
        showFlags( prev.map );
      }

      return { ...prev };
    } )
  }, [ gameContext ] )

  const handleContextMenu = useCallback( ( e: BaseSyntheticEvent ) => {
    e.preventDefault();
    if ( e.target.dataset.i === undefined ) return;
    if ( gameContext.gameState === GameState.LOOSED || gameContext.gameState === GameState.WINED ) return;

    const i: number = +e.target.dataset.i;
    const j: number = +e.target.dataset.j;
    setGameContext( prev => {
      if ( prev.map[ i ][ j ].state === CellState.ACTIVE && BOMBS_COUNT - prev.flagsCount > 0 ) {
        prev.map[ i ][ j ].state = CellState.FLAG;
        prev.flagsCount++;
      } else if ( prev.map[ i ][ j ].state === CellState.FLAG ) {
        prev.map[ i ][ j ].state = CellState.GUESS;
        prev.flagsCount--;
      } else if ( prev.map[ i ][ j ].state === CellState.GUESS )
        prev.map[ i ][ j ].state = CellState.ACTIVE;


      return { ...prev };
    } )
  }, [ gameContext ] )

  const handleMouse = useCallback( () => {
    if ( gameContext.gameState !== GameState.WINED && gameContext.gameState !== GameState.LOOSED )
      setGameContext( { ...gameContext, isMouseDown: !gameContext.isMouseDown } );
  }, [ gameContext ] );

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
        gameContext.map.map( ( row, i ) =>
          row.map( ( cell, j ) =>
            <GameCell cell={ gameContext.map[ i ][ j ] } i={ i } j={ j } key={ `${ i }${ j }` }/>
          )
        )
      }
    </div>
  )
}