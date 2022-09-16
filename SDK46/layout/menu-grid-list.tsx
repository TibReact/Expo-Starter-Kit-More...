import React,{ useState,useEffect } from 'react';
import { Dimensions, ListRenderItemInfo, StyleSheet,ImageBackground,View,TouchableOpacity,FlatList, ListElement, ListItemElement, ListProps, Text } from 'react-native';


export interface MenuGridListProps extends Omit<ListProps, 'renderItem'> {
  data: MenuItem[];
  onItemPress: (index: number) => void;
}

export const MenuGridList = (props: MenuGridListProps): ListElement => {
  const { contentContainerStyle, onItemPress, ...listProps } = props;
  const [data, setData] = useState(props.data);

  const renderItem = (info: ListRenderItemInfo<MenuItem>): ListItemElement => { 
    return (
      <TouchableOpacity style={styles.item} onPress={() => props.onItemPress(info.index)}>
        <View
          style={styles.item}
          >
        <ImageBackground
          style={styles.itemHeader}
          source={info.item.img}
        />

        <Text style={styles.lib}>{info.item.title}</Text>

        </View>
      </TouchableOpacity>
    )
  };

  return (
    <FlatList
      {...listProps}
      contentContainerStyle={[styles.container, contentContainerStyle]}
      numColumns={2}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
  },
  item: {
    flex: 1,
    aspectRatio: 1.0,
    margin: 2,
    maxWidth: Dimensions.get('window').width / 2 - 24,
      
  },
  lib: {
    color: 'grey',
    marginTop: 8,
    marginLeft: 8,
    fontWeight: '600',
    fontSize:20,
    padding:0,
  },
  itemHeader: {
    ...StyleSheet.absoluteFillObject,
    height: 164,
  },
});
