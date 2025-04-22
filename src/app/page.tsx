'use client';

import { createI18nInstance } from '../i18n';
import HomePage from '@/Components/HomePage'

createI18nInstance('en');

export default function Home() {

  return (
    <>
      <HomePage />
    </>
  )
}


// import { redirect } from "next/navigation";

// export default function Home() {

//   redirect('/en'); // Default lang

// }
