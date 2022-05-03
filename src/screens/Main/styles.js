import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * .1,
    borderWidth: 1,
    height: 50,
  },
  headerText: {
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: '600'
  },
  image: {
    width: 70,
    height: 70,
  },
  container: {
    flex: 1,
    marginTop: height * .15,
    flexDirection: 'column',
    alignItems: 'center'
  },
  wrapper: {
    flexDirection: 'column',
    width: width * .86,
    borderWidth: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    borderWidth: 1,
    width: width * .285,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles
