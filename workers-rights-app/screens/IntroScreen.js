import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Animated, Dimensions, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import { ScalingDot } from 'react-native-animated-pagination-dots';
import { Dropdown } from 'react-native-material-dropdown-v2';
import Colors from "../constants/Colors";
import IntroConfirmationModal from '../components/IntroConfirmationModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

/* Array to manually store language codes. 
 * TODO: Needs to be updated to be dynamically pulled from database.
 */
const LANGS = [
    {
        value: 'en',
    }, 
    {
        value: 'es',
    }
];

const INTRO_DATA = [
    {
        key: '1',
        title: 'Language Selection',
        description: 'Choose your preferred language',
    },
    {
        key: '2',
        title: 'Role Selection',
        description: 'Are you a worker or a organization / business owner?',
    }
];

/* Function Component Definiton: Intro Screen (language and role selection)
 */
const IntroScreen = ({navigation}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [appLanguage, setAppLanguage] = useState("en");
    const [isWorker, setIsWorker] = useState(true);
    const { width } = Dimensions.get('screen');
    const scrollX = React.useRef(new Animated.Value(0)).current;

    // For modal
    const openModalHandler = () => {
        setIsModalOpen(true);
      };

    const closeModalHandler = () => {
        setIsModalOpen(false);
    };

    const advanceScreenHandler = () => {
        closeModalHandler();
    
        navigation.navigate({
          routeName: "Rights",
          params: {
          },
        });
      };

    /* Component part definition: language selection dropdown menu.
     */
    const languageSelectionDropdown = (
        <View style={styles.test}>
            <Dropdown 
                width={150} 
                maxHeight={110} 
                label='Language' 
                data={LANGS}
                onChangeText={(value, index, data) => {
                    setAppLanguage(value);
                }}
                baseColor={Colors.darkGray}
                textColor={Colors.darkGray}
                containerStyle={styles.dropDownStyle}
            />
        </View>
    );

    /* Component part definition: role selection button interface.
     */
    const roleSelectionModule = (
        <View>
            <View style={styles.buttonsContainer}>
                <TouchableHighlight 
                    style={isWorker ? styles.touchableActive : styles.touchableInactive}
                    underlayColor={Colors.darkGray}
                    onPress={() => setIsWorker(true)}
                >
                    <Text>Worker</Text>
                </TouchableHighlight>
                <TouchableHighlight 
                    style={isWorker ? styles.touchableInactive : styles.touchableActive}
                    underlayColor={Colors.darkGray}
                    onPress={() => setIsWorker(false)}
                >
                    <Text>Business Owner</Text>
                </TouchableHighlight>
            </View>
        </View>
    );

    /* Helper function: implements the auto-scrolling feature.
     * Is called by the "next" button of language selection"
     */
    const scrollRight = () => {
        // Need to implement auto scroll.
    };

    /* Component part definition: "next" button for language selection.
     */
    const languageNextButton = (
        <View>
            <TouchableHighlight 
                style={styles.next}
                onPress={() => scrollRight()}>
                <Text>Next</Text>
            </TouchableHighlight>
        </View>
    );

    /* Component part definition: "next" button for role selection.
     */
    const roleNextButton = (
        <View>
            <TouchableOpacity 
                style={styles.next}
                onPress={() => openModalHandler()}>
                <Text>
                    Next
                </Text>
            </TouchableOpacity>
        </View>
    );
    
    /* renderItem() is a React Native helper function that helps render
     * all items in a <FlatList/>.
     */
    const renderItem = React.useCallback(
        ({ item, index }) => {
            const inputRange = [
                (index - 1) * width,
                index * width,
                (index + 1) * width,
            ];
            const descriptionTranslate = scrollX.interpolate({
                inputRange,
                outputRange: [width * 0.1, 0, -width * 0.1],
            });
            return (
                <View style={[styles.itemContainer, { width: width - 80 }]}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Animated.Text style={{ transform: [{ translateX: descriptionTranslate }] }}>
                        {item.description}
                    </Animated.Text>
                    <View style={styles.absoluteBottom}>
                        {item.key == '1' ? languageSelectionDropdown : roleSelectionModule}
                    </View>
                    <View>
                        {item.key == '1' ? languageNextButton : roleNextButton }
                    </View>
                </View>
            );
        },
        [scrollX, width, appLanguage, isWorker]
    );

    const keyExtractor = React.useCallback((item) => item.key, []);

    /* The actual definition of the contents of this screen. Calls all defined helper functions
     */
    return (
        <View style={[styles.container]}>
          <FlatList
            data={INTRO_DATA}
            keyExtractor={keyExtractor}
            showsHorizontalScrollIndicator={false}
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              {
                useNativeDriver: false,
              }
            )}
            style={styles.flatList}
            pagingEnabled
            horizontal
            decelerationRate={'normal'}
            scrollEventThrottle={16}
            renderItem={renderItem}
          />
          <View style={styles.text}>
            <View style={styles.dotContainer}>
              <ScalingDot
                data={INTRO_DATA}
                scrollX={scrollX}
                dotStyle={{
                    width: 10,
                    height: 10,
                    backgroundColor: Colors.darkOrange,
                    borderRadius: 5,
                    marginHorizontal: 5,
                }}
                containerStyle={{
                  top: 30,
                }}
              />
            </View>
          </View>
          <IntroConfirmationModal 
            language={appLanguage}
            isWorker={isWorker}
            isVisible={isModalOpen}
            onCloseModal={closeModalHandler}
            onAdvance={advanceScreenHandler}/>
        </View>
    );    
};

IntroScreen.navigationOptions = {
    headerTitle: "Welcome",
    animationEnabled: false,
    tabBarVisible: false,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.lightOrange : "",
    },
    headerTintColor: Colors.darkOrange,
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 20,
      backgroundColor: 'white'
    },
    title: {
      marginVertical: 10,
      fontWeight: 'bold',
      fontSize: 20,
    },
    touchableInactive: {
      backgroundColor: Colors.gray,
      padding: 15,
      margin: 10,
      borderRadius: 100,
      borderStyle: 'solid',
      width: 150,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    touchableActive: {
      backgroundColor: Colors.darkOrange,
      padding: 15,
      margin: 10,
      borderRadius: 100,
      borderStyle: 'solid',
      width: 150,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    next: {
      backgroundColor: Colors.darkOrange,
      padding: 15,
      marginTop: 40,
      margin: 10,
      borderRadius: 8,
      borderStyle: 'solid',
      shadowOpacity: 0.25,
      shadowColor: "black",
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 6,
      elevation: 3,
      width: 150,
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      flex: 0.25,
      justifyContent: 'space-evenly',
    },
    flatList: {
      flex: 1,
    },
    dotContainer: {
      justifyContent: 'center',
      alignSelf: 'center',
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginVertical: 20,
      padding: 20,
    },
    itemContainer: {
      backgroundColor: 'transparent',
      justifyContent: 'flex-start',
      alignItems: 'center',
      padding: 40,
      paddingTop: 100,
      marginTop: 40,
      marginHorizontal: 40,
      borderRadius: 20,
    },
    imageSlider: {
      flex: 1,
    },
    viewPager: {
      flex: 1,
    },
    contentSlider: {
      flex: 1,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    dots: {
      flex: 1,
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 310,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    dot: {
      width: 10,
      height: 10,
      borderRadius: 5,
      margin: 5,
    },
    dropDownStyle: {
        marginVertical: 20,
    },
    test: {
      alignItems: 'center',
    },
  });
  
  export default IntroScreen;  