import React,{ useState,useEffect }  from 'react';
import { StyleSheet,View,ActivityIndicator } from 'react-native';
import { MenuGridList } from '../layout/menu-grid-list';

export const Home = (props): React.ReactElement => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);
  
  const onItemPress = (index: number): void => {
    props.navigation.navigate(data[index].route);
  };

  let data = 
  [
    {
      title: 'Webview',
      img: require('../assets/icons/rocket.png'),
      route: 'MyWebView',
    },
    {
      title: 'Settings',
      img: require('../assets/icons/rocket.png'),
      route: 'SettingsTab',
    },
  ]

  if(isLoading)  
    return (<View style={styles.loading}><ActivityIndicator size="large" /></View>);
  else
    return (
      <View style={styles.safeArea}>
        <MenuGridList
          data={data}
          onItemPress={onItemPress}
        />
      </View>
    );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
