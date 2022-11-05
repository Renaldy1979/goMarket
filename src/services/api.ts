import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.185:3000',
  headers: {
    Authorization: `Bearer ${AsyncStorage.getItem('@gomarket:user:token')}`,
  },
});

export { api };
