import { useState } from "react";
import { View } from "react-native";
import { styles } from "../../config/styles";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import { Button, Surface, Text, TextInput } from "react-native-paper"

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    async function handleLogin() {
        try {
            const user = await signInWithEmailAndPassword(auth, email, senha);
            if (user) {
                console.log("Usuário Logado com sucesso!");
                navigation.navigate("Home");
            }
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <Surface style={styles.container}>
            <View style={styles.container_inner}>
                <Text>{"\n"}</Text>
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
                <Text>{"\n"}</Text>
                <Button onPress={handleLogin}>Logar</Button>
                <Text>{"\n"}</Text>
                <Button onPress={() => navigation.navigate("RegisterScreen")}>
                    Fazer cadastro
                </Button>
            </View>
        </Surface>
    );
}
