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

import { PropsTable } from '@/app/components/prop';
import YouTubeVimeoDemo from '@/app/components/youtube-vimeo-demo';

export default function HomePage() {
  const [sourceType, setSourceType] = React.useState('mp4');
  const videoSources = {
    mp4: [
      {
        file: 'https://ezy.ovh/sample-1080.mp4',
        label: '1080p',
      },
      {
        file: 'https://ezy.ovh/sample-720.mp4',
        label: '720p',
      },
    ],
    hls: [
      {
        file: 'https://ezy.ovh/mux-test-stream.m3u8',
        label: 'HLS',
        type: 'hls',
      },
    ],
    dash: [
      {
        file: 'https://ezy.ovh/akamai-bbb_30fps.mpd',
        label: 'DASH',
        type: 'dash',
      },
    ],
  };

  const getCodeString = () => {
    if (sourceType === 'mp4') {
      return `import ReactAllPlayer from 'react-all-player'

<ReactAllPlayer
  sources={[
    {
      file: 'https://ezy.ovh/sample-1080.mp4',
      label: '1080p'
    },
    {
      file: 'https://ezy.ovh/sample-720.mp4',
      label: '720p'
    }
  ]}
  subtitles={[
    {
      lang: 'en',
      language: 'English',
      file: 'https://ezy.ovh/english-vtt',
    }
  ]}
    poster="https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jp"
/>`;
    } else if (sourceType === 'hls') {
      return `import ReactAllPlayer from 'react-all-player'
  
<ReactAllPlayer
  sources={[
    {
      file: 'https://ezy.ovh/mux-test-stream.m3u8',
      label: 'HLS',
      type: 'hls'
    }
  ]}
/>`;
    } else {
      return `import ReactAllPlayer from 'react-all-player'
  
<ReactAllPlayer
  sources={[
    {
      file: 'https://ezy.ovh/akamai-bbb_30fps.mpd',
      label: 'DASH',
      type: 'dash'
    }
  ]}
/>`;
    }
  };

  const codeString = getCodeString();

  // Function to handle copying text to clipboard
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <Head>
        <title>ReactAllPlayer</title>
        <meta
          name='description'
          content='A lightweight, customizable React player component that supports MP4, HLS, DASH streams and audio playback with a beautiful UI and accessibility features.'
        />
        <meta
          name='keywords'
          content='React player, video player, HLS player, DASH player, audio player, streaming, React component, responsive player, accessible video, open source, YouTube, Vimeo'
        />

        {/* Canonical URL */}
        <link rel='canonical' href='https://reactallplayer.asadk.dev' />

        {/* Open Graph / Facebook */}
        <meta property='og:type' content='website' />
        <meta
          property='og:title'
          content='ReactAllPlayer - Versatile Video & Audio React Player'
        />
        <meta
          property='og:description'
          content='A lightweight React player component with support for MP4, HLS, DASH streaming and audio playback.'
        />

        {/* Twitter */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta
          property='twitter:title'
          content='ReactAllPlayer - Versatile Video & Audio React Player'
        />
        <meta
          property='twitter:description'
          content='A lightweight React player component with support for MP4, HLS, DASH streaming and audio playback.'
        />
      </Head>

      <header className='border-b border-gray-100 py-4'>
        <div className='container mx-auto flex items-center justify-between px-4'>
          <div className='flex items-center space-x-3'>
            <span className='text-2xl font-bold text-red-600'>
              ReactAllPlayer
            </span>
          </div>
          <ButtonLink
            rightIcon={BsGithub}
            variant='dark'
            className='px-4 py-2 text-sm'
            href='https://github.com/asadbek064/react-all-player'
          >
            GitHub
          </ButtonLink>
        </div>
      </header>

      <main className='py-12'>
        <div className='container mx-auto px-4'>
          {/* Two column layout */}
          <div className='grid grid-cols-1 gap-12 md:grid-cols-2'>
            {/* Player showcase */}
            <div className='order-2 md:order-1'>
              {/* Source type toggle */}
              <div className='mb-4'>
                <div className='flex justify-center md:justify-start'>
                  <div
                    className='inline-flex rounded-md shadow-sm'
                    role='group'
                  >
                    {['mp4', 'hls', 'dash'].map((type) => (
                      <button
                        key={type}
                        type='button'
                        onClick={() => setSourceType(type)}
                        className={`px-4 py-2 text-sm font-medium ${
                          sourceType === type
                            ? 'bg-red-600 text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-50'
                        } ${
                          type === 'mp4'
                            ? 'rounded-l-lg'
                            : type === 'dash'
                            ? 'rounded-r-lg'
                            : ''
                        } border border-gray-200`}
                      >
                        {type.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>
                <p className='mt-2 text-center text-xs text-gray-500 md:text-left'>
                  Select a source type to see how the player handles different
                  formats
                </p>
              </div>

              <div className='overflow-hidden rounded-lg shadow-md'>
                <ReactAllPlayer
                  autoPlay={false}
                  muted={false}
                  className='h-full w-full'
                  sources={
                    videoSources[sourceType as keyof typeof videoSources]
                  }
                  subtitles={
                    sourceType === 'mp4'
                      ? [
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
                        ]
                      : undefined
                  }
                  poster={
                    sourceType === 'mp4'
                      ? 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg'
                      : undefined
                  }
                />
              </div>
              <small className='mt-1 block text-xs text-neutral-500'>
                {sourceType === 'mp4' ? (
                  <a
                    href='https://itunes.apple.com/au/movie/view-from-a-blue-moon/id1041586323'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='hover:underline'
                  >
                    View From A Blue Moon © Brainfarm
                  </a>
                ) : sourceType === 'hls' ? (
                  <span>HLS sample stream from Mux</span>
                ) : (
                  <span>DASH sample stream from Akamai</span>
                )}
              </small>
            </div>

            {/* Info and Installation */}
            <div className='order-1 flex flex-col space-y-8 md:order-2'>
              <div>
                <h1 className='mb-4 text-3xl font-bold text-gray-900'>
                  ReactAllPlayer
                </h1>
                <p className='mb-6 text-lg text-gray-600'>
                  Simple React component that provides versatile and good
                  looking UI video player.
                </p>
                <div className='flex flex-wrap gap-2'>
                  <span className='inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 cursor-pointer'>
                    <a href='https://ezy.ovh/hlsjs-repo-github'>HLS Support</a>
                  </span>
                  <span className='inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 cursor-pointer'>
                    <a href='https://ezy.ovh/dashjs-repo-github'>
                      DASH Support
                    </a>
                  </span>
                  <span className='inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800'>
                    Accessible
                  </span>
                  <span className='inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800'>
                    Customizable
                  </span>
                  <span className='inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800'>
                    Responsive
                  </span>
                </div>
              </div>

              <div>
                <h2 className='mb-3 text-xl font-semibold text-gray-900'>
                  Installation
                </h2>
                <div className='relative overflow-hidden rounded-lg bg-[#011627]'>
                  <div className='flex items-center justify-between p-4'>
                    <SyntaxHighlighter
                      language='bash'
                      style={nightOwl}
                      customStyle={{
                        background: 'transparent',
                        padding: '0',
                        margin: '0',
                      }}
                    >
                      pnpm install react-all-player
                    </SyntaxHighlighter>
                    <button
                      onClick={() => handleCopy('npm install react-all-player')}
                      className='ml-2 text-white hover:text-gray-300'
                    >
                      <BiCopy size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h2 className='mb-3 text-xl font-semibold text-gray-900'>
                  Quick Usage
                </h2>
                <div className='relative overflow-hidden rounded-lg bg-[#011627] py-3'>
                  <div className='flex items-center justify-between px-4'>
                    <div className='flex space-x-2'>
                      <div className='h-3 w-3 rounded-full bg-red-500'></div>
                      <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
                      <div className='h-3 w-3 rounded-full bg-green-500'></div>
                    </div>
                    <div className='text-xs text-gray-400'>demo.tsx</div>
                  </div>
                  <div className='relative mt-1 overflow-hidden px-4'>
                    <SyntaxHighlighter
                      language='typescript'
                      style={nightOwl}
                      customStyle={{
                        background: 'transparent',
                        padding: '0',
                        margin: '0',
                      }}
                    >
                      {codeString}
                    </SyntaxHighlighter>
                    <button
                      onClick={() => handleCopy(codeString)}
                      className='absolute right-4 top-1 text-white hover:text-gray-300'
                    >
                      <BiCopy size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h2 className='mb-3 text-xl font-semibold text-gray-900'>
                  Key Features
                </h2>
                <ul className='list-inside space-y-2 text-gray-600'>
                  <li>
                    🎛 <strong>Rich API</strong> - toggle playback, volume,
                    seeking, and more
                  </li>
                  <li>
                    💪 <strong>Accessible</strong> - full support for VTT
                    captions and screen readers
                  </li>
                  <li>
                    📹 <strong>Streaming</strong> - support for hls.js and
                    dash.js streaming playback
                  </li>
                  <li>
                    🔎 <strong>Fullscreen</strong> - native support with
                    fallback to "full window"
                  </li>
                  <li>
                    🖥 <strong>Picture-in-Picture</strong> - supports PiP mode
                  </li>
                  <li>
                    📖 <strong>Multiple captions</strong> - support for multiple
                    caption tracks
                  </li>
                  <li>
                    🔧 <strong>Customizable</strong> - make the player look how
                    you want with the markup you want
                  </li>
                  <li>
                    ⌨️ <strong>Shortcuts</strong> - supports keyboard shortcuts
                  </li>
                  <li>
                    🖼️ <strong>Preview thumbnails</strong> - support for
                    displaying preview thumbnails on hover
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <YouTubeVimeoDemo />
          <PropsTable />
        </div>
      </main>

      <footer className='border-t border-gray-100 py-6 text-center text-sm text-gray-600'>
        <div className='container mx-auto px-4'>
          © {new Date().getFullYear()} By{' '}
          <UnderlineLink href='https://asadk.dev/'>
            Asadbek Karimov
          </UnderlineLink>
          <div className='mt-2'>
            <a
              href='https://github.com/asadbek064/react-all-player'
              className='text-gray-600 hover:text-gray-900 hover:underline'
            >
              View on GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
