import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement } from 'react';

export type NextPageWithLayout<T = Record<string, never>> = NextPage<T> & {
    getLayout ?: (page: ReactElement) => typeof page;
}

export type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout<unknown>;
}