import { Div, Icon, Input } from 'react-native-magnus';
import {
  Button,
  Keyboard,
  LayoutAnimation,
  StyleSheet,
  Pressable,
} from 'react-native';
import { useState } from 'react';

const SearchBar = ({ searchFilterFunction }) => {
  const [clicked, setClicked] = useState(false);
  const [search, setSearch] = useState('');

  const cancelSearch = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    Keyboard.dismiss();
    setSearch('');
    setClicked(false);
    searchFilterFunction('');
  };

  const selectSearchBar = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setClicked(true);
  };

  const onTextChange = (text) => {
    setSearch(text);
    searchFilterFunction(text);
  };

  const clearSearch = () => {
    setSearch('');
    searchFilterFunction('');
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
        value={search}
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
          search.length > 0 && (
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
        <Div style={styles.cancelBtn}>
          <Button title="Cancel" onPress={cancelSearch}></Button>
        </Div>
      )}
    </Div>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  cancelBtn: {
    justifyContent: 'center',
  },
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
