import Image from 'next/image';

export default function Home() {

  return (
    <main className='bg-[#222222] w-full min-h-screen'>
      <header className="max-w-7xl mx-auto text-[#b5b8b8] flex items-center justify-between px-6 py-6">
        <div className="flex items-center">
          <h1 className="lg:text-2xl text-[#b5b8b8] text-sm font-bold">⚡️ ShipFast</h1>
          <div className='ml-4'>
            <a className="link link-hover ml-10 sm:ml-4 md:pl-24" href="#docs">
              Documentation
            </a>
          </div>
        </div>
      </header>

      <section className='mt-100'>
        <div className='grid grid-cols-1 sm:grid-cols-12'>
          <div className='col-span-7 place-self-center lg:ml-20 sm:ml-4  text-center sm:text-left'>
            <h1 className=' mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
              <span className='text-[#fffefe] bg-gradient-to-r'>Get started with templates, in <span className='text-neutral bg-neutral-500 text-[#271e1e]'> few seconds</span>
              </span>

            </h1>
            <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
              The NextJS boilerplate with all you need to build your project or any other web app. From idea to production in minutes

            </p>
            <div className=''>
              <button className='sm:px-2  lg:px-4 w-auto  custom-sm-padding px-7 py-4 sm:w-fit rounded-md mr-4 bg-gradient-to-br from-yellow-500 via-yellow-500 to-yellow-500 hover:bg-slate-200 text-white'>
                Get JS Template
              </button>
              <button className='sm:px-2 px-4 py-2 w-auto sm:w-fit rounded-md mr-4 bg-gradient-to-br from-yellow-500 via-yellow-500 to-yellow-500 hover-bg-slate-800 text-white mt-3'>
                <span className='block bg-[#121212] hover-bg-slate-800 rounded-full custom-sm-padding px-3 py-2'>
                  Get TSX template
                </span>
              </button>
            </div>
          </div>

          <div className='col-span-5 place-self-center mt-4 lg:mt-0'>
            <div className='rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
              <Image
                src='/github-repo.png'
                alt='ShipFast'
                className='absolute rounded-full transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                width={350}
                height={350}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}