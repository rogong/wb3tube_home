import { card } from '../assets';
import styles, { layout } from '../style';
import Button from './Button';

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Integrated with tiktok API <br className="sm:block hidden" /> in few
        easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        We allow you to bring your content from tiktok.
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <video 
      loop
      autoPlay
       src="https://sf16-va.tiktokcdn.com/obj/eden-va2/hylqhneh7uhozpr/tt4d/landing_page/video_kit.mp4"></video>
    </div>
  </section>
);

export default CardDeal;
