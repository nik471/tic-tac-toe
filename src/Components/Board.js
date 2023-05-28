import React from "react"
import Square from "./Square"
export default function Board(){
    const [arr,setArr]=React.useState([null,null,null,null,null,null,null,null,null])
    const [isX,setIsX]=React.useState(true)
    function handleClick(index){
        console.log("clicked", index)
        const copy=arr;
        copy[index]=isX?"X":"0"
        setIsX(!isX)
        setArr(copy)
    }

    function isWinner(){
        const win=[[0,1,2],[3,4,5],[6,7,8],[0,3,4],[2,5,8],[1,4,7],[0,4,8],[2,4,6]]
        for(let x of win){
            const [a,b,c]=x;
            if(arr[a]!==null && arr[a]===arr[b] && arr[a]===arr[c]){
                return arr[a];
            }
        }
        return false;
    }

    function toggle(){
        setArr([null,null,null,null,null,null,null,null,null])
        setIsX(true)
    }

    return(
        <div className="board-containter">
            {isWinner()?<><h4>{isWinner()} is winner</h4><button onClick={toggle}>Play Again</button></>:<>
            <h4>{isX?'X':'0'} Turn</h4>
            <div className="board-row">
                <Square onClick={()=>handleClick(0)} value={arr[0]}/>
                <Square onClick={()=>handleClick(1)} value={arr[1]}/>
                <Square onClick={()=>handleClick(2)} value={arr[2]}/>
            </div>
            <div className="board-row">
                <Square onClick={()=>handleClick(3)} value={arr[3]}/>
                <Square onClick={()=>handleClick(4)} value={arr[4]}/>
                <Square onClick={()=>handleClick(5)} value={arr[5]}/>
            </div>
            <div className="board-row">
                <Square onClick={()=>handleClick(6)} value={arr[6]}/>
                <Square onClick={()=>handleClick(7)} value={arr[7]}/>
                <Square onClick={()=>handleClick(8)} value={arr[8]}/>
            </div></>}
        </div>

    )
}