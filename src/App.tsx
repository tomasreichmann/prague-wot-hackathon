import { Player } from "@remotion/player";
import { durationInFrames } from "./remotion/HackathonIntroVideo";
import HackathonIntroComposition from "./remotion/HackathonIntroComposition";
import Button from "./Button";
import { joinLink, lookingForATeamLink } from "./constants";

export default function App() {
  return (
    <div className="App font-body text-white overflow-x-hidden relative">
      <header className="[background-image:url('../public/ribbon.png')] sm:[background-image:url('../public/ribbon-large.png')] bg-bottom bg-no-repeat h-[160px] flex flex-col justify-center bg-cover xl:h-[280px] xl:min-h-[12vw] pt-[17px] pb-[18px]">
        <h1 className="m-0 flex-1 shrink flex flex-col justify-center items-center">
          <img
            className="block h-[125px] xl:h-[calc(100%-4vw)]"
            src="/logo-flat.svg"
            alt="Prague World of Tanks Hackathon 2022"
          />
        </h1>
      </header>

      <main className="text-center flex flex-col gap-5 pb-10 overflow-hidden relative md:items-center">
        <div className="flex flex-col gap-5 md:flex-row md:p-10 max-w-[1200px] ">
          <div className="relative md:w-1/2 md:flex-shrink-0 z-10">
            <Player
              component={HackathonIntroComposition}
              inputProps={{ text: "World" }}
              durationInFrames={durationInFrames}
              compositionWidth={1920}
              compositionHeight={1080}
              fps={30}
              style={{
                width: "100%",
              }}
              controls
            />
          </div>
          <div className="grid grid-cols-2 gap-2 [align-content:center]  lg:text-lg xl:text-xl">
            <div className="">
              <h2 className="text-primary font-bold">DATE</h2>
              <p className="text-white font-bold">21.-25. 11. 2022</p>
            </div>
            <div className="">
              <h2 className="text-primary font-bold">PLACE</h2>
              <p className="text-white font-bold">WG Prague Office</p>
            </div>
            <div className="">
              <h2 className="text-primary font-bold">TOPIC</h2>
              <p className="text-white font-bold">
                Make World of Tanks
                <wbr />
                Great Again
              </p>
            </div>
            <div className="">
              <h2 className="text-primary font-bold">TEAMS</h2>
              <p className="text-white font-bold">
                1-6 participants, remote friendly
              </p>
            </div>
            <div className="col-span-2">
              <h2 className="text-primary font-bold">PRIZES</h2>
              <p className="text-white font-bold">
                Cool prizes for all participants and special prize for the
                winning project. Winners are selected by participant votes.
              </p>
            </div>
          </div>
          <div className="flex flex-row justify-center px-5 gap-5 z-10 relative md:flex-col lg:text-lg xl:text-xl">
            <div className="text-center">
              <img src="/pizza.svg" alt="" className="w-[50px] mb-2 inline" />
              <h2 className="text-white font-bold">FOOD</h2>
            </div>
            <div className="text-center">
              <img src="/swag.svg" alt="" className="w-[50px] mb-2 inline" />
              <h2 className="text-white font-bold">SWAG</h2>
            </div>
            <div className="text-center">
              <img src="/no-work.svg" alt="" className="w-[50px] mb-2 inline" />
              <h2 className="text-white font-bold whitespace-nowrap">
                NO WORK
              </h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center relative lg:text-lg xl:text-xl">
          <div className="relative z-0">
            <Button
              Component="a"
              size="big"
              variant="primary"
              className="z-10 relative block"
              target="_blank"
              href={joinLink}
            >
              JOIN NOW!
            </Button>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rotate-cw pointer-events-none">
              <img src="/glare.png" alt="" className="max-w-none Glare-cw" />
              <img
                src="/glare.png"
                alt=""
                className="max-w-none Glare-ccw absolute left-0 top-0"
              />
            </div>
          </div>
          <Button
            Component="a"
            href={lookingForATeamLink}
            target="_blank"
            className="z-10 block"
          >
            Looking for a team
          </Button>
        </div>
        <div className="z-10 relative lg:pt-10 lg:text-lg xl:text-xl">
          <h2 className="text-primary font-bold">ORGANIZATION</h2>
          <p className="text-white">
            Tomáš Reichmann, Konstantin Kalinovský, Larisa Yurchenko,{" "}
            <span className="text-primary">Garant:</span>&ensp;Aleksey Dyakov
          </p>
        </div>
      </main>
    </div>
  );
}
