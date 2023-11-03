'use client';
import { useRef, useState } from 'react';
import { shorten } from '@/api/url.api';
import { TextFieldAtom } from './text-field.atom';
import ButtonAtom from './button.atom';

interface InputSectionState {
  longUrl: string;
  shortUrl?: string;
}

export default function InputSection() {
  const [state, setState] = useState<InputSectionState>({
    longUrl: '',
  });

  const longUrlInput = useRef<HTMLInputElement>(null);

  function setLongUrl(longUrl: string) {
    setState({
      ...state,
      longUrl,
    })
  }

  function setShortUrl(shortUrl: string) {
    setState({
      ...state,
      shortUrl,
    })
  }

  function onLongUrlInputChange(ev: React.ChangeEvent<HTMLInputElement>) {
    ev.preventDefault();
    setLongUrl(ev.target.value);
  }

  function onLongUrlSubmit(ev: React.MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();
    shorten(state.longUrl).then((res) => {
      longUrlInput.current!.value = '';
      setLongUrl('');
      setShortUrl(process.env.SHORT_URL + res['shortUrl']);
    });
  }

  function onCopyShortUrl(ev: React.MouseEvent<HTMLButtonElement>) {
    ev.preventDefault();
    if (state.shortUrl) {
      navigator.clipboard.writeText(state.shortUrl).then((value) => {
        alert('복사가 완료되었습니다.');
      });
    }
  }

  return (
    <div>
      <div className='m-4'>
        <input
          ref={longUrlInput}
          className='w-[25rem] h-10 border-0 rounded-lg px-2 disabled:bg-white'
          placeholder='주소 입력'
          onChange={onLongUrlInputChange}
        />
        <ButtonAtom text='제출' onClick={onLongUrlSubmit}/>
      </div>
      <div className='m-4'>
        <TextFieldAtom placeholder='단축 주소' value={state.shortUrl} />
        <ButtonAtom text='복사' onClick={onCopyShortUrl}/>
      </div>
    </div>
  );
}