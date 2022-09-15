import React,{ useState,useEffect }  from 'react';
import { StyleSheet,View,Text,ActivityIndicator } from 'react-native';


export const Settings = (props): React.ReactElement => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if(isLoading)  
    return ( <View style={styles.loading}><ActivityIndicator/></View> );
  else
    return (
      <View style={styles.container}>
        <Text>Settings!</Text>
      </View>
    );
  };

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
