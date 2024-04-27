package com.models;
import java.util.ArrayList;
import java.util.List;
public class Board {
    private int size;
    private  List<List<Cell>> board;
    public Board(int size)
    {
        board = new ArrayList<>();
        for(int i =0;i < size;i++)
        {
            board.add(new ArrayList<>());
            for(int j =0;j < size;j++)
            {
                board.get(i).add(new Cell(i,j));
            }
        }
    }

    public void printBoard() {
    }

    public List<Cell>[] getBoard() {
        return new List[0];
    }

    public Integer getSize() {
        return 0;
    }
}
