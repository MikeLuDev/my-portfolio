import React from 'react'
import Link from 'gatsby-link'

const cards = [
  {
    heading: "Developer",
    content: [
      <p>I'm a self taught developer just getting started in the industry.
      Right now I'm on a remote web development project for <a href="http://thechex.com/" rel="noopener" target="_blank">The CHEX</a>.</p>,
      <p>I started learning development studying C# and Unity. As a lifelong gamer,
      I thought that it would be pretty sweet to make some simple video games.
      After getting through Bob Tabor's
      <a 
        target="_blank" 
        rel="noopener" 
        href="https://mva.microsoft.com/en-us/training-courses/c-fundamentals-for-absolute-beginners-16169"> C# Fundamentals for Absolute Beginners </a>
      and stumbling around a few
      Unity tutorials, I managed to make a simple "cookie clicker" clone which involved
      falling shapes which could be clicked for points. Shapes were randomly colored too.
      Clicking high value colors added extra points while clicking bad colors detracted lives.
      At a certain threshold the level would increase and shapes would begin to fall faster
      which resulted in hilariously fast gameplay after a few levels.</p>,
      <p>I quickly realized that it would be pretty hard to actually get a job by
      starting with game development, so I switched to web development. I spent six months
      teaching myself front end development using
      <a 
        href="https://www.freecodecamp.org/"
        target="_blank"
        rel="noopener"> FreeCodeCamp</a>.
      Seven weeks after getting the front end certification I
      found a full time job doing web development.</p>,
      <p>It's very exciting to be in this industry.
      Waking up in the morning knowing that I'm going to solve problems all day is an amazing feeling.</p>
    ]
  },
  {
    heading: "Musician",
    content: [
      <p>From 2012-2016 I attended the University of South Carolina and obtained a
      Bachelor's of Music with an emphasis in Vocal Performance.</p>,
      <p>During my time there, I studied opera, jazz, music theory, composition, history, choral music, 
      conducting, and piano to say the least.
      I wanted to learn as much as possible about music, particularly singing, and to
      master the art of it as much as I could in that time.</p>,
      <p>I still actively practice, perform, and produce all sorts of music.
      The newest frontier is <strong>guitar</strong>, which I picked up because I intend
      to travel the US starting in April and I can't exactly lug my keyboard everywhere I go.</p>
    ]
  },
  {
    heading: "Traveller",
    content: [
      <blockquote>
        “Travel is <strong>fatal</strong> to prejudice, bigotry, and narrow-mindedness,
        and many of our people need it sorely on these accounts. 
        Broad, wholesome, charitable views of men and things <strong>cannot</strong> be acquired by vegetating
        in one little corner of the earth all one's lifetime.” 
      </blockquote>,
      <p className="attribution">― Mark Twain, The Innocents Abroad/Roughing It</p>,
      <p>
        Ole Markey boy said it well there. I haven't had the opportunity to travel as much as I would like,
        but soon I'll be setting out on a one-year (almost) full US tour. Just me and my dog.
      </p>,
      <p>
        The plan is to camp and use <a href="https://www.couchsurfing.com" target="_blank" rel="noopener">Couchsurfing</a> as much as possible while doing this.
        I'm trying to not have expectations at all and approach this with a clean perspective.
      </p>,
      <p>
        Additionally, I'm going to try to keep the blog section of this website updated with words and pictures as I journey.
      </p>
    ]
  }
];

const IndexCards = ({cards}) => (
  <div className="index-cards-wrap">
    {cards.map((card, index) => (
      <div className="index-card">
        <h2>{card.heading}</h2>
        {card.content.map((item) => {
          return item;
        })}
        {/*  Show hr after every card except last */}
        {(index == cards.length - 1) ? (null) : (<hr />) }
      </div>
    ))}
  </div>
);

const IndexPage = () => (
  <div className="index-wrap">
    <div className="index-hero">
      <h1>Welcome to my piece of the internet.</h1>
      <button className="btn-primary">Learn more about me</button>
    </div>
    <div className="index-content">
      <h1>About me</h1>
      <IndexCards cards={cards}/>
    </div>
  </div>
);

export default IndexPage;
