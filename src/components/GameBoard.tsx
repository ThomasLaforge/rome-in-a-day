import React from 'react';
import { FirstBarbarian, SecondBarbarian, ThirdBarbarian } from './Barbarians';
import { CultureStack, IndustryStack, MilitaryStack } from './Stack';

export default function GameBoard() {
  return (
    <div className="game-board">
        <div className="game-board-resources">
            <IndustryStack />
            <CultureStack />
            <MilitaryStack />
        </div>
        <div className="game-board-center">
            <div className="game-board-map">
                <div className="game-board-map-cities">
                    <div className="game-board-map-city" />
                    <div className="game-board-map-city" />
                    <div className="game-board-map-city" />
                    <div className="game-board-map-city" />
                    <div className="game-board-map-city" />
                </div>
            </div>
            <div className="game-board-monuments"></div>
        </div>
        <div className="game-board-barbarians">
            <FirstBarbarian />
            <SecondBarbarian />
            <ThirdBarbarian />
        </div>
    </div>
  );
}
