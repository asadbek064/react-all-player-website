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
    ]
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
        <meta name="description" content="A lightweight, customizable React player component that supports MP4, HLS, DASH streams and audio playback with a beautiful UI and accessibility features." />
        <meta name="keywords" content="React player, video player, HLS player, DASH player, audio player, streaming, React component, responsive player, accessible video, open source" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://reactallplayer.asadk.dev" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="ReactAllPlayer - Versatile Video & Audio React Player" />
        <meta property="og:description" content="A lightweight React player component with support for MP4, HLS, DASH streaming and audio playback." />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:title" content="ReactAllPlayer - Versatile Video & Audio React Player" />
        <meta property="twitter:description" content="A lightweight React player component with support for MP4, HLS, DASH streaming and audio playback." />

      </Head>

      <header className="border-b border-gray-100 py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-bold text-red-600">ReactAllPlayer</span>
          </div>
          <ButtonLink
            rightIcon={BsGithub}
            variant="dark"
            className="px-4 py-2 text-sm"
            href="https://github.com/asadbek064/react-all-player"
          >
            GitHub
          </ButtonLink>
        </div>
      </header>

      <main className="py-12">
        <div className="container mx-auto px-4">
          {/* Two column layout */}
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Player showcase */}
            <div className="order-2 md:order-1">

              {/* Source type toggle */}
              <div className="mb-4">
                <div className="flex justify-center md:justify-start">
                  <div className="inline-flex rounded-md shadow-sm" role="group">
                    {['mp4', 'hls', 'dash'].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setSourceType(type)}
                        className={`px-4 py-2 text-sm font-medium ${sourceType === type
                          ? 'bg-red-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                          } ${type === 'mp4'
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
                <p className="mt-2 text-center text-xs text-gray-500 md:text-left">
                  Select a source type to see how the player handles different formats
                </p>
              </div>


              <div className="overflow-hidden rounded-lg shadow-md">
                <ReactAllPlayer
                  autoPlay={true}
                  muted={false}
                  className="h-full w-full"
                  sources={videoSources[sourceType as keyof typeof videoSources]}
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
                  poster={sourceType === 'mp4' ? 'https://cdn.plyr.io/static/demo/View_From_A_Blue_Moon_Trailer-HD.jpg' : undefined}
                />
              </div>
              <small className="mt-1 block text-xs text-neutral-500">
                {sourceType === 'mp4' ? (
                  <a
                    href="https://itunes.apple.com/au/movie/view-from-a-blue-moon/id1041586323"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
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
            <div className="order-1 flex flex-col space-y-8 md:order-2">
              <div>
                <h1 className="mb-4 text-3xl font-bold text-gray-900">ReactAllPlayer</h1>
                <p className="mb-6 text-lg text-gray-600">
                  Simple React component that provides versatile and good looking UI video player.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 cursor-pointer">
                    <a href='https://ezy.ovh/hlsjs-repo-github'>HLS Support</a>
                  </span>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 cursor-pointer">
                    <a href='https://ezy.ovh/dashjs-repo-github'>DASH Support</a>
                  </span>
                  <span className="inline-flex items-center rounded-full bg-purple-100 px-2.5 py-0.5 text-xs font-medium text-purple-800">
                    Accessible
                  </span>
                  <span className="inline-flex items-center rounded-full bg-yellow-100 px-2.5 py-0.5 text-xs font-medium text-yellow-800">
                    Customizable
                  </span>
                  <span className="inline-flex items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-800">
                    Responsive
                  </span>
                </div>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-gray-900">Installation</h2>
                <div className="relative overflow-hidden rounded-lg bg-[#011627]">
                  <div className="flex items-center justify-between p-4">
                    <SyntaxHighlighter
                      language="bash"
                      style={nightOwl}
                      customStyle={{ background: 'transparent', padding: '0', margin: '0' }}
                    >
                      pnpm install react-all-player
                    </SyntaxHighlighter>
                    <button
                      onClick={() => handleCopy('npm install react-all-player')}
                      className="ml-2 text-white hover:text-gray-300"
                    >
                      <BiCopy size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-gray-900">Quick Usage</h2>
                <div className="relative overflow-hidden rounded-lg bg-[#011627] py-3">
                  <div className="flex items-center justify-between px-4">
                    <div className="flex space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-gray-400">demo.tsx</div>
                  </div>
                  <div className="relative mt-1 overflow-hidden px-4">
                    <SyntaxHighlighter
                      language="typescript"
                      style={nightOwl}
                      customStyle={{ background: 'transparent', padding: '0', margin: '0' }}
                    >
                      {codeString}
                    </SyntaxHighlighter>
                    <button
                      onClick={() => handleCopy(codeString)}
                      className="absolute right-4 top-1 text-white hover:text-gray-300"
                    >
                      <BiCopy size={20} />
                    </button>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="mb-3 text-xl font-semibold text-gray-900">Key Features</h2>
                <ul className="list-inside space-y-2 text-gray-600">
                  <li>
                    🎛 <strong>Rich API</strong> - toggle playback, volume, seeking, and more
                  </li>
                  <li>
                    💪 <strong>Accessible</strong> - full support for VTT captions and screen readers
                  </li>
                  <li>
                    📹 <strong>Streaming</strong> - support for hls.js and dash.js streaming playback
                  </li>
                  <li>
                    🔎 <strong>Fullscreen</strong> - native support with fallback to "full window"
                  </li>
                  <li>
                    🖥 <strong>Picture-in-Picture</strong> - supports PiP mode
                  </li>
                  <li>
                    📖 <strong>Multiple captions</strong> - support for multiple caption tracks
                  </li>
                  <li>
                    🔧 <strong>Customizable</strong> - make the player look how you want with the markup you want
                  </li>
                  <li>
                    ⌨️ <strong>Shortcuts</strong> - supports keyboard shortcuts
                  </li>
                  <li>
                    🖼️ <strong>Preview thumbnails</strong> - support for displaying preview thumbnails on hover
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Props Documentation */}
          <div className="mt-16">
            <h2 className="mb-6 text-2xl font-bold text-center text-gray-900">Available Props</h2>
            <div className="overflow-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Prop</th>
                    <th scope="col" className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Type</th>
                    <th scope="col" className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th scope="col" className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Default</th>
                    <th scope="col" className="px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider">Required</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs font-medium text-red-600">sources</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">Source[]</td>
                    <td className="px-4 py-3 text-gray-600">An array of sources contain <code>file</code>, <code>label</code> and <code>type</code></td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">null</td>
                    <td className="px-4 py-3 text-green-600 font-medium">true</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs font-medium text-red-600">subtitles</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">Subtitle[]</td>
                    <td className="px-4 py-3 text-gray-600">An array of subtitles contain <code>file</code>, <code>lang</code> and <code>language</code></td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">null</td>
                    <td className="px-4 py-3 text-gray-600">false</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs font-medium text-red-600">hlsRef</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">React.MutableRefObject&lt;Hls | null&gt;</td>
                    <td className="px-4 py-3 text-gray-600"><code>hls.js</code> instance ref</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">React.createRef()</td>
                    <td className="px-4 py-3 text-gray-600">false</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs font-medium text-red-600">dashRef</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">React.MutableRefObject&lt;DashJS.MediaPlayerClass | null&gt;</td>
                    <td className="px-4 py-3 text-gray-600"><code>dashjs</code> instance ref</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">React.createRef()</td>
                    <td className="px-4 py-3 text-gray-600">false</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs font-medium text-red-600">hlsConfig</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">Hls['config']</td>
                    <td className="px-4 py-3 text-gray-600"><code>hls.js</code> config</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">{ }</td>
                    <td className="px-4 py-3 text-gray-600">false</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs font-medium text-red-600">changeSourceUrl</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">(currentSourceUrl: string, source: Source){` => string`}</td>
                    <td className="px-4 py-3 text-gray-600">A function that modify given source url (<code>hls</code> only)</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">{`() => null`}</td>
                    <td className="px-4 py-3 text-gray-600">false</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs font-medium text-red-600">onHlsInit</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">(hls: Hls){` => void`}</td>
                    <td className="px-4 py-3 text-gray-600">A function that called after hls.js initialization</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">{`() => null`}</td>
                    <td className="px-4 py-3 text-gray-600">false</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs font-medium text-red-600">onDashInit</td>
                    <td className="px-4 py-3 font-mono text-xs  text-gray-600">(dash: DashJS.MediaPlayerClass){` => void`}</td>
                    <td className="px-4 py-3 text-gray-600">A function that called after dashjs initialization</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">{`() => null`}</td>
                    <td className="px-4 py-3 text-gray-600">false</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs font-medium text-red-600">onInit</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">(videoEl: HTMLVideoElement){` => void`}</td>
                    <td className="px-4 py-3 text-gray-600">A function that called after video initialization</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">{`() => null`}</td>
                    <td className="px-4 py-3 text-gray-600">false</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs font-medium text-red-600">ref</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">React.MutableRefObject&lt;HTMLVideoElement | null&gt;</td>
                    <td className="px-4 py-3 text-gray-600"><code>video</code> element ref</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">null</td>
                    <td className="px-4 py-3 text-gray-600">false</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs font-medium text-red-600">i18n</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">I18n</td>
                    <td className="px-4 py-3 text-gray-600">Translations</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">Default Translations</td>
                    <td className="px-4 py-3 text-gray-600">false</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs font-medium text-red-600">hotkeys</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">Hotkey[]</td>
                    <td className="px-4 py-3 text-gray-600">Hotkeys (shortcuts)</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">Default Hotkeys</td>
                    <td className="px-4 py-3 text-gray-600">false</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs font-medium text-red-600">components</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">Component[]</td>
                    <td className="px-4 py-3 text-gray-600">Customization components</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">Default components</td>
                    <td className="px-4 py-3 text-gray-600">false</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs font-medium text-red-600">thumbnail</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">string</td>
                    <td className="px-4 py-3 text-gray-600">Thumbnails on progress bar hover</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">null</td>
                    <td className="px-4 py-3 text-gray-600">false</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs font-medium text-red-600">poster</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">string</td>
                    <td className="px-4 py-3 text-gray-600">Video poster image on load</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-600">null</td>
                    <td className="px-4 py-3 text-gray-600">false</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-center">
              <a
                href="https://github.com/asadbek064/react-all-player/blob/main/README.md#props"
                className="text-red-600 hover:text-red-700 text-sm font-medium hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View full documentation on GitHub →
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-gray-100 py-6 text-center text-sm text-gray-600">
        <div className="container mx-auto px-4">
          © {new Date().getFullYear()} By{' '}
          <UnderlineLink href="https://asadk.dev/">
            Asadbek Karimov
          </UnderlineLink>
          <div className="mt-2">
            <a
              href="https://github.com/asadbek064/react-all-player"
              className="text-gray-600 hover:text-gray-900 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}