import React from 'react';

import Footer from './Footer.jsx';
import Header from './Header.jsx';
import style from './root.css';

export default React.createClass({
  render() {
    return (
      <div className={style.app}>
        <header className={style.header}>
          <Header />
        </header>

        <main className={style.content}>
          {this.props.children}
        </main>

        <footer className={style.footer}>
          <Footer />
        </footer>
      </div>
    );
  }
})