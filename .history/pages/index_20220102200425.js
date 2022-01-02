import Head from 'next/head';
import Balance from '../components/Balance';
import Header from '../components/Header';
import IncomeExpenses from '../components/IncomeExpenses';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Finace Tracker</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <Header />
        <div>
        <Balance />
        <IncomeExpenses />
        </div>
      </div>
    </div>
  )
}
