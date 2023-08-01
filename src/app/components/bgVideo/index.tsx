import styles from './bgVideo.module.css';

export default function BgVideo(){
    return (
        <div className={styles.container}>
          <div className={styles.backgroundImage}>
            <img src='/assets/images/background.jpg' />
          </div>
          <video className={styles.video} autoPlay loop muted playsInline>
            <source src="/assets/videos/background.mp4" type="video/mp4" />          
            <div className={styles.fallback}>
              <img src="/assets/images/background.jpg" alt="Background Image" />
            </div>
          </video>
      </div>
    )
}