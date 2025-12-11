interface PropInfo {
  name: string;
  type: string;
  description: string;
  defaultValue: string;
  required: boolean;
}

const propsData: PropInfo[] = [
  {
    name: 'sources',
    type: 'Source[]',
    description: 'An array of sources contain file, label and type',
    defaultValue: 'null',
    required: true,
  },
  {
    name: 'subtitles',
    type: 'Subtitle[]',
    description: 'An array of subtitles contain file, lang and language',
    defaultValue: 'null',
    required: false,
  },
  {
    name: 'hlsRef',
    type: 'React.MutableRefObject<Hls | null>',
    description: 'hls.js instance ref',
    defaultValue: 'React.createRef()',
    required: false,
  },
  {
    name: 'dashRef',
    type: 'React.MutableRefObject<DashJS.MediaPlayerClass | null>',
    description: 'dashjs instance ref',
    defaultValue: 'React.createRef()',
    required: false,
  },
  {
    name: 'hlsConfig',
    type: 'Hls["config"]',
    description: 'hls.js config',
    defaultValue: '{}',
    required: false,
  },
  {
    name: 'changeSourceUrl',
    type: '(currentSourceUrl: string, source: Source) => string',
    description: 'A function that modify given source url (hls only)',
    defaultValue: '() => null',
    required: false,
  },
  {
    name: 'onHlsInit',
    type: '(hls: Hls) => void',
    description: 'Called after hls.js initialization',
    defaultValue: '() => null',
    required: false,
  },
  {
    name: 'onDashInit',
    type: '(dash: DashJS.MediaPlayerClass) => void',
    description: 'Called after dashjs initialization',
    defaultValue: '() => null',
    required: false,
  },
  {
    name: 'onInit',
    type: '(videoEl: HTMLVideoElement) => void',
    description: 'Called after video initialization',
    defaultValue: '() => null',
    required: false,
  },
  {
    name: 'ref',
    type: 'React.MutableRefObject<HTMLVideoElement | null>',
    description: 'video element ref',
    defaultValue: 'null',
    required: false,
  },
  {
    name: 'i18n',
    type: 'I18n',
    description: 'Translations',
    defaultValue: 'Default Translations',
    required: false,
  },
  {
    name: 'hotkeys',
    type: 'Hotkey[]',
    description: 'Hotkeys (shortcuts)',
    defaultValue: 'Default Hotkeys',
    required: false,
  },
  {
    name: 'components',
    type: 'Component[]',
    description: 'Customization components',
    defaultValue: 'Default components',
    required: false,
  },
  {
    name: 'thumbnail',
    type: 'string',
    description: 'Thumbnails on progress bar hover',
    defaultValue: 'null',
    required: false,
  },
  {
    name: 'poster',
    type: 'string',
    description: 'Video poster image on load',
    defaultValue: 'null',
    required: false,
  },
];

export const PropsTable = () => (
  <div className='mt-16'>
    <h2 className='mb-6 text-2xl font-bold text-center text-gray-900'>
      Available Props
    </h2>
    <div className='overflow-auto'>
      <table className='min-w-full divide-y divide-gray-200 text-sm'>
        <thead className='bg-gray-50'>
          <tr>
            {['Prop', 'Type', 'Description', 'Default', 'Required'].map(
              (header) => (
                <th
                  key={header}
                  scope='col'
                  className='px-4 py-3 text-left font-medium text-gray-500 uppercase tracking-wider'
                >
                  {header}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody className='bg-white divide-y divide-gray-200'>
          {propsData.map(
            ({ name, type, description, defaultValue, required }) => (
              <tr key={name}>
                <td className='px-4 py-3 font-mono text-xs font-medium text-red-600'>
                  {name}
                </td>
                <td className='px-4 py-3 font-mono text-xs text-gray-600'>
                  {type}
                </td>
                <td className='px-4 py-3 text-gray-600'>{description}</td>
                <td className='px-4 py-3 font-mono text-xs text-gray-600'>
                  {defaultValue}
                </td>
                <td
                  className={`px-4 py-3 font-medium ${
                    required ? 'text-green-600' : 'text-gray-600'
                  }`}
                >
                  {required.toString()}
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
    <div className='mt-4 text-center'>
      <a
        href='https://github.com/asadbek064/react-all-player/blob/main/README.md#props'
        className='text-red-600 hover:text-red-700 text-sm font-medium hover:underline'
        target='_blank'
        rel='noopener noreferrer'
      >
        View full documentation on GitHub →
      </a>
    </div>
  </div>
);
