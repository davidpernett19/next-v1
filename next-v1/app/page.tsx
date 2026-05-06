import Link from 'next/link';

export default function Home() {
  return (
    <div>
        <Link href="/">Boton Home</Link>
        <Link href="/uno">Boton Uno</Link>
        <Link href="/dos">Boton Dos</Link>
      <p>UNO</p>
    </div>
  );
}
