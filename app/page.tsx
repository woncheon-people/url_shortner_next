import InputSection from '@/components/input.section';
import { TitleAtom } from '@/components/title.atom';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24 bg-blue-50'>
      <TitleAtom />
      <InputSection />
    </main>
  )
}
