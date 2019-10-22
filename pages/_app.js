import React from "react";
import App from "next/app";

import { GlobalStyles } from "../styles";

class ShadowApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <GlobalStyles />
        <Component {...pageProps} />
      </>
    );
  }
}

export default ShadowApp;
