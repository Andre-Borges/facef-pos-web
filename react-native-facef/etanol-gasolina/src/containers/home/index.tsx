import {Button, Card, Input, Text} from '@ui-kitten/components';
import React, {Component} from 'react';
import {inject, observer} from 'mobx-react';

import {TextInputMask} from 'react-native-masked-text';

import HomeStore from '../../stores/home.store';
import {StyleSheet} from 'react-native';

interface Props {
  homeStore: HomeStore;
}

@inject('homeStore')
@observer
export default class Home extends Component<Props> {
  render() {
    const {
      etanol,
      gasolina,
      resultado,
      calculate,
      handleForm,
    } = this.props.homeStore;

    return (
      <>
        <Card style={styles.card}>
          <Text style={styles.text}>Etanol:</Text>
          <TextInputMask
            type={'money'}
            value={etanol.toString()}
            onChangeText={etanol => handleForm({etanol})}
            style={[styles.section5, styles.textInputMask]}
          />
          <Text style={[styles.section15, styles.text]}>Gasolina:</Text>
          <TextInputMask
            type={'money'}
            value={gasolina.toString()}
            onChangeText={gasolina => handleForm({gasolina})}
            style={[styles.section5, styles.textInputMask]}
          />

          <Button
            style={[styles.btnCalcular, styles.section30]}
            onPress={() => calculate()}>
            Calcular
          </Button>
          <Text style={[styles.paragraph]}>{resultado}</Text>
        </Card>
      </>
    );
  }
}

const styles = StyleSheet.create({
  paragraph: {
    marginTop: 30,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#212121',
    borderWidth: 0,
    borderRadius: 0,
  },
  text: {
    color: '#fff',
  },
  textInputMask: {
    backgroundColor: '#fff',
  },
  btnCalcular: {
    color: '#000000',
    backgroundColor: '#00897b',
    borderWidth: 0,
    borderColor: 'transparent',
  },
  section5: {
    marginTop: 5,
  },
  section15: {
    marginTop: 15,
  },
  section30: {
    marginTop: 30,
  },
});
