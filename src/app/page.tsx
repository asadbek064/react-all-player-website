'use client';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import * as React from 'react';
import { BiCopy } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';

// Dynamically import ReactAllPlayer to ensure it's only loaded on the client-side
const ReactAllPlayer = dynamic(() => import('react-all-player'), {
  ssr: false,
});

import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';

export default function HomePage() {
  const codeString = `import ReactAllPlayer from 'react-all-player'
  
<ReactAllPlayer
  sources={[
    {
      file: 'https://ezy.ovh/5rGlD',
      label: '1080p'
    },
    {
      file: 'https://ezy.ovh/hsPA0',
      label: '720p'
    }
  ]}
  subtitles={[
    {
      lang: 'en',
      language: 'English',
      file: 'https://ezy.ovh/1PQZY',
    },
    {
      lang: 'fr',
      language: 'French',
      file: 'https://ezy.ovh/cQLFa',
    },
  ]}
/>`;

  // Function to handle copying text to clipboard
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <main className='mt-6'>
      <Head>
        <title>ReactAllPlayer</title>
      </Head>

      <div className='flex items-center justify-center'>
        <div className='mx-4 grid grid-cols-1 gap-12 md:mx-24 md:grid-cols-2 md:gap-16'>
          <div className='flex flex-col items-center justify-center space-y-6 md:items-start'>
            <div className='font-bold tracking-wide text-red-600 [font-size:var(--step-4)]'>
              ReactAllPlayer
            </div>

            <div>
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

            <div className='w-full'>
              <h3 className='font-semibold text-neutral-800 [font-size:var(--step--1)]'>
                Quick Start
              </h3>
              <div className='relative mb-2 overflow-hidden rounded-lg bg-[#011627]'>
                <div className='flex items-center justify-between p-2'>
                  <SyntaxHighlighter language='bash' style={nightOwl}>
                    npm install react-all-player
                  </SyntaxHighlighter>
                  <button
                    onClick={() => handleCopy('npm install react-all-player')}
                    className='absolute right-3 top-3 ml-2 text-white'
                  >
                    <BiCopy size={20} />
                  </button>
                </div>
              </div>
              <div className='relative mb-14 overflow-hidden rounded-lg bg-[#011627] py-4 text-sm'>
                <div className='flex items-center justify-between px-2'>
                  <div className='flex space-x-2'>
                    <div className='h-3 w-3 rounded-full bg-red-500'></div>
                    <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
                    <div className='h-3 w-3 rounded-full bg-green-500'></div>
                  </div>
                  <div className='text-xs text-gray-400'>example.tsx</div>
                </div>
                <div className='relative overflow-hidden'>
                  <div className='flex items-center justify-between p-2'>
                    <SyntaxHighlighter language='typescript' style={nightOwl}>
                      {codeString}
                    </SyntaxHighlighter>
                    <button
                      onClick={() => handleCopy(codeString)}
                      className='absolute right-3 top-3 ml-2 text-white'
                    >
                      <BiCopy size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='flex flex-col justify-center'>
            <div className='relative  overflow-hidden rounded-lg'>
              <ReactAllPlayer
                autoPlay={true}
                muted={true}
                className='h-full w-full'
                sources={[
                  {
                    file: 'https://huggingface.co/datasets/light064/ReactAllPlayer/resolve/main/View_From_A_Blue_Moon_Trailer-1080p.mp4',
                    label: '1080p',
                  },
                  {
                    file: 'https://huggingface.co/datasets/light064/ReactAllPlayer/resolve/main/View_From_A_Blue_Moon_Trailer-720p.mp4',
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
            </div>

            <small className='flex-start mt-1 flex text-[0.55rem] text-neutral-800 opacity-40'>
              <a
                href='https://itunes.apple.com/au/movie/view-from-a-blue-moon/id1041586323'
                target='_blank'
                className='link'
              >
                View From A Blue Moon © Brainfarm
              </a>
            </small>

            <div className='mt-4 space-y-2'>
              <h3 className='font-semibold text-neutral-800 [font-size:var(--step--1)]'>
                Notable Features
              </h3>
              <ul className='list-disc space-y-2 pl-5 text-sm text-neutral-600'>
                <li>
                  💪 Accessible - full support for VTT captions and screen
                  readers
                </li>
                <li>
                  🔧 Customizable - make the player look how you want with the
                  markup you want
                </li>
                <li>📱 Responsive - works with any screen size</li>
                <li>
                  📹 Streaming - support for hls.js, and dash.js streaming
                  playback
                </li>
                <li>
                  🎛 API - toggle playback, volume, seeking, and more through a
                  standardized API
                </li>
                <li>
                  🔎 Fullscreen - supports native fullscreen with fallback to
                  "full window" modes
                </li>
                <li>📱 Playsinline - supports the playsinline attribute</li>
                <li>🖥 Picture-in-Picture - supports picture-in-picture mode</li>
                <li>⌨️ Shortcuts - supports keyboard shortcuts</li>
                <li>
                  🔄 Override components or build custom ones for easy
                  integration
                </li>
              </ul>
            </div>
          </div>
        </div>

        <footer className='fixed bottom-0 w-full bg-neutral-50 py-2 text-center text-gray-900'>
          © {new Date().getFullYear()} By{' '}
          <UnderlineLink href='https://asadk.dev/'>
            Asadbek Karimov
          </UnderlineLink>
        </footer>
      </div>
    </main>
  );
}
