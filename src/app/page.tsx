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
      file: 'https://ezy.ovh/sample-video',
      label: '1080p'
    },
    {
      file: 'https://ezy.ovh/sample-video-720',
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
/>`;

  // Function to handle copying text to clipboard
  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <Head>
        <title>ReactAllPlayer</title>
        <meta name="description" content="Simple React component that provides versatile and good looking UI video player." />
      </Head>

      <header className="border-b border-gray-100 py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center space-x-3">
            <div className="h-8 w-8 rounded-md bg-red-600"></div>
            <span className="text-xl font-bold">ReactAllPlayer</span>
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
              <div className="overflow-hidden rounded-lg shadow-md">
                <ReactAllPlayer
                  autoPlay={true}
                  muted={true}
                  className="h-full w-full"
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
              <small className="mt-1 block text-xs text-neutral-500">
                <a
                  href="https://itunes.apple.com/au/movie/view-from-a-blue-moon/id1041586323"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  View From A Blue Moon © Brainfarm
                </a>
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
                  <span className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800">
                    HLS Support
                  </span>
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
                    DASH Support
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
                    <div className="text-xs text-gray-400">example.tsx</div>
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
                    <td className="px-4 py-3 font-mono text-xs">(currentSourceUrl: string, source: Source){` => string`}</td>
                    <td className="px-4 py-3 text-gray-600">A function that modify given source url (<code>hls</code> only)</td>
                    <td className="px-4 py-3 font-mono text-xs">{`() => null`}</td>
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
                    <td className="px-4 py-3 font-mono text-xs">(dash: DashJS.MediaPlayerClass){` => void`}</td>
                    <td className="px-4 py-3 text-gray-600">A function that called after dashjs initialization</td>
                    <td className="px-4 py-3 font-mono text-xs">{`() => null`}</td>
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