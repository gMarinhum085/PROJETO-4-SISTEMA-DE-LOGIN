import React, { useState } from 'react';
import { 
  View, Text, TextInput, TouchableOpacity, 
  Image, StyleSheet, Alert 
} from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'admin@admin.com' && password === '1234') {
      Alert.alert('Login successful');
    } else {
      Alert.alert('Login failed');
    }
  };

  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/snack-icon.png')}
        style={styles.image} 
      />

      <Text style={styles.title}>Sistema de Login</Text>
      <Text style={styles.subtitle}>Bem Vindo(a)! Digite seus dados abaixo.</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Digite seu email"
        keyboardType="email-address"
        value={email}
        onChangeText={(email) => setEmail(email)}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput 
        style={styles.input} 
        placeholder="*************" 
        secureTextEntry
        value={password}
        onChangeText={(password) => setPassword(password)}
      />

      <TouchableOpacity style={styles.forgotContainer}>
        <Text style={styles.forgotText}>Esqueci minha senha</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        Não tem uma conta? <Text style={styles.signupLink}>Cadastre-se</Text>
      </Text>

      <Text style={styles.footer}>Criado por Gabriel Marinho</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#999',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    color: '#333',
  },
  input: {
    color: '#999',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 6,
    marginTop: 4,
  },
  forgotContainer: {
    alignItems: 'flex-end',
    marginVertical: 10,
  },
  forgotText: {
    color: '#4162b7',
  },
  button: {
    backgroundColor: '#4162b7',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  signupText: {
    textAlign: 'center',
    color: '#777',
  },
  signupLink: {
    color: '#4162b7',
  },
  footer: {
    marginTop: 30,
    textAlign: 'center',
    color: '#999',
    fontSize: 12,
  },
});

export default LoginScreen;
