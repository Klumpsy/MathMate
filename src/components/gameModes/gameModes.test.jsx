import React from "react";
import { render, screen, fireEvent } from "../../test-util/test-util";
import ReactDOM from "react-dom";

import GameModes from "./GameModes";

describe('GameModes', () => {
    test("button appears on screen on load", () => {
        render(<GameModes />)
        expect(screen.getByText('Games')).toBeInTheDocument()
    });

    test("button containens buttons for gamemodes", () => {
        render(<GameModes />)
        expect(screen.getByText('+ 100')).toBeInTheDocument()
    });

    test("button containens buttons for gamemodes", () => {
        render(<GameModes />)
        expect(screen.getByText('mix')).toBeInTheDocument()
    });

    // test("click on button changes game mode to expected game mode", () => { 
    //     fireEvent.click(screen.getByRole('button', {name: /mix/i}))
    //     expect(screen.)
    // })
});

