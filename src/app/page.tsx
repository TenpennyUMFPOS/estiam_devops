
import Link from 'next/link';
import Web3 from 'web3';

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default async function Home() {

  return (
    <main>
      <h1>SUPP</h1>
      <Link href={"/pages/register"}> Register </Link>



    </main>
  );
}
