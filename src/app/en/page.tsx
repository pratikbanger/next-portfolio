'use client';

import { createI18nInstance } from '../../i18n';
import HomePage from '@/Components/HomePage'

createI18nInstance('en');

export default function Page() {

    return (
        <>
            <HomePage />
        </>
    )
}
