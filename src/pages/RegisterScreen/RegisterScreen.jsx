import { useState } from "react";
import { View } from "react-native";
import { styles } from "../../config/styles";
import { auth } from "../../config/firebase";
import { Button, Surface, Text, TextInput } from "react-native-paper"
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function RegisterScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmarSenha, setConfirmarSenha] = useState("");

    async function handleRegister() {
        if (senha !== confirmarSenha) {
          alert("Senhas Não São Iguais.");
          return;
        }
        if (email && senha == "") {
          alert("Por Favor preencha os campos.");
          return;
        }
        try {
          const userRef = await createUserWithEmailAndPassword(auth, email, senha);
          if (userRef) {
            console.log("Usuário registrado com sucesso!");
            navigation.navigate("LoginScreen");
          }
        } catch (e) {
          console.error(e);
        }
      }

    return (
        <Surface style={styles.container}>
            <View style={styles.container_inner}>
                <TextInput
                    label="Email"
                    placeholder="Digite seu e-mail"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Digite sua senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                    style={styles.input}
                />
                <TextInput 
                    label="Confirmar Senha"
                    style={styles.input}
                    value={confirmarSenha}
                    onChangeText={setConfirmarSenha}
                    placeholder="Confirme sua senha"
                    secureTextEntry
                />
                <Text>{"\n"}</Text>
                <Button onPress={handleRegister}>Registrar</Button>
                <Text>{"\n"}</Text>
                <Button onPress={() => navigation.navigate("LoginScreen")}>Possui uma conta??</Button>
            </View>
        </Surface>
    );
}
