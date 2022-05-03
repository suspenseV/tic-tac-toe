import React from 'react'
import MainScreen from './Main'

const Main = () => {
  const matrix = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]

  const [activePlayer, setActivePlayer] = useState("x");
  const [turn, setTurn] = useState(1);
  const [winner, setProbablyWinner] = useState("");
  const [playground, setPlayground] = useState([...matrix]);

  const onPlayerClick = (rowIndex, columnIndex) => {
    if (playground[rowIndex][columnIndex]) return null;
    setTurn(turn + 1);
    let temp = playground;
    activePlayer === "x"
      ? ((temp[rowIndex][columnIndex] = "x"),
        setActivePlayer("o"),
        setProbablyWinner("x"))
      : ((temp[rowIndex][columnIndex] = "o"),
        setActivePlayer("x"),
        setProbablyWinner("o"));
    setPlayground(temp);
  };

  useEffect(() => {
    (turn === 10) 
    ? setDraw()
    :
    checkWinner();
  }, activePlayer);

  const onRefresh = () => {
    setPlayground([...matrix]);
    setTurn(1);
    setActivePlayer("x");
  };

  const setDraw = () => {
    Alert.alert(`Draw. Try again.`);
    onRefresh()
  }

  const checkWinner = () => {
    //rows
    playground.map((row) => {
      if (row[0] === row[1] && row[1] === row[2] && row[2] !== "") {
        console.log('rows')
        Alert.alert(` ${winner.toUpperCase()} WINS!`);
        onRefresh();
      }
    });
    //columns
    for (let i = 0; i < playground.length; i++) {
      if (
        playground[0][i] === playground[1][i] &&
        playground[1][i] === playground[2][i] &&
        playground[1][i] !== "" &&
        playground[i][i] !== ""
      ) {
        console.log('columns')
        Alert.alert(` ${winner.toUpperCase()} WINS!`);
        onRefresh();
      }
    }
    //diagonals
      if (
        playground[0][0] === playground[1][1] &&
        playground[1][1] === playground[2][2] &&
        playground[1][1] !== "" &&
        playground[0][0] !== ""
      ) {
        console.log('diagonals')
        Alert.alert(` ${winner.toUpperCase()} WINS!`);
        onRefresh();
      }
      if (
        playground[0][2] === playground[1][1] &&
        playground[1][1] === playground[2][0] &&
        playground[1][1] !== "" &&
        playground[0][2] !== ""
      ) {
        console.log('diagonals')
        Alert.alert(` ${winner.toUpperCase()} WINS!`);
        onRefresh();
      }
  };

  return (
    <MainScreen onPlayerClick={onPlayerClick} onRefresh={onRefresh} activePlayer={activePlayer}/>
  )
}

export default Main