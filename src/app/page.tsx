'use client';

import Head from 'next/head';
import * as React from 'react';
import ReactAllPlayer from 'react-all-player';
import { BsGithub } from 'react-icons/bs';

import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
export default function HomePage() {
  return (
    <main>
      <Head>
        <title>ReactAllPlayer</title>
      </Head>

      <div className='flex min-h-screen items-center justify-center'>
        <div className='mx-4 grid h-full grid-cols-1 space-y-12 duration-100  ease-in-out md:mx-24 md:grid-cols-2'>
          <div className='mx-4 flex w-full flex-col items-center justify-center space-y-6 md:mx-6 md:w-2/3 md:items-start'>
            <div className='font-bold  tracking-wide text-red-600 [font-size:var(--step-4)]'>
              ReactAllPlayer
            </div>

            <div className=''>
              <span className='leading-relaxed text-neutral-800 [font-size:var(--step-1)]'>
                Simple React component that provides versatile and good looking
                UI video player.
              </span>
            </div>

            <div>
              <ButtonLink
                rightIcon={BsGithub}
                variant='primary'
                className='px-6 py-3 [font-size:var(--step--1)]'
                href='https://github.com/asadbek064/react-all-player'
              >
                Download
              </ButtonLink>
            </div>
          </div>

          <div className='flex flex-col justify-center'>
            <ReactAllPlayer
              className='max-h-full max-w-full items-center'
              autoPlay={true}
              thumbnail='https://cdn.plyr.io/static/demo/thumbs/100p-00001.jpg'
              sources={[
                {
                  file: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-1080p.mp4',
                  label: '1080p',
                },
                {
                  file: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-720p.mp4',
                  label: '720p',
                },
              ]}
              subtitles={[
                {
                  lang: 'en',
                  language: 'English',
                  file: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.en.vtt',
                },
                {
                  lang: 'fr',
                  language: 'French',
                  file: 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.fr.vtt',
                },
              ]}
            />

            <small className='flex-start mt-1 flex text-[0.55rem] text-neutral-800 opacity-40'>
              <a
                href='https://itunes.apple.com/au/movie/view-from-a-blue-moon/id1041586323'
                target='_blank'
                className='link'
              >
                View From A Blue Moon © Brainfarm
              </a>
            </small>
          </div>
        </div>
      </div>

      <footer className='absolute bottom-0 w-full bg-neutral-50 py-2 text-center text-gray-900'>
        © {new Date().getFullYear()} By{' '}
        <UnderlineLink href='https://asadbek.dev/'>
          Asadbek Karimov
        </UnderlineLink>
      </footer>
    </main>
  );
}
