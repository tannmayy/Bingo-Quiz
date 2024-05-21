import React, { useEffect, useState, ReactElement } from 'react';
import { QUESTIONS, NO_OF_CELLS, questionsInterface } from './constants/questionsData';
import Timer from './components/timer';
import Data from './components/data';
import "./components/style.css"
import ContextMenu from './components/ContextMenu';

const BingoMain = () => {

    // State variables
    const [currentQuestion, setCurrentQuestion] = useState<string>("");
    const [currentAnswer, setCurrentAnswer] = useState<string>("");
    const [showAnswer, setShowAnswer] = useState<boolean>(false);
    const [selectedColor, setSelectedColor] = useState<string>('');
    const [contextMenu, setContextMenu] = useState<{ x: number; y: number } | null>(null);
    const [currentCell, setCurrentCell] = useState<number>(0);
    const [board, setBoard] = useState<ReactElement>(<></>)
    const [cellColors, setCellColors] = useState<Record<number, string>>({}); // Map of cell colors

    const handleContextMenu = (event: React.MouseEvent, targetElement: HTMLElement, cellIndex: number) => {
        event.preventDefault();
        const x = event.clientX;
        const y = event.clientY;

        // Adjust position based on the position of the target element
        const rect = targetElement.getBoundingClientRect();
        const offsetX = x - rect.left;
        const offsetY = y - rect.top;

        setContextMenu({ x: offsetX, y: offsetY });
        setCurrentCell(cellIndex);

        if (!cellColors.hasOwnProperty(cellIndex)) {
            // If not, set the default color or any initial color you prefer
            setCellColors((prevColors) => ({ ...prevColors, [cellIndex]: 'initialColor' }));
        }
    };

    const handleCloseContextMenu = () => {
        setContextMenu(null);
    };

    const handleColorSelect = (color: string) => {

        console.log("Color: ", color);

        setSelectedColor(color);

        if (contextMenu && currentCell !== null) {
            setCellColors((prevColors) => ({
                ...prevColors,
                [currentCell]: color,
            }));
        }

    };

    // BIngo Board

    const createBingoBoard = () => {
        return <div>
            <table>
                <tbody>
                    {Array(5).fill("dummy").map((value, i) => {
                        return <tr>
                            {QUESTIONS.map((item, index) => {
                                if (index >= (i * 5) && index < (i * 5) + 5) {
                                    let cell_value = (index + 1).toString();

                                    return <td className='cell-style' onContextMenu={(e) => handleContextMenu(e, e.currentTarget as HTMLElement, parseInt(cell_value))} style={{ backgroundColor: currentCell === parseInt(cell_value) ? selectedColor : cellColors[parseInt(cell_value)], color: currentCell === parseInt(cell_value) ? "white" : "black" }} id={cell_value} onClick={() => {
                                        setCurrentQuestion(item.question);
                                        setCurrentAnswer(item.answer);
                                        // To hide the answer initially
                                        setShowAnswer(false);
                                    }}>{cell_value}</td>
                                }
                            })}
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    }

    // get clicked question
    const getCurrentQuestion = () => {
        if (currentQuestion) {
            return <p>{currentQuestion}</p>
        }
        else return <p>Nothing yet</p>
    }

    // get answer for current question
    const getCurrentAnswer = () => {
        if (currentAnswer && showAnswer) {
            return <p>{currentAnswer}</p>
        }
        else return <p>Wait</p>
    }

    // Show Answer when prompted
    const toggleAnswer = () => {
        setShowAnswer(true)
    }

    useEffect(() => {
        setBoard(createBingoBoard())
    }, [cellColors])

    return (
        <div className="App">
            <div>
                <h2>Board</h2>
                <div className='bingo-board'>
                    {board}
                </div>
                {contextMenu && (
                    <ContextMenu x={contextMenu.x} y={contextMenu.y} onSelectColor={handleColorSelect} onClose={handleCloseContextMenu} />
                )}
            </div>
            <Timer startTimer={!showAnswer && currentQuestion ? true : false} stopTimer={showAnswer ? true : false} />
            <Data question={getCurrentQuestion()} answer={getCurrentAnswer()} onQuestionClick={toggleAnswer} />
        </div>
    );
}

export default BingoMain;
