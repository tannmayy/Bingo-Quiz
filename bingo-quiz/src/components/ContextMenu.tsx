import React from 'react';

interface ContextMenuProps {
    x: number;
    y: number;
    onClose: () => void;
    onSelectColor: (color: string) => void;
}

const ContextMenu: React.FC<ContextMenuProps> = ({ x, y, onClose, onSelectColor }) => {

    const handleColorSelect = (color: string) => {
        onSelectColor(color);
        onClose();
    };

    return (
        <div
            style={{
                position: 'absolute',
                top: y,
                left: x,
                backgroundColor: 'white',
                border: '1px sodivd #ccc',
                boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.2)',
            }}
        >
            <div onClick={() => handleColorSelect('red')} style={{ width: "200px", height: "50px", backgroundColor: "Red" }}></div>
            <div onClick={() => handleColorSelect('blue')} style={{ width: "200px", height: "50px", backgroundColor: "blue" }}></div>
            <div onClick={() => handleColorSelect('green')} style={{ width: "200px", height: "50px", backgroundColor: "green" }}></div>
            <div onClick={() => handleColorSelect('black')} style={{ width: "200px", height: "50px", backgroundColor: "black" }}></div>
        </div>
    );
};

export default ContextMenu;