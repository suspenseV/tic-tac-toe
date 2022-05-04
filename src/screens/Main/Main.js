import React from "react";
import { View, Text, TouchableOpacity, Image, Alert } from "react-native";
import styles from "./styles";

const MainScreen = ({onPlayerClick, onRefresh, activePlayer, playground}) => {

  const renderRow = (row, rowIndex) => {
    return <View style={styles.row}>{renderBlock(row, rowIndex)}</View>;
  };

  const renderBlock = (row, rowIndex) =>
    row.map((i, columnIndex) => {
      return (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => onPlayerClick(rowIndex, columnIndex)}
          style={styles.button}
        >
          {playground[rowIndex][columnIndex] === "x" && (
            <Image
              style={styles.image}
              source={require(`../../assets/cross.png`)}
            ></Image>
          )}
          {playground[rowIndex][columnIndex] === "o" && (
            <Image
              style={styles.image}
              source={require(`../../assets/circle.png`)}
            ></Image>
          )}
        </TouchableOpacity>
      );
    });

  const renderPlayBox = () =>
    playground.map((row, rowIndex) => renderRow(row, rowIndex));

  return (
    <>
      <View
        style={[
          styles.header,
          { backgroundColor: activePlayer === "x" ? "#2596be" : "#dc572a" },
        ]}
      >
        <Text style={styles.headerText}>{activePlayer}'s turn!</Text>
      </View>
      <View style={styles.container}>
        <View style={styles.wrapper}>{renderPlayBox()}</View>
      </View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => onRefresh()}>
          <Text style={styles.headerText}> REFRESH </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default MainScreen;
