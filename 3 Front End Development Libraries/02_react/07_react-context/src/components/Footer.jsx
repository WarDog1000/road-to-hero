function Footer({theme, translate: text}) {
  return (
    <footer className={theme}>
      <h4>{Text.footerTitle}</h4>
    </footer>
  );
}

export default Footer;
