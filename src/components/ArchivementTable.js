import React from 'react';
import {
    View, StyleSheet, Text, FlatList, TouchableOpacity, SafeAreaView
} from 'react-native';
import {withNavigation} from "react-navigation";
import {Avatar} from "@rneui/themed";

const ArchivementTable = ({
                              title,
                              results,
                              navigation,
                              onImportPress,
                          }) => {

    return (<View style={styles.container}>
        {/*for testing purposes*/}
        {/*<NavigationEvents onWillFocus={() => {
                console.log("title", title);
                console.log(results);
            }}/>*/}
        <View style={styles.containerTable}>
            <View style={styles.containerTitle}>
                <Text style={styles.title}>{title}</Text>
            </View>
            <View style={{flex: 1}}>
                {
                    results && results.map((item) =>
                        <View style={styles.containerRow} key={item._id}>
                            <Text style={styles.textType}>{item.type}</Text>
                            <Text
                                style={styles.textValue}>{item.value}</Text>
                        </View>
                    )
                }
                {/*<FlatList
                        vertical
                        data={results}
                        scrollEnabled={false}
                        keyExtractor={(result) => result._id}
                        renderItem={({item}) => {
                            return (<View style={styles.containerRow}>
                                <Text style={styles.textType}>{item.type}</Text>
                                <Text
                                    style={styles.textValue}>{item.value}</Text>
                            </View>);
                        }}/>*/}
            </View>
            <View style={styles.containerAvatarImport}>
                <TouchableOpacity onPress={onImportPress}>
                    <Avatar
                        source={require("../../assets/import.png")}
                        size={100}
                        rounded
                        activeOpacity={0.1}
                        containerStyle={styles.avatarImport}

                    />
                </TouchableOpacity>
            </View>
        </View>
    </View>);
};

const styles = StyleSheet.create({
    avatarImport         : {},
    containerAvatarImport: {
        alignItems: 'flex-end',
    },
    title                : {
        fontSize  : 18,
        fontWeight: 'bold',
        marginLeft: 10, // marginBottom: 5,
        color     : 'white', // foregroundColor: 'gray',

    },
    textType             : {
        fontSize: 14,
        color   : 'white',
        width   : '50%',
    },
    textValue            : {
        fontSize  : 16,
        fontWeight: 'bold',
        color     : 'white',
    },
    containerTable       : {
        // marginBottom: 10,
        width: '95%',
    },
    container            : {
        justifyContent: 'center',
        alignItems    : 'center',
    },
    containerRow         : {
        marginBottom   : 1,
        backgroundColor: 'black',
        flexDirection  : 'row',
        padding        : 20,
    },
    containerTitle       : {
        // marginTop:20,
        // marginBottom: 10,
        backgroundColor: '#494949',
        borderRadius   : 0,
    },

});

export default withNavigation(ArchivementTable);
