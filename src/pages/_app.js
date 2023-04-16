import Mainlayout from "../components/layout/main-layout";
import '../styles/general.sass'
function App({ Component, pageProps }) {
  return (
    <>
      <Mainlayout>
        <Component {...pageProps} />
      </Mainlayout>
    </>
  );
}
export default App;
//This is the application shell the root app

//In this file we can do all the changes for all the pages
// But we should do it with layout
