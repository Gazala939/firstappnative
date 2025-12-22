import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.h1}>React Native Basics</Text>

      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.logo}
      />

      <Text style={styles.p}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit...
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur beatae culpa, cupiditate, eos voluptatibus ab necessitatibus recusandae officia dicta dolores quis quasi dignissimos. Non hic unde vel numquam nam qui.lorem100
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Alias praesentium veniam temporibus quisquam quis iusto possimus, ipsum deleniti earum tenetur commodi aperiam distinctio exercitationem? Voluptates sit alias fuga hic necessitatibus nesciunt officia eius maxime quae? Dignissimos provident quo beatae voluptatibus modi nulla hic laborum repellendus aliquam molestiae unde et perferendis at, eveniet quaerat error, quis culpa ipsam dolorem nesciunt? Dolor distinctio ex, iure nesciunt perspiciatis dignissimos dolores ut harum? Quod illum repudiandae, officiis ut neque, asperiores optio debitis temporibus, dolorum itaque eum pariatur expedita facere! Possimus soluta corporis cum dolorem alias quia expedita nisi harum, dolor unde voluptatibus cupiditate eum.
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor consequatur, debitis sit perferendis, nemo adipisci cum labore asperiores quod eos dignissimos laboriosam corrupti fugiat perspiciatis aut atque inventore eaque non excepturi similique quos quibusdam voluptate, id repudiandae. Explicabo quis delectus est et tempore sint aut rerum asperiores sit nesciunt voluptate amet, dolore magnam vitae earum aspernatur esse? Doloremque quo soluta quod accusamus perferendis qui nemo, quos nisi beatae necessitatibus minus optio temporibus id nesciunt amet ex ut quisquam harum, nostrum rem voluptatibus cum. Accusantium ex sapiente, quaerat quos eos assumenda fugit delectus id quas vero, aliquid voluptates voluptas at numquam!lorem100
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus doloremque consequuntur vel voluptate itaque officia aut amet voluptatibus eligendi accusamus saepe quia quibusdam, asperiores sunt! Ea blanditiis, officiis sit molestiae cumque quos laudantium, voluptates cum ex nam in dolores aperiam tempore, nostrum dolorum fugiat soluta dolore! Eaque illo nulla adipisci excepturi et fuga tempora. Magni ab unde facere aliquam doloremque assumenda debitis praesentium provident aspernatur vel corrupti, minus laboriosam eos est totam, rem mollitia reprehenderit quo error repellendus voluptate iure. Assumenda fuga quod fugiat voluptates veritatis, quam voluptatem sed! Harum fugiat enim ea qui minima? Adipisci, quaerat corporis. Ab, eligendi.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: {
    padding: 20,
    backgroundColor:'wheat'
  },
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logo: {
    width: 64,
    height: 64,
    marginBottom: 20,
  },
  p: {
    fontSize: 16,
    lineHeight: 22,
  },
});

export default App;
