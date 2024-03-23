
import Link from 'next/link';

export default async function Home() {

  return (
    <main>
      <h1>SUPP</h1>
      <Link href={"/pages/register"}> REgister </Link>

    </main>
  );
}
