import Link from "next/link";
import Image from "next/image";
import styles from "./BlogsSection.module.css";

export default function BlogsSection() {
  return (
    <section className={`section-padding ${styles.section}`} id="blogs">
      <div className="container">
        <h2 className="section-title text-center">
          Latest <span>Blogs & News</span>
        </h2>
        <p className={`text-center ${styles.subtitle}`}>
          Stay updated with the latest cricket news, tournament schedules, insights, and updates.
        </p>

        <div className={styles.grid}>
          {/* Card 1 */}
          <article className={styles.card}>
            <div className={styles.imageWrapper}>
              <Image
                src="/blogs/abu-dhabi-t10.png"
                alt="Abu Dhabi T10 2026 Blog Cover"
                width={600}
                height={337}
                className={styles.image}
              />
              <span className={styles.badge}>T10 League</span>
            </div>
            
            <div className={styles.content}>
              <div className={styles.meta}>
                <span className={styles.date}>July 8, 2026</span>
                <span className={styles.author}>By Reddy Anna</span>
              </div>
              
              <h3 className={styles.cardTitle}>
                Abu Dhabi T10 2026: Dates, Teams, And Schedule For The Decade-Long Cricket's Shortest Professional League
              </h3>
              
              <p className={styles.excerpt}>
                Ninety balls per innings. A game that can be completed within ninety minutes. The Abu Dhabi T10 is cricket's shortest professional format and the tenth edition will commence on November 7 and conclude on November 20, 2026...
              </p>
              
              <div className={styles.cardFooter}>
                <Link href="/abu-dhabi-t10-2026/" className={styles.btnLink}>
                  Show More <span className={styles.arrow}>→</span>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
