import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const BreweryItem = ({title, subtitle}) => {
  const [isLiked, setIsLiked] = useState(true);

  const toggleLike = () => {
    setIsLiked(prevState => !prevState);
  };

  return (
    <View style={styles.itemContainer}>
      <Image
        source={{uri: 'https://via.placeholder.com/150'}}
        style={styles.image}
      />
      <TouchableOpacity onPress={toggleLike} style={styles.icon}>
        <Ionicons
          name={isLiked ? 'heart' : 'heart-outline'}
          size={24}
          color="red"
        />
      </TouchableOpacity>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').width / 2 - 70,
  },
  icon: {
    position: 'absolute',
    top: 8,
    right: 8,
    zIndex: 1,
  },
  subtitle: {
    fontSize: 11,
    color: '#666',
    marginTop: 8,
    marginHorizontal: 8,
  },
  title: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 4,
    marginHorizontal: 8,
    marginBottom: 8,
  },
});

export default BreweryItem;
