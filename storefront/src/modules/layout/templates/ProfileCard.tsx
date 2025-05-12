import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/ProfileCard.module.css';

interface ProfileProps {
  profile: {
    name: string;
    category: string;
    image: string;
    slug: string;
  };
}

const ProfileCard: React.FC<ProfileProps> = ({ profile }) => {
  return (
    <Link href={`/profiles/${profile.slug}`} className={styles.card}>
      <div className={styles.imageContainer}>
        <Image 
          src={profile.image} 
          alt={profile.name}
          width={300}
          height={300}
          className={styles.image}
        />
      </div>
      <div className={styles.content}>
        <p className={styles.category}>{profile.category}</p>
        <h3 className={styles.name}>{profile.name}</h3>
      </div>
    </Link>
  );
};

export default ProfileCard; 