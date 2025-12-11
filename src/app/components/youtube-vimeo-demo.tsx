'use client';
import dynamic from 'next/dynamic';
import * as React from 'react';
import { BiCopy } from 'react-icons/bi';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const ReactAllPlayer = dynamic(() => import('react-all-player'), {
  ssr: false,
});

export default function YouTubeVimeoDemo() {
  const platforms = ['youtube', 'vimeo'] as const;
  type Platform = (typeof platforms)[number];
  const [platform, setPlatform] = React.useState<Platform>('youtube');

  const players = {
    youtube: {
      id: 'yt-1',
      file: 'https://www.youtube.com/watch?v=bTqVqk7FSmY',
      type: 'youtube' as const,
    },
    vimeo: {
      id: 'vm-1',
      file: 'https://vimeo.com/76979871',
      type: 'vimeo' as const,
    },
  };

  const codeSnippets = {
    youtube: `
// NextJS
const ReactAllPlayer = dynamic(() => import('react-all-player'), {
  ssr: false,
});

// React
import ReactAllPlayer from 'react-all-player'

// Using YouTube video ID
<ReactAllPlayer
  sources={[{ file: 'bTqVqk7FSmY', type: 'youtube' }]}
  className="w-full h-64"
/>

// Or using full YouTube URL
<ReactAllPlayer
  sources={[{ file: 'https://www.youtube.com/watch?v=bTqVqk7FSmY' }]}
  className="w-full h-64"
/>`,
    vimeo: `
// NextJS
const ReactAllPlayer = dynamic(() => import('react-all-player'), {
  ssr: false,
});

// React
import ReactAllPlayer from 'react-all-player'

// Using Vimeo video ID
<ReactAllPlayer
  sources={[{ file: '76979871', type: 'vimeo' }]}
  className="w-full h-64"
/>

// Or using full Vimeo URL
<ReactAllPlayer
  sources={[{ file: 'https://vimeo.com/76979871' }]}
  className="w-full h-64"
/>`,
  };

  const handleCopy = (text: string) => navigator.clipboard.writeText(text);

  return (
    <main className='py-12'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {/* Player Column */}
          <div>
            <div className='mb-4'>
              <div className='flex justify-center md:justify-start'>
                <div className='inline-flex rounded-md shadow-sm' role='group'>
                  {platforms.map((p, i) => (
                    <button
                      key={p}
                      type='button'
                      onClick={() => setPlatform(p)}
                      className={`px-4 py-2 text-sm font-medium border border-gray-200 ${
                        platform === p
                          ? 'bg-red-600 text-white'
                          : 'bg-white text-gray-700 hover:bg-gray-50'
                      } ${
                        i === 0
                          ? 'rounded-l-lg'
                          : i === platforms.length - 1
                          ? 'rounded-r-lg'
                          : ''
                      }`}
                    >
                      {p.toUpperCase()}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className='overflow-hidden rounded-lg shadow-md'>
              <ReactAllPlayer
                key={platform}
                className='h-full w-full'
                id={players[platform].id}
                autoPlay={false}
                sources={[
                  {
                    file: players[platform].file,
                    type: players[platform].type,
                  },
                ]}
              />
            </div>
          </div>

          {/* Code Column */}
          <div className='relative overflow-hidden rounded-lg bg-[#011627] py-3'>
            <div className='flex items-center justify-between px-4'>
              <div className='flex space-x-2'>
                <div className='h-3 w-3 rounded-full bg-red-500'></div>
                <div className='h-3 w-3 rounded-full bg-yellow-500'></div>
                <div className='h-3 w-3 rounded-full bg-green-500'></div>
              </div>
              <div className='text-xs text-gray-400'>{platforms}.tsx</div>
            </div>
            <div className='relative mt-1 overflow-hidden px-4'>
              <SyntaxHighlighter
                language='typescript'
                style={nightOwl}
                customStyle={{
                  background: 'transparent',
                  padding: 0,
                  margin: 0,
                }}
              >
                {codeSnippets[platform]}
              </SyntaxHighlighter>
              <button
                onClick={() => handleCopy(codeSnippets[platform])}
                className='absolute right-4 top-1 text-white hover:text-gray-300'
              >
                <BiCopy size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
