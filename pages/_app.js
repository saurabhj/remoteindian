// pages/_app.js
import App from "next/app";
import "../layouts/default/global.scss";

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Component {...pageProps} />
    );
  }
}
