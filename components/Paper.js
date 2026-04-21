import React, { useState } from "react";
import { View, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import {
  Appbar,
  Text,
  Button,
  TextInput,
  Card,
  Checkbox,
  Snackbar,
  Searchbar,
  Avatar,
  HelperText,
  RadioButton,
  Chip,
  Menu,
  Portal,
  Dialog,
  FAB,
} from "react-native-paper";

export default function Paper() {
  const [emri, setEmri] = useState("");
  const [fjalekalimi, setFjalekalimi] = useState("");
  const [checked, setChecked] = useState(false);
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const [kerko, setKerko] = useState("");
  const [kursi, setKursi] = useState("react-native");
  const [menuVisible, setMenuVisible] = useState(false);
  const [dialogVisible, setDialogVisible] = useState(false);

  const kaGabim = emri.length > 0 && emri.length < 3;

  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.Content title="React Native Paper" />
        <Appbar.Action icon="magnify" onPress={() => alert("Search")} />
        <Appbar.Action icon="dots-vertical" onPress={() => alert("More")} />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text variant="displayMedium" style={styles.title}>
          Mire se vini ne React Native Paper
        </Text>

        <Text variant="titleMedium" style={styles.paragraph}>
          Ketu kemi disa komponente baze qe perdoren shpesh.
        </Text>

        {/* Avatar */}
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Avatar
        </Text>

        <View style={styles.row}>
          <Avatar.Icon size={70} icon="account" />
          <Avatar.Text size={50} label="FP" style={styles.avatarText} />
        </View>

        {/* Buttons */}
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Button
        </Text>

        <Button mode="text" onPress={() => alert("Text Button")}>
          Text Button
        </Button>

        <Button
          mode="outlined"
          onPress={() => alert("Outlined Button")}
          style={styles.spaceTop}
        >
          Outlined Button
        </Button>

        <Button
          mode="contained"
          icon="camera"
          onPress={() => alert("Contained Button")}
          style={styles.spaceTop}
        >
          Open Camera
        </Button>

        {/* TextInput */}
        <Text variant="titleMedium" style={styles.sectionTitle}>
          TextInput
        </Text>

        <TextInput
          label="Emri"
          mode="outlined"
          value={emri}
          onChangeText={setEmri}
          placeholder="Shkruaj emrin"
          style={styles.input}
        />

        <HelperText type="error" visible={kaGabim}>
          Emri duhet te kete te pakten 3 shkronja
        </HelperText>

        <TextInput
          label="Fjalekalimi"
          mode="outlined"
          value={fjalekalimi}
          onChangeText={setFjalekalimi}
          secureTextEntry
          left={<TextInput.Icon icon="lock" />}
          style={styles.input}
        />

        {/* Searchbar */}
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Searchbar
        </Text>

        <Searchbar
          placeholder="Kerko..."
          value={kerko}
          onChangeText={setKerko}
          style={styles.input}
        />

        {/* Card */}
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Card
        </Text>

        <Card style={styles.card}>
          <Card.Title title="Kursi i programimit" subtitle="React Native" />

          <Card.Content>
            <Text variant="bodyMedium">
              Ky eshte nje shembull i Card ne React Native Paper.
            </Text>
          </Card.Content>

          <Card.Actions>
            <Button onPress={() => alert("Lexo me shume")}>
              Lexo me shume
            </Button>

            <Button
              mode="contained"
              onPress={() => {
                if (!checked) {
                  alert("Duhet te pranoni kushtet");
                  return;
                }
                setSnackbarVisible(true);
              }}
            >
              Regjistrohu
            </Button>
          </Card.Actions>
        </Card>

        {/* Checkbox */}
        <TouchableOpacity
          onPress={() => setChecked(!checked)}
          style={styles.checkboxRow}
        >
          <Checkbox status={checked ? "checked" : "unchecked"} />
          <Text style={styles.checkboxText}>Pranoj kushtet</Text>
        </TouchableOpacity>

        {/* Radio Buttons */}
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Zgjedh kursin
        </Text>

        <RadioButton.Group
          onValueChange={(value) => setKursi(value)}
          value={kursi}
        >
          <RadioButton.Item label="React Native" value="react-native" />
          <RadioButton.Item label="PHP" value="php" />
          <RadioButton.Item label="Python" value="python" />
        </RadioButton.Group>

        {/* Chips */}
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Chip
        </Text>

        <View style={styles.rowWrap}>
          <Chip style={styles.chip}>JavaScript</Chip>
          <Chip style={styles.chip}>PHP</Chip>
          <Chip style={styles.chip}>Python</Chip>
          <Chip style={styles.chip}>Java</Chip>
          <Chip style={styles.chip}>C</Chip>
        </View>

        {/* Menu */}
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Menu
        </Text>

        <Menu
          visible={menuVisible}
          onDismiss={() => setMenuVisible(false)}
          anchor={
            <Button mode="outlined" onPress={() => setMenuVisible(true)}>
              Hap Menune
            </Button>
          }
        >
          <Menu.Item onPress={() => setMenuVisible(false)} title="Profili" />
          <Menu.Item onPress={() => setMenuVisible(false)} title="Settings" />
          <Menu.Item onPress={() => setMenuVisible(false)} title="Dil" />
        </Menu>

        {/* Dialog */}
        <Text variant="titleMedium" style={styles.sectionTitle}>
          Dialog
        </Text>

        <Button mode="contained" onPress={() => setDialogVisible(true)}>
          Hap Dialog
        </Button>
      </ScrollView>

      {/* Snackbar (vetëm një) */}
      <Snackbar
        visible={snackbarVisible}
        onDismiss={() => setSnackbarVisible(false)}
        duration={3000}
        action={{
          label: "Mbyll",
          onPress: () => setSnackbarVisible(false),
        }}
      >
        Veprimi u realizua me sukses
      </Snackbar>

      {/* Dialog */}
      <Portal>
        <Dialog
          visible={dialogVisible}
          onDismiss={() => setDialogVisible(false)}
        >
          <Dialog.Title>Konfirmim</Dialog.Title>

          <Dialog.Content>
            <Text variant="bodyMedium">
              A deshironi ta mbyllni kete dialog ?
            </Text>
          </Dialog.Content>

          <Dialog.Actions>
            <Button onPress={() => setDialogVisible(false)}>Jo</Button>
            <Button onPress={() => setDialogVisible(false)}>Po</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>

      {/* FAB */}
      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => alert("FAB clicked")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContainer: {
    padding: 16,
    paddingBottom: 100,
  },
  title: { marginBottom: 10 },
  paragraph: { marginBottom: 20 },
  sectionTitle: {
    marginTop: 20,
    marginBottom: 10,
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatarText: {
    marginLeft: 10,
  },
  spaceTop: {
    marginTop: 10,
  },
  input: {
    marginBottom: 10,
  },
  card: {
    marginTop: 10,
  },
  checkboxRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  checkboxText: {
    marginLeft: 8,
  },
  rowWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  chip: {
    marginRight: 8,
    marginBottom: 8,
  },

});