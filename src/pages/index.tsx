import { Link } from 'phosphor-react'
import { Button } from '@/components/button'

export default function Home() {
  return (
    <div className="font-text font-medium antialiased text-base text-gray-800 min-h-screen">
      <header className="w-full bg-magenta-500 h-20"></header>
      <main>
        <div className="w-full bg-gray-100">
          <div className="mx-32 py-16 flex justify-between items-center">
            <div className="flex flex-col gap-8 text-center w-[36.375rem]">
              <h1 className="font-bold text-5xl text-gray-900 leading-snug">
                Making the world a{' '}
                <span className="text-magenta-500">better place</span> is just
                one click away!
              </h1>
              <p className="text-3xl">
                Help charitable organizations raise funds, or volunteer to work
                with them
              </p>
              <div>
                <Button>Browse all orgs</Button>
              </div>
            </div>
            <img src="/hero-image.svg" alt="" />
          </div>
        </div>
        <section className="w-full h-[28.875rem] relative bg-white">
          <div className="ml-32 h-full flex justify-between items-center">
            <div className="w-[36.375rem]">
              <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold text-5xl text-gray-900">MSF</h2>
                  <a href="#">
                    <Link size={32} weight="bold" />
                  </a>
                </div>
                <p className="text-3xl text-gray-700">
                  Provide humanitarian assistance to the people who need it
                  most.
                </p>
              </div>
              <div className="flex gap-6 col-span-1">
                <Button size="sm">DONATE</Button>
                <Button intent="secondary" size="sm">
                  VOLUNTEER
                </Button>
              </div>
            </div>
            <img
              src="/msf.png"
              alt=""
              className="absolute right-0 top-0 h-full object-contain"
            />
          </div>
        </section>
        <section className="w-full h-[28.875rem] relative bg-gray-100">
          <div className="ml-32 h-full flex justify-between items-center">
            <div className="w-[36.375rem]">
              <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold text-5xl text-gray-900">
                    Greenpeace
                  </h2>
                  <a href="#">
                    <Link size={32} weight="bold" />
                  </a>
                </div>
                <p className="text-3xl text-gray-700">
                  Help on the fight to protect the planet.
                </p>
              </div>
              <div className="flex gap-6 col-span-1">
                <Button size="sm">DONATE</Button>
                <Button intent="secondary" size="sm">
                  VOLUNTEER
                </Button>
              </div>
            </div>
            <img
              src="/greenpeace.png"
              alt=""
              className="absolute right-0 top-0 h-full object-contain"
            />
          </div>
        </section>
        <section className="w-full h-[28.875rem] relative bg-white">
          <div className="ml-32 h-full flex justify-between items-center">
            <div className="w-[36.375rem]">
              <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold text-5xl text-gray-900">
                    Team seas
                  </h2>
                  <a href="#">
                    <Link size={32} weight="bold" />
                  </a>
                </div>
                <p className="text-3xl text-gray-700">
                  Remove plastic from the ocean
                </p>
              </div>
              <div className="flex gap-6 col-span-1">
                <Button size="sm">DONATE</Button>
                <Button intent="secondary" size="sm">
                  VOLUNTEER
                </Button>
              </div>
            </div>
            <img
              src="/team-seas.png"
              alt=""
              className="absolute right-0 top-0 h-full object-contain"
            />
          </div>
        </section>
        <section className="w-full h-[28.875rem] relative bg-gray-100">
          <div className="ml-32 h-full flex justify-between items-center">
            <div className="w-[36.375rem]">
              <div className="mb-12">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="font-semibold text-5xl text-gray-900">WWF</h2>
                  <a href="#">
                    <Link size={32} weight="bold" />
                  </a>
                </div>
                <p className="text-3xl text-gray-700">
                  Save endangered species.
                </p>
              </div>
              <div className="flex gap-6 col-span-1">
                <Button size="sm">DONATE</Button>
                <Button intent="secondary" size="sm">
                  VOLUNTEER
                </Button>
              </div>
            </div>
            <img
              src="/wwf.png"
              alt=""
              className="absolute right-0 top-0 h-full object-contain"
            />
          </div>
        </section>
        <section className="px-32 py-32 bg-white grid grid-cols-3">
          <div className="flex flex-col items-center">
            <strong className="text-9xl text-gray-900">269</strong>
            <h3 className="font-semibold text-7xl text-gray-900 mb-8">
              Thousand
            </h3>
            <p className="text-3xl text-gray-900 text-center">
              of tons of trash float on the ocean
            </p>
          </div>
          <div className="flex flex-col items-center">
            <strong className="text-9xl text-gray-900">828</strong>
            <h3 className="font-semibold text-7xl text-gray-900 mb-8">
              Million
            </h3>
            <p className="text-3xl text-gray-900 text-center">
              people suffer from hunger
            </p>
          </div>
          <div className="flex flex-col items-center">
            <strong className="text-9xl text-gray-900">16</strong>
            <h3 className="font-semibold text-7xl text-gray-900 mb-8">
              Thousand
            </h3>
            <p className="text-3xl text-gray-900 text-center">
              animal species are endangered
            </p>
          </div>
        </section>
      </main>
      <footer className="px-32 py-32 bg-gray-100 flex flex-col items-center">
        <div className="max-w-[56.25rem] flex flex-col items-center  m-auto">
          <span className="font-bold text-7xl text-gray-900 text-center mb-12">
            Want to make a difference on the world?
          </span>
          <p className="text-3xl text-gray-700 text-center mb-12">
            Choose from over 7000 charity organizations around the globe
          </p>
          <div className="max-w-[28.75rem] w-full">
            <Button>Browse all orgs</Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
