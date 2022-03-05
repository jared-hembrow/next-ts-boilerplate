import "../styles/globals.css";
/**
 *
 * @param {childComponent} param0
 * @param {pageProps} param1
 * @return {JSX.Element}:
 */
function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
