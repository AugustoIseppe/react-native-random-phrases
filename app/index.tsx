import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "@/utils/utility";

interface AppProps {}

interface AppState {
  textoFrase: string;
  frases: string[];
  // img: string;
}

class App extends Component<AppProps, AppState> {
  frases: string[];
  constructor(props: AppProps) {
    super(props);
    this.state = {
      textoFrase:
        "Grandes jornadas começam com pequenos passos, mas a direção é o que realmente importa.",
      frases: [],
      // img: require("./../assets/images/biscoitofechado.png"),
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = [
      "Grandes jornadas começam com pequenos passos, mas a direção é o que realmente importa.",
      "O que diferencia o possível do impossível é a determinação de tentar.",
      "O tempo nunca espera, então aproveite cada segundo para se aproximar dos seus sonhos.",
      "Seja a mudança que você quer ver no mundo, começando por você.",
      "Errar é um sinal de que você está tentando, e tentar é o primeiro passo para conquistar.",
      "A coragem de seguir em frente é o que constrói histórias de superação.",
      "Não espere por um momento perfeito; faça do momento o seu perfeito.",
      "Desafios são como o vento: eles podem te derrubar ou te fazer voar mais alto.",
      "O aprendizado é o único tesouro que ninguém pode tirar de você.",
      "Sua maior riqueza é o tempo, e a melhor forma de usá-lo é investindo em si mesmo.",
    ];
  }

  quebraBiscoito() {
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    this.setState({
      textoFrase: this.frases[numeroAleatorio],
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require("./../assets/images/biscoitoaberto.png")}
          style={styles.img}
        />
        <Text style={styles.textoFrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View>
            <Text style={styles.text}>Abrir Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default App;
