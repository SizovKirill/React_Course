import React from 'react';

const Profile = () => {
    return(
        <div className="maincontent">
        <div className="baner__img">
          <img className="baner__img-pic" src="https://wallbox.ru/wallpapers/main/201338/1024933856d6a09.jpg" alt=""/>
        </div>
        <div className="profile">
          <div className="profile__container">
          <div className="profile__block">
            
            <div className="profile__ava">              
            </div>
            <div className="profile__desc">
              <div className="profile__title">Dmitry K. | User</div>
                <ul className="profile__list">
                  <li className="profile__item">Date of Birth : 2 january</li>
                  <li className="profile__item">City : Moscow</li>
                  <li className="profile__item">Education : BSU `11</li>
                  <li className="profile__item">Web Site : yandex.ru</li>
                </ul>
            </div>
          </div>
          <div className="post">
            <div className="post__block">
              <div className="post__title">Post</div>
              <div className="block__textarea">
                <textarea id="#" placeholder="Your news ..." className="post__textarea"></textarea>

              </div>
              <div className="button">
              <button className="post__button">Send</button> 
              </div> 
            </div>
            <ul className="post__list">
              <li className="post__item">
                <div className="post__img">
                  <div className="post__item-icon">
                    <img src="https://avatars.mds.yandex.net/get-pdb/1925624/d3774494-0972-406c-9e4a-d641ed2d7e43/s1200" alt="" className="post__pic"/>
                    
                  </div>
                  <div className="post__icon-desc">
                    <div className="icon__name">Dmitry K. Lorem ipsum dolor sit amet.</div>
                    <div className="icon__status">User</div>
                  </div>
                </div>
                
                <div className="post__item-desc">
                  <p>Hey, nobody love me? Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus nam blanditiis optio ab, quos soluta, expedita accusantium beatae, dolorum quis sit dolore est consequuntur placeat cumque vitae. Nulla, vel sunt.</p>
                </div>
              </li>
              <li className="post__item">
                <div className="post__img">
                  <div className="post__item-icon">
                    <img src="https://avatars.mds.yandex.net/get-pdb/1532005/43572b67-925b-41da-b449-7794d6c8eee6/s1200" alt="" className="post__pic"/>
                  </div>
                  <div className="post__icon-desc">
                    <div className="icon__name">Sergey Bereznjak</div>
                    <div className="icon__status">Administrator</div>
                  </div>
                </div>
                
                <div className="post__item-desc">
                  <p>Hey, nobody love me? Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                </div>
              </li>
              <li className="post__item">
                <div className="post__img">
                  <div className="post__item-icon">
                    <img src="https://avatars.mds.yandex.net/get-pdb/1532005/43572b67-925b-41da-b449-7794d6c8eee6/s1200" alt="" className="post__pic"/>
                  </div>
                  <div className="post__icon-desc">
                    <div className="icon__name">Sergey Bereznjak</div>
                    <div className="icon__status">Administrator</div>
                  </div>
                </div>
                
                <div className="post__item-desc">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic, fugit excepturi ex, autem, nihil fugiat alias facilis neque illum deserunt tempore Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi aut aliquid alias delectus labore esse fuga eos neque facilis nobis dignissimos officia, placeat officiis a saepe hic? Voluptatum, perferendis distinctio eius amet, animi velit ex voluptates commodi quod rem temporibus nihil harum maxime deleniti non vitae sapiente ipsam dolor natus. </p>
                </div>
              </li>
            </ul>
          </div>
          
          
          </div>
        </div>                               
        
      </div>
    );
}

export default Profile; 

 