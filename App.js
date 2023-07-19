import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useEffect, useState} from "react";
import {req} from "./api";
import RenderItem from "./Components/RenderItem";
import {LinearGradient} from "expo-linear-gradient";

export default function App() {
  let today=new Date().toLocaleDateString('ro-Ro')
  let [data, setData] = useState('');

  useEffect(() => {
    req.getToken(today).then(r => setData(r))
  }, [])
  return (<View style={styles.container}>
        <LinearGradient start={{x:0,y:1}} colors={['#000000','#000000']}>
          {data?<RenderItem setData={setData} data={data}/>:<Text style={{color:'#fff' }}>some Error</Text>}
        </LinearGradient>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    paddingRight: 13,

  },
});

