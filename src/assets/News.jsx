import React from 'react'
import Newspage from './Newspage'
import news0 from '../../public/news/news0.jpg'
import news1 from '../../public/news/news1.jpeg'
import news2 from '../../public/news/news2.jpeg'
import news3 from '../../public/news/news3.jpeg'
const News = () => {
  return (
    <>
      <div>Anime & Manga News</div>
      <hr />
      <div className="p-2 newspage">
        <Newspage title="Bungou Stray Dogs Wan!' Second Season Announced for 2026" image={news0} text="The official website of the Bungou Stray Dogs Wan! television anime announced a second season on Saturday, revealing the main staff, cast and visual" note="11 hours ago by Syureria | Discuss (2 comments)"/>
        <Newspage title="'Saigo ni Hitotsu dake Onegai shitemo Yoroshii deshou ka' Reveals Additional Cast, Third Promo" image={news1} text="The official website of the Saigo ni Hitotsu dake Onegai shitemo Yoroshii deshou ka television anime revealed additional cast, third promo, and a key visual (pictured) on Friday. " note="Yesterday, 11:16 AM by Naitik7897 | Discuss (1 comment)"/>
        <Newspage title="'Mato Seihei no Slave 2' Announces Additional Cast [Update 11/1]" image={news2} text="The official X (formally Twitter) of the Mato Seihei no Slave (Chained Soldier) anime series revealed new cast for the second season on Saturday. The second season adapting Takahiro and Youhei Takemura's action fantasy manga " note="Yesterday, 10:49 AM by nirererin | Discuss (3 comments)"/>
        <Newspage title="BAdditional Cast for 'Isekai no Sata wa Shachiku Shidai' Announced" image={news3} text="The official website for the television anime adaptation of Wakatsu Yatsuki's Isekai no Sata wa Shachiku Shidai (The Other World's Books Depend on the Bean Counter) light novel announced four additional cast on Friday." note="Oct 30, 9:34 PM by DatRandomDude | Discuss (3 comments)"/>
        {/* <Newspage title="Bungou Stray Dogs Wan!' Second Season Announced for 2026" image={news4} text="The official website of the Bungou Stray Dogs Wan! television anime announced a second season on Saturday, revealing the main staff, cast and visual" note="11 hours ago by Syureria | Discuss (2 comments)"/> */}
      </div>
    </>
  )
}

export default News