import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import styles from "./page.module.css";

async function getTermsData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/term`, {
    next: { revalidate: 3600 }, // Revalidate every hour
  });

  if (!res.ok) {
    throw new Error("Failed to fetch terms data");
  }

  return res.json();
}

export default async function Terms() {
  const termsData = await getTermsData();

  return (
    <div className={styles.page}>
      <main className={styles.container}>
        <div className={styles.content}>
          <BlocksRenderer content={termsData.data.attributes.content} />
        </div>
      </main>
    </div>
  );
}
