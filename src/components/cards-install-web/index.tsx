import React from 'react'
import CardInstall from '../card-install';

const BROWSERS = [{
  title: 'ZaDark for Chrome',
  image: require('@site/docs/install/img/chrome.jpeg').default,
  downloadLink: 'https://go.quaric.com/zadark-chrome',
  tutorialLink: '/web/chrome'
}, {
  title: 'ZaDark for Safari',
  image: require('@site/docs/install/img/safari.jpeg').default,
  downloadLink: 'https://go.quaric.com/zadark-safari',
  tutorialLink: '/web/safari'
}, {
  title: 'ZaDark for Edge',
  image: require('@site/docs/install/img/edge.jpeg').default,
  downloadLink: 'https://go.quaric.com/zadark-edge',
  tutorialLink: '/web/edge'
}, {
  title: 'ZaDark for Opera',
  image: require('@site/docs/install/img/opera.jpeg').default,
  downloadLink: 'https://go.quaric.com/zadark-opera',
  tutorialLink: '/web/opera'
}, {
  title: 'ZaDark for Firefox',
  image: require('@site/docs/install/img/firefox.jpeg').default,
  downloadLink: 'https://go.quaric.com/zadark-firefox',
  tutorialLink: '/web/firefox'
}]

const CardsInstallWeb = () => {
  return (
    <div className='grid sm:grid-cols-2 gap-4'>
      {BROWSERS.map((browser, index) => (
        <CardInstall
          key={index}
          title={browser.title}
          image={browser.image}
          downloadLink={browser.downloadLink}
          tutorialLink={browser.tutorialLink}
        />
      ))}
    </div>
  );
}

export default CardsInstallWeb
