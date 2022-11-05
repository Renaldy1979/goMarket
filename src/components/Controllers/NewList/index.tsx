import React, { useMemo, useRef } from 'react';

import { Button } from '@components/Controllers/Button';
import {
  BottomSheetView,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import { ListForm } from '@components/Forms/ListForm';

import { Background, BackgroundModal } from './styles';

export function NewList() {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ['60%'], []);

  function handleSnapPress() {
    bottomSheetRef.current?.present();
  }

  function handleCloseBottomSheet() {
    bottomSheetRef.current?.close();
  }

  const backdropComponent = () => {
    return <Background />;
  };

  const backgroundComponent = () => {
    return <BackgroundModal />;
  };
  return (
    <BottomSheetModalProvider>
      <Button
        title="Nova lista"
        onPress={handleSnapPress}
        style={{ width: '100%', marginTop: 10 }}
      />
      <BottomSheetModal
        ref={bottomSheetRef}
        snapPoints={snapPoints}
        style={{
          padding: 10,
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
        backdropComponent={backdropComponent}
        backgroundComponent={backgroundComponent}
      >
        <BottomSheetView>
          <ListForm handleCloseBottomSheet={handleCloseBottomSheet} />
        </BottomSheetView>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
}
