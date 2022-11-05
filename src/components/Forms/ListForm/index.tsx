import { Button } from '@components/Controllers/Button';
import { Input } from '@components/Controllers/Input';
import React, { useState, useEffect } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { Alert, StyleSheet } from 'react-native';
import { useTheme } from 'styled-components/native';
import { useAuth } from '../../../hooks/auth';
import { api } from '../../../services/api';
import { Form, FormBottom, Title } from './styles';
import { useList } from '../../../hooks/list';

type ListFormProps = {
  handleCloseBottomSheet: () => void;
};

type MarketsProps = {
  id: string;
  name: string;
  adrress: string;
  img: string;
};

type MarketsSelectProps = {
  label: string;
  value: string;
};

type CreateListParams = {
  marketId: string;
  name: string;
  description: string;
  userId: string;
};

export function ListForm({ handleCloseBottomSheet, ...rest }: ListFormProps) {
  const { fetchLists } = useList();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [marketId, setMarketId] = useState(null);
  const [marketsList, setMarketsList] = useState<MarketsSelectProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const { user } = useAuth();

  function handleCloseModal() {
    handleCloseBottomSheet();
  }
  async function handleNewList() {
    if (!title) {
      Alert.alert('Alerta', 'Preencha o título.');
    } else if (!marketId) {
      Alert.alert('Alerta', 'Escolha um mercado.');
    } else {
      try {
        setIsLoading(true);
        const formNewListData = {
          name: title,
          description,
          marketId,
          userId: user?.user.email,
        };

        await api.post<CreateListParams>('/lists/', formNewListData);

        fetchLists();
      } catch (error) {
        console.log(error);
      } finally {
        handleCloseBottomSheet();
        setIsLoading(false);
      }
    }
  }

  async function fetchMarkets() {
    try {
      const response = await api.get<MarketsProps[]>(`/markets/`);
      const { data } = response;
      const newListMarkets = data.map(m => {
        return { label: m.name, value: m.id };
      });
      setMarketsList(newListMarkets);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchMarkets();
  }, []);

  const theme = useTheme();

  const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
      fontSize: 16,
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderWidth: 1,
      borderColor: 'gray',
      borderRadius: 4,
      color: 'black',
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
      fontSize: theme.FONT_SIZE.SM,
      fontFamily: theme.FONT_FAMILY.REGULAR,
      padding: 16,
      borderWidth: 1,
      borderColor: theme.COLORS.GRAY_300,
      backgroundColor: theme.COLORS.WHITE,
      borderRadius: 6,
      color: theme.COLORS.GRAY_700,
      marginBottom: 20,
      minHeight: 56,
      maxHeight: 56,
      paddingRight: 30, // to ensure the text is never behind the icon
    },
    placeholder: {
      color: theme.COLORS.GRAY_400,
    },
  });

  return (
    <Form>
      <Title>Nova lista de compras</Title>
      <Input placeholder="Título" onChangeText={setTitle} />
      <RNPickerSelect
        placeholder={{ label: 'Selecione um mercado', value: null }}
        onValueChange={value => setMarketId(value)}
        useNativeAndroidPickerStyle={false}
        style={pickerSelectStyles}
        items={marketsList}
      />
      <Input placeholder="Descrição" onChangeText={setDescription} />
      <FormBottom>
        <Button
          {...rest}
          style={{ flex: 1, marginRight: 10 }}
          title="Criar lista"
          isLoading={isLoading}
          onPress={handleNewList}
        />
        <Button
          {...rest}
          style={{ flex: 1 }}
          title="Fechar"
          isLoading={isLoading}
          onPress={handleCloseModal}
        />
      </FormBottom>
    </Form>
  );
}
