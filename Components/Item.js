import {StyleSheet, Image, Text, View, Dimensions, } from "react-native";
import Animation from "./Animation";
import React from "react";
import {LinearGradient} from "expo-linear-gradient";


const WIDTH = Dimensions.get('window').width
export const HEIGHT = Dimensions.get('window').height

const Item = (item) => {

    return <Animation style={{
        width: WIDTH
    }}>
        <View key={item.filmName}  >
            <LinearGradient start={{x:0,y:1}} style={styles.wrapper} colors={['rgb(28,25,25)','rgba(28,27,27,0.47)']}>
                <View style={styles.imgWrapper}>
                    <Image
                        source={{uri: 'https://api.broadway.kg/files/' + item.item.picture.fileName + item.item.picture.fileExt}}
                        style={styles.img}/>
                </View>
                <View style={styles.info}>
                    <View style={styles.nameAge}>
                        <Text style={styles.title}>{item.item.filmName}</Text>
                        <Text style={item.item.age==18?styles.red:styles.green}>{item.item.age}+</Text>
                    </View>

                    <View style={styles.description}>
                        <View style={styles.remarkBlock}>
                            <Text style={styles.remarkText}>Описание: {item.item.remark}</Text>
                        </View>
                        <View style={styles.sessions}>
                            {item.item.times.map((t) => <View style={styles.textWrapper} key={t.time}>
                                <Text style={styles.session}>{t.time}</Text>
                                <View style={styles.priceBlock}>
                                    <Text style={styles.format}>{t.formatContent}   </Text>
                                    <Text style={styles.price}>{t.getSessionPricesResponse.data.placesTypes.placeType.sum.text.replace('руб','сом').replace('00коп','')}</Text>
                                </View>
                            </View>)}
                        </View>
                        <View>
                            <Text style={styles.duration}>Страна: {item.item.country}</Text>
                            <Text style={styles.duration}>Продолжительность: {item.item.duration.text}</Text>
                        </View>
                    </View>

                </View>

            </LinearGradient>
        </View>
    </Animation>
}

const styles = StyleSheet.create({
    wrapper: {
        padding:10,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginTop: 30,
        height: HEIGHT,
        marginRight:30,
        marginLeft:30,
        marginBottom:30,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,

    },
    imgWrapper:{
        padding:10
    },
    img: {
        width:WIDTH/3.2,
        height: HEIGHT-40,
        objectFit:'fill',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        paddingBottom:30,

    },
    info: {
        marginLeft: 10
    },
    nameAge:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        textAlign:'center',
        flexWrap: 'wrap',
        flexShrink: 1,
        width:WIDTH-450,

    },
    title:{
        fontSize: 23,
        color: '#ffdc7d',
        fontWeight: 'bold',
        marginTop: 1,
        marginRight:7,

    },
    red:{
        fontSize: 23,
        backgroundColor:'#c40000',
        padding:1,
        color: '#ffffff',
        fontWeight: 'bold',
        marginRight:10,
        borderTopLeftRadius: 4,
        borderTopRightRadius: 4,
        borderBottomLeftRadius: 4,
        borderBottomRightRadius: 4,
    },
    green:{
        fontSize: 23,
        backgroundColor:'#15bb2a',
        padding:1,
        color: '#ffffff',
        fontWeight: 'bold',
        marginRight:10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    },
    duration:{
        fontSize: 17,
        color: '#ffdc7d',
        fontWeight: 'bold',
        marginRight:10,
    },


    sessions: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        textAlign:'center',
        width:WIDTH-400,
        marginTop:10
    },
    textWrapper: {
        marginTop: 5,
        display: "flex",
        flexDirection: 'column',
        flexWrap:'wrap',
        justifyContent:'center',
        alignItems: 'center',
        textAlign:'center',
        backgroundColor: '#343434',
        borderWidth: 2,
        borderTopLeftRadius: 6,
        borderTopRightRadius: 6,
        borderBottomLeftRadius: 6,
        borderBottomRightRadius: 6,
        marginRight: 5,
        paddingRight: 5,
        paddingLeft: 5,
        paddingTop:0,
        borderColor: '#404040',
    },
    remarkBlock:{
        width:480
    },
    remarkText:{
      color:'#fff',
        fontWeight:'bold',
        fontSize:16
    },
    priceBlock:{
       display:'flex',
       flexDirection:'row',
       alignItems:'center',
       margin:0
    },
    price:{
        fontSize:10,
        color: '#ffdc7d',
        fontWeight: 'bold',
        paddingBottom:2
    },
    format: {
        fontSize:10,
        color: '#ffdc7d',
        fontWeight: 'bold',
        paddingBottom:2
    },
    session: {
        textAlign: 'center',
        color: '#ffdc7d',
        fontWeight: 'bold',
        fontSize: 15,
    },
})
export default Item;