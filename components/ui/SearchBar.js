import { Div, Icon, Input } from 'react-native-magnus';
import {
  Button,
  Keyboard,
  LayoutAnimation,
  StyleSheet,
  Pressable,
} from 'react-native';
import { useState } from 'react';

const SearchBar = ({ searchValue, setSearchValue }) => {
  const [clicked, setClicked] = useState(false);

  const cancelSearch = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    Keyboard.dismiss();
    setClicked(false);
    clearSearch();
  };

  const selectSearchBar = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setClicked(true);
  };

  const onTextChange = (text) => {
    setSearchValue(text);
  };

  const clearSearch = () => {
    setSearchValue('');
  };

  return (
    <Div mt={20} flexDirection="row">
      <Input
        fontSize="xl"
        bg="white"
        flex={1}
        rounded={10}
        placeholder="Search by farm name..."
        borderColor="transparent"
        returnKeyType="search"
        onChangeText={onTextChange}
        value={searchValue}
        prefix={
          <Icon
            name="search"
            color="gray500"
            fontFamily="Feather"
            fontSize="2xl"
          />
        }
        suffix={
          clicked &&
          searchValue.length > 0 && (
            <Pressable
              onPress={clearSearch}
              style={({ pressed }) => pressed && styles.pressed}
            >
              <Icon
                name="close-circle"
                color="gray600"
                fontFamily="Ionicons"
                fontSize="2xl"
              />
            </Pressable>
          )
        }
        onFocus={selectSearchBar}
      />
      {clicked && (
        <Div justifyContent="center">
          <Button title="Cancel" onPress={cancelSearch}></Button>
        </Div>
      )}
    </Div>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.25,
  },
});

// import { StyleSheet, TextInput, View, Keyboard, Button } from 'react-native';
// import { Feather, Entypo } from '@expo/vector-icons';

// const SearchBar = ({ clicked, searchPhrase, setSearchPhrase, setCLicked }) => {
//   return (
//     <View style={styles.container}>
//       <View
//         style={
//           clicked ? styles.searchBar__clicked : styles.searchBar__unclicked
//         }
//       >
//         {/* search Icon */}
//         <Feather
//           name="search"
//           size={20}
//           color="black"
//           style={{ marginLeft: 1 }}
//         />
//         {/* Input field */}
//         <TextInput
//           style={styles.input}
//           placeholder="Search"
//           value={searchPhrase}
//           onChangeText={setSearchPhrase}
//           onFocus={() => {
//             setClicked(true);
//           }}
//         />
//         {/* cross Icon, depending on whether the search bar is clicked or not */}
//         {clicked && (
//           <Entypo
//             name="cross"
//             size={20}
//             color="black"
//             style={{ padding: 1 }}
//             onPress={() => {
//               setSearchPhrase('');
//             }}
//           />
//         )}
//       </View>
//       {/* cancel button, depending on whether the search bar is clicked or not */}
//       {clicked && (
//         <View>
//           <Button
//             title="Cancel"
//             onPress={() => {
//               Keyboard.dismiss();
//               setClicked(false);
//             }}
//           ></Button>
//         </View>
//       )}
//     </View>
//   );
// };
// export default SearchBar;

// // styles
// const styles = StyleSheet.create({
//   container: {
//     margin: 15,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//     flexDirection: 'row',
//     width: '90%',
//   },
//   searchBar__unclicked: {
//     padding: 10,
//     flexDirection: 'row',
//     width: '95%',
//     backgroundColor: '#d9dbda',
//     borderRadius: 15,
//     alignItems: 'center',
//   },
//   searchBar__clicked: {
//     padding: 10,
//     flexDirection: 'row',
//     width: '80%',
//     backgroundColor: '#d9dbda',
//     borderRadius: 15,
//     alignItems: 'center',
//     justifyContent: 'space-evenly',
//   },
//   input: {
//     fontSize: 20,
//     marginLeft: 10,
//     width: '90%',
//   },
// });
