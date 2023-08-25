import Button from "./Button";
import { infoChannelLink, joinLink, lookingForATeamLink } from "./constants";

export default function App() {
  return (
    <div className="App font-body text-white overflow-x-hidden relative">
      <header className="h-[360px] relative overflow-hidden">
        <h1 className="m-0 mt-10 ml-5 flex flex-col uppercase leading-[0.85] [letter-spacing:-0.05em] font-bold text-secondary-dark [text-shadow:0px_0px_16px_#ECD7B7]">
          <span className="text-[30px]">Prague</span>
          <span className="text-[30px]">World of Tanks</span>
          <span className="text-[41px]">Hackathon</span>
          <span className="text-[60px]">2023</span>
        </h1>
        <img
          src="/header.png"
          alt=""
          className="h-full w-full object-cover -z-10 absolute left-0 top-0"
        />
      </header>
      <main className="flex flex-col text-text">
        <div className="flex flex-col gap-2 px-5 mt-2">
          <div className="flex flex-row gap-2">
            <Button href={joinLink} className="flex-1">
              Join now!
            </Button>
            <Button
              href={lookingForATeamLink}
              className="flex-1"
              variant="secondary"
            >
              I need a team
            </Button>
          </div>

          <div className="px-5 py-2 bg-primary-dark text-lg leading-none text-center uppercase [letter-spacing:-0.05em] font-bold">
            Roll out your own World of Tanks innovation!
          </div>

          <div className="px-5 py-2 flex flex-row gap-2 justify-center items-center bg-primary text-2xl leading-none text-center uppercase [letter-spacing:-0.05em] font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
              />
            </svg>
            20.-22. 9. 2023
          </div>

          <div className="px-5 py-5 flex flex-col gap-2 items-stretch bg-secondary leading-tight text-sm">
            <h2 className="text-xl font-bold uppercase m-0"> Categories</h2>
            <p>
              <strong>Tank It Easy</strong> &ndash; Simplify the new player or
              win-back experience
            </p>
            <p>
              <strong>Casual Cruise</strong> &ndash; Bring fresh casual gameplay
            </p>
            <p>
              <strong>Subscription Surge</strong> &ndash; Improve our premium
              products
            </p>
            <p>
              <strong>Out of the Box</strong> &ndash; Blow our minds with
              something unexpected
            </p>
          </div>
        </div>

        <section className="p-0 relative flex flex-col">
          <div className="px-10 pt-10 pb-5 flex flex-col gap-2 items-stretch bg-primary-dark mt-5">
            <h2 className="text-xl font-bold uppercase m-0">
              How does it work
            </h2>
            <ol className="leading-tight text-sm list-decimal pl-4">
              <li>Find a team or make your own</li>
              <li>Pick a team name and discuss an idea for a project</li>
              <li>Each team member fills in the JOIN NOW! form</li>
              <li>Wait for the start of the event</li>
              <li>Design and implement your project idea</li>
              <li>Present your project at the closing ceremony</li>
              <li>Vote for a project in each category</li>
              <li>
                Everyone gets a prize for participation and winners of each
                category get a special prize
              </li>
            </ol>
          </div>
          <div className="h-10 -mb-10 z-10 bg-[linear-gradient(180deg,#963342_0%,#96334200_100%)]"></div>
          <img
            src="/pimped-tank.jpg"
            alt="Pimped out tank"
            className="block w-auto"
          />
        </section>
      </main>

      <main className=""></main>
    </div>
  );
}
