import PrimaryButton from "@/components/buttons/PrimaryButton";
import SecondaryButton from "@/components/buttons/SecondaryButton";
import Container from "@/components/Container";
import { Hero, HeroSubTitle, HeroTitle } from "@/components/Hero";
import HeroImage from "@/components/HeroImage";
import { RightChevron } from "@/components/icons/RightChevron";
import { StarsIllustration } from "@/components/icons/StarsIllustration";
import { Clients } from "@/components/sections/Clients";
import { UnlikeAnyTool } from "@/components/sections/UnlikeAnyTool";

export default function Home() {
  return (
    <>
      <div className="overflow-hidden pb-[16.4rem] md:pb-[25.6rem]">
        <Container className="pt-[6.4rem]">
          <Hero>
            <SecondaryButton className="animate-fade-in opacity-0 [--animation-delay:200ms]" />
            <HeroTitle className="animate-fade-in opacity-0 [--animation-delay:400ms]">
              Linear is a better way
              <br className="md:block hidden" />
              <span> to build products</span>
            </HeroTitle>
            <HeroSubTitle className="animate-fade-in opacity-0 [--animation-delay:600ms]">
              Meet the new standard for modern software development.
              <br className="md:block hidden" />
              Streamline issues, sprints, and product roadmaps.
            </HeroSubTitle>
            <PrimaryButton
              className="text-md px-[2.4rem] h-[4.8rem] animate-fade-in opacity-0 [--animation-delay:800ms]"
              content={
                <>
                  <span className="mr-[0.8rem]">Get Started</span>{" "}
                  <RightChevron />
                </>
              }
            />
            <HeroImage />
          </Hero>
        </Container>
      </div>
      <Container>
        <Clients />
      </Container>
      <div
        className={
          "mask-radial-faded pointer-events-none relative z-[-1] my-[-12.8rem] h-[60rem] overflow-hidden [--color:#7877C6] before:absolute before:inset-0 before:bg-radial-faded before:opacity-[0.4] after:absolute after:top-1/2 after:-left-1/2 after:h-[142.8%] after:w-[200%] after:rounded-[50%] after:border-t after:border-[rgba(120,_119,_198,_0.4)] after:bg-background"
        }
      >
        <StarsIllustration />
      </div>
      <UnlikeAnyTool />
    </>
  );
}
