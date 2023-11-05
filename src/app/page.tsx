import Image from 'next/image'
import banner from '../images/banner.png'
import github from '../images/github.svg'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='grid grid-cols-1'>
      <div className='max-h-screen flex flex-col justify-center w-full place-items-center gap-5 pb-8'>
        <div>
          <Image
            src={banner}
            alt="ollm.chat Banner"
            sizes="100vw"
            style={{
              height: 'auto',
              maxHeight: "450px"
            }}
          />
        </div>
        <div >
          <Link href={"https://github.com/arunk140/ollm.chat"} className='grid grid-cols-[auto_1fr] gap-5 text-center place-items-center'>
            <Image
              src={github}
              alt="View on Github"
              sizes="100vw"
              style={{
                height: 'auto',
                maxHeight: "112px"
              }}
            />
            <div className='font-bold'>
              View Source on GitHub
            </div>
          </Link>
        </div>
        <div>
          <a href='https://play.google.com/store/apps/details?id=com.arunk140.ollmchat&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1'><img alt='Get it on Google Play' className=' max-h-28' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png'/></a>
        </div>
        <div className='text-center text-sm'>
          <p>Google Play and the Google Play logo are trademarks of Google LLC.</p>
        </div>
      </div>
      <hr className='py-3 opacity-20 text-center'/>
      <div className='px-3 lg:px-40 flex flex-col gap-5 pb-8'>
        <h1 className='text-lg font-bold'>ollm.chat Android Application</h1>
        <p>ollm.chat, a minimalistic user interface that connects you to powerful Language Models right from your device. Whether you want to chat with a local Language Model over LAN or connect to OpenAI.</p>
        <p>Local Language Model Connectivity: Connect to Local LMs on your LAN network, including LM Studio's Local Server. Harness the power of LMs for your personal or professional needs right at your fingertips.</p>
        <p>OpenAI Integration: Connect to OpenAI using your own API keys to access state-of-the-art language models. Leverage OpenAI's capabilities for a wide range of tasks and applications.</p>
        <p>Data Privacy: We take your data privacy seriously. ollm.chat stores all your chats and configurations locally, ensuring that none of your private data leaves the application. The choice of which APIs to connect to is entirely yours, giving you full control over your data.</p>
        <p>Open Source: ollm.chat is an open-source project available on GitHub. We believe in transparency and community collaboration. You can access the source code, contribute to its development, and even customize the app to suit your specific needs.</p>
      </div>
    </div>
  )
}
