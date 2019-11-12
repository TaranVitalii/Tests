import React from "react";
import App from "next/app";
import Store from "../src/store";

class MyApp extends App {
  static async getInitialProps(Store) {
    const appProps = await App.getInitialProps(Store);

    return { ...appProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <Store>
        <Component {...pageProps} />
      </Store>
    );
  }
}

export default MyApp;
