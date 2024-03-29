import React from 'react';

const Links = [
  {
    link: "https://github.com/naniwanoshikin/myfirst_SPA",
    i: "fab fa-2x fa-github faa-tada",
  },
  {
    link: "https://qiita.com/power_of_shikin/items/5e38e1908f6e2b07d3b7",
    i: "fas fa-2x fa-search faa-spin",
  },
  {
    link: "./db2",
    i: "fas fa-2x fa-weight faa-spin text-light",
  },
  // {
  //   link: "./signin",
  //   i: "fas fa-2x fa-key text-light faa-spin",
  // },
  // {
  //   link: "https://twitter.com/intent/tweet?text=LGTM恵んでください🙇‍♂️&url=https://twitter.com/power_of_shikin/status/1346568577843773441",
  //   i: "fab fa-2x fa-twitter faa-passing",
  // },
  // {
  //   link: "http://instagram.com/shikitch_pk",
  //   i: "fab fa-2x fa-instagram fa-flip-horizontal faa-spin",
  // },
  // {
  //   link: "https://www.youtube.com/channel/UCyydUwy-0x2Tc-FcCWBQncw?view_as=subscriber",
  //   i: "fab fa-2x fa-youtube faa-ring",
  // },
];

const Footer = () => {
  return (
    <footer className="pt-4 pb-3 text-center">
      <ul className="d-inline-flex pl-3">
        {Links.map((list, i) => {
          return (
            <li key={i}>
              <a href={list.link} target="_blank" rel="noreferrer noopener">
                <span className="faa-parent animated-hover">
                  <i className={list.i}></i>
                </span>
              </a>
            </li>
          )
        })}
      </ul>
      <p><a href="#!">© shikitti-page.2021</a></p>
    </footer>
  );
}

export default Footer;