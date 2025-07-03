import Image from 'next/image'
 
export default function Page() {
  return <><Image src="/profile.jpg" alt="Profile" width={100} height={100} />    <h1 className="text-3xl font-bold underline">      Hello world!    </h1></>
}