import { StyleSheet } from 'react-native';

const defaultStyles = StyleSheet.create({
    textInput: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 200
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    centerHorizontal: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row'
    },
    centerVertical: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
    },
    centerCenter: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    }
});

export default defaultStyles;