import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-5 pb-4 text-center">
      <ul className="d-inline-flex pl-3">
        <li>
          <a href="https://github.com/naniwanoshikin/shikichanpower.github.io/blob/master/index.html" target="_blank" rel="noreferrer noopener">
            <span className="faa-parent animated-hover">
              <i className="fab fa-github fa-2x faa-tada"></i>
            </span>
          </a>
        </li>
        <li>
          <a className="share" href="https://twitter.com/intent/tweet?text=学習方法で困っている方々必見&url=https://dotinstall.com/lessons&related=@power_of_shikin" target="_blank" rel="noreferrer noopener" >
            <span className="faa-parent animated-hover">
              <i className="fab fa-twitter fa-2x faa-passing"></i>
            </span>
          </a>
        </li>
        <li>
          <a href="http://instagram.com/shikitch_pk">
            <span className="faa-parent animated-hover"><i className="fab fa-instagram fa-2x fa-flip-horizontal  faa-spin"></i></span>
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCyydUwy-0x2Tc-FcCWBQncw?view_as=subscriber">
            <span className="faa-parent animated-hover">
              <i className="fab fa-youtube fa-2x faa-ring"></i>
            </span>
          </a>
        </li>
      </ul>
      <p>
        <a href="/">© shikitti-Portfolio.2020</a>
      </p>
    </footer>
  );
}

export default Footer;
