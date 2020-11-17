import React from 'react';

import styles from './ProfileCard.module.css';

const ProfileCard = ({ profile } : any ) => {
  return (
    <div>
      <article className={styles.card}>
        <a href="#">
          <picture className={styles.thumbnail}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/e/e1/John_McCain_official_portrait_2009.jpg" alt="Norwegian boller"/>
          </picture>
          <div className={styles.content}>
            <h2>Vacation Image 02</h2>
            <p>Staff engagement synergize productive mindfulness and waste of resources cross sabers, or forcing function shotgun approach drink the Kool-aid.</p>
            <p>Execute are we in agreeance what do you feel you would bring to the table if you were hired for this position, nor closer to the metal goalposts, are there any leftovers in the kitchen?.</p>
          </div>
        </a>
      </article>
      <style jsx global>{`
        img {
          object-fit: contain;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default ProfileCard;